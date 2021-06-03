import React from 'react';
import './App.css';
import EventList from './EventList';

class App extends Compnent {
    render() {
        return(
            <div className="App">
                <EventList />
            </div>
        )
    }
}

export default App;