import React from 'react';
import App from '../App';
import { mount, shallow } from 'enzyme';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { mockData } from '../mock-data';

const feature = loadFeature('./src/features/specifyTheNumberOfEvents.feature');
//specify the number of events
defineFeature(feature, (test) => {
    //scenario 1
    test('When user has not specified a number 32 is the default number', 
    ({ given, 
       when, 
       then 
    }) => {
        given('the user has not specified the number of events they are looking for', () => {
        });
        let AppWrapper;
        when('the user searches for the events', () => {
            AppWrapper = mount(<App />);
        });

        then('the default number of 32 will be applied to only show 32 events in that search', () => {
            expect(AppWrapper.state("events").length).toBe(mockData.length);
        });
    });
    //scenario 2
    test('User can change the number of events they want to see', 
    ({ given, 
       when, 
       then 
    }) => {
        let AppWrapper;
        given('the user has chosen a specific number of events to view', () => {
            AppWrapper = mount(<App />);
        });

        when('the user searches for events', () => {
            AppWrapper.update();
            AppWrapper.find("number").simulate('change', { target: { value: 5 } });
        }); 

        then('the specific number declared by user will limit the total of events shown', () => {
            AppWrapper.update();
            expect(AppWrapper.find("events").length).toBe(5);
        });
    });

});