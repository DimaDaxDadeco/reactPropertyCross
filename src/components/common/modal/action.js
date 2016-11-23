export const hideModal = () => ({ type: "HIDE_MODAL" });
export const openModal = modalProps => ({
    type: "SET_MODAL",
    modalProps
});