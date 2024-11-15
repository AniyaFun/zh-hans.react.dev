(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [300],
  {
    37761: function (e) {
      'use strict';
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
    42825: function (e, r, t) {
      'use strict';
      t.r(r);
      var a = t(85893),
        n = t(94184),
        s = t.n(n),
        i = t(59119),
        l = t(35524),
        o = t(58037),
        p = t(13804),
        d = t(61426),
        c = t(87594),
        g = t.n(c),
        u = t(5564);
      let x = (0, o.eJ)({jsx: !0, typescript: !1}),
        m = (0, d.iv)(),
        f = (0, p.dy)();
      function h(e) {
        return 'sp-syntax-'.concat(e);
      }
      r.default = function (e) {
        var r, t, n;
        let {
          children: {
            props: {className: o = 'language-js', children: p = '', meta: d},
          },
          noMargin: c,
          noShadow: b,
          onLineHover: F,
        } = e;
        p = p.trimEnd();
        let y = x;
        'language-css' === o ? (y = m) : 'language-html' === o && (y = f);
        let E = y.language.parser.parse(p),
          k = new Map(),
          C = new Map(),
          w =
            ((n = u.d),
            i.Qf.define([
              {tag: l.pJ.link, textdecorator: 'underline'},
              {tag: l.pJ.emphasis, fontStyle: 'italic'},
              {tag: l.pJ.strong, fontWeight: 'bold'},
              {tag: l.pJ.keyword, class: h('keyword')},
              {tag: [l.pJ.atom, l.pJ.number, l.pJ.bool], class: h('static')},
              {tag: l.pJ.standard(l.pJ.tagName), class: h('tag')},
              {tag: l.pJ.variableName, class: h('plain')},
              {tag: l.pJ.function(l.pJ.variableName), class: h('definition')},
              {
                tag: [
                  l.pJ.definition(l.pJ.function(l.pJ.variableName)),
                  l.pJ.tagName,
                ],
                class: h('definition'),
              },
              {tag: l.pJ.propertyName, class: h('property')},
              {
                tag: [l.pJ.literal, l.pJ.inserted],
                class: h(n.syntax.string ? 'string' : 'static'),
              },
              {tag: l.pJ.punctuation, class: h('punctuation')},
              {tag: [l.pJ.comment, l.pJ.quote], class: h('comment')},
            ]));
        (0, l.bW)(E, w, (e, r, t) => {
          k.set(e, t), C.set(r, t);
        });
        let B = new Map(),
          D = p.split('\n'),
          v = (function (e, r) {
            if (!r) return [];
            let t = (function (e) {
                let r = /{([\d,-]+)}/.exec(e);
                return r ? g()(r[1]) : [];
              })(r),
              a = t.map((e) => ({
                className: 'bg-github-highlight dark:bg-opacity-10',
                line: e,
              }));
            return a;
          })(0, d);
        for (let e of v) B.set(e.line - 1, e.className);
        let N = (function (e, r) {
            if (!r) return [];
            let t = (function (e, r) {
                let t = /(\[\[.*\]\])/.exec(e);
                if (!t) return [];
                let a = r.split('\n'),
                  n = JSON.parse(t[1]);
                return n.map((e) => {
                  let [r, t, n, s] = e,
                    i = a[t - 1],
                    l = i.indexOf(n),
                    o = i.lastIndexOf(n);
                  if (l !== o) {
                    if (void 0 === s)
                      throw Error(
                        "Found '" +
                          n +
                          "' twice. Specify fromIndex as the fourth value in the tuple."
                      );
                    l = i.indexOf(n, s);
                  }
                  if (-1 === l) throw Error("Could not find: '" + n + "'");
                  return {
                    step: r,
                    line: t,
                    startColumn: l,
                    endColumn: l + n.length,
                  };
                });
              })(r, e),
              a = t.map((e) => ({
                ...e,
                elementAttributes: {'data-step': ''.concat(e.step)},
                className: s()(
                  'code-step bg-opacity-10 dark:bg-opacity-20 relative rounded px-1 py-[1.5px] border-b-[2px] border-opacity-60',
                  {
                    'bg-blue-40 border-blue-40 text-blue-60 dark:text-blue-30':
                      1 === e.step,
                    'bg-yellow-40 border-yellow-40 text-yellow-60 dark:text-yellow-30':
                      2 === e.step,
                    'bg-purple-40 border-purple-40 text-purple-60 dark:text-purple-30':
                      3 === e.step,
                    'bg-green-40 border-green-40 text-green-60 dark:text-green-30':
                      4 === e.step,
                  }
                ),
              }));
            return a;
          })(p, d),
          j = new Map(),
          J = new Map();
        for (let e of N) {
          let r = 0;
          for (let t = 0; t < e.line - 1; t++) r += D[t].length + 1;
          r += e.startColumn;
          let t = r + (e.endColumn - e.startColumn);
          if (j.has(r)) throw Error('Already opened decorator at ' + r);
          if ((j.set(r, e.className), J.has(t)))
            throw Error('Already closed decorator at ' + t);
          J.set(t, e.className);
        }
        let A = null,
          q = null,
          M = '',
          S = 0,
          X = [],
          W = [];
        for (let e = 0; e < p.length; e++) {
          if (C.has(e)) {
            if (!q)
              throw Error(
                'Cannot close token at ' + e + ' because it was not open.'
              );
            A ||
              (X.push(
                (0, a.jsx)('span', {className: q, children: M}, e + '/t')
              ),
              (M = '')),
              (q = null);
          }
          if (J.has(e)) {
            if (!A)
              throw Error(
                'Cannot close decorator at ' + e + ' because it was not open.'
              );
            X.push((0, a.jsx)('span', {className: A, children: M}, e + '/d')),
              (M = ''),
              (A = null);
          }
          if (j.has(e)) {
            if (A)
              throw Error(
                'Cannot open decorator at ' + e + ' before closing last one.'
              );
            q
              ? (X.push(
                  (0, a.jsx)('span', {className: q, children: M}, e + 'd')
                ),
                (M = ''))
              : (X.push(M), (M = '')),
              (A = j.get(e));
          }
          if (k.has(e)) {
            if (q)
              throw Error(
                'Cannot open token at ' + e + ' before closing last one.'
              );
            (q = k.get(e)), A || (X.push(M), (M = ''));
          }
          if ('\n' === p[e]) {
            X.push(M), (M = '');
            let e = S;
            W.push(
              (0, a.jsxs)(
                'div',
                {
                  className:
                    'cm-line ' +
                    (null !== (r = B.get(S)) && void 0 !== r ? r : ''),
                  onMouseEnter: F ? () => F(e) : void 0,
                  children: [X, (0, a.jsx)('br', {})],
                },
                S
              )
            ),
              (X = []),
              S++;
          } else M += p[e];
        }
        return (
          A
            ? X.push((0, a.jsx)('span', {className: A, children: M}, 'end/d'))
            : q
            ? X.push((0, a.jsx)('span', {className: q, children: M}, 'end/t'))
            : X.push(M),
          W.push(
            (0, a.jsx)(
              'div',
              {
                className:
                  'cm-line ' +
                  (null !== (t = B.get(S)) && void 0 !== t ? t : ''),
                onMouseEnter: F ? () => F(S) : void 0,
                children: X,
              },
              S
            )
          ),
          (0, a.jsx)('div', {
            dir: 'ltr',
            className: s()(
              'sandpack sandpack--codeblock',
              'rounded-2xl h-full w-full overflow-x-auto flex items-center bg-wash dark:bg-gray-95 shadow-lg',
              !c && 'my-8',
              b &&
                'shadow-none rounded-2xl overflow-hidden w-full flex bg-transparent'
            ),
            style: {contain: 'content'},
            children: (0, a.jsx)('div', {
              className: 'sp-wrapper',
              children: (0, a.jsx)('div', {
                className: 'sp-stack',
                children: (0, a.jsx)('div', {
                  className: 'sp-code-editor',
                  children: (0, a.jsx)('pre', {
                    className:
                      'sp-cm sp-pristine sp-javascript flex align-start',
                    children: (0, a.jsx)('code', {
                      className: 'sp-pre-placeholder grow-[2]',
                      onMouseLeave: F ? () => F(null) : void 0,
                      children: W,
                    }),
                  }),
                }),
              }),
            }),
          })
        );
      };
    },
    5564: function (e, r, t) {
      'use strict';
      t.d(r, {
        d: function () {
          return s;
        },
      });
      var a = t(62987),
        n = t.n(a);
      let s = {
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
          body: n().theme.extend.fontFamily.text.join(', ').replace(/"/gm, ''),
          mono: n().theme.extend.fontFamily.mono.join(', ').replace(/"/gm, ''),
          size: n().theme.extend.fontSize.code,
          lineHeight: '24px',
        },
      };
    },
    95941: function (e) {
      'use strict';
      e.exports = {env: {}, cwd() {}};
    },
    62987: function (e, r, t) {
      'use strict';
      let a = t(75874),
        n = t(37761);
      e.exports = {
        content: [
          './src/components/**/*.{js,ts,jsx,tsx}',
          './src/pages/**/*.{js,ts,jsx,tsx}',
          './src/styles/**/*.{js,ts,jsx,tsx}',
        ],
        darkMode: 'class',
        theme: {
          screens: {
            ...a.screens,
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
            maxWidth: {...a.maxWidth, 'custom-xs': '21rem'},
            outline: {blue: ['1px auto ' + n.link, '3px']},
            opacity: {8: '0.08'},
            fontFamily: {
              display: [
                'Optimistic Display',
                '-apple-system',
                ...a.fontFamily.sans,
              ],
              text: ['Optimistic Text', '-apple-system', ...a.fontFamily.sans],
              mono: ['"Source Code Pro"', ...a.fontFamily.mono],
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
            colors: n,
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
    87594: function (e, r) {
      function t(e) {
        let r,
          t = [];
        for (let a of e.split(',').map((e) => e.trim()))
          if (/^-?\d+$/.test(a)) t.push(parseInt(a, 10));
          else if (
            (r = a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/))
          ) {
            let [e, a, n, s] = r;
            if (a && s) {
              (a = parseInt(a)), (s = parseInt(s));
              let e = a < s ? 1 : -1;
              ('-' === n || '..' === n || '‥' === n) && (s += e);
              for (let r = a; r !== s; r += e) t.push(r);
            }
          }
        return t;
      }
      (r.default = t), (e.exports = t);
    },
  },
]);
