import React from 'react';
import Sushi from './Sushi';
import MoreButton from './MoreButton';

function SushiContainer({ sushis, onEatSushi, eatenSushi, onMoreSushi }) {
  return (
    <div className="belt">
      {sushis.map(sushi => (
        <Sushi 
          key={sushi.id} 
          sushi={sushi} 
          onEatSushi={onEatSushi} 
          eaten={eatenSushi.includes(sushi)} 
        />
      ))}
      <MoreButton onClick={onMoreSushi} />
    </div>
  );
}

export default SushiContainer;
