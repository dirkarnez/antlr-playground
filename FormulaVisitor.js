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
        this.gap = 10;
    }

    // Visit a parse tree produced by RMLangParser#prog.
    FormulaVisitor.prototype.visitProg = function(context) {
        return context
                .expr()
                .map(expr => expr.accept(this))
                .filter(command => !!command)
                .join("\n\n")
                .toUpperCase();
    };

    FormulaVisitor.prototype.createTable = function(tableName, pairs) {
        var longest = Math.max(...pairs.map(item => item.name.length));
        var lines = pairs.map(item => {
            var offset = longest - item.name.length + this.gap;
            return `\t${item.name}${new Array(offset).fill(" ").join("")}${item.type}`;
        });
        this.addToCreateHistory(tableName);
        return `CREATE TABLE ${tableName} (\n${lines.join(",\n")}\n);\n`;
    }

    FormulaVisitor.prototype.hasCreated = function(tableName) {
        return !!(this.tableCreated || {})[tableName]
    }

    FormulaVisitor.prototype.addToCreateHistory = function(tableName) {
        this.tableCreated = {
            ...(this.tableCreated || {}), 
            [tableName]: true
        };
    }

    FormulaVisitor.prototype.getVariable = function(variableName) {
        return (this.declarations || {})[variableName];
    }

    FormulaVisitor.prototype.setVariable = function(variableName, value) {
        this.declarations = {
            ...(this.declarations || {}), 
            [variableName]: value
        };
    }

    // Visit a parse tree produced by RMLangParser#expr.
    FormulaVisitor.prototype.visitExpr = function(context) {
        if (context.USING()) {
            var schemaName = context.DECLARATION();
            var schema = this.getVariable(schemaName);
            if (!schema) {
                throw `${schemaName} not defined`
            }

            var created = context.createStatementList().accept(this).map(create => {
                if (this.hasCreated(create)) {
                    throw `${create} should not be created more than once`;
                }
                if (create == schemaName) {
                    throw `${create} should not inherit itself`;
                }
                var value = this.getVariable(create);
                if (value) {
                    var merged = [...schema, ...value];
                    var names = merged.map(item => item.name);
                    names.forEach((name, i) => {
                        names.forEach((check, j) => {
                            if (name == check && i != j) {
                                throw `${name} should only be in either base schema or inheriting schema`;
                            }
                        });
                    });
                    return this.createTable(create, merged);
                } else {
                    throw `${create} not defined`
                }
            })
            console.log(created.join("\n\n"));
        } else if (context.CREATE()) {
            var tableName = context.DECLARATION();
            var pairs = this.getVariable(tableName);
            if (pairs) {
                return this.createTable(tableName, pairs);
            } else {
                throw `${variableName} not defined`
            }
        }/* else if (context.RELATE()) {
            return `ALTER TABLE ${context.VARIABLE(0)}
    ADD CONSTRAINT FK_JOIN_${`${context.VARIABLE(1)}`.toUpperCase()}
        FOREIGN KEY (CATEGORY_ID)
            REFERENCES ${context.VARIABLE(1)} (ID)
;`
        } */else if (context.DECLARE()) {
            var currentSchemaVariableName = context.DECLARATION();
            var oldValue = this.getVariable(currentSchemaVariableName);
            if (oldValue) {
                throw `Variable "${currentSchemaVariableName}" already declared`;
            } else {
                this.setVariable(currentSchemaVariableName, context.tableSchema().accept(this));
            }
        }
    };
  
    // Visit a parse tree produced by RMLangParser#tableSchema.
    FormulaVisitor.prototype.visitTableSchema = function(context) {
        return context.pair().map(pair => pair.accept(this));
    };
  
    // Visit a parse tree produced by RMLangParser#pair.
    FormulaVisitor.prototype.visitPair = function(context) {
        if (context.VARCHAR()) {
            return {
                name: `${context.DECLARATION()}`,
                type: `${context.VARCHAR()}(${context.size().accept(this)})`
            };
        } else if (context.NUMBER()) {
            return {
                name: `${context.DECLARATION()}`,
                type: `${context.NUMBER()}(${context.size().accept(this)})`
            };
        } else if (context.VARCHAR2()) {
            return {
                name: `${context.DECLARATION()}`,
                type: `${context.VARCHAR2()}(${context.size().accept(this)})`
            };
        } else if (context.RAW()) {
            return {
                name: `${context.DECLARATION()}`,
                type: `${context.RAW()}(${context.size().accept(this)})`
            };
        } else if (context.DATE()) {
            return {
                name: `${context.DECLARATION()}`,
                type: `${context.DATE()}`
            };
        }
    };

    FormulaVisitor.prototype.visitCreateStatementList = function(context) {
        return context.DECLARATION().map(declaration => `${declaration}`);
    };

    FormulaVisitor.prototype.visitSize = function(context) {
        return context.INT().join(",");
    };

    return FormulaVisitor;
}(visitor.RMLangVisitor));
exports.FormulaVisitor = FormulaVisitor;