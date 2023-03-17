import './App.css';
import {Fragment} from "react";
import Nav from "./component/bootstrap/Nav";
import Header from "./component/bootstrap/Header";
import Aside from "./component/bootstrap/Aside";
import Section1 from "./component/bootstrap/Section1";
import Section2 from "./component/bootstrap/Section2";
import Section3 from "./component/bootstrap/Section3";
import Section4 from "./component/bootstrap/Section4";
import Footer from "./component/bootstrap/Footer";
import Div from "./component/bootstrap/div";

function App() {
    return (
        <Fragment>
            {/* Navigation*/}
            <Nav/>
            {/* Mashead header*/}
            <Header/>
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
