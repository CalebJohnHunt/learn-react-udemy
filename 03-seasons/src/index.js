import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null };
  
    window.navigator.geolocation.getCurrentPosition(
      (pos) => { // success callback
        // Don't do this.state.lat =
        this.setState({ lat: pos.coords.latitude });
      },
      (err) => console.log(err)  // failure callback
    );
  }

  // Must define render
  render() {
    return (
      <div>Latitude: {this.state.lat}</div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);