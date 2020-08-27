# JavaScript_Learning
Learning JavaScript language


Repository: https://github.com/NAVJuanan/JavaScript_Learning


Documentation:
	https://www.tutorialsteacher.com/javascript/javascript-tutorials
	https://devdocs.io/javascript/
	https://www.w3schools.com/js/default.asp


Programs:


 - 01. Basics

	- <script> tag in an html file for JavaScript code or file availability
		<script type="text/javascript" src="index.js"></script>
		https://www.tutorialsteacher.com/javascript/script-tag

	- let -> declares a variable (recommended)
		https://devdocs.io/javascript/statements/let
		https://www.w3schools.com/js/js_let.asp

	- var -> declares a variable  
		https://devdocs.io/javascript/statements/var
		https://www.w3schools.com/jsref/jsref_var.asp

	- const -> declares a constant (recommended) 
		https://devdocs.io/javascript/statements/const
		https://www.w3schools.com/js/js_const.asp

	- boolean -> primitive data type for true/false
		https://www.w3schools.com/js/js_booleans.asp
		https://www.tutorialsteacher.com/javascript/javascript-boolean

	- number -> primitive data type for numbers (integer, decimal, exponential, hexadecimal, octal, binary)
		https://www.w3schools.com/js/js_numbers.asp
		https://www.tutorialsteacher.com/javascript/javascript-number

	- string -> primitive data type for text
		https://www.w3schools.com/js/js_strings.asp
		https://www.tutorialsteacher.com/javascript/javascript-string

	- string interpolation -> console.log(`The value of the variable "message" of type ${typeof message} is: ${message}`);

	- undefined -> primitive data type for variable with no value assigned
		https://devdocs.io/javascript/global_objects/undefined
		https://www.tutorialsteacher.com/javascript/javascript-null-and-undefined

	- null -> primitive data type for variable with 'null' value assigned (by default is an object)
		https://devdocs.io/javascript/global_objects/null
		https://www.tutorialsteacher.com/javascript/javascript-null-and-undefined

	- function -> declares a function  
		https://devdocs.io/javascript/statements/function
		https://www.w3schools.com/js/js_functions.asp
		https://www.tutorialsteacher.com/javascript/javascript-function

	- typeof() -> shows the data type of a value or variable (boolean, number, string, undefined, symbol, object, function) 
		https://devdocs.io/javascript/operators/typeof
		https://www.w3schools.com/js/js_type_conversion.asp
		https://www.w3schools.com/js/js_datatypes.asp

	- console.log() -> shows a message in the console
		https://devdocs.io/dom/console/log
		https://www.w3schools.com/jsref/met_console_log.asp

	- console.info() -> shows a message in the console (with an info icon)
		https://devdocs.io/dom/console/info
		https://www.w3schools.com/jsref/met_console_info.asp

	- console.warn() -> shows a warning in the console (with a warning icon)
		https://devdocs.io/dom/console/warn
		https://www.w3schools.com/jsref/met_console_warn.asp

	- console.error() -> shows an error in the console (with an error icon)
		https://devdocs.io/dom/console/error
		https://www.w3schools.com/jsref/met_console_error.asp

	- window.alert() -> shows a popup message  
		https://devdocs.io/dom/window/alert
		https://www.w3schools.com/jsref/met_win_alert.asp

	- window.prompt() -> shows a dialog window with a message and receives an input text  
		https://devdocs.io/dom/window/prompt
		https://www.w3schools.com/jsref/met_win_prompt.asp

	- window.confirm() -> shows a confirmation box and receives a boolean result
		https://devdocs.io/dom/window/confirm
		https://www.w3schools.com/jsref/met_win_confirm.asp

	- Comments -> /* */ or //

	- "use strict" -> activates strict mode
		https://www.w3schools.com/js/js_strict.asp
		https://www.tutorialsteacher.com/javascript/javascript-strict



 - 02. Operators

	- Addition:       a + b
	- Subtraction:    a - b
	- Multiplication: a * b
	- Division:       a / b
	- Remainder:      a % b
	- Exponential:    a ** b

	- Increment: ++
	- Decrement: --

	- Relational: >, >=, <, <=

	- Assignment: =, +=, -=, *=, /=

	- === -> strict equility operator (type + value)
	- == -> lose equility operator (value)
	- !== -> strict distinct operator (type + value)
	- != -> lose distinct operator (value)

	- Logical: && (and), || (or), ! (not)

	- Bitwise: & (and), | (or), ^ (exclusive or), ~ (complement), << (left shift), >> (right shift)

	https://www.w3schools.com/js/js_operators.asp
	https://www.w3schools.com/jsref/jsref_operators.asp
	https://www.w3schools.com/js/js_comparisons.asp
	https://devdocs.io/javascript/operators/bitwise_operators



 - 03. Loops

	- Ternary operator -> var voteable = (age < 18) ? "Too young":"Old enough";

	- if...else
		https://devdocs.io/javascript/statements/if...else
		https://www.w3schools.com/jsref/jsref_if.asp
		https://www.tutorialsteacher.com/javascript/javascript-if-else-condition

	- while
		https://devdocs.io/javascript/statements/while
		https://www.w3schools.com/jsref/jsref_while.asp
		https://www.tutorialsteacher.com/javascript/javascript-while-loop

	- do...while
		https://devdocs.io/javascript/statements/do...while
		https://www.w3schools.com/jsref/jsref_dowhile.asp
		https://www.tutorialsteacher.com/javascript/javascript-while-loop

	- switch
		https://devdocs.io/javascript/statements/switch
		https://www.w3schools.com/jsref/jsref_switch.asp
		https://www.tutorialsteacher.com/javascript/javascript-switch

	- for	
		https://devdocs.io/javascript/statements/for
		https://www.w3schools.com/jsref/jsref_for.asp
		https://www.tutorialsteacher.com/javascript/javascript-for-loop



 - 04. Strings & Numbers

	- Number() -> converts a value to a number (integer/float)
		https://devdocs.io/javascript/global_objects/number
		https://www.w3schools.com/jsref/jsref_number.asp

	- String() -> converts a value to a string
		https://devdocs.io/javascript/global_objects/string
		https://www.w3schools.com/jsref/jsref_string.asp

	- parseInt() -> converts a value to an integer
		https://devdocs.io/javascript/global_objects/parseint
		https://www.w3schools.com/jsref/jsref_parseint.asp

	- parseFloat() -> converts a value to a float
		https://devdocs.io/javascript/global_objects/parsefloat
		https://www.w3schools.com/jsref/jsref_parsefloat.asp

	- toString() -> returns the value converted to a string
		https://devdocs.io/javascript/global_objects/number/tostring
		https://www.w3schools.com/jsref/jsref_tostring_number.asp

	- length -> returns the size of a string
		https://devdocs.io/javascript/global_objects/string/length
		https://www.w3schools.com/jsref/jsref_length_string.asp

	- toLowerCase() -> converts a string to lowercase
		https://devdocs.io/javascript/global_objects/string/tolowercase
		https://www.w3schools.com/jsref/jsref_tolowercase.asp

	- toUpperCase() -> converts a string to uppercase
		https://devdocs.io/javascript/global_objects/string/touppercase
		https://www.w3schools.com/jsref/jsref_touppercase.asp

	- trim() -> removes the initial and ending whitespace
		https://devdocs.io/javascript/global_objects/string/trim
		https://www.w3schools.com/jsref/jsref_trim_string.asp

	- trimStart() or trimLeft -> removes the initial whitespace
		https://devdocs.io/javascript/global_objects/string/trimstart

	- trimEnd() or trimRight -> removes the ending whitespace
		https://devdocs.io/javascript/global_objects/string/trimend

	- includes() -> returns true/false if the string includes a substring
		https://devdocs.io/javascript/global_objects/string/includes
		https://www.w3schools.com/jsref/jsref_includes.asp
		
	- startsWith() -> returns true/false if the string starts with a substring
		https://devdocs.io/javascript/global_objects/string/startswith
		https://www.w3schools.com/jsref/jsref_startswith.asp

	- endsWith() -> returns true/false if the string ends with a substring
		https://devdocs.io/javascript/global_objects/string/endswith
		https://www.w3schools.com/jsref/jsref_endswith.asp

	- indexOf() -> returns the zero-based index of a substring
		https://devdocs.io/javascript/global_objects/string/indexof
		https://www.w3schools.com/jsref/jsref_indexof.asp

	- replace() -> replaces a substring
		https://devdocs.io/javascript/global_objects/string/replace
		https://www.w3schools.com/jsref/jsref_replace.asp

	- slice(start index, end index) -> returns a section of a string
			-> zero-based index
			-> end position not included
		https://devdocs.io/javascript/global_objects/string/slice
		https://www.w3schools.com/jsref/jsref_slice_string.asp

	- split(separator) -> splits a string into an array of strings by a separator
		https://devdocs.io/javascript/global_objects/string/split
		https://www.w3schools.com/jsref/jsref_split.asp

	https://www.tutorialsteacher.com/javascript/javascript-string-methods-and-property
	https://www.tutorialsteacher.com/javascript/javascript-number



 - 05. Dates & Math library

	- Number() -> converts a value to a number (integer/float)
		https://devdocs.io/javascript/global_objects/number
		https://www.w3schools.com/jsref/jsref_number.asp

	- String() -> converts a value to a string
		https://devdocs.io/javascript/global_objects/string
		https://www.w3schools.com/jsref/jsref_string.asp

	- parseInt() -> converts a value to an integer
		https://devdocs.io/javascript/global_objects/parseint
		https://www.w3schools.com/jsref/jsref_parseint.asp

	- parseFloat() -> converts a value to a float
		https://devdocs.io/javascript/global_objects/parsefloat
		https://www.w3schools.com/jsref/jsref_parsefloat.asp

	- toString() -> returns the value converted to a string
		https://devdocs.io/javascript/global_objects/number/tostring
		https://www.w3schools.com/jsref/jsref_tostring_number.asp

	- length -> returns the size of a string
		https://devdocs.io/javascript/global_objects/string/length
		https://www.w3schools.com/jsref/jsref_length_string.asp

	- toLowerCase() -> converts a string to lowercase
		https://devdocs.io/javascript/global_objects/string/tolowercase
		https://www.w3schools.com/jsref/jsref_tolowercase.asp

	- toUpperCase() -> converts a string to uppercase
		https://devdocs.io/javascript/global_objects/string/touppercase
		https://www.w3schools.com/jsref/jsref_touppercase.asp

	- trim() -> removes the initial and ending whitespace
		https://devdocs.io/javascript/global_objects/string/trim
		https://www.w3schools.com/jsref/jsref_trim_string.asp

	- trimStart() or trimLeft -> removes the initial whitespace
		https://devdocs.io/javascript/global_objects/string/trimstart

	- trimEnd() or trimRight -> removes the ending whitespace
		https://devdocs.io/javascript/global_objects/string/trimend

	- includes() -> returns true/false if the string includes a substring
		https://devdocs.io/javascript/global_objects/string/includes
		https://www.w3schools.com/jsref/jsref_includes.asp
		
	- startsWith() -> returns true/false if the string starts with a substring
		https://devdocs.io/javascript/global_objects/string/startswith
		https://www.w3schools.com/jsref/jsref_startswith.asp

	- endsWith() -> returns true/false if the string ends with a substring
		https://devdocs.io/javascript/global_objects/string/endswith
		https://www.w3schools.com/jsref/jsref_endswith.asp

	- indexOf() -> returns the zero-based index of a substring
		https://devdocs.io/javascript/global_objects/string/indexof
		https://www.w3schools.com/jsref/jsref_indexof.asp

	- replace() -> replaces a substring
		https://devdocs.io/javascript/global_objects/string/replace
		https://www.w3schools.com/jsref/jsref_replace.asp

	- slice(start index, end index) -> returns a section of a string
			-> zero-based index
			-> end position not included
		https://devdocs.io/javascript/global_objects/string/slice
		https://www.w3schools.com/jsref/jsref_slice_string.asp

	- split(separator) -> splits a string into an array of strings by a separator
		https://devdocs.io/javascript/global_objects/string/split
		https://www.w3schools.com/jsref/jsref_split.asp

	https://www.tutorialsteacher.com/javascript/javascript-string-methods-and-property
	https://www.tutorialsteacher.com/javascript/javascript-number