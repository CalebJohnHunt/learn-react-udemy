import React, { useState } from 'react';
// import Accordion from './components/Accordion';
// import Search from './components/Search';
// import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

/* 
const items = [
  {
    title: 'What is your name?',
    content: 'Caleb John Hunt'
  },
  {
    title: 'What are you studying?',
    content: 'Computer Science at Brigham Young University. I\'m scheduled to graduate April 2023.'
  },
  {
    title: 'Tell us about the Narwhal',
    content: 'Pink with a white horn; she\'s a real cutie.'
  }
];
 */

/* 
const options = [
  {
    label: 'Fire Red',
    value: 'red'
  },
  {
    label: 'Leaf Green',
    value: 'green'
  },
  {
    label: 'Ocean Blue',
    value: 'blue'
  }
];
 */

const App = (props) => {
  // const [selection, setSelection] = useState(options[0]);
  // const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      {/* <Accordion items={items}/> */}
      {/* <Search /> */}
      {/* <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
      {showDropdown ?
        <Dropdown 
        label="Select a color"
        options={options} 
        selection={selection}
        onSelectionChange={setSelection}
        /> : null
      } */}
      <Translate />
    </div>
  )
};

export default App;