import React from 'react';
import Event from './Event';
import './App.css';

const EventList = ({ events }) => (
  <div>
    <ul className="EventList">
      {events.map((event) => (
        <li key={event.id}>
          <Event event={event} />
        </li>
      ))}
    </ul>
  </div>
);

export default EventList;
