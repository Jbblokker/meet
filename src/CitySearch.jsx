/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { InfoAlert } from './Alert';

class CitySearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      suggestions: [],
      showSuggestions: false,
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
    this.setState({
      query: suggestion,
      // suggestions: [],
      showSuggestions: false,
      infoText: '',
    });
    this.props.updateEvents(suggestion, 0);
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
        <label htmlFor="CitySearch">Select a City:</label>

        <input
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
