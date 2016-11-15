const initialState = {
    title: "",
    totalResults: null,
    recentSearches: localStorage.recentSearches ? JSON.parse(localStorage.recentSearches) : []
};

export default function locationsList(state = initialState, action) {
    switch (action.type) {
        case "SET_LOCATIONS":
            return { ...state, title: action.title, totalResults: action.totalResults, recentSearches: action.recentSearches }

        default:
            return state;
    }
}