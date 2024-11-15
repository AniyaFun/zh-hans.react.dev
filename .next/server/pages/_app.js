(() => {
  var exports = {};
  exports.id = 888;
  exports.ids = [888];
  exports.modules = {
    /***/ 9212: /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      'use strict';
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => /* binding */ MyApp,
        /* harmony export */
      });
      /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(5893);
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(6689);
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
        /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(1853);
      /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default =
        /*#__PURE__*/ __webpack_require__.n(
          next_router__WEBPACK_IMPORTED_MODULE_2__
        );
      /* harmony import */ var _docsearch_css__WEBPACK_IMPORTED_MODULE_3__ =
        __webpack_require__(7765);
      /* harmony import */ var _docsearch_css__WEBPACK_IMPORTED_MODULE_3___default =
        /*#__PURE__*/ __webpack_require__.n(
          _docsearch_css__WEBPACK_IMPORTED_MODULE_3__
        );
      /* harmony import */ var _styles_algolia_css__WEBPACK_IMPORTED_MODULE_4__ =
        __webpack_require__(4230);
      /* harmony import */ var _styles_algolia_css__WEBPACK_IMPORTED_MODULE_4___default =
        /*#__PURE__*/ __webpack_require__.n(
          _styles_algolia_css__WEBPACK_IMPORTED_MODULE_4__
        );
      /* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_5__ =
        __webpack_require__(4729);
      /* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_5___default =
        /*#__PURE__*/ __webpack_require__.n(
          _styles_index_css__WEBPACK_IMPORTED_MODULE_5__
        );
      /* harmony import */ var _styles_sandpack_css__WEBPACK_IMPORTED_MODULE_6__ =
        __webpack_require__(1972);
      /* harmony import */ var _styles_sandpack_css__WEBPACK_IMPORTED_MODULE_6___default =
        /*#__PURE__*/ __webpack_require__.n(
          _styles_sandpack_css__WEBPACK_IMPORTED_MODULE_6__
        );
      /*
       * Copyright (c) Facebook, Inc. and its affiliates.
       */

      if (false) {
      }
      next_router__WEBPACK_IMPORTED_MODULE_2__.Router.events.on(
        'routeChangeComplete',
        (url) => {
          try {
            window._hmt.push(['_trackPageview', url]);
          } catch (e) {}
        }
      );
      function MyApp({Component, pageProps}) {
        const router = (0,
        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
        (0, react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
          // Taken from StackOverflow. Trying to detect both Safari desktop and mobile.
          const isSafari = /^((?!chrome|android).)*safari/i.test(
            navigator.userAgent
          );
          if (isSafari) {
            // This is kind of a lie.
            // We still rely on the manual Next.js scrollRestoration logic.
            // However, we *also* don't want Safari grey screen during the back swipe gesture.
            // Seems like it doesn't hurt to enable auto restore *and* Next.js logic at the same time.
            history.scrollRestoration = 'auto';
          } else {
            // For other browsers, let Next.js set scrollRestoration to 'manual'.
            // It seems to work better for Chrome and Firefox which don't animate the back swipe.
          }
        }, []);
        (0, react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
          const handleRouteChange = (url) => {
            const cleanedUrl = url.split(/[\?\#]/)[0];
            // @ts-ignore
            gtag('event', 'pageview', {
              event_label: cleanedUrl,
            });
          };
          router.events.on('routeChangeComplete', handleRouteChange);
          return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
          };
        }, [router.events]);
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
          Component,
          {
            ...pageProps,
          }
        );
      }

      /***/
    },

    /***/ 7765: /***/ () => {
      /***/
    },

    /***/ 4230: /***/ () => {
      /***/
    },

    /***/ 4729: /***/ () => {
      /***/
    },

    /***/ 1972: /***/ () => {
      /***/
    },

    /***/ 1853: /***/ (module) => {
      'use strict';
      module.exports = require('next/router');

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
  var __webpack_exports__ = __webpack_require__.X(0, [893], () =>
    __webpack_exec__(9212)
  );
  module.exports = __webpack_exports__;
})();
