import React, {Component} from 'react';
import BOARD from "../pages/BOARD";
import TODO from "../pages/TODO";
import HOME from "../pages/HOME";
import {Route} from "react-router-dom";
import '../defualt.css';

class App extends Component {

  render() {
    return (
        < div className="MainBox">

          <Route exact path="/" component={HOME}/>
          <Route exact path="/TODO/" component={TODO}/>
          <Route exact path="/TODO/:name" component={TODO}/>
          <Route exact path="/BOARD" component={BOARD}/>
        </div>
    )
  }
}

export default App;
