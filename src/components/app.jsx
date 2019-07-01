/* eslint-disable no-unused-vars */
import React from "react";
import "../../dist/styles/App.scss";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

class App extends React.Component {

    render() {
        return (
          <React.Fragment>
            <Header/>
            <Main/>
            <Footer/>
          </React.Fragment>  
        );
    }
}

export default App;