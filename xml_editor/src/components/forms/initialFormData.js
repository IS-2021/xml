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
                    numer: "01",
                    nazwa: "",
                    dlugosc: "",
                },
            ],
        },
    ],
    dataPremiery: "",
    waluta: "PLN",
    cena: "",
    ocena: "",
    naklad: "",
    sprzedaneEgzemplarze: "",
};
