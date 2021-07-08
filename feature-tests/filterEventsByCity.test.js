import React from 'react';
import App from '../src/App';
import CitySearch from '../src/CitySearch';
import { mount, shallow } from 'enzyme';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { mockData } from '../src/mock-data';
import { extractLocations, getEvents } from '../src/api';

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
          given('the user is in the main page', () => {
              CitySearchWrapper = shallow(<CitySearch updateEvents={() => {}} locations={locations} />);
          });
      
          when('the user starts searching for a specific city', () => {
      
          });
      
          then('the user will see a list of suggested cites that match what the user has typed', () => {
      
          });
        });
      
      //scenario 3 a user can select a city form a suggested list
        test('User can select a city from the suggested list',
         ({ given,
             when,
             then 
         }) => {
          given('the user is typing “ example- Berlin, Germany” in the search box and a list of matching cities shows up', () => {
          AppWrapper = await mount(<App />);
           AppWrapper.find('.city').simulate('change', { target: { value: 'Berlin' } });
         });
      
          when('the user selects a city from the suggested list', () => {
      
          });
      
          then('it will take the user to another screen with the selected city along with', () => {
      
          });
      
        });
      });