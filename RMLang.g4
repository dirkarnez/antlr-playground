grammar RMLang;
	
prog:	(expr ';' NEWLINE*)+;

expr: annotation DECLARE DECLARATION '=' tableSchema
    | USING DECLARATION '{' createStatementList '}'
    | CREATE DECLARATION
    ;

annotation: ('@' PK_ANNOTATION '(' DECLARATION ')' NEWLINE*)?;

createStatementList:  (CREATE DECLARATION NEWLINE* ';' NEWLINE*)+;

tableSchema
    : '{' pair (',' pair)* NEWLINE* '}'
    |   '{' NEWLINE* '}' // empty object
    ;

pair:  DECLARATION ':' 
    ( VARCHAR '(' size ')' 
    | VARCHAR2 '(' size ')'
    | RAW '(' size ')'
    | NUMBER'(' size ')'
    | DATE
    );

size: INT (',' INT)?;
PK_ANNOTATION: [Pp][Kk];
DECLARE: [Dd][Ee][Cc][Ll][Aa][Rr][Ee];
VARCHAR: [Vv][Aa][Rr][Cc][Hh][Aa][Rr];
VARCHAR2: [Vv][Aa][Rr][Cc][Hh][Aa][Rr][2];
RAW: [Rr][Aa][Ww];
NUMBER: [Nn][Uu][Mm][Bb][Ee][Rr];
DATE: [Dd][Aa][Tt][Ee];
USING: [Uu][Ss][Ii][Nn][Gg];
CREATE:	[Cc][Rr][Ee][Aa][Tt][Ee];
DECLARATION: [a-zA-Z_]+;
INT: [0-9]+;

NEWLINE : [\r\n]+;


WS  :   [ \t\r\n]+ -> skip ;
BLOCK_COMMENT 
    : NEWLINE* '/*' .*? '*/' NEWLINE* -> skip
    ;











// grammar RMLang;
	
// prog:	(expr ';' NEWLINE?)+;

// expr:	USE TABLESCHEMA
//     |   CREATE TABLENAME
//     |   RELATE TABLENAME TABLENAME
   
//     ;
// NEWLINE : [\r\n]+;
// USE:	[Uu][Ss][Ee];
// CREATE:	[Cc][Rr][Ee][Aa][Tt][Ee];
// RELATE:	[Rr][Ee][Ll][Aa][Tt][Ee];

// TABLENAME: [a-zA-Z]+;
// WS  :   [ \t\n\r]+ -> skip ;
// prog: command;

// command
//     :  TARGET ';'
//     ;


// TARGET
//     : TABLENAME
//     ;

// // expr:	expr ('*'|'/') expr
// //     |	expr ('+'|'-') expr
// //     |	INT
// //     |	'(' expr ')'
// //     ;

// TABLENAME: [a-zA-Z]+;
// CREATE:	[Cc][Rr][Ee][Aa][Tt][Ee];
// RELATE:	[Rr][Ee][Ll][Aa][Tt][Ee];



// // Match both UNIX and Windows newlines
// NL      :   '\r'? '\n' ;

// WS  :   [ \t\n\r]+ -> skip ;