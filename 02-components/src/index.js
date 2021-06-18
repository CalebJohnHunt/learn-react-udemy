import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail 
          author={faker.name.firstName()} 
          timeAgo="4:45PM" 
          avatar={faker.image.avatar()} 
          commentText='Sad'
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          author={faker.name.firstName()} 
          timeAgo="5:00PM" 
          avatar={faker.image.avatar()} 
          commentText='Ok'
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          author={faker.name.firstName()} 
          timeAgo="6:00AM" 
          avatar={faker.image.avatar()} 
          commentText='Great'
        />
      </ApprovalCard>

      <ApprovalCard>
        <h4>Warning!</h4>
        <div>
          Is this ok?
        </div>
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);

