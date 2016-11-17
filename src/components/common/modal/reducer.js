const initialState = {
    responseCode: null,
    responseText: ""
};

export default function modalError(state = initialState, action) {
    switch (action.type) {
        case "SET_ERROR":
            return { ...state, responseCode: action.responseCode, responseText: action.responseText };

        default:
            return state;
    }
}