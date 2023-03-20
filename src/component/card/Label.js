import React, {Fragment} from "react";

const Label = (props) => {
    const labelStyle = {
        fontFamily: "sans-serif",
        fontWeight: "bold",
        padding: 13,
        margin: 0
    };

    return (
        <Fragment>
            <p style={labelStyle}>{props.color}</p>
        </Fragment>
    );
}

export default Label;