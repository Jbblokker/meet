import React, { Component } from 'react';

class CitySearch extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
      suggestions: [],
      showSuggestions: undefined,
    };
  }

  // update state of city in text input
  handleInputChanged(event) {
    const { value } = event.target;
    const { location } = event.target;
    const { suggestions } = location.filter;
    location.filter((location,
    location.toUpperCase().indexOf(value.toUpperCase()) > -1));
    this.setState({
      query: value,
      suggestions,
    });
  }

  handleItemClicked(suggestion) {
    const { updateEvents, numberOfEvents } = this.props;
    this.setState({
      query: suggestion,
      showSuggestions: false,
    });

    updateEvents(suggestion, numberOfEvents);
  }

  listUpdate() {
    const { locations } = this.props;
    const suggestions = locations.filter((location) => location);

    this.setState({
      suggestions,
    });
  }

  render() {
    const { query, showSuggestions, suggestions } = this.state;
    return (
      <div className="CitySearch">
        <label htmlFor="city">
          Select a City:
          <input
            id="city"
            type="text"
            className="city"
            value={query}
            onChange={this.handleInputChanged}
            placeholder="enter city here"
            onFocus={() => { this.setState({ showSuggestions: true }); }}
            onClick={() => { this.setState({ showSuggestions: true }); }}
          />
        </label>
        <div className="suggestions" />
        {suggestions.length >= 1 ? (
          <ul className="suggestions" style={showSuggestions ? {} : { display: 'none' }}>
            {suggestions.map((suggestion) => (
              <li
                className="matchSuggestions"
                key={suggestion}
                onClick={() => this.handleItemClicked(suggestion)}
              >
                {suggestion}
              </li>
            ))}
            <li
              className="matchSuggestions"
              key="all"
              onClick={() => this.handleItemClicked('all')}
            >
              <b>See all cities</b>
            </li>
          </ul>
        ) : (
          <div />
        )}
      </div>
    );
  }
}

export default CitySearch;
