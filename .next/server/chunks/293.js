'use strict';
exports.id = 293;
exports.ids = [293];
exports.modules = {
  /***/ 9293: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ runESLint: () => /* binding */ runESLint,
      /* harmony export */
    });
    /* harmony import */ var eslint_lib_linter_linter__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(6058);
    /* harmony import */ var eslint_lib_linter_linter__WEBPACK_IMPORTED_MODULE_0___default =
      /*#__PURE__*/ __webpack_require__.n(
        eslint_lib_linter_linter__WEBPACK_IMPORTED_MODULE_0__
      );
    // @ts-nocheck

    const getCodeMirrorPosition = (doc, {line, column}) => {
      return doc.line(line).from + (column ?? 0) - 1;
    };
    const linter =
      new eslint_lib_linter_linter__WEBPACK_IMPORTED_MODULE_0__.Linter();
    // HACK! Eslint requires 'esquery' using `require`, but there's no commonjs interop.
    // because of this it tries to run `esquery.parse()`, while there's only `esquery.default.parse()`.
    // This hack places the functions in the right place.
    const esquery = __webpack_require__(9319);
    esquery.parse = esquery.default?.parse;
    esquery.matches = esquery.default?.matches;
    const reactRules = __webpack_require__(1798).rules;
    linter.defineRules({
      'react-hooks/rules-of-hooks': reactRules['rules-of-hooks'],
      'react-hooks/exhaustive-deps': reactRules['exhaustive-deps'],
    });
    const options = {
      parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      rules: {
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
      },
    };
    const runESLint = (doc) => {
      const codeString = doc.toString();
      const errors = linter.verify(codeString, options);
      const severity = {
        1: 'warning',
        2: 'error',
      };
      const codeMirrorErrors = errors
        .map((error) => {
          if (!error) return undefined;
          const from = getCodeMirrorPosition(doc, {
            line: error.line,
            column: error.column,
          });
          const to = getCodeMirrorPosition(doc, {
            line: error.endLine ?? error.line,
            column: error.endColumn ?? error.column,
          });
          return {
            ruleId: error.ruleId,
            from,
            to,
            severity: severity[error.severity],
            message: error.message,
          };
        })
        .filter(Boolean);
      return {
        codeMirrorErrors,
        errors: errors.map((item) => {
          return {
            ...item,
            severity: severity[item.severity],
          };
        }),
      };
    };

    /***/
  },
};
