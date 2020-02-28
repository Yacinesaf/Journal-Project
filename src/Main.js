import React from 'react';
import NavPcVersion from './NavPcVersion';

function Main() {

  const buttonStyle= {
    textTransform : 'none',
    color : 'white'
  };

  return (
    <div>
      <NavPcVersion buttonStyle={buttonStyle} />
    </div>
  );
}

export default Main;
