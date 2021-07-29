import React from 'react';
import { ErrorAlert } from './Alert';

import './App.css';

function NumberOfEvents(props) {
  const { errorText } = props;

  const handleChange = (event) => {
    if (event.target.value === '') {
      props.updateEvents('32');
    } else {
      props.updateEvents(Number(event.target.value));
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
            placeholder="Search by Number"
            onChange={handleChange}
          />
        </label>
      </form>
    </div>
  );
}

export default NumberOfEvents;
