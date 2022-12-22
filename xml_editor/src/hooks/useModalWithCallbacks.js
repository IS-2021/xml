import { useModal } from "./useModal.js";

export function useModalWithCallbacks(initialState, openCallback, closeCallback) {
    const { isModalOpen, openModal, closeModal } = useModal(initialState);

    return {
        isModalOpen,
        openModal: () => {
            openModal();
            openCallback();
        },
        closeModal: () => {
            closeModal();
            closeCallback();
        },
    };
}
