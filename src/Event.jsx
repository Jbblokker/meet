import React, { Component } from 'react';

class Event extends Component {
  constructor() {
    super();
    this.state = {
      showMore: false,
    };
  }

  showMore() {
    const { showMore } = this.state;
    if (showMore === false) {
      this.setState({ showMore: true });
    } else {
      this.setState({ showMore: false });
    }
  }

  showText() {
    const { showMore } = this.state;
    if (showMore === false) {
      return 'Show More';
    }
    return 'Show Less';
  }

  desc(event) {
    const { showMore } = this.state;
    if (showMore === false) {
      return '';
    }
    return event.description;
  }

  render() {
    const { event } = this.prop;
    return (
      <>
        <div className="events">
          <h2>{event.summary}</h2>
          <p>
            <b>Creator:</b>
            {event.creator.email}
          </p>
          <p>
            <b>Start Time:</b>
            {event.start.dateTime}
          </p>
          <p>
            <b>Location:</b>
            {event.location}
          </p>
          <p className="description">{this.desc(event)}</p>
          const showMore =
          <button type="button">
            className=`showMore`onClick=
            {() => { this.showMore(event); }}
            {'>'}
            {this.showText()}
          </button>
        </div>
      </>
    );
  }
}
export default Event;
