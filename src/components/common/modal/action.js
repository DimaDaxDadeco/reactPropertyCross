export const resetModalError = () => dispatch => {
    dispatch({
        type: "SET_FAVOURITES",
        responseCode: null,
        responseText: ""
    });
};