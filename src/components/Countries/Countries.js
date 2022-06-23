import React from 'react';

function Countries(prop) {
  const { name } = prop;
  return (
    <div>
      <h1>
        Country
        {name}
      </h1>
    </div>
  );
}

export default Countries;
