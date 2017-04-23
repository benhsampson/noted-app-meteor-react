import React from 'react';
import PropTypes from 'prop-types'
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import { Notes } from '../api/notes';

import NoteListHeader from './NoteListHeader';
import NoteListItem from './NoteListItem';

export const NoteList = (props) => {
  const renderNotes = () => {
    return props.notes.map((note) => (
      <NoteListItem key={ note._id } note={ note } />
    ));
  };
  return (
    <div>
      <NoteListHeader />
      { renderNotes() }
    </div>
  );
};

NoteList.propTypes = {
  notes: PropTypes.array.isRequired
};

export default createContainer(() => {
  Meteor.subscribe('notes');
  return {
    notes: Notes.find({}, { sort: { updatedAt: -1 } }).fetch()
  };
}, NoteList);