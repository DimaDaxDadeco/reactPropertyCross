const initialState = {
    listings: [],
    totalResults: null,
    numPage: 0
};

export default function locationsList(state = initialState, action) {
    switch (action.type) {
        case "SET_LISTINGS":
            return {
                ...state,
                listings: [...state.listings, ...action.listings],
                totalResults: action.totalResults,
                numPage: action.numPage
            };

        case "RESET_LISTINGS":
            return {
                ...state,
                listings: initialState.listings,
                totalResults: initialState.totalResults,
                numPage: initialState.numPage
            };

        default:
            return state;
    }
}