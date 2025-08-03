import React from 'react';

function ListofPlayers({ players }) { 
  return (
    <div>
      <h1>List of Players</h1>
      <ul>
        {players.map((item, index) => ( 
          <li key={index}>Mr. {item.name} <span>{item.score}</span></li> // [cite: 23]
        ))}
      </ul>

      <h1>List of Players having Scores Less than 70</h1>
      <ul>
        {players.filter(item => item.score <= 70).map((item, index) => ( // [cite: 12, 24]
          <li key={index}>Mr. {item.name} <span>{item.score}</span></li>
        ))}
      </ul>
    </div>
  );
}

export default ListofPlayers;