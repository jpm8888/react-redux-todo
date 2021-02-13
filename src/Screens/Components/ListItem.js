import './ListItem.css';
import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";


class ListItem extends Component {
    render() {
        const {todo} = this.props;

        return (
            <div style={{display : 'flex', flexDirection : 'row', margin : 5}}>
                <a href="#" className="mark_as_done_inactive">Mark as done</a>
                <a href="#" className="delete">Delete</a>
                <label className="todo_text_undone">{todo.text}</label>

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

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
