import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Calendar from './collections/Calendar.js';
import AlbumDueDate from './models/AlbumDueDate.js';


let calendar = new Calendar({
  endpoint: '/api/v1/calendar',
  model: AlbumDueDate,
  format: (json) => json.dueDates
})

ReactDOM.render(
  <App calendar={calendar} />,
  document.getElementById('root')
);
