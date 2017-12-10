import React, { Component } from 'react';
import {FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap';
import {Link} from 'react-router';
import User from '../components/user';
import Reg from '../components/reg';
import Form from '../components/form';
import {firebaseApp} from '../firebase';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '', 
      error: ''
    }
  }
  signIn(){
    const email = this.state.login;
    const password = this.state.password;
    firebaseApp.auth().createUserWithEmailAndPassword(email,password)
    .catch((error) => {
      this.setState({error: error.message});
    })
  }
  render() {
    return (
      <div>
        <form>
          <FormGroup>
            <ControlLabel>Enter Login:</ControlLabel>
            <FormControl type='text' placeholder='Login' onChange={event => this.setState({login: event.target.value})}></FormControl>
            <ControlLabel>Enter password:</ControlLabel>
            <FormControl type='password' placeholder='Password' onChange={event => this.setState({password: event.target.value})}></FormControl>
            <Button onClick={()=> this.signIn()}>Sign In</Button>
            <Link to={'reg'}><Button>Click to create an account</Button></Link>
          </FormGroup>
        </form>
        <div>{this.state.error}</div>
      </div>
    )
  }
}

export default App;
