export const USER = "USER";

export const TYPES = {
    USER: "USER",
    THREADS: "THREADS",
    THREADID: "THREADID"
}

export const storeData = (userdata) => (dispatch) =>{
    dispatch({
        type:TYPES.USER,
        payload: userdata
    })
}

export const storeThreads = (threadData) => (dispatch) =>{
    dispatch({
        type:TYPES.THREADS,
        payload: threadData
    })
}

export const storeThreadID = (threadID) => (dispatch) =>{
    dispatch({
        type:TYPES.THREADID,
        payload: threadID
    })
}