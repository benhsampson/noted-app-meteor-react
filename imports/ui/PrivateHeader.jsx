import React, { PropTypes } from 'react';
import { Accounts } from 'meteor/accounts-base';

const PrivateHeader = (props) => {
  return (
    <div className="header">
      <div className="header__content">
        <h1 className="header__title">{ props.title }</h1>
        <button
          onClick={ () => Accounts.logout() }
          className="button button--logout">
          logout
        </button>
      </div>
    </div>
  );
};

export default PrivateHeader;

PrivateHeader.propTypes = {
  title: PropTypes.string.isRequired
};
