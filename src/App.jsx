/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import { extractLocations, getEvents } from './api';
import NumberOfEvents from './NumberOfEvents';
import { OfflineAlert } from './Alert';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      locations: [],
      numberOfEvents: 32,
      // eslint-disable-next-line react/no-unused-state
      updateNumberOfEvents: 32,
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
          offlineText: 'You are viewing this app offline.',
        });
      } else {
        this.setState({
          offlineText: '',
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
      defaultNumberOfEvents,
      events,
      locations,
      numberOfEvents,
    } = this.state;
    return (
      <div className="App">
        <OfflineAlert text={this.state.offlineText} />

        <EventList
          events={events.slice(0, numberOfEvents)}
        />
        <CitySearch
          locations={locations}
          updateEvents={(location, eventCount) => this.updateEvents(location, eventCount)}
          numberOfEvents={numberOfEvents}
        />
        <NumberOfEvents
          numberOfEvents={numberOfEvents}
          defaultNumberOfEvents={defaultNumberOfEvents}
          updateEvents={(number) => this.setState({ numberOfEvents: number })}
        />
      </div>
    );
  }
}

export default App;
