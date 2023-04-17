import React, {Fragment} from "react";
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <Fragment>
            <h1 style={{border: '1px solid black'}}>Not Found!!</h1>
            <ul>
                <Link to="/"><li>/Main</li></Link>
            </ul>
        </Fragment>
    )
}
export default NotFound;