import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";


class ScreenTodo extends Component {
    render() {

        return (
            <div style={{display : 'flex', flexDirection : 'row'}}>
                <p>Hello todo</p>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const s = state.todoReducer;
    return {

    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({

    },dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ScreenTodo);
