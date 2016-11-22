const openModal = modalProps => ({
    type: "SET_MODAL",
    modalProps
});

const setLocations = (title, totalResults, recentSearches) => ({
    type: "SET_LOCATIONS",
    title,
    totalResults,
    recentSearches
});

const hasError = (getLocations, dispatch) => {
    const { application_response_code: responseCode } = getLocations.response;
    const errors = {
        200: "ambiguous location",
        201: "unknown location",
        202: "misspelled location",
        210: "coordinate error",
        900: "bad request",
        500: "internal Nestoria error"
    };
    const isError = errors[responseCode];

    if (isError) {
        const responseText = errors[responseCode];
        const modalProps = {
            responseCode,
            responseText,
            type: "error"
        };
        dispatch(openModal(modalProps));
    }

    return isError;
};

const setRecentSearches = (getLocations, dispatch) => {
    const { title } = getLocations.response.locations[0];
    const { total_results: totalResults } = getLocations.response;
    const recentSearches = localStorage.recentSearches ? JSON.parse(localStorage.recentSearches) : [];
    const numOfMatchingElem = recentSearches.findIndex(el => el.title === title);

    if (numOfMatchingElem !== -1) {
        recentSearches.splice(numOfMatchingElem, 1);
    }

    recentSearches.unshift({
        title,
        totalResults
    });

    localStorage.recentSearches = JSON.stringify(recentSearches);

    dispatch(setLocations(title, totalResults, recentSearches));
};

const getLocationsQuery = (url, dispatch) => {
    fetch(url)
        .then(response => response.json())
        .then(getLocations => hasError(getLocations, dispatch) || setRecentSearches(getLocations, dispatch));
};

export const getMyLocations = coordinates => dispatch => {
    const url = `http://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=1&centre_point=${coordinates}`;
    getLocationsQuery(url, dispatch);
};

export const getLocations = placeName => dispatch => {
    const url = `http://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=1&place_name=${placeName}`;
    getLocationsQuery(url, dispatch);
};

export const resetListings = () => ({ type: "RESET_LISTINGS" });