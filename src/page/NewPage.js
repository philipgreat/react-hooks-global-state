

import React from 'react';


import functions from '../state/GlobalState.js'

const {useCounter} = functions

const Page = () => {
    const [count, changeState] = useCounter();
   
    const {decrease,increase} =changeState

    return (
      <div style={{ paddingRight:'10px'}}>
        <span style={{paddingRight:'20px'}}>Page Counter: {count}</span>
        {/* update state by passing callback function */}
        <button onClick={() => decrease()}>+1</button>
        {/* update state by passing new value */}
        <button onClick={() => increase()}>-1</button>
      </div>
    );
  };

  export default Page