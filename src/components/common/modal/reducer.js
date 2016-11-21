const initialState = {
    isModalShowing: false,
    modalProps: {}
};

export default function modalView(state = initialState, action) {
    switch (action.type) {
        case "SET_MODAL":
            return { ...state, isModalShowing: true, modalProps: action.modalProps };

        default:
            return state;
    }
}