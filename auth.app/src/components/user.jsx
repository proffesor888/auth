import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import {firebaseApp} from '../firebase';

class User extends Component {
    constructor(props) {
      super(props);
    }
    out() {
      firebaseApp.auth().signOut();
    }
    render() {
      return (
        <div>
          <Button onClick={()=> this.out()}>Sign out</Button>
        </div>
      )
    }
  }
  
  export default User;