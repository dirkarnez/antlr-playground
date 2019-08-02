// Generated from RMLang.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var grammarFileName = "RMLang.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u001b\u0094\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0003\u0002\u0003\u0002\u0003\u0002\u0007\u0002",
    "\u0016\n\u0002\f\u0002\u000e\u0002\u0019\u000b\u0002\u0006\u0002\u001b",
    "\n\u0002\r\u0002\u000e\u0002\u001c\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003",
    "-\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0007\u00045\n\u0004\f\u0004\u000e\u00048\u000b\u0004\u0003",
    "\u0004\u0003\u0004\u0007\u0004<\n\u0004\f\u0004\u000e\u0004?\u000b\u0004",
    "\u0007\u0004A\n\u0004\f\u0004\u000e\u0004D\u000b\u0004\u0003\u0005\u0003",
    "\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0007\u0006K\n\u0006\f\u0006",
    "\u000e\u0006N\u000b\u0006\u0003\u0006\u0003\u0006\u0007\u0006R\n\u0006",
    "\f\u0006\u000e\u0006U\u000b\u0006\u0006\u0006W\n\u0006\r\u0006\u000e",
    "\u0006X\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0007\u0007",
    "_\n\u0007\f\u0007\u000e\u0007b\u000b\u0007\u0003\u0007\u0007\u0007e",
    "\n\u0007\f\u0007\u000e\u0007h\u000b\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0007\u0007n\n\u0007\f\u0007\u000e\u0007q\u000b\u0007",
    "\u0003\u0007\u0005\u0007t\n\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0005\b\u008d\n\b\u0003\t\u0003\t\u0003\t\u0005\t\u0092\n\t\u0003",
    "\t\u0002\u0002\n\u0002\u0004\u0006\b\n\f\u000e\u0010\u0002\u0003\u0003",
    "\u0002\f\u000e\u0002\u009e\u0002\u001a\u0003\u0002\u0002\u0002\u0004",
    ",\u0003\u0002\u0002\u0002\u0006B\u0003\u0002\u0002\u0002\bE\u0003\u0002",
    "\u0002\u0002\nV\u0003\u0002\u0002\u0002\fs\u0003\u0002\u0002\u0002\u000e",
    "u\u0003\u0002\u0002\u0002\u0010\u008e\u0003\u0002\u0002\u0002\u0012",
    "\u0013\u0005\u0004\u0003\u0002\u0013\u0017\u0007\u0003\u0002\u0002\u0014",
    "\u0016\u0007\u0019\u0002\u0002\u0015\u0014\u0003\u0002\u0002\u0002\u0016",
    "\u0019\u0003\u0002\u0002\u0002\u0017\u0015\u0003\u0002\u0002\u0002\u0017",
    "\u0018\u0003\u0002\u0002\u0002\u0018\u001b\u0003\u0002\u0002\u0002\u0019",
    "\u0017\u0003\u0002\u0002\u0002\u001a\u0012\u0003\u0002\u0002\u0002\u001b",
    "\u001c\u0003\u0002\u0002\u0002\u001c\u001a\u0003\u0002\u0002\u0002\u001c",
    "\u001d\u0003\u0002\u0002\u0002\u001d\u0003\u0003\u0002\u0002\u0002\u001e",
    "\u001f\u0005\u0006\u0004\u0002\u001f \u0007\u000f\u0002\u0002 !\u0007",
    "\u0017\u0002\u0002!\"\u0007\u0004\u0002\u0002\"#\u0005\f\u0007\u0002",
    "#-\u0003\u0002\u0002\u0002$%\u0007\u0015\u0002\u0002%&\u0007\u0017\u0002",
    "\u0002&\'\u0007\u0005\u0002\u0002\'(\u0005\n\u0006\u0002()\u0007\u0006",
    "\u0002\u0002)-\u0003\u0002\u0002\u0002*+\u0007\u0016\u0002\u0002+-\u0007",
    "\u0017\u0002\u0002,\u001e\u0003\u0002\u0002\u0002,$\u0003\u0002\u0002",
    "\u0002,*\u0003\u0002\u0002\u0002-\u0005\u0003\u0002\u0002\u0002./\u0007",
    "\u0007\u0002\u0002/0\u0005\b\u0005\u000201\u0007\b\u0002\u000216\u0007",
    "\u0017\u0002\u000223\u0007\t\u0002\u000235\u0007\u0017\u0002\u00024",
    "2\u0003\u0002\u0002\u000258\u0003\u0002\u0002\u000264\u0003\u0002\u0002",
    "\u000267\u0003\u0002\u0002\u000279\u0003\u0002\u0002\u000286\u0003\u0002",
    "\u0002\u00029=\u0007\n\u0002\u0002:<\u0007\u0019\u0002\u0002;:\u0003",
    "\u0002\u0002\u0002<?\u0003\u0002\u0002\u0002=;\u0003\u0002\u0002\u0002",
    "=>\u0003\u0002\u0002\u0002>A\u0003\u0002\u0002\u0002?=\u0003\u0002\u0002",
    "\u0002@.\u0003\u0002\u0002\u0002AD\u0003\u0002\u0002\u0002B@\u0003\u0002",
    "\u0002\u0002BC\u0003\u0002\u0002\u0002C\u0007\u0003\u0002\u0002\u0002",
    "DB\u0003\u0002\u0002\u0002EF\t\u0002\u0002\u0002F\t\u0003\u0002\u0002",
    "\u0002GH\u0007\u0016\u0002\u0002HL\u0007\u0017\u0002\u0002IK\u0007\u0019",
    "\u0002\u0002JI\u0003\u0002\u0002\u0002KN\u0003\u0002\u0002\u0002LJ\u0003",
    "\u0002\u0002\u0002LM\u0003\u0002\u0002\u0002MO\u0003\u0002\u0002\u0002",
    "NL\u0003\u0002\u0002\u0002OS\u0007\u0003\u0002\u0002PR\u0007\u0019\u0002",
    "\u0002QP\u0003\u0002\u0002\u0002RU\u0003\u0002\u0002\u0002SQ\u0003\u0002",
    "\u0002\u0002ST\u0003\u0002\u0002\u0002TW\u0003\u0002\u0002\u0002US\u0003",
    "\u0002\u0002\u0002VG\u0003\u0002\u0002\u0002WX\u0003\u0002\u0002\u0002",
    "XV\u0003\u0002\u0002\u0002XY\u0003\u0002\u0002\u0002Y\u000b\u0003\u0002",
    "\u0002\u0002Z[\u0007\u0005\u0002\u0002[`\u0005\u000e\b\u0002\\]\u0007",
    "\t\u0002\u0002]_\u0005\u000e\b\u0002^\\\u0003\u0002\u0002\u0002_b\u0003",
    "\u0002\u0002\u0002`^\u0003\u0002\u0002\u0002`a\u0003\u0002\u0002\u0002",
    "af\u0003\u0002\u0002\u0002b`\u0003\u0002\u0002\u0002ce\u0007\u0019\u0002",
    "\u0002dc\u0003\u0002\u0002\u0002eh\u0003\u0002\u0002\u0002fd\u0003\u0002",
    "\u0002\u0002fg\u0003\u0002\u0002\u0002gi\u0003\u0002\u0002\u0002hf\u0003",
    "\u0002\u0002\u0002ij\u0007\u0006\u0002\u0002jt\u0003\u0002\u0002\u0002",
    "ko\u0007\u0005\u0002\u0002ln\u0007\u0019\u0002\u0002ml\u0003\u0002\u0002",
    "\u0002nq\u0003\u0002\u0002\u0002om\u0003\u0002\u0002\u0002op\u0003\u0002",
    "\u0002\u0002pr\u0003\u0002\u0002\u0002qo\u0003\u0002\u0002\u0002rt\u0007",
    "\u0006\u0002\u0002sZ\u0003\u0002\u0002\u0002sk\u0003\u0002\u0002\u0002",
    "t\r\u0003\u0002\u0002\u0002uv\u0007\u0017\u0002\u0002v\u008c\u0007\u000b",
    "\u0002\u0002wx\u0007\u0010\u0002\u0002xy\u0007\b\u0002\u0002yz\u0005",
    "\u0010\t\u0002z{\u0007\n\u0002\u0002{\u008d\u0003\u0002\u0002\u0002",
    "|}\u0007\u0011\u0002\u0002}~\u0007\b\u0002\u0002~\u007f\u0005\u0010",
    "\t\u0002\u007f\u0080\u0007\n\u0002\u0002\u0080\u008d\u0003\u0002\u0002",
    "\u0002\u0081\u0082\u0007\u0012\u0002\u0002\u0082\u0083\u0007\b\u0002",
    "\u0002\u0083\u0084\u0005\u0010\t\u0002\u0084\u0085\u0007\n\u0002\u0002",
    "\u0085\u008d\u0003\u0002\u0002\u0002\u0086\u0087\u0007\u0013\u0002\u0002",
    "\u0087\u0088\u0007\b\u0002\u0002\u0088\u0089\u0005\u0010\t\u0002\u0089",
    "\u008a\u0007\n\u0002\u0002\u008a\u008d\u0003\u0002\u0002\u0002\u008b",
    "\u008d\u0007\u0014\u0002\u0002\u008cw\u0003\u0002\u0002\u0002\u008c",
    "|\u0003\u0002\u0002\u0002\u008c\u0081\u0003\u0002\u0002\u0002\u008c",
    "\u0086\u0003\u0002\u0002\u0002\u008c\u008b\u0003\u0002\u0002\u0002\u008d",
    "\u000f\u0003\u0002\u0002\u0002\u008e\u0091\u0007\u0018\u0002\u0002\u008f",
    "\u0090\u0007\t\u0002\u0002\u0090\u0092\u0007\u0018\u0002\u0002\u0091",
    "\u008f\u0003\u0002\u0002\u0002\u0091\u0092\u0003\u0002\u0002\u0002\u0092",
    "\u0011\u0003\u0002\u0002\u0002\u0011\u0017\u001c,6=BLSX`fos\u008c\u0091"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "';'", "'='", "'{'", "'}'", "'@'", "'('", "','", 
                     "')'", "':'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, "PK_ANNOTATION", "NOTNULL_ANNOTATION", "NUMERIC_ANNOTATION", 
                      "DECLARE", "VARCHAR", "VARCHAR2", "RAW", "NUMBER", 
                      "DATE", "USING", "CREATE", "DECLARATION", "INT", "NEWLINE", 
                      "WS", "BLOCK_COMMENT" ];

