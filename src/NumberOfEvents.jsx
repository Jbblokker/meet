import React from 'react';

function NumberOfEvents(props) {
  const { numberOfEvents } = props;
  const { setNumberOfEvents } = props;

  const handleChange = (event) => {
    if (event.target.value === '') {
      setNumberOfEvents(event.target.value);
    } else {
      setNumberOfEvents(event.target.value);
    }
  };
  return (
    <div className="numberOfEvents">
      <form>
        <label htmlFor="labelInput">
          <input type="text" id="labelInput" />
          Please Select an amount of Events:
        </label>
        <input
          type="number"
          className="EventsNumber"
          value={numberOfEvents}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default NumberOfEvents;
