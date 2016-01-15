{
  angular_pass:{
    value:"",
    descrition:"Generate $inject properties forAngularJS for functions annotatedwith @ngInject",
    short:""
  },
  charset:{
    value:"VAL",
    descrition:"Input and output charset for allfiles. By default, we accept UTF-8 asinput and output US_ASCII",
    short:""
  },
  "checks-only":{
    value:"",
    descrition:"Don't generate output. Run checks,but no compiler passes.",
    short:""
  },
  closure_entry_point:{
    value:"VAL",
    descrition:"Entry points to the program. Must begoog.provide'd symbols. Any goog.provide'd symbols that are not a transitivedependency of the entry points willbe removed. Files without goog.provides, and their dependencies, willalways be left in. If any entrypoints are specified, then themanage_closure_dependencies optionwill be set to true and all fileswill be sorted in dependency order.",
    short:""
  },
  common_js_entry_module:{
    value:"VAL",
    descrition:"Root of your common JS dependencyhierarchy. Your main script.",
    short:""
  },
  common_js_module_path_prefix:{
    value:"VAL",
    descrition:"Path prefix to be removed fromCommonJS module names.",
    short:""
  },
  compilation_level:{
    value:"VAL",
    descrition:"Specifies the compilation level touse. Options: WHITESPACE_ONLY,SIMPLE, ADVANCED",
    short:"-O"
  },
  conformance_configs:{
    value:"VAL",
    descrition:"A list of JS Conformance configurations in text protocol buffer format.",
    short:""
  },
  create_renaming_reports:{
    value:"",
    descrition:"If true, variable renaming andproperty renaming report files willbe produced as {binary name}_vars_renaming_report.out and {binary name}_props_renaming_report.out. Note that thisflag cannot be used in conjunctionwith either variable_renaming_reportor property_renaming_report",
    short:""
  },
  create_source_map:{
    value:"VAL",
    descrition:"If specified, a source map filemapping the generated source filesback to the original source file willbe output to the specified path. The%outname% placeholder will expand tothe name of the output file that thesource map corresponds to.",
    short:""
  },
  dart_pass:{
    value:"",
    descrition:"Rewrite Dart Dev Compiler output tobe compiler-friendly.",
    short:""
  },
  debug:{
    value:"",
    descrition:"Enable debugging options",
    short:""
  },
  define:{
    value:"VAL",
    descrition:"Override the value of a variableannotated @define. The format is<name>[=<val>], where <name> is thename of a @define variable and <val>is a boolean, number, or a single-quoted string that contains no singlequotes. If [=<val>] is omitted, thevariable is marked true",
    short:"--D, -D"
  },
  env:{
    value:"[BROWSER | CUSTOM]",
    descrition:"Determines the set of builtin externsto load. Options: BROWSER, CUSTOM.Defaults to BROWSER.",
    short:""
  },
  export_local_property_definitions:{
    value:"",
    descrition:"Generates export code for localproperties marked with @export",
    short:""
  },
  externs:{
    value:"VAL",
    descrition:"The file containing JavaScriptexterns. You may specify multiple",
    short:""
  },
  extra_annotation_name:{
    value:"VAL",
    descrition:"A whitelist of tag names in JSDoc.You may specify multiple",
    short:""
  },
  flagfile:{
    value:"VAL",
    descrition:"A file containing additional command-line options.",
    short:""
  },
  formatting:{
    value:"[PRETTY_PRINT | PRINT_INPUT_DELIMITER | SINGLE_QUOTES]",
    descrition:"Specifies which formatting options,if any, should be applied to theoutput JS. Options: PRETTY_PRINT,PRINT_INPUT_DELIMITER, SINGLE_QUOTES",
    short:""
  },
  generate_exports:{
    value:"",
    descrition:"Generates export code for thosemarked with @export",
    short:""
  },
  help:{
    value:"",
    descrition:"Displays this message on stdout andexit",
    short:""
  },
  hide_warnings_for:{
    value:"VAL",
    descrition:"If specified, files whose pathcontains this string will have theirwarnings hidden. You may specifymultiple.",
    short:""
  },
  instrumentation_template:{
    value:"VAL",
    descrition:"A file containing an instrumentationtemplate.",
    short:""
  },
  j2cl_pass:{
    value:"",
    descrition:"Rewrite J2CL output to be compiler-friendly.",
    short:""
  },
  js:{
    value:"VAL",
    descrition:"The JavaScript filename. You mayspecify multiple. The flag name isoptional, because args are interpretedas files by default. You may also useminimatch-style glob patterns. Forexample, use --js='**.js' --js='!**_test.js' to recursively include all jsfiles that do not end in _test.js",
    short:""
  },
  js_module_root:{
    value:"VAL",
    descrition:"Path prefixes to be removed from ES6& CommonJS modules.",
    short:""
  },
  js_output_file:{
    value:"VAL",
    descrition:"Primary output filename. If notspecified, output is written to stdout",
    short:""
  },
  jscomp_error:{
    value:"VAL",
    descrition:"Make the named class of warnings anerror. Options:accessControls,ambiguousFunctionDecl, checkEventfulObjectDisposal, checkRegExp, checkTypes,checkVars, conformanceViolations,const, constantProperty, deprecated,deprecatedAnnotations, duplicateMessage, es3, es5Strict, externsValidation,fileoverviewTags, globalThis,inferredConstCheck, internetExplorerChecks, invalidCasts, misplacedTypeAnnotation, missingGetCssName, missingProperties, missingProvide, missingRequire,missingReturn, msgDescriptions,newCheckTypes, nonStandardJsDocs,reportUnknownTypes, suspiciousCode,strictModuleDepCheck, typeInvalidation, undefinedNames, undefinedVars,unknownDefines, unnecessaryCasts,unusedLocalVariables, unusedPrivateMembers, uselessCode, useOfGoogBase,visibility. '*' adds all supported.",
    short:""
  },
  jscomp_off:{
    value:"VAL",
    descrition:"Turn off the named class of warnings.Options:accessControls, ambiguousFunctionDecl, checkEventfulObjectDisposal,checkRegExp, checkTypes, checkVars,conformanceViolations, const,constantProperty, deprecated,deprecatedAnnotations, duplicateMessage, es3, es5Strict, externsValidation,fileoverviewTags, globalThis,inferredConstCheck, internetExplorerChecks, invalidCasts, misplacedTypeAnnotation, missingGetCssName, missingProperties, missingProvide, missingRequire,missingReturn, msgDescriptions,newCheckTypes, nonStandardJsDocs,reportUnknownTypes, suspiciousCode,strictModuleDepCheck, typeInvalidation, undefinedNames, undefinedVars,unknownDefines, unnecessaryCasts,unusedLocalVariables, unusedPrivateMembers, uselessCode, useOfGoogBase,visibility. '*' adds all supported.",
    short:""
  },
  jscomp_warning:{
    value:"VAL",
    descrition:"Make the named class of warnings anormal warning. Options:accessControls, ambiguousFunctionDecl, checkEventfulObjectDisposal, checkRegExp, checkTypes, checkVars, conformanceViolations,const, constantProperty, deprecated,deprecatedAnnotations, duplicateMessage, es3, es5Strict, externsValidation,fileoverviewTags, globalThis,inferredConstCheck, internetExplorerChecks, invalidCasts, misplacedTypeAnnotation, missingGetCssName, missingProperties, missingProvide, missingRequire,missingReturn, msgDescriptions,newCheckTypes, nonStandardJsDocs,reportUnknownTypes, suspiciousCode,strictModuleDepCheck, typeInvalidation, undefinedNames, undefinedVars,unknownDefines, unnecessaryCasts,unusedLocalVariables, unusedPrivateMembers, uselessCode, useOfGoogBase,visibility. '*' adds all supported.",
    short:""
  },
  json_streams:{
    value:"[NONE | IN | OUT |BOTH]",
    descrition:"Specifies whether standard input andoutput streams will be a JSON arrayof sources. Each source will be anobject of the form {path: filename,src: file_contents, srcmap: srcmap_contents }. Intended for use by stream-based build systems such as gulpjs.Options: NONE, IN, OUT, BOTH.Defaults to NONE.",
    short:""
  },
  jszip:{
    value:"VAL",
    descrition:"The JavaScript zip filename. You mayspecify multiple.",
    short:""
  },
  language_in:{
    value:"VAL",
    descrition:"Sets what language spec that inputsources conform. Options: ECMASCRIPT3,ECMASCRIPT5, ECMASCRIPT5_STRICT,ECMASCRIPT6 (default), ECMASCRIPT6_STRICT, ECMASCRIPT6_TYPED (experimental)",
    short:""
  },
  language_out:{
    value:"VAL",
    descrition:"Sets what language spec the outputshould conform to. Options: ECMASCRIPT3 (default), ECMASCRIPT5, ECMASCRIPT5_STRICT, ECMASCRIPT6_TYPED (experimental)",
    short:""
  },
  logging_level:{
    value:"VAL",
    descrition:"The logging level (standard java.util.logging.Level values) for Compilerprogress. Does not control errors orwarnings for the JavaScript codeunder compilation",
    short:""
  },
  manage_closure_dependencies:{
    value:"",
    descrition:"Automatically sort dependencies sothat a file that goog.provides symbolX will always come before a file thatgoog.requires symbol X. If an inputprovides symbols, and those symbolsare never required, then that inputwill not be included in the compilation.",
    short:""
  },
  module:{
    value:"VAL",
    descrition:"A JavaScript module specification.The format is <name>:<num-js-files>[:[<dep>,...][:]]]. Module names must beunique. Each dep is the name of amodule that this module depends on.Modules must be listed in dependencyorder, and JS source files must belisted in the corresponding order.Where --module flags occur inrelation to --js flags is unimportant.<num-js-files> may be set to 'auto'for the first module if it has nodependencies. Provide the value'auto' to trigger module creationfrom CommonJSmodules.",
    short:""
  },
  module_output_path_prefix:{
    value:"VAL",
    descrition:"Prefix for filenames of compiled JSmodules. <module-name>.js will beappended to this prefix. Directorieswill be created as needed. Use with--module",
    short:""
  },
  module_wrapper:{
    value:"VAL",
    descrition:"An output wrapper for a JavaScriptmodule (optional). The format is<name>:<wrapper>. The module namemust correspond with a modulespecified using --module. The wrappermust contain %s as the code placeholder. The %basename% placeholder canalso be used to substitute the basename of the module output file.",
    short:""
  },
  new_type_inf:{
    value:"",
    descrition:"Checks for type errors using the newtype inference algorithm.",
    short:""
  },
  only_closure_dependencies:{
    value:"",
    descrition:"Only include files in the transitivedependency of the entry points(specified by closure_entry_point).Files that do not provide dependencieswill be removed. This supersedesmanage_closure_dependencies",
    short:""
  },
  output_manifest:{
    value:"VAL",
    descrition:"Prints out a list of all the files inthe compilation. If --manage_closure_dependencies is on, this will notinclude files that got droppedbecause they were not required. The%outname% placeholder expands to theJS output file. If you're usingmodularization, using %outname% willcreate a manifest for each module.",
    short:""
  },
  output_module_dependencies:{
    value:"VAL",
    descrition:"Prints out a JSON file of dependenciesbetween modules.",
    short:""
  },
  output_wrapper:{
    value:"VAL",
    descrition:"Interpolate output into this stringat the place denoted by the markertoken %output%. Use marker token%output|jsstring% to do js stringescaping on the output.",
    short:""
  },
  output_wrapper_file:{
    value:"VAL",
    descrition:"Loads the specified file and passesthe file contents to the --output_wrapper flag, replacing the value if itexists.",
    short:""
  },
  polymer_pass:{
    value:"",
    descrition:"Rewrite Polymer classes to becompiler-friendly.",
    short:""
  },
  print_ast:{
    value:"",
    descrition:"Prints a dot file describing theinternal abstract syntax tree andexits",
    short:""
  },
  print_pass_graph:{
    value:"",
    descrition:"Prints a dot file describing thepasses that will get run and exits",
    short:""
  },
  print_tree:{
    value:"",
    descrition:"Prints out the parse tree and exits",
    short:""
  },
  process_closure_primitives:{
    value:"",
    descrition:"Processes built-ins from the Closurelibrary, such as goog.require(),goog.provide(), and goog.exportSymbol(). True by default.",
    short:""
  },
  process_common_js_modules:{
    value:"",
    descrition:"Process CommonJS modules to aconcatenable form.",
    short:""
  },
  process_jquery_primitives:{
    value:"",
    descrition:"Processes built-ins from the Jquerylibrary, such as jQuery.fn andjQuery.extend()",
    short:""
  },
  property_renaming_report:{
    value:"VAL",
    descrition:"File where the serialized version ofthe property renaming map producedshould be saved",
    short:""
  },
  rename_prefix_namespace:{
    value:"VAL",
    descrition:"Specifies the name of an object thatwill be used to store all non-externglobals",
    short:""
  },
  source_map_format:{
    value:"[DEFAULT | V3]",
    descrition:"The source map format to produce.Options are V3 and DEFAULT, which areequivalent.",
    short:""
  },
  source_map_input:{
    value:"VAL",
    descrition:"Source map locations for input files,separated by a '|', (i.e. input-file-path|input-source-map)",
    short:""
  },
  source_map_location_mapping:{
    value:"VAL",
    descrition:"Source map location mapping separatedby a '|' (i.e. filesystem-path|webserver-path)",
    short:""
  },
  summary_detail_level:{
    value:"N",
    descrition:"Controls how detailed the compilationsummary is. Values: 0 (never printsummary), 1 (print summary only ifthere are errors or warnings), 2(print summary if the 'checkTypes'diagnostic  group is enabled, see--jscomp_warning), 3 (always printsummary). The default level is 1",
    short:""
  },
  third_party:{
    value:"",
    descrition:"Check source validity but do notenforce Closure style rules andconventions",
    short:""
  },
  tracer_mode:{
    value:"[ALL | RAW_SIZE |TIMING_ONLY | OFF]",
    descrition:"Shows the duration of each compilerpass and the impact to the compiledoutput size. Options: ALL, RAW_SIZE,TIMING_ONLY, OFF",
    short:""
  },
  transform_amd_modules:{
    value:"",
    descrition:"Transform AMD to CommonJS modules.",
    short:""
  },
  translations_file:{
    value:"VAL",
    descrition:"Source of translated messages.Currently only supports XTB.",
    short:""
  },
  translations_project:{
    value:"VAL",
    descrition:"Scopes all translations to thespecified project.When specified, wewill use different message ids sothat messages in different projectscan have different translations.",
    short:""
  },
  use_types_for_optimization:{
    value:"",
    descrition:"Enable or disable the optimizationsbased on available type information.Inaccurate type annotations mayresult in incorrect results.",
    short:""
  },
  variable_renaming_report:{
    value:"VAL",
    descrition:"File where the serialized version ofthe variable renaming map producedshould be saved",
    short:""
  },
  version:{
    value:"",
    descrition:"Prints the compiler version to stdoutand exit.",
    short:""
  },
  warning_level:{
    value:"[QUIET | DEFAULT| VERBOSE]",
    descrition:"Specifies the warning level to use.Options: QUIET, DEFAULT, VERBOSE",
    short:"-W"
  },
  warnings_whitelist_file:{
    value:"VAL",
    descrition:"A file containing warnings tosuppress. Each line should be of theform<file-name>:<line-number>?  <warning-description>",
    short:""
  }
}