import React from 'react';
const MyComponent = ({text}) => {
    return (
        <div>
            <h1>Welcome to MyComponent!</h1>
            <p>Use the Component on the Other Projects</p>
            <button>{text}</button>
        </div>
    );
};

export default MyComponent;
