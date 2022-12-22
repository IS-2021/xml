import { createGatunekElement } from "../xml/datatypes/Gatunek.js";

// ACTIONS
export const XML_LOADED = "XML_LOADED";
export const ADD_GENRE = "ADD_GENRE";
export const TOGGLE_MODAL = "TOGGLE_MODAL";
export const OPEN_MODAL = "SHOW_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const initialAppState = {
    isLoaded: false,
    isModalOpen: false,
    xml: {
        original: null,
        refs: {
            autor: {},
            zadanie: {},
            gatunki: [],
            albumy: [],
            klienci: [],
        },
    },
};

export const appReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case TOGGLE_MODAL: {
            return {
                ...state,
                isModalOpen: !state.isModalOpen,
            };
        }
        case CLOSE_MODAL: {
            return {
                ...state,
                isModalOpen: false,
            };
        }
        case OPEN_MODAL: {
            return {
                ...state,
                isModalOpen: true,
            };
        }
        case XML_LOADED: {
            return {
                ...state,
                isLoaded: true,
                ...payload,
            };
        }
        case ADD_GENRE: {
            // Create new element
            const lastId = state.xml.refs.gatunkiCount + 1;
            const newGenre = createGatunekElement(String(lastId), payload);

            // Append node to the XML
            state.xml.refs.topLevelNodes.gatunki.appendChild(newGenre);

            // Refresh state?
            return { ...state };
        }
        default:
            throw new Error(`Action ${type} not found in appReducer.`);
    }
};
