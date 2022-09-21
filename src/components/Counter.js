import React, { useState } from 'react';

const Counter = () => {
    // const [count, setCount] = useState(0)
    const handleIncrement = () => {
    //   setCount(count + 1)
    }
    return (
        <div>
            <h2>Redux Counter APP</h2>
            {/* <h3>Count : {count}</h3> */}
            <h3>Count : 0</h3>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    );
};

export default Counter;

//Counter1 -> Counter2 -> Counter3 -> Counter4

// 01.state - count - 0
// 02.actions - increment, decrement, reset
// 03.reducer - increment -> count + 1 
//         - decrement -> count - 1
//         - reset -> count = 0

//04.store -