var ruleNames =  [ "prog", "expr", "annotations", "annotation", "createStatementList", 
                   "tableSchema", "pair", "size" ];

function RMLangParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

RMLangParser.prototype = Object.create(antlr4.Parser.prototype);
RMLangParser.prototype.constructor = RMLangParser;

Object.defineProperty(RMLangParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

RMLangParser.EOF = antlr4.Token.EOF;
RMLangParser.T__0 = 1;
RMLangParser.T__1 = 2;
RMLangParser.T__2 = 3;
RMLangParser.T__3 = 4;
RMLangParser.T__4 = 5;
RMLangParser.T__5 = 6;
RMLangParser.T__6 = 7;
RMLangParser.T__7 = 8;
RMLangParser.T__8 = 9;
RMLangParser.PK_ANNOTATION = 10;
RMLangParser.NOTNULL_ANNOTATION = 11;
RMLangParser.NUMERIC_ANNOTATION = 12;
RMLangParser.DECLARE = 13;
RMLangParser.VARCHAR = 14;
RMLangParser.VARCHAR2 = 15;
RMLangParser.RAW = 16;
RMLangParser.NUMBER = 17;
RMLangParser.DATE = 18;
RMLangParser.USING = 19;
RMLangParser.CREATE = 20;
RMLangParser.DECLARATION = 21;
RMLangParser.INT = 22;
RMLangParser.NEWLINE = 23;
RMLangParser.WS = 24;
RMLangParser.BLOCK_COMMENT = 25;

RMLangParser.RULE_prog = 0;
RMLangParser.RULE_expr = 1;
RMLangParser.RULE_annotations = 2;
RMLangParser.RULE_annotation = 3;
RMLangParser.RULE_createStatementList = 4;
RMLangParser.RULE_tableSchema = 5;
RMLangParser.RULE_pair = 6;
RMLangParser.RULE_size = 7;

function ProgContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RMLangParser.RULE_prog;
    return this;
}

ProgContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgContext.prototype.constructor = ProgContext;

ProgContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};

ProgContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(RMLangParser.NEWLINE);
    } else {
        return this.getToken(RMLangParser.NEWLINE, i);
    }
};





RMLangParser.ProgContext = ProgContext;

RMLangParser.prototype.prog = function() {

    var localctx = new ProgContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, RMLangParser.RULE_prog);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 24; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 16;
            this.expr();
            this.state = 17;
            this.match(RMLangParser.T__0);
            this.state = 21;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===RMLangParser.NEWLINE) {
                this.state = 18;
                this.match(RMLangParser.NEWLINE);
                this.state = 23;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 26; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RMLangParser.T__4) | (1 << RMLangParser.DECLARE) | (1 << RMLangParser.USING) | (1 << RMLangParser.CREATE))) !== 0));
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RMLangParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;

ExprContext.prototype.annotations = function() {
    return this.getTypedRuleContext(AnnotationsContext,0);
};

ExprContext.prototype.DECLARE = function() {
    return this.getToken(RMLangParser.DECLARE, 0);
};

ExprContext.prototype.DECLARATION = function() {
    return this.getToken(RMLangParser.DECLARATION, 0);
};

ExprContext.prototype.tableSchema = function() {
    return this.getTypedRuleContext(TableSchemaContext,0);
};

