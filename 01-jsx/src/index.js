// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Creat a react component
const getButtonText = () => {
  return 'Click on me!';
}

const App = () => {
  return (
    <div>
      <label className="label" htmlFor="name">Enter name:</label>
      <input id="name" type="text"/>
      <button style={{ backgroundColor: 'blue', color: 'white' }}>{ getButtonText() }</button>
    </div>);
};

// Take the react component and show it on the screen
ReactDOM.render(
  <App />, // component
  document.querySelector('#root') // DOM element
);

// Hot reloading. Can be removed later
if (module.hot) {
  module.hot.accept();
}
