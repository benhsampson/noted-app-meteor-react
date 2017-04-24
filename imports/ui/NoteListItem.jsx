import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const NoteListItem = (props) => {
  return (
    <div>
      <h4>{ props.note.title || 'Untitled Note'}</h4>
      <p>{ moment(props.note.updatedAt).fromNow() }</p>
    </div>
  );
};

NoteListItem.propTypes = {
  note: PropTypes.object.isRequired
};

export default NoteListItem;
