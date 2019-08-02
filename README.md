# antlr-playground

```
set classpath=%~dp0;%~dp0antlr\antlr-4.7.2-complete.jar
java org.antlr.v4.Tool -Dlanguage=JavaScript Calculator.g4 -no-listener -visitor -o build-visitor

java org.antlr.v4.Tool Calculator.g4
javac Calculator*.java
java org.antlr.v4.gui.TestRig Calculator input
pause
```


### TODO
* Insert Script creation
* Java Class Generation with hibernate validator?
* GUI for diagram
* Template Schema


### tricks
node_modules\antlr4-tool\dist\antlr-core\antlr-compiler.js

//child.execSync("java");
var cmd = _this.command();
console.log(cmd);
try {
    child.execSync("java -jar \"C:\\Users\\Alex Chan\\Desktop\\Sample code\\antlr-playground\\node_modules\\antlr4-tool\\dist\\bin\\antlr-4.7.1-complete.jar\" -Dlanguage=JavaScript  -no-listener -no-visitor -lib . -o \"C:\\Users\\Alex Chan\\Desktop\\Sample code\\antlr-playground\\editor\" RMLang.g4").toString();
}
catch (error) {
    process.exit(1);
}