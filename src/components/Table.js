import React from 'react';

function Table({ budget, eatenSushi }) {
  const plates = eatenSushi.map((_, index) => <div key={index} className="empty-plate" style={{ top: -7 * index }} />);

  return (
    <>
      <h1 className="remaining">You have: ${budget} remaining!</h1>
      <div className="table">
        <div className="stack">
          {plates}
        </div>
      </div>
    </>
  );
}

export default Table;
