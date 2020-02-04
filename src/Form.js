import React from 'react';
import './App.css';

class Form extends React.Component {
  state ={
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: ''
  };
  change =e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onSubmit = (e) => { 
      e.preventDefault(); 
      console.log(this.state);
  }

  render(){
    return(
      <form>
      <input 
        name = 'firstName'
        placeholder ='firstname' 
        value = {this.state.firstName}
        onChange={e => this.change(e)}
        />
      <input 
        name = 'lastName'
        placeholder ='lastname' 
        value = {this.state.lastName}
        onChange={e => this.change(e)}
        />
      <input 
        name="username"
        placeholder ='username' 
        value = {this.state.username}
        onChange={e => this.change(e)}
        />
      <input 
        name = "email"
        placeholder ='email' 
        value = {this.state.email}
        onChange={e => this.change(e)}
        />
      <input 
        type= "password"
        name = "password"
        placeholder ='password' 
        value = {this.state.password}
        onChange={e => this.change(e)}
        />

        <button onClick={(e) => this.onSubmit(e)}>Submit</button>
      </form>
    );
  }
}


export default Form;
