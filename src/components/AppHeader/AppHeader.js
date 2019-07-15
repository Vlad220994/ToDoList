import React from 'react';

import './AppHeader.css';

const AppHeader = ({ toDoCount, doneCount }) => {

  return(
    <div className="AppHeader">
      <h1>ToDo List</h1>
      <span>{toDoCount} more to do, {doneCount} done</span>
    </div>
  );
};

export default AppHeader;
