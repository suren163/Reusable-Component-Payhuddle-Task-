import React from 'react';
const MyComponent = ({increment, decrement, count, setCount}) => {
    function handleIncrement()
    {
        setCount(count + 1);
        console.log("Increment by 1");
    }
    function handleDecrement()
    {
        setCount(count - 1);
        console.log("Decrement by 1");
    }
    return (
        <div>
            <h1>Welcome to MyComponent!</h1>
            <p>Use the Component on the Other Projects</p>
            <h2>{count}</h2>
            <button className='btn btn-primary' onClick={()=>handleIncrement()}>{increment}</button>
            <button className='btn btn-primary' onClick={()=>handleDecrement()}>{decrement}</button>
        </div>
    );
};

export default MyComponent;