ExprContext.prototype.USING = function() {
    return this.getToken(RMLangParser.USING, 0);
};

ExprContext.prototype.createStatementList = function() {
    return this.getTypedRuleContext(CreateStatementListContext,0);
};

ExprContext.prototype.CREATE = function() {
    return this.getToken(RMLangParser.CREATE, 0);
};




RMLangParser.ExprContext = ExprContext;

RMLangParser.prototype.expr = function() {

    var localctx = new ExprContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, RMLangParser.RULE_expr);
    try {
        this.state = 42;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case RMLangParser.T__4:
        case RMLangParser.DECLARE:
            this.enterOuterAlt(localctx, 1);
            this.state = 28;
            this.annotations();
            this.state = 29;
            this.match(RMLangParser.DECLARE);
            this.state = 30;
            this.match(RMLangParser.DECLARATION);
            this.state = 31;
            this.match(RMLangParser.T__1);
            this.state = 32;
            this.tableSchema();
            break;
        case RMLangParser.USING:
            this.enterOuterAlt(localctx, 2);
            this.state = 34;
            this.match(RMLangParser.USING);
            this.state = 35;
            this.match(RMLangParser.DECLARATION);
            this.state = 36;
            this.match(RMLangParser.T__2);
            this.state = 37;
            this.createStatementList();
            this.state = 38;
            this.match(RMLangParser.T__3);
            break;
        case RMLangParser.CREATE:
            this.enterOuterAlt(localctx, 3);
            this.state = 40;
            this.match(RMLangParser.CREATE);
            this.state = 41;
            this.match(RMLangParser.DECLARATION);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AnnotationsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RMLangParser.RULE_annotations;
    return this;
}

AnnotationsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AnnotationsContext.prototype.constructor = AnnotationsContext;

AnnotationsContext.prototype.annotation = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AnnotationContext);
    } else {
        return this.getTypedRuleContext(AnnotationContext,i);
    }
};

AnnotationsContext.prototype.DECLARATION = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(RMLangParser.DECLARATION);
    } else {
        return this.getToken(RMLangParser.DECLARATION, i);
    }
};


AnnotationsContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(RMLangParser.NEWLINE);
    } else {
        return this.getToken(RMLangParser.NEWLINE, i);
    }
};





