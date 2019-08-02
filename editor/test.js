var antlrEditor = require('.');

var editor = antlrEditor.createEditor();
editor.setEditorPlaceholderText('Enter your code here...');

editor.setShowLineNumbers(true);
editor.setDisplayEditorErrors(true);

//editor.setTheme('idea');
editor.focus();

var el = editor.getDomElement();

// Render the editor
document.body.appendChild(el);

//
// Rule Styles
//
var ruleStyles = {};
//ruleStyles['prog'] = 'cm-keyword';
//ruleStyles['expr'] = 'cm-keyword';
//ruleStyles['annotations'] = 'cm-keyword';
//ruleStyles['annotation'] = 'cm-keyword';
//ruleStyles['createStatementList'] = 'cm-keyword';
//ruleStyles['tableSchema'] = 'cm-keyword';
//ruleStyles['pair'] = 'cm-keyword';
//ruleStyles['size'] = 'cm-keyword';
editor.setDefaultRuleStyles(ruleStyles);

var tokenStyles = {};

//
// Token Styles
//
//tokenStyles['T__0'] = 'cm-keyword';
//tokenStyles['T__1'] = 'cm-keyword';
//tokenStyles['T__2'] = 'cm-keyword';
//tokenStyles['T__3'] = 'cm-keyword';
//tokenStyles['T__4'] = 'cm-keyword';
//tokenStyles['T__5'] = 'cm-keyword';
//tokenStyles['T__6'] = 'cm-keyword';
//tokenStyles['T__7'] = 'cm-keyword';
//tokenStyles['T__8'] = 'cm-keyword';
//tokenStyles['PK_ANNOTATION'] = 'cm-keyword';
//tokenStyles['NOTNULL_ANNOTATION'] = 'cm-keyword';
//tokenStyles['NUMERIC_ANNOTATION'] = 'cm-keyword';
//tokenStyles['DECLARE'] = 'cm-keyword';
//tokenStyles['VARCHAR'] = 'cm-keyword';
//tokenStyles['VARCHAR2'] = 'cm-keyword';
//tokenStyles['RAW'] = 'cm-keyword';
//tokenStyles['NUMBER'] = 'cm-keyword';
//tokenStyles['DATE'] = 'cm-keyword';
//tokenStyles['USING'] = 'cm-keyword';
//tokenStyles['CREATE'] = 'cm-keyword';
//tokenStyles['DECLARATION'] = 'cm-keyword';
//tokenStyles['INT'] = 'cm-keyword';
//tokenStyles['NEWLINE'] = 'cm-keyword';
//tokenStyles['WS'] = 'cm-keyword';
//tokenStyles['BLOCK_COMMENT'] = 'cm-keyword';

editor.setDefaultTokenStyles(tokenStyles);
