import React, { Component } from 'react';
import {Button, FormControl, FormGroup, ControlLabel} from 'react-bootstrap';
import {connect} from 'react-redux';
import {firebaseApp, firebaseData} from '../firebase';
import GoaList from '../components/GoaList';
import {addGoal} from '../actions/actions';

class User extends Component {
    constructor(props) {
      super(props);
      this.state = {
        goal: '',
      }
    }
    out() {
      firebaseApp.auth().signOut();
    }
    subGoal() {
      const goal = this.state.goal;
      const email = this.props.email;
      this.props.addGoal(this.state.goal);
      //console.log(this.props)
      firebaseData.push({goal, email});
      
    }
    render() {
      return (
        <div>
          <FormGroup>
            <ControlLabel>Add Goal</ControlLabel>
            <FormControl type='text' placeholder='enter goal' onChange={event=> this.setState({goal: event.target.value})}></FormControl>
            <Button onClick={() => this.subGoal()}>Submit Goal</Button>
          </FormGroup>
          <GoaList/>
          <Button onClick={()=> this.out()}>Sign out</Button>
        </div>
      )
    }
  }

  function mapStateToProps(state) {
   return {
      email: state.login
    }
  }
  
  export default connect(mapStateToProps, {addGoal})(User);