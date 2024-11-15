'use strict';
exports.id = 340;
exports.ids = [340];
exports.modules = {
  /***/ 1862: /***/ (module, __webpack_exports__, __webpack_require__) => {
    __webpack_require__.a(
      module,
      async (
        __webpack_handle_async_dependencies__,
        __webpack_async_result__
      ) => {
        try {
          /* harmony export */ __webpack_require__.d(__webpack_exports__, {
            /* harmony export */ T: () => /* binding */ SandpackConsole,
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
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(6689);
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_2__
            );
          /* harmony import */ var components_Icon_IconChevron__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(1255);
          /* harmony import */ var _codesandbox_sandpack_react_unstyled__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(7040);
          var __webpack_async_dependencies__ =
            __webpack_handle_async_dependencies__([
              _codesandbox_sandpack_react_unstyled__WEBPACK_IMPORTED_MODULE_4__,
            ]);
          _codesandbox_sandpack_react_unstyled__WEBPACK_IMPORTED_MODULE_4__ = (
            __webpack_async_dependencies__.then
              ? (await __webpack_async_dependencies__)()
              : __webpack_async_dependencies__
          )[0];
          /*
           * Copyright (c) Facebook, Inc. and its affiliates.
           */

          const getType = (message) => {
            if (message === 'log' || message === 'info') {
              return 'info';
            }
            if (message === 'warn') {
              return 'warning';
            }
            return 'error';
          };
          const getColor = (message) => {
            if (message === 'warn') {
              return 'text-yellow-50';
            } else if (message === 'error') {
              return 'text-red-40';
            } else {
              return 'text-secondary dark:text-secondary-dark';
            }
          };
          // based on https://github.com/tmpfs/format-util/blob/0e62d430efb0a1c51448709abd3e2406c14d8401/format.js#L1
          // based on https://developer.mozilla.org/en-US/docs/Web/API/console#Using_string_substitutions
          // Implements s, d, i and f placeholders
          function formatStr(...inputArgs) {
            const maybeMessage = inputArgs[0];
            if (typeof maybeMessage !== 'string') {
              return inputArgs;
            }
            // If the first argument is a string, check for substitutions.
            const args = inputArgs.slice(1);
            let formatted = String(maybeMessage);
            if (args.length) {
              const REGEXP = /(%?)(%([jds]))/g;
              formatted = formatted.replace(
                REGEXP,
                (match, escaped, ptn, flag) => {
                  let arg = args.shift();
                  switch (flag) {
                    case 's':
                      arg += '';
                      break;
                    case 'd':
                    case 'i':
                      arg = parseInt(arg, 10).toString();
                      break;
                    case 'f':
                      arg = parseFloat(arg).toString();
                      break;
                  }
                  if (!escaped) {
                    return arg;
                  }
                  args.unshift(arg);
                  return match;
                }
              );
            }
            // Arguments that remain after formatting.
            if (args.length) {
              for (let i = 0; i < args.length; i++) {
                formatted += ' ' + String(args[i]);
              }
            }
            // Update escaped %% values.
            return [formatted.replace(/%{2,2}/g, '%')];
          }
          const MAX_MESSAGE_COUNT = 100;
          const SandpackConsole = ({visible}) => {
            const {listen} = (0,
            _codesandbox_sandpack_react_unstyled__WEBPACK_IMPORTED_MODULE_4__.useSandpack)();
            const [logs, setLogs] = (0,
            react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
            const wrapperRef = (0, react__WEBPACK_IMPORTED_MODULE_2__.useRef)(
              null
            );
            (0, react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
              let isActive = true;
              const unsubscribe = listen((message) => {
                if (!isActive) {
                  console.warn('Received an unexpected log from Sandpack.');
                  return;
                }
                if (
                  (message.type === 'start' && message.firstLoad) ||
                  message.type === 'refresh'
                ) {
                  setLogs([]);
                }
                if (message.type === 'console' && message.codesandbox) {
                  setLogs((prev) => {
                    const newLogs = message.log
                      .filter((consoleData) => {
                        if (!consoleData.method) {
                          return false;
                        }
                        if (
                          typeof consoleData.data[0] === 'string' &&
                          consoleData.data[0].indexOf(
                            'The above error occurred'
                          ) !== -1
                        ) {
                          // Don't show React error addendum because
                          // we have a custom error overlay.
                          return false;
                        }
                        return true;
                      })
                      .map((consoleData) => {
                        return {
                          ...consoleData,
                          data: formatStr(...consoleData.data),
                        };
                      });
                    let messages = [...prev, ...newLogs];
                    while (messages.length > MAX_MESSAGE_COUNT) {
                      messages.shift();
                    }
                    return messages;
                  });
                }
              });
              return () => {
                unsubscribe();
                isActive = false;
              };
            }, [listen]);
            const [isExpanded, setIsExpanded] = (0,
            react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
            (0, react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
              if (wrapperRef.current) {
                wrapperRef.current.scrollTop = wrapperRef.current.scrollHeight;
              }
            }, [logs]);
            if (!visible || logs.length === 0) {
              return null;
            }
            return /*#__PURE__*/ (0,
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
              className:
                'absolute dark:border-gray-700 bg-white dark:bg-gray-95 border-t bottom-0 w-full dark:text-white',
              children: [
                /*#__PURE__*/ (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                  className: 'flex justify-between',
                  children: [
                    /*#__PURE__*/ (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                      'button',
                      {
                        className: 'flex items-center p-1',
                        onClick: () => setIsExpanded(!isExpanded),
                        children: [
                          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                            components_Icon_IconChevron__WEBPACK_IMPORTED_MODULE_3__ /* .IconChevron */.g,
                            {
                              displayDirection: isExpanded ? 'down' : 'right',
                            }
                          ),
                          /*#__PURE__*/ (0,
                          react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                            'span',
                            {
                              className: 'ps-1 text-sm',
                              children: ['Console (', logs.length, ')'],
                            }
                          ),
                        ],
                      }
                    ),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                      'button',
                      {
                        className: 'p-1',
                        onClick: () => {
                          setLogs([]);
                        },
                        children: /*#__PURE__*/ (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                          'svg',
                          {
                            viewBox: '0 0 24 24',
                            width: '18',
                            height: '18',
                            stroke: 'currentColor',
                            strokeWidth: '2',
                            fill: 'none',
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                            children: [
                              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                'circle',
                                {
                                  cx: '12',
                                  cy: '12',
                                  r: '10',
                                }
                              ),
                              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                'line',
                                {
                                  x1: '4.93',
                                  y1: '4.93',
                                  x2: '19.07',
                                  y2: '19.07',
                                }
                              ),
                            ],
                          }
                        ),
                      }
                    ),
                  ],
                }),
                isExpanded &&
                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                    'div',
                    {
                      className:
                        'w-full h-full border-t bg-white dark:border-gray-700 dark:bg-gray-95 min-h-[28px] console',
                      children:
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                          'div',
                          {
                            className: 'max-h-40 h-auto overflow-auto',
                            ref: wrapperRef,
                            children: logs.map(({data, id, method}) => {
                              return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                'div',
                                {
                                  className:
                                    classnames__WEBPACK_IMPORTED_MODULE_1___default()(
                                      'first:border-none border-t dark:border-gray-700 text-md p-1 ps-2 leading-6 font-mono min-h-[32px] whitespace-pre-wrap',
                                      `console-${getType(method)}`,
                                      getColor(method)
                                    ),
                                  children:
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                      'span',
                                      {
                                        className: 'console-message',
                                        children: data.map((msg, index) => {
                                          if (typeof msg === 'string') {
                                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                              'span',
                                              {
                                                children: msg,
                                              },
                                              `${msg}-${index}`
                                            );
                                          }
                                          let children;
                                          if (
                                            msg != null &&
                                            typeof msg['@t'] === 'string'
                                          ) {
                                            // CodeSandbox wraps custom types
                                            children = msg['@t'];
                                          } else {
                                            try {
                                              children = JSON.stringify(
                                                msg,
                                                null,
                                                2
                                              );
                                            } catch (error) {
                                              try {
                                                children =
                                                  Object.prototype.toString.call(
                                                    msg
                                                  );
                                              } catch (err) {
                                                children =
                                                  '[' + typeof msg + ']';
                                              }
                                            }
                                          }
                                          return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                            'span',
                                            {
                                              className:
                                                classnames__WEBPACK_IMPORTED_MODULE_1___default()(
                                                  'console-span'
                                                ),
                                              children:
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                                  _codesandbox_sandpack_react_unstyled__WEBPACK_IMPORTED_MODULE_4__.SandpackCodeViewer,
                                                  {
                                                    initMode: 'user-visible',
                                                    showTabs: false,
                                                    // fileType="js"
                                                    code: children,
                                                  }
                                                ),
                                            },
                                            `${msg}-${index}`
                                          );
                                        }),
                                      }
                                    ),
                                },
                                id
                              );
                            }),
                          }
                        ),
                    }
                  ),
              ],
            });
          };

          __webpack_async_result__();
        } catch (e) {
          __webpack_async_result__(e);
        }
      }
    );

    /***/
  },

  /***/ 4757: /***/ (module, __webpack_exports__, __webpack_require__) => {
    __webpack_require__.a(
      module,
      async (
        __webpack_handle_async_dependencies__,
        __webpack_async_result__
      ) => {
        try {
          /* harmony export */ __webpack_require__.d(__webpack_exports__, {
            /* harmony export */ $: () => /* binding */ CustomPreset,
            /* harmony export */
          });
          /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(5893);
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(6689);
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_1__
            );
          /* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(6405);
          /* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default =
            /*#__PURE__*/ __webpack_require__.n(
              react_dom__WEBPACK_IMPORTED_MODULE_2__
            );
          /* harmony import */ var _codesandbox_sandpack_react_unstyled__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(7040);
          /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(9003);
          /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default =
            /*#__PURE__*/ __webpack_require__.n(
              classnames__WEBPACK_IMPORTED_MODULE_4__
            );
          /* harmony import */ var components_Icon_IconChevron__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(1255);
          /* harmony import */ var _NavigationBar__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(9863);
          /* harmony import */ var _Preview__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(6651);
          /* harmony import */ var _useSandpackLint__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(8620);
          var __webpack_async_dependencies__ =
            __webpack_handle_async_dependencies__([
              _codesandbox_sandpack_react_unstyled__WEBPACK_IMPORTED_MODULE_3__,
              _NavigationBar__WEBPACK_IMPORTED_MODULE_6__,
              _Preview__WEBPACK_IMPORTED_MODULE_7__,
            ]);
          [
            _codesandbox_sandpack_react_unstyled__WEBPACK_IMPORTED_MODULE_3__,
            _NavigationBar__WEBPACK_IMPORTED_MODULE_6__,
            _Preview__WEBPACK_IMPORTED_MODULE_7__,
          ] = __webpack_async_dependencies__.then
            ? (await __webpack_async_dependencies__)()
            : __webpack_async_dependencies__;
          /*
           * Copyright (c) Facebook, Inc. and its affiliates.
           */

          const CustomPreset = /*#__PURE__*/ (0,
          react__WEBPACK_IMPORTED_MODULE_1__.memo)(function CustomPreset({
            providedFiles,
          }) {
            const {lintErrors, lintExtensions} = (0,
            _useSandpackLint__WEBPACK_IMPORTED_MODULE_8__ /* .useSandpackLint */.D)();
            const {sandpack} = (0,
            _codesandbox_sandpack_react_unstyled__WEBPACK_IMPORTED_MODULE_3__.useSandpack)();
            const {code} = (0,
            _codesandbox_sandpack_react_unstyled__WEBPACK_IMPORTED_MODULE_3__.useActiveCode)();
            const {activeFile} = sandpack;
            const lineCountRef = (0, react__WEBPACK_IMPORTED_MODULE_1__.useRef)(
              {}
            );
            if (!lineCountRef.current[activeFile]) {
              lineCountRef.current[activeFile] = code.split('\n').length;
            }
            const lineCount = lineCountRef.current[activeFile];
            const isExpandable = lineCount > 16;
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
              SandboxShell,
              {
                providedFiles: providedFiles,
                lintErrors: lintErrors,
                lintExtensions: lintExtensions,
                isExpandable: isExpandable,
              }
            );
          });
          const SandboxShell = /*#__PURE__*/ (0,
          react__WEBPACK_IMPORTED_MODULE_1__.memo)(function SandboxShell({
            providedFiles,
            lintErrors,
            lintExtensions,
            isExpandable,
          }) {
            const containerRef = (0, react__WEBPACK_IMPORTED_MODULE_1__.useRef)(
              null
            );
            const [isExpanded, setIsExpanded] = (0,
            react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,
              {
                children: /*#__PURE__*/ (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                  className: 'shadow-lg dark:shadow-lg-dark rounded-lg',
                  ref: containerRef,
                  style: {
                    contain: 'content',
                  },
                  children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                      _NavigationBar__WEBPACK_IMPORTED_MODULE_6__ /* .NavigationBar */.v,
                      {
                        providedFiles: providedFiles,
                      }
                    ),
                    /*#__PURE__*/ (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                      _codesandbox_sandpack_react_unstyled__WEBPACK_IMPORTED_MODULE_3__.SandpackLayout,
                      {
                        className:
                          classnames__WEBPACK_IMPORTED_MODULE_4___default()(
                            !(isExpandable || isExpanded) &&
                              'rounded-b-lg overflow-hidden',
                            isExpanded && 'sp-layout-expanded'
                          ),
                        children: [
                          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                            Editor,
                            {
                              lintExtensions: lintExtensions,
                            }
                          ),
                          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                            _Preview__WEBPACK_IMPORTED_MODULE_7__ /* .Preview */.M,
                            {
                              className: 'order-last xl:order-2',
                              isExpanded: isExpanded,
                              lintErrors: lintErrors,
                            }
                          ),
                          (isExpandable || isExpanded) &&
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                              'button',
                              {
                                translate: 'yes',
                                className:
                                  'sandpack-expand flex text-base justify-between dark:border-card-dark bg-wash dark:bg-card-dark items-center z-10 p-1 w-full order-2 xl:order-last border-b-1 relative top-0',
                                onClick: () => {
                                  const nextIsExpanded = !isExpanded;
                                  (0,
                                  react_dom__WEBPACK_IMPORTED_MODULE_2__.flushSync)(
                                    () => {
                                      setIsExpanded(nextIsExpanded);
                                    }
                                  );
                                  if (
                                    !nextIsExpanded &&
                                    containerRef.current !== null
                                  ) {
                                    // @ts-ignore
                                    if (
                                      containerRef.current
                                        .scrollIntoViewIfNeeded
                                    ) {
                                      // @ts-ignore
                                      containerRef.current.scrollIntoViewIfNeeded();
                                    } else {
                                      containerRef.current.scrollIntoView({
                                        block: 'nearest',
                                        inline: 'nearest',
                                      });
                                    }
                                  }
                                },
                                children: /*#__PURE__*/ (0,
                                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                  'span',
                                  {
                                    className:
                                      'flex p-2 focus:outline-none text-primary dark:text-primary-dark leading-[20px]',
                                    children: [
                                      /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                        components_Icon_IconChevron__WEBPACK_IMPORTED_MODULE_5__ /* .IconChevron */.g,
                                        {
                                          className: 'inline me-1.5 text-xl',
                                          displayDirection: isExpanded
                                            ? 'up'
                                            : 'down',
                                        }
                                      ),
                                      isExpanded ? '收起' : '显示更多',
                                    ],
                                  }
                                ),
                              }
                            ),
                        ],
                      }
                    ),
                  ],
                }),
              }
            );
          });
          const Editor = /*#__PURE__*/ (0,
          react__WEBPACK_IMPORTED_MODULE_1__.memo)(function Editor({
            lintExtensions,
          }) {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
              _codesandbox_sandpack_react_unstyled__WEBPACK_IMPORTED_MODULE_3__.SandpackCodeEditor,
              {
                showLineNumbers: true,
                showInlineErrors: true,
                showTabs: false,
                showRunButton: false,
                extensions: lintExtensions,
              }
            );
          });

          __webpack_async_result__();
        } catch (e) {
          __webpack_async_result__(e);
        }
      }
    );

    /***/
  },

  /***/ 7190: /***/ (module, __webpack_exports__, __webpack_require__) => {
    __webpack_require__.a(
      module,
      async (
        __webpack_handle_async_dependencies__,
        __webpack_async_result__
      ) => {
        try {
          /* harmony export */ __webpack_require__.d(__webpack_exports__, {
            /* harmony export */ o: () => /* binding */ DownloadButton,
            /* harmony export */
          });
          /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(5893);
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(6689);
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_1__
            );
          /* harmony import */ var _codesandbox_sandpack_react_unstyled__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(7040);
          /* harmony import */ var _Icon_IconDownload__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(6979);
          /* harmony import */ var _createFileMap__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(2576);
          var __webpack_async_dependencies__ =
            __webpack_handle_async_dependencies__([
              _codesandbox_sandpack_react_unstyled__WEBPACK_IMPORTED_MODULE_2__,
            ]);
          _codesandbox_sandpack_react_unstyled__WEBPACK_IMPORTED_MODULE_2__ = (
            __webpack_async_dependencies__.then
              ? (await __webpack_async_dependencies__)()
              : __webpack_async_dependencies__
          )[0];
          /*
           * Copyright (c) Facebook, Inc. and its affiliates.
           */

          let supportsImportMap = false;
          function subscribe(cb) {
            // This shouldn't actually need to update, but this works around
            // https://github.com/facebook/react/issues/26095
            let timeout = setTimeout(() => {
              supportsImportMap =
                HTMLScriptElement.supports &&
                HTMLScriptElement.supports('importmap');
              cb();
            }, 0);
            return () => clearTimeout(timeout);
          }
          function useSupportsImportMap() {
            function getCurrentValue() {
              return supportsImportMap;
            }
            function getServerSnapshot() {
              return false;
            }
            return (0, react__WEBPACK_IMPORTED_MODULE_1__.useSyncExternalStore)(
              subscribe,
              getCurrentValue,
              getServerSnapshot
            );
          }
          function DownloadButton({providedFiles}) {
            const {sandpack} = (0,
            _codesandbox_sandpack_react_unstyled__WEBPACK_IMPORTED_MODULE_2__.useSandpack)();
            const supported = useSupportsImportMap();
            if (!supported) {
              return null;
            }
            if (
              providedFiles.some(
                (file) =>
                  !_createFileMap__WEBPACK_IMPORTED_MODULE_4__ /* .SUPPORTED_FILES.includes */._u
                    .includes(file)
              )
            ) {
              return null;
            }
            const downloadHTML = () => {
              const css =
                sandpack.files[
                  _createFileMap__WEBPACK_IMPORTED_MODULE_4__ /* .StylesCSSPath */
                    .xu
                ]?.code ?? '';
              const code =
                sandpack.files[
                  _createFileMap__WEBPACK_IMPORTED_MODULE_4__ /* .AppJSPath */
                    .pU
                ]?.code ?? '';
              const blob = new Blob([
                `<!DOCTYPE html>
<html>
<body>
  <div id="root"></div>
</body>
<!-- This setup is not suitable for production. -->
<!-- Only use it in development! -->
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script async src="https://ga.jspm.io/npm:es-module-shims@1.7.0/dist/es-module-shims.js"></script>
<script type="importmap">
{
  "imports": {
    "react": "https://esm.sh/react?dev",
    "react-dom/client": "https://esm.sh/react-dom/client?dev"
  }
}
</script>
<script type="text/babel" data-type="module">
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

${code.replace('export default ', 'let App = ')}

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
</script>
<style>
${css}
</style>
</html>`,
              ]);
              const url = window.URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.style.display = 'none';
              a.href = url;
              a.download = 'sandbox.html';
              document.body.appendChild(a);
              a.click();
              window.URL.revokeObjectURL(url);
            };
            return /*#__PURE__*/ (0,
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('button', {
              className:
                'text-sm text-primary dark:text-primary-dark inline-flex items-center hover:text-link duration-100 ease-in transition mx-1',
              onClick: downloadHTML,
              title: 'Download Sandbox',
              type: 'button',
              children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                  _Icon_IconDownload__WEBPACK_IMPORTED_MODULE_3__ /* .IconDownload */.D,
                  {
                    className: 'inline me-1',
                  }
                ),
                ' 下载',
              ],
            });
          }

          __webpack_async_result__();
        } catch (e) {
          __webpack_async_result__(e);
        }
      }
    );

    /***/
  },

  /***/ 3145: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ B: () => /* binding */ ErrorMessage,
      /* harmony export */
    });
    /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(5893);
    /*
     * Copyright (c) Facebook, Inc. and its affiliates.
     */
    function ErrorMessage({error, ...props}) {
      const {message, title} = error;
      return /*#__PURE__*/ (0,
      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
        className: 'bg-white border-2 border-red-40 rounded-lg p-6',
        ...props,
        children: [
          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
            'h2',
            {
              className: 'text-red-40 text-xl mb-4',
              children: title || 'Error',
            }
          ),
          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
            'pre',
            {
              className:
                'text-secondary whitespace-pre-wrap break-words leading-tight',
              children: message,
            }
          ),
        ],
      });
    }

    /***/
  },

  /***/ 4998: /***/ (module, __webpack_exports__, __webpack_require__) => {
    __webpack_require__.a(
      module,
      async (
        __webpack_handle_async_dependencies__,
        __webpack_async_result__
      ) => {
        try {
          /* harmony export */ __webpack_require__.d(__webpack_exports__, {
            /* harmony export */ f: () => /* binding */ LoadingOverlay,
            /* harmony export */
          });
          /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(5893);
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(6689);
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_1__
            );
          /* harmony import */ var _codesandbox_sandpack_react_unstyled__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(7040);
          var __webpack_async_dependencies__ =
            __webpack_handle_async_dependencies__([
              _codesandbox_sandpack_react_unstyled__WEBPACK_IMPORTED_MODULE_2__,
            ]);
          _codesandbox_sandpack_react_unstyled__WEBPACK_IMPORTED_MODULE_2__ = (
            __webpack_async_dependencies__.then
              ? (await __webpack_async_dependencies__)()
              : __webpack_async_dependencies__
          )[0];

          const FADE_ANIMATION_DURATION = 200;
          const LoadingOverlay = ({
            clientId,
            dependenciesLoading,
            forceLoading,
          }) => {
            const loadingOverlayState = useLoadingOverlayState(
              clientId,
              dependenciesLoading,
              forceLoading
            );
            if (loadingOverlayState === 'HIDDEN') {
              return null;
            }
            if (loadingOverlayState === 'TIMEOUT') {
              return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                'div',
                {
                  className: 'sp-overlay sp-error',
                  children: /*#__PURE__*/ (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                    className: 'sp-error-message',
                    children: [
                      'Unable to establish connection with the sandpack bundler. Make sure you are online or try again later. If the problem persists, please report it via',
                      ' ',
                      /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                        'a',
                        {
                          className: 'sp-error-message',
                          href: 'mailto:hello@codesandbox.io?subject=Sandpack Timeout Error',
                          children: 'email',
                        }
                      ),
                      ' ',
                      'or submit an issue on',
                      ' ',
                      /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                        'a',
                        {
                          className: 'sp-error-message',
                          href: 'https://github.com/codesandbox/sandpack/issues',
                          rel: 'noreferrer noopener',
                          target: '_blank',
                          children: 'GitHub.',
                        }
                      ),
                    ],
                  }),
                }
              );
            }
            const stillLoading =
              loadingOverlayState === 'LOADING' ||
              loadingOverlayState === 'PRE_FADING';
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
              'div',
              {
                className: 'sp-overlay sp-loading',
                style: {
                  opacity: stillLoading ? 1 : 0,
                  transition: `opacity ${FADE_ANIMATION_DURATION}ms ease-out`,
                },
                children: /*#__PURE__*/ (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                  className: 'sp-cube-wrapper',
                  title: 'Open in CodeSandbox',
                  children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                      _codesandbox_sandpack_react_unstyled__WEBPACK_IMPORTED_MODULE_2__.OpenInCodeSandboxButton,
                      {}
                    ),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                      'div',
                      {
                        className: 'sp-cube',
                        children: /*#__PURE__*/ (0,
                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                          'div',
                          {
                            className: 'sp-sides',
                            children: [
                              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                'div',
                                {
                                  className: 'top',
                                }
                              ),
                              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                'div',
                                {
                                  className: 'right',
                                }
                              ),
                              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                'div',
                                {
                                  className: 'bottom',
                                }
                              ),
                              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                'div',
                                {
                                  className: 'left',
                                }
                              ),
                              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                'div',
                                {
                                  className: 'front',
                                }
                              ),
                              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                'div',
                                {
                                  className: 'back',
                                }
                              ),
                            ],
                          }
                        ),
                      }
                    ),
                  ],
                }),
              }
            );
          };
          const useLoadingOverlayState = (
            clientId,
            dependenciesLoading,
            forceLoading
          ) => {
            const {sandpack, listen} = (0,
            _codesandbox_sandpack_react_unstyled__WEBPACK_IMPORTED_MODULE_2__.useSandpack)();
            const [state, setState] = (0,
            react__WEBPACK_IMPORTED_MODULE_1__.useState)('HIDDEN');
            if (state !== 'LOADING' && forceLoading) {
              setState('LOADING');
            }
            /**
             * Sandpack listener
             */ const sandpackIdle = sandpack.status === 'idle';
            (0, react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
              const unsubscribe = listen((message) => {
                if (message.type === 'done') {
                  setState((prev) => {
                    return prev === 'LOADING' ? 'PRE_FADING' : 'HIDDEN';
                  });
                }
              }, clientId);
              return () => {
                unsubscribe();
              };
            }, [listen, clientId, sandpackIdle]);
            /**
             * Fading transient state
             */ (0, react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
              let fadeTimeout;
              if (state === 'PRE_FADING' && !dependenciesLoading) {
                setState('FADING');
              } else if (state === 'FADING') {
                fadeTimeout = setTimeout(
                  () => setState('HIDDEN'),
                  FADE_ANIMATION_DURATION
                );
              }
              return () => {
                clearTimeout(fadeTimeout);
              };
            }, [state, dependenciesLoading]);
            if (sandpack.status === 'timeout') {
              return 'TIMEOUT';
            }
            if (sandpack.status !== 'running') {
              return 'HIDDEN';
            }
            return state;
          };

          __webpack_async_result__();
        } catch (e) {
          __webpack_async_result__(e);
        }
      }
    );

    /***/
  },

  /***/ 9863: /***/ (module, __webpack_exports__, __webpack_require__) => {
    __webpack_require__.a(
      module,
      async (
        __webpack_handle_async_dependencies__,
        __webpack_async_result__
      ) => {
        try {
          /* harmony export */ __webpack_require__.d(__webpack_exports__, {
            /* harmony export */ v: () => /* binding */ NavigationBar,
            /* harmony export */
          });
          /* unused harmony export useEvent */
          /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(5893);
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(6689);
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_1__
            );
          /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(9003);
          /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default =
            /*#__PURE__*/ __webpack_require__.n(
              classnames__WEBPACK_IMPORTED_MODULE_2__
            );
          /* harmony import */ var _codesandbox_sandpack_react_unstyled__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(7040);
          /* harmony import */ var _OpenInCodeSandboxButton__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(4300);
          /* harmony import */ var _ResetButton__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(104);
          /* harmony import */ var _DownloadButton__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(7190);
          /* harmony import */ var _Icon_IconChevron__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(1255);
          /* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_8__ =
            __webpack_require__(1185);
          /* harmony import */ var _OpenInTypeScriptPlayground__WEBPACK_IMPORTED_MODULE_9__ =
            __webpack_require__(1680);
          var __webpack_async_dependencies__ =
            __webpack_handle_async_dependencies__([
              _codesandbox_sandpack_react_unstyled__WEBPACK_IMPORTED_MODULE_3__,
              _OpenInCodeSandboxButton__WEBPACK_IMPORTED_MODULE_4__,
              _DownloadButton__WEBPACK_IMPORTED_MODULE_6__,
              _headlessui_react__WEBPACK_IMPORTED_MODULE_8__,
            ]);
          [
            _codesandbox_sandpack_react_unstyled__WEBPACK_IMPORTED_MODULE_3__,
            _OpenInCodeSandboxButton__WEBPACK_IMPORTED_MODULE_4__,
            _DownloadButton__WEBPACK_IMPORTED_MODULE_6__,
            _headlessui_react__WEBPACK_IMPORTED_MODULE_8__,
          ] = __webpack_async_dependencies__.then
            ? (await __webpack_async_dependencies__)()
            : __webpack_async_dependencies__;
          /*
           * Copyright (c) Facebook, Inc. and its affiliates.
           */

          function useEvent(fn) {
            const ref = (0, react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
            (0, react__WEBPACK_IMPORTED_MODULE_1__.useInsertionEffect)(() => {
              ref.current = fn;
            }, [fn]);
            return (0, react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(
              (...args) => {
                const f = ref.current;
                // @ts-ignore
                return f(...args);
              },
              []
            );
          }
          const getFileName = (filePath) => {
            const lastIndexOfSlash = filePath.lastIndexOf('/');
            return filePath.slice(lastIndexOfSlash + 1);
          };
          function NavigationBar({providedFiles}) {
            const {sandpack} = (0,
            _codesandbox_sandpack_react_unstyled__WEBPACK_IMPORTED_MODULE_3__.useSandpack)();
            const containerRef = (0, react__WEBPACK_IMPORTED_MODULE_1__.useRef)(
              null
            );
            const tabsRef = (0, react__WEBPACK_IMPORTED_MODULE_1__.useRef)(
              null
            );
            // By default, show the dropdown because all tabs may not fit.
            // We don't know whether they'll fit or not until after hydration:
            const [showDropdown, setShowDropdown] = (0,
            react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
            const {activeFile, setActiveFile, visibleFiles, clients} = sandpack;
            const clientId = Object.keys(clients)[0];
            const {refresh} = (0,
            _codesandbox_sandpack_react_unstyled__WEBPACK_IMPORTED_MODULE_3__.useSandpackNavigation)(
              clientId
            );
            const isMultiFile = visibleFiles.length > 1;
            const hasJustToggledDropdown = (0,
            react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);
            // Keep track of whether we can show all tabs or just the dropdown.
            const onContainerResize = useEvent((containerWidth) => {
              if (hasJustToggledDropdown.current === true) {
                // Ignore changes likely caused by ourselves.
                hasJustToggledDropdown.current = false;
                return;
              }
              if (tabsRef.current === null) {
                // Some ResizeObserver calls come after unmount.
                return;
              }
              const tabsWidth = tabsRef.current.getBoundingClientRect().width;
              const needsDropdown = tabsWidth >= containerWidth;
              if (needsDropdown !== showDropdown) {
                hasJustToggledDropdown.current = true;
                setShowDropdown(needsDropdown);
              }
            });
            (0, react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
              if (isMultiFile) {
                const resizeObserver = new ResizeObserver((entries) => {
                  for (const entry of entries) {
                    if (entry.contentBoxSize) {
                      const contentBoxSize = Array.isArray(entry.contentBoxSize)
                        ? entry.contentBoxSize[0]
                        : entry.contentBoxSize;
                      const width = contentBoxSize.inlineSize;
                      onContainerResize(width);
                    }
                  }
                });
                const container = containerRef.current;
                resizeObserver.observe(container);
                return () => resizeObserver.unobserve(container);
              } else {
                return;
              }
              // Note: in a real useEvent, onContainerResize would be omitted.
            }, [isMultiFile, onContainerResize]);
            const handleReset = () => {
              /**
               * resetAllFiles must come first, otherwise
               * the previous content will appear for a second
               * when the iframe loads.
               *
               * Plus, it should only prompt if there's any file changes
               */ if (
                sandpack.editorState === 'dirty' &&
                confirm('Reset all your edits too?')
              ) {
                sandpack.resetAllFiles();
              }
              refresh();
            };
            return /*#__PURE__*/ (0,
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
              className:
                'bg-wash dark:bg-card-dark flex justify-between items-center relative z-10 border-b border-border dark:border-border-dark rounded-t-lg text-lg',
              children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                  'div',
                  {
                    className: 'flex-1 grow min-w-0 px-4 lg:px-6',
                    children: /*#__PURE__*/ (0,
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                      _headlessui_react__WEBPACK_IMPORTED_MODULE_8__.Listbox,
                      {
                        value: activeFile,
                        onChange: setActiveFile,
                        children: [
                          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                            'div',
                            {
                              ref: containerRef,
                              children: /*#__PURE__*/ (0,
                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                'div',
                                {
                                  className: 'relative overflow-hidden',
                                  children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                      'div',
                                      {
                                        ref: tabsRef,
                                        className:
                                          classnames__WEBPACK_IMPORTED_MODULE_2___default()(
                                            // The container for all tabs is always in the DOM, but
                                            // not always visible. This lets us measure how much space
                                            // the tabs would take if displayed. We use this to decide
                                            // whether to keep showing the dropdown, or show all tabs.
                                            'w-[fit-content]',
                                            showDropdown ? 'invisible' : ''
                                          ),
                                        children:
                                          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                            _codesandbox_sandpack_react_unstyled__WEBPACK_IMPORTED_MODULE_3__.FileTabs,
                                            {}
                                          ),
                                      }
                                    ),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                      _headlessui_react__WEBPACK_IMPORTED_MODULE_8__
                                        .Listbox.Button,
                                      {
                                        as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                                        children: (
                                          {open} // If tabs don't fit, display the dropdown instead.
                                        ) =>
                                          // The dropdown is absolutely positioned inside the
                                          // space that's taken by the (invisible) tab list.
                                          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                            'button',
                                            {
                                              className:
                                                classnames__WEBPACK_IMPORTED_MODULE_2___default()(
                                                  'absolute top-0 start-[2px]',
                                                  !showDropdown && 'invisible'
                                                ),
                                              children: /*#__PURE__*/ (0,
                                              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
                                                'span',
                                                {
                                                  className:
                                                    classnames__WEBPACK_IMPORTED_MODULE_2___default()(
                                                      'h-full py-2 px-1 mt-px -mb-px flex border-b text-link dark:text-link-dark border-link dark:border-link-dark items-center text-md leading-tight truncate'
                                                    ),
                                                  style: {
                                                    maxWidth: '160px',
                                                  },
                                                  children: [
                                                    getFileName(activeFile),
                                                    isMultiFile &&
                                                      /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                                        'span',
                                                        {
                                                          className: 'ms-2',
                                                          children:
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                                              _Icon_IconChevron__WEBPACK_IMPORTED_MODULE_7__ /* .IconChevron */.g,
                                                              {
                                                                displayDirection:
                                                                  open
                                                                    ? 'up'
                                                                    : 'down',
                                                              }
                                                            ),
                                                        }
                                                      ),
                                                  ],
                                                }
                                              ),
                                            }
                                          ),
                                      }
                                    ),
                                  ],
                                }
                              ),
                            }
                          ),
                          isMultiFile &&
                            showDropdown &&
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                              _headlessui_react__WEBPACK_IMPORTED_MODULE_8__
                                .Listbox.Options,
                              {
                                className:
                                  'absolute mt-0.5 bg-card dark:bg-card-dark px-2 inset-x-0 mx-0 rounded-b-lg border-1 border-border dark:border-border-dark rounded-sm shadow-md',
                                children: visibleFiles.map((filePath) =>
                                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                    _headlessui_react__WEBPACK_IMPORTED_MODULE_8__
                                      .Listbox.Option,
                                    {
                                      value: filePath,
                                      as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                                      children: ({active}) =>
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                          'li',
                                          {
                                            className:
                                              classnames__WEBPACK_IMPORTED_MODULE_2___default()(
                                                'text-md mx-2 my-4 cursor-pointer',
                                                active &&
                                                  'text-link dark:text-link-dark'
                                              ),
                                            children: getFileName(filePath),
                                          }
                                        ),
                                    },
                                    filePath
                                  )
                                ),
                              }
                            ),
                        ],
                      }
                    ),
                  }
                ),
                /*#__PURE__*/ (0,
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                  className: 'px-3 flex items-center justify-end text-start',
                  translate: 'yes',
                  children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                      _DownloadButton__WEBPACK_IMPORTED_MODULE_6__ /* .DownloadButton */.o,
                      {
                        providedFiles: providedFiles,
                      }
                    ),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                      _ResetButton__WEBPACK_IMPORTED_MODULE_5__ /* .ResetButton */.J,
                      {
                        onReset: handleReset,
                      }
                    ),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                      _OpenInCodeSandboxButton__WEBPACK_IMPORTED_MODULE_4__ /* .OpenInCodeSandboxButton */.g,
                      {}
                    ),
                    activeFile.endsWith('.tsx') &&
                      /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                        _OpenInTypeScriptPlayground__WEBPACK_IMPORTED_MODULE_9__ /* .OpenInTypeScriptPlaygroundButton */.l,
                        {
                          content: sandpack.files[activeFile]?.code || '',
                        }
                      ),
                  ],
                }),
              ],
            });
          }

          __webpack_async_result__();
        } catch (e) {
          __webpack_async_result__(e);
        }
      }
    );

    /***/
  },

  /***/ 4300: /***/ (module, __webpack_exports__, __webpack_require__) => {
    __webpack_require__.a(
      module,
      async (
        __webpack_handle_async_dependencies__,
        __webpack_async_result__
      ) => {
        try {
          /* harmony export */ __webpack_require__.d(__webpack_exports__, {
            /* harmony export */ g: () => /* binding */ OpenInCodeSandboxButton,
            /* harmony export */
          });
          /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(5893);
          /* harmony import */ var _codesandbox_sandpack_react_unstyled__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(7040);
          /* harmony import */ var _Icon_IconNewPage__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(2295);
          var __webpack_async_dependencies__ =
            __webpack_handle_async_dependencies__([
              _codesandbox_sandpack_react_unstyled__WEBPACK_IMPORTED_MODULE_1__,
            ]);
          _codesandbox_sandpack_react_unstyled__WEBPACK_IMPORTED_MODULE_1__ = (
            __webpack_async_dependencies__.then
              ? (await __webpack_async_dependencies__)()
              : __webpack_async_dependencies__
          )[0];
          /*
           * Copyright (c) Facebook, Inc. and its affiliates.
           */

          const OpenInCodeSandboxButton = () => {
            return /*#__PURE__*/ (0,
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
              _codesandbox_sandpack_react_unstyled__WEBPACK_IMPORTED_MODULE_1__.UnstyledOpenInCodeSandboxButton,
              {
                className:
                  'text-sm text-primary dark:text-primary-dark inline-flex items-center hover:text-link duration-100 ease-in transition mx-1 ms-2 md:ms-1',
                title: 'Open in CodeSandbox',
                children: [
                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                    _Icon_IconNewPage__WEBPACK_IMPORTED_MODULE_2__ /* .IconNewPage */.x,
                    {
                      className: 'inline mx-1 relative top-[1px]',
                      width: '1em',
                      height: '1em',
                    }
                  ),
                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                    'span',
                    {
                      className: 'hidden md:block',
                      children: 'Fork',
                    }
                  ),
                ],
              }
            );
          };

          __webpack_async_result__();
        } catch (e) {
          __webpack_async_result__(e);
        }
      }
    );

    /***/
  },

  /***/ 1680: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ l: () =>
        /* binding */ OpenInTypeScriptPlaygroundButton,
      /* harmony export */
    });
    /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(5893);
    /* harmony import */ var _Icon_IconNewPage__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(2295);
    /*
     * Copyright (c) Facebook, Inc. and its affiliates.
     */

    const OpenInTypeScriptPlaygroundButton = (props) => {
      const contentWithReactImport = `import * as React from 'react';\n\n${props.content}`;
      return /*#__PURE__*/ (0,
      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('a', {
        className:
          'text-sm text-primary dark:text-primary-dark inline-flex items-center hover:text-link duration-100 ease-in transition mx-1 ml-2 md:ml-1',
        href: `https://www.typescriptlang.org/play#src=${encodeURIComponent(
          contentWithReactImport
        )}`,
        title: 'Open in TypeScript Playground',
        target: '_blank',
        rel: 'noreferrer',
        children: [
          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
            _Icon_IconNewPage__WEBPACK_IMPORTED_MODULE_1__ /* .IconNewPage */.x,
            {
              className: 'inline mx-1 relative top-[1px]',
              width: '1em',
              height: '1em',
            }
          ),
          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
            'span',
            {
              className: 'hidden md:block',
              children: 'TypeScript Playground',
            }
          ),
        ],
      });
    };

    /***/
  },

  /***/ 6651: /***/ (module, __webpack_exports__, __webpack_require__) => {
    __webpack_require__.a(
      module,
      async (
        __webpack_handle_async_dependencies__,
        __webpack_async_result__
      ) => {
        try {
          /* harmony export */ __webpack_require__.d(__webpack_exports__, {
            /* harmony export */ M: () => /* binding */ Preview,
            /* harmony export */
          });
          /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__(5893);
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(6689);
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_1__
            );
          /* harmony import */ var _codesandbox_sandpack_react_unstyled__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(7040);
          /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(9003);
          /* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default =
            /*#__PURE__*/ __webpack_require__.n(
              classnames__WEBPACK_IMPORTED_MODULE_3__
            );
          /* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(3145);
          /* harmony import */ var _Console__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(1862);
          /* harmony import */ var _LoadingOverlay__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(4998);
          var __webpack_async_dependencies__ =
            __webpack_handle_async_dependencies__([
              _codesandbox_sandpack_react_unstyled__WEBPACK_IMPORTED_MODULE_2__,
              _Console__WEBPACK_IMPORTED_MODULE_5__,
              _LoadingOverlay__WEBPACK_IMPORTED_MODULE_6__,
            ]);
          [
            _codesandbox_sandpack_react_unstyled__WEBPACK_IMPORTED_MODULE_2__,
            _Console__WEBPACK_IMPORTED_MODULE_5__,
            _LoadingOverlay__WEBPACK_IMPORTED_MODULE_6__,
          ] = __webpack_async_dependencies__.then
            ? (await __webpack_async_dependencies__)()
            : __webpack_async_dependencies__;
          /*
           * Copyright (c) Facebook, Inc. and its affiliates.
           */ /* eslint-disable react-hooks/exhaustive-deps */

          function useDebounced(value) {
            const ref = (0, react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
            const [saved, setSaved] = (0,
            react__WEBPACK_IMPORTED_MODULE_1__.useState)(value);
            (0, react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
              clearTimeout(ref.current);
              ref.current = setTimeout(() => {
                setSaved(value);
              }, 300);
            }, [value]);
            return saved;
          }
          function Preview({isExpanded, className, lintErrors}) {
            const {sandpack, listen} = (0,
            _codesandbox_sandpack_react_unstyled__WEBPACK_IMPORTED_MODULE_2__.useSandpack)();
            const [bundlerIsReady, setBundlerIsReady] = (0,
            react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
            const [showLoading, setShowLoading] = (0,
            react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
            const [iframeComputedHeight, setComputedAutoHeight] = (0,
            react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
            let {
              error: rawError,
              registerBundler,
              unregisterBundler,
            } = sandpack;
            if (
              rawError &&
              rawError.message === '_csbRefreshUtils.prelude is not a function'
            ) {
              // Work around a noisy internal error.
              rawError = null;
            }
            // When throwing a new Error in Sandpack - we want to disable the dev error dialog
            // to show the Error Boundary fallback
            if (rawError && rawError.message.includes('Example Error:')) {
              rawError = null;
            }
            // Memoized because it's fed to debouncing.
            const firstLintError = (0,
            react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
              if (lintErrors.length === 0) {
                return null;
              } else {
                const {line, column, message} = lintErrors[0];
                return {
                  title: 'Lint Error',
                  message: `${line}:${column} - ${message}`,
                };
              }
            }, [lintErrors]);
            if (rawError == null || rawError.title === 'Runtime Exception') {
              if (firstLintError !== null) {
                rawError = firstLintError;
              }
            }
            if (rawError != null && rawError.title === 'Runtime Exception') {
              rawError.title = 'Runtime Error';
            }
            // It changes too fast, causing flicker.
            const error = useDebounced(rawError);
            const clientId = (0, react__WEBPACK_IMPORTED_MODULE_1__.useId)();
            const iframeRef = (0, react__WEBPACK_IMPORTED_MODULE_1__.useRef)(
              null
            );
            const sandpackIdle = sandpack.status === 'idle';
            (0, react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(
              function createBundler() {
                const iframeElement = iframeRef.current;
                registerBundler(iframeElement, clientId);
                return () => {
                  unregisterBundler(clientId);
                };
              },
              []
            );
            (0, react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(
              function bundlerListener() {
                let timeout;
                const unsubscribe = listen((message) => {
                  if (message.type === 'resize') {
                    setComputedAutoHeight(message.height);
                  } else if (message.type === 'start') {
                    if (message.firstLoad) {
                      setBundlerIsReady(false);
                    }
                    /**
                     * The spinner component transition might be longer than
                     * the bundler loading, so we only show the spinner if
                     * it takes more than 500s to load the bundler.
                     */ timeout = setTimeout(() => {
                      setShowLoading(true);
                    }, 500);
                  } else if (message.type === 'done') {
                    setBundlerIsReady(true);
                    setShowLoading(false);
                    clearTimeout(timeout);
                  }
                }, clientId);
                return () => {
                  clearTimeout(timeout);
                  setBundlerIsReady(false);
                  setComputedAutoHeight(null);
                  unsubscribe();
                };
              },
              [sandpackIdle]
            );
            // WARNING:
            // The layout and styling here is convoluted and really easy to break.
            // If you make changes to it, you need to test different cases:
            // - Content -> (compile | runtime) error -> content editing flow should work.
            // - Errors should expand parent height rather than scroll.
            // - Long sandboxes should scroll unless "show more" is toggled.
            // - Expanded sandboxes ("show more") have sticky previews and errors.
            // - Sandboxes have autoheight based on content.
            // - That autoheight should be measured correctly! (Check some long ones.)
            // - You shouldn't see nested scrolls (that means autoheight is borked).
            // - Ideally you shouldn't see a blank preview tile while recompiling.
            // - Container shouldn't be horizontally scrollable (even while loading).
            // - It should work on mobile.
            // The best way to test it is to actually go through some challenges.
            const hideContent =
              error || !iframeComputedHeight || !bundlerIsReady;
            const iframeWrapperPosition = () => {
              if (hideContent) {
                return {
                  position: 'relative',
                };
              }
              if (isExpanded) {
                return {
                  position: 'sticky',
                  top: 'calc(2em + 64px)',
                };
              }
              return {};
            };
            return /*#__PURE__*/ (0,
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
              _codesandbox_sandpack_react_unstyled__WEBPACK_IMPORTED_MODULE_2__.SandpackStack,
              {
                className: className,
                children: [
                  /*#__PURE__*/ (0,
                  react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('div', {
                    className:
                      classnames__WEBPACK_IMPORTED_MODULE_3___default()(
                        'p-0 sm:p-2 md:p-4 lg:p-8 bg-card dark:bg-wash-dark h-full relative md:rounded-b-lg lg:rounded-b-none', // Allow content to be scrolled if it's too high to fit.
                        // Note we don't want this in the expanded state
                        // because it breaks position: sticky (and isn't needed anyway).
                        !isExpanded && (error || bundlerIsReady)
                          ? 'overflow-auto'
                          : null
                      ),
                    children: [
                      /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                        'div',
                        {
                          style: iframeWrapperPosition(),
                          children:
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                              'iframe',
                              {
                                ref: iframeRef,
                                className:
                                  classnames__WEBPACK_IMPORTED_MODULE_3___default()(
                                    'rounded-t-none bg-white md:shadow-md sm:rounded-lg w-full max-w-full transition-opacity', // We can't *actually* hide content because that would
                                    // break calculating the computed height in the iframe
                                    // (which we're using for autosizing). This is noticeable
                                    // if you make a compiler error and then fix it with code
                                    // that expands the content. You want to measure that.
                                    hideContent
                                      ? 'absolute opacity-0 pointer-events-none duration-75'
                                      : 'opacity-100 duration-150'
                                  ),
                                title: 'Sandbox Preview',
                                style: {
                                  height: iframeComputedHeight || '15px',
                                  zIndex: isExpanded ? 'initial' : -1,
                                },
                              }
                            ),
                        }
                      ),
                      error &&
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                          'div',
                          {
                            className:
                              classnames__WEBPACK_IMPORTED_MODULE_3___default()(
                                'z-50', // This isn't absolutely positioned so that
                                // the errors can also expand the parent height.
                                isExpanded ? 'sticky top-8 ' : null
                              ),
                            children:
                              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                                _ErrorMessage__WEBPACK_IMPORTED_MODULE_4__ /* .ErrorMessage */.B,
                                {
                                  error: error,
                                }
                              ),
                          }
                        ),
                      /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                        _LoadingOverlay__WEBPACK_IMPORTED_MODULE_6__ /* .LoadingOverlay */.f,
                        {
                          clientId: clientId,
                          dependenciesLoading:
                            !bundlerIsReady && iframeComputedHeight === null,
                          forceLoading: showLoading,
                        }
                      ),
                    ],
                  }),
                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                    _Console__WEBPACK_IMPORTED_MODULE_5__ /* .SandpackConsole */.T,
                    {
                      visible: !error,
                    }
                  ),
                ],
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

  /***/ 104: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ J: () => /* binding */ ResetButton,
      /* harmony export */
    });
    /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(5893);
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(6689);
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
      /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */ var _Icon_IconRestart__WEBPACK_IMPORTED_MODULE_2__ =
      __webpack_require__(7917);
    /*
     * Copyright (c) Facebook, Inc. and its affiliates.
     */

    function ResetButton({onReset}) {
      return /*#__PURE__*/ (0,
      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('button', {
        className:
          'text-sm text-primary dark:text-primary-dark inline-flex items-center hover:text-link duration-100 ease-in transition mx-1',
        onClick: onReset,
        title: 'Reset Sandbox',
        type: 'button',
        children: [
          /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
            _Icon_IconRestart__WEBPACK_IMPORTED_MODULE_2__ /* .IconRestart */.S,
            {
              className: 'inline mx-1 relative',
            }
          ),
          ' 重置',
        ],
      });
    }

    /***/
  },

  /***/ 1340: /***/ (module, __webpack_exports__, __webpack_require__) => {
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
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__(6689);
          /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
            /*#__PURE__*/ __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_1__
            );
          /* harmony import */ var _codesandbox_sandpack_react_unstyled__WEBPACK_IMPORTED_MODULE_2__ =
            __webpack_require__(7040);
          /* harmony import */ var _codesandbox_sandpack_client__WEBPACK_IMPORTED_MODULE_3__ =
            __webpack_require__(9429);
          /* harmony import */ var _CustomPreset__WEBPACK_IMPORTED_MODULE_4__ =
            __webpack_require__(4757);
          /* harmony import */ var _createFileMap__WEBPACK_IMPORTED_MODULE_5__ =
            __webpack_require__(2576);
          /* harmony import */ var _Themes__WEBPACK_IMPORTED_MODULE_6__ =
            __webpack_require__(5564);
          /* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_7__ =
            __webpack_require__(8292);
          var __webpack_async_dependencies__ =
            __webpack_handle_async_dependencies__([
              _codesandbox_sandpack_react_unstyled__WEBPACK_IMPORTED_MODULE_2__,
              _codesandbox_sandpack_client__WEBPACK_IMPORTED_MODULE_3__,
              _CustomPreset__WEBPACK_IMPORTED_MODULE_4__,
            ]);
          [
            _codesandbox_sandpack_react_unstyled__WEBPACK_IMPORTED_MODULE_2__,
            _codesandbox_sandpack_client__WEBPACK_IMPORTED_MODULE_3__,
            _CustomPreset__WEBPACK_IMPORTED_MODULE_4__,
          ] = __webpack_async_dependencies__.then
            ? (await __webpack_async_dependencies__)()
            : __webpack_async_dependencies__;
          /*
           * Copyright (c) Facebook, Inc. and its affiliates.
           */

          const sandboxStyle = `
* {
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
  margin: 20px;
  padding: 0;
}

h1 {
  margin-top: 0;
  font-size: 22px;
}

h2 {
  margin-top: 0;
  font-size: 20px;
}

h3 {
  margin-top: 0;
  font-size: 18px;
}

h4 {
  margin-top: 0;
  font-size: 16px;
}

h5 {
  margin-top: 0;
  font-size: 14px;
}

h6 {
  margin-top: 0;
  font-size: 12px;
}

code {
  font-size: 1.2em;
}

ul {
  padding-inline-start: 20px;
}
`.trim();
          function SandpackRoot(props) {
            let {children, autorun = true} = props;
            const codeSnippets =
              react__WEBPACK_IMPORTED_MODULE_1__.Children.toArray(children);
            const files = (0,
            _createFileMap__WEBPACK_IMPORTED_MODULE_5__ /* .createFileMap */.bX)(
              codeSnippets
            );
            files['/src/styles.css'] = {
              code: [sandboxStyle, files['/src/styles.css']?.code ?? ''].join(
                '\n\n'
              ),
              hidden: !files['/src/styles.css']?.visible,
            };
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
              'div',
              {
                className: 'sandpack sandpack--playground w-full my-8',
                dir: 'ltr',
                children:
                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                    _codesandbox_sandpack_react_unstyled__WEBPACK_IMPORTED_MODULE_2__.SandpackProvider,
                    {
                      files: {
                        ..._template__WEBPACK_IMPORTED_MODULE_7__ /* .template */.X,
                        ...files,
                      },
                      theme:
                        _Themes__WEBPACK_IMPORTED_MODULE_6__ /* .CustomTheme */.d,
                      customSetup: {
                        environment: 'create-react-app',
                      },
                      options: {
                        autorun,
                        initMode: 'user-visible',
                        initModeObserverOptions: {
                          rootMargin: '1400px 0px',
                        },
                        bundlerURL:
                          'https://786946de.sandpack-bundler-4bw.pages.dev',
                        logLevel:
                          _codesandbox_sandpack_client__WEBPACK_IMPORTED_MODULE_3__
                            .SandpackLogLevel.None,
                      },
                      children:
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                          _CustomPreset__WEBPACK_IMPORTED_MODULE_4__ /* .CustomPreset */.$,
                          {
                            providedFiles: Object.keys(files),
                          }
                        ),
                    }
                  ),
              }
            );
          }
          /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
            SandpackRoot;

          __webpack_async_result__();
        } catch (e) {
          __webpack_async_result__(e);
        }
      }
    );

    /***/
  },

  /***/ 8292: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ X: () => /* binding */ template,
      /* harmony export */
    });
    const template = {
      '/src/index.js': {
        hidden: true,
        code: `import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);`,
      },
      '/package.json': {
        hidden: true,
        code: JSON.stringify(
          {
            name: 'react.dev',
            version: '0.0.0',
            main: '/src/index.js',
            scripts: {
              start: 'react-scripts start',
              build: 'react-scripts build',
              test: 'react-scripts test --env=jsdom',
              eject: 'react-scripts eject',
            },
            dependencies: {
              react: '^18.0.0',
              'react-dom': '^18.0.0',
              'react-scripts': '^5.0.0',
            },
          },
          null,
          2
        ),
      },
      '/public/index.html': {
        hidden: true,
        code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div id="root"></div>
</body>
</html>`,
      },
    };

    /***/
  },

  /***/ 8620: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ D: () => /* binding */ useSandpackLint,
      /* harmony export */
    });
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(6689);
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
      /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
    /*
     * Copyright (c) Facebook, Inc. and its affiliates.
     */ // @ts-nocheck

    const useSandpackLint = () => {
      const [lintErrors, setLintErrors] = (0,
      react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
      const [lintExtensions, setLintExtensions] = (0,
      react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
      (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const loadLinter = async () => {
          const {linter} = await Promise.resolve(/* import() */).then(
            __webpack_require__.bind(__webpack_require__, 3937)
          );
          const onLint = linter(async (props) => {
            // This is intentionally delayed until CodeMirror calls it
            // so that we don't take away bandwidth from things loading early.
            const {runESLint} = await __webpack_require__
              .e(/* import() */ 293)
              .then(__webpack_require__.bind(__webpack_require__, 9293));
            const editorState = props.state.doc;
            let {errors, codeMirrorErrors} = runESLint(editorState);
            // Ignore parsing or internal linter errors.
            const isReactRuleError = (error) => error.ruleId != null;
            setLintErrors(errors.filter(isReactRuleError));
            return codeMirrorErrors.filter(isReactRuleError);
          });
          setLintExtensions([onLint]);
        };
        loadLinter();
      }, []);
      return {
        lintErrors,
        lintExtensions,
      };
    };

    /***/
  },
};
