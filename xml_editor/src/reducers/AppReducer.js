import { createGatunekElement } from "../xml/datatypes/Gatunek.js";

// ACTIONS
export const XML_LOADED = "XML_LOADED";
export const TOGGLE_MODAL = "TOGGLE_MODAL";
export const OPEN_MODAL = "SHOW_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const GENRE_ADD = "GENRE_ADD";
export const GENRE_UPDATE = "GENRE_MODIFY";
export const GENRE_DELETE = "GENRE_REMOVE";
export const CLIENT_ADD = "CLIENT_ADD";
export const CLIENT_UPDATE = "CLIENT_MODIFY";
export const CLIENT_DELETE = "CLIENT_REMOVE";

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
        case GENRE_ADD: {
            // Create new element
            const lastId = state.xml.refs.gatunkiCount + 1;
            const newGenre = createGatunekElement(String(lastId), payload);

            // Append node to the XML
            state.xml.refs.topLevelNodes.gatunki.appendChild(newGenre);

            // Refresh state?
            return { ...state };
        }
        case CLIENT_ADD: {
            state.xml.refs.topLevelNodes.klienci.appendChild(payload);

            return { ...state };
        }
        case CLIENT_UPDATE: {
            const client = state.xml.refs.klienci.filter((client) => client.pesel === payload.id);

            client[0].updateFromObject(payload.data);

            return { ...state };
        }
        case CLIENT_DELETE: {
            const client = state.xml.refs.klienci.filter((client) => client.pesel === payload.id);

            client[0].node.remove();

            return { ...state };
        }
        default:
            throw new Error(`Action ${type} not found in appReducer.`);
    }
};
