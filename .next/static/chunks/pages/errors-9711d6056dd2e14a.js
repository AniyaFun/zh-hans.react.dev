(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [298],
  {
    76362: function (e, n, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/errors',
        function () {
          return r(64156);
        },
      ]);
    },
    43341: function (e, n, r) {
      'use strict';
      r.r(n),
        r.d(n, {
          __N_SSG: function () {
            return f;
          },
          default: function () {
            return a;
          },
        });
      var t = r(85893),
        i = r(67294),
        u = r(68774),
        o = r(64715),
        c = r(41458),
        l = r(84375),
        f = !0;
      function a(e) {
        let {errorMessage: n, errorCode: r, content: o} = e,
          f = (0, i.useMemo)(() => JSON.parse(o, s), [o]);
        return (0, t.jsx)(l.l.Provider, {
          value: {errorMessage: n, errorCode: r},
          children: (0, t.jsx)(u.T, {
            toc: [],
            meta: {
              title: r
                ? 'Minified React error #'.concat(r)
                : 'Minified Error Decoder',
            },
            routeTree: c,
            section: 'unknown',
            children: (0, t.jsx)('div', {
              className: 'whitespace-pre-line',
              children: f,
            }),
          }),
        });
      }
      function s(e, n) {
        if (!Array.isArray(n) || '$r' != n[0]) return n;
        {
          let e = n[1],
            r = n[2],
            t = n[3];
          return (
            'wrapper' === e && ((e = i.Fragment), (t = {children: t.children})),
            e in o.t && (e = o.t[e]),
            e || (console.error('Unknown type: ' + e), (e = i.Fragment)),
            {
              $$typeof: Symbol.for('react.element'),
              type: e,
              key: r,
              ref: null,
              props: t,
              _owner: null,
            }
          );
        }
      }
    },
    64156: function (e, n, r) {
      'use strict';
      r.r(n),
        r.d(n, {
          __N_SSG: function () {
            return i;
          },
        });
      var t = r(43341),
        i = !0;
      n.default = t.default;
    },
  },
  function (e) {
    e.O(
      0,
      [298],
      function () {
        [762, 850, 300].map(e.E);
      },
      5
    ),
      e.O(0, [181, 962, 774, 888, 179], function () {
        return e((e.s = 76362));
      }),
      (_N_E = e.O());
  },
]);
