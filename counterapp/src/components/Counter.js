import React, { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="counter-container">
            <h2>Counter: {count}</h2>
            <button className="btn" onClick={() => setCount(count + 1)}>+</button>
            <button className="btn" onClick={() => setCount(count - 1)}>-</button>
            <button className="reset-btn" onClick={() => setCount(0)}>Reset</button>
        </div>
    );
}

export default Counter;
