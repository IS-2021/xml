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
            draft.xml.refs.gatunki.push(payload);
            break;
        }
        case GENRE_UPDATE: {
            const genres = draft.xml.refs.gatunki;

            for (let i = 0; i < genres.length; i++) {
                if (genres[i].id === payload.id) {
                    genres[i] = payload.data;
                    break;
                }
            }
            break;
        }
        case GENRE_DELETE: {
            draft.xml.refs.gatunki = draft.xml.refs.gatunki.filter(
                (genre) => genre.id !== payload.id
            );
            break;
        }
        case ALBUM_ADD: {
            draft.xml.refs.albumy.push(payload);
            break;
        }
        case ALBUM_UPDATE: {
            const albums = draft.xml.refs.albumy;

            for (let i = 0; i < albums.length; i++) {
                if (albums[i].id === payload.id) {
                    albums[i] = payload.data;
                    break;
                }
            }

            break;
        }
        case ALBUM_DELETE: {
            draft.xml.refs.albumy = draft.xml.refs.albumy.filter(
                (album) => album.id !== payload.id
            );
            break;
        }
        case CLIENT_ADD: {
            draft.xml.refs.klienci.push({
                ...payload,
                wypozyczenia: [],
            });
            break;
        }
        case CLIENT_UPDATE: {
            const clients = draft.xml.refs.klienci;

            for (let i = 0; i < clients.length; i++) {
                if (clients[i].pesel === payload.id) {
                    clients[i] = {
                        ...clients[i],
                        ...payload.data,
                    };
                    break;
                }
            }

            break;
        }
        case CLIENT_DELETE: {
            draft.xml.refs.klienci = draft.xml.refs.klienci.filter(
                (client) => client.pesel !== payload.id
            );
            break;
        }
        default:
            throw new Error(`Action ${type} not found in appReducer.`);
    }
};
