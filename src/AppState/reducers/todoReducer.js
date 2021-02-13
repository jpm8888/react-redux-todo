import {nanoid} from 'nanoid'
import {TYPE_CREATE_NEW, TYPE_DELETE_TODO, TYPE_TEXT_CHANGE} from "../actions/todoActions";


const initialState = {
    textValue: '',

    todos : [
        {
            id : nanoid(10), //random generated id for length 10
            text : 'Buy milk',
        },
        {
            id : nanoid(10),
            text : 'Finish sample application by Saturday',
        },
    ]
};


export default function (state = initialState, action) {
    switch (action.type) {
        case TYPE_TEXT_CHANGE:
            return {
                ...state,
                textValue : action.payload,
            }

        case TYPE_CREATE_NEW:
            return {
                ...state,
                todos : [
                    ...state.todos,
                    {
                        id : nanoid(10),
                        text : state.textValue,
                    }
                ],
                textValue: '',
            }

        case TYPE_DELETE_TODO:
            return {
                ...state,
                todos : state.todos.filter((item)=> (item.id !== action.payload))
            }
        default : return state;
    }
}
