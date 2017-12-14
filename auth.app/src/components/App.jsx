import React, { Component } from 'react';
import {FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap';
import {Link} from 'react-router';
import store from '../store';
import {UsersMas} from '../reducers/reducers';
import {connect} from 'react-redux';
import {createUser} from '../actions/actions';
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
    firebaseApp.auth().signInWithEmailAndPassword(email,password)
    .then(data => {
      this.props.createUser(data);
    })
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

function mapStateToProps(state) {
  return {
    state
  }
}

export default connect(mapStateToProps, {createUser})(App);
