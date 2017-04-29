import React from 'react';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import moment from 'moment';
import { Session } from 'meteor/session';


export const NoteListItem = (props) => {
  return (
    <div onClick={ () => {
      props.Session.set('selectedNoteId', props.note._id)
    } }>
      <h4>{ props.note.title || 'Untitled Note'}</h4>
      <p>{ moment(props.note.updatedAt).fromNow() }</p>
      <button onClick={ () => props.call('notes.remove', props.note._id) }>delete note</button>
    </div>
  );
};

NoteListItem.propTypes = {
  note: PropTypes.object.isRequired,
  Session: PropTypes.object.isRequired,
  call: PropTypes.func.isRequired
};

export default createContainer(() => {
  return {
    Session,
    call: Meteor.call
  };
}, NoteListItem);
