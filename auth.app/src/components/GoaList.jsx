import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button} from 'react-bootstrap';
import {addGoal,deleteGoal} from '../actions/actions';
import {firebaseData, firebaseDataComplete} from '../firebase';

class GoaList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            goal:'',
            
        }
    }
    
    complete(key, goal, email) {
        firebaseDataComplete.push({key, goal, email});
        this.props.deleteGoal(key);
        firebaseData.child(key).remove();
    }
    componentDidMount() {
        firebaseData.on('value', snap => {
            let goalList = [];
            snap.forEach(goals => {
                //console.log(goals);
                let value = goals.val();
                let key = goals.key
                goalList.push({value, key});
                });
            this.props.addGoal(goalList);
        })
    }
    
    render() {
       //console.log(this.props)
        return (
            <div>
                <div>
                    
                    {this.props.goal.map((item, index) => {
                        return (
                            <div key={index}>
                                <h3>{item.value.goal} submitted by {item.value.email}</h3>
                                <Button bsStyle='success' onClick={()=>this.complete(item.key, item.value.goal, item.value.email)}>Complete Goal</Button>
                            </div>
                        )
                    })}
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