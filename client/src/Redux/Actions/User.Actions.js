export const USER = "USER";

export const storeData = (userdata) => (dispatch) =>{
    dispatch({
        type:USER,
        payload: userdata
    })
}