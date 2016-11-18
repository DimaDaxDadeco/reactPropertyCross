export const resetModalError = () => dispatch => {
    dispatch({
        type: "SET_ERROR",
        responseCode: null,
        responseText: ""
    });
};