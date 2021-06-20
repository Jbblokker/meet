import { mount, shallow } from 'enzyme';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { mockData } from '../mock-data';

const feature = loadFeature('./src/features/specifyTheNumberOfEvents.feature');


  
defineFeature(feature, (test) => {


})