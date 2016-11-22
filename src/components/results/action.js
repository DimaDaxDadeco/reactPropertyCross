export const getRealtysList = (searchQuery, numPage) => dispatch => {
    const url = `http://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=${numPage + 1}&place_name=${searchQuery}`;
    fetch(url)
        .then(response => response.json())
        .then(setListings => {

            const { listings, total_results: totalResults } = setListings.response;
            numPage++;

            dispatch({
                type: "SET_LISTINGS",
                listings,
                totalResults,
                numPage
            });
        });
};

export const selectRealty = selectedRealty => ({
    type: "SELECT_REALTY",
    selectedRealty
});