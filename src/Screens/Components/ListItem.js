import './ListItem.css';
import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {deleteTodo, toggleTodo} from "../../AppState/actions/todoActions";


class ListItem extends Component {
    render() {
        const {todo} = this.props;
        const {done} = todo;

        let markText = (done) ? "Undo" : "Done";
        let textClassName = (done) ? "todo_text_done" : "todo_text_undone";

        return (
            <div style={{display : 'flex', flexDirection : 'row', margin : 5}}>
                <a href="#" className="delete" onClick={()=>this.props.delete(todo.id)}>Delete</a>
                <a href="#" className={"mark_as_done_active"} onClick={()=>this.props.toggle(todo.id)}>{markText}</a>
                <label className={textClassName}>{todo.text}</label>
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
        delete : (id)=> deleteTodo(id),
        toggle : (id)=> toggleTodo(id),
    },dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
