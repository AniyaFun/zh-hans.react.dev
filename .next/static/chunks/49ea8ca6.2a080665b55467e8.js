'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [69],
  {
    92860: function (e, n, t) {
      t.d(n, {
        Pw: function () {
          return nt;
        },
        X3: function () {
          return eq;
        },
        _V: function () {
          return nn;
        },
        aM: function () {
          return eQ;
        },
        el: function () {
          return eK;
        },
        gl: function () {
          return nj;
        },
        lc: function () {
          return ny;
        },
        m4: function () {
          return eG;
        },
        oT: function () {
          return eW;
        },
        sp: function () {
          return nr;
        },
        xN: function () {
          return ns;
        },
      });
      var r,
        i,
        o,
        s,
        a = t(85893),
        c = t(67294),
        l = t(38471),
        d = t(51869),
        u = t(32286),
        p = t(34790),
        f = t(45383),
        m = t(59119),
        v = t(78120),
        h = t(47421),
        g = t(9665),
        x = t(61426),
        b = t(13804),
        y = t(58037),
        j = t(35524),
        w = t(1458),
        C = t(68699),
        k = t(26961),
        N = function () {
          return (N =
            Object.assign ||
            function (e) {
              for (var n, t = 1, r = arguments.length; t < r; t++)
                for (var i in (n = arguments[t]))
                  Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
              return e;
            }).apply(this, arguments);
        };
      function S(e, n) {
        var t = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            0 > n.indexOf(r) &&
            (t[r] = e[r]);
        if (null != e && 'function' == typeof Object.getOwnPropertySymbols)
          for (
            var i = 0, r = Object.getOwnPropertySymbols(e);
            i < r.length;
            i++
          )
            0 > n.indexOf(r[i]) &&
              Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
              (t[r[i]] = e[r[i]]);
        return t;
      }
      function O(e, n, t, r) {
        return new (t || (t = Promise))(function (i, o) {
          function s(e) {
            try {
              c(r.next(e));
            } catch (e) {
              o(e);
            }
          }
          function a(e) {
            try {
              c(r.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function c(e) {
            var n;
            e.done
              ? i(e.value)
              : ((n = e.value) instanceof t
                  ? n
                  : new t(function (e) {
                      e(n);
                    })
                ).then(s, a);
          }
          c((r = r.apply(e, n || [])).next());
        });
      }
      function E(e, n) {
        var t,
          r,
          i,
          o,
          s = {
            label: 0,
            sent: function () {
              if (1 & i[0]) throw i[1];
              return i[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (o = {next: a(0), throw: a(1), return: a(2)}),
          'function' == typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this;
            }),
          o
        );
        function a(o) {
          return function (a) {
            return (function (o) {
              if (t) throw TypeError('Generator is already executing.');
              for (; s; )
                try {
                  if (
                    ((t = 1),
                    r &&
                      (i =
                        2 & o[0]
                          ? r.return
                          : o[0]
                          ? r.throw || ((i = r.return) && i.call(r), 0)
                          : r.next) &&
                      !(i = i.call(r, o[1])).done)
                  )
                    return i;
                  switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                    case 0:
                    case 1:
                      i = o;
                      break;
                    case 4:
                      return s.label++, {value: o[1], done: !1};
                    case 5:
                      s.label++, (r = o[1]), (o = [0]);
                      continue;
                    case 7:
                      (o = s.ops.pop()), s.trys.pop();
                      continue;
                    default:
                      if (
                        !(i = (i = s.trys).length > 0 && i[i.length - 1]) &&
                        (6 === o[0] || 2 === o[0])
                      ) {
                        s = 0;
                        continue;
                      }
                      if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                        s.label = o[1];
                        break;
                      }
                      if (6 === o[0] && s.label < i[1]) {
                        (s.label = i[1]), (i = o);
                        break;
                      }
                      if (i && s.label < i[2]) {
                        (s.label = i[2]), s.ops.push(o);
                        break;
                      }
                      i[2] && s.ops.pop(), s.trys.pop();
                      continue;
                  }
                  o = n.call(e, s);
                } catch (e) {
                  (o = [6, e]), (r = 0);
                } finally {
                  t = i = 0;
                }
              if (5 & o[0]) throw o[1];
              return {value: o[0] ? o[1] : void 0, done: !0};
            })([o, a]);
          };
        }
      }
      function A(e, n, t) {
        if (t || 2 == arguments.length)
          for (var r, i = 0, o = n.length; i < o; i++)
            (!r && i in n) ||
              (r || (r = Array.prototype.slice.call(n, 0, i)), (r[i] = n[i]));
        return e.concat(r || Array.prototype.slice.call(n));
      }
      var M = function (e) {
          return (0, a.jsx)(
            'svg',
            N(
              {
                fill: 'currentColor',
                height: '16',
                viewBox: '0 0 16 16',
                width: '16',
                xmlns: 'http://www.w3.org/2000/svg',
              },
              e
            )
          );
        },
        L = function () {
          return (0, a.jsxs)(M, {
            viewBox: '0 0 48 48',
            children: [
              (0, a.jsx)('title', {children: 'Sign in'}),
              (0, a.jsx)('path', {
                d: 'M9 42q-1.2 0-2.1-.9Q6 40.2 6 39V9q0-1.2.9-2.1Q7.8 6 9 6h14.55v3H9v30h14.55v3Zm24.3-9.25-2.15-2.15 5.1-5.1h-17.5v-3h17.4l-5.1-5.1 2.15-2.15 8.8 8.8Z',
              }),
            ],
          });
        },
        F = function () {
          return (0, a.jsxs)(M, {
            viewBox: '0 0 48 48',
            children: [
              (0, a.jsx)('title', {children: 'Sign out'}),
              (0, a.jsx)('path', {
                d: 'M9 42q-1.2 0-2.1-.9Q6 40.2 6 39V9q0-1.2.9-2.1Q7.8 6 9 6h14.55v3H9v30h14.55v3Zm24.3-9.25-2.15-2.15 5.1-5.1h-17.5v-3h17.4l-5.1-5.1 2.15-2.15 8.8 8.8Z',
              }),
            ],
          });
        },
        R = function () {
          return (0, a.jsxs)(M, {
            fill: 'none',
            stroke: 'currentColor',
            children: [
              (0, a.jsx)('title', {children: 'Restart script'}),
              (0, a.jsx)('path', {
                d: 'M8 2C4.68629 2 2 4.68629 2 8C2 10.0946 3.07333 11.9385 4.7 13.0118',
                strokeLinecap: 'round',
              }),
              (0, a.jsx)('path', {
                d: 'M14.0005 7.9998C14.0005 5.82095 12.8391 3.91335 11.1016 2.8623',
                strokeLinecap: 'round',
              }),
              (0, a.jsx)('path', {
                d: 'M14.0003 2.3335H11.167C10.8908 2.3335 10.667 2.55735 10.667 2.8335V5.66683',
                strokeLinecap: 'round',
              }),
              (0, a.jsx)('path', {
                d: 'M1.99967 13.6665L4.83301 13.6665C5.10915 13.6665 5.33301 13.4426 5.33301 13.1665L5.33301 10.3332',
                strokeLinecap: 'round',
              }),
              (0, a.jsx)('path', {
                d: 'M10 10L12 12L10 14',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
              }),
              (0, a.jsx)('path', {
                d: 'M14.667 14L12.667 14',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
              }),
            ],
          });
        },
        I = function () {
          return (0, a.jsxs)(M, {
            children: [
              (0, a.jsx)('title', {children: 'Run sandbox'}),
              (0, a.jsx)('path', {
                d: 'M11.0792 8.1078C11.2793 8.25007 11.27 8.55012 11.0616 8.67981L6.02535 11.8135C5.79638 11.956 5.5 11.7913 5.5 11.5216L5.5 8.40703L5.5 4.80661C5.5 4.52735 5.81537 4.36463 6.04296 4.52647L11.0792 8.1078Z',
              }),
            ],
          });
        },
        D = function () {
          return (0, a.jsxs)(M, {
            children: [
              (0, a.jsx)('title', {children: 'Click to go back'}),
              (0, a.jsx)('path', {
                d: 'M9.64645 12.3536C9.84171 12.5488 10.1583 12.5488 10.3536 12.3536C10.5488 12.1583 10.5488 11.8417 10.3536 11.6464L9.64645 12.3536ZM10.3536 4.35355C10.5488 4.15829 10.5488 3.84171 10.3536 3.64644C10.1583 3.45118 9.84171 3.45118 9.64645 3.64644L10.3536 4.35355ZM6.07072 7.92929L5.71716 7.57573L6.07072 7.92929ZM10.3536 11.6464L6.42427 7.71716L5.71716 8.42426L9.64645 12.3536L10.3536 11.6464ZM6.42427 8.28284L10.3536 4.35355L9.64645 3.64644L5.71716 7.57573L6.42427 8.28284ZM6.42427 7.71716C6.58048 7.87337 6.58048 8.12663 6.42427 8.28284L5.71716 7.57573C5.48285 7.81005 5.48285 8.18995 5.71716 8.42426L6.42427 7.71716Z',
              }),
            ],
          });
        },
        T = function () {
          return (0, a.jsxs)(M, {
            children: [
              (0, a.jsx)('title', {children: 'Click to go forward'}),
              (0, a.jsx)('path', {
                d: 'M6.35355 3.64645C6.15829 3.45118 5.84171 3.45118 5.64645 3.64645C5.45118 3.84171 5.45118 4.15829 5.64645 4.35355L6.35355 3.64645ZM5.64645 11.6464C5.45118 11.8417 5.45118 12.1583 5.64645 12.3536C5.84171 12.5488 6.15829 12.5488 6.35355 12.3536L5.64645 11.6464ZM9.92929 8.07071L10.2828 8.42426L9.92929 8.07071ZM5.64645 4.35355L9.57574 8.28284L10.2828 7.57574L6.35355 3.64645L5.64645 4.35355ZM9.57574 7.71716L5.64645 11.6464L6.35355 12.3536L10.2828 8.42426L9.57574 7.71716ZM9.57574 8.28284C9.41952 8.12663 9.41953 7.87337 9.57574 7.71716L10.2828 8.42426C10.5172 8.18995 10.5172 7.81005 10.2828 7.57574L9.57574 8.28284Z',
              }),
            ],
          });
        },
        H = function () {
          return (0, a.jsxs)(M, {
            children: [
              (0, a.jsx)('title', {children: 'Refresh preview'}),
              (0, a.jsx)('path', {
                clipRule: 'evenodd',
                d: 'M3.83325 7.99992C3.83325 5.69867 5.69853 3.83325 7.99934 3.83325C9.81246 3.83325 11.3563 4.99195 11.9285 6.61097C11.9396 6.6425 11.9536 6.67221 11.97 6.69992H8.80005C8.52391 6.69992 8.30005 6.92378 8.30005 7.19992C8.30005 7.47606 8.52391 7.69992 8.80005 7.69992H12.5667C12.8981 7.69992 13.1667 7.43129 13.1667 7.09992V3.33325C13.1667 3.05711 12.9429 2.83325 12.6667 2.83325C12.3906 2.83325 12.1667 3.05711 12.1667 3.33325V4.94608C11.2268 3.66522 9.7106 2.83325 7.99934 2.83325C5.14613 2.83325 2.83325 5.14651 2.83325 7.99992C2.83325 10.8533 5.14613 13.1666 7.99934 13.1666C9.91218 13.1666 11.5815 12.1266 12.474 10.5836C12.6123 10.3446 12.5306 10.0387 12.2915 9.90044C12.0525 9.76218 11.7466 9.84387 11.6084 10.0829C10.8873 11.3296 9.54072 12.1666 7.99934 12.1666C5.69853 12.1666 3.83325 10.3012 3.83325 7.99992Z',
                fillRule: 'evenodd',
              }),
            ],
          });
        },
        P = function () {
          return (0, a.jsxs)(M, {
            fill: 'none',
            stroke: 'currentColor',
            children: [
              (0, a.jsx)('title', {children: 'Clean'}),
              (0, a.jsx)('circle', {
                cx: '7.99998',
                cy: '8.00004',
                r: '4.66667',
                strokeLinecap: 'round',
              }),
              (0, a.jsx)('path', {d: 'M4.66669 4.66663L11.3334 11.3333'}),
            ],
          });
        },
        J = function () {
          return (0, a.jsxs)(M, {
            fill: 'none',
            stroke: 'currentColor',
            children: [
              (0, a.jsx)('title', {children: 'Open on CodeSandbox'}),
              (0, a.jsx)('path', {
                d: 'M6.66665 3.33337H4.33331C3.78103 3.33337 3.33331 3.78109 3.33331 4.33337V11.6667C3.33331 12.219 3.78103 12.6667 4.33331 12.6667H11.6666C12.2189 12.6667 12.6666 12.219 12.6666 11.6667V9.33337',
                strokeLinecap: 'round',
              }),
              (0, a.jsx)('path', {
                d: 'M10 3.33337H12.5667C12.6219 3.33337 12.6667 3.37815 12.6667 3.43337V6.00004',
                strokeLinecap: 'round',
              }),
              (0, a.jsx)('path', {
                d: 'M7.33331 8.66668L12.5333 3.46667',
                strokeLinecap: 'round',
              }),
            ],
          });
        },
        B = function () {
          return jsxs(M, {
            children: [
              jsx('title', {children: 'Directory'}),
              jsx('path', {
                d: 'M12.5526 12.6667H3.66675C3.2922 12.6667 2.96575 12.4608 2.79442 12.156L3.81072 8.0908C3.92201 7.64563 4.32199 7.33333 4.78086 7.33333H13.386C14.0365 7.33333 14.5139 7.94472 14.3561 8.57587L13.5228 11.9092C13.4115 12.3544 13.0115 12.6667 12.5526 12.6667Z',
                fill: 'currentColor',
              }),
              jsx('path', {
                d: 'M13.3334 6.63333V6.33333C13.3334 5.78105 12.8857 5.33333 12.3334 5.33333H8.30286C8.10543 5.33333 7.91242 5.2749 7.74816 5.16538L6.25201 4.16795C6.08774 4.05844 5.89473 4 5.69731 4H3.66675C3.11446 4 2.66675 4.44772 2.66675 5L2.66675 11.6667C2.66675 12.219 3.11446 12.6667 3.66675 12.6667H12.5526C13.0115 12.6667 13.4115 12.3544 13.5228 11.9092L14.3561 8.57587C14.5139 7.94472 14.0365 7.33333 13.386 7.33333H4.78086C4.32199 7.33333 3.92201 7.64563 3.81072 8.0908L2.75008 12.3333',
                fill: 'none',
                stroke: 'currentColor',
                strokeLinecap: 'round',
              }),
            ],
          });
        },
        U = function () {
          return jsxs(M, {
            children: [
              jsx('title', {children: 'Directory'}),
              jsx('path', {
                d: 'M12.3334 12.6667H3.66675C3.11446 12.6667 2.66675 12.219 2.66675 11.6667V5C2.66675 4.44772 3.11446 4 3.66675 4H5.69731C5.89473 4 6.08774 4.05844 6.25201 4.16795L7.74816 5.16538C7.91242 5.2749 8.10543 5.33333 8.30286 5.33333H12.3334C12.8857 5.33333 13.3334 5.78105 13.3334 6.33333V11.6667C13.3334 12.219 12.8857 12.6667 12.3334 12.6667Z',
                fill: 'currentColor',
                stroke: 'currentColor',
                strokeLinecap: 'round',
              }),
            ],
          });
        },
        Z = function () {
          return jsxs(M, {
            fill: 'currentColor',
            children: [
              jsx('title', {children: 'File'}),
              jsx('path', {
                clipRule: 'evenodd',
                d: 'M4.5 4.33325C4.5 4.05711 4.72386 3.83325 5 3.83325H8.16675V6.56659C8.16675 6.89795 8.43538 7.16658 8.76675 7.16658H11.5V12.3333C11.5 12.6094 11.2761 12.8333 11 12.8333H5C4.72386 12.8333 4.5 12.6094 4.5 12.3333V4.33325ZM12.5 6.67568C12.5001 6.67265 12.5001 6.66962 12.5001 6.66658C12.5001 6.66355 12.5001 6.66052 12.5 6.65749V6.41413C12.5 6.01631 12.342 5.63478 12.0607 5.35347L9.97978 3.27259C9.69848 2.99129 9.31694 2.83325 8.91912 2.83325H8.66675H5C4.17157 2.83325 3.5 3.50483 3.5 4.33325V12.3333C3.5 13.1617 4.17157 13.8333 5 13.8333H11C11.8284 13.8333 12.5 13.1617 12.5 12.3333V6.67568ZM9.16675 3.89888C9.20518 3.92078 9.24085 3.94787 9.27267 3.9797L11.3536 6.06058C11.3854 6.09243 11.4125 6.12813 11.4344 6.16658H9.16675V3.89888Z',
                fillRule: 'evenodd',
              }),
            ],
          });
        },
        V = function () {
          return (0, a.jsxs)(M, {
            stroke: 'currentColor',
            children: [
              (0, a.jsx)('title', {children: 'Close file'}),
              (0, a.jsx)('path', {d: 'M12 4L4 12', strokeLinecap: 'round'}),
              (0, a.jsx)('path', {d: 'M4 4L12 12', strokeLinecap: 'round'}),
            ],
          });
        },
        _ = function () {
          return (0, a.jsxs)(M, {
            children: [
              (0, a.jsx)('title', {children: 'Open browser console'}),
              (0, a.jsx)('path', {
                d: 'M5.65871 3.62037C5.44905 3.44066 5.1334 3.46494 4.95368 3.6746C4.77397 3.88427 4.79825 4.19992 5.00792 4.37963L5.65871 3.62037ZM5.00792 11.6204C4.79825 11.8001 4.77397 12.1157 4.95368 12.3254C5.1334 12.5351 5.44905 12.5593 5.65871 12.3796L5.00792 11.6204ZM9.9114 7.92407L10.2368 7.54445L9.9114 7.92407ZM5.00792 4.37963L9.586 8.3037L10.2368 7.54445L5.65871 3.62037L5.00792 4.37963ZM9.586 7.6963L5.00792 11.6204L5.65871 12.3796L10.2368 8.45555L9.586 7.6963ZM9.586 8.3037C9.39976 8.14407 9.39976 7.85594 9.586 7.6963L10.2368 8.45555C10.5162 8.2161 10.5162 7.7839 10.2368 7.54445L9.586 8.3037Z',
              }),
              (0, a.jsx)('path', {
                d: 'M10 11.5C9.72386 11.5 9.5 11.7239 9.5 12C9.5 12.2761 9.72386 12.5 10 12.5V11.5ZM14.6667 12.5C14.9428 12.5 15.1667 12.2761 15.1667 12C15.1667 11.7239 14.9428 11.5 14.6667 11.5V12.5ZM10 12.5H14.6667V11.5H10V12.5Z',
              }),
            ],
          });
        },
        z = {
          colors: {
            surface1: '#ffffff',
            surface2: '#EFEFEF',
            surface3: '#F3F3F3',
            disabled: '#C5C5C5',
            base: '#323232',
            clickable: '#808080',
            hover: '#4D4D4D',
            accent: '#3973E0',
            error: '#EA3323',
            errorSurface: '#FCF1F0',
            warning: '#6A4516',
            warningSurface: '#FEF2C0',
          },
          syntax: {
            plain: '#151515',
            comment: {color: '#999', fontStyle: 'italic'},
            keyword: '#7C5AE3',
            tag: '#0971F1',
            punctuation: '#3B3B3B',
            definition: '#85A600',
            property: '#3B3B3B',
            static: '#3B3B3B',
            string: '#2E6BD0',
          },
          font: {
            body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
            mono: '"Fira Mono", "DejaVu Sans Mono", Menlo, Consolas, "Liberation Mono", Monaco, "Lucida Console", monospace',
            size: '13px',
            lineHeight: '20px',
          },
        },
        Y = {
          colors: {
            surface1: '#151515',
            surface2: '#252525',
            surface3: '#2F2F2F',
            disabled: '#4D4D4D',
            base: '#808080',
            clickable: '#999999',
            hover: '#C5C5C5',
            accent: '#E5E5E5',
            error: '#FFB4A6',
            errorSurface: '#690000',
            warning: '#E7C400',
            warningSurface: '#3A3000',
          },
          syntax: {
            plain: '#FFFFFF',
            comment: {color: '#757575', fontStyle: 'italic'},
            keyword: '#77B7D7',
            tag: '#DFAB5C',
            punctuation: '#ffffff',
            definition: '#86D9CA',
            property: '#77B7D7',
            static: '#C64640',
            string: '#977CDC',
          },
          font: {
            body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
            mono: '"Fira Mono", "DejaVu Sans Mono", Menlo, Consolas, "Liberation Mono", Monaco, "Lucida Console", monospace',
            size: '13px',
            lineHeight: '20px',
          },
        },
        W = {
          light: z,
          dark: Y,
          auto:
            'undefined' != typeof window &&
            (null === (i = null == window ? void 0 : window.matchMedia) ||
            void 0 === i
              ? void 0
              : i.call(window, '(prefers-color-scheme: dark)').matches)
              ? Y
              : z,
        },
        q = function (e) {
          var n = e.lastIndexOf('/');
          return e.slice(n + 1);
        },
        G = function (e, n) {
          var t = ('/' === e[0] ? e.slice(1) : e).split('/'),
            r = [];
          if (1 === t.length) r.unshift(t[0]);
          else
            for (var i = 0; i < n.length; i++)
              for (var o = n[i].split('/'), s = 1; s <= t.length; s++) {
                var a = t[t.length - s],
                  c = o[o.length - s];
                if ((r.length < s && r.unshift(a), a !== c)) break;
              }
          return r.length < t.length && r.unshift('..'), r.join('/');
        },
        Q = function (e) {
          var n = 0,
            t = 0,
            r = 0;
          if (e.startsWith('#')) {
            if (e.length < 7) return !0;
            (n = parseInt(e.substr(1, 2), 16)),
              (t = parseInt(e.substr(3, 2), 16)),
              (r = parseInt(e.substr(5, 2), 16));
          } else {
            var i = e
              .replace('rgb(', '')
              .replace('rgba(', '')
              .replace(')', '')
              .split(',');
            if (i.length < 3) return !0;
            (n = parseInt(i[0], 10)),
              (t = parseInt(i[1], 10)),
              (r = parseInt(i[2], 10));
          }
          return (299 * n + 587 * t + 114 * r) / 1e3 < 128;
        },
        X = 0,
        $ = function () {
          return (+(Date.now().toString(10).substr(0, 4) + X++)).toString(16);
        },
        K = function () {
          return '';
        },
        ee = function () {
          return K;
        },
        en = Object.getOwnPropertyDescriptors({toString: K});
      Object.defineProperties(K, en), Object.defineProperties(ee, en);
      var et = (o = {createTheme: K, css: ee, getCssText: K, keyframes: ee})
          .createTheme,
        er = (o.getCssText, o.keyframes),
        ei = {
          space: Array(11)
            .fill(' ')
            .reduce(function (e, n, t) {
              var r;
              return N(
                N({}, e),
                (((r = {})[t + 1] = ''.concat((t + 1) * 4, 'px')), r)
              );
            }, {}),
          border: {radius: '4px'},
          layout: {height: '300px', headerHeight: '40px'},
          transitions: {default: '150ms ease'},
          zIndices: {base: '1', overlay: '2', top: '3'},
        },
        eo = function (e) {
          var n = Object.entries(e.syntax).reduce(function (e, n) {
            var t,
              r = n[0],
              i = n[1],
              o = (((t = {})['color-'.concat(r)] = i), t);
            return (
              'object' == typeof i &&
                (o = Object.entries(i).reduce(function (e, n) {
                  var t,
                    i = n[0],
                    o = n[1];
                  return N(
                    N({}, e),
                    (((t = {})[''.concat(i, '-').concat(r)] = o), t)
                  );
                }, {})),
              N(N({}, e), o)
            );
          }, {});
          return N(N({}, ei), {colors: e.colors, font: e.font, syntax: n});
        },
        es = function (e) {
          if ((void 0 === e && (e = 'light'), 'string' == typeof e)) {
            var n,
              t,
              r,
              i,
              o,
              s = W[e];
            if (!s)
              throw Error(
                "[sandpack-react]: invalid theme '".concat(e, "' provided.")
              );
            return {
              theme: s,
              id: e,
              mode: Q(s.colors.surface1) ? 'dark' : 'light',
            };
          }
          var a = Q(
              null !==
                (t =
                  null === (n = null == e ? void 0 : e.colors) || void 0 === n
                    ? void 0
                    : n.surface1) && void 0 !== t
                ? t
                : z.colors.surface1
            )
              ? 'dark'
              : 'light',
            c = 'dark' === a ? Y : z,
            l = {
              colors: N(
                N({}, c.colors),
                null !== (r = null == e ? void 0 : e.colors) && void 0 !== r
                  ? r
                  : {}
              ),
              syntax: N(
                N({}, c.syntax),
                null !== (i = null == e ? void 0 : e.syntax) && void 0 !== i
                  ? i
                  : {}
              ),
              font: N(
                N({}, c.font),
                null !== (o = null == e ? void 0 : e.font) && void 0 !== o
                  ? o
                  : {}
              ),
            },
            d = e ? ea(JSON.stringify(l)) : 'default';
          return {theme: l, id: 'sp-'.concat(d), mode: a};
        },
        ea = function (e) {
          for (var n = 0, t = 0; t < e.length; n &= n)
            n = 31 * n + e.charCodeAt(t++);
          return Math.abs(n);
        },
        ec = function () {
          return '';
        };
      ec.toString = ec;
      var el = (0, c.createContext)({}),
        ed = function (e) {
          var n = e.children,
            t = e.classes;
          return (0, a.jsx)(el.Provider, {value: t || {}, children: n});
        },
        eu = function () {
          var e = (0, c.useContext)(el);
          return function (n, t) {
            void 0 === t && (t = []);
            var r = ''.concat('sp', '-').concat(n);
            return ep.apply(void 0, A(A([], t, !1), [r, e[r]], !1));
          };
        },
        ep = function () {
          for (var e = [], n = 0; n < arguments.length; n++)
            e[n] = arguments[n];
          return e.filter(Boolean).join(' ');
        },
        ef = c.createContext({theme: z, id: 'light', mode: 'light'}),
        em = function (e) {
          var n = e.theme,
            t = e.children,
            r = e.className,
            i = S(e, ['theme', 'children', 'className']),
            o = c.useState(n),
            s = o[0],
            l = o[1],
            d = es(s),
            u = d.theme,
            p = d.id,
            f = d.mode,
            m = eu(),
            v = c.useMemo(
              function () {
                return et(p, eo(u));
              },
              [u, p]
            );
          return (
            c.useEffect(
              function () {
                if ('auto' !== n) {
                  l(n);
                  return;
                }
                var e = function (e) {
                  l(e.matches ? 'dark' : 'light');
                };
                return (
                  window
                    .matchMedia('(prefers-color-scheme: dark)')
                    .addEventListener('change', e),
                  function () {
                    window
                      .matchMedia('(prefers-color-scheme: dark)')
                      .removeEventListener('change', e);
                  }
                );
              },
              [n]
            ),
            (0, a.jsx)(ef.Provider, {
              value: {theme: u, id: p, mode: f},
              children: (0, a.jsx)(
                'div',
                N({className: m('wrapper', [v, ec(), r])}, i, {children: t})
              ),
            })
          );
        };
      ef.Consumer;
      var ev = {
          '/styles.css': {
            code: 'body {\n  font-family: sans-serif;\n  -webkit-font-smoothing: auto;\n  -moz-font-smoothing: auto;\n  -moz-osx-font-smoothing: grayscale;\n  font-smoothing: auto;\n  text-rendering: optimizeLegibility;\n  font-smooth: always;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-touch-callout: none;\n}\n\nh1 {\n  font-size: 1.5rem;\n}',
          },
        },
        eh = {
          files: {
            '/src/styles.css': ev['/styles.css'],
            '/src/pages/index.astro': {
              code: '---\nimport "../styles.css";\nconst data = "world";\n---\n\n<h1>Hello {data}</h1>\n\n<style>\n  h1 {\n    font-size: 1.5rem;\n  }\n</style>',
            },
            '.env': {code: 'ASTRO_TELEMETRY_DISABLED="1"'},
            '/package.json': {
              code: JSON.stringify({
                dependencies: {astro: '^1.6.12', 'esbuild-wasm': '^0.15.16'},
                scripts: {
                  dev: 'astro dev',
                  start: 'astro dev',
                  build: 'astro build',
                  preview: 'astro preview',
                  astro: 'astro',
                },
              }),
            },
          },
          main: '/src/pages/index.astro',
          environment: 'node',
        },
        eg = {
          files: N(N({}, ev), {
            '/pages/_app.js': {
              code: "import '../styles.css'\n\nexport default function MyApp({ Component, pageProps }) {\n  return <Component {...pageProps} />\n}",
            },
            '/pages/index.js': {
              code: 'export default function Home({ data }) {\n  return (\n    <div>\n      <h1>Hello {data}</h1>\n    </div>\n  );\n}\n  \nexport function getServerSideProps() {\n  return {\n    props: { data: "world" },\n  }\n}\n',
            },
            '/next.config.js': {
              code: "/** @type {import('next').NextConfig} */\nconst nextConfig = {\n  reactStrictMode: true,\n  swcMinify: true,\n}\n\nmodule.exports = nextConfig\n",
            },
            '/package.json': {
              code: JSON.stringify({
                name: 'my-app',
                version: '0.1.0',
                private: !0,
                scripts: {
                  dev: 'NEXT_TELEMETRY_DISABLED=1 next dev',
                  build: 'next build',
                  start: 'next start',
                  lint: 'next lint',
                },
                dependencies: {
                  next: '12.1.6',
                  react: '18.2.0',
                  'react-dom': '18.2.0',
                  '@next/swc-wasm-nodejs': '12.1.6',
                },
              }),
            },
          }),
          main: '/pages/index.js',
          environment: 'node',
        },
        ex = {
          files: {
            '/index.js': {
              code: "const http = require('http');\n\nconst hostname = '127.0.0.1';\nconst port = 3000;\n\nconst server = http.createServer((req, res) => {\n  res.statusCode = 200;\n  res.setHeader('Content-Type', 'text/html');\n  res.end('Hello world');\n});\n\nserver.listen(port, hostname, () => {\n  console.log(`Server running at http://${hostname}:${port}/`);\n});",
            },
            '/package.json': {
              code: JSON.stringify({
                dependencies: {},
                scripts: {start: 'node index.js'},
                main: 'index.js',
              }),
            },
          },
          main: '/index.js',
          environment: 'node',
        },
        eb = {
          files: N(N({}, ev), {
            '/index.js': {
              code: 'import "./styles.css";\n\ndocument.getElementById("app").innerHTML = `\n<h1>Hello world</h1>\n`;\n',
            },
            '/index.html': {
              code: '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Vite App</title>\n  </head>\n  <body>\n    <div id="app"></div>\n    <script type="module" src="/index.js"></script>\n  </body>\n</html>\n',
            },
            '/package.json': {
              code: JSON.stringify({
                scripts: {
                  dev: 'vite',
                  build: 'vite build',
                  preview: 'vite preview',
                },
                devDependencies: {vite: '4.1.4', 'esbuild-wasm': '0.17.12'},
              }),
            },
          }),
          main: '/index.js',
          environment: 'node',
        },
        ey = {
          files: N(N({}, ev), {
            '/App.jsx': {
              code: 'export default function App() {\n  const data = "world"\n\n  return <h1>Hello {data}</h1>\n}\n',
            },
            '/index.jsx': {
              code: 'import { render } from "preact";\nimport "./styles.css";\n\nimport App from "./App";\n\nconst root = document.getElementById("root");\nrender(<App />, root);\n',
            },
            '/index.html': {
              code: '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Vite App</title>\n  </head>\n  <body>\n    <div id="root"></div>\n    <script type="module" src="/index.jsx"></script>\n  </body>\n</html>\n',
            },
            '/package.json': {
              code: JSON.stringify({
                scripts: {
                  dev: 'vite',
                  build: 'vite build',
                  preview: 'vite preview',
                },
                dependencies: {preact: '^10.16.0'},
                devDependencies: {
                  '@preact/preset-vite': '^2.5.0',
                  vite: '4.1.4',
                  'esbuild-wasm': '0.17.12',
                },
              }),
            },
            '/vite.config.js': {
              code: 'import { defineConfig } from "vite";\nimport preact from \'@preact/preset-vite\'\n\n// https://vitejs.dev/config/\nexport default defineConfig({\n  plugins: [preact()],\n});\n',
            },
          }),
          main: '/App.jsx',
          environment: 'node',
        },
        ej = {
          files: N(N({}, ev), {
            '/App.tsx': {
              code: 'export default function App() {\n  const data: string = "world"\n\n  return <h1>Hello {data}</h1>\n}\n',
            },
            '/index.tsx': {
              code: 'import { render } from "preact";\nimport "./styles.css";\n\nimport App from "./App";\n\nconst root = document.getElementById("root") as HTMLElement;\nrender(<App />, root);\n',
            },
            '/index.html': {
              code: '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Vite App</title>\n  </head>\n  <body>\n    <div id="root"></div>\n    <script type="module" src="/index.tsx"></script>\n  </body>\n</html>\n',
            },
            '/tsconfig.json': {
              code: JSON.stringify(
                {
                  compilerOptions: {
                    target: 'ESNext',
                    useDefineForClassFields: !0,
                    lib: ['DOM', 'DOM.Iterable', 'ESNext'],
                    allowJs: !1,
                    skipLibCheck: !0,
                    esModuleInterop: !1,
                    allowSyntheticDefaultImports: !0,
                    strict: !0,
                    forceConsistentCasingInFileNames: !0,
                    module: 'ESNext',
                    moduleResolution: 'Node',
                    resolveJsonModule: !0,
                    isolatedModules: !0,
                    noEmit: !0,
                    jsx: 'react-jsx',
                    jsxImportSource: 'preact',
                  },
                  include: ['src'],
                  references: [{path: './tsconfig.node.json'}],
                },
                null,
                2
              ),
            },
            '/tsconfig.node.json': {
              code: JSON.stringify(
                {
                  compilerOptions: {
                    composite: !0,
                    module: 'ESNext',
                    moduleResolution: 'Node',
                    allowSyntheticDefaultImports: !0,
                  },
                  include: ['vite.config.ts'],
                },
                null,
                2
              ),
            },
            '/package.json': {
              code: JSON.stringify(
                {
                  scripts: {
                    dev: 'vite',
                    build: 'tsc && vite build',
                    preview: 'vite preview',
                  },
                  dependencies: {preact: '^10.16.0'},
                  devDependencies: {
                    '@preact/preset-vite': '^2.5.0',
                    typescript: '^4.9.5',
                    vite: '4.1.4',
                    'esbuild-wasm': '^0.17.12',
                  },
                },
                null,
                2
              ),
            },
            '/vite-env.d.ts': {code: '/// <reference types="vite/client" />'},
            '/vite.config.ts': {
              code: "import { defineConfig } from 'vite'\nimport preact from '@preact/preset-vite'\n\n// https://vitejs.dev/config/\nexport default defineConfig({\n  plugins: [preact()],\n})\n",
            },
          }),
          main: '/App.tsx',
          environment: 'node',
        },
        ew = {
          files: N(N({}, ev), {
            '/App.jsx': {
              code: 'export default function App() {\n  const data = "world"\n\n  return <h1>Hello {data}</h1>\n}\n',
            },
            '/index.jsx': {
              code: 'import { StrictMode } from "react";\nimport { createRoot } from "react-dom/client";\nimport "./styles.css";\n\nimport App from "./App";\n\nconst root = createRoot(document.getElementById("root"));\nroot.render(\n  <StrictMode>\n    <App />\n  </StrictMode>\n);',
            },
            '/index.html': {
              code: '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Vite App</title>\n  </head>\n  <body>\n    <div id="root"></div>\n    <script type="module" src="/index.jsx"></script>\n  </body>\n</html>\n',
            },
            '/package.json': {
              code: JSON.stringify({
                scripts: {
                  dev: 'vite',
                  build: 'vite build',
                  preview: 'vite preview',
                },
                dependencies: {react: '^18.2.0', 'react-dom': '^18.2.0'},
                devDependencies: {
                  '@vitejs/plugin-react': '3.1.0',
                  vite: '4.1.4',
                  'esbuild-wasm': '0.17.12',
                },
              }),
            },
            '/vite.config.js': {
              code: 'import { defineConfig } from "vite";\nimport react from "@vitejs/plugin-react";\n\n// https://vitejs.dev/config/\nexport default defineConfig({\n  plugins: [react()],\n});\n',
            },
          }),
          main: '/App.jsx',
          environment: 'node',
        },
        eC = {
          files: N(N({}, ev), {
            '/App.tsx': {
              code: 'export default function App() {\n  const data: string = "world"\n\n  return <h1>Hello {data}</h1>\n}\n',
            },
            '/index.tsx': {
              code: 'import { StrictMode } from "react";\nimport { createRoot } from "react-dom/client";\nimport "./styles.css";\n\nimport App from "./App";\nimport React from "react";\n\nconst root = createRoot(document.getElementById("root") as HTMLElement);\nroot.render(\n  <StrictMode>\n    <App />\n  </StrictMode>\n);\n',
            },
            '/index.html': {
              code: '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Vite App</title>\n  </head>\n  <body>\n    <div id="root"></div>\n    <script type="module" src="/index.tsx"></script>\n  </body>\n</html>\n',
            },
            '/tsconfig.json': {
              code: JSON.stringify(
                {
                  compilerOptions: {
                    target: 'ESNext',
                    useDefineForClassFields: !0,
                    lib: ['DOM', 'DOM.Iterable', 'ESNext'],
                    allowJs: !1,
                    skipLibCheck: !0,
                    esModuleInterop: !1,
                    allowSyntheticDefaultImports: !0,
                    strict: !0,
                    forceConsistentCasingInFileNames: !0,
                    module: 'ESNext',
                    moduleResolution: 'Node',
                    resolveJsonModule: !0,
                    isolatedModules: !0,
                    noEmit: !0,
                    jsx: 'react-jsx',
                  },
                  include: ['src'],
                  references: [{path: './tsconfig.node.json'}],
                },
                null,
                2
              ),
            },
            '/tsconfig.node.json': {
              code: JSON.stringify(
                {
                  compilerOptions: {
                    composite: !0,
                    module: 'ESNext',
                    moduleResolution: 'Node',
                    allowSyntheticDefaultImports: !0,
                  },
                  include: ['vite.config.ts'],
                },
                null,
                2
              ),
            },
            '/package.json': {
              code: JSON.stringify(
                {
                  scripts: {
                    dev: 'vite',
                    build: 'tsc && vite build',
                    preview: 'vite preview',
                  },
                  dependencies: {react: '^18.2.0', 'react-dom': '^18.2.0'},
                  devDependencies: {
                    '@types/react': '^18.0.28',
                    '@types/react-dom': '^18.0.11',
                    '@vitejs/plugin-react': '^3.1.0',
                    typescript: '^4.9.5',
                    vite: '4.1.4',
                    'esbuild-wasm': '^0.17.12',
                  },
                },
                null,
                2
              ),
            },
            '/vite-env.d.ts': {code: '/// <reference types="vite/client" />'},
            '/vite.config.ts': {
              code: "import { defineConfig } from 'vite'\nimport react from '@vitejs/plugin-react'\n\n// https://vitejs.dev/config/\nexport default defineConfig({\n  plugins: [react()],\n})\n",
            },
          }),
          main: '/App.tsx',
          environment: 'node',
        },
        ek = {
          files: {
            '/src/styles.css': ev['/styles.css'],
            '/src/App.svelte': {
              code: '<script>\nconst data = "world";\n</script>\n\n<h1>Hello {data}</h1>\n\n<style>\nh1 {\n  font-size: 1.5rem;\n}\n</style>',
            },
            '/src/main.js': {
              code: "import App from './App.svelte'\nimport \"./styles.css\"\n\nconst app = new App({\n  target: document.getElementById('app'),\n})\n\nexport default app",
            },
            '/index.html': {
              code: '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Vite App</title>\n  </head>\n  <body>\n    <div id="app"></div>\n    <script type="module" src="/src/main.js"></script>\n  </body>\n</html>\n',
            },
            '/vite.config.js': {
              code: "import { defineConfig } from 'vite'\nimport { svelte } from '@sveltejs/vite-plugin-svelte'\n\n// https://vitejs.dev/config/\nexport default defineConfig({\n  plugins: [svelte()],\n})",
            },
            '/package.json': {
              code: JSON.stringify({
                type: 'module',
                scripts: {dev: 'vite'},
                devDependencies: {
                  '@sveltejs/vite-plugin-svelte': '^2.0.2',
                  svelte: '^3.55.1',
                  vite: '4.0.4',
                  'esbuild-wasm': '^0.17.12',
                },
              }),
            },
          },
          main: '/src/App.svelte',
          environment: 'node',
        },
        eN = {
          files: {
            '/src/styles.css': ev['/styles.css'],
            '/src/App.svelte': {
              code: '<script lang="ts">\nconst data: string = "world";\n</script>\n\n<h1>Hello {data}</h1>\n\n<style>\nh1 {\n  font-size: 1.5rem;\n}\n</style>',
            },
            '/src/main.ts': {
              code: "import App from './App.svelte'\nimport \"./styles.css\"\n\nconst app = new App({\n  target: document.getElementById('app'),\n})\n\nexport default app",
            },
            '/index.html': {
              code: '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Vite App</title>\n  </head>\n  <body>\n    <div id="app"></div>\n    <script type="module" src="/src/main.ts"></script>\n  </body>\n</html>\n',
            },
            '/vite-env.d.ts': {
              code: '/// <reference types="svelte" />\n/// <reference types="vite/client" />',
            },
            'svelte.config.js': {
              code: "import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'\n\nexport default {\n  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess\n  // for more information about preprocessors\n  preprocess: vitePreprocess(),\n}\n",
            },
            '/vite.config.ts': {
              code: "import { defineConfig } from 'vite'\nimport { svelte } from '@sveltejs/vite-plugin-svelte'\n\n// https://vitejs.dev/config/\nexport default defineConfig({\n  plugins: [svelte()],\n})",
            },
            'tsconfig.json': {
              code: JSON.stringify(
                {
                  extends: '@tsconfig/svelte/tsconfig.json',
                  compilerOptions: {
                    target: 'ESNext',
                    useDefineForClassFields: !0,
                    module: 'ESNext',
                    resolveJsonModule: !0,
                    allowJs: !0,
                    checkJs: !0,
                    isolatedModules: !0,
                  },
                  include: [
                    'src/**/*.d.ts',
                    'src/**/*.ts',
                    'src/**/*.js',
                    'src/**/*.svelte',
                  ],
                  references: [{path: './tsconfig.node.json'}],
                },
                null,
                2
              ),
            },
            'tsconfig.node.json': {
              code: JSON.stringify(
                {
                  compilerOptions: {
                    composite: !0,
                    module: 'ESNext',
                    moduleResolution: 'Node',
                  },
                  include: ['vite.config.ts'],
                },
                null,
                2
              ),
            },
            '/package.json': {
              code: JSON.stringify(
                {
                  type: 'module',
                  scripts: {dev: 'vite'},
                  devDependencies: {
                    '@sveltejs/vite-plugin-svelte': '^2.0.2',
                    '@tsconfig/svelte': '^3.0.0',
                    svelte: '^3.55.1',
                    'svelte-check': '^2.10.3',
                    tslib: '^2.5.0',
                    vite: '4.1.4',
                    'esbuild-wasm': '^0.17.12',
                  },
                },
                null,
                2
              ),
            },
          },
          main: '/src/App.svelte',
          environment: 'node',
        },
        eS = {
          files: {
            '/src/styles.css': ev['/styles.css'],
            '/src/App.vue': {
              code: '<script setup>\nimport { ref } from "vue";\n\nconst data = ref("world");\n</script>\n\n<template>\n  <h1>Hello {{ data }}</h1>\n</template>\n\n<style>\nh1 {\n  font-size: 1.5rem;\n}\n</style>',
            },
            '/src/main.js': {
              code: "import { createApp } from 'vue'\nimport App from './App.vue'\nimport \"./styles.css\"\n            \ncreateApp(App).mount('#app')            \n",
            },
            '/index.html': {
              code: '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Vite App</title>\n  </head>\n  <body>\n    <div id="app"></div>\n    <script type="module" src="/src/main.js"></script>\n  </body>\n</html>\n',
            },
            '/vite.config.js': {
              code: "import { defineConfig } from 'vite'\nimport vue from '@vitejs/plugin-vue'\n\n// https://vitejs.dev/config/\nexport default defineConfig({\n  plugins: [vue()]\n})\n",
            },
            '/package.json': {
              code: JSON.stringify({
                scripts: {
                  dev: 'vite',
                  build: 'vite build',
                  preview: 'vite preview',
                },
                dependencies: {vue: '^3.2.45'},
                devDependencies: {
                  '@vitejs/plugin-vue': '3.2.0',
                  vite: '4.1.4',
                  'esbuild-wasm': '0.17.12',
                },
              }),
            },
          },
          main: '/src/App.vue',
          environment: 'node',
        },
        eO = {
          files: {
            '/src/styles.css': ev['/styles.css'],
            '/src/App.vue': {
              code: '<script setup lang="ts">\nimport { ref } from "vue";\n\nconst data = ref<string>("world");\n</script>\n\n<template>\n  <h1>Hello {{ data }}</h1>\n</template>\n\n<style>\nh1 {\n  font-size: 1.5rem;\n}\n</style>',
            },
            '/src/main.ts': {
              code: "import { createApp } from 'vue'\nimport App from './App.vue'\nimport \"./styles.css\"\n\ncreateApp(App).mount('#app')\n",
            },
            '/index.html': {
              code: '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>Vite App</title>\n  </head>\n  <body>\n    <div id="app"></div>\n    <script type="module" src="/src/main.ts"></script>\n  </body>\n</html>\n',
            },
            '/vite-env.d.ts': {code: '/// <reference types="vite/client" />'},
            '/vite.config.ts': {
              code: "import { defineConfig } from 'vite'\nimport vue from '@vitejs/plugin-vue'\n\n// https://vitejs.dev/config/\nexport default defineConfig({\n  plugins: [vue()]\n})\n",
            },
            'tsconfig.json': {
              code: JSON.stringify(
                {
                  compilerOptions: {
                    target: 'ESNext',
                    useDefineForClassFields: !0,
                    module: 'ESNext',
                    moduleResolution: 'Node',
                    strict: !0,
                    jsx: 'preserve',
                    resolveJsonModule: !0,
                    isolatedModules: !0,
                    esModuleInterop: !0,
                    lib: ['ESNext', 'DOM'],
                    skipLibCheck: !0,
                    noEmit: !0,
                  },
                  include: [
                    'src/**/*.ts',
                    'src/**/*.d.ts',
                    'src/**/*.tsx',
                    'src/**/*.vue',
                  ],
                  references: [{path: './tsconfig.node.json'}],
                },
                null,
                2
              ),
            },
            'tsconfig.node.json': {
              code: JSON.stringify(
                {
                  compilerOptions: {
                    composite: !0,
                    module: 'ESNext',
                    moduleResolution: 'Node',
                    allowSyntheticDefaultImports: !0,
                  },
                  include: ['vite.config.ts'],
                },
                null,
                2
              ),
            },
            '/package.json': {
              code: JSON.stringify(
                {
                  scripts: {
                    dev: 'vite',
                    build: 'tsc && vite build',
                    preview: 'vite preview',
                  },
                  dependencies: {vue: '^3.2.47'},
                  devDependencies: {
                    '@vitejs/plugin-vue': '^4.0.0',
                    vite: '4.1.4',
                    'vue-tsc': '^1.2.0',
                    typescript: '^4.9.5',
                    'esbuild-wasm': '^0.17.12',
                  },
                },
                null,
                2
              ),
            },
          },
          main: '/src/App.vue',
          environment: 'node',
        },
        eE = {
          files: {
            '/src/app/app.component.css': ev['/styles.css'],
            '/src/app/app.component.html': {
              code: '<div>\n<h1>{{ helloWorld }}</h1>\n</div>     \n',
            },
            '/src/app/app.component.ts': {
              code: 'import { Component } from "@angular/core";\n\n@Component({\n  selector: "app-root",\n  templateUrl: "./app.component.html",\n  styleUrls: ["./app.component.css"]\n})\nexport class AppComponent {\n  helloWorld = "Hello world";\n}           \n',
            },
            '/src/app/app.module.ts': {
              code: 'import { BrowserModule } from "@angular/platform-browser";\nimport { NgModule } from "@angular/core";\n      \nimport { AppComponent } from "./app.component";\n      \n@NgModule({\n  declarations: [AppComponent],\n  imports: [BrowserModule],\n  providers: [],\n  bootstrap: [AppComponent]\n})\nexport class AppModule {}       \n',
            },
            '/src/index.html': {
              code: '<!doctype html>\n<html lang="en">\n      \n<head>\n  <meta charset="utf-8">\n  <title>Angular</title>\n  <base href="/">\n      \n  <meta name="viewport" content="width=device-width, initial-scale=1">\n  <link rel="icon" type="image/x-icon" href="favicon.ico">\n</head>\n      \n<body>\n   <app-root></app-root>\n</body>\n      \n</html>\n',
            },
            '/src/main.ts': {
              code: 'import { enableProdMode } from "@angular/core";\nimport { platformBrowserDynamic } from "@angular/platform-browser-dynamic";\n      \nimport { AppModule } from "./app/app.module";      \n\nplatformBrowserDynamic()\n  .bootstrapModule(AppModule)\n  .catch(err => console.log(err));\n      \n',
            },
            '/src/polyfills.ts': {
              code: 'import "core-js/proposals/reflect-metadata";   \n      import "zone.js/dist/zone";\n',
            },
            '/package.json': {
              code: JSON.stringify({
                dependencies: {
                  '@angular/core': '^11.2.0',
                  '@angular/platform-browser': '^11.2.0',
                  '@angular/platform-browser-dynamic': '^11.2.0',
                  '@angular/common': '^11.2.0',
                  '@angular/compiler': '^11.2.0',
                  'zone.js': '0.11.3',
                  'core-js': '3.8.3',
                  rxjs: '6.6.3',
                },
                main: '/src/main.ts',
              }),
            },
          },
          main: '/src/app/app.component.ts',
          environment: 'angular-cli',
        },
        eA = {
          files: N(N({}, ev), {
            '/App.js': {
              code: 'export default function App() {\n  return <h1>Hello world</h1>\n}\n',
            },
            '/index.js': {
              code: 'import React, { StrictMode } from "react";\nimport { createRoot } from "react-dom/client";\nimport "./styles.css";\n\nimport App from "./App";\n\nconst root = createRoot(document.getElementById("root"));\nroot.render(\n  <StrictMode>\n    <App />\n  </StrictMode>\n);',
            },
            '/public/index.html': {
              code: '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Document</title>\n  </head>\n  <body>\n    <div id="root"></div>\n  </body>\n</html>',
            },
            '/package.json': {
              code: JSON.stringify({
                dependencies: {
                  react: '^18.0.0',
                  'react-dom': '^18.0.0',
                  'react-scripts': '^5.0.0',
                },
                main: '/index.js',
              }),
            },
          }),
          main: '/App.js',
          environment: 'create-react-app',
        },
        eM = {
          files: N(N({}, ev), {
            'tsconfig.json': {
              code: '{\n  "include": [\n    "./**/*"\n  ],\n  "compilerOptions": {\n    "strict": true,\n    "esModuleInterop": true,\n    "lib": [ "dom", "es2015" ],\n    "jsx": "react-jsx"\n  }\n}',
            },
            '/App.tsx': {
              code: 'export default function App(): JSX.Element {\n  return <h1>Hello world</h1>\n}\n',
            },
            '/index.tsx': {
              code: 'import React, { StrictMode } from "react";\nimport { createRoot } from "react-dom/client";\nimport "./styles.css";\n\nimport App from "./App";\n\nconst root = createRoot(document.getElementById("root"));\nroot.render(\n  <StrictMode>\n    <App />\n  </StrictMode>\n);',
            },
            '/public/index.html': {
              code: '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Document</title>\n  </head>\n  <body>\n    <div id="root"></div>\n  </body>\n</html>',
            },
            '/package.json': {
              code: JSON.stringify({
                dependencies: {
                  react: '^18.0.0',
                  'react-dom': '^18.0.0',
                  'react-scripts': '^4.0.0',
                },
                devDependencies: {
                  '@types/react': '^18.0.0',
                  '@types/react-dom': '^18.0.0',
                  typescript: '^4.0.0',
                },
                main: '/index.tsx',
              }),
            },
          }),
          main: '/App.tsx',
          environment: 'create-react-app',
        },
        eL = {
          files: N(N({}, ev), {
            '/App.tsx': {
              code: 'import { Component } from "solid-js";\n\nconst App: Component = () => {\n  return <h1>Hello world</h1>\n};\n\nexport default App;',
            },
            '/index.tsx': {
              code: 'import { render } from "solid-js/web";\nimport App from "./App";\n\nimport "./styles.css";\n\nrender(() => <App />, document.getElementById("app"));',
            },
            '/index.html': {
              code: '<html>\n<head>\n  <title>Parcel Sandbox</title>\n  <meta charset="UTF-8" />\n</head>\n<body>\n  <div id="app"></div>\n  <script src="src/index.tsx"></script>\n</body>\n</html>',
            },
            '/package.json': {
              code: JSON.stringify({
                dependencies: {'solid-js': '1.3.15'},
                main: '/index.tsx',
              }),
            },
          }),
          main: '/App.tsx',
          environment: 'solid',
        },
        eF = {
          files: N(N({}, ev), {
            '/App.svelte': {
              code: "<style>\n  h1 {\n    font-size: 1.5rem;\n  }\n</style>\n\n<script>\n  let name = 'world';\n</script>\n\n<main>\n  <h1>Hello {name}</h1>\n</main>",
            },
            '/index.js': {
              code: 'import App from "./App.svelte";\nimport "./styles.css";\n\nconst app = new App({\n  target: document.body\n});\n\nexport default app;\n      ',
            },
            '/public/index.html': {
              code: '<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="utf8" />\n    <meta name="viewport" content="width=device-width" />\n\n    <title>Svelte app</title>\n\n    <link rel="stylesheet" href="public/bundle.css" />\n  </head>\n\n  <body>\n    <script src="bundle.js"></script>\n  </body>\n</html>',
            },
            '/package.json': {
              code: JSON.stringify({
                dependencies: {svelte: '^3.0.0'},
                main: '/index.js',
              }),
            },
          }),
          main: '/App.svelte',
          environment: 'svelte',
        },
        eR = {
          files: {
            'tsconfig.json': {
              code: '{\n  "include": [\n    "./**/*"\n  ],\n  "compilerOptions": {\n    "strict": true,\n    "esModuleInterop": true,\n    "lib": [ "dom", "es2015" ],\n    "jsx": "react-jsx"\n  }\n}',
            },
            '/add.ts': {
              code: 'export const add = (a: number, b: number): number => a + b;',
            },
            '/add.test.ts': {
              code: "import { add } from './add';\n\ndescribe('add', () => {\n  test('Commutative Law of Addition', () => {\n    expect(add(1, 2)).toBe(add(2, 1));\n  });\n});",
            },
            'package.json': {
              code: JSON.stringify({
                dependencies: {},
                devDependencies: {typescript: '^4.0.0'},
                main: '/add.ts',
              }),
            },
          },
          main: '/add.test.ts',
          environment: 'parcel',
          mode: 'tests',
        },
        eI = {
          files: N(N({}, ev), {
            '/index.js': {
              code: 'import "./styles.css";\n\ndocument.getElementById("app").innerHTML = `\n<h1>Hello world</h1>\n`;\n',
            },
            '/index.html': {
              code: '<!DOCTYPE html>\n<html>\n\n<head>\n  <title>Parcel Sandbox</title>\n  <meta charset="UTF-8" />\n</head>\n\n<body>\n  <div id="app"></div>\n\n  <script src="index.js">\n  </script>\n</body>\n\n</html>',
            },
            '/package.json': {
              code: JSON.stringify({dependencies: {}, main: '/index.js'}),
            },
          }),
          main: '/index.js',
          environment: 'parcel',
        },
        eD = {
          files: N(N({}, ev), {
            'tsconfig.json': {
              code: '{\n  "compilerOptions": {\n    "strict": true,\n    "module": "commonjs",\n    "jsx": "preserve",\n    "esModuleInterop": true,\n    "sourceMap": true,\n    "allowJs": true,\n    "lib": [\n      "es6",\n      "dom"\n    ],\n    "rootDir": "src",\n    "moduleResolution": "node"\n  }\n}',
            },
            '/index.ts': {
              code: 'import "./styles.css";\n\ndocument.getElementById("app").innerHTML = `\n<h1>Hello world</h1>\n`;\n',
            },
            '/index.html': {
              code: '<!DOCTYPE html>\n<html>\n\n<head>\n  <title>Parcel Sandbox</title>\n  <meta charset="UTF-8" />\n</head>\n\n<body>\n  <div id="app"></div>\n\n  <script src="index.ts">\n  </script>\n</body>\n\n</html>',
            },
            '/package.json': {
              code: JSON.stringify({
                dependencies: {},
                devDependencies: {typescript: '^4.0.0'},
                main: '/index.ts',
              }),
            },
          }),
          main: '/index.ts',
          environment: 'parcel',
        },
        eT = {
          files: {
            '/src/styles.css': ev['/styles.css'],
            '/src/App.vue': {
              code: "<template>\n  <h1>Hello {{ msg }}</h1>\n</template>\n\n<script setup>\nimport { ref } from 'vue';\nconst msg = ref('world');\n</script>",
            },
            '/src/main.js': {
              code: "import { createApp } from 'vue'\nimport App from './App.vue'\nimport \"./styles.css\";\n\ncreateApp(App).mount('#app')\n",
            },
            '/public/index.html': {
              code: '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8" />\n    <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n    <meta name="viewport" content="width=device-width,initial-scale=1.0" />\n    <title>codesandbox</title>\n  </head>\n  <body>\n    <noscript>\n      <strong\n        >We\'re sorry but codesandbox doesn\'t work properly without JavaScript\n        enabled. Please enable it to continue.</strong\n      >\n    </noscript>\n    <div id="app"></div>\n    <!-- built files will be auto injected -->\n  </body>\n</html>\n',
            },
            '/package.json': {
              code: JSON.stringify({
                name: 'vue3',
                version: '0.1.0',
                private: !0,
                main: '/src/main.js',
                scripts: {
                  serve: 'vue-cli-service serve',
                  build: 'vue-cli-service build',
                },
                dependencies: {'core-js': '^3.26.1', vue: '^3.2.45'},
                devDependencies: {
                  '@vue/cli-plugin-babel': '^5.0.8',
                  '@vue/cli-service': '^5.0.8',
                },
              }),
            },
          },
          main: '/src/App.vue',
          environment: 'vue-cli',
        },
        eH = {
          files: {
            '/src/styles.css': ev['/styles.css'],
            '/src/App.vue': {
              code: "<template>\n  <h1>Hello {{ msg }}</h1>\n</template>\n\n<script setup lang=\"ts\">\nimport { ref } from 'vue';\nconst msg = ref<string>('world');\n</script>",
            },
            '/src/main.ts': {
              code: "import { createApp } from 'vue'\nimport App from './App.vue'\nimport \"./styles.css\";\n\ncreateApp(App).mount('#app')\n",
            },
            '/src/shims-vue.d.ts':
              '/* eslint-disable */\ndeclare module "*.vue" {\n  import type { DefineComponent } from "vue";\n  const component: DefineComponent<{}, {}, any>;\n  export default component;\n}',
            '/public/index.html': {
              code: '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8" />\n    <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n    <meta name="viewport" content="width=device-width,initial-scale=1.0" />\n    <title>codesandbox</title>\n  </head>\n  <body>\n    <noscript>\n      <strong\n        >We\'re sorry but codesandbox doesn\'t work properly without JavaScript\n        enabled. Please enable it to continue.</strong\n      >\n    </noscript>\n    <div id="app"></div>\n    <!-- built files will be auto injected -->\n  </body>\n</html>\n',
            },
            '/package.json': {
              code: JSON.stringify({
                name: 'vue3-ts',
                version: '0.1.0',
                private: !0,
                main: '/src/main.ts',
                scripts: {
                  serve: 'vue-cli-service serve',
                  build: 'vue-cli-service build',
                },
                dependencies: {'core-js': '^3.26.1', vue: '^3.2.45'},
                devDependencies: {
                  '@vue/cli-plugin-babel': '^5.0.8',
                  '@vue/cli-plugin-typescript': '^5.0.8',
                  '@vue/cli-service': '^5.0.8',
                  typescript: '^4.9.3',
                },
              }),
            },
            '/tsconfig.json': {
              code: JSON.stringify({
                compilerOptions: {
                  target: 'esnext',
                  module: 'esnext',
                  strict: !0,
                  jsx: 'preserve',
                  moduleResolution: 'node',
                  experimentalDecorators: !0,
                  skipLibCheck: !0,
                  esModuleInterop: !0,
                  allowSyntheticDefaultImports: !0,
                  forceConsistentCasingInFileNames: !0,
                  useDefineForClassFields: !0,
                  sourceMap: !1,
                  baseUrl: '.',
                  types: ['webpack-env'],
                  paths: {'@/*': ['src/*']},
                  lib: ['esnext', 'dom', 'dom.iterable', 'scripthost'],
                },
                include: [
                  'src/**/*.ts',
                  'src/**/*.tsx',
                  'src/**/*.vue',
                  'tests/**/*.ts',
                  'tests/**/*.tsx',
                ],
                exclude: ['node_modules'],
              }),
            },
          },
          main: '/src/App.vue',
          environment: 'vue-cli',
        },
        eP = {
          static: {
            files: N(N({}, ev), {
              '/index.html': {
                code: '<!DOCTYPE html>\n<html>\n\n<head>\n  <title>Parcel Sandbox</title>\n  <meta charset="UTF-8" />\n  <link rel="stylesheet" href="/styles.css" />\n</head>\n\n<body>\n  <h1>Hello world</h1>\n</body>\n\n</html>',
              },
              '/package.json': {
                code: JSON.stringify({dependencies: {}, main: '/index.html'}),
              },
            }),
            main: '/index.html',
            environment: 'static',
          },
          angular: eE,
          react: eA,
          'react-ts': eM,
          solid: eL,
          svelte: eF,
          'test-ts': eR,
          'vanilla-ts': eD,
          vanilla: eI,
          vue: eT,
          'vue-ts': eH,
          node: ex,
          nextjs: eg,
          vite: eb,
          'vite-react': ew,
          'vite-react-ts': eC,
          'vite-preact': ey,
          'vite-preact-ts': ej,
          'vite-vue': eS,
          'vite-vue-ts': eO,
          'vite-svelte': ek,
          'vite-svelte-ts': eN,
          astro: eh,
        },
        eJ = function (e) {
          var n,
            t,
            r,
            i,
            o,
            s,
            a = (0, d.f)(e.files),
            c = eU({
              template: e.template,
              customSetup: e.customSetup,
              files: a,
            }),
            l = (0, d.f)(
              null !==
                (t =
                  null === (n = e.options) || void 0 === n
                    ? void 0
                    : n.visibleFiles) && void 0 !== t
                ? t
                : []
            ),
            u = (
              null === (r = e.options) || void 0 === r ? void 0 : r.activeFile
            )
              ? eB(
                  null === (i = e.options) || void 0 === i
                    ? void 0
                    : i.activeFile,
                  c.files
                )
              : void 0;
          0 === l.length &&
            a &&
            Object.keys(a).forEach(function (e) {
              var n = a[e];
              if ('string' == typeof n) {
                l.push(e);
                return;
              }
              !u && n.active && ((u = e), !0 === n.hidden && l.push(e)),
                n.hidden || l.push(e);
            }),
            0 === l.length && (l = [c.main]),
            c.entry && !c.files[c.entry] && (c.entry = eB(c.entry, c.files)),
            !u && c.main && (u = c.main),
            (u && c.files[u]) || (u = l[0]),
            l.includes(u) || l.push(u);
          var p = (0, d.d)(
            c.files,
            null !== (o = c.dependencies) && void 0 !== o ? o : {},
            null !== (s = c.devDependencies) && void 0 !== s ? s : {},
            c.entry
          );
          return {
            visibleFiles: l.filter(function (e) {
              return p[e];
            }),
            activeFile: u,
            files: p,
            environment: c.environment,
            shouldUpdatePreview: !0,
          };
        },
        eB = function (e, n) {
          var t = (0, d.f)(n),
            r = (0, d.f)(e);
          if (r in t) return r;
          if (!e) return null;
          for (
            var i = null, o = 0, s = ['.js', '.jsx', '.ts', '.tsx'];
            !i && o < s.length;

          ) {
            var a = r.split('.')[0],
              c = ''.concat(a).concat(s[o]);
            void 0 !== t[c] && (i = c), o++;
          }
          return i;
        },
        eU = function (e) {
          var n = e.files,
            t = e.template,
            r = e.customSetup;
          if (!t) {
            if (!r) {
              var i = eP.vanilla;
              return N(N({}, i), {files: N(N({}, i.files), eZ(n))});
            }
            if (!n || 0 === Object.keys(n).length)
              throw Error(
                '[sandpack-react]: without a template, you must pass at least one file'
              );
            return N(N({}, r), {files: eZ(n)});
          }
          var o = eP[t];
          if (!o)
            throw Error(
              '[sandpack-react]: invalid template "'.concat(t, '" provided')
            );
          return r || n
            ? {
                files: eZ(N(N({}, o.files), n)),
                dependencies: N(
                  N({}, o.dependencies),
                  null == r ? void 0 : r.dependencies
                ),
                devDependencies: N(
                  N({}, o.devDependencies),
                  null == r ? void 0 : r.devDependencies
                ),
                entry: (0, d.f)(null == r ? void 0 : r.entry),
                main: o.main,
                environment:
                  (null == r ? void 0 : r.environment) || o.environment,
              }
            : o;
        },
        eZ = function (e) {
          return e
            ? Object.keys(e).reduce(function (n, t) {
                return (
                  'string' == typeof e[t]
                    ? (n[t] = {code: e[t]})
                    : (n[t] = e[t]),
                  n
                );
              }, {})
            : {};
        },
        eV = function (e, n) {
          var t = (0, c.useState)({editorState: 'pristine', teamId: e.teamId}),
            r = t[0],
            i = t[1],
            o = eJ(e),
            s = (0, l.J)(o.files, n) ? 'pristine' : 'dirty';
          return (
            s !== r.editorState &&
              i(function (e) {
                return N(N({}, e), {editorState: s});
              }),
            r
          );
        },
        e_ = function (e, n) {
          var t,
            r,
            i,
            o = e.options,
            s = e.customSetup,
            a = e.teamId,
            l = e.sandboxId;
          null != o || (o = {}), null != s || (s = {});
          var p = (null == o ? void 0 : o.initMode) || 'lazy',
            f = (0, c.useState)({
              startRoute: null == o ? void 0 : o.startRoute,
              bundlerState: void 0,
              error: null,
              initMode: p,
              reactDevTools: void 0,
              status:
                null === (t = null == o ? void 0 : o.autorun) ||
                void 0 === t ||
                t
                  ? 'initial'
                  : 'idle',
            }),
            m = f[0],
            v = f[1],
            h = (0, c.useRef)(),
            g = (0, c.useRef)(null),
            x = (0, c.useRef)(null),
            b = (0, c.useRef)({}),
            y = (0, c.useRef)({}),
            j = (0, c.useRef)(null),
            w = (0, c.useRef)({}),
            C = (0, c.useRef)(),
            k = (0, c.useRef)({global: {}}),
            S = (0, c.useRef)(),
            A = (0, c.useRef)(n.environment),
            M = (0, c.useCallback)(
              function (e, t, r) {
                return O(void 0, void 0, void 0, function () {
                  var i, c, d, p, f;
                  return E(this, function (h) {
                    switch (h.label) {
                      case 0:
                        return (
                          y.current[t] && y.current[t].destroy(),
                          null != o || (o = {}),
                          null != s || (s = {}),
                          (i =
                            null !==
                              (d = null == o ? void 0 : o.bundlerTimeOut) &&
                            void 0 !== d
                              ? d
                              : 4e4),
                          j.current && clearTimeout(j.current),
                          'function' != typeof C.current &&
                            (j.current = setTimeout(function () {
                              L(),
                                v(function (e) {
                                  return N(N({}, e), {status: 'timeout'});
                                });
                            }, i)),
                          [
                            4,
                            (0, u.sF)(
                              e,
                              {files: n.files, template: n.environment},
                              {
                                externalResources: o.externalResources,
                                bundlerURL: o.bundlerURL,
                                startRoute:
                                  null !==
                                    (p = null == r ? void 0 : r.startRoute) &&
                                  void 0 !== p
                                    ? p
                                    : o.startRoute,
                                fileResolver: o.fileResolver,
                                skipEval:
                                  null !== (f = o.skipEval) &&
                                  void 0 !== f &&
                                  f,
                                logLevel: o.logLevel,
                                showOpenInCodeSandbox: !1,
                                showErrorScreen: !0,
                                showLoadingScreen: !1,
                                reactDevTools: m.reactDevTools,
                                customNpmRegistries:
                                  null == s ? void 0 : s.npmRegistries,
                                teamId: a,
                                sandboxId: l,
                              }
                            ),
                          ]
                        );
                      case 1:
                        return (
                          (c = h.sent()),
                          'function' != typeof C.current &&
                            (C.current = c.listen(T)),
                          (w.current[t] = w.current[t] || {}),
                          k.current[t] &&
                            (Object.keys(k.current[t]).forEach(function (e) {
                              var n = k.current[t][e],
                                r = c.listen(n);
                              w.current[t][e] = r;
                            }),
                            (k.current[t] = {})),
                          Object.entries(k.current.global).forEach(function (
                            e
                          ) {
                            var n = e[0],
                              r = e[1],
                              i = c.listen(r);
                            w.current[t][n] = i;
                          }),
                          (y.current[t] = c),
                          [2]
                        );
                    }
                  });
                });
              },
              [n.environment, n.files, m.reactDevTools]
            ),
            L = (0, c.useCallback)(function () {
              Object.keys(y.current).map(D),
                'function' == typeof C.current &&
                  (C.current(), (C.current = void 0));
            }, []),
            F = (0, c.useCallback)(
              function () {
                return O(void 0, void 0, void 0, function () {
                  return E(this, function (e) {
                    switch (e.label) {
                      case 0:
                        return [
                          4,
                          Promise.all(
                            Object.entries(b.current).map(function (e) {
                              var n = e[0],
                                t = e[1],
                                r = t.iframe,
                                i = t.clientPropsOverride,
                                o = void 0 === i ? {} : i;
                              return O(void 0, void 0, void 0, function () {
                                return E(this, function (e) {
                                  switch (e.label) {
                                    case 0:
                                      return [4, M(r, n, o)];
                                    case 1:
                                      return e.sent(), [2];
                                  }
                                });
                              });
                            })
                          ),
                        ];
                      case 1:
                        return (
                          e.sent(),
                          v(function (e) {
                            return N(N({}, e), {
                              error: null,
                              status: 'running',
                            });
                          }),
                          [2]
                        );
                    }
                  });
                });
              },
              [M]
            );
          h.current = function (e) {
            e.some(function (e) {
              return e.isIntersecting;
            })
              ? F()
              : L();
          };
          var R = (0, c.useCallback)(
              function () {
                if (
                  null === (e = null == o ? void 0 : o.autorun) ||
                  void 0 === e ||
                  e
                ) {
                  var e,
                    n,
                    t,
                    r =
                      null !==
                        (n = null == o ? void 0 : o.initModeObserverOptions) &&
                      void 0 !== n
                        ? n
                        : {rootMargin: '1000px 0px'};
                  g.current &&
                    x.current &&
                    (null === (t = g.current) ||
                      void 0 === t ||
                      t.unobserve(x.current)),
                    x.current && 'lazy' === m.initMode
                      ? ((g.current = new IntersectionObserver(function (e) {
                          var n, t;
                          e.some(function (e) {
                            return e.isIntersecting;
                          }) &&
                            e.some(function (e) {
                              return e.isIntersecting;
                            }) &&
                            x.current &&
                            (null === (n = h.current) ||
                              void 0 === n ||
                              n.call(h, e),
                            null === (t = g.current) ||
                              void 0 === t ||
                              t.unobserve(x.current));
                        }, r)),
                        g.current.observe(x.current))
                      : x.current && 'user-visible' === m.initMode
                      ? ((g.current = new IntersectionObserver(function (e) {
                          var n;
                          null === (n = h.current) ||
                            void 0 === n ||
                            n.call(h, e);
                        }, r)),
                        g.current.observe(x.current))
                      : F();
                }
              },
              [
                null == o ? void 0 : o.autorun,
                null == o ? void 0 : o.initModeObserverOptions,
                F,
                m.initMode,
                L,
              ]
            ),
            I = (0, c.useCallback)(
              function (e, n, t) {
                return O(void 0, void 0, void 0, function () {
                  return E(this, function (r) {
                    switch (r.label) {
                      case 0:
                        if (
                          ((b.current[n] = {iframe: e, clientPropsOverride: t}),
                          'running' !== m.status)
                        )
                          return [3, 2];
                        return [4, M(e, n, t)];
                      case 1:
                        r.sent(), (r.label = 2);
                      case 2:
                        return [2];
                    }
                  });
                });
              },
              [M, m.status]
            ),
            D = function (e) {
              var n,
                t,
                r = y.current[e];
              r
                ? (r.destroy(),
                  null === (n = r.iframe.contentWindow) ||
                    void 0 === n ||
                    n.location.replace('about:blank'),
                  r.iframe.removeAttribute('src'),
                  delete y.current[e])
                : delete b.current[e],
                j.current && clearTimeout(j.current),
                Object.values(
                  null !== (t = w.current[e]) && void 0 !== t ? t : {}
                ).forEach(function (e) {
                  Object.values(e).forEach(function (e) {
                    return e();
                  });
                });
              var i = Object.keys(y.current).length > 0 ? 'running' : 'idle';
              v(function (e) {
                return N(N({}, e), {status: i});
              });
            },
            T = function (e) {
              'start' === e.type
                ? v(function (e) {
                    return N(N({}, e), {error: null});
                  })
                : 'state' === e.type
                ? v(function (n) {
                    return N(N({}, n), {bundlerState: e.state});
                  })
                : ('done' !== e.type || e.compilatonError) &&
                  'connected' !== e.type
                ? 'action' === e.type && 'show-error' === e.action
                  ? (j.current && clearTimeout(j.current),
                    v(function (n) {
                      return N(N({}, n), {error: (0, d.e)(e)});
                    }))
                  : 'action' === e.type &&
                    'notification' === e.action &&
                    'error' === e.notificationType &&
                    v(function (n) {
                      return N(N({}, n), {error: {message: e.title}});
                    })
                : (j.current && clearTimeout(j.current),
                  v(function (e) {
                    return N(N({}, e), {error: null});
                  }));
            },
            H =
              null !== (r = null == o ? void 0 : o.recompileMode) &&
              void 0 !== r
                ? r
                : 'delayed',
            P =
              null !== (i = null == o ? void 0 : o.recompileDelay) &&
              void 0 !== i
                ? i
                : 200;
          return (
            (0, c.useEffect)(
              function () {
                if ('running' === m.status && n.shouldUpdatePreview) {
                  if (
                    (A.current !== n.environment &&
                      ((A.current = n.environment),
                      Object.entries(y.current).forEach(function (e) {
                        var n = e[0];
                        I(e[1].iframe, n);
                      })),
                    'immediate' === H &&
                      Object.values(y.current).forEach(function (e) {
                        'done' === e.status &&
                          e.updateSandbox({
                            files: n.files,
                            template: n.environment,
                          });
                      }),
                    'delayed' === H)
                  ) {
                    if ('undefined' == typeof window) return;
                    window.clearTimeout(S.current),
                      (S.current = window.setTimeout(function () {
                        Object.values(y.current).forEach(function (e) {
                          'done' === e.status &&
                            e.updateSandbox({
                              files: n.files,
                              template: n.environment,
                            });
                        });
                      }, P));
                  }
                  return function () {
                    window.clearTimeout(S.current);
                  };
                }
              },
              [n.files, n.environment, n.shouldUpdatePreview, P, H, I, m.status]
            ),
            (0, c.useEffect)(
              function () {
                p !== m.initMode &&
                  (v(function (e) {
                    return N(N({}, e), {initMode: p});
                  }),
                  R());
              },
              [p, R, m.initMode]
            ),
            (0, c.useEffect)(function () {
              return function () {
                'function' == typeof C.current && C.current(),
                  j.current && clearTimeout(j.current),
                  S.current && clearTimeout(S.current),
                  g.current && g.current.disconnect();
              };
            }, []),
            [
              m,
              {
                clients: y.current,
                initializeSandpackIframe: R,
                runSandpack: F,
                registerBundler: I,
                unregisterBundler: D,
                registerReactDevTools: function (e) {
                  v(function (n) {
                    return N(N({}, n), {reactDevTools: e});
                  });
                },
                addListener: function (e, n) {
                  if (n) {
                    if (y.current[n]) {
                      var t = y.current[n].listen(e);
                      return t;
                    }
                    var r = $();
                    (k.current[n] = k.current[n] || {}),
                      (w.current[n] = w.current[n] || {}),
                      (k.current[n][r] = e);
                    var t = function () {
                      k.current[n][r]
                        ? delete k.current[n][r]
                        : w.current[n][r] &&
                          (w.current[n][r](), delete w.current[n][r]);
                    };
                    return t;
                  }
                  var i = $();
                  k.current.global[i] = e;
                  var o = Object.values(y.current).map(function (n) {
                      return n.listen(e);
                    }),
                    t = function () {
                      o.forEach(function (e) {
                        return e();
                      }),
                        delete k.current.global[i],
                        Object.values(w.current).forEach(function (e) {
                          var n;
                          null === (n = null == e ? void 0 : e[i]) ||
                            void 0 === n ||
                            n.call(e);
                        });
                    };
                  return t;
                },
                dispatchMessage: function (e, n) {
                  if ('running' !== m.status) {
                    console.warn(
                      '[sandpack-react]: dispatch cannot be called while in idle mode'
                    );
                    return;
                  }
                  n
                    ? y.current[n].dispatch(e)
                    : Object.values(y.current).forEach(function (n) {
                        n.dispatch(e);
                      });
                },
                lazyAnchorRef: x,
                unsubscribeClientListenersRef: w,
                queuedListenersRef: k,
              },
            ]
          );
        },
        ez = function (e) {
          var n = eJ(e),
            t = (0, c.useState)(n),
            r = t[0],
            i = t[1],
            o = (0, c.useRef)(!1);
          (0, c.useEffect)(
            function () {
              o.current ? i(eJ(e)) : (o.current = !0);
            },
            [e.files, e.customSetup, e.template]
          );
          var s = function (e, n, t) {
            void 0 === t && (t = !0),
              i(function (r) {
                var i,
                  o = r.files;
                return (
                  'string' == typeof e && 'string' == typeof n
                    ? (o = N(N({}, o), (((i = {})[e] = {code: n}), i)))
                    : 'object' == typeof e && (o = N(N({}, o), eZ(e))),
                  N(N({}, r), {files: (0, d.f)(o), shouldUpdatePreview: t})
                );
              });
          };
          return [
            N(N({}, r), {visibleFilesFromProps: n.visibleFiles}),
            {
              openFile: function (e) {
                i(function (n) {
                  var t = n.visibleFiles,
                    r = S(n, ['visibleFiles']),
                    i = t.includes(e) ? t : A(A([], t, !0), [e], !1);
                  return N(N({}, r), {activeFile: e, visibleFiles: i});
                });
              },
              resetFile: function (e) {
                i(function (t) {
                  var r;
                  return N(N({}, t), {
                    files: N(N({}, t.files), (((r = {})[e] = n.files[e]), r)),
                  });
                });
              },
              resetAllFiles: function () {
                i(function (e) {
                  return N(N({}, e), {files: n.files});
                });
              },
              setActiveFile: function (e) {
                r.files[e] &&
                  i(function (n) {
                    return N(N({}, n), {activeFile: e});
                  });
              },
              updateCurrentFile: function (e, n) {
                void 0 === n && (n = !0), s(r.activeFile, e, n);
              },
              updateFile: s,
              addFile: s,
              closeFile: function (e) {
                1 !== r.visibleFiles.length &&
                  i(function (n) {
                    var t = n.visibleFiles,
                      r = n.activeFile,
                      i = S(n, ['visibleFiles', 'activeFile']),
                      o = t.indexOf(e),
                      s = t.filter(function (n) {
                        return n !== e;
                      });
                    return N(N({}, i), {
                      activeFile: e === r ? (0 === o ? t[1] : t[o - 1]) : r,
                      visibleFiles: s,
                    });
                  });
              },
              deleteFile: function (e, n) {
                void 0 === n && (n = !0),
                  i(function (t) {
                    var r = t.visibleFiles,
                      i = t.files,
                      o = t.activeFile,
                      s = S(t, ['visibleFiles', 'files', 'activeFile']),
                      a = N({}, i);
                    delete a[e];
                    var c = r.filter(function (n) {
                      return n !== e;
                    });
                    if (0 === c.length) {
                      var l = Object.keys(i)[Object.keys(i).length - 1];
                      return N(N({}, s), {
                        visibleFiles: [l],
                        activeFile: l,
                        files: a,
                        shouldUpdatePreview: n,
                      });
                    }
                    return N(N({}, s), {
                      visibleFiles: c,
                      activeFile: e === o ? c[c.length - 1] : o,
                      files: a,
                      shouldUpdatePreview: n,
                    });
                  });
              },
            },
          ];
        },
        eY = c.createContext(null),
        eW = function (e) {
          var n,
            t,
            r = e.children,
            i = e.options,
            o = e.style,
            s = e.className,
            l = e.theme,
            d = ez(e),
            u = d[0],
            p = d[1],
            f = e_(e, u),
            m = f[0],
            v = f[1],
            h = v.dispatchMessage,
            g = v.addListener,
            x = S(v, ['dispatchMessage', 'addListener']),
            b = eV(e, u.files);
          return (
            c.useEffect(function () {
              x.initializeSandpackIframe();
            }, []),
            (0, a.jsx)(eY.Provider, {
              value: N(N(N(N(N(N({}, u), m), b), p), x), {
                autoReload:
                  null ===
                    (t =
                      null === (n = e.options) || void 0 === n
                        ? void 0
                        : n.autoReload) ||
                  void 0 === t ||
                  t,
                listen: g,
                dispatch: h,
              }),
              children: (0, a.jsx)(ed, {
                classes: null == i ? void 0 : i.classes,
                children: (0, a.jsx)(em, {
                  className: s,
                  style: o,
                  theme: l,
                  children: r,
                }),
              }),
            })
          );
        };
      function eq() {
        var e = c.useContext(eY);
        if (null === e)
          throw Error(
            '[sandpack-react]: "useSandpack" must be wrapped by a "SandpackProvider"'
          );
        var n = e.dispatch,
          t = e.listen;
        return {
          sandpack: N({}, S(e, ['dispatch', 'listen'])),
          dispatch: n,
          listen: t,
        };
      }
      eY.Consumer;
      var eG = function () {
        var e,
          n,
          t,
          r = eq().sandpack;
        return {
          code:
            null === (e = r.files[r.activeFile]) || void 0 === e
              ? void 0
              : e.code,
          readOnly:
            null !==
              (t =
                null === (n = r.files[r.activeFile]) || void 0 === n
                  ? void 0
                  : n.readOnly) &&
            void 0 !== t &&
            t,
          updateCode: r.updateCurrentFile,
        };
      };
      er({'0%': {opacity: 0}, '100%': {opacity: 1}});
      var eQ = function (e) {
          var n = e.closableTabs,
            t = e.className,
            r = S(e, ['closableTabs', 'className']),
            i = eq().sandpack,
            o = eu(),
            s = i.activeFile,
            c = i.visibleFiles,
            l = i.setActiveFile,
            d = function (e) {
              e.stopPropagation();
              var n = e.target.closest('[data-active]'),
                t = null == n ? void 0 : n.getAttribute('title');
              t && i.closeFile(t);
            },
            u = function (e) {
              var n = q(e),
                t = c.reduce(function (t, r) {
                  return r === e || (q(r) === n && t.push(r)), t;
                }, []);
              return 0 === t.length ? n : G(e, t);
            };
          return (0, a.jsx)(
            'div',
            N({className: o('tabs', [ec, t]), translate: 'no'}, r, {
              children: (0, a.jsx)('div', {
                'aria-label': 'Select active file',
                className: o('tabs-scrollable-container', [ec]),
                role: 'tablist',
                children: c.map(function (e) {
                  return (0, a.jsxs)(
                    'button',
                    {
                      'aria-selected': e === s,
                      className: o('tab-button', [ec, ec]),
                      'data-active': e === s,
                      onClick: function () {
                        return l(e);
                      },
                      role: 'tab',
                      title: e,
                      type: 'button',
                      children: [
                        u(e),
                        n &&
                          c.length > 1 &&
                          (0, a.jsx)('span', {
                            className: o('close-button', [ec]),
                            onClick: d,
                            children: (0, a.jsx)(V, {}),
                          }),
                      ],
                    },
                    e
                  );
                }),
              }),
            })
          );
        },
        eX = function (e) {
          var n = e.onClick,
            t = e.className,
            r = e.children,
            i = eu();
          return (0, a.jsx)('button', {
            className: i('button', [i('icon-standalone'), ec, ec, ec, t]),
            onClick: n,
            type: 'button',
            children: r,
          });
        },
        e$ = function (e) {
          var n = e.onClick,
            t = S(e, ['className', 'onClick']),
            r = eq().sandpack;
          return (0, a.jsxs)(
            eX,
            N(
              {
                className: ec.toString(),
                onClick: function (e) {
                  r.runSandpack(), null == n || n(e);
                },
              },
              t,
              {
                children: [
                  (0, a.jsx)(I, {}),
                  (0, a.jsx)('span', {children: 'Run'}),
                ],
              }
            )
          );
        },
        eK = function (e) {
          var n = e.className,
            t = S(e, ['className']),
            r = eu();
          return (0, a.jsx)('div', N({className: r('stack', [ec, n])}, t));
        },
        e0 = function () {
          var e = c.useContext(ef);
          return {theme: e.theme, themeId: e.id, themeMode: e.mode};
        },
        e1 = function (e, n) {
          if (e.length !== n.length) return !1;
          for (var t = !0, r = 0; r < e.length; r++)
            if (e[r] !== n[r]) {
              t = !1;
              break;
            }
          return t;
        },
        e3 = function (e, n) {
          var t = n.line,
            r = n.column;
          return e.line(t).from + (null != r ? r : 0) - 1;
        },
        e6 = function (e) {
          return ''.concat('sp', '-syntax-').concat(e);
        },
        e5 = function (e, n, t) {
          if (!e && !n) return 'javascript';
          var r = n;
          if (!r && e) {
            var i = e.lastIndexOf('.');
            r = e.slice(i + 1);
          }
          for (var o = 0; o < t.length; o++) {
            var s = t[o];
            if (r === s.name || s.extensions.includes(r || '')) return s.name;
          }
          switch (r) {
            case 'ts':
            case 'tsx':
              return 'typescript';
            case 'html':
            case 'svelte':
            case 'vue':
            case 'astro':
              return 'html';
            case 'css':
            case 'less':
            case 'scss':
              return 'css';
            default:
              return 'javascript';
          }
        },
        e2 = function (e, n) {
          for (
            var t = {
                javascript: (0, y.eJ)({jsx: !0, typescript: !1}),
                typescript: (0, y.eJ)({jsx: !0, typescript: !0}),
                html: (0, b.dy)(),
                css: (0, x.iv)(),
              },
              r = 0;
            r < n.length;
            r++
          ) {
            var i = n[r];
            if (e === i.name) return i.language;
          }
          return t[e];
        },
        e4 = function () {
          for (var e = [], n = 0; n < arguments.length; n++)
            e[n] = arguments[n];
          return c.useCallback(function (n) {
            return e.forEach(function (e) {
              if (e) {
                if ('function' == typeof e) return e(n);
                e.current = n;
              }
            });
          }, e);
        },
        e8 = h.p.line({attributes: {class: 'cm-errorLine'}}),
        e7 = h.lg.fromClass(
          (function () {
            function e() {
              this.decorations = h.p.none;
            }
            return (
              (e.prototype.update = function (e) {
                var n = this;
                e.transactions.forEach(function (t) {
                  var r = t.annotation('show-error');
                  if (void 0 !== r) {
                    var i = e3(e.view.state.doc, {line: r}) + 1;
                    n.decorations = h.p.set([e8.range(i)]);
                  } else t.annotation('remove-errors') && (n.decorations = h.p.none);
                });
              }),
              e
            );
          })(),
          {
            decorations: function (e) {
              return e.decorations;
            },
          }
        ),
        e9 = function (e) {
          var n = e.langSupport,
            t = e.highlightTheme,
            r = e.code,
            i = void 0 === r ? '' : r,
            o = n.language.parser.parse(i),
            s = 0,
            a = [],
            l = function (e, n) {
              if (e > s) {
                var t = i.slice(s, e);
                a.push(
                  n
                    ? (0, c.createElement)('span', {
                        children: t,
                        className: n,
                        key: ''.concat(e).concat(s),
                      })
                    : t
                ),
                  (s = e);
              }
            };
          return (
            (0, j.bW)(o, t, function (e, n, t) {
              l(e, ''), l(n, t);
            }),
            s < i.length &&
              (null == i ? void 0 : i.includes('\n')) &&
              a.push('\n\n'),
            a
          );
        },
        ne = c.forwardRef(function (e, n) {
          var t = e.code,
            r = void 0 === t ? '' : t,
            i = e.filePath,
            o = e.fileType,
            s = e.onCodeUpdate,
            l = e.showLineNumbers,
            d = void 0 !== l && l,
            u = e.showInlineErrors,
            x = void 0 !== u && u,
            b = e.wrapContent,
            y = void 0 !== b && b,
            w = e.editorState,
            C = void 0 === w ? 'pristine' : w,
            k = e.readOnly,
            S = void 0 !== k && k,
            O = e.showReadOnly,
            E = e.decorators,
            M = e.initMode,
            L = void 0 === M ? 'lazy' : M,
            F = e.extensions,
            R = void 0 === F ? [] : F,
            I = e.extensionsKeymap,
            D = void 0 === I ? [] : I,
            T = e.additionalLanguages,
            H = void 0 === T ? [] : T,
            P = c.useRef(null),
            J = e4(P, n),
            B = c.useRef(),
            U = e0(),
            Z = U.theme,
            V = U.themeId,
            _ = c.useState(r),
            z = _[0],
            Y = _[1],
            W = c.useState('immediate' === L),
            G = W[0],
            Q = W[1],
            X = eu(),
            $ = eq(),
            K = $.listen,
            ee = $.sandpack.autoReload,
            en = c.useRef([]),
            et = c.useRef([]),
            er = (0, g.Z)(P, {
              rootMargin: '600px 0px',
              threshold: 0.2,
            }).isIntersecting;
          c.useImperativeHandle(n, function () {
            return {
              getCodemirror: function () {
                return B.current;
              },
            };
          }),
            c.useEffect(
              function () {
                ('lazy' === L || 'user-visible' === L) && er && Q(!0);
              },
              [L, er]
            );
          var ei = e5(i, o, H),
            eo = e2(ei, H),
            es = m.Qf.define([
              {tag: j.pJ.link, textDecoration: 'underline'},
              {tag: j.pJ.emphasis, fontStyle: 'italic'},
              {tag: j.pJ.strong, fontWeight: 'bold'},
              {tag: j.pJ.keyword, class: e6('keyword')},
              {tag: [j.pJ.atom, j.pJ.number, j.pJ.bool], class: e6('static')},
              {tag: j.pJ.variableName, class: e6('plain')},
              {tag: j.pJ.standard(j.pJ.tagName), class: e6('tag')},
              {
                tag: [
                  j.pJ.function(j.pJ.variableName),
                  j.pJ.definition(j.pJ.function(j.pJ.variableName)),
                  j.pJ.tagName,
                ],
                class: e6('definition'),
              },
              {tag: j.pJ.propertyName, class: e6('property')},
              {
                tag: [j.pJ.literal, j.pJ.inserted],
                class: e6(Z.syntax.string ? 'string' : 'static'),
              },
              {tag: j.pJ.punctuation, class: e6('punctuation')},
              {tag: [j.pJ.comment, j.pJ.quote], class: e6('comment')},
            ]),
            ea = e9({langSupport: eo, highlightTheme: es, code: r}),
            el = c.useMemo(
              function () {
                return E
                  ? E.sort(function (e, n) {
                      return e.line - n.line;
                    })
                  : E;
              },
              [E]
            );
          c.useEffect(
            function () {
              if (P.current && G) {
                var e = [
                    {
                      key: 'Tab',
                      run: function (e) {
                        (0, f.at)(e);
                        var n,
                          t,
                          r = D.find(function (e) {
                            return 'Tab' === e.key;
                          });
                        return (
                          null ===
                            (t =
                              null === (n = null == r ? void 0 : r.run) ||
                              void 0 === n
                                ? void 0
                                : n.call(r, e)) ||
                          void 0 === t ||
                          t
                        );
                      },
                    },
                    {
                      key: 'Shift-Tab',
                      run: function (e) {
                        var n,
                          t,
                          r = e.state,
                          i = e.dispatch;
                        (0, f.xi)({state: r, dispatch: i});
                        var o = D.find(function (e) {
                          return 'Shift-Tab' === e.key;
                        });
                        return (
                          null ===
                            (t =
                              null === (n = null == o ? void 0 : o.run) ||
                              void 0 === n
                                ? void 0
                                : n.call(o, a)) ||
                          void 0 === t ||
                          t
                        );
                      },
                    },
                    {
                      key: 'Escape',
                      run: function () {
                        return !!S || (P.current && P.current.focus(), !0);
                      },
                    },
                    {key: 'mod-Backspace', run: f.fE},
                  ],
                  n = A(
                    A([(0, h.AE)(), (0, f.m8)(), (0, p.vQ)()], R, !0),
                    [
                      h.$f.of(
                        A(
                          A(A(A(A([], p.GA, !0), f.wQ, !0), f.f$, !0), e, !0),
                          D,
                          !0
                        )
                      ),
                      eo,
                      h.tk.theme({
                        '&': {
                          backgroundColor: 'var(--'.concat(
                            'sp',
                            '-colors-surface1)'
                          ),
                          color: 'var(--'.concat('sp', '-syntax-color-plain)'),
                          height: '100%',
                        },
                        '.cm-matchingBracket, .cm-nonmatchingBracket, &.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket':
                          {
                            color: 'inherit',
                            backgroundColor: 'rgba(128,128,128,.25)',
                            backgroundBlendMode: 'difference',
                          },
                        '&.cm-editor.cm-focused': {outline: 'none'},
                        '.cm-activeLine': {
                          backgroundColor: 'var(--'.concat(
                            'sp',
                            '-colors-surface3)'
                          ),
                          borderRadius: 'var(--'.concat(
                            'sp',
                            '-border-radius)'
                          ),
                        },
                        '.cm-errorLine': {
                          backgroundColor: 'var(--'.concat(
                            'sp',
                            '-colors-errorSurface)'
                          ),
                          borderRadius: 'var(--'.concat(
                            'sp',
                            '-border-radius)'
                          ),
                        },
                        '.cm-content': {
                          caretColor: 'var(--'.concat('sp', '-colors-accent)'),
                          padding: '0 var(--'.concat('sp', '-space-4)'),
                        },
                        '.cm-scroller': {
                          fontFamily: 'var(--'.concat('sp', '-font-mono)'),
                          lineHeight: 'var(--'.concat(
                            'sp',
                            '-font-lineHeight)'
                          ),
                        },
                        '.cm-gutters': {
                          backgroundColor: 'var(--'.concat(
                            'sp',
                            '-colors-surface1)'
                          ),
                          color: 'var(--'.concat('sp', '-colors-disabled)'),
                          border: 'none',
                          paddingLeft: 'var(--'.concat('sp', '-space-1)'),
                        },
                        '.cm-gutter.cm-lineNumbers': {fontSize: '.6em'},
                        '.cm-lineNumbers .cm-gutterElement': {
                          lineHeight: 'var(--'.concat(
                            'sp',
                            '-font-lineHeight)'
                          ),
                          minWidth: 'var(--'.concat('sp', '-space-5)'),
                        },
                        '.cm-content .cm-line': {
                          paddingLeft: 'var(--'.concat('sp', '-space-1)'),
                        },
                        '.cm-content.cm-readonly .cm-line': {paddingLeft: 0},
                      }),
                      (0, m.nF)(es),
                    ],
                    !1
                  );
                S
                  ? (n.push(v.yy.readOnly.of(!0)), n.push(h.tk.editable.of(!1)))
                  : (n.push((0, m.n$)()), n.push((0, h.ZO)())),
                  el &&
                    n.push(
                      h.lg.fromClass(
                        (function () {
                          function e(e) {
                            this.decorations = this.getDecoration(e);
                          }
                          return (
                            (e.prototype.update = function (e) {}),
                            (e.prototype.getDecoration = function (e) {
                              if (!el) return h.p.none;
                              var n = el.map(function (n) {
                                var t,
                                  r,
                                  i,
                                  o = h.p.line({
                                    attributes: {
                                      class:
                                        null !== (t = n.className) &&
                                        void 0 !== t
                                          ? t
                                          : '',
                                    },
                                  }),
                                  s = h.p.mark({
                                    class:
                                      null !== (r = n.className) && void 0 !== r
                                        ? r
                                        : '',
                                    attributes:
                                      null !== (i = n.elementAttributes) &&
                                      void 0 !== i
                                        ? i
                                        : void 0,
                                  }),
                                  a =
                                    e3(e.state.doc, {
                                      line: n.line,
                                      column: n.startColumn,
                                    }) + 1;
                                if (n.startColumn && n.endColumn) {
                                  var c =
                                    e3(e.state.doc, {
                                      line: n.line,
                                      column: n.endColumn,
                                    }) + 1;
                                  return s.range(a, c);
                                }
                                return o.range(a);
                              });
                              return h.p.set(n);
                            }),
                            e
                          );
                        })(),
                        {
                          decorations: function (e) {
                            return e.decorations;
                          },
                        }
                      )
                    ),
                  y && n.push(h.tk.lineWrapping),
                  d && n.push((0, h.Eu)()),
                  x && n.push(e7);
                var t = P.current,
                  o = t.querySelector('.sp-pre-placeholder');
                o && t.removeChild(o);
                var a = new h.tk({
                  doc: r,
                  extensions: n,
                  parent: t,
                  dispatch: function (e) {
                    if ((a.update([e]), e.docChanged)) {
                      var n = e.newDoc.sliceString(0, e.newDoc.length);
                      Y(n), null == s || s(n);
                    }
                  },
                });
                return (
                  a.contentDOM.setAttribute('data-gramm', 'false'),
                  a.contentDOM.setAttribute('data-lt-active', 'false'),
                  a.contentDOM.setAttribute(
                    'aria-label',
                    i ? 'Code Editor for '.concat(q(i)) : 'Code Editor'
                  ),
                  S
                    ? a.contentDOM.classList.add('cm-readonly')
                    : a.contentDOM.setAttribute('tabIndex', '-1'),
                  (B.current = a),
                  function () {
                    var e;
                    null === (e = B.current) || void 0 === e || e.destroy();
                  }
                );
              }
            },
            [G, d, y, V, el, S, ee]
          ),
            c.useEffect(
              function () {
                var e = B.current,
                  n = !e1(R, en.current) || !e1(D, et.current);
                e &&
                  n &&
                  (e.dispatch({effects: v.Py.appendConfig.of(R)}),
                  e.dispatch({
                    effects: v.Py.appendConfig.of(h.$f.of(A([], D, !0))),
                  }),
                  (en.current = R),
                  (et.current = D));
              },
              [R, D]
            ),
            c.useEffect(function () {
              B.current &&
                'dirty' === C &&
                window.matchMedia('(min-width: 768px)').matches &&
                B.current.contentDOM.focus();
            }, []),
            c.useEffect(
              function () {
                if (B.current && 'string' == typeof r && r !== z) {
                  var e = B.current,
                    n = e.state.selection.ranges.some(function (e) {
                      var n = e.to,
                        t = e.from;
                      return n > r.length || t > r.length;
                    })
                      ? v.jT.cursor(r.length)
                      : e.state.selection,
                    t = {from: 0, to: e.state.doc.length, insert: r};
                  e.dispatch({changes: t, selection: n});
                }
              },
              [r]
            ),
            c.useEffect(
              function () {
                if (x) {
                  var e = K(function (e) {
                    var n = B.current;
                    'success' === e.type
                      ? null == n ||
                        n.dispatch({
                          annotations: [new v.q6('remove-errors', !0)],
                        })
                      : 'action' === e.type &&
                        'show-error' === e.action &&
                        e.path === i &&
                        e.line &&
                        (null == n ||
                          n.dispatch({
                            annotations: [new v.q6('show-error', e.line)],
                          }));
                  });
                  return function () {
                    return e();
                  };
                }
              },
              [K, x]
            );
          var ed = function () {
            var e = 4;
            return (
              d && (e += 6),
              S || (e += 1),
              'var(--'.concat('sp', '-space-').concat(e, ')')
            );
          };
          return S
            ? (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsx)('pre', {
                    ref: J,
                    className: X('cm', [X(C), X(ei), ec, ec]),
                    translate: 'no',
                    children: (0, a.jsx)('code', {
                      className: X('pre-placeholder', [ec]),
                      style: {marginLeft: ed()},
                      children: ea,
                    }),
                  }),
                  S &&
                    (void 0 === O || O) &&
                    (0, a.jsx)(
                      'span',
                      N(
                        {className: X('read-only', [ec])},
                        {},
                        {children: 'Read-only'}
                      )
                    ),
                ],
              })
            : (0, a.jsx)('div', {
                ref: J,
                'aria-autocomplete': 'list',
                'aria-label': i
                  ? 'Code Editor for '.concat(q(i))
                  : 'Code Editor',
                'aria-multiline': 'true',
                className: X('cm', [X(C), X(ei), ec, ec]),
                onKeyDown: function (e) {
                  'Enter' === e.key &&
                    B.current &&
                    (e.preventDefault(), B.current.contentDOM.focus());
                },
                role: 'textbox',
                tabIndex: 0,
                translate: 'no',
                suppressHydrationWarning: !0,
                children: (0, a.jsx)('pre', {
                  className: X('pre-placeholder', [ec]),
                  style: {marginLeft: ed()},
                  children: ea,
                }),
              });
        }),
        nn = (0, c.forwardRef)(function (e, n) {
          var t = e.showTabs,
            r = e.showLineNumbers,
            i = e.showInlineErrors,
            o = e.showRunButton,
            s = e.wrapContent,
            c = e.closableTabs,
            l = e.initMode,
            d = e.extensions,
            u = e.extensionsKeymap,
            p = e.readOnly,
            f = e.showReadOnly,
            m = e.additionalLanguages,
            v = e.className,
            h = S(e, [
              'showTabs',
              'showLineNumbers',
              'showInlineErrors',
              'showRunButton',
              'wrapContent',
              'closableTabs',
              'initMode',
              'extensions',
              'extensionsKeymap',
              'readOnly',
              'showReadOnly',
              'additionalLanguages',
              'className',
            ]),
            g = eq().sandpack,
            x = eG(),
            b = x.code,
            y = x.updateCode,
            j = x.readOnly,
            w = g.activeFile,
            C = g.status,
            k = g.editorState,
            O = null != t ? t : g.visibleFiles.length > 1,
            E = eu(),
            A = function (e, n) {
              void 0 === n && (n = !0), y(e, n);
            };
          return (0, a.jsxs)(
            eK,
            N({className: E('editor', [v])}, h, {
              children: [
                O && (0, a.jsx)(eQ, {closableTabs: void 0 !== c && c}),
                (0, a.jsxs)('div', {
                  className: E('code-editor', [ec]),
                  children: [
                    (0, a.jsx)(
                      ne,
                      {
                        ref: n,
                        additionalLanguages: m,
                        code: b,
                        editorState: k,
                        extensions: d,
                        extensionsKeymap: u,
                        filePath: w,
                        initMode: l || g.initMode,
                        onCodeUpdate: function (e) {
                          var n;
                          return A(
                            e,
                            null === (n = g.autoReload) || void 0 === n || n
                          );
                        },
                        readOnly: p || j,
                        showInlineErrors: void 0 !== i && i,
                        showLineNumbers: void 0 !== r && r,
                        showReadOnly: f,
                        wrapContent: void 0 !== s && s,
                      },
                      w
                    ),
                    (void 0 === o || o) && (!g.autoReload || 'idle' === C)
                      ? (0, a.jsx)(e$, {})
                      : null,
                  ],
                }),
              ],
            })
          );
        }),
        nt = c.forwardRef(function (e, n) {
          var t = e.showTabs,
            r = e.showLineNumbers,
            i = e.decorators,
            o = e.code,
            s = e.initMode,
            c = e.wrapContent,
            l = e.additionalLanguages,
            d = S(e, [
              'showTabs',
              'showLineNumbers',
              'decorators',
              'code',
              'initMode',
              'wrapContent',
              'additionalLanguages',
            ]),
            u = eq().sandpack,
            p = eG().code,
            f = eu(),
            m = null != t ? t : u.visibleFiles.length > 1;
          return (0,
          a.jsxs)(eK, N({className: f('editor-viewer')}, d, {children: [m ? (0, a.jsx)(eQ, {}) : null, (0, a.jsx)('div', {className: f('code-editor', [ec]), children: (0, a.jsx)(ne, {ref: n, additionalLanguages: l, code: null != o ? o : p, decorators: i, filePath: u.activeFile, initMode: s || u.initMode, showLineNumbers: r, showReadOnly: !1, wrapContent: c, readOnly: !0})}), 'idle' === u.status ? (0, a.jsx)(e$, {}) : null]}));
        }),
        nr = c.forwardRef(function (e, n) {
          var t = e.children,
            r = e.className,
            i = S(e, ['children', 'className']),
            o = eq().sandpack,
            s = eu(),
            c = e4(o.lazyAnchorRef, n);
          return (0,
          a.jsx)('div', N({ref: c, className: s('layout', [ec, r])}, i, {children: t}));
        }),
        ni = function () {
          var e,
            n = eq().sandpack.error;
          return null !== (e = null == n ? void 0 : n.message) && void 0 !== e
            ? e
            : null;
        },
        no = function (e, n) {
          var t = eq(),
            r = t.sandpack,
            i = t.listen,
            o = c.useState('LOADING'),
            s = o[0],
            a = o[1];
          return (c.useEffect(
            function () {
              var n = i(function (e) {
                'start' === e.type && !0 === e.firstLoad && a('LOADING'),
                  'done' === e.type &&
                    a(function (e) {
                      return 'LOADING' === e ? 'PRE_FADING' : 'HIDDEN';
                    });
              }, e);
              return function () {
                n();
              };
            },
            [e, 'idle' === r.status]
          ),
          c.useEffect(
            function () {
              var e;
              return (
                'PRE_FADING' !== s || n
                  ? 'FADING' === s &&
                    (e = setTimeout(function () {
                      return a('HIDDEN');
                    }, 200))
                  : a('FADING'),
                function () {
                  clearTimeout(e);
                }
              );
            },
            [s, n]
          ),
          'timeout' === r.status)
            ? 'TIMEOUT'
            : 'running' !== r.status
            ? 'HIDDEN'
            : s;
        },
        ns = function (e) {
          var n = eq().dispatch;
          return {
            refresh: function () {
              return n({type: 'refresh'}, e);
            },
            back: function () {
              return n({type: 'urlback'}, e);
            },
            forward: function () {
              return n({type: 'urlforward'}, e);
            },
          };
        },
        na = function (e) {
          var n = eq(),
            t = n.sandpack,
            r = n.listen,
            i = n.dispatch,
            o = c.useRef(null),
            s = c.useRef($());
          return (
            c.useEffect(function () {
              var n = o.current,
                r = s.current;
              return (
                null !== n && t.registerBundler(n, r, e),
                function () {
                  return t.unregisterBundler(r);
                }
              );
            }, []),
            {
              sandpack: t,
              getClient: function () {
                return t.clients[s.current] || null;
              },
              clientId: s.current,
              iframe: o,
              listen: function (e) {
                return r(e, s.current);
              },
              dispatch: function (e) {
                return i(e, s.current);
              },
            }
          );
        },
        nc = function (e) {
          var n = eq().dispatch;
          return {
            restart: function () {
              return n({type: 'shell/restart'}, e);
            },
            openPreview: function () {
              return n({type: 'shell/openPreview'}, e);
            },
          };
        },
        nl = function (e, n) {
          var t;
          switch (e.state) {
            case 'downloading_manifest':
              return '[1/3] Downloading manifest';
            case 'downloaded_module':
              return '[2/3] Downloaded '
                .concat(e.name, ' (')
                .concat(n - e.totalPending, '/')
                .concat(n, ')');
            case 'starting_command':
              return '[3/3] Starting command';
            case 'command_running':
              return '[3/3] Running "'.concat(
                null === (t = e.command) || void 0 === t ? void 0 : t.trim(),
                '"'
              );
          }
        },
        nd = function (e) {
          var n = c.useState(!1),
            t = n[0],
            r = n[1],
            i = c.useState(),
            o = i[0],
            s = i[1],
            a = c.useState(null),
            l = a[0],
            d = a[1],
            u = null == e ? void 0 : e.timeout,
            p = null == e ? void 0 : e.clientId,
            f = eq().listen;
          return (
            c.useEffect(
              function () {
                var e,
                  n = f(function (n) {
                    'start' === n.type && n.firstLoad && r(!1),
                      u &&
                        (e = setTimeout(function () {
                          d(null);
                        }, u)),
                      'shell/progress' !== n.type ||
                        t ||
                        (o ||
                          'downloaded_module' !== n.data.state ||
                          s(n.data.totalPending),
                        void 0 !== o && d(nl(n.data, o))),
                      'done' === n.type &&
                        !1 === n.compilatonError &&
                        (d(null), r(!0), clearTimeout(e));
                  }, p);
                return function () {
                  e && clearTimeout(e), n();
                };
              },
              [p, t, o, u]
            ),
            l
          );
        },
        nu = function (e) {
          var n = e.clientId,
            t = e.maxMessageCount,
            r = void 0 === t ? 800 : t,
            i = c.useState([]),
            o = i[0],
            s = i[1],
            a = eq().listen;
          return (
            c.useEffect(
              function () {
                return a(function (e) {
                  'start' === e.type
                    ? s([])
                    : 'stdout' === e.type &&
                      e.payload.data &&
                      e.payload.data.trim() &&
                      s(function (n) {
                        for (
                          var t = A(
                            A([], n, !0),
                            [{data: e.payload.data, id: $()}],
                            !1
                          );
                          t.length > r;

                        )
                          t.shift();
                        return t;
                      });
                }, n);
              },
              [r, n]
            ),
            {
              logs: o,
              reset: function () {
                return s([]);
              },
            }
          );
        },
        np = function (e) {
          var n = e.replace('[sandpack-client]: ', '');
          if (/process.exit/.test(n)) {
            var t = n.match(/process.exit\((\d+)\)/);
            return t
              ? 0 === Number(t[1])
                ? 'Server is not running, would you like to start it again?'
                : 'Server has crashed with status code '.concat(
                    t[1],
                    ', would you like to restart the server?'
                  )
              : n;
          }
          return n;
        },
        nf = function (e) {
          var n = e.children,
            t = e.className,
            r = S(e, ['children', 'className']),
            i = ni(),
            o = nc().restart,
            s = eu(),
            c = eq().sandpack,
            l = c.runSandpack,
            d = c.teamId,
            u = eq().dispatch;
          if (!i && !n) return null;
          var p = null == i ? void 0 : i.startsWith('[sandpack-client]');
          return (
            null == i
              ? void 0
              : i.includes('NPM_REGISTRY_UNAUTHENTICATED_REQUEST')
          )
            ? (0, a.jsxs)(
                'div',
                N({className: s('overlay', [s('error'), ec, ec, t])}, e, {
                  children: [
                    (0, a.jsx)('p', {
                      className: s('error-message', [ec]),
                      children: (0, a.jsx)('strong', {
                        children: 'Unable to fetch required dependency.',
                      }),
                    }),
                    (0, a.jsx)('div', {
                      className: s('error-message', [ec]),
                      children: (0, a.jsxs)('p', {
                        children: [
                          'Authentication required. Please sign in to your account (make sure to allow pop-ups to this page) and try again. If the issue persists, contact',
                          ' ',
                          (0, a.jsx)('a', {
                            href: 'mailto:hello@codesandbox.io?subject=Sandpack Timeout Error',
                            children: 'support',
                          }),
                          ' ',
                          'for further assistance.',
                        ],
                      }),
                    }),
                    (0, a.jsx)('div', {
                      children: (0, a.jsxs)('button', {
                        className: s('button', [ec, ec, ec]),
                        onClick: function () {
                          d && u({type: 'sign-in', teamId: d});
                        },
                        children: [
                          (0, a.jsx)(L, {}),
                          (0, a.jsx)('span', {children: 'Sign in'}),
                        ],
                      }),
                    }),
                  ],
                })
              )
            : p && i
            ? (0, a.jsx)(
                'div',
                N({className: s('overlay', [s('error'), ec, ec, t])}, r, {
                  children: (0, a.jsxs)('div', {
                    className: s('error-message', [ec]),
                    children: [
                      (0, a.jsx)('p', {
                        className: s('error-title', [ec]),
                        children: "Couldn't connect to server",
                      }),
                      (0, a.jsx)('p', {children: np(i)}),
                      (0, a.jsx)('div', {
                        children: (0, a.jsxs)('button', {
                          className: s('button', [
                            s('icon-standalone'),
                            ec,
                            ec,
                            ec,
                          ]),
                          onClick: function () {
                            o(), l();
                          },
                          title: 'Restart script',
                          type: 'button',
                          children: [
                            (0, a.jsx)(R, {}),
                            ' ',
                            (0, a.jsx)('span', {children: 'Restart'}),
                          ],
                        }),
                      }),
                    ],
                  }),
                })
              )
            : (0, a.jsxs)(
                'div',
                N(
                  {
                    className: s('overlay', [s('error'), ec, ec(), t]),
                    translate: 'no',
                  },
                  r,
                  {
                    children: [
                      (0, a.jsx)('p', {
                        className: s('error-message', [ec]),
                        children: (0, a.jsx)('strong', {
                          children: 'Something went wrong',
                        }),
                      }),
                      (0, a.jsx)('p', {
                        className: s('error-message', [ec()]),
                        children: i || n,
                      }),
                    ],
                  }
                )
              );
        };
      function nm(e, n, t, r) {
        var i,
          o,
          s = n
            ? null
            : (function (e) {
                var n = {};
                switch (
                  (e.bg && (n.backgroundColor = 'rgb('.concat(e.bg, ')')),
                  e.fg && (n.color = 'rgb('.concat(e.fg, ')')),
                  e.decoration)
                ) {
                  case 'bold':
                    n.fontWeight = 'bold';
                    break;
                  case 'dim':
                    n.opacity = '0.5';
                    break;
                  case 'italic':
                    n.fontStyle = 'italic';
                    break;
                  case 'hidden':
                    n.visibility = 'hidden';
                    break;
                  case 'strikethrough':
                    n.textDecoration = 'line-through';
                    break;
                  case 'underline':
                    n.textDecoration = 'underline';
                    break;
                  case 'blink':
                    n.textDecoration = 'blink';
                }
                return n;
              })(t),
          a = n
            ? ((i = ''),
              (t.bg && (i += ''.concat(t.bg, '-bg ')),
              t.fg && (i += ''.concat(t.fg, '-fg ')),
              t.decoration && (i += 'ansi-'.concat(t.decoration, ' ')),
              '' === i)
                ? null
                : (i = i.substring(0, i.length - 1)))
            : null;
        if (!e)
          return c.createElement(
            'span',
            {style: s, key: r, className: a},
            t.content
          );
        for (
          var l = [],
            d =
              /(\s|^)(https?:\/\/(?:www\.|(?!www))[^\s.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/g,
            u = 0;
          null !== (o = d.exec(t.content));

        ) {
          var p = o[1],
            f = o[2],
            m = o.index + p.length;
          m > u && l.push(t.content.substring(u, m));
          var v = f.startsWith('www.') ? 'http://'.concat(f) : f;
          l.push(
            c.createElement(
              'a',
              {key: u, href: v, target: '_blank'},
              ''.concat(f)
            )
          ),
            (u = d.lastIndex);
        }
        return (
          u < t.content.length && l.push(t.content.substring(u)),
          c.createElement('span', {style: s, key: r, className: a}, l)
        );
      }
      function nv(e) {
        var n,
          t,
          r = e.className,
          i = e.useClasses,
          o = e.children,
          s = e.linkify;
        return c.createElement(
          'code',
          {className: r},
          ((n = null != o ? o : ''),
          void 0 === (t = null != i && i) && (t = !1),
          (n = (0, C.escapeCarriageReturn)(
            (function (e) {
              var n = e;
              do n = (e = n).replace(/[^\n]\x08/gm, '');
              while (n.length < e.length);
              return e;
            })(n)
          )),
          w.ansiToJson(n, {json: !0, remove_empty: !0, use_classes: t})).map(
            nm.bind(null, null != s && s, null != i && i)
          )
        );
      }
      var nh = function (e) {
          var n = e.data,
            t = eu();
          return (0, a.jsx)(a.Fragment, {
            children: n.map(function (e) {
              var n = e.data,
                r = e.id;
              return (0,
              a.jsx)('div', {className: t('console-item', [ng]), children: (0, a.jsx)(nv, {children: n})}, r);
            }),
          });
        },
        ng = ec,
        nx = 'https://codesandbox.io/api/v1/sandboxes/define',
        nb = function (e, n) {
          var t,
            r = Object.keys(e).reduce(function (n, t) {
              var r,
                i = t.replace('/', ''),
                o = {content: e[t].code, isBinary: !1};
              return N(N({}, n), (((r = {})[i] = o), r));
            }, {});
          return (
            (t = N({files: r}, n ? {template: n} : null)),
            k
              .compressToBase64(JSON.stringify(t))
              .replace(/\+/g, '-')
              .replace(/\//g, '_')
              .replace(/=+$/, '')
          );
        },
        ny = function (e) {
          var n,
            t,
            r,
            i = e.children,
            o = S(e, ['children']),
            s = eq().sandpack,
            l = c.useRef(null),
            d = c.useState(),
            u = d[0],
            p = d[1];
          return (c.useEffect(
            function () {
              var e = setTimeout(function () {
                var e = nb(s.files, s.environment);
                p(
                  new URLSearchParams({
                    parameters: e,
                    query: new URLSearchParams({
                      file: s.activeFile,
                      utm_medium: 'sandpack',
                    }).toString(),
                  })
                );
              }, 600);
              return function () {
                clearTimeout(e);
              };
            },
            [s.activeFile, s.environment, s.files]
          ),
          (null !==
            (r =
              null ===
                (t =
                  null === (n = null == u ? void 0 : u.get) || void 0 === n
                    ? void 0
                    : n.call(u, 'parameters')) || void 0 === t
                ? void 0
                : t.length) && void 0 !== r
            ? r
            : 0) > 1500)
            ? (0, a.jsxs)(
                'button',
                N(
                  {
                    onClick: function () {
                      var e;
                      return null === (e = l.current) || void 0 === e
                        ? void 0
                        : e.submit();
                    },
                    title: 'Open in CodeSandbox',
                    type: 'button',
                  },
                  o,
                  {
                    children: [
                      (0, a.jsxs)('form', {
                        ref: l,
                        action: nx,
                        method: 'POST',
                        style: {visibility: 'hidden'},
                        target: '_blank',
                        children: [
                          (0, a.jsx)('input', {
                            name: 'environment',
                            type: 'hidden',
                            value:
                              'node' === s.environment
                                ? 'server'
                                : s.environment,
                          }),
                          Array.from(u, function (e) {
                            var n = e[0],
                              t = e[1];
                            return (0,
                            a.jsx)('input', {name: n, type: 'hidden', value: t}, n);
                          }),
                        ],
                      }),
                      i,
                    ],
                  }
                )
              )
            : (0, a.jsx)(
                'a',
                N(
                  {
                    href: ''
                      .concat(nx, '?')
                      .concat(
                        null == u ? void 0 : u.toString(),
                        '&environment='
                      )
                      .concat(
                        'node' === s.environment ? 'server' : s.environment
                      ),
                    rel: 'noreferrer noopener',
                    target: '_blank',
                    title: 'Open in CodeSandbox',
                  },
                  o,
                  {children: i}
                )
              );
        },
        nj = function () {
          var e = eu();
          return (0, a.jsxs)(ny, {
            className: e('button', [e('icon-standalone'), ec, ec, ec]),
            children: [
              (0, a.jsx)(J, {}),
              (0, a.jsx)('span', {children: 'Open Sandbox'}),
            ],
          });
        };
      er({
        '0%': {transform: 'rotateX(-25.5deg) rotateY(45deg)'},
        '100%': {transform: 'rotateX(-25.5deg) rotateY(405deg)'},
      });
      var nw = function (e) {
          var n = e.className,
            t = e.showOpenInCodeSandbox,
            r = S(e, ['className', 'showOpenInCodeSandbox']),
            i = eu();
          return (0, a.jsxs)(
            'div',
            N(
              {
                className: i('cube-wrapper', [ec, n]),
                title: 'Open in CodeSandbox',
              },
              r,
              {
                children: [
                  t && (0, a.jsx)(nj, {}),
                  (0, a.jsx)('div', {
                    className: i('cube', [ec]),
                    children: (0, a.jsxs)('div', {
                      className: i('sides', [ec]),
                      children: [
                        (0, a.jsx)('div', {className: 'top'}),
                        (0, a.jsx)('div', {className: 'right'}),
                        (0, a.jsx)('div', {className: 'bottom'}),
                        (0, a.jsx)('div', {className: 'left'}),
                        (0, a.jsx)('div', {className: 'front'}),
                        (0, a.jsx)('div', {className: 'back'}),
                      ],
                    }),
                  }),
                ],
              }
            )
          );
        },
        nC = function (e) {
          var n = e.clientId,
            t = e.loading,
            r = e.className,
            i = e.style,
            o = e.showOpenInCodeSandbox,
            s = S(e, [
              'clientId',
              'loading',
              'className',
              'style',
              'showOpenInCodeSandbox',
            ]),
            l = eu(),
            d = eq().sandpack,
            u = d.runSandpack,
            p = d.environment,
            f = c.useState(!1),
            m = f[0],
            v = f[1],
            h = no(n, t),
            g = nd({clientId: n}),
            x = nu({clientId: n}).logs;
          return (c.useEffect(
            function () {
              var e;
              return (
                (null == g ? void 0 : g.includes('Running')) &&
                  (e = setTimeout(function () {
                    v(!0);
                  }, 3e3)),
                function () {
                  e && clearTimeout(e);
                }
              );
            },
            [g]
          ),
          'HIDDEN' === h)
            ? null
            : 'TIMEOUT' === h
            ? (0, a.jsx)(
                'div',
                N({className: l('overlay', [l('error'), ec, ec, ec, r])}, s, {
                  children: (0, a.jsxs)('div', {
                    className: l('error-message', [ec]),
                    children: [
                      (0, a.jsx)('p', {
                        className: l('error-title', [ec]),
                        children: "Couldn't connect to server",
                      }),
                      (0, a.jsx)('div', {
                        className: l('error-message', [ec]),
                        children: (0, a.jsxs)('p', {
                          children: [
                            'This means sandpack cannot connect to the runtime or your network is having some issues. Please check the network tab in your browser and try again. If the problem persists, report it via',
                            ' ',
                            (0, a.jsx)('a', {
                              href: 'mailto:hello@codesandbox.io?subject=Sandpack Timeout Error',
                              children: 'email',
                            }),
                            ' ',
                            'or submit an issue on',
                            ' ',
                            (0, a.jsx)('a', {
                              href: 'https://github.com/codesandbox/sandpack/issues',
                              rel: 'noreferrer noopener',
                              target: '_blank',
                              children: 'GitHub.',
                            }),
                          ],
                        }),
                      }),
                      (0, a.jsxs)('p', {
                        className: l('error-message', [ec()]),
                        children: [
                          'ENV: ',
                          p,
                          (0, a.jsx)('br', {}),
                          'ERROR: TIME_OUT',
                        ],
                      }),
                      (0, a.jsx)('div', {
                        children: (0, a.jsxs)('button', {
                          className: l('button', [
                            l('icon-standalone'),
                            ec,
                            ec,
                            ec,
                          ]),
                          onClick: u,
                          title: 'Restart script',
                          type: 'button',
                          children: [
                            (0, a.jsx)(R, {}),
                            ' ',
                            (0, a.jsx)('span', {children: 'Try again'}),
                          ],
                        }),
                      }),
                    ],
                  }),
                })
              )
            : (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsxs)(
                    'div',
                    N(
                      {
                        className: l('overlay', [l('loading'), ec, ec, r]),
                        style: N(N({}, i), {
                          opacity:
                            'LOADING' === h || 'PRE_FADING' === h ? 1 : 0,
                          transition: 'opacity '.concat(200, 'ms ease-out'),
                        }),
                      },
                      s,
                      {
                        children: [
                          m &&
                            (0, a.jsx)('div', {
                              className: nk.toString(),
                              children: (0, a.jsx)(nh, {data: x}),
                            }),
                          (0, a.jsx)(nw, {showOpenInCodeSandbox: o}),
                        ],
                      }
                    )
                  ),
                  g &&
                    (0, a.jsx)('div', {
                      className: nN.toString(),
                      children: (0, a.jsx)('p', {children: g}),
                    }),
                ],
              });
        },
        nk = ec,
        nN = ec,
        nS = function (e) {
          var n = nd({timeout: 3e3, clientId: e.clientId});
          return n
            ? (0, a.jsx)('div', {
                className: nO.toString(),
                children: (0, a.jsx)('p', {children: n}),
              })
            : null;
        },
        nO = ec,
        nE = function (e) {
          var n = e.selectFile,
            t = e.path,
            r = e.active,
            i = e.onClick,
            o = e.depth,
            s = e.isDirOpen,
            a = eu(),
            c = t.split('/').filter(Boolean).pop();
          return jsxs('button', {
            className: a('button', [a('explorer'), ec, null]),
            'data-active': r,
            onClick: function (e) {
              n && n(t), null == i || i(e);
            },
            style: {paddingLeft: 18 * o + 'px'},
            title: c,
            type: 'button',
            children: [
              n ? jsx(Z, {}) : s ? jsx(B, {}) : jsx(U, {}),
              jsx('span', {children: c}),
            ],
          });
        },
        nA = function (e) {
          var n = e.prefixedPath,
            t = e.files,
            r = e.selectFile,
            i = e.activeFile,
            o = e.depth,
            s = e.autoHiddenFiles,
            a = e.visibleFiles,
            c = e.initialCollapsedFolder,
            l = React.useState(!(null == c ? void 0 : c.includes(n))),
            d = l[0],
            u = l[1];
          return jsxs(
            'div',
            {
              children: [
                jsx(nE, {
                  depth: o,
                  isDirOpen: d,
                  onClick: function () {
                    return u(function (e) {
                      return !e;
                    });
                  },
                  path: n + '/',
                }),
                d &&
                  jsx(nL, {
                    activeFile: i,
                    autoHiddenFiles: s,
                    depth: o + 1,
                    files: t,
                    initialCollapsedFolder: c,
                    prefixedPath: n,
                    selectFile: r,
                    visibleFiles: a,
                  }),
              ],
            },
            n
          );
        },
        nM = function (e) {
          var n = e.autoHiddenFiles,
            t = e.visibleFiles,
            r = e.files,
            i = e.prefixedPath,
            o = t.length > 0,
            s = n && !o,
            a = n && !!o,
            c = Object.keys(r)
              .filter(function (e) {
                var n,
                  o = e.startsWith(i);
                return a
                  ? o && t.includes(e)
                  : s
                  ? o &&
                    !(null === (n = r[e]) || void 0 === n ? void 0 : n.hidden)
                  : o;
              })
              .map(function (e) {
                return e.substring(i.length);
              }),
            l = new Set(
              c
                .filter(function (e) {
                  return e.includes('/');
                })
                .map(function (e) {
                  return ''.concat(i).concat(e.split('/')[0], '/');
                })
            ),
            d = c
              .filter(function (e) {
                return !e.includes('/');
              })
              .map(function (e) {
                return ''.concat(i).concat(e);
              });
          return {directories: Array.from(l), modules: d};
        },
        nL = function (e) {
          var n = e.depth,
            t = void 0 === n ? 0 : n,
            r = e.activeFile,
            i = e.selectFile,
            o = e.prefixedPath,
            s = e.files,
            a = e.autoHiddenFiles,
            c = e.visibleFiles,
            l = e.initialCollapsedFolder,
            d = nM({
              visibleFiles: c,
              autoHiddenFiles: a,
              prefixedPath: o,
              files: s,
            }),
            u = d.directories,
            p = d.modules;
          return jsxs('div', {
            children: [
              u.map(function (e) {
                return jsx(
                  nA,
                  {
                    activeFile: r,
                    autoHiddenFiles: a,
                    depth: t,
                    files: s,
                    initialCollapsedFolder: l,
                    prefixedPath: e,
                    selectFile: i,
                    visibleFiles: c,
                  },
                  e
                );
              }),
              p.map(function (e) {
                return jsx(
                  nE,
                  {active: r === e, depth: t, path: e, selectFile: i},
                  e
                );
              }),
            ],
          });
        },
        nF = function (e) {
          var n = e.match(/(https?:\/\/.*?)\//);
          return n && n[1] ? [n[1], e.replace(n[1], '')] : [e, '/'];
        },
        nR = function (e) {
          var n,
            t = e.clientId,
            r = e.onURLChange,
            i = e.className,
            o = e.startRoute,
            s = S(e, ['clientId', 'onURLChange', 'className', 'startRoute']),
            l = c.useState(''),
            d = l[0],
            u = l[1],
            p = eq(),
            f = p.sandpack,
            m = p.dispatch,
            v = p.listen,
            h = c.useState(
              null !== (n = null != o ? o : f.startRoute) && void 0 !== n
                ? n
                : '/'
            ),
            g = h[0],
            x = h[1],
            b = c.useState(!1),
            y = b[0],
            j = b[1],
            w = c.useState(!1),
            C = w[0],
            k = w[1],
            O = eu();
          c.useEffect(function () {
            var e = v(function (e) {
              if ('urlchange' === e.type) {
                var n = e.url,
                  t = e.back,
                  r = e.forward,
                  i = nF(n),
                  o = i[0],
                  s = i[1];
                u(o), x(s), j(t), k(r);
              }
            }, t);
            return function () {
              return e();
            };
          }, []);
          var E = O('button', [O('icon'), ec, ec, ec]);
          return (0, a.jsxs)(
            'div',
            N({className: O('navigator', [ec, i])}, s, {
              children: [
                (0, a.jsx)('button', {
                  'aria-label': 'Go back one page',
                  className: E,
                  disabled: !y,
                  onClick: function () {
                    m({type: 'urlback'});
                  },
                  type: 'button',
                  children: (0, a.jsx)(D, {}),
                }),
                (0, a.jsx)('button', {
                  'aria-label': 'Go forward one page',
                  className: E,
                  disabled: !C,
                  onClick: function () {
                    m({type: 'urlforward'});
                  },
                  type: 'button',
                  children: (0, a.jsx)(T, {}),
                }),
                (0, a.jsx)('button', {
                  'aria-label': 'Refresh page',
                  className: E,
                  onClick: function () {
                    m({type: 'refresh'});
                  },
                  type: 'button',
                  children: (0, a.jsx)(H, {}),
                }),
                (0, a.jsx)('input', {
                  'aria-label': 'Current Sandpack URL',
                  className: O('input', [ec]),
                  name: 'Current Sandpack URL',
                  onChange: function (e) {
                    x(
                      e.target.value.startsWith('/')
                        ? e.target.value
                        : '/'.concat(e.target.value)
                    );
                  },
                  onKeyDown: function (e) {
                    'Enter' === e.code &&
                      (e.preventDefault(),
                      e.stopPropagation(),
                      'function' == typeof r && r(d + e.currentTarget.value));
                  },
                  type: 'text',
                  value: g,
                }),
              ],
            })
          );
        };
      c.forwardRef(function (e, n) {
        var t = e.showNavigator,
          r = void 0 !== t && t,
          i = e.showRefreshButton,
          o = e.showOpenInCodeSandbox,
          s = void 0 === o || o,
          l = e.showSandpackErrorOverlay,
          d = e.showRestartButton,
          u = e.actionsChildren,
          p = void 0 === u ? (0, a.jsx)(a.Fragment, {}) : u,
          f = e.children,
          m = e.className,
          v = e.startRoute,
          h = void 0 === v ? '/' : v,
          g = S(e, [
            'showNavigator',
            'showRefreshButton',
            'showOpenInCodeSandbox',
            'showSandpackErrorOverlay',
            'showOpenNewtab',
            'showRestartButton',
            'actionsChildren',
            'children',
            'className',
            'startRoute',
          ]),
          x = na({startRoute: h}),
          b = x.sandpack,
          y = x.listen,
          j = x.iframe,
          w = x.getClient,
          C = x.clientId,
          k = x.dispatch,
          O = c.useState(null),
          E = O[0],
          A = O[1],
          M = b.status,
          L = ns(C).refresh,
          I = nc(C).restart,
          D = eu();
        return (
          c.useEffect(function () {
            return y(function (e) {
              'resize' === e.type && A(e.height);
            });
          }, []),
          c.useImperativeHandle(
            n,
            function () {
              return {clientId: C, getClient: w};
            },
            [w, C]
          ),
          (0, a.jsxs)(
            eK,
            N({className: D('preview', [m])}, g, {
              children: [
                r &&
                  (0, a.jsx)(nR, {
                    clientId: C,
                    onURLChange: function (e) {
                      j.current && (j.current.src = e);
                    },
                    startRoute: h,
                  }),
                (0, a.jsxs)('div', {
                  className: D('preview-container', [ec]),
                  children: [
                    (0, a.jsx)('iframe', {
                      ref: j,
                      className: D('preview-iframe', [ec]),
                      style: {height: E || void 0},
                      title: 'Sandpack Preview',
                    }),
                    (0, a.jsxs)('div', {
                      className: D('preview-actions', [ec]),
                      children: [
                        p,
                        (void 0 === d || d) &&
                          'node' === b.environment &&
                          (0, a.jsx)(eX, {
                            onClick: I,
                            children: (0, a.jsx)(R, {}),
                          }),
                        !r &&
                          (void 0 === i || i) &&
                          'running' === M &&
                          (0, a.jsx)(eX, {
                            onClick: L,
                            children: (0, a.jsx)(H, {}),
                          }),
                        b.teamId &&
                          (0, a.jsx)('button', {
                            className: D('button', [
                              D('icon-standalone'),
                              ec,
                              ec,
                              ec,
                            ]),
                            onClick: function () {
                              return k({type: 'sign-out'});
                            },
                            title: 'Sign out',
                            type: 'button',
                            children: (0, a.jsx)(F, {}),
                          }),
                        s && (0, a.jsx)(nj, {}),
                      ],
                    }),
                    (0, a.jsx)(nC, {clientId: C, showOpenInCodeSandbox: s}),
                    (void 0 === l || l) && (0, a.jsx)(nf, {}),
                    f,
                  ],
                }),
              ],
            })
          )
        );
      });
      var nI = ec(),
        nD = ec(),
        nT = ec();
      ec(), ec(), ec(), ec();
      var nH = function (e) {
          var n = e.tests,
            t = eu();
          return jsx('div', {
            className: t('test', [null]),
            children: n.map(function (e) {
              return jsxs(
                'div',
                {
                  className: t('test-result', [null]),
                  children: [
                    'pass' === e.status &&
                      jsx('span', {
                        className: t('test-pass-text', [nI, null]),
                        children: '✓',
                      }),
                    'fail' === e.status &&
                      jsx('span', {
                        className: t('test-fail-text', [nD, null]),
                        children: '✕',
                      }),
                    'idle' === e.status &&
                      jsx('span', {
                        className: t('test-idle-text', [nT, null]),
                        children: '○',
                      }),
                    jsx('span', {
                      className: t('test-name-text', [null]),
                      children: e.name,
                    }),
                    void 0 !== e.duration &&
                      jsxs('span', {
                        className: t('test-duration-text', [null]),
                        children: ['(', e.duration, ' ms)'],
                      }),
                  ],
                },
                e.name
              );
            }),
          });
        },
        nP = function (e) {
          var n, t, r;
          return (n = Object.values(
            null !== (t = e.tests) && void 0 !== t ? t : {}
          )).concat.apply(
            n,
            Object.values(
              null !== (r = e.describes) && void 0 !== r ? r : {}
            ).map(nP)
          );
        },
        nJ = function (e) {
          var n, t;
          return (
            0 ===
              Object.values(null !== (n = e.describes) && void 0 !== n ? n : {})
                .length &&
            0 ===
              Object.values(null !== (t = e.tests) && void 0 !== t ? t : {})
                .length
          );
        },
        nB = function (e) {
          var n = e.describes,
            t = eu();
          return jsx(Fragment, {
            children: n.map(function (e) {
              if (nJ(e)) return null;
              var n,
                r,
                i = Object.values(
                  null !== (n = e.tests) && void 0 !== n ? n : {}
                ),
                o = Object.values(
                  null !== (r = e.describes) && void 0 !== r ? r : {}
                );
              return jsxs(
                'div',
                {
                  className: t('test-describe', [null]),
                  children: [
                    jsx('div', {
                      className: t('test-name', [null]),
                      children: e.name,
                    }),
                    jsx(nH, {tests: i}),
                    jsx(nB, {describes: o}),
                  ],
                },
                e.name
              );
            }),
          });
        },
        nU = ['SyntaxError: ', 'Error in sandbox:'],
        nZ = {id: 'random', method: 'clear', data: ['Console was cleared']},
        nV = (0, eval)('this'),
        n_ = 'function' == typeof ArrayBuffer,
        nz = 'function' == typeof Map,
        nY = 'function' == typeof Set;
      ((r = s || (s = {}))[(r.infinity = 0)] = 'infinity'),
        (r[(r.minusInfinity = 1)] = 'minusInfinity'),
        (r[(r.minusZero = 2)] = 'minusZero');
      var nW = {
          Arithmetic: function (e) {
            return e === s.infinity
              ? 1 / 0
              : e === s.minusInfinity
              ? -1 / 0
              : e === s.minusZero
              ? -0
              : e;
          },
          HTMLElement: function (e) {
            var n = document.implementation.createHTMLDocument('sandbox');
            try {
              var t = n.createElement(e.tagName);
              t.innerHTML = e.innerHTML;
              for (
                var r = 0, i = Object.keys(e.attributes);
                r < i.length;
                r++
              ) {
                var o = i[r];
                try {
                  t.setAttribute(o, e.attributes[o]);
                } catch (e) {}
              }
              return t;
            } catch (n) {
              return e;
            }
          },
          Function: function (e) {
            var n = function () {};
            return (
              Object.defineProperty(n, 'toString', {
                value: function () {
                  return 'function '.concat(e.name, '() {').concat(e.body, '}');
                },
              }),
              n
            );
          },
          '[[NaN]]': function () {
            return NaN;
          },
          '[[undefined]]': function () {},
          '[[Date]]': function (e) {
            var n = new Date();
            return n.setTime(e), n;
          },
          '[[RegExp]]': function (e) {
            return new RegExp(e.src, e.flags);
          },
          '[[Error]]': function (e) {
            var n = new (nV[e.name] || Error)(e.message);
            return (n.stack = e.stack), n;
          },
          '[[ArrayBuffer]]': function (e) {
            if (n_) {
              var n = new ArrayBuffer(e.length);
              return new Int8Array(n).set(e), n;
            }
            return e;
          },
          '[[TypedArray]]': function (e) {
            return 'function' == typeof nV[e.ctorName]
              ? new nV[e.ctorName](e.arr)
              : e.arr;
          },
          '[[Map]]': function (e) {
            if (nz) {
              for (var n = new Map(), t = 0; t < e.length; t += 2)
                n.set(e[t], e[t + 1]);
              return n;
            }
            for (var r = [], i = 0; i < e.length; i += 2)
              r.push([e[t], e[t + 1]]);
            return r;
          },
          '[[Set]]': function (e) {
            if (nY) {
              for (var n = new Set(), t = 0; t < e.length; t++) n.add(e[t]);
              return n;
            }
            return e;
          },
        },
        nq = function (e) {
          var n;
          if ('string' == typeof e || 'number' == typeof e || null === e);
          else if (Array.isArray(e)) return e.map(nq);
          else if ('object' == typeof e && '@t' in e) {
            var t = e['@t'],
              r = nW[t];
            return r(e.data);
          } else if ('object' == typeof e && '#@t' in e) {
            var t = e['#@t'],
              r = nW[t];
            return r(e.data);
          } else if (
            'object' == typeof e &&
            (null === (n = e.constructor) || void 0 === n ? void 0 : n.name) ===
              'NodeList'
          ) {
            var i = {};
            return (
              Object.entries(e).forEach(function (e) {
                var n = e[0],
                  t = e[1];
                i[n] = nq(t);
              }),
              i
            );
          }
          return e;
        },
        nG = function (e, n, t) {
          var r = e.reduce(function (e, r, i) {
            return ''
              .concat(e)
              .concat(i ? ', ' : '')
              .concat(nX(r, n, t));
          }, '');
          return '['.concat(r, ']');
        },
        nQ = function (e, n, t) {
          var r =
            'Object' !== e.constructor.name
              ? ''.concat(e.constructor.name, ' ')
              : '';
          if (t > 2) return r;
          var i = Object.entries(e),
            o = Object.entries(e).reduce(function (e, r, o) {
              var s = r[0],
                a = r[1],
                c = i.length > 10 ? '\n  ' : '',
                l = nX(a, n, t);
              return 400 === o
                ? e + c + '...'
                : o > 400
                ? e
                : e +
                  ''
                    .concat(0 === o ? '' : ', ')
                    .concat(c)
                    .concat(s, ': ') +
                  l;
            }, '');
          return ''
            .concat(r, '{ ')
            .concat(o)
            .concat(i.length > 10 ? '\n' : ' ', '}');
        },
        nX = function (e, n, t) {
          var r;
          void 0 === t && (t = 0);
          try {
            var i = nq(e);
            if (Array.isArray(i)) return nG(i, n, t + 1);
            switch (typeof i) {
              case 'string':
                return '"'.concat(i, '"').slice(0, 1e4);
              case 'number':
              case 'function':
              case 'symbol':
                return i.toString();
              case 'boolean':
                return String(i);
              case 'undefined':
                return 'undefined';
              default:
                if (
                  i instanceof RegExp ||
                  i instanceof Error ||
                  i instanceof Date
                )
                  return i.toString();
                if (null === i) return String(null);
                if (i instanceof HTMLElement) return i.outerHTML.slice(0, 1e4);
                if (0 === Object.entries(i).length) return '{}';
                if ('@r' in i) {
                  if (t > 2) return 'Unable to print information';
                  var o = n[i['@r']];
                  return nX(o, n, t + 1);
                }
                if (
                  (null === (r = i.constructor) || void 0 === r
                    ? void 0
                    : r.name) === 'NodeList'
                ) {
                  var s = i.length,
                    a = Array(s)
                      .fill(null)
                      .map(function (e, t) {
                        return nX(i[t], n);
                      });
                  return 'NodeList('.concat(i.length, ')[').concat(a, ']');
                }
                return nQ(i, n, t + 1);
            }
          } catch (e) {
            return 'Unable to print information';
          }
        },
        n$ = function (e) {
          switch (e) {
            case 'warn':
              return 'warning';
            case 'clear':
              return 'clear';
            case 'error':
              return 'error';
            default:
              return 'info';
          }
        },
        nK = function (e) {
          var n = e.data,
            t = eu();
          return (0, a.jsx)(a.Fragment, {
            children: n.map(function (e, n, r) {
              var i = e.data,
                o = e.id,
                s = e.method;
              return i && Array.isArray(i)
                ? (0, a.jsx)(
                    c.Fragment,
                    {
                      children: i.map(function (e, i) {
                        var c = r.slice(n, r.length);
                        return (0,
                        a.jsx)('div', {className: t('console-item', [n0({variant: n$(s)})]), children: (0, a.jsx)(ne, {code: 'clear' === s ? e : nX(e, c), fileType: 'js', initMode: 'user-visible', showReadOnly: !1, readOnly: !0, wrapContent: !0})}, ''.concat(o, '-').concat(i));
                      }),
                    },
                    o
                  )
                : null;
            }),
          });
        },
        n0 = ec,
        n1 = function (e) {
          var n = e.currentTab,
            t = e.setCurrentTab,
            r = e.node,
            i = eu(),
            o = i('console-header-button', [ec, ec, ec]);
          return (0, a.jsxs)('div', {
            className: i('console-header', [ec, ec]),
            children: [
              (0, a.jsxs)('p', {
                className: i('console-header-title', [ec]),
                children: [
                  (0, a.jsx)(_, {}),
                  (0, a.jsx)('span', {children: 'Terminal'}),
                ],
              }),
              r &&
                (0, a.jsxs)('div', {
                  className: i('console-header-actions', [ec]),
                  children: [
                    (0, a.jsx)('button', {
                      className: o,
                      'data-active': 'server' === n,
                      onClick: function () {
                        return t('server');
                      },
                      type: 'button',
                      children: 'Server',
                    }),
                    (0, a.jsx)('button', {
                      className: o,
                      'data-active': 'client' === n,
                      onClick: function () {
                        return t('client');
                      },
                      type: 'button',
                      children: 'Client',
                    }),
                  ],
                }),
            ],
          });
        },
        n3 = function (e) {
          var n = e.clientId,
            t = e.maxMessageCount,
            r = void 0 === t ? 800 : t,
            i = e.showSyntaxError,
            o = void 0 !== i && i,
            s = e.resetOnPreviewRestart,
            a = void 0 !== s && s,
            l = c.useState([]),
            d = l[0],
            u = l[1],
            p = eq().listen;
          return (
            c.useEffect(
              function () {
                return p(function (e) {
                  if (a && 'start' === e.type) u([]);
                  else if ('console' === e.type && e.codesandbox) {
                    var n = Array.isArray(e.log) ? e.log : [e.log];
                    if (
                      n.find(function (e) {
                        return 'clear' === e.method;
                      })
                    )
                      return u([nZ]);
                    var t = o
                      ? n
                      : n.filter(function (e) {
                          var n, t, r;
                          return (
                            (null !==
                              (r =
                                null ===
                                  (t =
                                    null ===
                                      (n = null == e ? void 0 : e.data) ||
                                    void 0 === n
                                      ? void 0
                                      : n.filter) || void 0 === t
                                  ? void 0
                                  : t.call(n, function (e) {
                                      return (
                                        'string' != typeof e ||
                                        0 ===
                                          nU.filter(function (n) {
                                            return e.startsWith(n);
                                          }).length
                                      );
                                    })) && void 0 !== r
                              ? r
                              : []
                            ).length > 0
                          );
                        });
                    if (!t) return;
                    u(function (e) {
                      for (
                        var n = A(A([], e, !0), t, !0).filter(function (
                          e,
                          n,
                          t
                        ) {
                          return (
                            n ===
                            t.findIndex(function (n) {
                              return n.id === e.id;
                            })
                          );
                        });
                        n.length > r;

                      )
                        n.shift();
                      return n;
                    });
                  }
                }, n);
              },
              [o, r, n, a]
            ),
            {
              logs: d,
              reset: function () {
                return u([]);
              },
            }
          );
        };
      c.forwardRef(function (e, n) {
        var t = e.showHeader,
          r = e.showSyntaxError,
          i = e.maxMessageCount,
          o = e.onLogsChange,
          s = e.className,
          l = e.showResetConsoleButton,
          d = e.showRestartButton,
          u = e.resetOnPreviewRestart,
          p = void 0 !== u && u,
          f = e.actionsChildren,
          m = void 0 === f ? (0, a.jsx)(a.Fragment, {}) : f,
          v = e.standalone,
          h = void 0 !== v && v,
          g = S(e, [
            'showHeader',
            'showSyntaxError',
            'maxMessageCount',
            'onLogsChange',
            'className',
            'showSetupProgress',
            'showResetConsoleButton',
            'showRestartButton',
            'resetOnPreviewRestart',
            'actionsChildren',
            'standalone',
          ]),
          x = eq().sandpack.environment,
          b = na(),
          y = b.iframe,
          j = b.clientId,
          w = nc().restart,
          C = c.useState('node' === x ? 'server' : 'client'),
          k = C[0],
          O = C[1],
          E = h ? j : void 0,
          A = n3({
            maxMessageCount: i,
            showSyntaxError: void 0 !== r && r,
            resetOnPreviewRestart: p,
            clientId: E,
          }),
          M = A.logs,
          L = A.reset,
          F = nu({maxMessageCount: i, resetOnPreviewRestart: p, clientId: E}),
          I = F.logs,
          D = F.reset,
          T = c.useRef(null);
        c.useEffect(
          function () {
            null == o || o(M),
              T.current && (T.current.scrollTop = T.current.scrollHeight);
          },
          [o, M, I, k]
        );
        var H = 'server' === k,
          J = 'node' === x;
        c.useImperativeHandle(n, function () {
          return {
            reset: function () {
              L(), D();
            },
          };
        });
        var B = eu();
        return (0, a.jsxs)(
          eK,
          N({className: B('console', [ec, s])}, g, {
            children: [
              (void 0 === t || t) &&
                J &&
                (0, a.jsx)(n1, {currentTab: k, node: J, setCurrentTab: O}),
              (0, a.jsx)('div', {
                ref: T,
                className: B('console-list', [ec]),
                children: H
                  ? (0, a.jsx)(nh, {data: I})
                  : (0, a.jsx)(nK, {data: M}),
              }),
              (0, a.jsxs)('div', {
                className: B('console-actions', [ec]),
                children: [
                  m,
                  (void 0 === d || d) &&
                    H &&
                    (0, a.jsx)(eX, {
                      onClick: function () {
                        w(), L(), D();
                      },
                      children: (0, a.jsx)(R, {}),
                    }),
                  (void 0 === l || l) &&
                    (0, a.jsx)(eX, {
                      onClick: function () {
                        'client' === k ? L() : D();
                      },
                      children: (0, a.jsx)(P, {}),
                    }),
                ],
              }),
              h &&
                (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)(nS, {clientId: E}),
                    (0, a.jsx)('iframe', {ref: y}),
                  ],
                }),
            ],
          })
        );
      });
    },
  },
]);
