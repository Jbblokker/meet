import React from 'react';

const NumberOfEvents = (prop) => {
  const { numberOfEvents } = prop;
  const { setNumberOfEvents } = prop;

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
};

export default NumberOfEvents;
