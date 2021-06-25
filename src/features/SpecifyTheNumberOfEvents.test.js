import { mount, shallow } from 'enzyme';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { mockData } from '../mock-data';

const feature = loadFeature('./src/features/specifyTheNumberOfEvents.feature');


  
defineFeature(feature, (test) => {

    test('When user has not specified a number 32 is the default number', 
    ({ given, 
       when, 
       then 
    }) => {
        given('the user has not specified the number of events they are looking for', () => {
        });

        when('the user searches for the events', () => {

        });

        then(/^the default number of (\d+) will be applied to only show (\d+) events in that search$/, (arg0, arg1) => {

        });
    });

    test('User can change the number of events they want to see', 
    ({ given, 
       when, 
       then 
    }) => {
        given('the user has chosen a specific number of events to view', () => {

        });

        when('the user searches for events', () => {

        });

        then('the specific number declared by user will limit the total of events shown', () => {

        });
    });

});