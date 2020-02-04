import React from 'react';
import Form from './Form';
import './App.css';


class App extends React.Component{
  onSubmit = (fields) =>{
console.log("App comp got: ", fields);
  }
  render(){
    return(
      <div className="app">
      <h3>A simple React form</h3>
        <Form onSubmit={fields => this.onSubmit(fields)}/>
      </div>
    );
  }
}

export default App;
