'use strict';
exports.id = 519;
exports.ids = [519];
exports.modules = {
  /***/ 7626: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
    const remark = __webpack_require__(1283);
    const externalLinks = __webpack_require__(4452); // Add _target and rel to external links
    const customHeaders = __webpack_require__(1636); // Custom header id's for i18n
    const images = __webpack_require__(6215); // Improved image syntax
    const unrwapImages = __webpack_require__(4890); // Removes <p> wrapper around images
    const smartyPants = __webpack_require__(145); // Cleans up typography
    const html = __webpack_require__(1778);
    module.exports = {
      remarkPlugins: [
        externalLinks,
        customHeaders,
        images,
        unrwapImages,
        smartyPants,
      ],
      markdownToHtml,
    };
    async function markdownToHtml(markdown) {
      const result = await remark()
        .use(externalLinks)
        .use(customHeaders)
        .use(images)
        .use(unrwapImages)
        .use(smartyPants)
        .use(html)
        .process(markdown);
      return result.toString();
    }

    /***/
  },

  /***/ 1636: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
    /**
     * Copyright (c) Facebook, Inc. and its affiliates.
     */ /*!
     * Based on 'gatsby-remark-autolink-headers'
     * Original Author: Kyle Mathews <mathews.kyle@gmail.com>
     * Updated by Jared Palmer;
     * Copyright (c) 2015 Gatsbyjs
     */
    const toString = __webpack_require__(7645);
    const visit = __webpack_require__(4704);
    const toSlug = __webpack_require__(8904).slug;
    function patch(context, key, value) {
      if (!context[key]) {
        context[key] = value;
      }
      return context[key];
    }
    const svgIcon = `<svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`;
    module.exports = ({icon = svgIcon, className = `anchor`} = {}) => {
      return function transformer(tree) {
        const ids = new Set();
        visit(tree, 'heading', (node) => {
          let children = [...node.children];
          let id;
          if (children[children.length - 1].type === 'mdxTextExpression') {
            // # My header {/*my-header*/}
            id = children.pop().value;
            const isValidCustomId = id.startsWith('/*') && id.endsWith('*/');
            if (!isValidCustomId) {
              throw Error(
                'Expected header ID to be like: {/*some-header*/}. ' +
                  'Instead, received: ' +
                  id
              );
            }
            id = id.slice(2, id.length - 2);
            if (id !== toSlug(id)) {
              throw Error(
                'Expected header ID to be a valid slug. You specified: {/*' +
                  id +
                  '*/}. Replace it with: {/*' +
                  toSlug(id) +
                  '*/}'
              );
            }
          } else {
            // # My header
            id = toSlug(toString(node));
          }
          if (ids.has(id)) {
            throw Error(
              'Cannot have a duplicate header with id "' +
                id +
                '" on the page. ' +
                'Rename the section or give it an explicit unique ID. ' +
                'For example: #### Arguments {/*setstate-arguments*/}'
            );
          }
          ids.add(id);
          const data = patch(node, 'data', {});
          patch(data, 'id', id);
          patch(data, 'htmlAttributes', {});
          patch(data, 'hProperties', {});
          patch(data.htmlAttributes, 'id', id);
          patch(data.hProperties, 'id', id);
        });
      };
    };

    /***/
  },

  /***/ 145: /***/ (module, __unused_webpack_exports, __webpack_require__) => {
    /*!
     * Based on 'silvenon/remark-smartypants'
     * https://github.com/silvenon/remark-smartypants/pull/80
     */
    const visit = __webpack_require__(4704);
    const retext = __webpack_require__(6107);
    const smartypants = __webpack_require__(4114);
    function check(parent) {
      if (parent.tagName === 'script') return false;
      if (parent.tagName === 'style') return false;
      return true;
    }
    module.exports = function (options) {
      const processor = retext().use(smartypants, {
        ...options,
        // Do not replace ellipses, dashes, backticks because they change string
        // length, and we couldn't guarantee right splice of text in second visit of
        // tree
        ellipses: false,
        dashes: false,
        backticks: false,
      });
      const processor2 = retext().use(smartypants, {
        ...options,
        // Do not replace quotes because they are already replaced in the first
        // processor
        quotes: false,
      });
      function transformer(tree) {
        let allText = '';
        let startIndex = 0;
        const textOrInlineCodeNodes = [];
        visit(tree, ['text', 'inlineCode'], (node, _, parent) => {
          if (check(parent)) {
            if (node.type === 'text') allText += node.value;
            else allText += 'A'.repeat(node.value.length);
            textOrInlineCodeNodes.push(node);
          }
        });
        // Concat all text into one string, to properly replace quotes around non-"text" nodes
        allText = String(processor.processSync(allText));
        for (const node of textOrInlineCodeNodes) {
          const endIndex = startIndex + node.value.length;
          if (node.type === 'text') {
            const processedText = allText.slice(startIndex, endIndex);
            node.value = String(processor2.processSync(processedText));
          }
          startIndex = endIndex;
        }
      }
      return transformer;
    };

    /***/
  },

  /***/ 519: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: () => /* binding */ compileMDX,
      /* harmony export */
    });
    /* harmony import */ var components_MDX_MDXComponents__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(4715);

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // ~~~~ IMPORTANT: BUMP THIS IF YOU CHANGE ANY CODE BELOW ~~~
    const DISK_CACHE_BREAKER = 9;
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    async function compileMDX(mdx, path, params) {
      const fs = __webpack_require__(7147);
      const {prepareMDX, PREPARE_MDX_CACHE_BREAKER} = __webpack_require__(2442);
      const mdxComponentNames = Object.keys(
        components_MDX_MDXComponents__WEBPACK_IMPORTED_MODULE_0__ /* .MDXComponents */.t
      );
      // See if we have a cached output first.
      const {FileStore, stableHash} = __webpack_require__(8128);
      const store = new FileStore({
        root: process.cwd() + '/node_modules/.cache/react-docs-mdx/',
      });
      const hash = Buffer.from(
        stableHash({
          // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
          // ~~~~ IMPORTANT: Everything that the code below may rely on.
          // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
          mdx,
          ...params,
          mdxComponentNames,
          DISK_CACHE_BREAKER,
          PREPARE_MDX_CACHE_BREAKER,
          lockfile: fs.readFileSync(process.cwd() + '/yarn.lock', 'utf8'),
        })
      );
      const cached = await store.get(hash);
      if (cached) {
        console.log(
          'Reading compiled MDX for /' + path + ' from ./node_modules/.cache/'
        );
        return cached;
      }
      if (true) {
        console.log(
          'Cache miss for MDX for /' + path + ' from ./node_modules/.cache/'
        );
      }
      // If we don't add these fake imports, the MDX compiler
      // will insert a bunch of opaque components we can't introspect.
      // This will break the prepareMDX() call below.
      let mdxWithFakeImports =
        mdx +
        '\n\n' +
        mdxComponentNames
          .map((key) => 'import ' + key + ' from "' + key + '";\n')
          .join('\n');
      // Turn the MDX we just read into some JS we can execute.
      const {remarkPlugins} = __webpack_require__(7626);
      const {compile: compileMdx} = await Promise.resolve(/* import() */).then(
        __webpack_require__.bind(__webpack_require__, 3536)
      );
      const visit = (
        await Promise.resolve(/* import() */).then(
          __webpack_require__.t.bind(__webpack_require__, 4704, 23)
        )
      ).default;
      const jsxCode = await compileMdx(mdxWithFakeImports, {
        remarkPlugins: [
          ...remarkPlugins,
          (
            await Promise.resolve(/* import() */).then(
              __webpack_require__.bind(__webpack_require__, 6809)
            )
          ).default,
          (
            await Promise.resolve(/* import() */).then(
              __webpack_require__.bind(__webpack_require__, 222)
            )
          ).default,
        ],
        rehypePlugins: [
          // Support stuff like ```js App.js {1-5} active by passing it through.
          function rehypeMetaAsAttributes() {
            return (tree) => {
              visit(tree, 'element', (node) => {
                if (
                  // @ts-expect-error -- tagName is a valid property
                  node.tagName === 'code' &&
                  node.data &&
                  node.data.meta
                ) {
                  // @ts-expect-error -- properties is a valid property
                  node.properties.meta = node.data.meta;
                }
              });
            };
          },
        ],
      });
      const {transform} = __webpack_require__(4629);
      const jsCode = await transform(jsxCode, {
        plugins: ['@babel/plugin-transform-modules-commonjs'],
        presets: ['@babel/preset-react'],
      }).code;
      // Prepare environment for MDX.
      let fakeExports = {};
      const fakeRequire = (name) => {
        if (name === 'react/jsx-runtime') {
          return __webpack_require__(5893);
        } else {
          // For each fake MDX import, give back the string component name.
          // It will get serialized later.
          return name;
        }
      };
      const evalJSCode = new Function('require', 'exports', jsCode);
      // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      // THIS IS A BUILD-TIME EVAL. NEVER DO THIS WITH UNTRUSTED MDX (LIKE FROM CMS)!!!
      // In this case it's okay because anyone who can edit our MDX can also edit this file.
      evalJSCode(fakeRequire, fakeExports);
      // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      // @ts-expect-error -- default exports is existed after eval
      const reactTree = fakeExports.default({});
      // Pre-process MDX output and serialize it.
      let {toc, children} = prepareMDX(reactTree.props.children);
      if (path === 'index') {
        toc = [];
      }
      // Parse Frontmatter headers from MDX.
      const fm = __webpack_require__(8076);
      const meta = fm(mdx).data;
      // Load the list of translated languages conditionally.
      let languages = null;
      if (typeof path === 'string' && path.endsWith('/translations')) {
        languages = await (
          await fetch(
            'https://raw.githubusercontent.com/reactjs/translations.react.dev/main/langs/langs.json'
          )
        ).json(); // { code: string; name: string; enName: string}[]
      }
      const output = {
        content: JSON.stringify(children, stringifyNodeOnServer),
        toc: JSON.stringify(toc, stringifyNodeOnServer),
        meta,
        languages,
      };
      // Serialize a server React tree node to JSON.
      function stringifyNodeOnServer(key, val) {
        if (val != null && val.$$typeof === Symbol.for('react.element')) {
          // Remove fake MDX props.
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const {mdxType, originalType, parentName, ...cleanProps} = val.props;
          return [
            '$r',
            typeof val.type === 'string' ? val.type : mdxType,
            val.key,
            cleanProps,
          ];
        } else {
          return val;
        }
      }
      // Cache it on the disk.
      await store.set(hash, output);
      return output;
    }

    /***/
  },

  /***/ 2442: /***/ (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) => {
    __webpack_require__.r(__webpack_exports__);
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ PREPARE_MDX_CACHE_BREAKER: () =>
        /* binding */ PREPARE_MDX_CACHE_BREAKER,
      /* harmony export */ prepareMDX: () => /* binding */ prepareMDX,
      /* harmony export */
    });
    /* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(5893);
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(6689);
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
      /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
    /*
     * Copyright (c) Facebook, Inc. and its affiliates.
     */

    // TODO: This logic could be in MDX plugins instead.
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    const PREPARE_MDX_CACHE_BREAKER = 3;
    // !!! IMPORTANT !!! Bump this if you change any logic.
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    function prepareMDX(rawChildren) {
      const toc = getTableOfContents(rawChildren, /* depth */ 10);
      const children = wrapChildrenInMaxWidthContainers(rawChildren);
      return {
        toc,
        children,
      };
    }
    function wrapChildrenInMaxWidthContainers(children) {
      // Auto-wrap everything except a few types into
      // <MaxWidth> wrappers. Keep reusing the same
      // wrapper as long as we can until we meet
      // a full-width section which interrupts it.
      let fullWidthTypes = [
        'Sandpack',
        'FullWidth',
        'Illustration',
        'IllustrationBlock',
        'Challenges',
        'Recipes',
      ];
      let wrapQueue = [];
      let finalChildren = [];
      function flushWrapper(key) {
        if (wrapQueue.length > 0) {
          const Wrapper = 'MaxWidth';
          finalChildren.push(
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(
              Wrapper,
              {
                children: wrapQueue,
              },
              key
            )
          );
          wrapQueue = [];
        }
      }
      function handleChild(child, key) {
        if (child == null) {
          return;
        }
        if (typeof child !== 'object') {
          wrapQueue.push(child);
          return;
        }
        if (fullWidthTypes.includes(child.type)) {
          flushWrapper(key);
          finalChildren.push(child);
        } else {
          wrapQueue.push(child);
        }
      }
      react__WEBPACK_IMPORTED_MODULE_1__.Children.forEach(
        children,
        handleChild
      );
      flushWrapper('last');
      return finalChildren;
    }
    function getTableOfContents(children, depth) {
      const anchors = [];
      extractHeaders(children, depth, anchors);
      if (anchors.length > 0) {
        anchors.unshift({
          url: '#',
          text: '概览',
          depth: 2,
        });
      }
      return anchors;
    }
    const headerTypes = new Set([
      'h1',
      'h2',
      'h3',
      'Challenges',
      'Recap',
      'TeamMember',
    ]);
    function extractHeaders(children, depth, out) {
      for (const child of react__WEBPACK_IMPORTED_MODULE_1__.Children.toArray(
        children
      )) {
        if (child.type && headerTypes.has(child.type)) {
          let header;
          if (child.type === 'Challenges') {
            header = {
              url: '#challenges',
              depth: 2,
              text: 'Challenges',
            };
          } else if (child.type === 'Recap') {
            header = {
              url: '#recap',
              depth: 2,
              text: 'Recap',
            };
          } else if (child.type === 'TeamMember') {
            header = {
              url: '#' + child.props.permalink,
              depth: 3,
              text: child.props.name,
            };
          } else {
            header = {
              url: '#' + child.props.id,
              depth:
                (child.type && parseInt(child.type.replace('h', ''), 0)) ?? 0,
              text: child.props.children,
            };
          }
          out.push(header);
        } else if (child.children && depth > 0) {
          extractHeaders(child.children, depth - 1, out);
        }
      }
    }

    /***/
  },
};
