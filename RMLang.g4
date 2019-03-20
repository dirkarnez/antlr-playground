grammar RMLang;
	
prog:	(expr ';' NEWLINE*)+;

expr: annotations DECLARE DECLARATION '=' tableSchema
    | USING DECLARATION '{' createStatementList '}'
    | CREATE DECLARATION
    ;

annotations: ('@' annotation  '(' DECLARATION (',' DECLARATION)* ')' NEWLINE*)*;

annotation: PK_ANNOTATION | NOTNULL_ANNOTATION | NUMERIC_ANNOTATION;

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
NOTNULL_ANNOTATION: [Nn][Oo][Tt][Nn][Uu][Ll][Ll];
NUMERIC_ANNOTATION: [Nn][Uu][Mm][Ee][Rr][Ii][Cc];
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