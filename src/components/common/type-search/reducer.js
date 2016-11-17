const initialState = {
    typeOfSearch: ""
};

export default function typeOfSearch(state = initialState, action) {
    switch (action.type) {
        case "SET_TYPEOFSEARCH":
            return { ...state, type: action.type };

        default:
            return state;
    }
}