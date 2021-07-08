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
    const { suggestions } = this.props.locations.filter((location) => {
    return location.toUpperCase().indexOf(value.toUpperCase())> -1;});
    setState({
      query: value,
      suggestions,
    });
  }

  handleItemClicked(suggestion) {
    this.setState({
      query: suggestion,
      showSuggestions: false,
    });

    this.props.updateEvents(suggestion, this.props.numberOfEvents);
  }

  listUpdate() {
    const suggestions = this.props.locations.filter((location) { return location
    });
    this.setState({
      suggestions,
    });
  }

  render() {
    return (
      <div className="CitySearch">
        <label>Select a City:</label>
          <input
            type="text"
            className="city"
            value={this.state.query}
            onChange={this.handleInputChanged}
            placeholder='enter city here'
            onFocus={() => { this.setState({ showSuggestions: true}) }}
            onClick={() => { this.setState({showSuggestions: true}) }}
          />
                 <div className="suggestions"/>

          {this.state.suggestions.length >= 1 ?  (
          <ul className="suggestions" style={this.state.showSuggestions ? {} : { display: "none" }}>
          {this.state.suggestions.map((suggestion) => (
                  <li
                    className='matchSuggestions'
                     key={suggestion}
                     onClick={() => this.handleItemClicked(suggestion)}
                  >
                     {suggestion}
                  </li>
              ))}
              <li
               className='matchSuggestions' 
               key="all" 
               onClick={() => this.handleItemClicked("all")}>
              <b>See all cities</b>
              </li>
          </ul>
          ):(
            <div/>
    )}
      </div>
    );
  }
}
export default CitySearch;