RMLangParser.AnnotationsContext = AnnotationsContext;

RMLangParser.prototype.annotations = function() {

    var localctx = new AnnotationsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, RMLangParser.RULE_annotations);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 64;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===RMLangParser.T__4) {
            this.state = 44;
            this.match(RMLangParser.T__4);
            this.state = 45;
            this.annotation();
            this.state = 46;
            this.match(RMLangParser.T__5);
            this.state = 47;
            this.match(RMLangParser.DECLARATION);
            this.state = 52;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===RMLangParser.T__6) {
                this.state = 48;
                this.match(RMLangParser.T__6);
                this.state = 49;
                this.match(RMLangParser.DECLARATION);
                this.state = 54;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 55;
            this.match(RMLangParser.T__7);
            this.state = 59;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===RMLangParser.NEWLINE) {
                this.state = 56;
                this.match(RMLangParser.NEWLINE);
                this.state = 61;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 66;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AnnotationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RMLangParser.RULE_annotation;
    return this;
}

AnnotationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AnnotationContext.prototype.constructor = AnnotationContext;

AnnotationContext.prototype.PK_ANNOTATION = function() {
    return this.getToken(RMLangParser.PK_ANNOTATION, 0);
};

AnnotationContext.prototype.NOTNULL_ANNOTATION = function() {
    return this.getToken(RMLangParser.NOTNULL_ANNOTATION, 0);
};

AnnotationContext.prototype.NUMERIC_ANNOTATION = function() {
    return this.getToken(RMLangParser.NUMERIC_ANNOTATION, 0);
};




RMLangParser.AnnotationContext = AnnotationContext;

RMLangParser.prototype.annotation = function() {

    var localctx = new AnnotationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, RMLangParser.RULE_annotation);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 67;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << RMLangParser.PK_ANNOTATION) | (1 << RMLangParser.NOTNULL_ANNOTATION) | (1 << RMLangParser.NUMERIC_ANNOTATION))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CreateStatementListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RMLangParser.RULE_createStatementList;
    return this;
}

CreateStatementListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CreateStatementListContext.prototype.constructor = CreateStatementListContext;

CreateStatementListContext.prototype.CREATE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(RMLangParser.CREATE);
    } else {
        return this.getToken(RMLangParser.CREATE, i);
    }
};


CreateStatementListContext.prototype.DECLARATION = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(RMLangParser.DECLARATION);
    } else {
        return this.getToken(RMLangParser.DECLARATION, i);
    }
};


CreateStatementListContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(RMLangParser.NEWLINE);
    } else {
        return this.getToken(RMLangParser.NEWLINE, i);
    }
};





RMLangParser.CreateStatementListContext = CreateStatementListContext;

RMLangParser.prototype.createStatementList = function() {

    var localctx = new CreateStatementListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, RMLangParser.RULE_createStatementList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 84; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 69;
            this.match(RMLangParser.CREATE);
            this.state = 70;
            this.match(RMLangParser.DECLARATION);
            this.state = 74;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===RMLangParser.NEWLINE) {
                this.state = 71;
                this.match(RMLangParser.NEWLINE);
                this.state = 76;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 77;
            this.match(RMLangParser.T__0);
            this.state = 81;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===RMLangParser.NEWLINE) {
                this.state = 78;
                this.match(RMLangParser.NEWLINE);
                this.state = 83;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 86; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===RMLangParser.CREATE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TableSchemaContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RMLangParser.RULE_tableSchema;
    return this;
}

TableSchemaContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TableSchemaContext.prototype.constructor = TableSchemaContext;

TableSchemaContext.prototype.pair = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PairContext);
    } else {
        return this.getTypedRuleContext(PairContext,i);
    }
};

TableSchemaContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(RMLangParser.NEWLINE);
    } else {
        return this.getToken(RMLangParser.NEWLINE, i);
    }
};





RMLangParser.TableSchemaContext = TableSchemaContext;

