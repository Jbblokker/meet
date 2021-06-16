import React from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import { mockData } from './mock-data';
import { extraLocations, getEvents } from './api';
import NumberOfEvents from './NumberOfEvents';

class App extends React.Component {
    state = {
        events:[],
        locations:[],
        numberOfEvents: 32

    }
    
    componentDidMount() {
        this.mounted = true;
        getEvents().then((events) => {
            if (this.mounted) {
            this.setState({ 
                 events: events.slice(0, this.state.numberOfEvents),
                 locations: extraLocations(events),
        });
       }
      }); 
    }

    componentWillUnmount(){
        this.mounted = false;
    }

    updateEvents = (location, eventCount) => {
        let locationEvents;
        getEvents().then((events)=> {
            locationEvents = events;
            if (location === 'all' && eventCount ===0) {
                locationEvents = events;
            }
            else if (location !== 'all' && eventCount === 0){
                locationEvents = events.filter((event) => event.location === location);
            }
            else if (location === '' && eventCount > 0) {
                locationEvents = events.slice( 0, eventCount);
            }
            else if (location === '' && eventCount === '') {
                locationEvents = events;
            }
            this.setState({
                events: locationEvents,
                numberOfEvents: eventCount,
            });
        }); 
    }

    render() {
        return(
            <div className="App">
                <CitySearch 
                     locations={this.state.locations}
               />
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
//export const getEvents = async () => { return mockData; };
