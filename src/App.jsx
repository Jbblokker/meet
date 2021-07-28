import React from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import { extractLocations, getEvents } from './api';
import NumberOfEvents from './NumberOfEvents';
import { ErrorAlert } from './Alert';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      locations: [],
      numberOfEvents: 32,
    };
  }

  componentDidMount() {
    const { numberOfEvents } = this.state;
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({
          events: events.slice(0, numberOfEvents),
          locations: extractLocations(events),
        });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents(location, eventCount) {
    const { numberOfEvents } = this.state;
    getEvents().then((events) => {
      const locationEvents = location === 'all'
        ? events.slice(0, numberOfEvents)
        : events.filter((event) => event.location === location);
      if (this.mounted) {
        this.setState({
          events: locationEvents,
          numberOfEvents: eventCount,
        });
      }
    });
  }

  render() {
    const {
      events,
      locations,
      numberOfEvents,
      updateNumberEvents,
    } = this.state;
    return (
      <div className="App">
        <EventList
          events={events}
        />
        <CitySearch
          locations={locations}
          updateEvents={(location, eventCount) => this.updateEvents(location, eventCount)}
          numberOfEvents={numberOfEvents}
        />
        <NumberOfEvents
          numberOfEvents={numberOfEvents}
          updateEvents={updateNumberEvents}
        />
      </div>
    );
  }
}

export default App;
