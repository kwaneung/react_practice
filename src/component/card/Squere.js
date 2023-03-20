import React, {Fragment} from "react";

const Squere = (props) => {
    const squereStyle = {
        height: 150,
        backgroundColor: props.color
    };

    return (
        <Fragment>
            <div style={squereStyle}/>
        </Fragment>
    )
}

export default Squere;