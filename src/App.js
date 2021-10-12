import React from 'react';
import { ProfileConfig } from './config/profile.config';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1><code>{ProfileConfig.title}</code></h1>
        <h3><code>{ProfileConfig.subtitle}</code></h3>
      </header>
    </div>
  );
}

export default App;
