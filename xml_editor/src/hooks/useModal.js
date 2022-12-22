import React, { useState } from "react";

export function useModal(initialState) {
    const [isModalOpen, setIsModalOpen] = useState(initialState);

    function openModal() {
        setIsModalOpen(true);
    }

    function closeModal() {
        setIsModalOpen(false);
    }

    return { isModalOpen, openModal, closeModal };
}
