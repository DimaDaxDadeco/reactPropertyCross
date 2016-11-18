const initialState = {
    listings: []
};

export default function favouritesList(state = initialState, action) {
    switch (action.type) {
        case "SET_FAVOURITES":
            return {
                ...state,
                listings: [...action.listings]
            };

        default:
            return state;
    }
}