import React from "react";
import Greeting from "./Greeting";

const Hello = (props) => {
    console.log(props);
    return (
        <div>
            <h1>Hello World~ </h1>
            <Greeting name={props.name} handleClick={props.handleClick}/>
        </div>
    );
};

export default Hello;
