import React from 'react';
import classes from './App.module.css';
import { BrowserRouter } from 'react-router-dom';

import Main from './main/main';

class App extends React.Component {

  state = {
    isshow: false,
    persons: [
      { name: "mohammad", lastname: "abbasi" },
      { name: "ali", lastname: "abbasi" },
      { name: "shahrzad", lastname: "torabi" }
    ],
    text: "No text",
    lengtext: 0,
  }

  render() {

    return (
      // <BrowserRouter>
        <div className={classes.App}>
          <Main />
        </div>
      // </BrowserRouter>
    );
  }
}

export default App;




