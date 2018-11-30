export const USER = "USER";

export const TYPES = {
    USER: "USER",
}



export const storeData = (userdata) => (dispatch) =>{
    dispatch({
        type:TYPES.USER,
        payload: userdata
    })
}
