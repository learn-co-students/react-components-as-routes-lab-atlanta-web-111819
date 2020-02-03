import React from 'react';
import { actors } from '../data'; 

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {
        actors.map(actor => {
          return <div>
            <p>{actor.name}</p>
            {actor.movies.map(m => <li>{m}</li>)}
          </div>
        })
      }
    </div>
  );
};

export default Actors;
