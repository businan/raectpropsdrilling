import React, { useState } from "react";

const Greeting = (props) => {
    console.log(props);
    const [text, setText] = useState('');

    const handleChange = (event) => {
        const value = event.target.value;
        setText(
            event.target.name = value,
        );
    };
    return (
        <h3>
            Greeting {props.name}
            <hr />
            <input 
            type="text"
            value={text}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter Text"
            id="text"
            />
            <button onClick={() => props.handleClick(text)}>Click</button>
        </h3>
    );
};

export default Greeting;
