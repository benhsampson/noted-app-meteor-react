import React from 'react';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';

export const NoteListHeader = (props) => {
  return (
    <button onClick={ () => {
      props.call('notes.insert', (err, res) => {
        if (res) {
          props.Session.set('selectedNoteId', res);
        }
      });
    } }>add note</button>
  );
};

NoteListHeader.propTypes = {
  call: PropTypes.func.isRequired,
  Session: PropTypes.object.isRequired
};

export default createContainer(() => {
  return {
    call: Meteor.call,
    Session
  };
}, NoteListHeader);
