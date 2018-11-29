import {USER} from "../Actions/User.Actions";

const initialState = {
    userEntries: []
}

export const userReducer = (state = initialState, action)=>{
    console.log(state);
    switch(action.type){
        case USER:{
            return {
                ...state,
                userEntries: action.payload
            };
        }
        default:
            return state;
    }
}