import React, { Component } from 'react';
import {FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap';
import {firebaseApp} from '../firebase';
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import {connect} from 'react-redux';
import {UserObj} from '../reducers/reducers';
import {createUser} from '../actions/actions';

class Reg extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name:'',
        lastName:'',
        email:'',
        password:'',
        error:''
      }
    }
    register() {
      const {email, password} = this.state;
      firebaseApp.auth().createUserWithEmailAndPassword(email,password)
      .then(data => {
        let store = createStore(UserObj,applyMiddleware(logger));
        store.dispatch(createUser(data));
        console.log(store);
      })
      .catch(error => {
        this.setState({error: error.message});
      })
      
    }
    render() {
      return (
        <div>
          <form>
            <FormGroup>
              <ControlLabel>Enter your name:</ControlLabel>
              <FormControl type='text' placeholder='Name' onChange={event=> this.setState({name:event.target.value})}></FormControl>
              <ControlLabel>Enter your last name:</ControlLabel>
              <FormControl type='text' placeholder='Last Name' onChange={event => this.setState({lastName:event.target.value})}></FormControl>
              <ControlLabel>Enter your email:</ControlLabel>
              <FormControl type='text' placeholder='email' onChange={event=> this.setState({email:event.target.value})}></FormControl>
              <ControlLabel>Enter password:</ControlLabel>
              <FormControl type='password' placeholder='Password' onChange={event=> this.setState({password:event.target.value})}></FormControl>
              <Button onClick={()=> this.register()}>Sign Up</Button>
            </FormGroup>
          </form>
          <div>{this.state.error}</div>
        </div>
      )
    }
  }

 function mapStateToProps(state) {
   return {
     state: state
   }
 }
  
  export default connect(mapStateToProps, {createUser})(Reg);