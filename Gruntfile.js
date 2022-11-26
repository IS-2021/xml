const JAR = "./saxon/saxon-he-11.4.jar";
const XSLT_DIR = "./xslt";
const XSLT_OUT = `${XSLT_DIR}/out`;

module.exports = (grunt) => {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        exec: {
            support: {
                cmd: `java -jar ${JAR} -s:plytoteka.xml -xsl:${XSLT_DIR}/plytoteka.xsl -o:${XSLT_OUT}/pomocniczny.xml`,
            },
        },
        watch: {
            support: {
                files: [`${XSLT_DIR}/*.xsl`],
                tasks: ["exec:support"],
            },
        },
    });

    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-exec");
    grunt.registerTask("default", ["watch"]);
};
