import React from 'react';
import './app.css'
import * as styles from './styles'
import Component1 from './functional/component1'
import Container1 from './containers/container1'

function App() {
  const fileStyles = {
    color: 'red'
  }

  return (
    <div className="App">
      <div style={styles.styles}>Styles from global styles.js</div>
      <div style={fileStyles}>Styles from file</div>
      React
      <button>style from app.css</button>  Recommended method

      <Component1 name="moe" age={25} />
      <Container1 nickname="mo" />
    </div>
  );
}

export default App;
