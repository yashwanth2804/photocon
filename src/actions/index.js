import axios from 'axios';

/// Action creators , which dispatches an action type and payload to the reducers

// instaFetchAPI action creator take the url and dispatches of type `LOAD_INSTAS` to reducers
export const instaFetchAPI = (url) => {
    console.log(url);
    return (dispatch) => {

        axios
            .get(
                url
            )

            .then(res => dispatch(

                { type: 'LOAD_INSTAS', newInstas: res}
            ))
            .catch(error => console.log(error));;


    }
};


// hitLike action creator take the timestamp and dispatches of type `LIKE` to reducers
export const hitLike = (timestamp) => {

    
    return (dispatch) => {

        dispatch({ type: "LIKE", timestamp: timestamp });

    }

};


// hitComment action creator take the timestamp, cmtTxt and dispatches of type `COMMENT` to reducers
export const hitComment = (timestamp, cmtTxt) => {

     
    return (dispatch) => {

        dispatch({ type: "COMMENT", payload: { timestamp, cmtTxt } });

    }

};

// hitComment action creator take the timestamp, cmtTxt and dispatches of type `COMMENT` to reducers
export const uploadImageAndInfo = (url,info) => {

     
    return (dispatch) => {

        dispatch({ type: "IMAGE_UPLOAD", payload:{url,info} });

    }

};

// updateInfo action creator take the timestamp, info  and dispatches of type `UPDATE_INFO` to reducers
export const updateInfo = (timestamp,info) => {

    
    return (dispatch) => {

        dispatch({ type: "UPDATE_INFO", payload:{timestamp,info} });

    }

};


// deletePost action creator take the timestamp, info  and dispatches of type `DELETE_POST` to reducers
export const deletePost = (timestamp) => {

    
    return (dispatch) => {

        dispatch({ type: "DELETE_POST", timestamp });

    }

};


