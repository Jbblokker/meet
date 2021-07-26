/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import './App.css';
import { InfoAlert } from './Alert';

class CitySearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      suggestions: [],
      showSuggestions: undefined,
    };
  }

  // update state of city in text input
  handleInputChanged = (event) => {
    const { value } = event.target;
    const { locations } = this.props;
    const suggestions = locations.filter(
      (location) => location.toUpperCase().indexOf(value.toUpperCase()) > -1,
    );
    if (suggestions.length === 0) {
      this.setState({
        query: value,
        infoText: 'We can not find the city you are looking for. Please try again',
      });
    } else {
      this.setState({
        query: value,
        suggestions,
        infoText: '',
      });
    }
  };

  handleItemClicked(suggestion) {
    // const { updateEvents, numberOfEvents } = this.props;
    this.setState({
      query: suggestion,
      suggestions: [],
      showSuggestions: false,
      infoText: '',
    });
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
        <InfoAlert text={this.state.infoText} />
        <label htmlFor="city">
          Select a City:
          <input
            id="city"
            type="text"
            className="city"
            value={query}
            onChange={(e) => this.handleInputChanged(e)}
            placeholder="enter city here"
            onFocus={() => {
              this.setState({ showSuggestions: true });
            }}
            onClick={() => {
              this.setState({ showSuggestions: true });
            }}
          />
        </label>
        <ul className="suggestions" style={showSuggestions ? {} : { display: 'none' }}>
          {(suggestions.length >= 1)
            ? suggestions.map((suggestion) => (
              <li
                className="matchSuggestions"
                key={suggestion}
                onClick={() => this.handleItemClicked(suggestion)}
              >
                {suggestion}
              </li>
            ))
            : null}
          <li
            className="matchSuggestions"
            key="all"
            onClick={() => this.handleItemClicked('all')}
          >
            <b>See all cities</b>
          </li>
        </ul>
      </div>
    );
  }
}

export default CitySearch;
