import React, { useState } from 'react';

export const UseStateDemo2 = () => {
    var count = 0;
    //create state variable..
    //[score] --> state variable
    //[setScore] --> setter function.. it use to update value of state variable.
    //useSate(0) --> 0 initial value of variable...
    const [score, setScore] = useState(0)

    const increaseCount = () => {
        console.log("Count = ", count)
        count++;
        console.log("after increase count =", count);
    };

    const increaseScore = () => {
        //score++ dont do this
        //do with setter func
        setScore(score + 1) // increease score value..
    }
    return (
        <div style={{ textAlign: "center" }}>
            <h1>USE STATE DEMO 2</h1>
            <h1>Count = {count}</h1>
            <h1>Score = {score}</h1>
            <button onClick={increaseCount}>+</button>
            <button onClick={increaseScore}>increase score</button>
        </div>
    )
}
