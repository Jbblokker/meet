import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from'../NumberOfEvents';


describe('<NumberOfEvents /> component', () => {
    NumberOfEvents;
    beforeAll(() => {
        NumberOfEventsWrapper = shallow (<NumberOfEvents updateEvents={() => {} } />);
    });


    test('render a default number of 32 suggestions in number of events', () => {
        expect(NumberOfEventsWrapper.find('.numberOfEvents')).toHaveLength(1);
    });

    test('render a modified number of events changed by the user' , () => {
        expect(NumberOfEventsWrapper.find(NumberOfEvents)).toHaveLength();
    });

    test('renders number input correctly', () => {
        expect(NumberOfEventsWrapper.find('number').prop('value')).toBe(query);
    });

    test('change state when number input changes', () => {
        NumberOfEventsWrapper.setState({
            query: '2'
        });
        const eventObject = { target: { value: '2'}};
        NumberOfEventsWrapper.find('number').stimulate('change', eventObject);
        expect(NumberOfEventsWrapper.state('query')).toBe('2');
    });




});




















