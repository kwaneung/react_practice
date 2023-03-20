import './App.css';
import React, {Fragment, useState} from "react";
import Nav from "./component/bootstrap/Nav";
import Header from "./component/bootstrap/Header";
import Aside from "./component/bootstrap/Aside";
import Section1 from "./component/bootstrap/Section1";
import Section2 from "./component/bootstrap/Section2";
import Section3 from "./component/bootstrap/Section3";
import Section4 from "./component/bootstrap/Section4";
import Footer from "./component/bootstrap/Footer";
import Div from "./component/bootstrap/div";
import Card from "./component/card/Card";

function App() {
    const [color, setColor] = useState("yellow");

    return (
        <Fragment>
            {/* Navigation*/}
            <Nav/>
            {/* Mashead header*/}
            <Header/>
            <section className="download bg-primary text-center" id="download">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 mx-auto">
                            <div className="badges">
                                <Card color={color}/>
                            </div>
                        </div>
                        <div className="col-md-8 mx-auto">
                            <button onClick={()=>setColor("yellow")}> 노란색 </button>
                            <button onClick={()=>setColor("blue")}> 파란색 </button>
                        </div>
                    </div>
                </div>
            </section>
            {/* Quote/testimonial aside*/}
            <Aside/>
            {/* App features section*/}
            <Section1/>
            {/* Basic features section*/}
            <Section2/>
            {/* Call to action section*/}
            <Section3/>
            {/* App badge section*/}
            <Section4/>
            {/* Footer*/}
            <Footer/>
            {/* Feedback Modal*/}
            <Div/>
            {/* Bootstrap core JS*/}
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
            {/* Core theme JS*/}
            <script src="js/scripts.js"></script>
            {/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * **/}
            {/* * *                               SB Forms JS                               * **/}
            {/* * * Activate your form at https://startbootstrap.com/solution/contact-forms * **/}
            {/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * **/}
            <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
        </Fragment>
    );
}

export default App;