RMLangParser.prototype.tableSchema = function() {

    var localctx = new TableSchemaContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, RMLangParser.RULE_tableSchema);
    var _la = 0; // Token type
    try {
        this.state = 113;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 88;
            this.match(RMLangParser.T__2);
            this.state = 89;
            this.pair();
            this.state = 94;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===RMLangParser.T__6) {
                this.state = 90;
                this.match(RMLangParser.T__6);
                this.state = 91;
                this.pair();
                this.state = 96;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 100;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===RMLangParser.NEWLINE) {
                this.state = 97;
                this.match(RMLangParser.NEWLINE);
                this.state = 102;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 103;
            this.match(RMLangParser.T__3);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 105;
            this.match(RMLangParser.T__2);
            this.state = 109;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===RMLangParser.NEWLINE) {
                this.state = 106;
                this.match(RMLangParser.NEWLINE);
                this.state = 111;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 112;
            this.match(RMLangParser.T__3);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PairContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RMLangParser.RULE_pair;
    return this;
}

PairContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PairContext.prototype.constructor = PairContext;

PairContext.prototype.DECLARATION = function() {
    return this.getToken(RMLangParser.DECLARATION, 0);
};

PairContext.prototype.VARCHAR = function() {
    return this.getToken(RMLangParser.VARCHAR, 0);
};

PairContext.prototype.size = function() {
    return this.getTypedRuleContext(SizeContext,0);
};

PairContext.prototype.VARCHAR2 = function() {
    return this.getToken(RMLangParser.VARCHAR2, 0);
};

PairContext.prototype.RAW = function() {
    return this.getToken(RMLangParser.RAW, 0);
};

PairContext.prototype.NUMBER = function() {
    return this.getToken(RMLangParser.NUMBER, 0);
};

PairContext.prototype.DATE = function() {
    return this.getToken(RMLangParser.DATE, 0);
};




RMLangParser.PairContext = PairContext;

RMLangParser.prototype.pair = function() {

    var localctx = new PairContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, RMLangParser.RULE_pair);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 115;
        this.match(RMLangParser.DECLARATION);
        this.state = 116;
        this.match(RMLangParser.T__8);
        this.state = 138;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case RMLangParser.VARCHAR:
            this.state = 117;
            this.match(RMLangParser.VARCHAR);
            this.state = 118;
            this.match(RMLangParser.T__5);
            this.state = 119;
            this.size();
            this.state = 120;
            this.match(RMLangParser.T__7);
            break;
        case RMLangParser.VARCHAR2:
            this.state = 122;
            this.match(RMLangParser.VARCHAR2);
            this.state = 123;
            this.match(RMLangParser.T__5);
            this.state = 124;
            this.size();
            this.state = 125;
            this.match(RMLangParser.T__7);
            break;
        case RMLangParser.RAW:
            this.state = 127;
            this.match(RMLangParser.RAW);
            this.state = 128;
            this.match(RMLangParser.T__5);
            this.state = 129;
            this.size();
            this.state = 130;
            this.match(RMLangParser.T__7);
            break;
        case RMLangParser.NUMBER:
            this.state = 132;
            this.match(RMLangParser.NUMBER);
            this.state = 133;
            this.match(RMLangParser.T__5);
            this.state = 134;
            this.size();
            this.state = 135;
            this.match(RMLangParser.T__7);
            break;
        case RMLangParser.DATE:
            this.state = 137;
            this.match(RMLangParser.DATE);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SizeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = RMLangParser.RULE_size;
    return this;
}

SizeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SizeContext.prototype.constructor = SizeContext;

SizeContext.prototype.INT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(RMLangParser.INT);
    } else {
        return this.getToken(RMLangParser.INT, i);
    }
};





RMLangParser.SizeContext = SizeContext;

RMLangParser.prototype.size = function() {

    var localctx = new SizeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, RMLangParser.RULE_size);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 140;
        this.match(RMLangParser.INT);
        this.state = 143;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===RMLangParser.T__6) {
            this.state = 141;
            this.match(RMLangParser.T__6);
            this.state = 142;
            this.match(RMLangParser.INT);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.RMLangParser = RMLangParser;
