import {TYPES} from "../Actions/User.Actions";

const initialState = {
    userEntries: [],
}

export const userReducer = (state = initialState, action)=>{
    switch(action.type){
        case TYPES.USER:{
            return {
                ...state,
                userEntries: action.payload
            };
        }
        default:
            return state;
    }
}
