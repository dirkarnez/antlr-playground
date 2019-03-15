"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var visitor = require('./antlr-build/RMLangVisitor');
// This class defines a complete visitor for a parse tree produced by the CalculatorParser.
var FormulaVisitor = (function (_super) {
    __extends(FormulaVisitor, _super);
    function FormulaVisitor() {
        _super.apply(this, arguments);
    }
        
    // Visit a parse tree produced by RMLangParser#prog.
    FormulaVisitor.prototype.visitProg = function(context) {
        var expr;
        var i = 0;
        while (expr = context.expr(i)) {
            expr.accept(this);
            i++;
        }
    };
  
    // Visit a parse tree produced by RMLangParser#expr.
    FormulaVisitor.prototype.visitExpr = function(context) {
        if (context.USE()) {
            console.log(`visitExpr ${context.USE()} ${context.STRING()}`);
        } else if (context.CREATE()) {
            console.log(`visitExpr ${context.CREATE()} ${context.STRING()}`);
        } else if (context.RELATE()) {
            console.log(`visitExpr ${context.RELATE()} ${context.STRING(0)} ${context.STRING(1)}`);
        } else if (context.DECLARE()) {
            context.tableSchema().accept(this);
            console.log(`visitExpr ${context.DECLARE()} ${context.STRING()}`);
        }
      // return //context.accept();
    };
  
    // Visit a parse tree produced by RMLangParser#tableSchema.
    FormulaVisitor.prototype.visitTableSchema = function(context) {
        var pair;
        var i = 0;
        while (pair = context.pair(i)) {
            pair.accept(this);
            i++;
        }
    };
  
    // Visit a parse tree produced by RMLangParser#pair.
    FormulaVisitor.prototype.visitPair = function(context) {
        if (context.VARCHAR()) {
            console.log(`visitPair ${context.STRING()} ${context.VARCHAR()}`);
        } else if (context.NUMBER()) {
            console.log(`visitPair ${context.STRING()} ${context.NUMBER()}`);
        }
    };

    return FormulaVisitor;
}(visitor.RMLangVisitor));
exports.FormulaVisitor = FormulaVisitor;