import React from 'react';


export function OddPlayers({ team }) { 
  const [first, , third, , fifth] = team; 
  return (
    <div>
      <h1>Odd Players</h1>
      <ul>
        <li>First : {first}</li>
        <li>Third : {third}</li>
        <li>Fifth : {fifth}</li>
      </ul>
    </div>
  );
}


export function EvenPlayers({ team }) { 
  const [, second, , fourth, , sixth] = team;
  return (
    <div>
      <h1>Even Players</h1>
      <ul>
        <li>Second : {second}</li>
        <li>Fourth : {fourth}</li>
        <li>Sixth : {sixth}</li>
      </ul>
    </div>
  );
}


export function ListofIndianPlayers({ IndianPlayers }) { 
  return (
    <div>
      <h1>List of Indian Players Merged:</h1>
      <ul>
        {IndianPlayers.map((player, index) => (
          <li key={index}>Mr. {player}</li>
        ))}
      </ul>
    </div>
  );
}