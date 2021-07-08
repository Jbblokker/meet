import React from 'react';
import Event from './Event';

class EventList {
  render() {
    const { events } = this.props;
    return (
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
  }
}

export default EventList;
