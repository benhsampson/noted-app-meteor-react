import React from 'react';

import PrivateHeader from './PrivateHeader';
import NoteList from './NoteList';

export default () => {
  return(
    <div>
      <PrivateHeader title="dashboard" />
      <div className="wrapper">
        <NoteList />
      </div>
    </div>
  );
}
