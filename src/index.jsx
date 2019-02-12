/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom";
import "../dist/styles/App.scss";

class App extends React.Component {

    render() {
        return (
            <div>
                <h1>This is a test designed to provoke an emotional response...
                    Shall we continue?
                </h1>
            </div>
        );
    }
}

export default App;
ReactDOM.render(<App />, document.getElementById("app"));
