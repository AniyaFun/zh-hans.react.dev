(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [324],
  {
    54326: function (e, r, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/errors/[errorCode]',
        function () {
          return n(43341);
        },
      ]);
    },
    43341: function (e, r, n) {
      'use strict';
      n.r(r),
        n.d(r, {
          __N_SSG: function () {
            return s;
          },
          default: function () {
            return a;
          },
        });
      var t = n(85893),
        o = n(67294),
        i = n(68774),
        u = n(64715),
        c = n(41458),
        l = n(84375),
        s = !0;
      function a(e) {
        let {errorMessage: r, errorCode: n, content: u} = e,
          s = (0, o.useMemo)(() => JSON.parse(u, f), [u]);
        return (0, t.jsx)(l.l.Provider, {
          value: {errorMessage: r, errorCode: n},
          children: (0, t.jsx)(i.T, {
            toc: [],
            meta: {
              title: n
                ? 'Minified React error #'.concat(n)
                : 'Minified Error Decoder',
            },
            routeTree: c,
            section: 'unknown',
            children: (0, t.jsx)('div', {
              className: 'whitespace-pre-line',
              children: s,
            }),
          }),
        });
      }
      function f(e, r) {
        if (!Array.isArray(r) || '$r' != r[0]) return r;
        {
          let e = r[1],
            n = r[2],
            t = r[3];
          return (
            'wrapper' === e && ((e = o.Fragment), (t = {children: t.children})),
            e in u.t && (e = u.t[e]),
            e || (console.error('Unknown type: ' + e), (e = o.Fragment)),
            {
              $$typeof: Symbol.for('react.element'),
              type: e,
              key: n,
              ref: null,
              props: t,
              _owner: null,
            }
          );
        }
      }
    },
  },
  function (e) {
    e.O(
      0,
      [324],
      function () {
        [762, 850, 300].map(e.E);
      },
      5
    ),
      e.O(0, [181, 962, 774, 888, 179], function () {
        return e((e.s = 54326));
      }),
      (_N_E = e.O());
  },
]);
