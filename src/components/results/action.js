const setLocations = (listings, totalResults, numPage) => ({
    type: "SET_LISTINGS",
    listings,
    totalResults,
    numPage
});

export const getRealtysList = (searchQuery, numPage) => dispatch => {
    const url = `http://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=${numPage + 1}&place_name=${searchQuery}`;
    fetch(url)
        .then(response => response.json())
        .then(setListings => {

            const { listings, total_results: totalResults } = setListings.response;
            numPage++;

            dispatch(setLocations(listings, totalResults, numPage));
        });
};

export const resetListings = () => ({ type: "RESET_LISTINGS" });