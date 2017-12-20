import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button} from 'react-bootstrap';
import {deleteGoal} from '../actions/actions';

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
                <h3>{item.goal}</h3>
                <Button bsStyle='danger' onClick={()=>this.delete(item.goal)}>Delete Goal</Button>
                </div>
            )
        });
        return mas;
    }
    delete(text) {
        this.props.deleteGoal(text);
    }
    render() {
        console.log(this.props)
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
    return {
        goal: state.UserGoalList
    }
}

export default connect(mapStateToProps, {deleteGoal})(GoaList);