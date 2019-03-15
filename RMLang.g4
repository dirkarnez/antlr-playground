grammar RMLang;
	
prog:	(expr ';' NEWLINE?)+ ;

expr:	USE STRING
    |   CREATE STRING
    |   RELATE STRING STRING
    |   DECLARE STRING '=' tableSchema
    ;

tableSchema
    : '{' pair (',' pair)* '}'
    |   '{' '}' // empty object
    ;

pair:  STRING ':' (VARCHAR | NUMBER) ;


NEWLINE : [\r\n]+;
USE: [Uu][Ss][Ee];
VARCHAR: [Vv][Aa][Rr][Cc][Hh][Aa][Rr];
NUMBER: [Nn][Uu][Mm][Bb][Ee][Rr];
DECLARE: [Dd][Ee][Cc][Ll][Aa][Rr][Ee];
CREATE:	[Cc][Rr][Ee][Aa][Tt][Ee];
RELATE:	[Rr][Ee][Ll][Aa][Tt][Ee];
STRING: [a-zA-Z]+;
WS  :   [ \t\n\r]+ -> skip ;











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