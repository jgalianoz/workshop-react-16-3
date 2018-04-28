import React, { Component } from 'react';

import Button from "component/Button/"

class App extends Component {
  render() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1>Workshop - React 16.3</h1>
        <h2 className="p-4">
          by Andres Alarcón
        </h2>
        <Button>Hello World!</Button>
      </div>
    );
  }
}

export default App;
