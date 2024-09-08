import React, { useState, useEffect } from 'react';
import SushiContainer from './SushiContainer';
import Table from './Table';

function App() {
  const [sushiList, setSushiList] = useState([]);
  const [currentSushiIndex, setCurrentSushiIndex] = useState(0);
  const [eatenSushi, setEatenSushi] = useState([]);
  const [budget, setBudget] = useState(100);

  useEffect(() => {
    fetch('http://localhost:3001/sushis')
      .then(response => response.json())
      .then(data => setSushiList(data));
  }, []);

  const handleEatSushi = (sushi) => {
    if (budget >= sushi.price && !eatenSushi.includes(sushi)) {
      setEatenSushi([...eatenSushi, sushi]);
      setBudget(budget - sushi.price);
    }
  };

  const handleMoreSushi = () => {
    setCurrentSushiIndex(currentSushiIndex + 4);
  };

  return (
    <div className="app">
      <SushiContainer 
        sushis={sushiList.slice(currentSushiIndex, currentSushiIndex + 4)} 
        onEatSushi={handleEatSushi} 
        eatenSushi={eatenSushi} 
        onMoreSushi={handleMoreSushi} 
      />
      <Table budget={budget} eatenSushi={eatenSushi} />
    </div>
  );
}

export default App;
