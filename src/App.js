import React from 'react';
import Form from './Form';
import './App.css';


class App extends React.Component{
  render(){
    return(
      <div className="app">
      <h3>A simple React form</h3>
        <Form />
      </div>
    );
  }
}

export default App;
