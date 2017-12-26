import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button} from 'react-bootstrap';
import {addGoal,deleteGoal} from '../actions/actions';
import {firebaseData, firebaseDataComplete} from '../firebase';

class GoaList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            goal:''
        }
    }
    showGoals() {
        let mas = this.props.goal.map((item, index) => {
            return (
                <div key={index}>
                <h3>{item.goal.goal} submited by {item.goal.email}</h3>
                <Button bsStyle='success' onClick={()=>this.complete(item.key)}>Complete Goal</Button>
                </div>
            )
        });
        return mas; 
    }
    complete(key) {
        firebaseDataComplete.push({key});
        this.props.deleteGoal(key);
        firebaseData.child(key).remove();
    }
    componentDidMount() {
        firebaseData.on('value', snap => {
            let goal = {};
            snap.forEach(goals => {
                console.log(goals);
                goal.value = goals.val();
                goal.key = goals.key
                //goal.value = goals.val();
                //goal.key = goals.key;
                this.props.addGoal(goal);
                });
                
        })
    }
    render() {
       //console.log(this.props)
        return (
            <div>
                <div>
                    {this.showGoals()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state.UserGoalList)
    return {
        goal: state.UserGoalList
    }
}

export default connect(mapStateToProps, {addGoal,deleteGoal})(GoaList);