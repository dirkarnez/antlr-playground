const antlr4 = require('antlr4/index');
const RMLangLexer = require('./antlr-build/RMLangLexer');
const RMLangParser = require('./antlr-build/RMLangParser');
const RMLangVisitor = require('./antlr-build/RMLangVisitor');

// var formulaVisitor = require('./FormulaVisitor.js').FormulaVisitor;

var input = "USE CEA; CREATE EDE;RELATE EEd sFF;DECLARE EE = {e: VARCHAR, f: Number};";
var chars = new antlr4.InputStream(input);
var lexer = new RMLangLexer.RMLangLexer(chars);
var tokens  = new antlr4.CommonTokenStream(lexer);
var parser = new RMLangParser.RMLangParser(tokens);
parser.buildParseTrees = true;  
var tree = parser.prog();

var visitor = new RMLangVisitor.RMLangVisitor();
console.log(JSON.stringify(visitor.visitProg(tree)));