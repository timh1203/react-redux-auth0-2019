import React from 'react';
import './app.css'
import ConditionalRendering1 from './functional/ConditionalRendering1'
import ConditionalRendering2 from './functional/ConditionalRendering2'
import ConditionalRendering3 from './functional/ConditionalRendering3'

function App() {
  return (
    <div className="App">
      <ConditionalRendering1 />
      <ConditionalRendering2 />
      <ConditionalRendering3 />
    </div>
  );
}

export default App;
