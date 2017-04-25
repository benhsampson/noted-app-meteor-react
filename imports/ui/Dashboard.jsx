import React from 'react';

import PrivateHeader from './PrivateHeader';
import NoteList from './NoteList';
import Editor from './Editor';

export default () => {
  return(
    <div>
      <PrivateHeader title="dashboard" />
      <div className="wrapper">
        <NoteList />
        <Editor />
      </div>
    </div>
  );
}
