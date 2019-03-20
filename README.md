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