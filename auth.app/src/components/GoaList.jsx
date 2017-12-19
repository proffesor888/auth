import React, {Component} from 'react';
import {connect} from 'react-redux';

class GoaList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            goal:''
        }
    }
    showGoals() {
        let mas = this.props.goal.map((item, index) => {
            return <div key={index}>{item.goal}</div>
        });
        return mas;
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

export default connect(mapStateToProps, null)(GoaList);