import React from 'react';
import { Link } from 'react-router';

export default () => {
  return (
    <div className="boxed-view">
      <div className="boxed-view__box">
        <h1>404 : page not found</h1>
        <p>sorry about that</p>
        <Link to="/" className="button button--link">head home</Link>
      </div>
    </div>
  );
};
