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
        return context
                .expr()
                .map(expr => expr.accept(this))
                .filter(command => !!command)
                .join("\n\n");
    };
  
    // Visit a parse tree produced by RMLangParser#expr.
    FormulaVisitor.prototype.visitExpr = function(context) {
        if (context.USE()) {
            this.tableSchema = context.STRING();
        } else if (context.CREATE()) {
            var variableName = context.STRING();
            var declaration = (this.declarations || {})[variableName];
            if (declaration) {
                return `CREATE TABLE ${variableName} ${declaration}`;
            } else {
                throw new Error("not defined");
            }
        } else if (context.RELATE()) {
            return `ALTER TABLE ${context.STRING(0)}
    ADD CONSTRAINT FK_JOIN_BILLING_CATEGORY
        FOREIGN KEY (CATEGORY_ID)
            REFERENCES ${context.STRING(1)} (ID)
;`
        } else if (context.DECLARE()) {
            this.declarations = {
                ...(this.declarations || {}), 
                [context.STRING()]: context.tableSchema().accept(this)
            };
        }
    };
  
    // Visit a parse tree produced by RMLangParser#tableSchema.
    FormulaVisitor.prototype.visitTableSchema = function(context) {
        return `(\n${context.pair().map(pair => pair.accept(this)).join(",\n")}\n)`;
    };
  
    // Visit a parse tree produced by RMLangParser#pair.
    FormulaVisitor.prototype.visitPair = function(context) {
        if (context.VARCHAR()) {
            return `  ${context.STRING()}                          ${context.VARCHAR()} NOT NULL`;
        } else if (context.NUMBER()) {
            return `  ${context.STRING()}                          ${context.NUMBER()} NOT NULL, `;
        }
    };

    return FormulaVisitor;
}(visitor.RMLangVisitor));
exports.FormulaVisitor = FormulaVisitor;