const numOfMatchingElem = (title, recentSearches) => {
    const titleList = [];
    recentSearches.forEach(item => {
      titleList.push(item.title);
    });
    const numOfElement = titleList.indexOf(title);
    return numOfElement;
};

const openModal = (responseCode, responseText) => ({
        type: "SET_ERROR",
        responseCode,
        responseText
});

const getLocationsQuery = (url, dispatch) => {
    fetch(url)
        .then(response => response.json())
        .then(getLocations => {

            const { application_response_code: responseCode } = getLocations.response;
            const errors = {
                "200": "ambiguous location",
                "201": "unknown location",
                "202": "misspelled location",
                "210": "coordinate error",
                "900": "bad request",
                "500": "internal Nestoria error"
            };
            const hasError = !!errors[responseCode];

            if (hasError) {
                const responseText = errors[responseCode];
                dispatch(openModal(responseCode, responseText));
                return;
            }

            const title = getLocations.response.locations[0].title;
            const totalResults = getLocations.response.total_results;
            const recentSearches = localStorage.recentSearches ? JSON.parse(localStorage.recentSearches) : [];

            if (numOfMatchingElem(title, recentSearches) !== -1) {
                recentSearches.splice(numOfMatchingElem(title, recentSearches), 1);
            }

            recentSearches.unshift({
                title,
                totalResults
            });

            localStorage.recentSearches = JSON.stringify(recentSearches);

            dispatch({
                type: "SET_LOCATIONS",
                title,
                totalResults,
                recentSearches
            });
        });
}

export const getLocations = url => dispatch => {
    getLocationsQuery(url, dispatch);
};

export const resetListings = () => dispatch => {
    dispatch({
        type: "RESET_LISTINGS"
    });
};