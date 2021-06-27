import UserActionTypes from './user.types'

const INITIAL_STATE = {
    currentUser: null,
    error: null     
}

//state= INITIAL_STATE which is basically saying that if state has nothing in it or the value we're passing is empty then fall back on the value after the question mark
const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case UserActionTypes.GOOGLE_SIGN_IN_SUCCESS:
        case UserActionTypes.EMAIL_SIGN_IN_SUCCESS:
            return{
                ...state,
                currentUser: action.payload,
                error: null
            }

        case UserActionTypes.EMAIL_SIGN_IN_FAILURE:
            return{
                ...state,
                error: action.payload
            }
        case UserActionTypes.GOOGLE_SIGN_IN_FAILURE:
            return{
                ...state,
                error: action.payload
            }
        default: return state;
    }
}


export default userReducer;