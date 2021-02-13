
export const TYPE_INCREMENT = "increment";
export const TYPE_DECREMENT = "decrement";


export const increment = () => (dispatch) =>{
    dispatch({
        type : TYPE_INCREMENT,
        payload : null,
    });
};

export const decrement = () => (dispatch) =>{
    dispatch({
        type : TYPE_DECREMENT,
        payload : null,
    });
};
