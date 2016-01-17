var options = {
	// Generate $inject properties for
	//AngularJS for functions annotated
	//with @ngInject
	angular_pass: true,
	// Input and output charset for all
	//files. By default, we accept UTF-8 as
	//input and output US_ASCII
	charset: VAL,
	// Don't generate output. Run checks,
	//but no compiler passes.
	checks-only: true,
	// Entry points to the program. Must be
	//goog.provide'd symbols. Any goog.provi
	//de'd symbols that are not a transitive
	//dependency of the entry points will
	//be removed. Files without goog.provide
	//s, and their dependencies, will
	//always be left in. If any entry
	//points are specified, then the
	//manage_closure_dependencies option
	//will be set to true and all files
	//will be sorted in dependency order.
	closure_entry_point: VAL,
	// Root of your common JS dependency
	//hierarchy. Your main script.
	common_js_entry_module: VAL,
	// Path prefix to be removed from
	//CommonJS module names.
	common_js_module_path_prefix: VAL,
	// Specifies the compilation level to
	//use. Options: WHITESPACE_ONLY,
	//SIMPLE, ADVANCED
	compilation_level: VAL,
	// A list of JS Conformance configuration
	//s in text protocol buffer format.
	conformance_configs: VAL,
	// If true, variable renaming and
	//property renaming report files will
	//be produced as {binary name}_vars_rena
	//ming_report.out and {binary name}_prop
	//s_renaming_report.out. Note that this
	//flag cannot be used in conjunction
	//with either variable_renaming_report
	//or property_renaming_report
	create_renaming_reports: true,
	// If specified, a source map file
	//mapping the generated source files
	//back to the original source file will
	//be output to the specified path. The
	//%outname% placeholder will expand to
	//the name of the output file that the
	//source map corresponds to.
	create_source_map: VAL,
	// Rewrite Dart Dev Compiler output to
	//be compiler-friendly.
	dart_pass: true,
	// Enable debugging options
	debug: true,
	// Override the value of a variable
	//annotated @define. The format is
	//<name>[=<val>], where <name> is the
	//name of a @define variable and <val>
	//is a boolean, number, or a single-quot
	//ed string that contains no single
	//quotes. If [=<val>] is omitted, the
	//variable is marked true
	define: VAL,
	// Determines the set of builtin externs
	//to load. Options: BROWSER, CUSTOM.
	//Defaults to BROWSER.
	env: [BROWSER | CUSTOM],
	// Generates export code for local
	//properties marked with @export
	export_local_property_definitions: true,
	// The file containing JavaScript
	//externs. You may specify multiple
	externs: VAL,
	// A whitelist of tag names in JSDoc.
	//You may specify multiple
	extra_annotation_name: VAL,
	// A file containing additional command-l
	//ine options.
	flagfile: VAL,
	// Specifies which formatting options,
	//if any, should be applied to the
	//output JS. Options: PRETTY_PRINT,
	//PRINT_INPUT_DELIMITER, SINGLE_QUOTES
	formatting: [PRETTY_PRINT | PRINT_INPUT_DELIMITER | SINGLE_QUOTES],
	// Generates export code for those
	//marked with @export
	generate_exports: true,
	// Displays this message on stdout and
	//exit
	help: true,
	// If specified, files whose path
	//contains this string will have their
	//warnings hidden. You may specify
	//multiple.
	hide_warnings_for: VAL,
	// A file containing an instrumentation
	//template.
	instrumentation_template: VAL,
	// Rewrite J2CL output to be compiler-fri
	//endly.
	j2cl_pass: true,
	// The JavaScript filename. You may
	//specify multiple. The flag name is
	//optional, because args are interpreted
	//as files by default. You may also use
	//minimatch-style glob patterns. For
	//example, use --js='**.js' --js='!**_te
	//st.js' to recursively include all js
	//files that do not end in _test.js
	js: VAL,
	// Path prefixes to be removed from ES6
	//& CommonJS modules.
	js_module_root: VAL,
	// Primary output filename. If not
	//specified, output is written to stdout
	js_output_file: VAL,
	// Make the named class of warnings an
	//error. Options:accessControls,
	//ambiguousFunctionDecl, checkEventfulOb
	//jectDisposal, checkRegExp, checkTypes,
	//checkVars, conformanceViolations,
	//const, constantProperty, deprecated,
	//deprecatedAnnotations, duplicateMessag
	//e, es3, es5Strict, externsValidation,
	//fileoverviewTags, globalThis,
	//inferredConstCheck, internetExplorerCh
	//ecks, invalidCasts, misplacedTypeAnnot
	//ation, missingGetCssName, missingPrope
	//rties, missingProvide, missingRequire,
	//missingReturn, msgDescriptions,
	//newCheckTypes, nonStandardJsDocs,
	//reportUnknownTypes, suspiciousCode,
	//strictModuleDepCheck, typeInvalidation
	//, undefinedNames, undefinedVars,
	//unknownDefines, unnecessaryCasts,
	//unusedLocalVariables, unusedPrivateMem
	//bers, uselessCode, useOfGoogBase,
	//visibility. '*' adds all supported.
	jscomp_error: VAL,
	// Turn off the named class of warnings.
	//Options:accessControls, ambiguousFunct
	//ionDecl, checkEventfulObjectDisposal,
	//checkRegExp, checkTypes, checkVars,
	//conformanceViolations, const,
	//constantProperty, deprecated,
	//deprecatedAnnotations, duplicateMessag
	//e, es3, es5Strict, externsValidation,
	//fileoverviewTags, globalThis,
	//inferredConstCheck, internetExplorerCh
	//ecks, invalidCasts, misplacedTypeAnnot
	//ation, missingGetCssName, missingPrope
	//rties, missingProvide, missingRequire,
	//missingReturn, msgDescriptions,
	//newCheckTypes, nonStandardJsDocs,
	//reportUnknownTypes, suspiciousCode,
	//strictModuleDepCheck, typeInvalidation
	//, undefinedNames, undefinedVars,
	//unknownDefines, unnecessaryCasts,
	//unusedLocalVariables, unusedPrivateMem
	//bers, uselessCode, useOfGoogBase,
	//visibility. '*' adds all supported.
	jscomp_off: VAL,
	// Make the named class of warnings a
	//normal warning. Options:accessControls
	//, ambiguousFunctionDecl, checkEventful
	//ObjectDisposal, checkRegExp, checkType
	//s, checkVars, conformanceViolations,
	//const, constantProperty, deprecated,
	//deprecatedAnnotations, duplicateMessag
	//e, es3, es5Strict, externsValidation,
	//fileoverviewTags, globalThis,
	//inferredConstCheck, internetExplorerCh
	//ecks, invalidCasts, misplacedTypeAnnot
	//ation, missingGetCssName, missingPrope
	//rties, missingProvide, missingRequire,
	//missingReturn, msgDescriptions,
	//newCheckTypes, nonStandardJsDocs,
	//reportUnknownTypes, suspiciousCode,
	//strictModuleDepCheck, typeInvalidation
	//, undefinedNames, undefinedVars,
	//unknownDefines, unnecessaryCasts,
	//unusedLocalVariables, unusedPrivateMem
	//bers, uselessCode, useOfGoogBase,
	//visibility. '*' adds all supported.
	jscomp_warning: VAL,
	// Specifies whether standard input and
	//output streams will be a JSON array
	//of sources. Each source will be an
	//object of the form {path: filename,
	//src: file_contents, srcmap: srcmap_con
	//tents }. Intended for use by stream-ba
	//sed build systems such as gulpjs.
	//Options: NONE, IN, OUT, BOTH.
	//Defaults to NONE.
	json_streams: [NONE | IN | OUT |BOTH],
	// The JavaScript zip filename. You may
	//specify multiple.
	jszip: VAL,
	// Sets what language spec that input
	//sources conform. Options: ECMASCRIPT3,
	//ECMASCRIPT5, ECMASCRIPT5_STRICT,
	//ECMASCRIPT6 (default), ECMASCRIPT6_STR
	//ICT, ECMASCRIPT6_TYPED (experimental)
	language_in: VAL,
	// Sets what language spec the output
	//should conform to. Options: ECMASCRIPT
	//3 (default), ECMASCRIPT5, ECMASCRIPT5_
	//STRICT, ECMASCRIPT6_TYPED (experimenta
	//l)
	language_out: VAL,
	// The logging level (standard java.util.
	//logging.Level values) for Compiler
	//progress. Does not control errors or
	//warnings for the JavaScript code
	//under compilation
	logging_level: VAL,
	// Automatically sort dependencies so
	//that a file that goog.provides symbol
	//X will always come before a file that
	//goog.requires symbol X. If an input
	//provides symbols, and those symbols
	//are never required, then that input
	//will not be included in the compilatio
	//n.
	manage_closure_dependencies: true,
	// A JavaScript module specification.
	//The format is <name>:<num-js-files>[:[
	//<dep>,...][:]]]. Module names must be
	//unique. Each dep is the name of a
	//module that this module depends on.
	//Modules must be listed in dependency
	//order, and JS source files must be
	//listed in the corresponding order.
	//Where --module flags occur in
	//relation to --js flags is unimportant.
	//<num-js-files> may be set to 'auto'
	//for the first module if it has no
	//dependencies. Provide the value
	//'auto' to trigger module creation
	//from CommonJSmodules.
	module: VAL,
	// Prefix for filenames of compiled JS
	//modules. <module-name>.js will be
	//appended to this prefix. Directories
	//will be created as needed. Use with
	//--module
	module_output_path_prefix: VAL,
	// An output wrapper for a JavaScript
	//module (optional). The format is
	//<name>:<wrapper>. The module name
	//must correspond with a module
	//specified using --module. The wrapper
	//must contain %s as the code placeholde
	//r. The %basename% placeholder can
	//also be used to substitute the base
	//name of the module output file.
	module_wrapper: VAL,
	// Checks for type errors using the new
	//type inference algorithm.
	new_type_inf: true,
	// Only include files in the transitive
	//dependency of the entry points
	//(specified by closure_entry_point).
	//Files that do not provide dependencies
	//will be removed. This supersedes
	//manage_closure_dependencies
	only_closure_dependencies: true,
	// Prints out a list of all the files in
	//the compilation. If --manage_closure_d
	//ependencies is on, this will not
	//include files that got dropped
	//because they were not required. The
	//%outname% placeholder expands to the
	//JS output file. If you're using
	//modularization, using %outname% will
	//create a manifest for each module.
	output_manifest: VAL,
	// Prints out a JSON file of dependencies
	//between modules.
	output_module_dependencies: VAL,
	// Interpolate output into this string
	//at the place denoted by the marker
	//token %output%. Use marker token
	//%output|jsstring% to do js string
	//escaping on the output.
	output_wrapper: VAL,
	// Loads the specified file and passes
	//the file contents to the --output_wrap
	//per flag, replacing the value if it
	//exists.
	output_wrapper_file: VAL,
	// Rewrite Polymer classes to be
	//compiler-friendly.
	polymer_pass: true,
	// Prints a dot file describing the
	//internal abstract syntax tree and
	//exits
	print_ast: true,
	// Prints a dot file describing the
	//passes that will get run and exits
	print_pass_graph: true,
	// Prints out the parse tree and exits
	print_tree: true,
	// Processes built-ins from the Closure
	//library, such as goog.require(),
	//goog.provide(), and goog.exportSymbol(
	//). True by default.
	process_closure_primitives: true,
	// Process CommonJS modules to a
	//concatenable form.
	process_common_js_modules: true,
	// Processes built-ins from the Jquery
	//library, such as jQuery.fn and
	//jQuery.extend()
	process_jquery_primitives: true,
	// File where the serialized version of
	//the property renaming map produced
	//should be saved
	property_renaming_report: VAL,
	// Specifies the name of an object that
	//will be used to store all non-extern
	//globals
	rename_prefix_namespace: VAL,
	// The source map format to produce.
	//Options are V3 and DEFAULT, which are
	//equivalent.
	source_map_format: [DEFAULT | V3],
	// Source map locations for input files,
	//separated by a '|', (i.e. input-file-p
	//ath|input-source-map)
	source_map_input: VAL,
	// Source map location mapping separated
	//by a '|' (i.e. filesystem-path|webserv
	//er-path)
	source_map_location_mapping: VAL,
	// Controls how detailed the compilation
	//summary is. Values: 0 (never print
	//summary), 1 (print summary only if
	//there are errors or warnings), 2
	//(print summary if the 'checkTypes'
	//diagnostic  group is enabled, see
	//--jscomp_warning), 3 (always print
	//summary). The default level is 1
	summary_detail_level: N,
	// Check source validity but do not
	//enforce Closure style rules and
	//conventions
	third_party: true,
	// Shows the duration of each compiler
	//pass and the impact to the compiled
	//output size. Options: ALL, RAW_SIZE,
	//TIMING_ONLY, OFF
	tracer_mode: [ALL | RAW_SIZE |TIMING_ONLY | OFF],
	// Transform AMD to CommonJS modules.
	transform_amd_modules: true,
	// Source of translated messages.
	//Currently only supports XTB.
	translations_file: VAL,
	// Scopes all translations to the
	//specified project.When specified, we
	//will use different message ids so
	//that messages in different projects
	//can have different translations.
	translations_project: VAL,
	// Enable or disable the optimizations
	//based on available type information.
	//Inaccurate type annotations may
	//result in incorrect results.
	use_types_for_optimization: true,
	// File where the serialized version of
	//the variable renaming map produced
	//should be saved
	variable_renaming_report: VAL,
	// Prints the compiler version to stdout
	//and exit.
	version: true,
	// Specifies the warning level to use.
	//Options: QUIET, DEFAULT, VERBOSE
	warning_level: [QUIET | DEFAULT| VERBOSE],
	// A file containing warnings to
	//suppress. Each line should be of the
	//form
	//<file-name>:<line-number>?  <warning-d
	//escription>
	//
	warnings_whitelist_file: VAL
}
