import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementCounter, incrementCounter, resetCounter } from '../services/actions/counterAction';

const Counter = () => {
    // const [count, setCount] = useState(0)
    const count = useSelector(state => state.count)
    const dispatch = useDispatch()
    const handleIncrement = () => {
        //   setCount(count + 1)
        dispatch(incrementCounter())
    }
    const handleDecrement = () => {
        dispatch(decrementCounter())
    }
    const handleReset = () => {
            dispatch(resetCounter())
        }
    return (
        <div>
            <h2>Redux Counter APP</h2>
            {/* <h3>Count : {count}</h3> */}
            <h3>Count : {count}</h3>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
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
//05.Providing store in react
//06.Use store