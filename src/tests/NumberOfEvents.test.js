import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';


describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsWrapper;
    beforeAll(() => {
        NumberOfEventsWrapper = shallow (<NumberOfEvents />);
    });


    test('render a default number of 32 suggestions in number of events', () => {
        expect(NumberOfEventsWrapper.find('.numberOfEvents')).toHaveLength(1);
    });

    test('renders number input correctly', () => {
        const numberOfEvents = NumberOfEventsWrapper.state("numberOfEvents");
    });
});




















