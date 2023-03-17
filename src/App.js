import './App.css';
import ClassComponent from "./component/ClassComponent";
import FunctionComponent from "./component/FunctionComponent";
import {Fragment} from "react";

function App() {
    return (
        <Fragment>
            <ClassComponent />
            <FunctionComponent />
        </Fragment>
    );
}

export default App;
