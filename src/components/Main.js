require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let link = 'http://www.raquelplaza.com';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <a href={link} title="Visit my website">Visit my website</a>
        <div className="notice">This is my first component for the therapy booking project</div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
