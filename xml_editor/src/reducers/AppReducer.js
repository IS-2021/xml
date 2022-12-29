// ACTIONS
export const XML_LOADED = "XML_LOADED";
export const TOGGLE_MODAL = "TOGGLE_MODAL";
export const OPEN_MODAL = "SHOW_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const GENRE_ADD = "GENRE_ADD";
export const GENRE_UPDATE = "GENRE_MODIFY";
export const GENRE_DELETE = "GENRE_REMOVE";
export const ALBUM_ADD = "ALBUM_ADD";
export const ALBUM_UPDATE = "ALBUM_MODIFY";
export const ALBUM_DELETE = "ALBUM_REMOVE";
export const ALBUM_AUTHOR_ADD = "ALBUM_AUTHOR_ADD";
export const ALBUM_AUTHOR_UPDATE = "ALBUM_AUTHOR_UPDATE";
export const ALBUM_AUTHOR_DELETE = "ALBUM_AUTHOR_DELETE";
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
            state.xml.refs.topLevelNodes.gatunki.appendChild(payload);

            return { ...state };
        }
        case GENRE_UPDATE: {
            const genre = state.xml.refs.gatunki.filter((genre) => genre.id === payload.id);

            genre[0].updateFromObject(payload.data);

            return { ...state };
        }
        case GENRE_DELETE: {
            const genre = state.xml.refs.gatunki.filter((genre) => genre.id === payload.id);

            genre[0].node.remove();

            return { ...state };
        }
        case ALBUM_ADD: {
            state.xml.refs.topLevelNodes.albumy.appendChild(payload);

            return { ...state };
        }
        case ALBUM_UPDATE: {
            const album = state.xml.refs.albumy.filter((album) => album.id === payload.id);

            album[0].updateFromObject(payload.data);

            return { ...state };
        }
        case ALBUM_DELETE: {
            const album = state.xml.refs.albumy.filter((album) => album.id === payload.id);

            album[0].node.remove();

            return { ...state };
        }
        case ALBUM_AUTHOR_DELETE: {
            const album = state.xml.refs.albumy.filter((album) => album.id === payload.albumId)[0];
            const author = album.wykonawcy.filter((_, index) => index === payload.authorIndex)[0];

            author.node.remove();

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
