/* eslint-disable no-undef */
/* eslint-disable jest/no-done-callback */
/* eslint-disable jest/expect-expect */
import React from 'react';
import { mount, shallow } from 'enzyme';
import { loadFeature, defineFeature } from 'jest-cucumber';
import App from '../App';
import CitySearch from '../CitySearch';
import { extractLocations } from '../api';
import { mockData } from '../mock-data';

const feature = loadFeature('./src/features/filterEventsByCity.feature');
// feature 1 filter events by city
defineFeature(feature, (test) => {
  // scenario 1 when a user has not searched for a city, show all events
  test('When user hasn’t searched for a city, show upcoming events from all cities',
    ({
      given,
      when,
      then,
    }) => {
    // empty because no search has been made yet
      given('user hasn’t searched for any city', () => {
      });

      let AppWrapper;
      when('the user opens the app', () => {
        AppWrapper = shallow(<App />);
      });

      then('A list of all upcoming events comes up', () => {
        AppWrapper.update();
        expect(AppWrapper.state('events')).toHaveLength(2);
      });
    });

  // Feature file has a scenario titled "User should see a list of suggestions
  // when they search for a city", but no match found in step definitions.
  // Try adding the following code:
  // scenario 2
  test('User should see a list of suggestions when they search for a city',
    ({
      given,
      when,
      then,
    }) => {
      let CitySearchWrapper;
      const locations = extractLocations(mockData);
      given('the user is in the main page', () => {
        CitySearchWrapper = shallow(<CitySearch updateEvents={() => {}} locations={locations} />);
      });

      when('the user starts searching for a specific city', () => {
        CitySearchWrapper.find('.city').simulate('change', { target: { value: 'Berlin' } });
      });

      then('the user will see a list of suggested cites that match what the user has typed', () => {
        expect(CitySearchWrapper.find('.suggestions li')).toHaveLength(2);
      });
    });

  // Feature file has a scenario titled "User can select a city
  // from the suggested list", but no match found in step definitions.
  // Try adding the following code:

  test('User can select a city from the suggested list',
    ({
      given,
      and,
      when,
      then,
    }) => {
      let AppWrapper;
      given('the user is typing “ example- Berlin, Germany” in the search box and a list of matching cities shows up', () => {
        AppWrapper = mount(<App />);
        AppWrapper.find('.city').simulate('change', { target: { value: 'Berlin' } });
      });

      and('the list of suggested cities is showing', () => {
        AppWrapper.update();
        expect(AppWrapper.find('.suggestions li')).toHaveLength(1);
      });

      when('the user selects a city from the suggested list', () => {
        const CitySearchWrapper = AppWrapper.find(CitySearch);
        AppWrapper.find('.suggestions li').at(0).simulate('click');
        CitySearchWrapper.setState({ query: 'Berlin, Germany' });
      });

      then('it will take the user to another screen with the selected city along with a list of upcoming events', () => {
        const CitySearchWrapper = AppWrapper.find(CitySearch);
        expect(CitySearchWrapper.state('query')).toBe('Berlin, Germany');
      });

      and('the user should receive a list of upcoming events in that city', () => {
        expect(AppWrapper.state('events')).toHaveLength(2);
      });
    });
});
