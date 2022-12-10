// ACTIONS
export const XML_LOADED = "XML_LOADED";

export const initialAppState = {
    isLoaded: false,
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
        case XML_LOADED: {
            return {
                ...state,
                isLoaded: true,
                ...payload,
            };
        }
        default:
            throw new Error(`Action ${type} not found in appReducer.`);
    }
};
