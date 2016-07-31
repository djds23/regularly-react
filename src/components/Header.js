import React from 'react';
import './Header.css';

const Header = () => {
  const titles = [
    'Regular Music for Regular People',
    'Game Recognize Game',
    'Real Recognize Real',
    'No Pare, Sigue! Sigue!',
    'Don\'t stop, Get it! Get it!',
    'New Music, Regularly!'
  ]
  const element = Math.floor(Math.random() * titles.length)
  return (
    <div className="Header">
      <h2>Regularly</h2>
      <h4>{titles[element]}</h4>
    </div>
  )
}

export default Header;
