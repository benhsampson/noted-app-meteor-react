import React from 'react';
import PropTypes from 'prop-types'
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Session } from 'meteor/session';

import { Notes } from '../api/notes';

import NoteListHeader from './NoteListHeader';
import NoteListItem from './NoteListItem';
import NoteListEmptyItem from './NoteListEmptyItem';

export const NoteList = (props) => {
  const renderNotes = () => {
    return props.notes.map((note) => (
      <NoteListItem key={ note._id } note={ note } />
    ));
  };
  return (
    <div>
      <NoteListHeader />
      { props.notes.length > 0 ? renderNotes() : <NoteListEmptyItem /> }
    </div>
  );
};

NoteList.propTypes = {
  notes: PropTypes.array.isRequired
};

export default createContainer(() => {
  const selectedNoteId = Session.get('selectedNoteId');
  Meteor.subscribe('notes');
  return {
    notes: Notes.find({}, { sort: { createdAt: -1 } }).fetch().map((note) => {
      return {
        ...note,
        selected: note._id === selectedNoteId
      };
    })
  };
}, NoteList);
