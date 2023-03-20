import React from "react";
import Label from "./Label";
import Squere from "./Squere";
import "./Card.css"


const Card = (props) => {
    return (
        <div class="card">
            <Squere color={props.color}/>
            <Label color={props.color}/>
        </div>
    );
}

export default Card;
