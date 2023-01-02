import { createGatunekElement } from "./datatypes/Gatunek.js";
import { createKlientElement } from "./datatypes/Klient.js";
import { createAlbumElement } from "./datatypes/Album.js";
import { createStudentElement } from "./datatypes/Student.js";
import { createZadanieElement } from "./datatypes/Zadanie.js";
import { element } from "./datatypes/Base.js";

export function objectToXML(plytoteka = []) {
    const xmlRoot = element("plytoteka");
    for (const rootAttribute of plytoteka.rootAttributes) {
        console.log(rootAttribute);
        xmlRoot.setAttribute(rootAttribute.name, rootAttribute.value);
    }

    const autor = element("autor");
    autor.appendChild(createStudentElement(plytoteka.autor));
    autor.appendChild(createZadanieElement(plytoteka.zadanie));
    xmlRoot.appendChild(autor);

    const gatunki = element("gatunki");
    plytoteka.gatunki.forEach((gatunek) => gatunki.appendChild(createGatunekElement(gatunek)));
    xmlRoot.appendChild(gatunki);

    const albumy = element("albumy");
    plytoteka.albumy.forEach((album) => albumy.appendChild(createAlbumElement(album)));
    xmlRoot.appendChild(albumy);

    const klienci = element("klienci");
    plytoteka.klienci.forEach((klient) => klienci.appendChild(createKlientElement(klient)));
    xmlRoot.appendChild(klienci);

    return xmlRoot;
}
