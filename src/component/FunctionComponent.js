import React, {Fragment} from "react";
import {Link, useParams} from "react-router-dom";

const FunctionComponent = () => {
    const { productId } = useParams();
    return (
        <Fragment>
            <h1 style={{border: '1px solid black'}}>Function Component Ref!!</h1>
            <h1>Param : {productId}</h1>
            <ul>
                <Link to="/"><li>/Main</li></Link>
            </ul>
        </Fragment>
    )
}
export default FunctionComponent;