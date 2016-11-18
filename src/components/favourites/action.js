export const getFavouritesList = () => dispatch => {

    const listings = localStorage.favourites ? JSON.parse(localStorage.favourites) : [];

    dispatch({
        type: "SET_FAVOURITES",
        listings
    });
};