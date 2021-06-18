import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author={faker.name.firstName()} timeAgo="4:45PM" avatar={faker.image.avatar()} commentText='Sad'/>
      <CommentDetail author={faker.name.firstName()} timeAgo="5:00PM" avatar={faker.image.avatar()} commentText='Sad'/>
      <CommentDetail author={faker.name.firstName()} timeAgo="6:00AM" avatar={faker.image.avatar()} commentText='Sad'/>
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);

