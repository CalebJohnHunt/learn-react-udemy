import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  // Same as using the constructor and this.state = { ... }
  state = { lat: null, errorMessage: '' };

  // Load data here
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (pos) => { // success callback
        // Don't do this.state.lat =
        this.setState({ lat: pos.coords.latitude });
      },
      (err) => { // failure callback
        // Doesn't delete lat!
        this.setState({ errorMessage: err.message });
      }
    );
  }

  // Must define render
  render() {
      if (this.state.errorMessage && !this.state.lat) {
        return <div>Error: {this.state.errorMessage}</div>;
      } else
      if (this.state.lat && !this.state.errorMessage) {
        return <div>Latitude: {this.state.lat}</div>;
      }
      return <div>Loading</div>;
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);