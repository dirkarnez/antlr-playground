set CLASSPATH=%~dp0antlr\antlr-4.7.2-complete.jar

java org.antlr.v4.Tool RMLang.g4 -no-listener -visitor -o antlr-java-build