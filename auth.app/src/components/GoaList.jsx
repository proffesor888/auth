import React, {Component} from 'react';
import {connect} from 'react-redux';

class GoaList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            goal:''
        }
    }
    render() {
        return (
            <div>
                {this.props.goal}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        goal: state.goal
    }
}

export default connect(mapStateToProps, null)(GoaList);