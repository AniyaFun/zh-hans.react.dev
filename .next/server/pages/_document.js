(() => {
  var exports = {};
  exports.id = 660;
  exports.ids = [660];
  exports.modules = {
    /***/ 3104: /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      });
      /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(5893);
      /* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(6859);
      /* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default =
        /*#__PURE__*/ __webpack_require__.n(
          next_document__WEBPACK_IMPORTED_MODULE_1__
        );
      /* harmony import */ var _siteConfig__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(4299);
      /*
       * Copyright (c) Facebook, Inc. and its affiliates.
       */

      const MyDocument = () => {
        return /*#__PURE__*/ (0,
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(
          next_document__WEBPACK_IMPORTED_MODULE_1__.Html,
          {
            lang: _siteConfig__WEBPACK_IMPORTED_MODULE_2__ /* .siteConfig.languageCode */
              .J.languageCode,
            dir: _siteConfig__WEBPACK_IMPORTED_MODULE_2__ /* .siteConfig.isRTL */
              .J.isRTL
              ? 'rtl'
              : 'ltr',
            children: [
              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                next_document__WEBPACK_IMPORTED_MODULE_1__.Head,
                {}
              ),
              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                'link',
                {
                  rel: 'apple-touch-icon',
                  sizes: '180x180',
                  href: '/apple-touch-icon.png',
                }
              ),
              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                'link',
                {
                  rel: 'icon',
                  type: 'image/png',
                  sizes: '32x32',
                  href: '/favicon-32x32.png',
                }
              ),
              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                'link',
                {
                  rel: 'icon',
                  type: 'image/png',
                  sizes: '16x16',
                  href: '/favicon-16x16.png',
                }
              ),
              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                'link',
                {
                  rel: 'manifest',
                  href: '/site.webmanifest',
                }
              ),
              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                'link',
                {
                  rel: 'mask-icon',
                  href: '/safari-pinned-tab.svg',
                  color: '#404756',
                }
              ),
              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                'meta',
                {
                  name: 'msapplication-TileColor',
                  content: '#2b5797',
                }
              ),
              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                'meta',
                {
                  name: 'theme-color',
                  content: '#23272f',
                }
              ),
              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                'script',
                {
                  async: true,
                  src: `https://www.googletagmanager.com/gtag/js?id=${'G-B1E83PJ3RT'}`,
                }
              ),
              /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                'script',
                {
                  dangerouslySetInnerHTML: {
                    __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${'G-B1E83PJ3RT'}');`,
                  },
                }
              ),
              /*#__PURE__*/ (0,
              react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)('body', {
                className:
                  'font-text font-medium antialiased text-lg bg-wash dark:bg-wash-dark text-secondary dark:text-secondary-dark leading-base',
                children: [
                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                    'script',
                    {
                      dangerouslySetInnerHTML: {
                        __html: `
              (function () {
                try {
                  let logShown = false;
                  function setUwu(isUwu) {
                    try {
                      if (isUwu) {
                        localStorage.setItem('uwu', true);
                        document.documentElement.classList.add('uwu');
                        if (!logShown) {
                          console.log('uwu mode! turn off with ?uwu=0');
                          console.log('logo credit to @sawaratsuki1004 via https://github.com/SAWARATSUKI/ServiceLogos');
                          logShown = true;
                        }
                      } else {
                        localStorage.removeItem('uwu');
                        document.documentElement.classList.remove('uwu');
                        console.log('uwu mode off. turn on with ?uwu');
                      }
                    } catch (err) { }
                  }
                  window.__setUwu = setUwu;
                  function checkQueryParam() {
                    const params = new URLSearchParams(window.location.search);
                    const value = params.get('uwu');
                    switch(value) {
                      case '':
                      case 'true':
                      case '1':
                        return true;
                      case 'false':
                      case '0':
                        return false;
                      default:
                        return null;
                    }
                  }
                  function checkLocalStorage() {
                    try {
                      return localStorage.getItem('uwu') === 'true';
                    } catch (err) {
                      return false;
                    }
                  }
                  const uwuQueryParam = checkQueryParam();
                  if (uwuQueryParam != null) {
                    setUwu(uwuQueryParam);
                  } else if (checkLocalStorage()) {
                    document.documentElement.classList.add('uwu');
                  }
                } catch (err) { }
              })();
            `,
                      },
                    }
                  ),
                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                    'script',
                    {
                      dangerouslySetInnerHTML: {
                        __html: `
                (function () {
                  function setTheme(newTheme) {
                    window.__theme = newTheme;
                    if (newTheme === 'dark') {
                      document.documentElement.classList.add('dark');
                    } else if (newTheme === 'light') {
                      document.documentElement.classList.remove('dark');
                    }
                  }

                  var preferredTheme;
                  try {
                    preferredTheme = localStorage.getItem('theme');
                  } catch (err) { }

                  window.__setPreferredTheme = function(newTheme) {
                    preferredTheme = newTheme;
                    setTheme(newTheme);
                    try {
                      localStorage.setItem('theme', newTheme);
                    } catch (err) { }
                  };

                  var initialTheme = preferredTheme;
                  var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

                  if (!initialTheme) {
                    initialTheme = darkQuery.matches ? 'dark' : 'light';
                  }
                  setTheme(initialTheme);

                  darkQuery.addEventListener('change', function (e) {
                    if (!preferredTheme) {
                      setTheme(e.matches ? 'dark' : 'light');
                    }
                  });

                  // Detect whether the browser is Mac to display platform specific content
                  // An example of such content can be the keyboard shortcut displayed in the search bar
                  document.documentElement.classList.add(
                      window.navigator.platform.includes('Mac')
                      ? "platform-mac" 
                      : "platform-win"
                  );
                })();
              `,
                      },
                    }
                  ),
                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                    next_document__WEBPACK_IMPORTED_MODULE_1__.Main,
                    {}
                  ),
                  /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                    next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript,
                    {}
                  ),
                ],
              }),
            ],
          }
        );
      };
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
        MyDocument;

      /***/
    },

    /***/ 4299: /***/ (__unused_webpack_module, exports) => {
      /*
       * Copyright (c) Facebook, Inc. and its affiliates.
       */ exports.J = {
        version: '18.3.1',
        // --------------------------------------
        // Translations should replace these lines:
        languageCode: 'zh-hans',
        hasLegacySite: true,
        isRTL: false,
        // --------------------------------------
        copyright: `Copyright © ${new Date().getFullYear()} Facebook Inc. All Rights Reserved.`,
        repoUrl: 'https://github.com/facebook/react',
        twitterUrl: 'https://twitter.com/reactjs',
        algolia: {
          appId: '1FCF9AYYAT',
          apiKey: '1b7ad4e1c89e645e351e59d40544eda1',
          indexName: 'beta-react',
        },
      };

      /***/
    },

    /***/ 4140: /***/ (module) => {
      'use strict';
      module.exports = require('next/dist/server/get-page-files.js');

      /***/
    },

    /***/ 9716: /***/ (module) => {
      'use strict';
      module.exports = require('next/dist/server/htmlescape.js');

      /***/
    },

    /***/ 6368: /***/ (module) => {
      'use strict';
      module.exports = require('next/dist/server/utils.js');

      /***/
    },

    /***/ 6724: /***/ (module) => {
      'use strict';
      module.exports = require('next/dist/shared/lib/constants.js');

      /***/
    },

    /***/ 8743: /***/ (module) => {
      'use strict';
      module.exports = require('next/dist/shared/lib/html-context.js');

      /***/
    },

    /***/ 8524: /***/ (module) => {
      'use strict';
      module.exports = require('next/dist/shared/lib/is-plain-object.js');

      /***/
    },

    /***/ 6689: /***/ (module) => {
      'use strict';
      module.exports = require('react');

      /***/
    },
  };
  // load runtime
  var __webpack_require__ = require('../webpack-runtime.js');
  __webpack_require__.C(exports);
  var __webpack_exec__ = (moduleId) =>
    __webpack_require__((__webpack_require__.s = moduleId));
  var __webpack_exports__ = __webpack_require__.X(0, [893, 859], () =>
    __webpack_exec__(3104)
  );
  module.exports = __webpack_exports__;
})();
