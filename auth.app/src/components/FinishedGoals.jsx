import React, { Component } from 'react';
//import {connect} from 'react-redux';
import {addGoal} from '../actions/actions';
import {firebaseDataComplete} from '../firebase';

class FinishedGoals extends Component {
    constructor(props) {
      super(props);
      this.state = {
        goals: []
      }
    }
    componentDidMount(){
      firebaseDataComplete.on('value', snap => {
        let mas = [];
        snap.forEach(goal => {
          let value = goal.val();
          let key = goal.key
          mas.push({value, key});
        })
        this.setState({goals: mas});
      })
    }
    render() {
      return (
        <div>
          {this.state.goals.map((item, index) => {
            return (
              <div key={index}>
                <h3>{item.value.goal} finished by {item.value.email}</h3>
              </div>
            )
          })}
        </div>
      )
    }
  }

  export default FinishedGoals;