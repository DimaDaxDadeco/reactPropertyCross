const initialState = {};

export default function selectedRealty(state = initialState, action) {
    switch (action.type) {
        case "SELECT_REALTY":
            state = action;
            return state;

        default:
            return state;
    }
}