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
        refs: {
            autor: {},
            zadanie: {},
            gatunki: [],
            albumy: [],
            klienci: [],
        },
    },
};

export const appReducer = (draft, action) => {
    const { type, payload } = action;

    switch (type) {
        case TOGGLE_MODAL: {
            return {
                ...draft,
                isModalOpen: !draft.isModalOpen,
            };
        }
        case CLOSE_MODAL: {
            return {
                ...draft,
                isModalOpen: false,
            };
        }
        case OPEN_MODAL: {
            return {
                ...draft,
                isModalOpen: true,
            };
        }
        case XML_LOADED: {
            return {
                ...draft,
                isLoaded: true,
                xml: {
                    refs: {
                        ...payload,
                    },
                },
            };
        }
        case GENRE_ADD: {
            state.xml.refs.topLevelNodes.gatunki.appendChild(payload);

            return { ...state };
        }
        case GENRE_UPDATE: {
            const genre = draft.xml.refs.gatunki.filter((genre) => genre.id === payload.id);

            genre[0].updateFromObject(payload.data);

            return { ...draft };
        }
        case GENRE_DELETE: {
            const genre = draft.xml.refs.gatunki.filter((genre) => genre.id === payload.id);

            genre[0].node.remove();

            return { ...draft };
        }
        case ALBUM_ADD: {
            draft.xml.refs.topLevelNodes.albumy.appendChild(payload);

            return { ...draft };
        }
        case ALBUM_UPDATE: {
            const album = draft.xml.refs.albumy.filter((album) => album.id === payload.id);

            album[0].updateFromObject(payload.data);

            return { ...draft };
        }
        case ALBUM_DELETE: {
            const album = draft.xml.refs.albumy.filter((album) => album.id === payload.id);

            album[0].node.remove();

            return { ...draft };
        }
        case ALBUM_AUTHOR_DELETE: {
            const album = draft.xml.refs.albumy.filter((album) => album.id === payload.albumId)[0];
            const author = album.wykonawcy.filter((_, index) => index === payload.authorIndex)[0];

            author.node.remove();

            return { ...draft };
        }
        case CLIENT_ADD: {
            draft.xml.refs.topLevelNodes.klienci.appendChild(payload);

            return { ...draft };
        }
        case CLIENT_UPDATE: {
            const client = draft.xml.refs.klienci.filter((client) => client.pesel === payload.id);

            client[0].updateFromObject(payload.data);

            return { ...draft };
        }
        case CLIENT_DELETE: {
            const client = draft.xml.refs.klienci.filter((client) => client.pesel === payload.id);

            client[0].node.remove();

            return { ...draft };
        }
        default:
            throw new Error(`Action ${type} not found in appReducer.`);
    }
};
