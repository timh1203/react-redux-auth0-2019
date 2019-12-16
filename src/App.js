import React from 'react';
import './app.css'
import * as styles from './styles'

function App() {
  const fileStyles = {
    color: 'red'
  }

  return (
    <div className="App">
      <div style={styles.styles}>Styles from global styles.js</div>
      <div style={fileStyles}>Styles from file</div>
      React
      <button>style from app.css</button>  {/* Recommended method*/}
    </div>
  );
}

export default App;
