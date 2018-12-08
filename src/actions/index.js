import axios from 'axios';


export const tweetsFetchAPI = (url) => {
    console.log(url);
    return (dispatch) => {

        axios
            .get(
                url
            )

            .then(res => dispatch(

                { type: 'LOAD_TWEETS', newInstas: res}
            ))
            .catch(error => console.log("errrrr"));;


    }
};


////hit likes 
export const hitlike = (timestamp) => {

    //redux thunk
    return (dispatch) => {

        dispatch({ type: "LIKE", timestamp: timestamp });

    }

};


/// hit enter comment
export const hitComment = (timestamp, cmtTxt) => {

    //redux thunk
    return (dispatch) => {

        dispatch({ type: "COMMENT", payload: { timestamp, cmtTxt } });

    }

};

/// upload image 
export const uploadImage = (url) => {

    //redux thunk
    return (dispatch) => {

        dispatch({ type: "IMAGE_UPLOAD", url:url });

    }

};


