const initialState = {
    eachRealtyInfo: null
};

export default function locationsList(state = initialState, action) {
    switch (action.type) {
        case "SELECT_REALTY":
            return { ...state, eachRealtyInfo: action.eachRealtyInfo };

        default:
            return state;
    }
}