

import React,{ useState, useEffect } from 'react';


import functions from '../state/GlobalState.js'

const {useGlobalCounter} = functions

const Page = () => {
    const [count, {decrease,increase}] = useGlobalCounter();
   
    

    return (
        <div>
        <span style={{paddingRight:'20px'}}>NEW PAGE: {count}</span>
        {/* update state by passing callback function */}
        <button onClick={() => increase()}>+1</button>
        {/* update state by passing new value */}
        <button onClick={() => decrease()}>-1</button>
      </div>
    );
  };

  export default Page