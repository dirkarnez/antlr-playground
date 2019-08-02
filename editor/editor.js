
var antlrEditor = require('antlr4-editor');
var implementation = require('antlr4-editor/implementations/codemirror');
var antlrHelper = require('antlr4-helper');
var RMLangLexer = require('./RMLangLexer').RMLangLexer;
var RMLangParser = require('./RMLangParser').RMLangParser;

var factory = antlrHelper.createFactoryBuilder()
    .lexer(function(input) { return new RMLangLexer(input); })
    .parser(function(tokenStream) { return new RMLangParser(tokenStream); })
    .rootRule(function(parser) { return parser.prog(); })
    .build();

var parser = antlrHelper.createParser(factory);


function createEditor() {
    return implementation.createEditor(parser);
}

exports.createEditor = createEditor;

