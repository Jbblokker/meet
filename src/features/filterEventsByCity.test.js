import React from 'react';
import App from '../App';
import CitySearch from '../CitySearch';
import { mount, shallow } from 'enzyme';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { mockData } from '../mock-data';
import { extractLocations, getEvents } from '../api';

const feature = loadFeature('./src/features/filterEventsByCity.feature');
//feature 1 filter events by city
defineFeature(feature, test => {
    //scenario 1 when a user has not searched for a city, show all events 
        test('When user hasn’t searched for a city, show upcoming events from all cities.',
         ({ given,
             when,
             then 
        }) => {
        //empty because no search has been made yet
          given('user hasn’t searched for any city', () => {
      
          });
          let AppWrapper;
          when('the user opens the app', () => {
            AppWrapper = mount(<App />);
        });
      
          then('the user should see the list of upcoming events.', () => {
      
          });
        });
      //scenario 2 user should see a lits of suggestions when the search for a city
        test('User should see a list of suggestions when they search for a city', 
        ({ given,
           when,
           then 
        }) => {
          given(' the user is in the main page', () => {
              CitySearchWrapper = shallow(<CitySearch updateEvents={() => {}} locations={locations} />);
          });
      
          when('the user starts searching for a specific city', () => {
      
          });
      
          then('the user should receive a list of suggested cities that match what they’ve typed', () => {
      
          });
        });
      
      //scenario 3 a user can select a city form a suggested list
        test('User can select a city from the suggested list',
         ({ given,
             and,
             when,
             then 
         }) => {
         given('user was typing "Berlin" in the city textbox', async () => {
           AppWrapper = await mount(<App />);
           AppWrapper.find('.city').simulate('change', { target: { value: 'Berlin' } });
         });;
      
          and ('the list of suggested cities is showing', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.suggestions li')).toHaveLength(2);
        });
      
          when('the user selects a city (e.g., “Berlin, Germany”) from the list', () => {
      
          });
      
          then('their city should be changed to that city (i.e., “Berlin, Germany”)', () => {
      
          });
      
          and('the user should receive a list of upcoming events in that city', () => {
      
          });
        });
      });