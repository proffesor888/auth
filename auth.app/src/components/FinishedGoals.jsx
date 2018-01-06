import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addFinishedGoal} from '../actions/actions';
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
        this.props.addFinishedGoal(mas);
      })
    }
    render() {
      return (
        <div>
          {this.props.goal.map((item, index) => {
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

  function mapStateToProps (state) {
    return {
      goal: state.FinishedList
    }
  }

  export default connect(mapStateToProps, {addFinishedGoal})(FinishedGoals);