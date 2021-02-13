import store from "../store";

export const TYPE_TEXT_CHANGE = "text_change";
export const TYPE_CREATE_NEW = "create_new";
export const TYPE_DELETE_TODO = "delete_todo";
export const TYPE_TOGGLE = "type_toggle";


export const createTodo = () => (dispatch) =>{
    const state = store.getState().todoReducer;
    const {textValue} = state;

    if (textValue.trim() === ''){
        alert('todo is empty');
        return;
    }

    dispatch({
        type : TYPE_CREATE_NEW,
        payload : null,
    });
};

export const textChange = (v) => (dispatch) =>{
    dispatch({
        type : TYPE_TEXT_CHANGE,
        payload : v,
    });
};

export const deleteTodo = (id) => (dispatch) =>{
    dispatch({
        type : TYPE_DELETE_TODO,
        payload : id,
    });
};

export const toggleTodo = (id) => (dispatch) =>{

    dispatch({
        type : TYPE_TOGGLE,
        payload : id,
    });
};

