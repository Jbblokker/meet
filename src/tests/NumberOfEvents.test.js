import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from"../NumberOfEvents";


describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsWrapper;
    beforeAll(() => {
        NumberOfEventsWrapper = shallow (<numberOfEvents />);
    });


    test('render a default number of 32 suggestions in number of events', () => {
        expect(NumberOfEventsWrapper.find('.numberOfEvents')).toHaveLength();
    });

    test('renders number input correctly', () => {
        const numberOfEvents = NumberOfEventsWrapper.state("numberOfEvents");
    });

    test('change state when number input changes', () => {
        numberOfEvents.setState({
            query: '2'
        });
        const eventObject = { target: { value: '2'}};
        NumberOfEventsWrapper.find('number').stimulate('change', eventObject);
        expect(NumberOfEventsWrapper.state('query')).toBe('2');
    });




});




















