const initialState = {
    selectedRealty: null
};

export default function locationsList(state = initialState, action) {
    switch (action.type) {
        case "SELECT_REALTY":
            return { ...state, selectedRealty: action.selectedRealty };

        default:
            return state;
    }
}