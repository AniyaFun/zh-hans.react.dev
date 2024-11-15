(() => {
  var exports = {};
  exports.id = 116;
  exports.ids = [116, 324];
  exports.modules = {
    /***/ 9764: /***/ (module, __webpack_exports__, __webpack_require__) => {
      'use strict';
      __webpack_require__.a(
        module,
        async (
          __webpack_handle_async_dependencies__,
          __webpack_async_result__
        ) => {
          try {
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
              /* harmony export */ default: () => /* binding */ Layout,
              /* harmony export */ getStaticPaths: () =>
                /* binding */ getStaticPaths,
              /* harmony export */ getStaticProps: () =>
                /* binding */ getStaticProps,
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
            /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ =
              __webpack_require__(1853);
            /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default =
              /*#__PURE__*/ __webpack_require__.n(
                next_router__WEBPACK_IMPORTED_MODULE_2__
              );
            /* harmony import */ var components_Layout_Page__WEBPACK_IMPORTED_MODULE_3__ =
              __webpack_require__(2713);
            /* harmony import */ var _sidebarHome_json__WEBPACK_IMPORTED_MODULE_4__ =
              __webpack_require__(1161);
            /* harmony import */ var _sidebarLearn_json__WEBPACK_IMPORTED_MODULE_5__ =
              __webpack_require__(1458);
            /* harmony import */ var _sidebarReference_json__WEBPACK_IMPORTED_MODULE_6__ =
              __webpack_require__(1387);
            /* harmony import */ var _sidebarCommunity_json__WEBPACK_IMPORTED_MODULE_7__ =
              __webpack_require__(9605);
            /* harmony import */ var _sidebarBlog_json__WEBPACK_IMPORTED_MODULE_8__ =
              __webpack_require__(8682);
            /* harmony import */ var components_MDX_MDXComponents__WEBPACK_IMPORTED_MODULE_9__ =
              __webpack_require__(4715);
            /* harmony import */ var utils_compileMDX__WEBPACK_IMPORTED_MODULE_10__ =
              __webpack_require__(519);
            /* harmony import */ var _utils_rss__WEBPACK_IMPORTED_MODULE_11__ =
              __webpack_require__(4128);
            var __webpack_async_dependencies__ =
              __webpack_handle_async_dependencies__([
                components_Layout_Page__WEBPACK_IMPORTED_MODULE_3__,
              ]);
            components_Layout_Page__WEBPACK_IMPORTED_MODULE_3__ = (
              __webpack_async_dependencies__.then
                ? (await __webpack_async_dependencies__)()
                : __webpack_async_dependencies__
            )[0];
            /*
             * Copyright (c) Facebook, Inc. and its affiliates.
             */

            function Layout({content, toc, meta, languages}) {
              const parsedContent = (0,
              react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(
                () => JSON.parse(content, reviveNodeOnClient),
                [content]
              );
              const parsedToc = (0, react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(
                () => JSON.parse(toc, reviveNodeOnClient),
                [toc]
              );
              const section = useActiveSection();
              let routeTree;
              switch (section) {
                case 'home':
                case 'unknown':
                  routeTree = _sidebarHome_json__WEBPACK_IMPORTED_MODULE_4__;
                  break;
                case 'learn':
                  routeTree = _sidebarLearn_json__WEBPACK_IMPORTED_MODULE_5__;
                  break;
                case 'reference':
                  routeTree =
                    _sidebarReference_json__WEBPACK_IMPORTED_MODULE_6__;
                  break;
                case 'community':
                  routeTree =
                    _sidebarCommunity_json__WEBPACK_IMPORTED_MODULE_7__;
                  break;
                case 'blog':
                  routeTree = _sidebarBlog_json__WEBPACK_IMPORTED_MODULE_8__;
                  break;
              }
              return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
                components_Layout_Page__WEBPACK_IMPORTED_MODULE_3__ /* .Page */.T,
                {
                  toc: parsedToc,
                  routeTree: routeTree,
                  meta: meta,
                  section: section,
                  languages: languages,
                  children: parsedContent,
                }
              );
            }
            function useActiveSection() {
              const {asPath} = (0,
              next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
              const cleanedPath = asPath.split(/[\?\#]/)[0];
              if (cleanedPath === '/') {
                return 'home';
              } else if (cleanedPath.startsWith('/reference')) {
                return 'reference';
              } else if (asPath.startsWith('/learn')) {
                return 'learn';
              } else if (asPath.startsWith('/community')) {
                return 'community';
              } else if (asPath.startsWith('/blog')) {
                return 'blog';
              } else {
                return 'unknown';
              }
            }
            // Deserialize a client React tree from JSON.
            function reviveNodeOnClient(key, val) {
              if (Array.isArray(val) && val[0] == '$r') {
                // Assume it's a React element.
                let type = val[1];
                let key = val[2];
                let props = val[3];
                if (type === 'wrapper') {
                  type = react__WEBPACK_IMPORTED_MODULE_1__.Fragment;
                  props = {
                    children: props.children,
                  };
                }
                if (
                  components_MDX_MDXComponents__WEBPACK_IMPORTED_MODULE_9__ /* .MDXComponents */
                    .t[type]
                ) {
                  type =
                    components_MDX_MDXComponents__WEBPACK_IMPORTED_MODULE_9__ /* .MDXComponents */
                      .t[type];
                }
                if (!type) {
                  console.error('Unknown type: ' + type);
                  type = react__WEBPACK_IMPORTED_MODULE_1__.Fragment;
                }
                return {
                  $$typeof: Symbol.for('react.element'),
                  type: type,
                  key: key,
                  ref: null,
                  props: props,
                  _owner: null,
                };
              } else {
                return val;
              }
            }
            // Put MDX output into JSON for client.
            async function getStaticProps(context) {
              (0,
              _utils_rss__WEBPACK_IMPORTED_MODULE_11__ /* .generateRssFeed */.e)();
              const fs = __webpack_require__(7147);
              const rootDir = process.cwd() + '/src/content/';
              // Read MDX from the file.
              let path =
                (context.params.markdownPath || []).join('/') || 'index';
              let mdx;
              try {
                mdx = fs.readFileSync(rootDir + path + '.md', 'utf8');
              } catch {
                mdx = fs.readFileSync(rootDir + path + '/index.md', 'utf8');
              }
              const {toc, content, meta, languages} = await (0,
              utils_compileMDX__WEBPACK_IMPORTED_MODULE_10__ /* ["default"] */.Z)(
                mdx,
                path,
                {}
              );
              return {
                props: {
                  toc,
                  content,
                  meta,
                  languages,
                },
              };
            }
            // Collect all MDX files for static generation.
            async function getStaticPaths() {
              const {promisify} = __webpack_require__(3837);
              const {resolve} = __webpack_require__(1017);
              const fs = __webpack_require__(7147);
              const readdir = promisify(fs.readdir);
              const stat = promisify(fs.stat);
              const rootDir = process.cwd() + '/src/content';
              // Find all MD files recursively.
              async function getFiles(dir) {
                const subdirs = await readdir(dir);
                const files = await Promise.all(
                  subdirs.map(async (subdir) => {
                    const res = resolve(dir, subdir);
                    return (await stat(res)).isDirectory()
                      ? getFiles(res)
                      : res.slice(rootDir.length + 1);
                  })
                );
                return files
                  .flat() // ignores `errors/*.md`, they will be handled by `pages/errors/[errorCode].tsx`
                  .filter(
                    (file) =>
                      file.endsWith('.md') &&
                      !file.startsWith('errors/') &&
                      !file.startsWith('errors\\')
                  );
              }
              // 'foo/bar/baz.md' -> ['foo', 'bar', 'baz']
              // 'foo/bar/qux/index.md' -> ['foo', 'bar', 'qux']
              function getSegments(file) {
                let segments = file.slice(0, -3).replace(/\\/g, '/').split('/');
                if (segments[segments.length - 1] === 'index') {
                  segments.pop();
                }
                return segments;
              }
              const files = await getFiles(rootDir);
              const paths = files.map((file) => ({
                params: {
                  markdownPath: getSegments(file),
                },
              }));
              return {
                paths: paths,
                fallback: false,
              };
            }

            __webpack_async_result__();
          } catch (e) {
            __webpack_async_result__(e);
          }
        }
      );

      /***/
    },

    /***/ 4128: /***/ (
      __unused_webpack_module,
      exports,
      __webpack_require__
    ) => {
      /*
       * Copyright (c) Facebook, Inc. and its affiliates.
       */ const Feed = __webpack_require__(3572);
      const fs = __webpack_require__(7147);
      const path = __webpack_require__(1017);
      const matter = __webpack_require__(8076);
      const getAllFiles = function (dirPath, arrayOfFiles) {
        const files = fs.readdirSync(dirPath);
        arrayOfFiles = arrayOfFiles || [];
        files.forEach(function (file) {
          if (fs.statSync(dirPath + '/' + file).isDirectory()) {
            arrayOfFiles = getAllFiles(dirPath + '/' + file, arrayOfFiles);
          } else {
            arrayOfFiles.push(path.join(dirPath, '/', file));
          }
        });
        return arrayOfFiles;
      };
      exports.e = function () {
        const feed = new Feed({
          title: 'React Blog',
          description:
            'This blog is the official source for the updates from the React team. Anything important, including release notes or deprecation notices, will be posted here first.',
          feed_url: 'https://react.dev/rss.xml',
          site_url: 'https://react.dev/',
          language: 'en',
          favicon: 'https://react.dev/favicon.ico',
          pubDate: new Date(),
          generator: 'react.dev rss module',
        });
        const dirPath = path.join(process.cwd(), 'src/content/blog');
        const filesByOldest = getAllFiles(dirPath);
        const files = filesByOldest.reverse();
        for (const filePath of files) {
          const id = path.basename(filePath);
          if (id !== 'index.md') {
            const content = fs.readFileSync(filePath, 'utf-8');
            const {data} = matter(content);
            const slug = filePath
              .split('/')
              .slice(-4)
              .join('/')
              .replace('.md', '');
            if (data.title == null || data.title.trim() === '') {
              throw new Error(
                `${id}: Blog posts must include a title in the metadata, for RSS feeds`
              );
            }
            if (data.author == null || data.author.trim() === '') {
              throw new Error(
                `${id}: Blog posts must include an author in the metadata, for RSS feeds`
              );
            }
            if (data.date == null || data.date.trim() === '') {
              throw new Error(
                `${id}: Blog posts must include a date in the metadata, for RSS feeds`
              );
            }
            if (data.description == null || data.description.trim() === '') {
              throw new Error(
                `${id}: Blog posts must include a description in the metadata, for RSS feeds`
              );
            }
            feed.item({
              id,
              title: data.title,
              author: data.author || '',
              date: new Date(data.date),
              url: `https://react.dev/blog/${slug}`,
              description: data.description,
            });
          }
        }
        fs.writeFileSync(
          './public/rss.xml',
          feed.xml({
            indent: true,
          })
        );
      };

      /***/
    },

    /***/ 4629: /***/ (module) => {
      'use strict';
      module.exports = require('@babel/core');

      /***/
    },

    /***/ 6443: /***/ (module) => {
      'use strict';
      module.exports = require('@docsearch/react/modal');

      /***/
    },

    /***/ 5782: /***/ (module) => {
      'use strict';
      module.exports = require('body-scroll-lock');

      /***/
    },

    /***/ 9003: /***/ (module) => {
      'use strict';
      module.exports = require('classnames');

      /***/
    },

    /***/ 3465: /***/ (module) => {
      'use strict';
      module.exports = require('debounce');

      /***/
    },

    /***/ 1798: /***/ (module) => {
      'use strict';
      module.exports = require('eslint-plugin-react-hooks');

      /***/
    },

    /***/ 6058: /***/ (module) => {
      'use strict';
      module.exports = require('eslint/lib/linter/linter');

      /***/
    },

    /***/ 9319: /***/ (module) => {
      'use strict';
      module.exports = require('esquery');

      /***/
    },

    /***/ 8904: /***/ (module) => {
      'use strict';
      module.exports = require('github-slugger');

      /***/
    },

    /***/ 8076: /***/ (module) => {
      'use strict';
      module.exports = require('gray-matter');

      /***/
    },

    /***/ 7645: /***/ (module) => {
      'use strict';
      module.exports = require('mdast-util-to-string');

      /***/
    },

    /***/ 8128: /***/ (module) => {
      'use strict';
      module.exports = require('metro-cache');

      /***/
    },

    /***/ 3918: /***/ (module) => {
      'use strict';
      module.exports = require('next/dist/shared/lib/amp-context.js');

      /***/
    },

    /***/ 5732: /***/ (module) => {
      'use strict';
      module.exports = require('next/dist/shared/lib/amp-mode.js');

      /***/
    },

    /***/ 3280: /***/ (module) => {
      'use strict';
      module.exports = require('next/dist/shared/lib/app-router-context.js');

      /***/
    },

    /***/ 2796: /***/ (module) => {
      'use strict';
      module.exports = require('next/dist/shared/lib/head-manager-context.js');

      /***/
    },

    /***/ 4486: /***/ (module) => {
      'use strict';
      module.exports = require('next/dist/shared/lib/image-blur-svg.js');

      /***/
    },

    /***/ 744: /***/ (module) => {
      'use strict';
      module.exports = require('next/dist/shared/lib/image-config-context.js');

      /***/
    },

    /***/ 5843: /***/ (module) => {
      'use strict';
      module.exports = require('next/dist/shared/lib/image-config.js');

      /***/
    },

    /***/ 9552: /***/ (module) => {
      'use strict';
      module.exports = require('next/dist/shared/lib/image-loader');

      /***/
    },

    /***/ 4964: /***/ (module) => {
      'use strict';
      module.exports = require('next/dist/shared/lib/router-context.js');

      /***/
    },

    /***/ 1751: /***/ (module) => {
      'use strict';
      module.exports = require('next/dist/shared/lib/router/utils/add-path-prefix.js');

      /***/
    },

    /***/ 3938: /***/ (module) => {
      'use strict';
      module.exports = require('next/dist/shared/lib/router/utils/format-url.js');

      /***/
    },

    /***/ 1109: /***/ (module) => {
      'use strict';
      module.exports = require('next/dist/shared/lib/router/utils/is-local-url.js');

      /***/
    },

    /***/ 8854: /***/ (module) => {
      'use strict';
      module.exports = require('next/dist/shared/lib/router/utils/parse-path.js');

      /***/
    },

    /***/ 3297: /***/ (module) => {
      'use strict';
      module.exports = require('next/dist/shared/lib/router/utils/remove-trailing-slash.js');

      /***/
    },

    /***/ 7782: /***/ (module) => {
      'use strict';
      module.exports = require('next/dist/shared/lib/router/utils/resolve-href.js');

      /***/
    },

    /***/ 2470: /***/ (module) => {
      'use strict';
      module.exports = require('next/dist/shared/lib/side-effect.js');

      /***/
    },

    /***/ 9232: /***/ (module) => {
      'use strict';
      module.exports = require('next/dist/shared/lib/utils.js');

      /***/
    },

    /***/ 618: /***/ (module) => {
      'use strict';
      module.exports = require('next/dist/shared/lib/utils/warn-once.js');

      /***/
    },

    /***/ 968: /***/ (module) => {
      'use strict';
      module.exports = require('next/head');

      /***/
    },

    /***/ 1853: /***/ (module) => {
      'use strict';
      module.exports = require('next/router');

      /***/
    },

    /***/ 861: /***/ (module) => {
      'use strict';
      module.exports = require('parse-numeric-range');

      /***/
    },

    /***/ 6689: /***/ (module) => {
      'use strict';
      module.exports = require('react');

      /***/
    },

    /***/ 44: /***/ (module) => {
      'use strict';
      module.exports = require('react-collapsed');

      /***/
    },

    /***/ 6405: /***/ (module) => {
      'use strict';
      module.exports = require('react-dom');

      /***/
    },

    /***/ 1283: /***/ (module) => {
      'use strict';
      module.exports = require('remark');

      /***/
    },

    /***/ 4452: /***/ (module) => {
      'use strict';
      module.exports = require('remark-external-links');

      /***/
    },

    /***/ 1778: /***/ (module) => {
      'use strict';
      module.exports = require('remark-html');

      /***/
    },

    /***/ 6215: /***/ (module) => {
      'use strict';
      module.exports = require('remark-images');

      /***/
    },

    /***/ 4890: /***/ (module) => {
      'use strict';
      module.exports = require('remark-unwrap-images');

      /***/
    },

    /***/ 6107: /***/ (module) => {
      'use strict';
      module.exports = require('retext');

      /***/
    },

    /***/ 4114: /***/ (module) => {
      'use strict';
      module.exports = require('retext-smartypants');

      /***/
    },

    /***/ 3572: /***/ (module) => {
      'use strict';
      module.exports = require('rss');

      /***/
    },

    /***/ 5851: /***/ (module) => {
      'use strict';
      module.exports = require('tailwindcss/defaultTheme');

      /***/
    },

    /***/ 4704: /***/ (module) => {
      'use strict';
      module.exports = require('unist-util-visit');

      /***/
    },

    /***/ 4213: /***/ (module) => {
      'use strict';
      module.exports = import('@codemirror/lang-css');

      /***/
    },

    /***/ 9851: /***/ (module) => {
      'use strict';
      module.exports = import('@codemirror/lang-html');

      /***/
    },

    /***/ 1923: /***/ (module) => {
      'use strict';
      module.exports = import('@codemirror/lang-javascript');

      /***/
    },

    /***/ 3276: /***/ (module) => {
      'use strict';
      module.exports = import('@codemirror/language');

      /***/
    },

    /***/ 3937: /***/ (module) => {
      'use strict';
      module.exports = import('@codemirror/lint');

      /***/
    },

    /***/ 9429: /***/ (module) => {
      'use strict';
      module.exports = import('@codesandbox/sandpack-client');

      /***/
    },

    /***/ 7040: /***/ (module) => {
      'use strict';
      module.exports = import('@codesandbox/sandpack-react/unstyled');

      /***/
    },

    /***/ 1185: /***/ (module) => {
      'use strict';
      module.exports = import('@headlessui/react');

      /***/
    },

    /***/ 2521: /***/ (module) => {
      'use strict';
      module.exports = import('@lezer/highlight');

      /***/
    },

    /***/ 3536: /***/ (module) => {
      'use strict';
      module.exports = import('@mdx-js/mdx');

      /***/
    },

    /***/ 6000: /***/ (module) => {
      'use strict';
      module.exports = import('@radix-ui/react-context-menu');

      /***/
    },

    /***/ 222: /***/ (module) => {
      'use strict';
      module.exports = import('remark-frontmatter');

      /***/
    },

    /***/ 6809: /***/ (module) => {
      'use strict';
      module.exports = import('remark-gfm');

      /***/
    },

    /***/ 7147: /***/ (module) => {
      'use strict';
      module.exports = require('fs');

      /***/
    },

    /***/ 1017: /***/ (module) => {
      'use strict';
      module.exports = require('path');

      /***/
    },

    /***/ 3837: /***/ (module) => {
      'use strict';
      module.exports = require('util');

      /***/
    },

    /***/ 9605: /***/ (module) => {
      'use strict';
      module.exports = JSON.parse(
        '{"title":"社区","path":"/community","routes":[{"hasSectionHeader":true,"sectionHeader":"参与贡献"},{"title":"社区","path":"/community","skipBreadcrumb":true,"routes":[{"title":"React Conf","path":"/community/conferences"},{"title":"React 见面会","path":"/community/meetups"},{"title":"React 视频","path":"/community/videos"},{"title":"React 团队","path":"/community/team"},{"title":"文档贡献者","path":"/community/docs-contributors"},{"title":"Translations","path":"/community/translations"},{"title":"Acknowledgements","path":"/community/acknowledgements"},{"title":"版本策略","path":"/community/versioning-policy"}]}]}'
      );

      /***/
    },

    /***/ 1161: /***/ (module) => {
      'use strict';
      module.exports = JSON.parse(
        '{"title":"React 文档","path":"/","routes":[{"hasSectionHeader":true,"sectionHeader":"起步"},{"title":"快速入门","path":"/learn"},{"title":"安装","path":"/learn/installation"},{"hasSectionHeader":true,"sectionHeader":"学习 React"},{"title":"描述 UI","path":"/learn/describing-the-ui"},{"title":"添加交互","path":"/learn/adding-interactivity"},{"title":"状态管理","path":"/learn/managing-state"},{"title":"脱围机制","path":"/learn/escape-hatches"},{"hasSectionHeader":true,"sectionHeader":"React API"},{"title":"Hook","path":"/reference/react"},{"title":"组件","path":"/reference/react/components"},{"title":"API","path":"/reference/react/apis"},{"title":"过时的 API","path":"/reference/react/legacy"},{"hasSectionHeader":true,"sectionHeader":"React DOM API"},{"title":"组件","path":"/reference/react-dom/components"},{"title":"API","path":"/reference/react-dom"},{"title":"客户端 API","path":"/reference/react-dom/client"},{"title":"服务端 API","path":"/reference/react-dom/server"},{"hasSectionHeader":true,"sectionHeader":"参与贡献"},{"title":"React 社区","path":"/community"},{"hasSectionHeader":true,"sectionHeader":"时刻了解最新动态"},{"title":"React 博客","path":"/blog"}]}'
      );

      /***/
    },

    /***/ 1387: /***/ (module) => {
      'use strict';
      module.exports = JSON.parse(
        '{"title":"API 参考","path":"/reference/react","routes":[{"hasSectionHeader":true,"sectionHeader":"react@{{version}}"},{"title":"总览","path":"/reference/react"},{"title":"Hook","path":"/reference/react/hooks","routes":[{"title":"useActionState","path":"/reference/react/useActionState","canary":true},{"title":"useCallback","path":"/reference/react/useCallback"},{"title":"useContext","path":"/reference/react/useContext"},{"title":"useDebugValue","path":"/reference/react/useDebugValue"},{"title":"useDeferredValue","path":"/reference/react/useDeferredValue"},{"title":"useEffect","path":"/reference/react/useEffect"},{"title":"useId","path":"/reference/react/useId"},{"title":"useImperativeHandle","path":"/reference/react/useImperativeHandle"},{"title":"useInsertionEffect","path":"/reference/react/useInsertionEffect"},{"title":"useLayoutEffect","path":"/reference/react/useLayoutEffect"},{"title":"useMemo","path":"/reference/react/useMemo"},{"title":"useOptimistic","path":"/reference/react/useOptimistic","canary":true},{"title":"useReducer","path":"/reference/react/useReducer"},{"title":"useRef","path":"/reference/react/useRef"},{"title":"useState","path":"/reference/react/useState"},{"title":"useSyncExternalStore","path":"/reference/react/useSyncExternalStore"},{"title":"useTransition","path":"/reference/react/useTransition"}]},{"title":"组件","path":"/reference/react/components","routes":[{"title":"<Fragment> (<>)","path":"/reference/react/Fragment"},{"title":"<Profiler>","path":"/reference/react/Profiler"},{"title":"<StrictMode>","path":"/reference/react/StrictMode"},{"title":"<Suspense>","path":"/reference/react/Suspense"}]},{"title":"API","path":"/reference/react/apis","routes":[{"title":"act","path":"/reference/react/act"},{"title":"cache","path":"/reference/react/cache","canary":true},{"title":"createContext","path":"/reference/react/createContext"},{"title":"forwardRef","path":"/reference/react/forwardRef"},{"title":"lazy","path":"/reference/react/lazy"},{"title":"memo","path":"/reference/react/memo"},{"title":"startTransition","path":"/reference/react/startTransition"},{"title":"use","path":"/reference/react/use","canary":true},{"title":"experimental_taintObjectReference","path":"/reference/react/experimental_taintObjectReference","canary":true},{"title":"experimental_taintUniqueValue","path":"/reference/react/experimental_taintUniqueValue","canary":true}]},{"hasSectionHeader":true,"sectionHeader":"react-dom@{{version}}"},{"title":"Hook","path":"/reference/react-dom/hooks","routes":[{"title":"useFormStatus","path":"/reference/react-dom/hooks/useFormStatus","canary":true}]},{"title":"组件","path":"/reference/react-dom/components","routes":[{"title":"Common (e.g. <div>)","path":"/reference/react-dom/components/common"},{"title":"<form>","path":"/reference/react-dom/components/form","canary":true},{"title":"<input>","path":"/reference/react-dom/components/input"},{"title":"<option>","path":"/reference/react-dom/components/option"},{"title":"<progress>","path":"/reference/react-dom/components/progress"},{"title":"<select>","path":"/reference/react-dom/components/select"},{"title":"<textarea>","path":"/reference/react-dom/components/textarea"},{"title":"<link>","path":"/reference/react-dom/components/link","canary":true},{"title":"<meta>","path":"/reference/react-dom/components/meta","canary":true},{"title":"<script>","path":"/reference/react-dom/components/script","canary":true},{"title":"<style>","path":"/reference/react-dom/components/style","canary":true},{"title":"<title>","path":"/reference/react-dom/components/title","canary":true}]},{"title":"API","path":"/reference/react-dom","routes":[{"title":"createPortal","path":"/reference/react-dom/createPortal"},{"title":"flushSync","path":"/reference/react-dom/flushSync"},{"title":"findDOMNode","path":"/reference/react-dom/findDOMNode"},{"title":"hydrate","path":"/reference/react-dom/hydrate"},{"title":"preconnect","path":"/reference/react-dom/preconnect","canary":true},{"title":"prefetchDNS","path":"/reference/react-dom/prefetchDNS","canary":true},{"title":"preinit","path":"/reference/react-dom/preinit","canary":true},{"title":"preinitModule","path":"/reference/react-dom/preinitModule","canary":true},{"title":"preload","path":"/reference/react-dom/preload","canary":true},{"title":"preloadModule","path":"/reference/react-dom/preloadModule","canary":true},{"title":"render","path":"/reference/react-dom/render"},{"title":"unmountComponentAtNode","path":"/reference/react-dom/unmountComponentAtNode"}]},{"title":"客户端 API","path":"/reference/react-dom/client","routes":[{"title":"createRoot","path":"/reference/react-dom/client/createRoot"},{"title":"hydrateRoot","path":"/reference/react-dom/client/hydrateRoot"}]},{"title":"服务端 API","path":"/reference/react-dom/server","routes":[{"title":"renderToNodeStream","path":"/reference/react-dom/server/renderToNodeStream"},{"title":"renderToPipeableStream","path":"/reference/react-dom/server/renderToPipeableStream"},{"title":"renderToReadableStream","path":"/reference/react-dom/server/renderToReadableStream"},{"title":"renderToStaticMarkup","path":"/reference/react-dom/server/renderToStaticMarkup"},{"title":"renderToStaticNodeStream","path":"/reference/react-dom/server/renderToStaticNodeStream"},{"title":"renderToString","path":"/reference/react-dom/server/renderToString"}]},{"hasSectionHeader":true,"sectionHeader":"React 规则"},{"title":"概述","path":"/reference/rules","routes":[{"title":"组件和 Hook 必须是纯粹的","path":"/reference/rules/components-and-hooks-must-be-pure"},{"title":"React 调用组件和 Hook","path":"/reference/rules/react-calls-components-and-hooks"},{"title":"Hook 的规则","path":"/reference/rules/rules-of-hooks"}]},{"hasSectionHeader":true,"sectionHeader":"React Server Components"},{"title":"Server Components","path":"/reference/rsc/server-components","canary":true},{"title":"Server Actions","path":"/reference/rsc/server-actions","canary":true},{"title":"Directives","path":"/reference/rsc/directives","canary":true,"routes":[{"title":"\'use client\'","path":"/reference/rsc/use-client","canary":true},{"title":"\'use server\'","path":"/reference/rsc/use-server","canary":true}]},{"hasSectionHeader":true,"sectionHeader":"过时的 API"},{"title":"过时的 React API","path":"/reference/react/legacy","routes":[{"title":"Children","path":"/reference/react/Children"},{"title":"cloneElement","path":"/reference/react/cloneElement"},{"title":"Component","path":"/reference/react/Component"},{"title":"createElement","path":"/reference/react/createElement"},{"title":"createFactory","path":"/reference/react/createFactory"},{"title":"createRef","path":"/reference/react/createRef"},{"title":"isValidElement","path":"/reference/react/isValidElement"},{"title":"PureComponent","path":"/reference/react/PureComponent"}]}]}'
      );

      /***/
    },
  };
  exports.runtime = /******/ function (__webpack_require__) {
    // webpackRuntimeModules
    /******/ /* webpack/runtime/startup prefetch */
    /******/ (() => {
      /******/ __webpack_require__.O(
        0,
        [116],
        () => {
          /******/ __webpack_require__.E(564);
          /******/ __webpack_require__.E(825);
          /******/
        },
        5
      );
      /******/
    })();
    /******/
    /******/
  };

  // load runtime
  var __webpack_require__ = require('../webpack-runtime.js');
  __webpack_require__.C(exports);
  var __webpack_exec__ = (moduleId) =>
    __webpack_require__((__webpack_require__.s = moduleId));
  var __webpack_exports__ = __webpack_require__.X(
    0,
    [893, 636, 61, 336, 519],
    () => __webpack_exec__(9764)
  );
  module.exports = __webpack_exports__;
})();
