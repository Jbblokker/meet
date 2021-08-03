/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import {
  extractLocations, getEvents, checkToken, getAccessToken,
} from './api';
import NumberOfEvents from './NumberOfEvents';
import { OfflineAlert } from './Alert';
import WelcomeScreen from './WelcomeScreen';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      locations: [],
      numberOfEvents: 32,
      showWelcomeScreen: false,
      // eslint-disable-next-line react/no-unused-state
      updateNumberOfEvents: 32,
    };
  }

  async componentDidMount() {
    const { numberOfEvents } = this.state;
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get('code');
    if (!navigator.online) {
      this.setState({
        offlineText: '',
        showWelcomeScreen: !(code || isTokenValid),
      });
      if ((code || isTokenValid) && this.mounted) {
        getEvents().then((events) => {
          if (this.mounted) {
            this.setState({ events, locations: extractLocations(events) });
          }
        });
      }
    } else {
      this.setState({
        offlineText: 'You are viewing this app offline.',
      });
    }
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
      defaultNumberOfEvents,
      events,
      locations,
      numberOfEvents,
    } = this.state;
    if (this.state.showWelcomeScreen) {
      return (
        <div className="App">
          <WelcomeScreen getAccessToken={() => { getAccessToken(); }} />
        </div>
      );
    }
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
        {/* Other components such as CitySearch, EventList,...etc */}
      </div>
    );
  }
}

export default App;
