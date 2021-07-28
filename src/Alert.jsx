/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable max-classes-per-file */
import React, { Component } from 'react';

class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
  }

getStyle = () => ({ color: this.color });

render() {
  return (
    <div className="Alert">
      <p style={this.getStyle()}>{this.props.text}</p>
    </div>
  );
}
}

class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'blue';
  }
}

class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'red';
  }
}

class OfflineAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'orange';
  }
}

// eslint-disable-next-line import/prefer-default-export
export { InfoAlert, ErrorAlert, OfflineAlert };
