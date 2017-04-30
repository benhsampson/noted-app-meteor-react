import React from 'react';
import { Meteor } from 'meteor/meteor';
import expect from 'expect';
import { mount } from 'enzyme';

import { NoteListHeader } from './NoteListHeader';

import { notes } from '../fixtures/fixtures';

if (Meteor.isClient) {
  describe('NoteListHeader', function() {
    let call;
    let Session;

    beforeEach(function() {
      call = expect.createSpy();
      Session = {
        set: expect.createSpy()
      }
    });

    it('should call Meteor call on click', function() {
      const wrapper = mount(<NoteListHeader call={ call } Session={ Session } />);

      wrapper.find('button').simulate('click');
      call.calls[0].arguments[1](undefined, notes[0]._id);

      expect(call.calls[0].arguments[0]).toBe('notes.insert');
      expect(Session.set).toHaveBeenCalledWith('selectedNoteId', notes[0]._id);
    });

    it('should not set Session for failed insert', function() {
      const wrapper = mount(<NoteListHeader call={ call } Session={ Session} />);

      wrapper.find('button').simulate('click');
      call.calls[0].arguments[1]('error here', undefined);

      expect(Session.set).toNotHaveBeenCalled();
    });
  });
}
