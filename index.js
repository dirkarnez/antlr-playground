const antlr4 = require('antlr4/index');
const CalculatorLexer = require('./antlr-build/CalculatorLexer');
const CalculatorParser = require('./antlr-build/CalculatorParser');
var formulaVisitor = require('./FormulaVisitor.js').FormulaVisitor;

var input = "1 + 2 + 4 + 3";
var chars = new antlr4.InputStream(input);
var lexer = new CalculatorLexer.CalculatorLexer(chars);
var tokens  = new antlr4.CommonTokenStream(lexer);
var parser = new CalculatorParser.CalculatorParser(tokens);
parser.buildParseTrees = true;  
var tree = parser.calculator();

var visitor = new formulaVisitor();
var visitorResult = visitor.visitCalculator(tree);
console.log(JSON.stringify(visitorResult));