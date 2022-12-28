export const initialClient = {
    imie: "",
    nazwisko: "",
    pesel: "",
    login: "",
};

export const initialGenre = {
    nazwa: "",
};

export const initialAlbum = {
    id: "",
    gatunek: "",
    nazwa: "",
    okladka: "",
    wykonawcy: [
        {
            czyZagraniczny: false,
            nazwa: "",
        },
    ],
    producent: "",
    dystrybutor: "",
    opakowanie: "",
    plyty: [
        {
            cd: 1,
            utwory: [
                {
                    numer: 0,
                    nazwa: "",
                    dlugosc: "",
                },
            ],
        },
    ],
    dataPremiery: "",
    cena: {
        waluta: "PLN",
        wartosc: "",
    },
    ocena: "",
    naklad: "",
    sprzedaneEgzemplarze: "",
};
