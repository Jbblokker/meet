/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './App.css';
import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';
import EventList from './EventList';
import CitySearch from './CitySearch';
import {
  extractLocations, getEvents, checkToken, getAccessToken,
} from './api';
import NumberOfEvents from './NumberOfEvents';
import { OfflineAlert, ErrorAlert } from './Alert';
import WelcomeScreen from './WelcomeScreen';
import EventGenre from './EventGenre';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      locations: [],
      numberOfEvents: 75,
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
        errorText: 'please choose a correct number.',
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

  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter((event) => event.location === location).length;
      const city = location.split(',').shift();
      return { city, number };
    });
    return data;
  };

  updateEvents(location, eventCount) {
    getEvents().then((events) => {
      const locationEvents = location === 'all'
        ? events.slice(0, eventCount)
        : events.filter((event) => event.location === location);
      if (this.mounted) {
        this.setState({
          events: locationEvents,
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
          <h1> Meet App</h1>
          <h4>Choose your nearest city</h4>
          <WelcomeScreen getAccessToken={() => { getAccessToken(); }} />
        </div>
      );
    }
    return (
      <div className="App">
        {this.state.offlineText ? <OfflineAlert text={this.state.offLineText} /> : null}
        {this.state.errorText ? <ErrorAlert text={this.state.errorText} /> : null}

        <CitySearch
          locations={locations}
          updateEvents={(location, eventCount) => this.updateEvents(location, eventCount)}
          numberOfEvents={numberOfEvents}
        />
        <NumberOfEvents
          numberOfEvents={numberOfEvents}
          defaultNumberOfEvents={defaultNumberOfEvents}
          updateEvents={(number) => {
            if (number < 0) this.setState({ errorText: 'Please choose a valid number' });
            else this.setState({ numberOfEvents: number, errorText: '' });
          }}
        />
        <h4>Events in each city</h4>
        <div className="data-vis-wrapper">
          <EventGenre events={events} />
          <ResponsiveContainer height={400}>
            <ScatterChart
              margin={{
                top: 20, right: 20, bottom: 10, left: 10,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="category" dataKey="city" name="city" />
              <YAxis type="number" dataKey="number" name="number of events" />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />

              <Scatter data={this.getData()} fill="#8884d8" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
        <EventList
          events={events.slice(0, numberOfEvents)}
        />
      </div>
    );
  }
}

export default App;
