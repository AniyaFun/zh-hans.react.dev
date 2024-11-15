'use strict';
exports.id = 825;
exports.ids = [825];
exports.modules = {
  /***/ 2825: /***/ (module, __webpack_exports__, __webpack_require__) => {
    __webpack_require__.a(
      module,
      async (
        __webpack_handle_async_dependencies__,
        __webpack_async_result__
      ) => {
        try {
          __webpack_require__.r(__webpack_exports__);
          /* harmony export */ __webpack_require__.d(__webpack_exports__, {
            /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
            /* harmony export */
          });
          /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(5893);
          /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(9003);
          /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default =
            /*#__PURE__*/ __webpack_require__.n(
              classnames__WEBPACK_IMPORTED_MODULE_1__
            );
          /* harmony import */ var _codemirror_language__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(3276);
          /* harmony import */ var _lezer_highlight__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(2521);
          /* harmony import */ var _codemirror_lang_javascript__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(1923);
          /* harmony import */ var _codemirror_lang_html__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(9851);
          /* harmony import */ var _codemirror_lang_css__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(4213);
          /* harmony import */ var parse_numeric_range__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(861);
          /* harmony import */ var parse_numeric_range__WEBPACK_IMPORTED_MODULE_7___default =
            /*#__PURE__*/ __webpack_require__.n(
              parse_numeric_range__WEBPACK_IMPORTED_MODULE_7__
            );
          /* harmony import */ var _Sandpack_Themes__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(5564);
          var __webpack_async_dependencies__ =
            __webpack_handle_async_dependencies__([
              _codemirror_language__WEBPACK_IMPORTED_MODULE_2__,
              _lezer_highlight__WEBPACK_IMPORTED_MODULE_3__,
              _codemirror_lang_javascript__WEBPACK_IMPORTED_MODULE_4__,
              _codemirror_lang_html__WEBPACK_IMPORTED_MODULE_5__,
              _codemirror_lang_css__WEBPACK_IMPORTED_MODULE_6__,
            ]);
          [
            _codemirror_language__WEBPACK_IMPORTED_MODULE_2__,
            _lezer_highlight__WEBPACK_IMPORTED_MODULE_3__,
            _codemirror_lang_javascript__WEBPACK_IMPORTED_MODULE_4__,
            _codemirror_lang_html__WEBPACK_IMPORTED_MODULE_5__,
            _codemirror_lang_css__WEBPACK_IMPORTED_MODULE_6__,
          ] = __webpack_async_dependencies__.then
            ? (await __webpack_async_dependencies__)()
            : __webpack_async_dependencies__;
          /*
           * Copyright (c) Facebook, Inc. and its affiliates.
           */

          const jsxLang = (0,
          _codemirror_lang_javascript__WEBPACK_IMPORTED_MODULE_4__.javascript)({
            jsx: true,
            typescript: false,
          });
          const cssLang = (0,
          _codemirror_lang_css__WEBPACK_IMPORTED_MODULE_6__.css)();
          const htmlLang = (0,
          _codemirror_lang_html__WEBPACK_IMPORTED_MODULE_5__.html)();
          const CodeBlock = function CodeBlock({
            children: {
              props: {className = 'language-js', children: code = '', meta},
            },
            noMargin,
            noShadow,
            onLineHover,
          }) {
            code = code.trimEnd();
            let lang = jsxLang;
            if (className === 'language-css') {
              lang = cssLang;
            } else if (className === 'language-html') {
              lang = htmlLang;
            }
            const tree = lang.language.parser.parse(code);
            let tokenStarts = new Map();
            let tokenEnds = new Map();
            const highlightTheme = getSyntaxHighlight(
              _Sandpack_Themes__WEBPACK_IMPORTED_MODULE_8__ /* .CustomTheme */.d
            );
            (0, _lezer_highlight__WEBPACK_IMPORTED_MODULE_3__.highlightTree)(
              tree,
              highlightTheme,
              (from, to, className) => {
                tokenStarts.set(from, className);
                tokenEnds.set(to, className);
              }
            );
            const highlightedLines = new Map();
            const lines = code.split('\n');
            const lineDecorators = getLineDecorators(code, meta);
            for (let decorator of lineDecorators) {
              highlightedLines.set(decorator.line - 1, decorator.className);
            }
            const inlineDecorators = getInlineDecorators(code, meta);
            const decoratorStarts = new Map();
            const decoratorEnds = new Map();
            for (let decorator of inlineDecorators) {
              // Find where inline highlight starts and ends.
              let decoratorStart = 0;
              for (let i = 0; i < decorator.line - 1; i++) {
                decoratorStart += lines[i].length + 1;
              }
              decoratorStart += decorator.startColumn;
              const decoratorEnd =
                decoratorStart + (decorator.endColumn - decorator.startColumn);
              if (decoratorStarts.has(decoratorStart)) {
                throw Error('Already opened decorator at ' + decoratorStart);
              }
              decoratorStarts.set(decoratorStart, decorator.className);
              if (decoratorEnds.has(decoratorEnd)) {
                throw Error('Already closed decorator at ' + decoratorEnd);
              }
              decoratorEnds.set(decoratorEnd, decorator.className);
            }
            // Produce output based on tokens and decorators.
            // We assume tokens never overlap other tokens, and
            // decorators never overlap with other decorators.
            // However, tokens and decorators may mutually overlap.
            // In that case, decorators always take precedence.
            let currentDecorator = null;
            let currentToken = null;
            let buffer = '';
            let lineIndex = 0;
            let lineOutput = [];
            let finalOutput = [];
            for (let i = 0; i < code.length; i++) {
              if (tokenEnds.has(i)) {
                if (!currentToken) {
                  throw Error(
                    'Cannot close token at ' + i + ' because it was not open.'
                  );
                }
                if (!currentDecorator) {
                  lineOutput.push(
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                      'span',
                      {
                        className: currentToken,
                        children: buffer,
                      },
                      i + '/t'
                    )
                  );
                  buffer = '';
                }
                currentToken = null;
              }
              if (decoratorEnds.has(i)) {
                if (!currentDecorator) {
                  throw Error(
                    'Cannot close decorator at ' +
                      i +
                      ' because it was not open.'
                  );
                }
                lineOutput.push(
                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                    'span',
                    {
                      className: currentDecorator,
                      children: buffer,
                    },
                    i + '/d'
                  )
                );
                buffer = '';
                currentDecorator = null;
              }
              if (decoratorStarts.has(i)) {
                if (currentDecorator) {
                  throw Error(
                    'Cannot open decorator at ' +
                      i +
                      ' before closing last one.'
                  );
                }
                if (currentToken) {
                  lineOutput.push(
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                      'span',
                      {
                        className: currentToken,
                        children: buffer,
                      },
                      i + 'd'
                    )
                  );
                  buffer = '';
                } else {
                  lineOutput.push(buffer);
                  buffer = '';
                }
                currentDecorator = decoratorStarts.get(i);
              }
              if (tokenStarts.has(i)) {
                if (currentToken) {
                  throw Error(
                    'Cannot open token at ' + i + ' before closing last one.'
                  );
                }
                currentToken = tokenStarts.get(i);
                if (!currentDecorator) {
                  lineOutput.push(buffer);
                  buffer = '';
                }
              }
              if (code[i] === '\n') {
                lineOutput.push(buffer);
                buffer = '';
                const currentLineIndex = lineIndex;
                finalOutput.push(
                  /*#__PURE__*/ (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                    'div',
                    {
                      className:
                        'cm-line ' + (highlightedLines.get(lineIndex) ?? ''),
                      onMouseEnter: onLineHover
                        ? () => onLineHover(currentLineIndex)
                        : undefined,
                      children: [
                        lineOutput,
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                          'br',
                          {}
                        ),
                      ],
                    },
                    lineIndex
                  )
                );
                lineOutput = [];
                lineIndex++;
              } else {
                buffer += code[i];
              }
            }
            if (currentDecorator) {
              lineOutput.push(
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                  'span',
                  {
                    className: currentDecorator,
                    children: buffer,
                  },
                  'end/d'
                )
              );
            } else if (currentToken) {
              lineOutput.push(
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                  'span',
                  {
                    className: currentToken,
                    children: buffer,
                  },
                  'end/t'
                )
              );
            } else {
              lineOutput.push(buffer);
            }
            finalOutput.push(
              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                'div',
                {
                  className:
                    'cm-line ' + (highlightedLines.get(lineIndex) ?? ''),
                  onMouseEnter: onLineHover
                    ? () => onLineHover(lineIndex)
                    : undefined,
                  children: lineOutput,
                },
                lineIndex
              )
            );
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
              'div',
              {
                dir: 'ltr',
                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(
                  'sandpack sandpack--codeblock',
                  'rounded-2xl h-full w-full overflow-x-auto flex items-center bg-wash dark:bg-gray-95 shadow-lg',
                  !noMargin && 'my-8',
                  noShadow &&
                    'shadow-none rounded-2xl overflow-hidden w-full flex bg-transparent'
                ),
                style: {
                  contain: 'content',
                },
                children:
                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                    'div',
                    {
                      className: 'sp-wrapper',
                      children:
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                          'div',
                          {
                            className: 'sp-stack',
                            children:
                              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                'div',
                                {
                                  className: 'sp-code-editor',
                                  children:
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                      'pre',
                                      {
                                        className:
                                          'sp-cm sp-pristine sp-javascript flex align-start',
                                        children:
                                          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                            'code',
                                            {
                                              className:
                                                'sp-pre-placeholder grow-[2]',
                                              onMouseLeave: onLineHover
                                                ? () => onLineHover(null)
                                                : undefined,
                                              children: finalOutput,
                                            }
                                          ),
                                      }
                                    ),
                                }
                              ),
                          }
                        ),
                    }
                  ),
              }
            );
          };
          /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
            CodeBlock;
          function classNameToken(name) {
            return `sp-syntax-${name}`;
          }
          function getSyntaxHighlight(theme) {
            return _codemirror_language__WEBPACK_IMPORTED_MODULE_2__.HighlightStyle.define(
              [
                {
                  tag: _lezer_highlight__WEBPACK_IMPORTED_MODULE_3__.tags.link,
                  textdecorator: 'underline',
                },
                {
                  tag: _lezer_highlight__WEBPACK_IMPORTED_MODULE_3__.tags
                    .emphasis,
                  fontStyle: 'italic',
                },
                {
                  tag: _lezer_highlight__WEBPACK_IMPORTED_MODULE_3__.tags
                    .strong,
                  fontWeight: 'bold',
                },
                {
                  tag: _lezer_highlight__WEBPACK_IMPORTED_MODULE_3__.tags
                    .keyword,
                  class: classNameToken('keyword'),
                },
                {
                  tag: [
                    _lezer_highlight__WEBPACK_IMPORTED_MODULE_3__.tags.atom,
                    _lezer_highlight__WEBPACK_IMPORTED_MODULE_3__.tags.number,
                    _lezer_highlight__WEBPACK_IMPORTED_MODULE_3__.tags.bool,
                  ],
                  class: classNameToken('static'),
                },
                {
                  tag: _lezer_highlight__WEBPACK_IMPORTED_MODULE_3__.tags.standard(
                    _lezer_highlight__WEBPACK_IMPORTED_MODULE_3__.tags.tagName
                  ),
                  class: classNameToken('tag'),
                },
                {
                  tag: _lezer_highlight__WEBPACK_IMPORTED_MODULE_3__.tags
                    .variableName,
                  class: classNameToken('plain'),
                },
                {
                  // Highlight function call
                  tag: _lezer_highlight__WEBPACK_IMPORTED_MODULE_3__.tags[
                    'function'
                  ](
                    _lezer_highlight__WEBPACK_IMPORTED_MODULE_3__.tags
                      .variableName
                  ),
                  class: classNameToken('definition'),
                },
                {
                  // Highlight function definition differently (eg: functional component def in React)
                  tag: [
                    _lezer_highlight__WEBPACK_IMPORTED_MODULE_3__.tags.definition(
                      _lezer_highlight__WEBPACK_IMPORTED_MODULE_3__.tags[
                        'function'
                      ](
                        _lezer_highlight__WEBPACK_IMPORTED_MODULE_3__.tags
                          .variableName
                      )
                    ),
                    _lezer_highlight__WEBPACK_IMPORTED_MODULE_3__.tags.tagName,
                  ],
                  class: classNameToken('definition'),
                },
                {
                  tag: _lezer_highlight__WEBPACK_IMPORTED_MODULE_3__.tags
                    .propertyName,
                  class: classNameToken('property'),
                },
                {
                  tag: [
                    _lezer_highlight__WEBPACK_IMPORTED_MODULE_3__.tags.literal,
                    _lezer_highlight__WEBPACK_IMPORTED_MODULE_3__.tags.inserted,
                  ],
                  class: classNameToken(
                    theme.syntax.string ? 'string' : 'static'
                  ),
                },
                {
                  tag: _lezer_highlight__WEBPACK_IMPORTED_MODULE_3__.tags
                    .punctuation,
                  class: classNameToken('punctuation'),
                },
                {
                  tag: [
                    _lezer_highlight__WEBPACK_IMPORTED_MODULE_3__.tags.comment,
                    _lezer_highlight__WEBPACK_IMPORTED_MODULE_3__.tags.quote,
                  ],
                  class: classNameToken('comment'),
                },
              ]
            );
          }
          function getLineDecorators(code, meta) {
            if (!meta) {
              return [];
            }
            const linesToHighlight = getHighlightLines(meta);
            const highlightedLineConfig = linesToHighlight.map((line) => {
              return {
                className: 'bg-github-highlight dark:bg-opacity-10',
                line,
              };
            });
            return highlightedLineConfig;
          }
          function getInlineDecorators(code, meta) {
            if (!meta) {
              return [];
            }
            const inlineHighlightLines = getInlineHighlights(meta, code);
            const inlineHighlightConfig = inlineHighlightLines.map((line) => ({
              ...line,
              elementAttributes: {
                'data-step': `${line.step}`,
              },
              className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(
                'code-step bg-opacity-10 dark:bg-opacity-20 relative rounded px-1 py-[1.5px] border-b-[2px] border-opacity-60',
                {
                  'bg-blue-40 border-blue-40 text-blue-60 dark:text-blue-30':
                    line.step === 1,
                  'bg-yellow-40 border-yellow-40 text-yellow-60 dark:text-yellow-30':
                    line.step === 2,
                  'bg-purple-40 border-purple-40 text-purple-60 dark:text-purple-30':
                    line.step === 3,
                  'bg-green-40 border-green-40 text-green-60 dark:text-green-30':
                    line.step === 4,
                }
              ),
            }));
            return inlineHighlightConfig;
          }
          /**
           *
           * @param meta string provided after the language in a markdown block
           * @returns array of lines to highlight
           * @example
           * ```js {1-3,7} [[1, 1, 20, 33], [2, 4, 4, 8]] App.js active
           * ...
           * ```
           *
           * -> The meta is `{1-3,7} [[1, 1, 20, 33], [2, 4, 4, 8]] App.js active`
           */ function getHighlightLines(meta) {
            const HIGHLIGHT_REGEX = /{([\d,-]+)}/;
            const parsedMeta = HIGHLIGHT_REGEX.exec(meta);
            if (!parsedMeta) {
              return [];
            }
            return parse_numeric_range__WEBPACK_IMPORTED_MODULE_7___default()(
              parsedMeta[1]
            );
          }
          /**
           *
           * @param meta string provided after the language in a markdown block
           * @returns InlineHighlight[]
           * @example
           * ```js {1-3,7} [[1, 1, 'count'], [2, 4, 'setCount']] App.js active
           * ...
           * ```
           *
           * -> The meta is `{1-3,7} [[1, 1, 'count', [2, 4, 'setCount']] App.js active`
           */ function getInlineHighlights(meta, code) {
            const INLINE_HEIGHT_REGEX = /(\[\[.*\]\])/;
            const parsedMeta = INLINE_HEIGHT_REGEX.exec(meta);
            if (!parsedMeta) {
              return [];
            }
            const lines = code.split('\n');
            const encodedHighlights = JSON.parse(parsedMeta[1]);
            return encodedHighlights.map(
              ([step, lineNo, substr, fromIndex]) => {
                const line = lines[lineNo - 1];
                let index = line.indexOf(substr);
                const lastIndex = line.lastIndexOf(substr);
                if (index !== lastIndex) {
                  if (fromIndex === undefined) {
                    throw Error(
                      "Found '" +
                        substr +
                        "' twice. Specify fromIndex as the fourth value in the tuple."
                    );
                  }
                  index = line.indexOf(substr, fromIndex);
                }
                if (index === -1) {
                  throw Error("Could not find: '" + substr + "'");
                }
                return {
                  step,
                  line: lineNo,
                  startColumn: index,
                  endColumn: index + substr.length,
                };
              }
            );
          }

          __webpack_async_result__();
        } catch (e) {
          __webpack_async_result__(e);
        }
      }
    );

    /***/
  },
};
