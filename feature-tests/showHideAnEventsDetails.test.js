import React from 'react';
import App from '../src/App';
import Event from'../src/Event';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { mockData } from '../src/mock-data';
import { mount, shallow } from 'enzyme';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');
//scenario 1 
defineFeature(feature, (test) => {

    test('an event element is collapsed by default', 
    ({ given,
       when,
       then 
    }) => {
        let AppWrapper;
        given('user has not tried to select the event element', () => {
            AppWrapper = mount(<App />);
        });

        when('the user selects the element with their mouse', () => {

        });

        then('the user should be able to see the details of the event', () => {
            AppWrapper.update();
            expect(AppWrapper.find(".EventDetails")).toHaveLength(0);
        });
    });
    //scenario 2 
    test('User can expand an event to see its details', 
    ({ given, 
       when, 
       then 
    }) => {
        let EventWrapper;
        given('the user has selected the event element available to click', () => {
            EventWrapper = shallow(<Event event={mockData[1]} />);
        });

        when('the user does click for more details', () => {
            EventWrapper.find(".showMore").simulate("click");

        });

        then('the user will be given an expanded view of the details of said event', () => {
            expect(EventWrapper.find(".EventDetails")).toHaveLength(1);
        });
    });
    //scenario 3
    test('User can collapse an event to hide its details', 
    ({ given, 
       when, 
       then 
    }) => {
        let EventWrapper;
        given('the user is done looking at expanded information', () => {
            EventWrapper = shallow(<Event event={mockData[1]} />);
            EventWrapper.setState({
                show: true,
            })
        });

        when('the user selects the collapse button', () => {
            EventWrapper.find(".showLess").simulate("click");
        });

        then('the user will no longer have the event’s details shown to view', () => {
            expect(EventWrapper.find(".EventDetails")).toHaveLength(0);
        });
    });
});
