export const getLocations = searchQuery => dispatch => {

    const numOfMatchingElem = (title, recentSearches) => {
        const titleList = [];
        recentSearches.forEach(item => {
          titleList.push(item.title);
        });
        const numOfElement = titleList.indexOf(title);
        return numOfElement;
    };

    if (searchQuery) {
        const url = `http://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=1&place_name=${searchQuery}`;
        fetch(url)
        .then(response => response.json())
        .then(setLocations => {

            const title = setLocations.response.locations[0].title;
            const totalResults = setLocations.response.total_results;
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
};

export const resetListings = () => dispatch => {
    dispatch({
        type: "RESET_LISTINGS"
    });
};