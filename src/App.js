import './App.css';
import React, {Fragment} from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FunctionComponent from "./component/FunctionComponent";
import NotFound from "./component/NotFound";
import MainComponent from "./component/MainComponent";
import {Counter} from "./component/CounterComponent";
function App() {
    return (
        <Fragment>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainComponent />}></Route>
                    <Route path="/product/:productId" element={<FunctionComponent />}></Route>
                    <Route path="/counter" element={<Counter />}></Route>
                    {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </BrowserRouter>
        </Fragment>
    );
}

export default App;
