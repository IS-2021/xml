const JAR = "./saxon/saxon-he-11.4.jar";
const XSLT_DIR = "./xslt";

// Konfiguracja - nazwy plikow
const SRC_XML = "plytoteka.xml";
const XSL_POMOCNICZY = "pomocniczy.xsl";
const XSL_XHTML = "xhtml.xsl";
const XSL_TXT = "txt.xsl";
const XSL_SVG = "svg.xsl";

// Pliki wynikowe
const XML_POMOCNICZY = XSL_POMOCNICZY.replace("xsl", "xml");
const OUT_XHTML = XSL_XHTML.replace("xsl", "xhtml");
const OUT_TXT = XSL_TXT.replace("xsl", "txt");
const OUT_SVG = XSL_SVG.replace("xsl", "txt");

const command = (src_file, xsl_file, out_file) => {
    return `java -jar ${JAR} -s:${XSLT_DIR}/${src_file} -xsl:${XSLT_DIR}/${xsl_file} -o:${XSLT_DIR}/${out_file}`;
};
const file = (file) => `${XSLT_DIR}/${file}`;

module.exports = (grunt) => {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        exec: {
            support: {
                cmd: command(`../${SRC_XML}`, XSL_POMOCNICZY, XML_POMOCNICZY),
            },
            xhtml: {
                cmd: command(XML_POMOCNICZY, XSL_XHTML, OUT_XHTML),
            },
            txt: {
                cmd: command(XML_POMOCNICZY, XSL_TXT, OUT_TXT),
            },
            svg: {
                cmd: command(XML_POMOCNICZY, XSL_SVG, OUT_SVG),
            },
        },
        watch: {
            support: {
                files: [file(XSL_POMOCNICZY)],
                tasks: ["exec:support"],
            },
            xhtml: {
                files: [file(XML_POMOCNICZY), file(XSL_XHTML)],
                tasks: ["exec:xhtml"],
            },
            txt: {
                files: [file(XML_POMOCNICZY), file(XSL_TXT)],
                tasks: ["exec:txt"],
            },
            svg: {
                files: [file(XML_POMOCNICZY), file(XSL_SVG)],
                tasks: ["exec:svg"],
            },
            all: {
                files: [file(XML_POMOCNICZY)],
                tasks: ["exec:xhtml", "exec:txt", "exec:svg"],
            },
        },
    });

    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-exec");
    grunt.registerTask("default", ["watch"]);
};
