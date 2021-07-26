import React, { useState } from 'react';
import { ErrorAlert } from './Alert';

import './App.css';

function NumberOfEvents(props) {
  // eslint-disable-next-line react/destructuring-assignment
  const [eventsToBeSeen, setEventsToBeSeen] = useState(props.eventsToBeSeen);
  const { errorText } = props;

  const handleChange = (event) => {
    if (event.target.value === '') {
      setEventsToBeSeen(event.target.value);
      props.updateEventNumber('noNum');
    } else {
      setEventsToBeSeen(event.target.value);
      props.updateEventNumber(event.target.value);
    }
  };

  return (
    <div className="numberOfEvents">
      <ErrorAlert text={errorText} />
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
