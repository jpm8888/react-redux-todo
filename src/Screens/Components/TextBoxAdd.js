import React, {Component} from 'react';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {createTodo, textChange} from "../../AppState/actions/todoActions";


class TextBoxAdd extends Component {
    render() {
        const {value} = this.props;
        return (
            <div style={{display : 'flex', flexDirection : 'row', margin : 5}}>
                <input type={'text'} value={value} onChange={(e)=>this.props.textChange(e.target.value)}/>
                <button onClick={()=>this.props.add()}>Add</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const s = state.todoReducer;
    return {
        value : s.textValue,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        add : ()=> createTodo(),
        textChange : (v)=> textChange(v),
    },dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TextBoxAdd);
