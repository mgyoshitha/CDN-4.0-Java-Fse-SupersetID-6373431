import React from 'react';
import './App.css';
import ListofPlayers from './components/ListofPlayers'; 
import { OddPlayers, EvenPlayers, ListofIndianPlayers } from './components/IndianPlayers'; 

function App() {
  const players = [ 
    { name: 'Jack', score: 50 },
    { name: 'Michael', score: 70 },
    { name: 'John', score: 40 },
    { name: 'Ann', score: 61 },
    { name: 'Elisabeth', score: 61 },
    { name: 'Sachin', score: 95 },
    { name: 'Dhoni', score: 100 },
    { name: 'Virat', score: 84 },
    { name: 'Jadeja', score: 64 },
    { name: 'Raina', score: 75 },
    { name: 'Rohit', score: 80 },
  ];

  const T20Players = ['First Player', 'Second Player', 'Third Player'];
  const RanjiTrophyPlayers = ['Fourth Player', 'Fifth Player', 'Sixth Player']; 
  const IndianTeam = ['Sachin1', 'Dhoni2', 'Virat3', 'Rohit4', 'Yuvraj5', 'Raina6']; 

 
  const IndianPlayersMerged = [...T20Players, ...RanjiTrophyPlayers]; 


  const flag = true; 

  return (
    <div className="App">
      {flag ? ( 
        <div>
          <ListofPlayers players={players} /> {}
        </div>
      ) : ( 
        <div>
          <OddPlayers team={IndianTeam} /> {}
          <hr />
          <EvenPlayers team={IndianTeam} />
          <hr />
          <ListofIndianPlayers IndianPlayers={IndianPlayersMerged} /> {}
        </div>
      )}
    </div>
  );
}

export default App;