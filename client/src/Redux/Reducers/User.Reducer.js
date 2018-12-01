import {TYPES} from "../Actions/User.Actions";

const initialState = {
    userEntries: [],
    threadEntries: [],
    threadID: null
}

export const userReducer = (state = initialState, action)=>{
    switch(action.type){
        case TYPES.USER:{
            return {
                ...state,
                userEntries: action.payload
            };
        }
        case TYPES.THREADS:{
            return{
                ...state,
                threadEntries: action.payload
            }
        }
        case TYPES.THREADID:{
            return{
                ...state,
                threadID: action.payload
            }
        }
        default:
            return state;
    }
}