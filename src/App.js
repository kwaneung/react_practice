import './App.css';
import React, {Fragment} from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FunctionComponent from "./component/FunctionComponent";
import NotFound from "./component/NotFound";
import App2 from "./App2";

function App() {
    return (
        <Fragment>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App2 />}></Route>
                    <Route path="/product/:productId" element={<FunctionComponent />}></Route>
                    {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </BrowserRouter>
        </Fragment>
    );
}

export default App;
