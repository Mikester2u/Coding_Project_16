//U22562170

import React from 'react';
import './App.css';

const teamData = [
  {name:'Michael Rueda', role:'Manager', photo:'path/to/Michael.jpg'},
  {name:'Jeff Bezos', role:'Janitor', photo:'path/to/Jeff.jpg'},
  {name:'Lebron James', role:'King', photo:'path/to/Lebron.jpg'},
];

function App() {
  return (
    <div className="App">
    <Header title="Meet the Team" />
    <Gallery team={teamData} />
  </div>
  );
}

function Header({title}) {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
}

function Profile({ name, role, photo }) {
  return (
    <div className="profile">
      <img src={photo} alt={`${name}'s photo`} />
      <h2>{name}</h2>
      <p>{role}</p>
    </div>
  );
}

function Gallery({ team }) {
  return (
    <div className="gallery">
      {team.map((member, index) => (
        <Profile key={index} {...member} />
      ))}
    </div>
  );
}

export default App;
