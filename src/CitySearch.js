import React, { Component } from 'react';

class CitySearch extends Component {
  constructor() {
    super();
      
    this.state = {
        query:'',
        suggestions: [],
        showSuggestions: false
    };  
  }

// update state of city in text input
handleInputChanged = (event) => {
  const value = event.target.value;
      const suggestions = this.props.locations.filter((location) =>
      { return location.toUpperCase().indexOf(value.toUpperCase())> -1;})
      this.setState({ query: value, suggestions });
  };

  handleItemClicked = (suggestion) => {
      this.setState({ query: suggestion, showSuggestions: false });

      this.props.updateEvents(suggestion, 0);
  };

  render() {
    return (
      <div className="CitySearch">
          <input
            type="text"
            className="city"
            value={this.state.query}
            onChange={this.handleInputChanged}
            placeholder='Search for a city'
            onFocus={() => { this.setState({ showSuggestions: true}) }}
            onClick={() => { this.setState({showSuggestions: true}) }}
          />
          {this.state.suggestions.length >= 1 ?  (
          <ul key="suggestions" style={this.state.showSuggestions ? {} : { display: "none" }}>
          {this.state.suggestions.map((suggestion) => (
                  <li key={suggestion} onClick={() => this.handleItemClicked(suggestion)}>{suggestion}</li>
              ))}
              <li key={'all'} onClick={() => this.handleItemClicked('all')}>
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






// handleInputChanged = (event) => {
//   const value = event.target.value;
//   const suggestions = this.props.locations.filter((location) => {
//     return location.toUpperCase().indexOf(value.toUpperCase())> -1;
//   });
//   if  (suggestions.length === 0) {
//     this.setState({
//       query: value
//     });
//   }else{
//   return this.setState({ 
//     query: value, 
//     suggestions 
//   });
// }  
// };