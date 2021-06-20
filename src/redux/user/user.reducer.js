const INITIAL_STATE = {
    currentUser: null     
}

//state= INITIAL_STATE which is basically saying that if state has nothing in it or the value we're passing is empty then fall back on the value after the question mark
const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'SET_CURRENT_USER':
            return{
                ...state,
                currentUser: action.payload
            }
        default: return state;
    }
}


export default userReducer;