'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [777],
  {
    37761: function (e) {
      e.exports = {
        primary: '#23272F',
        'primary-dark': '#F6F7F9',
        secondary: '#404756',
        'secondary-dark': '#EBECF0',
        tertiary: '#5E687E',
        'tertiary-dark': '#99A1B3',
        link: '#087EA4',
        'link-dark': '#58C4DC',
        syntax: '#EBECF0',
        wash: '#FFFFFF',
        'wash-dark': '#23272F',
        card: '#F6F7F9',
        'card-dark': '#343A46',
        highlight: '#E6F7FF',
        'highlight-dark': 'rgba(88,175,223,.1)',
        border: '#EBECF0',
        'border-dark': '#343A46',
        'secondary-button': '#EBECF0',
        'secondary-button-dark': '#404756',
        brand: '#087EA4',
        'brand-dark': '#58C4DC',
        'gray-95': '#16181D',
        'gray-90': '#23272F',
        'gray-80': '#343A46',
        'gray-70': '#404756',
        'gray-60': '#4E5769',
        'gray-50': '#5E687E',
        'gray-40': '#78839B',
        'gray-30': '#99A1B3',
        'gray-20': '#BCC1CD',
        'gray-15': '#D0D3DC',
        'gray-10': '#EBECF0',
        'gray-5': '#F6F7F9',
        'blue-80': '#043849',
        'blue-60': '#045975',
        'blue-50': '#087EA4',
        'blue-40': '#149ECA',
        'blue-30': '#58C4DC',
        'blue-20': '#ABE2ED',
        'blue-10': '#E6F7FF',
        'blue-5': '#E6F6FA',
        'yellow-60': '#B65700',
        'yellow-50': '#C76A15',
        'yellow-40': '#DB7D27',
        'yellow-30': '#FABD62',
        'yellow-20': '#FCDEB0',
        'yellow-10': '#FDE7C7',
        'yellow-5': '#FEF5E7',
        'purple-60': '#2B3491',
        'purple-50': '#575FB7',
        'purple-40': '#6B75DB',
        'purple-30': '#8891EC',
        'purple-20': '#C3C8F5',
        'purple-10': '#E7E9FB',
        'purple-5': '#F3F4FD',
        'green-60': '#2B6E62',
        'green-50': '#388F7F',
        'green-40': '#44AC99',
        'green-30': '#7FCCBF',
        'green-20': '#ABDED5',
        'green-10': '#E5F5F2',
        'green-5': '#F4FBF9',
        'red-60': '#712D28',
        'red-50': '#A6423A',
        'red-40': '#C1554D',
        'red-30': '#D07D77',
        'red-20': '#E5B7B3',
        'red-10': '#F2DBD9',
        'red-5': '#FAF1F0',
        'code-block': '#99a1b30f',
        'gradient-blue': '#58C4DC',
        github: {highlight: '#fffbdd'},
      };
    },
    21851: function (e, t, r) {
      r.r(t),
        r.d(t, {
          default: function () {
            return M;
          },
        });
      var n = r(85893),
        s = r(67294),
        a = r(92860),
        i = r(51869),
        l = r(73935),
        o = r(94184),
        d = r.n(o),
        c = r(1255),
        p = r(32295);
      let u = () =>
        (0, n.jsxs)(a.lc, {
          className:
            'text-sm text-primary dark:text-primary-dark inline-flex items-center hover:text-link duration-100 ease-in transition mx-1 ms-2 md:ms-1',
          title: 'Open in CodeSandbox',
          children: [
            (0, n.jsx)(p.x, {
              className: 'inline mx-1 relative top-[1px]',
              width: '1em',
              height: '1em',
            }),
            (0, n.jsx)('span', {
              className: 'hidden md:block',
              children: 'Fork',
            }),
          ],
        });
      var m = r(37917);
      function x(e) {
        let {onReset: t} = e;
        return (0, n.jsxs)('button', {
          className:
            'text-sm text-primary dark:text-primary-dark inline-flex items-center hover:text-link duration-100 ease-in transition mx-1',
          onClick: t,
          title: 'Reset Sandbox',
          type: 'button',
          children: [
            (0, n.jsx)(m.S, {className: 'inline mx-1 relative'}),
            ' 重置',
          ],
        });
      }
      var h = r(76979),
        g = r(82576);
      let f = !1;
      function b(e) {
        let t = setTimeout(() => {
          (f =
            HTMLScriptElement.supports &&
            HTMLScriptElement.supports('importmap')),
            e();
        }, 0);
        return () => clearTimeout(t);
      }
      function y(e) {
        let {providedFiles: t} = e,
          {sandpack: r} = (0, a.X3)(),
          i = (0, s.useSyncExternalStore)(
            b,
            function () {
              return f;
            },
            function () {
              return !1;
            }
          );
        if (!i || t.some((e) => !g._u.includes(e))) return null;
        let l = () => {
          var e, t, n, s;
          let a =
              null !==
                (n =
                  null === (e = r.files[g.xu]) || void 0 === e
                    ? void 0
                    : e.code) && void 0 !== n
                ? n
                : '',
            i =
              null !==
                (s =
                  null === (t = r.files[g.pU]) || void 0 === t
                    ? void 0
                    : t.code) && void 0 !== s
                ? s
                : '',
            l = new Blob([
              '<!DOCTYPE html>\n<html>\n<body>\n  <div id="root"></div>\n</body>\n<!-- This setup is not suitable for production. -->\n<!-- Only use it in development! -->\n<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>\n<script async src="https://ga.jspm.io/npm:es-module-shims@1.7.0/dist/es-module-shims.js"></script>\n<script type="importmap">\n{\n  "imports": {\n    "react": "https://esm.sh/react?dev",\n    "react-dom/client": "https://esm.sh/react-dom/client?dev"\n  }\n}\n</script>\n<script type="text/babel" data-type="module">\nimport React, { StrictMode } from \'react\';\nimport { createRoot } from \'react-dom/client\';\n\n'
                .concat(
                  i.replace('export default ', 'let App = '),
                  "\n\nconst root = createRoot(document.getElementById('root'));\nroot.render(\n  <StrictMode>\n    <App />\n  </StrictMode>\n);\n</script>\n<style>\n"
                )
                .concat(a, '\n</style>\n</html>'),
            ]),
            o = window.URL.createObjectURL(l),
            d = document.createElement('a');
          (d.style.display = 'none'),
            (d.href = o),
            (d.download = 'sandbox.html'),
            document.body.appendChild(d),
            d.click(),
            window.URL.revokeObjectURL(o);
        };
        return (0, n.jsxs)('button', {
          className:
            'text-sm text-primary dark:text-primary-dark inline-flex items-center hover:text-link duration-100 ease-in transition mx-1',
          onClick: l,
          title: 'Download Sandbox',
          type: 'button',
          children: [(0, n.jsx)(h.D, {className: 'inline me-1'}), ' 下载'],
        });
      }
      var k = r(76102);
      let v = (e) => {
          let t = "import * as React from 'react';\n\n".concat(e.content);
          return (0, n.jsxs)('a', {
            className:
              'text-sm text-primary dark:text-primary-dark inline-flex items-center hover:text-link duration-100 ease-in transition mx-1 ml-2 md:ml-1',
            href: 'https://www.typescriptlang.org/play#src='.concat(
              encodeURIComponent(t)
            ),
            title: 'Open in TypeScript Playground',
            target: '_blank',
            rel: 'noreferrer',
            children: [
              (0, n.jsx)(p.x, {
                className: 'inline mx-1 relative top-[1px]',
                width: '1em',
                height: '1em',
              }),
              (0, n.jsx)('span', {
                className: 'hidden md:block',
                children: 'TypeScript Playground',
              }),
            ],
          });
        },
        j = (e) => {
          let t = e.lastIndexOf('/');
          return e.slice(t + 1);
        };
      function w(e) {
        var t;
        let {providedFiles: r} = e,
          {sandpack: i} = (0, a.X3)(),
          l = (0, s.useRef)(null),
          o = (0, s.useRef)(null),
          [p, m] = (0, s.useState)(!0),
          {activeFile: h, setActiveFile: g, visibleFiles: f, clients: b} = i,
          w = Object.keys(b)[0],
          {refresh: F} = (0, a.xN)(w),
          E = f.length > 1,
          N = (0, s.useRef)(!1),
          D = (function (e) {
            let t = (0, s.useRef)(null);
            return (
              (0, s.useInsertionEffect)(() => {
                t.current = e;
              }, [e]),
              (0, s.useCallback)(function () {
                for (var e = arguments.length, r = Array(e), n = 0; n < e; n++)
                  r[n] = arguments[n];
                let s = t.current;
                return s(...r);
              }, [])
            );
          })((e) => {
            if (!0 === N.current) {
              N.current = !1;
              return;
            }
            if (null === o.current) return;
            let t = o.current.getBoundingClientRect().width,
              r = t >= e;
            r !== p && ((N.current = !0), m(r));
          });
        (0, s.useEffect)(() => {
          if (E) {
            let e = new ResizeObserver((e) => {
                for (let t of e)
                  if (t.contentBoxSize) {
                    let e = Array.isArray(t.contentBoxSize)
                        ? t.contentBoxSize[0]
                        : t.contentBoxSize,
                      r = e.inlineSize;
                    D(r);
                  }
              }),
              t = l.current;
            return e.observe(t), () => e.unobserve(t);
          }
        }, [E, D]);
        let C = () => {
          'dirty' === i.editorState &&
            confirm('Reset all your edits too?') &&
            i.resetAllFiles(),
            F();
        };
        return (0, n.jsxs)('div', {
          className:
            'bg-wash dark:bg-card-dark flex justify-between items-center relative z-10 border-b border-border dark:border-border-dark rounded-t-lg text-lg',
          children: [
            (0, n.jsx)('div', {
              className: 'flex-1 grow min-w-0 px-4 lg:px-6',
              children: (0, n.jsxs)(k.R, {
                value: h,
                onChange: g,
                children: [
                  (0, n.jsx)('div', {
                    ref: l,
                    children: (0, n.jsxs)('div', {
                      className: 'relative overflow-hidden',
                      children: [
                        (0, n.jsx)('div', {
                          ref: o,
                          className: d()(
                            'w-[fit-content]',
                            p ? 'invisible' : ''
                          ),
                          children: (0, n.jsx)(a.aM, {}),
                        }),
                        (0, n.jsx)(k.R.Button, {
                          as: s.Fragment,
                          children: (e) => {
                            let {open: t} = e;
                            return (0, n.jsx)('button', {
                              className: d()(
                                'absolute top-0 start-[2px]',
                                !p && 'invisible'
                              ),
                              children: (0, n.jsxs)('span', {
                                className: d()(
                                  'h-full py-2 px-1 mt-px -mb-px flex border-b text-link dark:text-link-dark border-link dark:border-link-dark items-center text-md leading-tight truncate'
                                ),
                                style: {maxWidth: '160px'},
                                children: [
                                  j(h),
                                  E &&
                                    (0, n.jsx)('span', {
                                      className: 'ms-2',
                                      children: (0, n.jsx)(c.g, {
                                        displayDirection: t ? 'up' : 'down',
                                      }),
                                    }),
                                ],
                              }),
                            });
                          },
                        }),
                      ],
                    }),
                  }),
                  E &&
                    p &&
                    (0, n.jsx)(k.R.Options, {
                      className:
                        'absolute mt-0.5 bg-card dark:bg-card-dark px-2 inset-x-0 mx-0 rounded-b-lg border-1 border-border dark:border-border-dark rounded-sm shadow-md',
                      children: f.map((e) =>
                        (0, n.jsx)(
                          k.R.Option,
                          {
                            value: e,
                            as: s.Fragment,
                            children: (t) => {
                              let {active: r} = t;
                              return (0, n.jsx)('li', {
                                className: d()(
                                  'text-md mx-2 my-4 cursor-pointer',
                                  r && 'text-link dark:text-link-dark'
                                ),
                                children: j(e),
                              });
                            },
                          },
                          e
                        )
                      ),
                    }),
                ],
              }),
            }),
            (0, n.jsxs)('div', {
              className: 'px-3 flex items-center justify-end text-start',
              translate: 'yes',
              children: [
                (0, n.jsx)(y, {providedFiles: r}),
                (0, n.jsx)(x, {onReset: C}),
                (0, n.jsx)(u, {}),
                h.endsWith('.tsx') &&
                  (0, n.jsx)(v, {
                    content:
                      (null === (t = i.files[h]) || void 0 === t
                        ? void 0
                        : t.code) || '',
                  }),
              ],
            }),
          ],
        });
      }
      function F(e) {
        let {error: t, ...r} = e,
          {message: s, title: a} = t;
        return (0, n.jsxs)('div', {
          className: 'bg-white border-2 border-red-40 rounded-lg p-6',
          ...r,
          children: [
            (0, n.jsx)('h2', {
              className: 'text-red-40 text-xl mb-4',
              children: a || 'Error',
            }),
            (0, n.jsx)('pre', {
              className:
                'text-secondary whitespace-pre-wrap break-words leading-tight',
              children: s,
            }),
          ],
        });
      }
      let E = (e) =>
          'log' === e || 'info' === e
            ? 'info'
            : 'warn' === e
            ? 'warning'
            : 'error',
        N = (e) =>
          'warn' === e
            ? 'text-yellow-50'
            : 'error' === e
            ? 'text-red-40'
            : 'text-secondary dark:text-secondary-dark',
        D = (e) => {
          let {visible: t} = e,
            {listen: r} = (0, a.X3)(),
            [i, l] = (0, s.useState)([]),
            o = (0, s.useRef)(null);
          (0, s.useEffect)(() => {
            let e = !0,
              t = r((t) => {
                if (!e) {
                  console.warn('Received an unexpected log from Sandpack.');
                  return;
                }
                (('start' === t.type && t.firstLoad) || 'refresh' === t.type) &&
                  l([]),
                  'console' === t.type &&
                    t.codesandbox &&
                    l((e) => {
                      let r = t.log
                          .filter(
                            (e) =>
                              !!e.method &&
                              ('string' != typeof e.data[0] ||
                                -1 ===
                                  e.data[0].indexOf('The above error occurred'))
                          )
                          .map((e) => ({
                            ...e,
                            data: (function () {
                              for (
                                var e = arguments.length, t = Array(e), r = 0;
                                r < e;
                                r++
                              )
                                t[r] = arguments[r];
                              let n = t[0];
                              if ('string' != typeof n) return t;
                              let s = t.slice(1),
                                a = String(n);
                              if (
                                (s.length &&
                                  (a = a.replace(
                                    /(%?)(%([jds]))/g,
                                    (e, t, r, n) => {
                                      let a = s.shift();
                                      switch (n) {
                                        case 's':
                                          a += '';
                                          break;
                                        case 'd':
                                        case 'i':
                                          a = parseInt(a, 10).toString();
                                          break;
                                        case 'f':
                                          a = parseFloat(a).toString();
                                      }
                                      return t ? (s.unshift(a), e) : a;
                                    }
                                  )),
                                s.length)
                              )
                                for (let e = 0; e < s.length; e++)
                                  a += ' ' + String(s[e]);
                              return [a.replace(/%{2,2}/g, '%')];
                            })(...e.data),
                          })),
                        n = [...e, ...r];
                      for (; n.length > 100; ) n.shift();
                      return n;
                    });
              });
            return () => {
              t(), (e = !1);
            };
          }, [r]);
          let [p, u] = (0, s.useState)(!0);
          return ((0, s.useEffect)(() => {
            o.current && (o.current.scrollTop = o.current.scrollHeight);
          }, [i]),
          t && 0 !== i.length)
            ? (0, n.jsxs)('div', {
                className:
                  'absolute dark:border-gray-700 bg-white dark:bg-gray-95 border-t bottom-0 w-full dark:text-white',
                children: [
                  (0, n.jsxs)('div', {
                    className: 'flex justify-between',
                    children: [
                      (0, n.jsxs)('button', {
                        className: 'flex items-center p-1',
                        onClick: () => u(!p),
                        children: [
                          (0, n.jsx)(c.g, {
                            displayDirection: p ? 'down' : 'right',
                          }),
                          (0, n.jsxs)('span', {
                            className: 'ps-1 text-sm',
                            children: ['Console (', i.length, ')'],
                          }),
                        ],
                      }),
                      (0, n.jsx)('button', {
                        className: 'p-1',
                        onClick: () => {
                          l([]);
                        },
                        children: (0, n.jsxs)('svg', {
                          viewBox: '0 0 24 24',
                          width: '18',
                          height: '18',
                          stroke: 'currentColor',
                          strokeWidth: '2',
                          fill: 'none',
                          strokeLinecap: 'round',
                          strokeLinejoin: 'round',
                          children: [
                            (0, n.jsx)('circle', {cx: '12', cy: '12', r: '10'}),
                            (0, n.jsx)('line', {
                              x1: '4.93',
                              y1: '4.93',
                              x2: '19.07',
                              y2: '19.07',
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  p &&
                    (0, n.jsx)('div', {
                      className:
                        'w-full h-full border-t bg-white dark:border-gray-700 dark:bg-gray-95 min-h-[28px] console',
                      children: (0, n.jsx)('div', {
                        className: 'max-h-40 h-auto overflow-auto',
                        ref: o,
                        children: i.map((e) => {
                          let {data: t, id: r, method: s} = e;
                          return (0, n.jsx)(
                            'div',
                            {
                              className: d()(
                                'first:border-none border-t dark:border-gray-700 text-md p-1 ps-2 leading-6 font-mono min-h-[32px] whitespace-pre-wrap',
                                'console-'.concat(E(s)),
                                N(s)
                              ),
                              children: (0, n.jsx)('span', {
                                className: 'console-message',
                                children: t.map((e, t) => {
                                  let r;
                                  if ('string' == typeof e)
                                    return (0, n.jsx)(
                                      'span',
                                      {children: e},
                                      ''.concat(e, '-').concat(t)
                                    );
                                  if (null != e && 'string' == typeof e['@t'])
                                    r = e['@t'];
                                  else
                                    try {
                                      r = JSON.stringify(e, null, 2);
                                    } catch (t) {
                                      try {
                                        r = Object.prototype.toString.call(e);
                                      } catch (t) {
                                        r = '[' + typeof e + ']';
                                      }
                                    }
                                  return (0, n.jsx)(
                                    'span',
                                    {
                                      className: d()('console-span'),
                                      children: (0, n.jsx)(a.Pw, {
                                        initMode: 'user-visible',
                                        showTabs: !1,
                                        code: r,
                                      }),
                                    },
                                    ''.concat(e, '-').concat(t)
                                  );
                                }),
                              }),
                            },
                            r
                          );
                        }),
                      }),
                    }),
                ],
              })
            : null;
        },
        C = (e) => {
          let {clientId: t, dependenciesLoading: r, forceLoading: s} = e,
            i = S(t, r, s);
          return 'HIDDEN' === i
            ? null
            : 'TIMEOUT' === i
            ? (0, n.jsx)('div', {
                className: 'sp-overlay sp-error',
                children: (0, n.jsxs)('div', {
                  className: 'sp-error-message',
                  children: [
                    'Unable to establish connection with the sandpack bundler. Make sure you are online or try again later. If the problem persists, please report it via',
                    ' ',
                    (0, n.jsx)('a', {
                      className: 'sp-error-message',
                      href: 'mailto:hello@codesandbox.io?subject=Sandpack Timeout Error',
                      children: 'email',
                    }),
                    ' ',
                    'or submit an issue on',
                    ' ',
                    (0, n.jsx)('a', {
                      className: 'sp-error-message',
                      href: 'https://github.com/codesandbox/sandpack/issues',
                      rel: 'noreferrer noopener',
                      target: '_blank',
                      children: 'GitHub.',
                    }),
                  ],
                }),
              })
            : (0, n.jsx)('div', {
                className: 'sp-overlay sp-loading',
                style: {
                  opacity: 'LOADING' === i || 'PRE_FADING' === i ? 1 : 0,
                  transition: 'opacity '.concat(200, 'ms ease-out'),
                },
                children: (0, n.jsxs)('div', {
                  className: 'sp-cube-wrapper',
                  title: 'Open in CodeSandbox',
                  children: [
                    (0, n.jsx)(a.gl, {}),
                    (0, n.jsx)('div', {
                      className: 'sp-cube',
                      children: (0, n.jsxs)('div', {
                        className: 'sp-sides',
                        children: [
                          (0, n.jsx)('div', {className: 'top'}),
                          (0, n.jsx)('div', {className: 'right'}),
                          (0, n.jsx)('div', {className: 'bottom'}),
                          (0, n.jsx)('div', {className: 'left'}),
                          (0, n.jsx)('div', {className: 'front'}),
                          (0, n.jsx)('div', {className: 'back'}),
                        ],
                      }),
                    }),
                  ],
                }),
              });
        },
        S = (e, t, r) => {
          let {sandpack: n, listen: i} = (0, a.X3)(),
            [l, o] = (0, s.useState)('HIDDEN');
          'LOADING' !== l && r && o('LOADING');
          let d = 'idle' === n.status;
          return ((0, s.useEffect)(() => {
            let t = i((e) => {
              'done' === e.type &&
                o((e) => ('LOADING' === e ? 'PRE_FADING' : 'HIDDEN'));
            }, e);
            return () => {
              t();
            };
          }, [i, e, d]),
          (0, s.useEffect)(() => {
            let e;
            return (
              'PRE_FADING' !== l || t
                ? 'FADING' === l && (e = setTimeout(() => o('HIDDEN'), 200))
                : o('FADING'),
              () => {
                clearTimeout(e);
              }
            );
          }, [l, t]),
          'timeout' === n.status)
            ? 'TIMEOUT'
            : 'running' !== n.status
            ? 'HIDDEN'
            : l;
        };
      function B(e) {
        let {isExpanded: t, className: r, lintErrors: i} = e,
          {sandpack: l, listen: o} = (0, a.X3)(),
          [c, p] = (0, s.useState)(!1),
          [u, m] = (0, s.useState)(!1),
          [x, h] = (0, s.useState)(null),
          {error: g, registerBundler: f, unregisterBundler: b} = l;
        g &&
          '_csbRefreshUtils.prelude is not a function' === g.message &&
          (g = null),
          g && g.message.includes('Example Error:') && (g = null);
        let y = (0, s.useMemo)(() => {
          if (0 === i.length) return null;
          {
            let {line: e, column: t, message: r} = i[0];
            return {
              title: 'Lint Error',
              message: ''.concat(e, ':').concat(t, ' - ').concat(r),
            };
          }
        }, [i]);
        (null == g || 'Runtime Exception' === g.title) && null !== y && (g = y),
          null != g &&
            'Runtime Exception' === g.title &&
            (g.title = 'Runtime Error');
        let k = (function (e) {
            let t = (0, s.useRef)(null),
              [r, n] = (0, s.useState)(e);
            return (
              (0, s.useEffect)(() => {
                clearTimeout(t.current),
                  (t.current = setTimeout(() => {
                    n(e);
                  }, 300));
              }, [e]),
              r
            );
          })(g),
          v = (0, s.useId)(),
          j = (0, s.useRef)(null),
          w = 'idle' === l.status;
        (0, s.useEffect)(function () {
          let e = j.current;
          return (
            f(e, v),
            () => {
              b(v);
            }
          );
        }, []),
          (0, s.useEffect)(
            function () {
              let e;
              let t = o((t) => {
                'resize' === t.type
                  ? h(t.height)
                  : 'start' === t.type
                  ? (t.firstLoad && p(!1),
                    (e = setTimeout(() => {
                      m(!0);
                    }, 500)))
                  : 'done' === t.type && (p(!0), m(!1), clearTimeout(e));
              }, v);
              return () => {
                clearTimeout(e), p(!1), h(null), t();
              };
            },
            [w]
          );
        let E = k || !x || !c;
        return (0, n.jsxs)(a.el, {
          className: r,
          children: [
            (0, n.jsxs)('div', {
              className: d()(
                'p-0 sm:p-2 md:p-4 lg:p-8 bg-card dark:bg-wash-dark h-full relative md:rounded-b-lg lg:rounded-b-none',
                !t && (k || c) ? 'overflow-auto' : null
              ),
              children: [
                (0, n.jsx)('div', {
                  style: E
                    ? {position: 'relative'}
                    : t
                    ? {position: 'sticky', top: 'calc(2em + 64px)'}
                    : {},
                  children: (0, n.jsx)('iframe', {
                    ref: j,
                    className: d()(
                      'rounded-t-none bg-white md:shadow-md sm:rounded-lg w-full max-w-full transition-opacity',
                      E
                        ? 'absolute opacity-0 pointer-events-none duration-75'
                        : 'opacity-100 duration-150'
                    ),
                    title: 'Sandbox Preview',
                    style: {height: x || '15px', zIndex: t ? 'initial' : -1},
                  }),
                }),
                k &&
                  (0, n.jsx)('div', {
                    className: d()('z-50', t ? 'sticky top-8 ' : null),
                    children: (0, n.jsx)(F, {error: k}),
                  }),
                (0, n.jsx)(C, {
                  clientId: v,
                  dependenciesLoading: !c && null === x,
                  forceLoading: u,
                }),
              ],
            }),
            (0, n.jsx)(D, {visible: !k}),
          ],
        });
      }
      let R = () => {
          let [e, t] = (0, s.useState)([]),
            [n, a] = (0, s.useState)([]);
          return (
            (0, s.useEffect)(() => {
              let e = async () => {
                let {linter: e} = await r.e(757).then(r.bind(r, 29757)),
                  n = e(async (e) => {
                    let {runESLint: n} = await Promise.all([
                        r.e(880),
                        r.e(384),
                        r.e(711),
                      ]).then(r.bind(r, 29293)),
                      s = e.state.doc,
                      {errors: a, codeMirrorErrors: i} = n(s),
                      l = (e) => null != e.ruleId;
                    return t(a.filter(l)), i.filter(l);
                  });
                a([n]);
              };
              e();
            }, []),
            {lintErrors: e, lintExtensions: n}
          );
        },
        A = (0, s.memo)(function (e) {
          let {providedFiles: t} = e,
            {lintErrors: r, lintExtensions: i} = R(),
            {sandpack: l} = (0, a.X3)(),
            {code: o} = (0, a.m4)(),
            {activeFile: d} = l,
            c = (0, s.useRef)({});
          c.current[d] || (c.current[d] = o.split('\n').length);
          let p = c.current[d];
          return (0,
          n.jsx)(I, {providedFiles: t, lintErrors: r, lintExtensions: i, isExpandable: p > 16});
        }),
        I = (0, s.memo)(function (e) {
          let {
              providedFiles: t,
              lintErrors: r,
              lintExtensions: i,
              isExpandable: o,
            } = e,
            p = (0, s.useRef)(null),
            [u, m] = (0, s.useState)(!1);
          return (0, n.jsx)(n.Fragment, {
            children: (0, n.jsxs)('div', {
              className: 'shadow-lg dark:shadow-lg-dark rounded-lg',
              ref: p,
              style: {contain: 'content'},
              children: [
                (0, n.jsx)(w, {providedFiles: t}),
                (0, n.jsxs)(a.sp, {
                  className: d()(
                    !(o || u) && 'rounded-b-lg overflow-hidden',
                    u && 'sp-layout-expanded'
                  ),
                  children: [
                    (0, n.jsx)(T, {lintExtensions: i}),
                    (0, n.jsx)(B, {
                      className: 'order-last xl:order-2',
                      isExpanded: u,
                      lintErrors: r,
                    }),
                    (o || u) &&
                      (0, n.jsx)('button', {
                        translate: 'yes',
                        className:
                          'sandpack-expand flex text-base justify-between dark:border-card-dark bg-wash dark:bg-card-dark items-center z-10 p-1 w-full order-2 xl:order-last border-b-1 relative top-0',
                        onClick: () => {
                          let e = !u;
                          (0, l.flushSync)(() => {
                            m(e);
                          }),
                            e ||
                              null === p.current ||
                              (p.current.scrollIntoViewIfNeeded
                                ? p.current.scrollIntoViewIfNeeded()
                                : p.current.scrollIntoView({
                                    block: 'nearest',
                                    inline: 'nearest',
                                  }));
                        },
                        children: (0, n.jsxs)('span', {
                          className:
                            'flex p-2 focus:outline-none text-primary dark:text-primary-dark leading-[20px]',
                          children: [
                            (0, n.jsx)(c.g, {
                              className: 'inline me-1.5 text-xl',
                              displayDirection: u ? 'up' : 'down',
                            }),
                            u ? '收起' : '显示更多',
                          ],
                        }),
                      }),
                  ],
                }),
              ],
            }),
          });
        }),
        T = (0, s.memo)(function (e) {
          let {lintExtensions: t} = e;
          return (0,
          n.jsx)(a._V, {showLineNumbers: !0, showInlineErrors: !0, showTabs: !1, showRunButton: !1, extensions: t});
        });
      var O = r(5564);
      let z = {
          '/src/index.js': {
            hidden: !0,
            code: 'import React, { StrictMode } from "react";\nimport { createRoot } from "react-dom/client";\nimport "./styles.css";\n\nimport App from "./App";\n\nconst root = createRoot(document.getElementById("root"));\nroot.render(\n  <StrictMode>\n    <App />\n  </StrictMode>\n);',
          },
          '/package.json': {
            hidden: !0,
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
            hidden: !0,
            code: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Document</title>\n</head>\n<body>\n  <div id="root"></div>\n</body>\n</html>',
          },
        },
        L =
          '\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: sans-serif;\n  margin: 20px;\n  padding: 0;\n}\n\nh1 {\n  margin-top: 0;\n  font-size: 22px;\n}\n\nh2 {\n  margin-top: 0;\n  font-size: 20px;\n}\n\nh3 {\n  margin-top: 0;\n  font-size: 18px;\n}\n\nh4 {\n  margin-top: 0;\n  font-size: 16px;\n}\n\nh5 {\n  margin-top: 0;\n  font-size: 14px;\n}\n\nh6 {\n  margin-top: 0;\n  font-size: 12px;\n}\n\ncode {\n  font-size: 1.2em;\n}\n\nul {\n  padding-inline-start: 20px;\n}\n'.trim();
      var M = function (e) {
        var t, r, l;
        let {children: o, autorun: d = !0} = e,
          c = s.Children.toArray(o),
          p = (0, g.bX)(c);
        return (
          (p['/src/styles.css'] = {
            code: [
              L,
              null !==
                (l =
                  null === (t = p['/src/styles.css']) || void 0 === t
                    ? void 0
                    : t.code) && void 0 !== l
                ? l
                : '',
            ].join('\n\n'),
            hidden: !(null === (r = p['/src/styles.css']) || void 0 === r
              ? void 0
              : r.visible),
          }),
          (0, n.jsx)('div', {
            className: 'sandpack sandpack--playground w-full my-8',
            dir: 'ltr',
            children: (0, n.jsx)(a.oT, {
              files: {...z, ...p},
              theme: O.d,
              customSetup: {environment: 'create-react-app'},
              options: {
                autorun: d,
                initMode: 'user-visible',
                initModeObserverOptions: {rootMargin: '1400px 0px'},
                bundlerURL: 'https://786946de.sandpack-bundler-4bw.pages.dev',
                logLevel: i.S.None,
              },
              children: (0, n.jsx)(A, {providedFiles: Object.keys(p)}),
            }),
          })
        );
      };
    },
    5564: function (e, t, r) {
      r.d(t, {
        d: function () {
          return a;
        },
      });
      var n = r(62987),
        s = r.n(n);
      let a = {
        colors: {
          accent: 'inherit',
          base: 'inherit',
          clickable: 'inherit',
          disabled: 'inherit',
          error: 'inherit',
          errorSurface: 'inherit',
          hover: 'inherit',
          surface1: 'inherit',
          surface2: 'inherit',
          surface3: 'inherit',
          warning: 'inherit',
          warningSurface: 'inherit',
        },
        syntax: {
          plain: 'inherit',
          comment: 'inherit',
          keyword: 'inherit',
          tag: 'inherit',
          punctuation: 'inherit',
          definition: 'inherit',
          property: 'inherit',
          static: 'inherit',
          string: 'inherit',
        },
        font: {
          body: s().theme.extend.fontFamily.text.join(', ').replace(/"/gm, ''),
          mono: s().theme.extend.fontFamily.mono.join(', ').replace(/"/gm, ''),
          size: s().theme.extend.fontSize.code,
          lineHeight: '24px',
        },
      };
    },
    95941: function (e) {
      e.exports = {env: {}, cwd() {}};
    },
    62987: function (e, t, r) {
      let n = r(75874),
        s = r(37761);
      e.exports = {
        content: [
          './src/components/**/*.{js,ts,jsx,tsx}',
          './src/pages/**/*.{js,ts,jsx,tsx}',
          './src/styles/**/*.{js,ts,jsx,tsx}',
        ],
        darkMode: 'class',
        theme: {
          screens: {
            ...n.screens,
            betterhover: {raw: '(hover: hover)'},
            xs: '374px',
            '3xl': '1919px',
          },
          boxShadow: {
            sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
            DEFAULT:
              '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
            md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            lg: '0px 0.8px 2px rgba(0, 0, 0, 0.032), 0px 2.7px 6.7px rgba(0, 0, 0, 0.048), 0px 12px 30px rgba(0, 0, 0, 0.08)',
            'lg-dark':
              '0 0 0 1px rgba(255,255,255,.15), 0px 0.8px 2px rgba(0, 0, 0, 0.032), 0px 2.7px 6.7px rgba(0, 0, 0, 0.048), 0px 12px 30px rgba(0, 0, 0, 0.08)',
            xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
            nav: '0 16px 32px -16px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0,0,0,.10)',
            'nav-dark':
              '0 16px 32px -16px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255,255,255,.05)',
            inner: 'inset 0 1px 4px 0 rgba(0, 0, 0, 0.05)',
            'inner-border': 'inset 0 0 0 1px rgba(0, 0, 0, 0.08)',
            'inner-border-dark': 'inset 0 0 0 1px rgba(255, 255, 255, 0.08)',
            'outer-border': '0 0 0 1px rgba(0, 0, 0, 0.1)',
            'outer-border-dark': '0 0 0 1px rgba(255, 255, 255, 0.1)',
            'secondary-button-stroke': 'inset 0 0 0 1px #D9DBE3',
            'secondary-button-stroke-dark': 'inset 0 0 0 1px #404756',
            none: 'none',
          },
          extend: {
            backgroundImage: {
              'gradient-left-dark':
                'conic-gradient(from 90deg at -10% 100%, #2B303B 0deg, #2B303B 90deg, #16181D 360deg)',
              'gradient-right-dark':
                'conic-gradient(from -90deg at 110% 100%, #2B303B 0deg, #16181D 90deg, #16181D 360deg)',
              'gradient-left':
                'conic-gradient(from 90deg at -10% 100%, #BCC1CD 0deg, #BCC1CD 90deg, #FFFFFF 360deg)',
              'gradient-right':
                'conic-gradient(from -90deg at 110% 100%, #FFFFFF 0deg, #EBECF0 90deg, #EBECF0 360deg)',
              'meta-gradient': "url('/images/meta-gradient.png')",
              'meta-gradient-dark': "url('/images/meta-gradient-dark.png')",
            },
            maxWidth: {...n.maxWidth, 'custom-xs': '21rem'},
            outline: {blue: ['1px auto ' + s.link, '3px']},
            opacity: {8: '0.08'},
            fontFamily: {
              display: [
                'Optimistic Display',
                '-apple-system',
                ...n.fontFamily.sans,
              ],
              text: ['Optimistic Text', '-apple-system', ...n.fontFamily.sans],
              mono: ['"Source Code Pro"', ...n.fontFamily.mono],
            },
            lineHeight: {base: '30px', large: '38px', xl: '1.15'},
            fontSize: {
              '6xl': '52px',
              '5xl': '40px',
              '4xl': '32px',
              '3xl': '28px',
              '2xl': '24px',
              xl: '20px',
              lg: '17px',
              base: '15px',
              sm: '13px',
              xs: '11px',
              code: 'calc(1em - 20%)',
            },
            animation: {
              marquee: 'marquee 40s linear infinite',
              marquee2: 'marquee2 40s linear infinite',
              'large-marquee': 'large-marquee 80s linear infinite',
              'large-marquee2': 'large-marquee2 80s linear infinite',
              'fade-up': 'fade-up 1s 100ms both',
            },
            keyframes: {
              shimmer: {'100%': {transform: 'translateX(100%)'}},
              rotate: {
                from: {transform: 'rotate(0deg)'},
                to: {transform: 'rotate(180deg)'},
              },
              scale: {
                from: {transform: 'scale(0.8)'},
                '90%': {transform: 'scale(1.05)'},
                to: {transform: 'scale(1)'},
              },
              circle: {
                from: {transform: 'scale(0)', strokeWidth: '16px'},
                '50%': {transform: 'scale(0.5)', strokeWidth: '16px'},
                to: {transform: 'scale(1)', strokeWidth: '0px'},
              },
              marquee: {
                '0%': {transform: 'translateX(0%)'},
                '100%': {transform: 'translateX(-400%)'},
              },
              marquee2: {
                '0%': {transform: 'translateX(400%)'},
                '100%': {transform: 'translateX(0%)'},
              },
              'large-marquee': {
                '0%': {transform: 'translateX(0%)'},
                '100%': {transform: 'translateX(-200%)'},
              },
              'large-marquee2': {
                '0%': {transform: 'translateX(200%)'},
                '100%': {transform: 'translateX(0%)'},
              },
              'fade-up': {
                '0%': {opacity: '0', transform: 'translateY(2rem)'},
                '100%': {opacity: '1', transform: 'translateY(0)'},
              },
            },
            colors: s,
            gridTemplateColumns: {
              'only-content': 'auto',
              'sidebar-content': '20rem auto',
              'sidebar-content-toc': '20rem auto 20rem',
            },
          },
        },
        plugins: [],
      };
    },
  },
]);
