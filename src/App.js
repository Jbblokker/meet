import React from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import { extractLocations, getEvents } from './api';
import NumberOfEvents from './NumberOfEvents';
import { mockData } from './mock-data';
class App extends React.Component {
    state = {
        events:[],
        locations:[],
        numberOfEvents: 32

    }

    updateEvents = (location, eventCount) => {
        getEvents().then((events) => {
            const locationEvents =
              location === "all"
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
    
    componentDidMount() {
        this.mounted = true;
        getEvents().then((events) => {
            if (this.mounted) {
            this.setState({ 
                 events: events.slice(0, this.state.numberOfEvents),
                 locations: extractLocations(events),
        });
       }
      }); 
    }

    componentWillUnmount(){
        this.mounted = false;
    }

    render() {
        return(
            <div className="App">
               
                <EventList
                     events={this.state.events} 
               />
                <CitySearch 
                    locations={this.state.locations} 
                    updateEvents={this.updateEvents}
                    numberOfEvents={this.state.numberOfEvents}
               />
                <NumberOfEvents
                    numberOfEvents={this.state.numberOfEvents}
                    updateEvents={this.updateEvents}
               />
            </div>
        )
    }
}

export default App;
