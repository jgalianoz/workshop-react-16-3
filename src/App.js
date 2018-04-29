import React, { Component } from "react";

import Button from "component/Button/";
import Login from "page/Login";

class App extends Component {
  render() {
    return (
      <div className="flex flex-col content-between bg-grey-lighter min-h-screen">
        <div className="flex justify-end">
          <div className="block py-2 mx-4">
            <span className="mr-2">Choose a lenguage:</span>
            <a href="#" className="text-indigo hover:text-grey-dark no-underline">English</a>
            <span className="mx-2">|</span>
            <a href="#" className="text-indigo hover:text-grey-dark no-underline">Español</a>
          </div>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center">
          <Login />
        </div>
        <div className="flex flex-col items-center text-center">
          <span className="py-4 text-xs text-grey-darker">Workshop - React 16.3 | Andres Alarcón</span>
        </div>
      </div>
    );
  }
}

export default App;
