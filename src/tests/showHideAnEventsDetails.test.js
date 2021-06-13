import React from 'react';
import App from '../App';
import CitySearch from '../CitySearch';
import { mount, shallow } from 'enzyme';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { mockData } from '../mock-data';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');
let AppWrapper;
let CitySearchWrapper;

//feature 2 show / hide an event's details 
defineFeature(feature, (test) => {
    //scenario 1 an event element is collapsed by default
})