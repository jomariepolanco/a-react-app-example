import React, { Component } from 'react';
import moment from 'moment';
import ExampleComponent from './ExampleComponent'
import TestComponent from './TestComponent'
//react and moment are both npm packages
//pulling in specific content from these two packages - like python
//being imported from node_modules folder
//example & testcomponent are files from same directory

// Add your code own within the return statement

class App extends Component {
  render() {

    return (
      <div className="App">
        <header className="App-header">
          {/* {moment().format('MMMM Do YYYY, hh:mm:ss a')} */
          "Now"}
        </header>
        <p className="App-intro">
          In React apps, we write JSX - it looks like HTML, and uses a lot of HTML syntax.
          JSX lets us include JavaScript functions right along with the HTML, and also
          allows us to add in components, which are separate, self-contained chunks of JSX.
        </p>
        <ExampleComponent />
        <TestComponent />

      </div>
    );
  }
}

export default App;
//allowing other files to import things from App.js file
//App class is the main thing we want to export from this file