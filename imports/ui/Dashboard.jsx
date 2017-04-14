import React from 'react';

import PrivateHeader from './PrivateHeader';

export default () => {
  return(
    <div>
      <PrivateHeader title="Dashboard" />
      <div className="wrapper">
        DASHBOARD PAGE CONTENT
      </div>
    </div>
  );
}
