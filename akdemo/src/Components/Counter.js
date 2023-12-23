// import react

import React from 'react';
import { useState } from 'react';

// create counter functional component

const Counter = () => {

    // create the state for counter
    // set the initial value to 0
    // use the useState hook
     const [counter, setCounter] = useState(0);

     // create the increment function

        const increment = () => {
            setCounter(counter + 1);
        }

        // create the decrement function

        const decrement = () => {
            setCounter(counter - 1);
        }

        // create reset function

        const reset = () => {
            setCounter(0);
        }




    return (
        <div>
            <h1 style={{color: counter < 0 ? 'red':'blue'}}>Counter : {counter}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default Counter;


