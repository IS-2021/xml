export class XMLDao {
    static fromFile(file) {
        const url = URL.createObjectURL(file);
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url, false);
        xhr.setRequestHeader("Content-Type", "text/xml");
        xhr.send(null);

        const xmlDoc = xhr.responseXML;
        return xmlDoc.children[0]; // root node
    }

    static fromString(string) {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(string, "text/xml");
        return xmlDoc.children[0];
    }

    static save(xmlDocument, outputName = "zmieniony.xml") {
        const serializer = new XMLSerializer();
        const serializedString = serializer
            .serializeToString(xmlDocument)
            .replace(/ xmlns="http:\/\/www\.w3\.org\/1999\/xhtml"/g, "");

        // Create new temporary file
        const blob = new Blob([serializedString], { type: "text/xml" });

        // Create a dummy DOM element with the link
        const dummy = document.createElement("a");
        dummy.href = URL.createObjectURL(blob);
        dummy.download = outputName;
        dummy.click();
    }
}
