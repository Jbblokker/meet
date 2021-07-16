import React, { useState } from 'react';
import './App.css';

function NumberOfEvents(props) {
  // eslint-disable-next-line react/destructuring-assignment
  const { eventsToBeSeen, setEventsToBeSeen } = useState(props.eventsToBeSeen);

  const handleChange = (event) => {
    if (event.target.value === '') {
      setEventsToBeSeen(event.target.value);
      props.updateNumber('noNumberEntered');
    } else {
      setEventsToBeSeen(event.target.value);
      props.updateNumber(event.target.value);
    }
  };
  return (
    <div className="numberOfEvents">
      <form>
        <label htmlFor="number">
          Number of Events:
          <input
            type="number"
            id="number"
            className="EventsNumber"
            value={eventsToBeSeen}
            placeholder="Search by Number"
            onChange={handleChange}
          />
        </label>
      </form>
    </div>
  );
}

export default NumberOfEvents;
