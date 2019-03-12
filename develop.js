var child_process = require("child_process");
var chokidar = require("chokidar");
var path = require("path");

const option = {
    env: {
        classpath: path.join(process.cwd(), "antlr", "antlr-4.7.2-complete.jar"),
        ...process.env
    }
};

var watcher = chokidar.watch('RMLang.g4');
  
function generate(callback) {
    child_process.exec("java org.antlr.v4.Tool -Dlanguage=JavaScript RMLang.g4 -no-listener -visitor -o antlr-build", option, callback);
}

generate(function(err) {
    if (err) {
        console.log("First transpile failed...");
    } else {
        console.log("First transpile successful, watching file changes...");

        watcher.on('change', path => {
            console.log(`File ${path} has been changed, generating source`);

            generate(function(err) {
                if (err) {
                    console.log(`Transpile failed: ${err}`);
                } else {
                    console.log("Tanspile successful");
                }
            });
        });
    } 
})