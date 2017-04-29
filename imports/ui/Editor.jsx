import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';

import { Notes } from '../api/notes';

export class Editor extends Component {
  handleTitleChange(e) {
    this.props.call('notes.update', this.props.note._id, {
      title: e.target.value
    });
  }
  handleBodyChange(e) {
    this.props.call('notes.update', this.props.note._id, {
      body: e.target.value
    });
  }
  render() {
    if (this.props.note) {
      return (
        <div>
          <input
            value={ this.props.note.title }
            placeholder="note title"
            onChange={ this.handleTitleChange.bind(this) }
          />
          <textarea
            value={ this.props.note.body }
            placeholder="note body"
            onChange={ this.handleBodyChange.bind(this) }>
          </textarea>
        </div>
      );
    } else {
      return (
        <h1>
          { this.props.selectedNotId ? 'not not found' : 'create a new note to get started' }
        </h1>
      );
    }
  }
};

Editor.propTypes = {
  selectedNoteId: PropTypes.string,
  note: PropTypes.object,
  call: PropTypes.func.isRequired
};

export default createContainer(() => {
  const selectedNoteId = Session.get('selectedNoteId');

  return {
    selectedNoteId,
    note: Notes.findOne(selectedNoteId),
    call: Meteor.call
  };
}, Editor);
