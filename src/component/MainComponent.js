import React, {Fragment} from "react";
import {Link} from "react-router-dom";

const linkList = {

}

const MainComponent = () => {
    return (
        <Fragment>
            <div>
                <h1>이곳은 Main.js 입니다.</h1>
                <h2>아래는 메뉴 링크</h2>
                <ul>
                    <Link to="/product/123"><li>/product/123</li></Link>
                    <Link to="/product/124"><li>/product/124</li></Link>
                    <Link to="/product/125"><li>/product/125</li></Link>
                    <Link to="/eeeee"><li>에러 유도</li></Link>
                </ul>
                <article>
                    <h1>My First Component</h1>
                    <ol>
                        <li>Components: UI Building Blocks</li>
                        <li>Defining a Component</li>
                        <li>Using a Component</li>
                    </ol>
                </article>
                ㅁㄴㅇㄹㅁㄴㅇㄹ
                <h1>My First Component</h1>
                <ol>
                    <li>Components: UI Building Blocks</li>
                    <li>Defining a Component</li>
                    <li>Using a Component</li>
                </ol>
            </div>
        </Fragment>
    );
}

export default MainComponent;