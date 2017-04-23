import { Meteor } from 'meteor/meteor';
import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';

import { PrivateHeader } from './PrivateHeader';

if (Meteor.isClient) {
  describe('PrivateHeader', function() {
    it('should set button text to logout', function() {
      const wrapper = mount(<PrivateHeader title="Test Title" handleLogout={ () => {} }/>);
      const buttonText = wrapper.find('button').text();

      expect(buttonText).toBe('logout');
    });

    it('should use title prop has h1 text', function() {
      const title = 'test title here';
      const wrapper = mount(<PrivateHeader title={ title } handleLogout={ () => {} }/>);
      const h1text = wrapper.find('h1').text();

      expect(h1text).toBe(title);
    });

    // it('should call the function', function() {
    //   const spy = expect.createSpy();
    //   spy(55, 'string thing');
    //   spy(false);
    //   expect(spy).toHaveBeenCalledWith(55, 'string thing');
    // });

    it('should call handleLogout on click', function() {
      const spy = expect.createSpy();
      const wrapper = mount(<PrivateHeader title="Title" handleLogout={ spy } />);

      wrapper.find('button').simulate('click');

      expect(spy).toHaveBeenCalled();
    });
  });
}
