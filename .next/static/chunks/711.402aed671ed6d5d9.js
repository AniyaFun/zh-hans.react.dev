(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [711],
  {
    84294: function (e) {
      function r(e) {
        var r = Error("Cannot find module '" + e + "'");
        throw ((r.code = 'MODULE_NOT_FOUND'), r);
      }
      (r.keys = function () {
        return [];
      }),
        (r.resolve = r),
        (r.id = 84294),
        (e.exports = r);
    },
    29293: function (e, r, o) {
      'use strict';
      o.r(r),
        o.d(r, {
          runESLint: function () {
            return d;
          },
        });
      var n,
        s,
        t = o(78500);
      let l = (e, r) => {
          let {line: o, column: n} = r;
          return e.line(o).from + (null != n ? n : 0) - 1;
        },
        u = new t.Linter(),
        i = o(89718);
      (i.parse = null === (n = i.default) || void 0 === n ? void 0 : n.parse),
        (i.matches =
          null === (s = i.default) || void 0 === s ? void 0 : s.matches);
      let a = o(240).rules;
      u.defineRules({
        'react-hooks/rules-of-hooks': a['rules-of-hooks'],
        'react-hooks/exhaustive-deps': a['exhaustive-deps'],
      });
      let c = {
          parserOptions: {
            ecmaVersion: 12,
            sourceType: 'module',
            ecmaFeatures: {jsx: !0},
          },
          rules: {
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'error',
          },
        },
        d = (e) => {
          let r = e.toString(),
            o = u.verify(r, c),
            n = {1: 'warning', 2: 'error'},
            s = o
              .map((r) => {
                var o, s;
                if (!r) return;
                let t = l(e, {line: r.line, column: r.column}),
                  u = l(e, {
                    line: null !== (o = r.endLine) && void 0 !== o ? o : r.line,
                    column:
                      null !== (s = r.endColumn) && void 0 !== s ? s : r.column,
                  });
                return {
                  ruleId: r.ruleId,
                  from: t,
                  to: u,
                  severity: n[r.severity],
                  message: r.message,
                };
              })
              .filter(Boolean);
          return {
            codeMirrorErrors: s,
            errors: o.map((e) => ({...e, severity: n[e.severity]})),
          };
        };
    },
  },
]);
