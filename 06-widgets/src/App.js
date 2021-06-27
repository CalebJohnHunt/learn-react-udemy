import React from 'react';
// import Accordion from './components/Accordion';
import Search from './components/Search';
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

const App = (props) => {

  return (
    <div>
      {/* <Accordion items={items}/> */}
      <Search />
    </div>
  )
};

export default App;