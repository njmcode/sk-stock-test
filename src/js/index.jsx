// Framework imports
import React from 'react';
import ReactDOM from 'react-dom';

// Component imports
import App from './core/App.jsx';

// Dummy data import
import getData from './data/items.js';

console.log('ITEMS', getData());

// Kick off the app by rendering the main component
ReactDOM.render(<App items={getData()} currencySymbol="$" />, document.getElementById('app'));