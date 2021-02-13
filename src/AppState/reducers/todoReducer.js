import {nanoid} from 'nanoid'
import {TYPE_CREATE_NEW, TYPE_DELETE_TODO, TYPE_TEXT_CHANGE, TYPE_TOGGLE} from "../actions/todoActions";


const initialState = {
    textValue: '',

    todos : [
        {
            id : nanoid(10), //random generated id for length 10
            text : 'Buy milk',
            done : false,
        },
        {
            id : nanoid(10),
            text : 'Finish sample application by Saturday',
            done : true,
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
                        done : false,
                    }
                ],
                textValue: '',
            }

        case TYPE_DELETE_TODO:
            return {
                ...state,
                todos : state.todos.filter((item)=> (item.id !== action.payload))
            }

        case TYPE_TOGGLE:
            return {
                ...state,
                todos : state.todos.map((item)=> {
                    if (item.id === action.payload){
                        return {
                            ...item,
                            done : !item.done
                        }
                    }
                    return item;
                })
            }
        default : return state;
    }
}
