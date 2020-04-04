import React from 'react';
import logo from './logo.svg';
import './App.css';
import NewPage  from './page/NewPage.js'

import functions from './state/GlobalState.js'

const {useCounter} = functions

const Counter = () => {
  const [count, {decrease,increase}] = useCounter();
  
  
  return (
    <div>
      <span style={{paddingRight:'20px'}}>Counter: {count}</span>
      {/* update state by passing callback function */}
      <button onClick={() => decrease()}>+1</button>
      {/* update state by passing new value */}
      <button onClick={() => increase()}>-1</button>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <div><Counter/><NewPage/></div>
      </header>
    </div>
  );
}

export default App;
