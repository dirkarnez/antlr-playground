var fs = require('fs');
var program = require('commander');
const antlr4 = require('antlr4/index');
const RMLangLexer = require('./antlr-build/RMLangLexer');
const RMLangParser = require('./antlr-build/RMLangParser');
const formulaVisitor = require('./FormulaVisitor').FormulaVisitor;

program
    .command('build <path>')
    .action(function (path) {
        var file;
        if (path) {
            file = fs.readFileSync(path, "utf8");
        }
        if (!file) {
            console.log("no file");
            return;
        }

        var chars = new antlr4.InputStream(file);
        var lexer = new RMLangLexer.RMLangLexer(chars);
        var tokens  = new antlr4.CommonTokenStream(lexer);
        var parser = new RMLangParser.RMLangParser(tokens);
        parser.buildParseTrees = true;  
        var tree = parser.prog();
        
        try {
            console.log(new formulaVisitor().visitProg(tree));
        } catch(e) {
            console.log(e);
        }
    });
    
program.parse(process.argv);