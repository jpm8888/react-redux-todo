import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import TextBoxAdd from "./Components/TextBoxAdd";
import ListItem from "./Components/ListItem";


class ScreenTodo extends Component {
    render() {
        const {todos} = this.props;
        return (
            <div>
                <TextBoxAdd/>

                {
                    todos.map(item=>{
                        return <ListItem todo={item} key={item.id}/>
                    })
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const s = state.todoReducer;
    return {
        todos : s.todos,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({

    },dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ScreenTodo);
