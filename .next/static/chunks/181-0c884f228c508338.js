(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [181],
  {
    58509: function (e, t, n) {
      'use strict';
      n.d(t, {
        Qp: function () {
          return h;
        },
        tG: function () {
          return g;
        },
      });
      var r = !1;
      if ('undefined' != typeof window) {
        var o = {
          get passive() {
            r = !0;
            return;
          },
        };
        window.addEventListener('testPassive', null, o),
          window.removeEventListener('testPassive', null, o);
      }
      var i =
          'undefined' != typeof window &&
          window.navigator &&
          window.navigator.platform &&
          (/iP(ad|hone|od)/.test(window.navigator.platform) ||
            ('MacIntel' === window.navigator.platform &&
              window.navigator.maxTouchPoints > 1)),
        l = [],
        a = !1,
        u = -1,
        c = void 0,
        s = void 0,
        f = function (e) {
          return l.some(function (t) {
            return !!(t.options.allowTouchMove && t.options.allowTouchMove(e));
          });
        },
        d = function (e) {
          var t = e || window.event;
          return (
            !!f(t.target) ||
            t.touches.length > 1 ||
            (t.preventDefault && t.preventDefault(), !1)
          );
        },
        p = function (e) {
          if (void 0 === s) {
            var t = !!e && !0 === e.reserveScrollBarGap,
              n = window.innerWidth - document.documentElement.clientWidth;
            t &&
              n > 0 &&
              ((s = document.body.style.paddingRight),
              (document.body.style.paddingRight = n + 'px'));
          }
          void 0 === c &&
            ((c = document.body.style.overflow),
            (document.body.style.overflow = 'hidden'));
        },
        m = function () {
          void 0 !== s &&
            ((document.body.style.paddingRight = s), (s = void 0)),
            void 0 !== c && ((document.body.style.overflow = c), (c = void 0));
        },
        v = function (e, t) {
          var n = e.targetTouches[0].clientY - u;
          return (
            !f(e.target) &&
            (t && 0 === t.scrollTop && n > 0
              ? d(e)
              : t && t.scrollHeight - t.scrollTop <= t.clientHeight && n < 0
              ? d(e)
              : (e.stopPropagation(), !0))
          );
        },
        h = function (e, t) {
          if (!e) {
            console.error(
              'disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.'
            );
            return;
          }
          !l.some(function (t) {
            return t.targetElement === e;
          }) &&
            ((l = [].concat(
              (function (e) {
                if (!Array.isArray(e)) return Array.from(e);
                for (var t = 0, n = Array(e.length); t < e.length; t++)
                  n[t] = e[t];
                return n;
              })(l),
              [{targetElement: e, options: t || {}}]
            )),
            i
              ? ((e.ontouchstart = function (e) {
                  1 === e.targetTouches.length &&
                    (u = e.targetTouches[0].clientY);
                }),
                (e.ontouchmove = function (t) {
                  1 === t.targetTouches.length && v(t, e);
                }),
                a ||
                  (document.addEventListener(
                    'touchmove',
                    d,
                    r ? {passive: !1} : void 0
                  ),
                  (a = !0)))
              : p(t));
        },
        g = function (e) {
          if (!e) {
            console.error(
              'enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.'
            );
            return;
          }
          (l = l.filter(function (t) {
            return t.targetElement !== e;
          })),
            i
              ? ((e.ontouchstart = null),
                (e.ontouchmove = null),
                a &&
                  0 === l.length &&
                  (document.removeEventListener(
                    'touchmove',
                    d,
                    r ? {passive: !1} : void 0
                  ),
                  (a = !1)))
              : l.length || m();
        };
    },
    94184: function (e, t) {
      var n;
      /*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/ !(function () {
        'use strict';
        var r = {}.hasOwnProperty;
        function o() {
          for (var e = [], t = 0; t < arguments.length; t++) {
            var n = arguments[t];
            if (n) {
              var i = typeof n;
              if ('string' === i || 'number' === i) e.push(n);
              else if (Array.isArray(n)) {
                if (n.length) {
                  var l = o.apply(null, n);
                  l && e.push(l);
                }
              } else if ('object' === i) {
                if (n.toString === Object.prototype.toString)
                  for (var a in n) r.call(n, a) && n[a] && e.push(a);
                else e.push(n.toString());
              }
            }
          }
          return e.join(' ');
        }
        e.exports
          ? ((o.default = o), (e.exports = o))
          : void 0 !==
              (n = function () {
                return o;
              }.apply(t, [])) && (e.exports = n);
      })();
    },
    20296: function (e) {
      function t(e, t, n) {
        function r() {
          var c = Date.now() - a;
          c < t && c >= 0
            ? (o = setTimeout(r, t - c))
            : ((o = null), n || ((u = e.apply(l, i)), (l = i = null)));
        }
        null == t && (t = 100);
        var o,
          i,
          l,
          a,
          u,
          c = function () {
            (l = this), (i = arguments), (a = Date.now());
            var c = n && !o;
            return (
              o || (o = setTimeout(r, t)),
              c && ((u = e.apply(l, i)), (l = i = null)),
              u
            );
          };
        return (
          (c.clear = function () {
            o && (clearTimeout(o), (o = null));
          }),
          (c.flush = function () {
            o &&
              ((u = e.apply(l, i)),
              (l = i = null),
              clearTimeout(o),
              (o = null));
          }),
          c
        );
      }
      (t.debounce = t), (e.exports = t);
    },
    13991: function (e, t) {
      'use strict';
      var n, r;
      Object.defineProperty(t, '__esModule', {value: !0}),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, {enumerable: !0, get: t[n]});
        })(t, {
          PrefetchKind: function () {
            return n;
          },
          ACTION_REFRESH: function () {
            return o;
          },
          ACTION_NAVIGATE: function () {
            return i;
          },
          ACTION_RESTORE: function () {
            return l;
          },
          ACTION_SERVER_PATCH: function () {
            return a;
          },
          ACTION_PREFETCH: function () {
            return u;
          },
          ACTION_FAST_REFRESH: function () {
            return c;
          },
          ACTION_SERVER_ACTION: function () {
            return s;
          },
        });
      let o = 'refresh',
        i = 'navigate',
        l = 'restore',
        a = 'server-patch',
        u = 'prefetch',
        c = 'fast-refresh',
        s = 'server-action';
      ((r = n || (n = {})).AUTO = 'auto'),
        (r.FULL = 'full'),
        (r.TEMPORARY = 'temporary'),
        ('function' == typeof t.default ||
          ('object' == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, '__esModule', {value: !0}),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    81516: function (e, t) {
      'use strict';
      function n(e, t, n, r) {
        return !1;
      }
      Object.defineProperty(t, '__esModule', {value: !0}),
        Object.defineProperty(t, 'getDomainLocale', {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        ('function' == typeof t.default ||
          ('object' == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, '__esModule', {value: !0}),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    93740: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {value: !0}),
        Object.defineProperty(t, 'default', {
          enumerable: !0,
          get: function () {
            return y;
          },
        });
      let r = n(38754),
        o = n(61757),
        i = o._(n(67294)),
        l = r._(n(42636)),
        a = n(97757),
        u = n(3735),
        c = n(83341);
      n(34210);
      let s = r._(n(57746)),
        f = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: '/_next/image',
          loader: 'default',
          dangerouslyAllowSVG: !1,
          unoptimized: !1,
        };
      function d(e) {
        return void 0 !== e.default;
      }
      function p(e) {
        return void 0 === e
          ? e
          : 'number' == typeof e
          ? Number.isFinite(e)
            ? e
            : NaN
          : 'string' == typeof e && /^[0-9]+$/.test(e)
          ? parseInt(e, 10)
          : NaN;
      }
      function m(e, t, n, r, o, i, l) {
        if (!e || e['data-loaded-src'] === t) return;
        e['data-loaded-src'] = t;
        let a = 'decode' in e ? e.decode() : Promise.resolve();
        a.catch(() => {}).then(() => {
          if (e.parentElement && e.isConnected) {
            if (('blur' === n && i(!0), null == r ? void 0 : r.current)) {
              let t = new Event('load');
              Object.defineProperty(t, 'target', {writable: !1, value: e});
              let n = !1,
                o = !1;
              r.current({
                ...t,
                nativeEvent: t,
                currentTarget: e,
                target: e,
                isDefaultPrevented: () => n,
                isPropagationStopped: () => o,
                persist: () => {},
                preventDefault: () => {
                  (n = !0), t.preventDefault();
                },
                stopPropagation: () => {
                  (o = !0), t.stopPropagation();
                },
              });
            }
            (null == o ? void 0 : o.current) && o.current(e);
          }
        });
      }
      function v(e) {
        let [t, n] = i.version.split('.'),
          r = parseInt(t, 10),
          o = parseInt(n, 10);
        return r > 18 || (18 === r && o >= 3)
          ? {fetchPriority: e}
          : {fetchpriority: e};
      }
      let h = (0, i.forwardRef)((e, t) => {
          let {
            imgAttributes: n,
            heightInt: r,
            widthInt: o,
            qualityInt: l,
            className: a,
            imgStyle: u,
            blurStyle: c,
            isLazy: s,
            fetchPriority: f,
            fill: d,
            placeholder: p,
            loading: h,
            srcString: g,
            config: y,
            unoptimized: w,
            loader: b,
            onLoadRef: E,
            onLoadingCompleteRef: x,
            setBlurComplete: C,
            setShowAltText: R,
            onLoad: P,
            onError: S,
            ...O
          } = e;
          return (
            (h = s ? 'lazy' : h),
            i.default.createElement('img', {
              ...O,
              ...v(f),
              loading: h,
              width: o,
              height: r,
              decoding: 'async',
              'data-nimg': d ? 'fill' : '1',
              className: a,
              style: {...u, ...c},
              ...n,
              ref: (0, i.useCallback)(
                (e) => {
                  t &&
                    ('function' == typeof t
                      ? t(e)
                      : 'object' == typeof t && (t.current = e)),
                    e &&
                      (S && (e.src = e.src),
                      e.complete && m(e, g, p, E, x, C, w));
                },
                [g, p, E, x, C, S, w, t]
              ),
              onLoad: (e) => {
                let t = e.currentTarget;
                m(t, g, p, E, x, C, w);
              },
              onError: (e) => {
                R(!0), 'blur' === p && C(!0), S && S(e);
              },
            })
          );
        }),
        g = (0, i.forwardRef)((e, t) => {
          var n;
          let r,
            o,
            {
              src: m,
              sizes: g,
              unoptimized: y = !1,
              priority: w = !1,
              loading: b,
              className: E,
              quality: x,
              width: C,
              height: R,
              fill: P,
              style: S,
              onLoad: O,
              onLoadingComplete: M,
              placeholder: _ = 'empty',
              blurDataURL: T,
              fetchPriority: A,
              layout: k,
              objectFit: L,
              objectPosition: D,
              lazyBoundary: I,
              lazyRoot: F,
              ...N
            } = e,
            j = (0, i.useContext)(c.ImageConfigContext),
            W = (0, i.useMemo)(() => {
              let e = f || j || u.imageConfigDefault,
                t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
                n = e.deviceSizes.sort((e, t) => e - t);
              return {...e, allSizes: t, deviceSizes: n};
            }, [j]),
            B = N.loader || s.default;
          delete N.loader;
          let z = '__next_img_default' in B;
          if (z) {
            if ('custom' === W.loader)
              throw Error(
                'Image with src "' +
                  m +
                  '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'
              );
          } else {
            let e = B;
            B = (t) => {
              let {config: n, ...r} = t;
              return e(r);
            };
          }
          if (k) {
            'fill' === k && (P = !0);
            let e = {
              intrinsic: {maxWidth: '100%', height: 'auto'},
              responsive: {width: '100%', height: 'auto'},
            }[k];
            e && (S = {...S, ...e});
            let t = {responsive: '100vw', fill: '100vw'}[k];
            t && !g && (g = t);
          }
          let H = '',
            K = p(C),
            U = p(R);
          if ('object' == typeof (n = m) && (d(n) || void 0 !== n.src)) {
            let e = d(m) ? m.default : m;
            if (!e.src)
              throw Error(
                'An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ' +
                  JSON.stringify(e)
              );
            if (!e.height || !e.width)
              throw Error(
                'An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ' +
                  JSON.stringify(e)
              );
            if (
              ((r = e.blurWidth),
              (o = e.blurHeight),
              (T = T || e.blurDataURL),
              (H = e.src),
              !P)
            ) {
              if (K || U) {
                if (K && !U) {
                  let t = K / e.width;
                  U = Math.round(e.height * t);
                } else if (!K && U) {
                  let t = U / e.height;
                  K = Math.round(e.width * t);
                }
              } else (K = e.width), (U = e.height);
            }
          }
          let $ = !w && ('lazy' === b || void 0 === b);
          (!(m = 'string' == typeof m ? m : H) ||
            m.startsWith('data:') ||
            m.startsWith('blob:')) &&
            ((y = !0), ($ = !1)),
            W.unoptimized && (y = !0),
            z && m.endsWith('.svg') && !W.dangerouslyAllowSVG && (y = !0),
            w && (A = 'high');
          let [V, G] = (0, i.useState)(!1),
            [Y, X] = (0, i.useState)(!1),
            q = p(x),
            Z = Object.assign(
              P
                ? {
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    objectFit: L,
                    objectPosition: D,
                  }
                : {},
              Y ? {} : {color: 'transparent'},
              S
            ),
            J =
              'blur' === _ && T && !V
                ? {
                    backgroundSize: Z.objectFit || 'cover',
                    backgroundPosition: Z.objectPosition || '50% 50%',
                    backgroundRepeat: 'no-repeat',
                    backgroundImage:
                      'url("data:image/svg+xml;charset=utf-8,' +
                      (0, a.getImageBlurSvg)({
                        widthInt: K,
                        heightInt: U,
                        blurWidth: r,
                        blurHeight: o,
                        blurDataURL: T,
                        objectFit: Z.objectFit,
                      }) +
                      '")',
                  }
                : {},
            Q = (function (e) {
              let {
                config: t,
                src: n,
                unoptimized: r,
                width: o,
                quality: i,
                sizes: l,
                loader: a,
              } = e;
              if (r) return {src: n, srcSet: void 0, sizes: void 0};
              let {widths: u, kind: c} = (function (e, t, n) {
                  let {deviceSizes: r, allSizes: o} = e;
                  if (n) {
                    let e = /(^|\s)(1?\d?\d)vw/g,
                      t = [];
                    for (let r; (r = e.exec(n)); r) t.push(parseInt(r[2]));
                    if (t.length) {
                      let e = 0.01 * Math.min(...t);
                      return {
                        widths: o.filter((t) => t >= r[0] * e),
                        kind: 'w',
                      };
                    }
                    return {widths: o, kind: 'w'};
                  }
                  if ('number' != typeof t) return {widths: r, kind: 'w'};
                  let i = [
                    ...new Set(
                      [t, 2 * t].map(
                        (e) => o.find((t) => t >= e) || o[o.length - 1]
                      )
                    ),
                  ];
                  return {widths: i, kind: 'x'};
                })(t, o, l),
                s = u.length - 1;
              return {
                sizes: l || 'w' !== c ? l : '100vw',
                srcSet: u
                  .map(
                    (e, r) =>
                      a({config: t, src: n, quality: i, width: e}) +
                      ' ' +
                      ('w' === c ? e : r + 1) +
                      c
                  )
                  .join(', '),
                src: a({config: t, src: n, quality: i, width: u[s]}),
              };
            })({
              config: W,
              src: m,
              unoptimized: y,
              width: K,
              quality: q,
              sizes: g,
              loader: B,
            }),
            ee = m,
            et = (0, i.useRef)(O);
          (0, i.useEffect)(() => {
            et.current = O;
          }, [O]);
          let en = (0, i.useRef)(M);
          (0, i.useEffect)(() => {
            en.current = M;
          }, [M]);
          let er = {
            isLazy: $,
            imgAttributes: Q,
            heightInt: U,
            widthInt: K,
            qualityInt: q,
            className: E,
            imgStyle: Z,
            blurStyle: J,
            loading: b,
            config: W,
            fetchPriority: A,
            fill: P,
            unoptimized: y,
            placeholder: _,
            loader: B,
            srcString: ee,
            onLoadRef: et,
            onLoadingCompleteRef: en,
            setBlurComplete: G,
            setShowAltText: X,
            ...N,
          };
          return i.default.createElement(
            i.default.Fragment,
            null,
            i.default.createElement(h, {...er, ref: t}),
            w
              ? i.default.createElement(
                  l.default,
                  null,
                  i.default.createElement('link', {
                    key: '__nimg-' + Q.src + Q.srcSet + Q.sizes,
                    rel: 'preload',
                    as: 'image',
                    href: Q.srcSet ? void 0 : Q.src,
                    imageSrcSet: Q.srcSet,
                    imageSizes: Q.sizes,
                    crossOrigin: N.crossOrigin,
                    ...v(A),
                  })
                )
              : null
          );
        }),
        y = g;
      ('function' == typeof t.default ||
        ('object' == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, '__esModule', {value: !0}),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    95569: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {value: !0}),
        Object.defineProperty(t, 'default', {
          enumerable: !0,
          get: function () {
            return b;
          },
        });
      let r = n(38754),
        o = r._(n(67294)),
        i = n(14532),
        l = n(83353),
        a = n(61410),
        u = n(79064),
        c = n(370),
        s = n(69955),
        f = n(24224),
        d = n(80508),
        p = n(81516),
        m = n(64266),
        v = n(13991),
        h = new Set();
      function g(e, t, n, r, o, i) {
        if (!i && !(0, l.isLocalURL)(t)) return;
        if (!r.bypassPrefetchedCheck) {
          let o =
              void 0 !== r.locale
                ? r.locale
                : 'locale' in e
                ? e.locale
                : void 0,
            i = t + '%' + n + '%' + o;
          if (h.has(i)) return;
          h.add(i);
        }
        let a = i ? e.prefetch(t, o) : e.prefetch(t, n, r);
        Promise.resolve(a).catch((e) => {});
      }
      function y(e) {
        return 'string' == typeof e ? e : (0, a.formatUrl)(e);
      }
      let w = o.default.forwardRef(function (e, t) {
          let n, r;
          let {
            href: a,
            as: h,
            children: w,
            prefetch: b = null,
            passHref: E,
            replace: x,
            shallow: C,
            scroll: R,
            locale: P,
            onClick: S,
            onMouseEnter: O,
            onTouchStart: M,
            legacyBehavior: _ = !1,
            ...T
          } = e;
          (n = w),
            _ &&
              ('string' == typeof n || 'number' == typeof n) &&
              (n = o.default.createElement('a', null, n));
          let A = !1 !== b,
            k = null === b ? v.PrefetchKind.AUTO : v.PrefetchKind.FULL,
            L = o.default.useContext(s.RouterContext),
            D = o.default.useContext(f.AppRouterContext),
            I = null != L ? L : D,
            F = !L,
            {href: N, as: j} = o.default.useMemo(() => {
              if (!L) {
                let e = y(a);
                return {href: e, as: h ? y(h) : e};
              }
              let [e, t] = (0, i.resolveHref)(L, a, !0);
              return {href: e, as: h ? (0, i.resolveHref)(L, h) : t || e};
            }, [L, a, h]),
            W = o.default.useRef(N),
            B = o.default.useRef(j);
          _ && (r = o.default.Children.only(n));
          let z = _ ? r && 'object' == typeof r && r.ref : t,
            [H, K, U] = (0, d.useIntersection)({rootMargin: '200px'}),
            $ = o.default.useCallback(
              (e) => {
                (B.current !== j || W.current !== N) &&
                  (U(), (B.current = j), (W.current = N)),
                  H(e),
                  z &&
                    ('function' == typeof z
                      ? z(e)
                      : 'object' == typeof z && (z.current = e));
              },
              [j, z, N, U, H]
            );
          o.default.useEffect(() => {
            I && K && A && g(I, N, j, {locale: P}, {kind: k}, F);
          }, [j, N, K, P, A, null == L ? void 0 : L.locale, I, F, k]);
          let V = {
            ref: $,
            onClick(e) {
              _ || 'function' != typeof S || S(e),
                _ &&
                  r.props &&
                  'function' == typeof r.props.onClick &&
                  r.props.onClick(e),
                I &&
                  !e.defaultPrevented &&
                  (function (e, t, n, r, i, a, u, c, s, f) {
                    let {nodeName: d} = e.currentTarget,
                      p = 'A' === d.toUpperCase();
                    if (
                      p &&
                      ((function (e) {
                        let t = e.currentTarget,
                          n = t.getAttribute('target');
                        return (
                          (n && '_self' !== n) ||
                          e.metaKey ||
                          e.ctrlKey ||
                          e.shiftKey ||
                          e.altKey ||
                          (e.nativeEvent && 2 === e.nativeEvent.which)
                        );
                      })(e) ||
                        (!s && !(0, l.isLocalURL)(n)))
                    )
                      return;
                    e.preventDefault();
                    let m = () => {
                      'beforePopState' in t
                        ? t[i ? 'replace' : 'push'](n, r, {
                            shallow: a,
                            locale: c,
                            scroll: u,
                          })
                        : t[i ? 'replace' : 'push'](r || n, {
                            forceOptimisticNavigation: !f,
                          });
                    };
                    s ? o.default.startTransition(m) : m();
                  })(e, I, N, j, x, C, R, P, F, A);
            },
            onMouseEnter(e) {
              _ || 'function' != typeof O || O(e),
                _ &&
                  r.props &&
                  'function' == typeof r.props.onMouseEnter &&
                  r.props.onMouseEnter(e),
                I &&
                  (A || !F) &&
                  g(
                    I,
                    N,
                    j,
                    {locale: P, priority: !0, bypassPrefetchedCheck: !0},
                    {kind: k},
                    F
                  );
            },
            onTouchStart(e) {
              _ || 'function' != typeof M || M(e),
                _ &&
                  r.props &&
                  'function' == typeof r.props.onTouchStart &&
                  r.props.onTouchStart(e),
                I &&
                  (A || !F) &&
                  g(
                    I,
                    N,
                    j,
                    {locale: P, priority: !0, bypassPrefetchedCheck: !0},
                    {kind: k},
                    F
                  );
            },
          };
          if ((0, u.isAbsoluteUrl)(j)) V.href = j;
          else if (!_ || E || ('a' === r.type && !('href' in r.props))) {
            let e = void 0 !== P ? P : null == L ? void 0 : L.locale,
              t =
                (null == L ? void 0 : L.isLocaleDomain) &&
                (0, p.getDomainLocale)(
                  j,
                  e,
                  null == L ? void 0 : L.locales,
                  null == L ? void 0 : L.domainLocales
                );
            V.href =
              t ||
              (0, m.addBasePath)(
                (0, c.addLocale)(j, e, null == L ? void 0 : L.defaultLocale)
              );
          }
          return _
            ? o.default.cloneElement(r, V)
            : o.default.createElement('a', {...T, ...V}, n);
        }),
        b = w;
      ('function' == typeof t.default ||
        ('object' == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, '__esModule', {value: !0}),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    80508: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', {value: !0}),
        Object.defineProperty(t, 'useIntersection', {
          enumerable: !0,
          get: function () {
            return u;
          },
        });
      let r = n(67294),
        o = n(10029),
        i = 'function' == typeof IntersectionObserver,
        l = new Map(),
        a = [];
      function u(e) {
        let {rootRef: t, rootMargin: n, disabled: u} = e,
          c = u || !i,
          [s, f] = (0, r.useState)(!1),
          d = (0, r.useRef)(null),
          p = (0, r.useCallback)((e) => {
            d.current = e;
          }, []);
        (0, r.useEffect)(() => {
          if (i) {
            if (c || s) return;
            let e = d.current;
            if (e && e.tagName) {
              let r = (function (e, t, n) {
                let {
                  id: r,
                  observer: o,
                  elements: i,
                } = (function (e) {
                  let t;
                  let n = {root: e.root || null, margin: e.rootMargin || ''},
                    r = a.find(
                      (e) => e.root === n.root && e.margin === n.margin
                    );
                  if (r && (t = l.get(r))) return t;
                  let o = new Map(),
                    i = new IntersectionObserver((e) => {
                      e.forEach((e) => {
                        let t = o.get(e.target),
                          n = e.isIntersecting || e.intersectionRatio > 0;
                        t && n && t(n);
                      });
                    }, e);
                  return (
                    (t = {id: n, observer: i, elements: o}),
                    a.push(n),
                    l.set(n, t),
                    t
                  );
                })(n);
                return (
                  i.set(e, t),
                  o.observe(e),
                  function () {
                    if ((i.delete(e), o.unobserve(e), 0 === i.size)) {
                      o.disconnect(), l.delete(r);
                      let e = a.findIndex(
                        (e) => e.root === r.root && e.margin === r.margin
                      );
                      e > -1 && a.splice(e, 1);
                    }
                  }
                );
              })(e, (e) => e && f(e), {
                root: null == t ? void 0 : t.current,
                rootMargin: n,
              });
              return r;
            }
          } else if (!s) {
            let e = (0, o.requestIdleCallback)(() => f(!0));
            return () => (0, o.cancelIdleCallback)(e);
          }
        }, [c, n, t, s, d.current]);
        let m = (0, r.useCallback)(() => {
          f(!1);
        }, []);
        return [p, s, m];
      }
      ('function' == typeof t.default ||
        ('object' == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, '__esModule', {value: !0}),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    97757: function (e, t) {
      'use strict';
      function n(e) {
        let {
            widthInt: t,
            heightInt: n,
            blurWidth: r,
            blurHeight: o,
            blurDataURL: i,
            objectFit: l,
          } = e,
          a = r || t,
          u = o || n,
          c = i.startsWith('data:image/jpeg')
            ? "%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%"
            : '';
        return a && u
          ? "%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 " +
              a +
              ' ' +
              u +
              "'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='" +
              (r && o ? '1' : '20') +
              "'/%3E" +
              c +
              "%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='" +
              i +
              "'/%3E%3C/svg%3E"
          : "%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='" +
              ('contain' === l
                ? 'xMidYMid'
                : 'cover' === l
                ? 'xMidYMid slice'
                : 'none') +
              "' x='0' y='0' height='100%25' width='100%25' href='" +
              i +
              "'/%3E%3C/svg%3E";
      }
      Object.defineProperty(t, '__esModule', {value: !0}),
        Object.defineProperty(t, 'getImageBlurSvg', {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
    },
    57746: function (e, t) {
      'use strict';
      function n(e) {
        let {config: t, src: n, width: r, quality: o} = e;
        return (
          t.path +
          '?url=' +
          encodeURIComponent(n) +
          '&w=' +
          r +
          '&q=' +
          (o || 75)
        );
      }
      Object.defineProperty(t, '__esModule', {value: !0}),
        Object.defineProperty(t, 'default', {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        (n.__next_img_default = !0);
      let r = n;
    },
    9008: function (e, t, n) {
      e.exports = n(42636);
    },
    25675: function (e, t, n) {
      e.exports = n(93740);
    },
    41664: function (e, t, n) {
      e.exports = n(95569);
    },
    8770: function (e, t, n) {
      'use strict';
      let r, o;
      function i() {
        return (i = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  ({}.hasOwnProperty.call(n, r) && (e[r] = n[r]));
              }
              return e;
            }).apply(null, arguments);
      }
      n.d(t, {
        VY: function () {
          return ry;
        },
        ck: function () {
          return rb;
        },
        __: function () {
          return rw;
        },
        Uv: function () {
          return rg;
        },
        fC: function () {
          return rv;
        },
        Z0: function () {
          return rE;
        },
        xz: function () {
          return rh;
        },
      });
      var l,
        a,
        u,
        c,
        s,
        f,
        d = n(67294),
        p = n.t(d, 2);
      function m(e, t, {checkForDefaultPrevented: n = !0} = {}) {
        return function (r) {
          if ((null == e || e(r), !1 === n || !r.defaultPrevented))
            return null == t ? void 0 : t(r);
        };
      }
      function v(e, t = []) {
        let n = [],
          r = () => {
            let t = n.map((e) => (0, d.createContext)(e));
            return function (n) {
              let r = (null == n ? void 0 : n[e]) || t;
              return (0, d.useMemo)(
                () => ({[`__scope${e}`]: {...n, [e]: r}}),
                [n, r]
              );
            };
          };
        return (
          (r.scopeName = e),
          [
            function (t, r) {
              let o = (0, d.createContext)(r),
                i = n.length;
              function l(t) {
                let {scope: n, children: r, ...l} = t,
                  a = (null == n ? void 0 : n[e][i]) || o,
                  u = (0, d.useMemo)(() => l, Object.values(l));
                return (0, d.createElement)(a.Provider, {value: u}, r);
              }
              return (
                (n = [...n, r]),
                (l.displayName = t + 'Provider'),
                [
                  l,
                  function (n, l) {
                    let a = (null == l ? void 0 : l[e][i]) || o,
                      u = (0, d.useContext)(a);
                    if (u) return u;
                    if (void 0 !== r) return r;
                    throw Error(`\`${n}\` must be used within \`${t}\``);
                  },
                ]
              );
            },
            (function (...e) {
              let t = e[0];
              if (1 === e.length) return t;
              let n = () => {
                let n = e.map((e) => ({useScope: e(), scopeName: e.scopeName}));
                return function (e) {
                  let r = n.reduce((t, {useScope: n, scopeName: r}) => {
                    let o = n(e),
                      i = o[`__scope${r}`];
                    return {...t, ...i};
                  }, {});
                  return (0, d.useMemo)(
                    () => ({[`__scope${t.scopeName}`]: r}),
                    [r]
                  );
                };
              };
              return (n.scopeName = t.scopeName), n;
            })(r, ...t),
          ]
        );
      }
      var h = n(73935);
      function g(...e) {
        return (t) =>
          e.forEach((e) => {
            var n;
            'function' == typeof (n = e) ? n(t) : null != n && (n.current = t);
          });
      }
      function y(...e) {
        return (0, d.useCallback)(g(...e), e);
      }
      let w = (0, d.forwardRef)((e, t) => {
        let {children: n, ...r} = e,
          o = d.Children.toArray(n),
          l = o.find(x);
        if (l) {
          let e = l.props.children,
            n = o.map((t) =>
              t !== l
                ? t
                : d.Children.count(e) > 1
                ? d.Children.only(null)
                : (0, d.isValidElement)(e)
                ? e.props.children
                : null
            );
          return (0, d.createElement)(
            b,
            i({}, r, {ref: t}),
            (0, d.isValidElement)(e) ? (0, d.cloneElement)(e, void 0, n) : null
          );
        }
        return (0, d.createElement)(b, i({}, r, {ref: t}), n);
      });
      w.displayName = 'Slot';
      let b = (0, d.forwardRef)((e, t) => {
        let {children: n, ...r} = e;
        return (0, d.isValidElement)(n)
          ? (0, d.cloneElement)(n, {
              ...(function (e, t) {
                let n = {...t};
                for (let r in t) {
                  let o = e[r],
                    i = t[r],
                    l = /^on[A-Z]/.test(r);
                  l
                    ? o && i
                      ? (n[r] = (...e) => {
                          i(...e), o(...e);
                        })
                      : o && (n[r] = o)
                    : 'style' === r
                    ? (n[r] = {...o, ...i})
                    : 'className' === r &&
                      (n[r] = [o, i].filter(Boolean).join(' '));
                }
                return {...e, ...n};
              })(r, n.props),
              ref: t ? g(t, n.ref) : n.ref,
            })
          : d.Children.count(n) > 1
          ? d.Children.only(null)
          : null;
      });
      b.displayName = 'SlotClone';
      let E = ({children: e}) => (0, d.createElement)(d.Fragment, null, e);
      function x(e) {
        return (0, d.isValidElement)(e) && e.type === E;
      }
      let C = [
        'a',
        'button',
        'div',
        'form',
        'h2',
        'h3',
        'img',
        'input',
        'label',
        'li',
        'nav',
        'ol',
        'p',
        'span',
        'svg',
        'ul',
      ].reduce((e, t) => {
        let n = (0, d.forwardRef)((e, n) => {
          let {asChild: r, ...o} = e,
            l = r ? w : t;
          return (
            (0, d.useEffect)(() => {
              window[Symbol.for('radix-ui')] = !0;
            }, []),
            (0, d.createElement)(l, i({}, o, {ref: n}))
          );
        });
        return (n.displayName = `Primitive.${t}`), {...e, [t]: n};
      }, {});
      function R(e, t) {
        e && (0, h.flushSync)(() => e.dispatchEvent(t));
      }
      function P(e) {
        let t = e + 'CollectionProvider',
          [n, r] = v(t),
          [o, i] = n(t, {collectionRef: {current: null}, itemMap: new Map()}),
          l = (e) => {
            let {scope: t, children: n} = e,
              r = d.useRef(null),
              i = d.useRef(new Map()).current;
            return d.createElement(
              o,
              {scope: t, itemMap: i, collectionRef: r},
              n
            );
          },
          a = e + 'CollectionSlot',
          u = d.forwardRef((e, t) => {
            let {scope: n, children: r} = e,
              o = i(a, n),
              l = y(t, o.collectionRef);
            return d.createElement(w, {ref: l}, r);
          }),
          c = e + 'CollectionItemSlot',
          s = 'data-radix-collection-item',
          f = d.forwardRef((e, t) => {
            let {scope: n, children: r, ...o} = e,
              l = d.useRef(null),
              a = y(t, l),
              u = i(c, n);
            return (
              d.useEffect(
                () => (
                  u.itemMap.set(l, {ref: l, ...o}),
                  () => void u.itemMap.delete(l)
                )
              ),
              d.createElement(w, {[s]: '', ref: a}, r)
            );
          });
        return [
          {Provider: l, Slot: u, ItemSlot: f},
          function (t) {
            let n = i(e + 'CollectionConsumer', t),
              r = d.useCallback(() => {
                let e = n.collectionRef.current;
                if (!e) return [];
                let t = Array.from(e.querySelectorAll(`[${s}]`)),
                  r = Array.from(n.itemMap.values()),
                  o = r.sort(
                    (e, n) =>
                      t.indexOf(e.ref.current) - t.indexOf(n.ref.current)
                  );
                return o;
              }, [n.collectionRef, n.itemMap]);
            return r;
          },
          r,
        ];
      }
      let S = (0, d.createContext)(void 0);
      function O(e) {
        let t = (0, d.useContext)(S);
        return e || t || 'ltr';
      }
      function M(e) {
        let t = (0, d.useRef)(e);
        return (
          (0, d.useEffect)(() => {
            t.current = e;
          }),
          (0, d.useMemo)(
            () =>
              (...e) => {
                var n;
                return null === (n = t.current) || void 0 === n
                  ? void 0
                  : n.call(t, ...e);
              },
            []
          )
        );
      }
      let _ = 'dismissableLayer.update',
        T = (0, d.createContext)({
          layers: new Set(),
          layersWithOutsidePointerEventsDisabled: new Set(),
          branches: new Set(),
        }),
        A = (0, d.forwardRef)((e, t) => {
          var n;
          let {
              disableOutsidePointerEvents: o = !1,
              onEscapeKeyDown: l,
              onPointerDownOutside: a,
              onFocusOutside: u,
              onInteractOutside: c,
              onDismiss: s,
              ...f
            } = e,
            p = (0, d.useContext)(T),
            [v, h] = (0, d.useState)(null),
            g =
              null !== (n = null == v ? void 0 : v.ownerDocument) &&
              void 0 !== n
                ? n
                : null == globalThis
                ? void 0
                : globalThis.document,
            [, w] = (0, d.useState)({}),
            b = y(t, (e) => h(e)),
            E = Array.from(p.layers),
            [x] = [...p.layersWithOutsidePointerEventsDisabled].slice(-1),
            R = E.indexOf(x),
            P = v ? E.indexOf(v) : -1,
            S = p.layersWithOutsidePointerEventsDisabled.size > 0,
            O = P >= R,
            A = (function (
              e,
              t = null == globalThis ? void 0 : globalThis.document
            ) {
              let n = M(e),
                r = (0, d.useRef)(!1),
                o = (0, d.useRef)(() => {});
              return (
                (0, d.useEffect)(() => {
                  let e = (e) => {
                      if (e.target && !r.current) {
                        let r = {originalEvent: e};
                        function i() {
                          L('dismissableLayer.pointerDownOutside', n, r, {
                            discrete: !0,
                          });
                        }
                        'touch' === e.pointerType
                          ? (t.removeEventListener('click', o.current),
                            (o.current = i),
                            t.addEventListener('click', o.current, {once: !0}))
                          : i();
                      } else t.removeEventListener('click', o.current);
                      r.current = !1;
                    },
                    i = window.setTimeout(() => {
                      t.addEventListener('pointerdown', e);
                    }, 0);
                  return () => {
                    window.clearTimeout(i),
                      t.removeEventListener('pointerdown', e),
                      t.removeEventListener('click', o.current);
                  };
                }, [t, n]),
                {onPointerDownCapture: () => (r.current = !0)}
              );
            })((e) => {
              let t = e.target,
                n = [...p.branches].some((e) => e.contains(t));
              !O ||
                n ||
                (null == a || a(e),
                null == c || c(e),
                e.defaultPrevented || null == s || s());
            }, g),
            D = (function (
              e,
              t = null == globalThis ? void 0 : globalThis.document
            ) {
              let n = M(e),
                r = (0, d.useRef)(!1);
              return (
                (0, d.useEffect)(() => {
                  let e = (e) => {
                    e.target &&
                      !r.current &&
                      L(
                        'dismissableLayer.focusOutside',
                        n,
                        {originalEvent: e},
                        {discrete: !1}
                      );
                  };
                  return (
                    t.addEventListener('focusin', e),
                    () => t.removeEventListener('focusin', e)
                  );
                }, [t, n]),
                {
                  onFocusCapture: () => (r.current = !0),
                  onBlurCapture: () => (r.current = !1),
                }
              );
            })((e) => {
              let t = e.target,
                n = [...p.branches].some((e) => e.contains(t));
              n ||
                (null == u || u(e),
                null == c || c(e),
                e.defaultPrevented || null == s || s());
            }, g);
          return (
            !(function (
              e,
              t = null == globalThis ? void 0 : globalThis.document
            ) {
              let n = M(e);
              (0, d.useEffect)(() => {
                let e = (e) => {
                  'Escape' === e.key && n(e);
                };
                return (
                  t.addEventListener('keydown', e),
                  () => t.removeEventListener('keydown', e)
                );
              }, [n, t]);
            })((e) => {
              let t = P === p.layers.size - 1;
              t &&
                (null == l || l(e),
                !e.defaultPrevented && s && (e.preventDefault(), s()));
            }, g),
            (0, d.useEffect)(() => {
              if (v)
                return (
                  o &&
                    (0 === p.layersWithOutsidePointerEventsDisabled.size &&
                      ((r = g.body.style.pointerEvents),
                      (g.body.style.pointerEvents = 'none')),
                    p.layersWithOutsidePointerEventsDisabled.add(v)),
                  p.layers.add(v),
                  k(),
                  () => {
                    o &&
                      1 === p.layersWithOutsidePointerEventsDisabled.size &&
                      (g.body.style.pointerEvents = r);
                  }
                );
            }, [v, g, o, p]),
            (0, d.useEffect)(
              () => () => {
                v &&
                  (p.layers.delete(v),
                  p.layersWithOutsidePointerEventsDisabled.delete(v),
                  k());
              },
              [v, p]
            ),
            (0, d.useEffect)(() => {
              let e = () => w({});
              return (
                document.addEventListener(_, e),
                () => document.removeEventListener(_, e)
              );
            }, []),
            (0, d.createElement)(
              C.div,
              i({}, f, {
                ref: b,
                style: {
                  pointerEvents: S ? (O ? 'auto' : 'none') : void 0,
                  ...e.style,
                },
                onFocusCapture: m(e.onFocusCapture, D.onFocusCapture),
                onBlurCapture: m(e.onBlurCapture, D.onBlurCapture),
                onPointerDownCapture: m(
                  e.onPointerDownCapture,
                  A.onPointerDownCapture
                ),
              })
            )
          );
        });
      function k() {
        let e = new CustomEvent(_);
        document.dispatchEvent(e);
      }
      function L(e, t, n, {discrete: r}) {
        let o = n.originalEvent.target,
          i = new CustomEvent(e, {bubbles: !1, cancelable: !0, detail: n});
        t && o.addEventListener(e, t, {once: !0}),
          r ? R(o, i) : o.dispatchEvent(i);
      }
      let D = 0;
      function I() {
        let e = document.createElement('span');
        return (
          e.setAttribute('data-radix-focus-guard', ''),
          (e.tabIndex = 0),
          (e.style.cssText =
            'outline: none; opacity: 0; position: fixed; pointer-events: none'),
          e
        );
      }
      let F = 'focusScope.autoFocusOnMount',
        N = 'focusScope.autoFocusOnUnmount',
        j = {bubbles: !1, cancelable: !0},
        W = (0, d.forwardRef)((e, t) => {
          let {
              loop: n = !1,
              trapped: r = !1,
              onMountAutoFocus: o,
              onUnmountAutoFocus: l,
              ...a
            } = e,
            [u, c] = (0, d.useState)(null),
            s = M(o),
            f = M(l),
            p = (0, d.useRef)(null),
            m = y(t, (e) => c(e)),
            v = (0, d.useRef)({
              paused: !1,
              pause() {
                this.paused = !0;
              },
              resume() {
                this.paused = !1;
              },
            }).current;
          (0, d.useEffect)(() => {
            if (r) {
              function e(e) {
                if (v.paused || !u) return;
                let t = e.target;
                u.contains(t) ? (p.current = t) : H(p.current, {select: !0});
              }
              function t(e) {
                if (v.paused || !u) return;
                let t = e.relatedTarget;
                null === t || u.contains(t) || H(p.current, {select: !0});
              }
              document.addEventListener('focusin', e),
                document.addEventListener('focusout', t);
              let n = new MutationObserver(function (e) {
                let t = document.activeElement;
                if (t === document.body)
                  for (let t of e) t.removedNodes.length > 0 && H(u);
              });
              return (
                u && n.observe(u, {childList: !0, subtree: !0}),
                () => {
                  document.removeEventListener('focusin', e),
                    document.removeEventListener('focusout', t),
                    n.disconnect();
                }
              );
            }
          }, [r, u, v.paused]),
            (0, d.useEffect)(() => {
              if (u) {
                K.add(v);
                let e = document.activeElement,
                  t = u.contains(e);
                if (!t) {
                  let t = new CustomEvent(F, j);
                  u.addEventListener(F, s),
                    u.dispatchEvent(t),
                    t.defaultPrevented ||
                      ((function (e, {select: t = !1} = {}) {
                        let n = document.activeElement;
                        for (let r of e)
                          if ((H(r, {select: t}), document.activeElement !== n))
                            return;
                      })(
                        B(u).filter((e) => 'A' !== e.tagName),
                        {select: !0}
                      ),
                      document.activeElement === e && H(u));
                }
                return () => {
                  u.removeEventListener(F, s),
                    setTimeout(() => {
                      let t = new CustomEvent(N, j);
                      u.addEventListener(N, f),
                        u.dispatchEvent(t),
                        t.defaultPrevented ||
                          H(null != e ? e : document.body, {select: !0}),
                        u.removeEventListener(N, f),
                        K.remove(v);
                    }, 0);
                };
              }
            }, [u, s, f, v]);
          let h = (0, d.useCallback)(
            (e) => {
              if ((!n && !r) || v.paused) return;
              let t = 'Tab' === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                o = document.activeElement;
              if (t && o) {
                let t = e.currentTarget,
                  [r, i] = (function (e) {
                    let t = B(e),
                      n = z(t, e),
                      r = z(t.reverse(), e);
                    return [n, r];
                  })(t);
                r && i
                  ? e.shiftKey || o !== i
                    ? e.shiftKey &&
                      o === r &&
                      (e.preventDefault(), n && H(i, {select: !0}))
                    : (e.preventDefault(), n && H(r, {select: !0}))
                  : o === t && e.preventDefault();
              }
            },
            [n, r, v.paused]
          );
          return (0, d.createElement)(
            C.div,
            i({tabIndex: -1}, a, {ref: m, onKeyDown: h})
          );
        });
      function B(e) {
        let t = [],
          n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: (e) => {
              let t = 'INPUT' === e.tagName && 'hidden' === e.type;
              return e.disabled || e.hidden || t
                ? NodeFilter.FILTER_SKIP
                : e.tabIndex >= 0
                ? NodeFilter.FILTER_ACCEPT
                : NodeFilter.FILTER_SKIP;
            },
          });
        for (; n.nextNode(); ) t.push(n.currentNode);
        return t;
      }
      function z(e, t) {
        for (let n of e)
          if (
            !(function (e, {upTo: t}) {
              if ('hidden' === getComputedStyle(e).visibility) return !0;
              for (; e && (void 0 === t || e !== t); ) {
                if ('none' === getComputedStyle(e).display) return !0;
                e = e.parentElement;
              }
              return !1;
            })(n, {upTo: t})
          )
            return n;
      }
      function H(e, {select: t = !1} = {}) {
        if (e && e.focus) {
          var n;
          let r = document.activeElement;
          e.focus({preventScroll: !0}),
            e !== r &&
              (n = e) instanceof HTMLInputElement &&
              'select' in n &&
              t &&
              e.select();
        }
      }
      let K =
        ((o = []),
        {
          add(e) {
            let t = o[0];
            e !== t && (null == t || t.pause()), (o = U(o, e)).unshift(e);
          },
          remove(e) {
            var t;
            null === (t = (o = U(o, e))[0]) || void 0 === t || t.resume();
          },
        });
      function U(e, t) {
        let n = [...e],
          r = n.indexOf(t);
        return -1 !== r && n.splice(r, 1), n;
      }
      let $ = (null == globalThis ? void 0 : globalThis.document)
          ? d.useLayoutEffect
          : () => {},
        V = p['useId'.toString()] || (() => void 0),
        G = 0,
        Y = ['top', 'right', 'bottom', 'left'],
        X = Math.min,
        q = Math.max,
        Z = Math.round,
        J = Math.floor,
        Q = (e) => ({x: e, y: e}),
        ee = {left: 'right', right: 'left', bottom: 'top', top: 'bottom'},
        et = {start: 'end', end: 'start'};
      function en(e, t) {
        return 'function' == typeof e ? e(t) : e;
      }
      function er(e) {
        return e.split('-')[0];
      }
      function eo(e) {
        return e.split('-')[1];
      }
      function ei(e) {
        return 'x' === e ? 'y' : 'x';
      }
      function el(e) {
        return 'y' === e ? 'height' : 'width';
      }
      function ea(e) {
        return ['top', 'bottom'].includes(er(e)) ? 'y' : 'x';
      }
      function eu(e) {
        return e.replace(/start|end/g, (e) => et[e]);
      }
      function ec(e) {
        return e.replace(/left|right|bottom|top/g, (e) => ee[e]);
      }
      function es(e) {
        return 'number' != typeof e
          ? {top: 0, right: 0, bottom: 0, left: 0, ...e}
          : {top: e, right: e, bottom: e, left: e};
      }
      function ef(e) {
        let {x: t, y: n, width: r, height: o} = e;
        return {
          width: r,
          height: o,
          top: n,
          left: t,
          right: t + r,
          bottom: n + o,
          x: t,
          y: n,
        };
      }
      function ed(e, t, n) {
        let r,
          {reference: o, floating: i} = e,
          l = ea(t),
          a = ei(ea(t)),
          u = el(a),
          c = er(t),
          s = 'y' === l,
          f = o.x + o.width / 2 - i.width / 2,
          d = o.y + o.height / 2 - i.height / 2,
          p = o[u] / 2 - i[u] / 2;
        switch (c) {
          case 'top':
            r = {x: f, y: o.y - i.height};
            break;
          case 'bottom':
            r = {x: f, y: o.y + o.height};
            break;
          case 'right':
            r = {x: o.x + o.width, y: d};
            break;
          case 'left':
            r = {x: o.x - i.width, y: d};
            break;
          default:
            r = {x: o.x, y: o.y};
        }
        switch (eo(t)) {
          case 'start':
            r[a] -= p * (n && s ? -1 : 1);
            break;
          case 'end':
            r[a] += p * (n && s ? -1 : 1);
        }
        return r;
      }
      let ep = async (e, t, n) => {
        let {
            placement: r = 'bottom',
            strategy: o = 'absolute',
            middleware: i = [],
            platform: l,
          } = n,
          a = i.filter(Boolean),
          u = await (null == l.isRTL ? void 0 : l.isRTL(t)),
          c = await l.getElementRects({reference: e, floating: t, strategy: o}),
          {x: s, y: f} = ed(c, r, u),
          d = r,
          p = {},
          m = 0;
        for (let n = 0; n < a.length; n++) {
          let {name: i, fn: v} = a[n],
            {
              x: h,
              y: g,
              data: y,
              reset: w,
            } = await v({
              x: s,
              y: f,
              initialPlacement: r,
              placement: d,
              strategy: o,
              middlewareData: p,
              rects: c,
              platform: l,
              elements: {reference: e, floating: t},
            });
          (s = null != h ? h : s),
            (f = null != g ? g : f),
            (p = {...p, [i]: {...p[i], ...y}}),
            w &&
              m <= 50 &&
              (m++,
              'object' == typeof w &&
                (w.placement && (d = w.placement),
                w.rects &&
                  (c =
                    !0 === w.rects
                      ? await l.getElementRects({
                          reference: e,
                          floating: t,
                          strategy: o,
                        })
                      : w.rects),
                ({x: s, y: f} = ed(c, d, u))),
              (n = -1));
        }
        return {x: s, y: f, placement: d, strategy: o, middlewareData: p};
      };
      async function em(e, t) {
        var n;
        void 0 === t && (t = {});
        let {x: r, y: o, platform: i, rects: l, elements: a, strategy: u} = e,
          {
            boundary: c = 'clippingAncestors',
            rootBoundary: s = 'viewport',
            elementContext: f = 'floating',
            altBoundary: d = !1,
            padding: p = 0,
          } = en(t, e),
          m = es(p),
          v = a[d ? ('floating' === f ? 'reference' : 'floating') : f],
          h = ef(
            await i.getClippingRect({
              element:
                null ==
                  (n = await (null == i.isElement ? void 0 : i.isElement(v))) ||
                n
                  ? v
                  : v.contextElement ||
                    (await (null == i.getDocumentElement
                      ? void 0
                      : i.getDocumentElement(a.floating))),
              boundary: c,
              rootBoundary: s,
              strategy: u,
            })
          ),
          g =
            'floating' === f
              ? {x: r, y: o, width: l.floating.width, height: l.floating.height}
              : l.reference,
          y = await (null == i.getOffsetParent
            ? void 0
            : i.getOffsetParent(a.floating)),
          w = ((await (null == i.isElement ? void 0 : i.isElement(y))) &&
            (await (null == i.getScale ? void 0 : i.getScale(y)))) || {
            x: 1,
            y: 1,
          },
          b = ef(
            i.convertOffsetParentRelativeRectToViewportRelativeRect
              ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
                  elements: a,
                  rect: g,
                  offsetParent: y,
                  strategy: u,
                })
              : g
          );
        return {
          top: (h.top - b.top + m.top) / w.y,
          bottom: (b.bottom - h.bottom + m.bottom) / w.y,
          left: (h.left - b.left + m.left) / w.x,
          right: (b.right - h.right + m.right) / w.x,
        };
      }
      let ev = (e) => ({
        name: 'arrow',
        options: e,
        async fn(t) {
          let {
              x: n,
              y: r,
              placement: o,
              rects: i,
              platform: l,
              elements: a,
              middlewareData: u,
            } = t,
            {element: c, padding: s = 0} = en(e, t) || {};
          if (null == c) return {};
          let f = es(s),
            d = {x: n, y: r},
            p = ei(ea(o)),
            m = el(p),
            v = await l.getDimensions(c),
            h = 'y' === p,
            g = h ? 'clientHeight' : 'clientWidth',
            y = i.reference[m] + i.reference[p] - d[p] - i.floating[m],
            w = d[p] - i.reference[p],
            b = await (null == l.getOffsetParent
              ? void 0
              : l.getOffsetParent(c)),
            E = b ? b[g] : 0;
          (E && (await (null == l.isElement ? void 0 : l.isElement(b)))) ||
            (E = a.floating[g] || i.floating[m]);
          let x = E / 2 - v[m] / 2 - 1,
            C = X(f[h ? 'top' : 'left'], x),
            R = X(f[h ? 'bottom' : 'right'], x),
            P = E - v[m] - R,
            S = E / 2 - v[m] / 2 + (y / 2 - w / 2),
            O = q(C, X(S, P)),
            M =
              !u.arrow &&
              null != eo(o) &&
              S !== O &&
              i.reference[m] / 2 - (S < C ? C : R) - v[m] / 2 < 0,
            _ = M ? (S < C ? S - C : S - P) : 0;
          return {
            [p]: d[p] + _,
            data: {
              [p]: O,
              centerOffset: S - O - _,
              ...(M && {alignmentOffset: _}),
            },
            reset: M,
          };
        },
      });
      function eh(e, t) {
        return {
          top: e.top - t.height,
          right: e.right - t.width,
          bottom: e.bottom - t.height,
          left: e.left - t.width,
        };
      }
      function eg(e) {
        return Y.some((t) => e[t] >= 0);
      }
      async function ey(e, t) {
        let {placement: n, platform: r, elements: o} = e,
          i = await (null == r.isRTL ? void 0 : r.isRTL(o.floating)),
          l = er(n),
          a = eo(n),
          u = 'y' === ea(n),
          c = ['left', 'top'].includes(l) ? -1 : 1,
          s = i && u ? -1 : 1,
          f = en(t, e),
          {
            mainAxis: d,
            crossAxis: p,
            alignmentAxis: m,
          } = 'number' == typeof f
            ? {mainAxis: f, crossAxis: 0, alignmentAxis: null}
            : {mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...f};
        return (
          a && 'number' == typeof m && (p = 'end' === a ? -1 * m : m),
          u ? {x: p * s, y: d * c} : {x: d * c, y: p * s}
        );
      }
      function ew(e) {
        return ex(e) ? (e.nodeName || '').toLowerCase() : '#document';
      }
      function eb(e) {
        var t;
        return (
          (null == e || null == (t = e.ownerDocument)
            ? void 0
            : t.defaultView) || window
        );
      }
      function eE(e) {
        var t;
        return null ==
          (t = (ex(e) ? e.ownerDocument : e.document) || window.document)
          ? void 0
          : t.documentElement;
      }
      function ex(e) {
        return e instanceof Node || e instanceof eb(e).Node;
      }
      function eC(e) {
        return e instanceof Element || e instanceof eb(e).Element;
      }
      function eR(e) {
        return e instanceof HTMLElement || e instanceof eb(e).HTMLElement;
      }
      function eP(e) {
        return (
          'undefined' != typeof ShadowRoot &&
          (e instanceof ShadowRoot || e instanceof eb(e).ShadowRoot)
        );
      }
      function eS(e) {
        let {overflow: t, overflowX: n, overflowY: r, display: o} = eT(e);
        return (
          /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
          !['inline', 'contents'].includes(o)
        );
      }
      function eO(e) {
        let t = eM(),
          n = eT(e);
        return (
          'none' !== n.transform ||
          'none' !== n.perspective ||
          (!!n.containerType && 'normal' !== n.containerType) ||
          (!t && !!n.backdropFilter && 'none' !== n.backdropFilter) ||
          (!t && !!n.filter && 'none' !== n.filter) ||
          ['transform', 'perspective', 'filter'].some((e) =>
            (n.willChange || '').includes(e)
          ) ||
          ['paint', 'layout', 'strict', 'content'].some((e) =>
            (n.contain || '').includes(e)
          )
        );
      }
      function eM() {
        return (
          'undefined' != typeof CSS &&
          !!CSS.supports &&
          CSS.supports('-webkit-backdrop-filter', 'none')
        );
      }
      function e_(e) {
        return ['html', 'body', '#document'].includes(ew(e));
      }
      function eT(e) {
        return eb(e).getComputedStyle(e);
      }
      function eA(e) {
        return eC(e)
          ? {scrollLeft: e.scrollLeft, scrollTop: e.scrollTop}
          : {scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset};
      }
      function ek(e) {
        if ('html' === ew(e)) return e;
        let t = e.assignedSlot || e.parentNode || (eP(e) && e.host) || eE(e);
        return eP(t) ? t.host : t;
      }
      function eL(e, t, n) {
        var r;
        void 0 === t && (t = []), void 0 === n && (n = !0);
        let o = (function e(t) {
            let n = ek(t);
            return e_(n)
              ? t.ownerDocument
                ? t.ownerDocument.body
                : t.body
              : eR(n) && eS(n)
              ? n
              : e(n);
          })(e),
          i = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
          l = eb(o);
        return i
          ? t.concat(
              l,
              l.visualViewport || [],
              eS(o) ? o : [],
              l.frameElement && n ? eL(l.frameElement) : []
            )
          : t.concat(o, eL(o, [], n));
      }
      function eD(e) {
        let t = eT(e),
          n = parseFloat(t.width) || 0,
          r = parseFloat(t.height) || 0,
          o = eR(e),
          i = o ? e.offsetWidth : n,
          l = o ? e.offsetHeight : r,
          a = Z(n) !== i || Z(r) !== l;
        return a && ((n = i), (r = l)), {width: n, height: r, $: a};
      }
      function eI(e) {
        return eC(e) ? e : e.contextElement;
      }
      function eF(e) {
        let t = eI(e);
        if (!eR(t)) return Q(1);
        let n = t.getBoundingClientRect(),
          {width: r, height: o, $: i} = eD(t),
          l = (i ? Z(n.width) : n.width) / r,
          a = (i ? Z(n.height) : n.height) / o;
        return (
          (l && Number.isFinite(l)) || (l = 1),
          (a && Number.isFinite(a)) || (a = 1),
          {x: l, y: a}
        );
      }
      let eN = Q(0);
      function ej(e) {
        let t = eb(e);
        return eM() && t.visualViewport
          ? {x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop}
          : eN;
      }
      function eW(e, t, n, r) {
        var o;
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        let i = e.getBoundingClientRect(),
          l = eI(e),
          a = Q(1);
        t && (r ? eC(r) && (a = eF(r)) : (a = eF(e)));
        let u = (void 0 === (o = n) && (o = !1), r && (!o || r === eb(l)) && o)
            ? ej(l)
            : Q(0),
          c = (i.left + u.x) / a.x,
          s = (i.top + u.y) / a.y,
          f = i.width / a.x,
          d = i.height / a.y;
        if (l) {
          let e = eb(l),
            t = r && eC(r) ? eb(r) : r,
            n = e,
            o = n.frameElement;
          for (; o && r && t !== n; ) {
            let e = eF(o),
              t = o.getBoundingClientRect(),
              r = eT(o),
              i = t.left + (o.clientLeft + parseFloat(r.paddingLeft)) * e.x,
              l = t.top + (o.clientTop + parseFloat(r.paddingTop)) * e.y;
            (c *= e.x),
              (s *= e.y),
              (f *= e.x),
              (d *= e.y),
              (c += i),
              (s += l),
              (o = (n = eb(o)).frameElement);
          }
        }
        return ef({width: f, height: d, x: c, y: s});
      }
      let eB = [':popover-open', ':modal'];
      function ez(e) {
        return eB.some((t) => {
          try {
            return e.matches(t);
          } catch (e) {
            return !1;
          }
        });
      }
      function eH(e) {
        return eW(eE(e)).left + eA(e).scrollLeft;
      }
      function eK(e, t, n) {
        let r;
        if ('viewport' === t)
          r = (function (e, t) {
            let n = eb(e),
              r = eE(e),
              o = n.visualViewport,
              i = r.clientWidth,
              l = r.clientHeight,
              a = 0,
              u = 0;
            if (o) {
              (i = o.width), (l = o.height);
              let e = eM();
              (!e || (e && 'fixed' === t)) &&
                ((a = o.offsetLeft), (u = o.offsetTop));
            }
            return {width: i, height: l, x: a, y: u};
          })(e, n);
        else if ('document' === t)
          r = (function (e) {
            let t = eE(e),
              n = eA(e),
              r = e.ownerDocument.body,
              o = q(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
              i = q(
                t.scrollHeight,
                t.clientHeight,
                r.scrollHeight,
                r.clientHeight
              ),
              l = -n.scrollLeft + eH(e),
              a = -n.scrollTop;
            return (
              'rtl' === eT(r).direction &&
                (l += q(t.clientWidth, r.clientWidth) - o),
              {width: o, height: i, x: l, y: a}
            );
          })(eE(e));
        else if (eC(t))
          r = (function (e, t) {
            let n = eW(e, !0, 'fixed' === t),
              r = n.top + e.clientTop,
              o = n.left + e.clientLeft,
              i = eR(e) ? eF(e) : Q(1),
              l = e.clientWidth * i.x,
              a = e.clientHeight * i.y,
              u = o * i.x,
              c = r * i.y;
            return {width: l, height: a, x: u, y: c};
          })(t, n);
        else {
          let n = ej(e);
          r = {...t, x: t.x - n.x, y: t.y - n.y};
        }
        return ef(r);
      }
      function eU(e) {
        return 'static' === eT(e).position;
      }
      function e$(e, t) {
        return eR(e) && 'fixed' !== eT(e).position
          ? t
            ? t(e)
            : e.offsetParent
          : null;
      }
      function eV(e, t) {
        let n = eb(e);
        if (ez(e)) return n;
        if (!eR(e)) {
          let t = ek(e);
          for (; t && !e_(t); ) {
            if (eC(t) && !eU(t)) return t;
            t = ek(t);
          }
          return n;
        }
        let r = e$(e, t);
        for (; r && ['table', 'td', 'th'].includes(ew(r)) && eU(r); )
          r = e$(r, t);
        return r && e_(r) && eU(r) && !eO(r)
          ? n
          : r ||
              (function (e) {
                let t = ek(e);
                for (; eR(t) && !e_(t); ) {
                  if (eO(t)) return t;
                  t = ek(t);
                }
                return null;
              })(e) ||
              n;
      }
      let eG = async function (e) {
          let t = this.getOffsetParent || eV,
            n = this.getDimensions,
            r = await n(e.floating);
          return {
            reference: (function (e, t, n) {
              let r = eR(t),
                o = eE(t),
                i = 'fixed' === n,
                l = eW(e, !0, i, t),
                a = {scrollLeft: 0, scrollTop: 0},
                u = Q(0);
              if (r || (!r && !i)) {
                if ((('body' !== ew(t) || eS(o)) && (a = eA(t)), r)) {
                  let e = eW(t, !0, i, t);
                  (u.x = e.x + t.clientLeft), (u.y = e.y + t.clientTop);
                } else o && (u.x = eH(o));
              }
              let c = l.left + a.scrollLeft - u.x,
                s = l.top + a.scrollTop - u.y;
              return {x: c, y: s, width: l.width, height: l.height};
            })(e.reference, await t(e.floating), e.strategy),
            floating: {x: 0, y: 0, width: r.width, height: r.height},
          };
        },
        eY = {
          convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
            let {elements: t, rect: n, offsetParent: r, strategy: o} = e,
              i = 'fixed' === o,
              l = eE(r),
              a = !!t && ez(t.floating);
            if (r === l || (a && i)) return n;
            let u = {scrollLeft: 0, scrollTop: 0},
              c = Q(1),
              s = Q(0),
              f = eR(r);
            if (
              (f || (!f && !i)) &&
              (('body' !== ew(r) || eS(l)) && (u = eA(r)), eR(r))
            ) {
              let e = eW(r);
              (c = eF(r)),
                (s.x = e.x + r.clientLeft),
                (s.y = e.y + r.clientTop);
            }
            return {
              width: n.width * c.x,
              height: n.height * c.y,
              x: n.x * c.x - u.scrollLeft * c.x + s.x,
              y: n.y * c.y - u.scrollTop * c.y + s.y,
            };
          },
          getDocumentElement: eE,
          getClippingRect: function (e) {
            let {element: t, boundary: n, rootBoundary: r, strategy: o} = e,
              i =
                'clippingAncestors' === n
                  ? ez(t)
                    ? []
                    : (function (e, t) {
                        let n = t.get(e);
                        if (n) return n;
                        let r = eL(e, [], !1).filter(
                            (e) => eC(e) && 'body' !== ew(e)
                          ),
                          o = null,
                          i = 'fixed' === eT(e).position,
                          l = i ? ek(e) : e;
                        for (; eC(l) && !e_(l); ) {
                          let t = eT(l),
                            n = eO(l);
                          n || 'fixed' !== t.position || (o = null);
                          let a = i
                            ? !n && !o
                            : (!n &&
                                'static' === t.position &&
                                !!o &&
                                ['absolute', 'fixed'].includes(o.position)) ||
                              (eS(l) &&
                                !n &&
                                (function e(t, n) {
                                  let r = ek(t);
                                  return (
                                    !(r === n || !eC(r) || e_(r)) &&
                                    ('fixed' === eT(r).position || e(r, n))
                                  );
                                })(e, l));
                          a ? (r = r.filter((e) => e !== l)) : (o = t),
                            (l = ek(l));
                        }
                        return t.set(e, r), r;
                      })(t, this._c)
                  : [].concat(n),
              l = [...i, r],
              a = l[0],
              u = l.reduce((e, n) => {
                let r = eK(t, n, o);
                return (
                  (e.top = q(r.top, e.top)),
                  (e.right = X(r.right, e.right)),
                  (e.bottom = X(r.bottom, e.bottom)),
                  (e.left = q(r.left, e.left)),
                  e
                );
              }, eK(t, a, o));
            return {
              width: u.right - u.left,
              height: u.bottom - u.top,
              x: u.left,
              y: u.top,
            };
          },
          getOffsetParent: eV,
          getElementRects: eG,
          getClientRects: function (e) {
            return Array.from(e.getClientRects());
          },
          getDimensions: function (e) {
            let {width: t, height: n} = eD(e);
            return {width: t, height: n};
          },
          getScale: eF,
          isElement: eC,
          isRTL: function (e) {
            return 'rtl' === eT(e).direction;
          },
        },
        eX = (e, t, n) => {
          let r = new Map(),
            o = {platform: eY, ...n},
            i = {...o.platform, _c: r};
          return ep(e, t, {...o, platform: i});
        };
      var eq = 'undefined' != typeof document ? d.useLayoutEffect : d.useEffect;
      function eZ(e, t) {
        let n, r, o;
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ('function' == typeof e && e.toString() === t.toString()) return !0;
        if (e && t && 'object' == typeof e) {
          if (Array.isArray(e)) {
            if ((n = e.length) !== t.length) return !1;
            for (r = n; 0 != r--; ) if (!eZ(e[r], t[r])) return !1;
            return !0;
          }
          if ((n = (o = Object.keys(e)).length) !== Object.keys(t).length)
            return !1;
          for (r = n; 0 != r--; )
            if (!{}.hasOwnProperty.call(t, o[r])) return !1;
          for (r = n; 0 != r--; ) {
            let n = o[r];
            if (('_owner' !== n || !e.$$typeof) && !eZ(e[n], t[n])) return !1;
          }
          return !0;
        }
        return e != e && t != t;
      }
      function eJ(e) {
        if ('undefined' == typeof window) return 1;
        let t = e.ownerDocument.defaultView || window;
        return t.devicePixelRatio || 1;
      }
      function eQ(e, t) {
        let n = eJ(e);
        return Math.round(t * n) / n;
      }
      function e0(e) {
        let t = d.useRef(e);
        return (
          eq(() => {
            t.current = e;
          }),
          t
        );
      }
      let e1 = (e) => ({
          name: 'arrow',
          options: e,
          fn(t) {
            let {element: n, padding: r} = 'function' == typeof e ? e(t) : e;
            return n && {}.hasOwnProperty.call(n, 'current')
              ? null != n.current
                ? ev({element: n.current, padding: r}).fn(t)
                : {}
              : n
              ? ev({element: n, padding: r}).fn(t)
              : {};
          },
        }),
        e2 = (e, t) => {
          var n;
          return {
            ...(void 0 === (n = e) && (n = 0),
            {
              name: 'offset',
              options: n,
              async fn(e) {
                var t, r;
                let {x: o, y: i, placement: l, middlewareData: a} = e,
                  u = await ey(e, n);
                return l === (null == (t = a.offset) ? void 0 : t.placement) &&
                  null != (r = a.arrow) &&
                  r.alignmentOffset
                  ? {}
                  : {x: o + u.x, y: i + u.y, data: {...u, placement: l}};
              },
            }),
            options: [e, t],
          };
        },
        e3 = (e, t) => {
          var n;
          return {
            ...(void 0 === (n = e) && (n = {}),
            {
              name: 'shift',
              options: n,
              async fn(e) {
                let {x: t, y: r, placement: o} = e,
                  {
                    mainAxis: i = !0,
                    crossAxis: l = !1,
                    limiter: a = {
                      fn: (e) => {
                        let {x: t, y: n} = e;
                        return {x: t, y: n};
                      },
                    },
                    ...u
                  } = en(n, e),
                  c = {x: t, y: r},
                  s = await em(e, u),
                  f = ea(er(o)),
                  d = ei(f),
                  p = c[d],
                  m = c[f];
                if (i) {
                  let e = p + s['y' === d ? 'top' : 'left'],
                    t = p - s['y' === d ? 'bottom' : 'right'];
                  p = q(e, X(p, t));
                }
                if (l) {
                  let e = m + s['y' === f ? 'top' : 'left'],
                    t = m - s['y' === f ? 'bottom' : 'right'];
                  m = q(e, X(m, t));
                }
                let v = a.fn({...e, [d]: p, [f]: m});
                return {...v, data: {x: v.x - t, y: v.y - r}};
              },
            }),
            options: [e, t],
          };
        },
        e5 = (e, t) => {
          var n;
          return {
            ...(void 0 === (n = e) && (n = {}),
            {
              options: n,
              fn(e) {
                let {x: t, y: r, placement: o, rects: i, middlewareData: l} = e,
                  {
                    offset: a = 0,
                    mainAxis: u = !0,
                    crossAxis: c = !0,
                  } = en(n, e),
                  s = {x: t, y: r},
                  f = ea(o),
                  d = ei(f),
                  p = s[d],
                  m = s[f],
                  v = en(a, e),
                  h =
                    'number' == typeof v
                      ? {mainAxis: v, crossAxis: 0}
                      : {mainAxis: 0, crossAxis: 0, ...v};
                if (u) {
                  let e = 'y' === d ? 'height' : 'width',
                    t = i.reference[d] - i.floating[e] + h.mainAxis,
                    n = i.reference[d] + i.reference[e] - h.mainAxis;
                  p < t ? (p = t) : p > n && (p = n);
                }
                if (c) {
                  var g, y;
                  let e = 'y' === d ? 'width' : 'height',
                    t = ['top', 'left'].includes(er(o)),
                    n =
                      i.reference[f] -
                      i.floating[e] +
                      ((t && (null == (g = l.offset) ? void 0 : g[f])) || 0) +
                      (t ? 0 : h.crossAxis),
                    r =
                      i.reference[f] +
                      i.reference[e] +
                      (t ? 0 : (null == (y = l.offset) ? void 0 : y[f]) || 0) -
                      (t ? h.crossAxis : 0);
                  m < n ? (m = n) : m > r && (m = r);
                }
                return {[d]: p, [f]: m};
              },
            }),
            options: [e, t],
          };
        },
        e4 = (e, t) => {
          var n;
          return {
            ...(void 0 === (n = e) && (n = {}),
            {
              name: 'flip',
              options: n,
              async fn(e) {
                var t, r, o, i, l;
                let {
                    placement: a,
                    middlewareData: u,
                    rects: c,
                    initialPlacement: s,
                    platform: f,
                    elements: d,
                  } = e,
                  {
                    mainAxis: p = !0,
                    crossAxis: m = !0,
                    fallbackPlacements: v,
                    fallbackStrategy: h = 'bestFit',
                    fallbackAxisSideDirection: g = 'none',
                    flipAlignment: y = !0,
                    ...w
                  } = en(n, e);
                if (null != (t = u.arrow) && t.alignmentOffset) return {};
                let b = er(a),
                  E = er(s) === s,
                  x = await (null == f.isRTL ? void 0 : f.isRTL(d.floating)),
                  C =
                    v ||
                    (E || !y
                      ? [ec(s)]
                      : (function (e) {
                          let t = ec(e);
                          return [eu(e), t, eu(t)];
                        })(s));
                v ||
                  'none' === g ||
                  C.push(
                    ...(function (e, t, n, r) {
                      let o = eo(e),
                        i = (function (e, t, n) {
                          let r = ['left', 'right'],
                            o = ['right', 'left'];
                          switch (e) {
                            case 'top':
                            case 'bottom':
                              if (n) return t ? o : r;
                              return t ? r : o;
                            case 'left':
                            case 'right':
                              return t ? ['top', 'bottom'] : ['bottom', 'top'];
                            default:
                              return [];
                          }
                        })(er(e), 'start' === n, r);
                      return (
                        o &&
                          ((i = i.map((e) => e + '-' + o)),
                          t && (i = i.concat(i.map(eu)))),
                        i
                      );
                    })(s, y, g, x)
                  );
                let R = [s, ...C],
                  P = await em(e, w),
                  S = [],
                  O = (null == (r = u.flip) ? void 0 : r.overflows) || [];
                if ((p && S.push(P[b]), m)) {
                  let e = (function (e, t, n) {
                    void 0 === n && (n = !1);
                    let r = eo(e),
                      o = ei(ea(e)),
                      i = el(o),
                      l =
                        'x' === o
                          ? r === (n ? 'end' : 'start')
                            ? 'right'
                            : 'left'
                          : 'start' === r
                          ? 'bottom'
                          : 'top';
                    return (
                      t.reference[i] > t.floating[i] && (l = ec(l)), [l, ec(l)]
                    );
                  })(a, c, x);
                  S.push(P[e[0]], P[e[1]]);
                }
                if (
                  ((O = [...O, {placement: a, overflows: S}]),
                  !S.every((e) => e <= 0))
                ) {
                  let e = ((null == (o = u.flip) ? void 0 : o.index) || 0) + 1,
                    t = R[e];
                  if (t)
                    return {
                      data: {index: e, overflows: O},
                      reset: {placement: t},
                    };
                  let n =
                    null ==
                    (i = O.filter((e) => e.overflows[0] <= 0).sort(
                      (e, t) => e.overflows[1] - t.overflows[1]
                    )[0])
                      ? void 0
                      : i.placement;
                  if (!n)
                    switch (h) {
                      case 'bestFit': {
                        let e =
                          null ==
                          (l = O.map((e) => [
                            e.placement,
                            e.overflows
                              .filter((e) => e > 0)
                              .reduce((e, t) => e + t, 0),
                          ]).sort((e, t) => e[1] - t[1])[0])
                            ? void 0
                            : l[0];
                        e && (n = e);
                        break;
                      }
                      case 'initialPlacement':
                        n = s;
                    }
                  if (a !== n) return {reset: {placement: n}};
                }
                return {};
              },
            }),
            options: [e, t],
          };
        },
        e6 = (e, t) => {
          var n;
          return {
            ...(void 0 === (n = e) && (n = {}),
            {
              name: 'size',
              options: n,
              async fn(e) {
                let t, r;
                let {placement: o, rects: i, platform: l, elements: a} = e,
                  {apply: u = () => {}, ...c} = en(n, e),
                  s = await em(e, c),
                  f = er(o),
                  d = eo(o),
                  p = 'y' === ea(o),
                  {width: m, height: v} = i.floating;
                'top' === f || 'bottom' === f
                  ? ((t = f),
                    (r =
                      d ===
                      ((await (null == l.isRTL ? void 0 : l.isRTL(a.floating)))
                        ? 'start'
                        : 'end')
                        ? 'left'
                        : 'right'))
                  : ((r = f), (t = 'end' === d ? 'top' : 'bottom'));
                let h = v - s.top - s.bottom,
                  g = m - s.left - s.right,
                  y = X(v - s[t], h),
                  w = X(m - s[r], g),
                  b = !e.middlewareData.shift,
                  E = y,
                  x = w;
                if (
                  (p ? (x = d || b ? X(w, g) : g) : (E = d || b ? X(y, h) : h),
                  b && !d)
                ) {
                  let e = q(s.left, 0),
                    t = q(s.right, 0),
                    n = q(s.top, 0),
                    r = q(s.bottom, 0);
                  p
                    ? (x =
                        m -
                        2 * (0 !== e || 0 !== t ? e + t : q(s.left, s.right)))
                    : (E =
                        v -
                        2 * (0 !== n || 0 !== r ? n + r : q(s.top, s.bottom)));
                }
                await u({...e, availableWidth: x, availableHeight: E});
                let C = await l.getDimensions(a.floating);
                return m !== C.width || v !== C.height
                  ? {reset: {rects: !0}}
                  : {};
              },
            }),
            options: [e, t],
          };
        },
        e7 = (e, t) => {
          var n;
          return {
            ...(void 0 === (n = e) && (n = {}),
            {
              name: 'hide',
              options: n,
              async fn(e) {
                let {rects: t} = e,
                  {strategy: r = 'referenceHidden', ...o} = en(n, e);
                switch (r) {
                  case 'referenceHidden': {
                    let n = await em(e, {...o, elementContext: 'reference'}),
                      r = eh(n, t.reference);
                    return {
                      data: {referenceHiddenOffsets: r, referenceHidden: eg(r)},
                    };
                  }
                  case 'escaped': {
                    let n = await em(e, {...o, altBoundary: !0}),
                      r = eh(n, t.floating);
                    return {data: {escapedOffsets: r, escaped: eg(r)}};
                  }
                  default:
                    return {};
                }
              },
            }),
            options: [e, t],
          };
        },
        e9 = (e, t) => ({...e1(e), options: [e, t]}),
        e8 = (0, d.forwardRef)((e, t) => {
          let {children: n, width: r = 10, height: o = 5, ...l} = e;
          return (0, d.createElement)(
            C.svg,
            i({}, l, {
              ref: t,
              width: r,
              height: o,
              viewBox: '0 0 30 10',
              preserveAspectRatio: 'none',
            }),
            e.asChild
              ? n
              : (0, d.createElement)('polygon', {points: '0,0 30,0 15,10'})
          );
        }),
        te = 'Popper',
        [tt, tn] = v(te),
        [tr, to] = tt(te),
        ti = (e) => {
          let {__scopePopper: t, children: n} = e,
            [r, o] = (0, d.useState)(null);
          return (0, d.createElement)(
            tr,
            {scope: t, anchor: r, onAnchorChange: o},
            n
          );
        },
        tl = (0, d.forwardRef)((e, t) => {
          let {__scopePopper: n, virtualRef: r, ...o} = e,
            l = to('PopperAnchor', n),
            a = (0, d.useRef)(null),
            u = y(t, a);
          return (
            (0, d.useEffect)(() => {
              l.onAnchorChange((null == r ? void 0 : r.current) || a.current);
            }),
            r ? null : (0, d.createElement)(C.div, i({}, o, {ref: u}))
          );
        }),
        ta = 'PopperContent',
        [tu, tc] = tt(ta),
        ts = (0, d.forwardRef)((e, t) => {
          var n, r, o, l, a, u, c, s;
          let {
              __scopePopper: f,
              side: p = 'bottom',
              sideOffset: m = 0,
              align: v = 'center',
              alignOffset: g = 0,
              arrowPadding: w = 0,
              avoidCollisions: b = !0,
              collisionBoundary: E = [],
              collisionPadding: x = 0,
              sticky: R = 'partial',
              hideWhenDetached: P = !1,
              updatePositionStrategy: S = 'optimized',
              onPlaced: O,
              ..._
            } = e,
            T = to(ta, f),
            [A, k] = (0, d.useState)(null),
            L = y(t, (e) => k(e)),
            [D, I] = (0, d.useState)(null),
            F = (function (e) {
              let [t, n] = (0, d.useState)(void 0);
              return (
                $(() => {
                  if (e) {
                    n({width: e.offsetWidth, height: e.offsetHeight});
                    let t = new ResizeObserver((t) => {
                      let r, o;
                      if (!Array.isArray(t) || !t.length) return;
                      let i = t[0];
                      if ('borderBoxSize' in i) {
                        let e = i.borderBoxSize,
                          t = Array.isArray(e) ? e[0] : e;
                        (r = t.inlineSize), (o = t.blockSize);
                      } else (r = e.offsetWidth), (o = e.offsetHeight);
                      n({width: r, height: o});
                    });
                    return (
                      t.observe(e, {box: 'border-box'}), () => t.unobserve(e)
                    );
                  }
                  n(void 0);
                }, [e]),
                t
              );
            })(D),
            N =
              null !== (n = null == F ? void 0 : F.width) && void 0 !== n
                ? n
                : 0,
            j =
              null !== (r = null == F ? void 0 : F.height) && void 0 !== r
                ? r
                : 0,
            W =
              'number' == typeof x
                ? x
                : {top: 0, right: 0, bottom: 0, left: 0, ...x},
            B = Array.isArray(E) ? E : [E],
            z = B.length > 0,
            H = {padding: W, boundary: B.filter(tp), altBoundary: z},
            {
              refs: K,
              floatingStyles: U,
              placement: V,
              isPositioned: G,
              middlewareData: Y,
            } = (function (e) {
              void 0 === e && (e = {});
              let {
                  placement: t = 'bottom',
                  strategy: n = 'absolute',
                  middleware: r = [],
                  platform: o,
                  elements: {reference: i, floating: l} = {},
                  transform: a = !0,
                  whileElementsMounted: u,
                  open: c,
                } = e,
                [s, f] = d.useState({
                  x: 0,
                  y: 0,
                  strategy: n,
                  placement: t,
                  middlewareData: {},
                  isPositioned: !1,
                }),
                [p, m] = d.useState(r);
              eZ(p, r) || m(r);
              let [v, g] = d.useState(null),
                [y, w] = d.useState(null),
                b = d.useCallback((e) => {
                  e !== R.current && ((R.current = e), g(e));
                }, []),
                E = d.useCallback((e) => {
                  e !== P.current && ((P.current = e), w(e));
                }, []),
                x = i || v,
                C = l || y,
                R = d.useRef(null),
                P = d.useRef(null),
                S = d.useRef(s),
                O = e0(u),
                M = e0(o),
                _ = d.useCallback(() => {
                  if (!R.current || !P.current) return;
                  let e = {placement: t, strategy: n, middleware: p};
                  M.current && (e.platform = M.current),
                    eX(R.current, P.current, e).then((e) => {
                      let t = {...e, isPositioned: !0};
                      T.current &&
                        !eZ(S.current, t) &&
                        ((S.current = t),
                        h.flushSync(() => {
                          f(t);
                        }));
                    });
                }, [p, t, n, M]);
              eq(() => {
                !1 === c &&
                  S.current.isPositioned &&
                  ((S.current.isPositioned = !1),
                  f((e) => ({...e, isPositioned: !1})));
              }, [c]);
              let T = d.useRef(!1);
              eq(
                () => (
                  (T.current = !0),
                  () => {
                    T.current = !1;
                  }
                ),
                []
              ),
                eq(() => {
                  if ((x && (R.current = x), C && (P.current = C), x && C)) {
                    if (O.current) return O.current(x, C, _);
                    _();
                  }
                }, [x, C, _, O, null != u]);
              let A = d.useMemo(
                  () => ({
                    reference: R,
                    floating: P,
                    setReference: b,
                    setFloating: E,
                  }),
                  [b, E]
                ),
                k = d.useMemo(() => ({reference: x, floating: C}), [x, C]),
                L = d.useMemo(() => {
                  let e = {position: n, left: 0, top: 0};
                  if (!k.floating) return e;
                  let t = eQ(k.floating, s.x),
                    r = eQ(k.floating, s.y);
                  return a
                    ? {
                        ...e,
                        transform: 'translate(' + t + 'px, ' + r + 'px)',
                        ...(eJ(k.floating) >= 1.5 && {willChange: 'transform'}),
                      }
                    : {position: n, left: t, top: r};
                }, [n, a, k.floating, s.x, s.y]);
              return d.useMemo(
                () => ({
                  ...s,
                  update: _,
                  refs: A,
                  elements: k,
                  floatingStyles: L,
                }),
                [s, _, A, k, L]
              );
            })({
              strategy: 'fixed',
              placement: p + ('center' !== v ? '-' + v : ''),
              whileElementsMounted: (...e) => {
                let t = (function (e, t, n, r) {
                  let o;
                  void 0 === r && (r = {});
                  let {
                      ancestorScroll: i = !0,
                      ancestorResize: l = !0,
                      elementResize: a = 'function' == typeof ResizeObserver,
                      layoutShift: u = 'function' ==
                        typeof IntersectionObserver,
                      animationFrame: c = !1,
                    } = r,
                    s = eI(e),
                    f = i || l ? [...(s ? eL(s) : []), ...eL(t)] : [];
                  f.forEach((e) => {
                    i && e.addEventListener('scroll', n, {passive: !0}),
                      l && e.addEventListener('resize', n);
                  });
                  let d =
                      s && u
                        ? (function (e, t) {
                            let n,
                              r = null,
                              o = eE(e);
                            function i() {
                              var e;
                              clearTimeout(n),
                                null == (e = r) || e.disconnect(),
                                (r = null);
                            }
                            return (
                              !(function l(a, u) {
                                void 0 === a && (a = !1),
                                  void 0 === u && (u = 1),
                                  i();
                                let {
                                  left: c,
                                  top: s,
                                  width: f,
                                  height: d,
                                } = e.getBoundingClientRect();
                                if ((a || t(), !f || !d)) return;
                                let p = J(s),
                                  m = J(o.clientWidth - (c + f)),
                                  v = J(o.clientHeight - (s + d)),
                                  h = J(c),
                                  g = {
                                    rootMargin:
                                      -p +
                                      'px ' +
                                      -m +
                                      'px ' +
                                      -v +
                                      'px ' +
                                      -h +
                                      'px',
                                    threshold: q(0, X(1, u)) || 1,
                                  },
                                  y = !0;
                                function w(e) {
                                  let t = e[0].intersectionRatio;
                                  if (t !== u) {
                                    if (!y) return l();
                                    t
                                      ? l(!1, t)
                                      : (n = setTimeout(() => {
                                          l(!1, 1e-7);
                                        }, 1e3));
                                  }
                                  y = !1;
                                }
                                try {
                                  r = new IntersectionObserver(w, {
                                    ...g,
                                    root: o.ownerDocument,
                                  });
                                } catch (e) {
                                  r = new IntersectionObserver(w, g);
                                }
                                r.observe(e);
                              })(!0),
                              i
                            );
                          })(s, n)
                        : null,
                    p = -1,
                    m = null;
                  a &&
                    ((m = new ResizeObserver((e) => {
                      let [r] = e;
                      r &&
                        r.target === s &&
                        m &&
                        (m.unobserve(t),
                        cancelAnimationFrame(p),
                        (p = requestAnimationFrame(() => {
                          var e;
                          null == (e = m) || e.observe(t);
                        }))),
                        n();
                    })),
                    s && !c && m.observe(s),
                    m.observe(t));
                  let v = c ? eW(e) : null;
                  return (
                    c &&
                      (function t() {
                        let r = eW(e);
                        v &&
                          (r.x !== v.x ||
                            r.y !== v.y ||
                            r.width !== v.width ||
                            r.height !== v.height) &&
                          n(),
                          (v = r),
                          (o = requestAnimationFrame(t));
                      })(),
                    n(),
                    () => {
                      var e;
                      f.forEach((e) => {
                        i && e.removeEventListener('scroll', n),
                          l && e.removeEventListener('resize', n);
                      }),
                        null == d || d(),
                        null == (e = m) || e.disconnect(),
                        (m = null),
                        c && cancelAnimationFrame(o);
                    }
                  );
                })(...e, {animationFrame: 'always' === S});
                return t;
              },
              elements: {reference: T.anchor},
              middleware: [
                e2({mainAxis: m + j, alignmentAxis: g}),
                b &&
                  e3({
                    mainAxis: !0,
                    crossAxis: !1,
                    limiter: 'partial' === R ? e5() : void 0,
                    ...H,
                  }),
                b && e4({...H}),
                e6({
                  ...H,
                  apply: ({
                    elements: e,
                    rects: t,
                    availableWidth: n,
                    availableHeight: r,
                  }) => {
                    let {width: o, height: i} = t.reference,
                      l = e.floating.style;
                    l.setProperty('--radix-popper-available-width', `${n}px`),
                      l.setProperty(
                        '--radix-popper-available-height',
                        `${r}px`
                      ),
                      l.setProperty('--radix-popper-anchor-width', `${o}px`),
                      l.setProperty('--radix-popper-anchor-height', `${i}px`);
                  },
                }),
                D && e9({element: D, padding: w}),
                tm({arrowWidth: N, arrowHeight: j}),
                P && e7({strategy: 'referenceHidden', ...H}),
              ],
            }),
            [Z, Q] = tv(V),
            ee = M(O);
          $(() => {
            G && (null == ee || ee());
          }, [G, ee]);
          let et = null === (o = Y.arrow) || void 0 === o ? void 0 : o.x,
            en = null === (l = Y.arrow) || void 0 === l ? void 0 : l.y,
            er =
              (null === (a = Y.arrow) || void 0 === a
                ? void 0
                : a.centerOffset) !== 0,
            [eo, ei] = (0, d.useState)();
          return (
            $(() => {
              A && ei(window.getComputedStyle(A).zIndex);
            }, [A]),
            (0, d.createElement)(
              'div',
              {
                ref: K.setFloating,
                'data-radix-popper-content-wrapper': '',
                style: {
                  ...U,
                  transform: G ? U.transform : 'translate(0, -200%)',
                  minWidth: 'max-content',
                  zIndex: eo,
                  '--radix-popper-transform-origin': [
                    null === (u = Y.transformOrigin) || void 0 === u
                      ? void 0
                      : u.x,
                    null === (c = Y.transformOrigin) || void 0 === c
                      ? void 0
                      : c.y,
                  ].join(' '),
                },
                dir: e.dir,
              },
              (0, d.createElement)(
                tu,
                {
                  scope: f,
                  placedSide: Z,
                  onArrowChange: I,
                  arrowX: et,
                  arrowY: en,
                  shouldHideArrow: er,
                },
                (0, d.createElement)(
                  C.div,
                  i({'data-side': Z, 'data-align': Q}, _, {
                    ref: L,
                    style: {
                      ..._.style,
                      animation: G ? void 0 : 'none',
                      opacity:
                        null !== (s = Y.hide) &&
                        void 0 !== s &&
                        s.referenceHidden
                          ? 0
                          : void 0,
                    },
                  })
                )
              )
            )
          );
        }),
        tf = {top: 'bottom', right: 'left', bottom: 'top', left: 'right'},
        td = (0, d.forwardRef)(function (e, t) {
          let {__scopePopper: n, ...r} = e,
            o = tc('PopperArrow', n),
            l = tf[o.placedSide];
          return (0,
          d.createElement)('span', {ref: o.onArrowChange, style: {position: 'absolute', left: o.arrowX, top: o.arrowY, [l]: 0, transformOrigin: {top: '', right: '0 0', bottom: 'center 0', left: '100% 0'}[o.placedSide], transform: {top: 'translateY(100%)', right: 'translateY(50%) rotate(90deg) translateX(-50%)', bottom: 'rotate(180deg)', left: 'translateY(50%) rotate(-90deg) translateX(50%)'}[o.placedSide], visibility: o.shouldHideArrow ? 'hidden' : void 0}}, (0, d.createElement)(e8, i({}, r, {ref: t, style: {...r.style, display: 'block'}})));
        });
      function tp(e) {
        return null !== e;
      }
      let tm = (e) => ({
        name: 'transformOrigin',
        options: e,
        fn(t) {
          var n, r, o, i, l;
          let {placement: a, rects: u, middlewareData: c} = t,
            s =
              (null === (n = c.arrow) || void 0 === n
                ? void 0
                : n.centerOffset) !== 0,
            f = s ? 0 : e.arrowWidth,
            d = s ? 0 : e.arrowHeight,
            [p, m] = tv(a),
            v = {start: '0%', center: '50%', end: '100%'}[m],
            h =
              (null !==
                (r = null === (o = c.arrow) || void 0 === o ? void 0 : o.x) &&
              void 0 !== r
                ? r
                : 0) +
              f / 2,
            g =
              (null !==
                (i = null === (l = c.arrow) || void 0 === l ? void 0 : l.y) &&
              void 0 !== i
                ? i
                : 0) +
              d / 2,
            y = '',
            w = '';
          return (
            'bottom' === p
              ? ((y = s ? v : `${h}px`), (w = `${-d}px`))
              : 'top' === p
              ? ((y = s ? v : `${h}px`), (w = `${u.floating.height + d}px`))
              : 'right' === p
              ? ((y = `${-d}px`), (w = s ? v : `${g}px`))
              : 'left' === p &&
                ((y = `${u.floating.width + d}px`), (w = s ? v : `${g}px`)),
            {data: {x: y, y: w}}
          );
        },
      });
      function tv(e) {
        let [t, n = 'center'] = e.split('-');
        return [t, n];
      }
      let th = (0, d.forwardRef)((e, t) => {
          var n;
          let {
            container: r = null == globalThis
              ? void 0
              : null === (n = globalThis.document) || void 0 === n
              ? void 0
              : n.body,
            ...o
          } = e;
          return r
            ? h.createPortal((0, d.createElement)(C.div, i({}, o, {ref: t})), r)
            : null;
        }),
        tg = (e) => {
          let {present: t, children: n} = e,
            r = (function (e) {
              var t;
              let [n, r] = (0, d.useState)(),
                o = (0, d.useRef)({}),
                i = (0, d.useRef)(e),
                l = (0, d.useRef)('none'),
                [a, u] =
                  ((t = {
                    mounted: {
                      UNMOUNT: 'unmounted',
                      ANIMATION_OUT: 'unmountSuspended',
                    },
                    unmountSuspended: {
                      MOUNT: 'mounted',
                      ANIMATION_END: 'unmounted',
                    },
                    unmounted: {MOUNT: 'mounted'},
                  }),
                  (0, d.useReducer)(
                    (e, n) => {
                      let r = t[e][n];
                      return null != r ? r : e;
                    },
                    e ? 'mounted' : 'unmounted'
                  ));
              return (
                (0, d.useEffect)(() => {
                  let e = ty(o.current);
                  l.current = 'mounted' === a ? e : 'none';
                }, [a]),
                $(() => {
                  let t = o.current,
                    n = i.current;
                  if (n !== e) {
                    let r = l.current,
                      o = ty(t);
                    e
                      ? u('MOUNT')
                      : 'none' === o ||
                        (null == t ? void 0 : t.display) === 'none'
                      ? u('UNMOUNT')
                      : n && r !== o
                      ? u('ANIMATION_OUT')
                      : u('UNMOUNT'),
                      (i.current = e);
                  }
                }, [e, u]),
                $(() => {
                  if (n) {
                    let e = (e) => {
                        let t = ty(o.current),
                          r = t.includes(e.animationName);
                        e.target === n &&
                          r &&
                          (0, h.flushSync)(() => u('ANIMATION_END'));
                      },
                      t = (e) => {
                        e.target === n && (l.current = ty(o.current));
                      };
                    return (
                      n.addEventListener('animationstart', t),
                      n.addEventListener('animationcancel', e),
                      n.addEventListener('animationend', e),
                      () => {
                        n.removeEventListener('animationstart', t),
                          n.removeEventListener('animationcancel', e),
                          n.removeEventListener('animationend', e);
                      }
                    );
                  }
                  u('ANIMATION_END');
                }, [n, u]),
                {
                  isPresent: ['mounted', 'unmountSuspended'].includes(a),
                  ref: (0, d.useCallback)((e) => {
                    e && (o.current = getComputedStyle(e)), r(e);
                  }, []),
                }
              );
            })(t),
            o =
              'function' == typeof n
                ? n({present: r.isPresent})
                : d.Children.only(n),
            i = y(r.ref, o.ref);
          return 'function' == typeof n || r.isPresent
            ? (0, d.cloneElement)(o, {ref: i})
            : null;
        };
      function ty(e) {
        return (null == e ? void 0 : e.animationName) || 'none';
      }
      tg.displayName = 'Presence';
      let tw = 'rovingFocusGroup.onEntryFocus',
        tb = {bubbles: !1, cancelable: !0},
        tE = 'RovingFocusGroup',
        [tx, tC, tR] = P(tE),
        [tP, tS] = v(tE, [tR]),
        [tO, tM] = tP(tE),
        t_ = (0, d.forwardRef)((e, t) =>
          (0, d.createElement)(
            tx.Provider,
            {scope: e.__scopeRovingFocusGroup},
            (0, d.createElement)(
              tx.Slot,
              {scope: e.__scopeRovingFocusGroup},
              (0, d.createElement)(tT, i({}, e, {ref: t}))
            )
          )
        ),
        tT = (0, d.forwardRef)((e, t) => {
          let {
              __scopeRovingFocusGroup: n,
              orientation: r,
              loop: o = !1,
              dir: l,
              currentTabStopId: a,
              defaultCurrentTabStopId: u,
              onCurrentTabStopIdChange: c,
              onEntryFocus: s,
              ...f
            } = e,
            p = (0, d.useRef)(null),
            v = y(t, p),
            h = O(l),
            [g = null, w] = (function ({
              prop: e,
              defaultProp: t,
              onChange: n = () => {},
            }) {
              let [r, o] = (function ({defaultProp: e, onChange: t}) {
                  let n = (0, d.useState)(e),
                    [r] = n,
                    o = (0, d.useRef)(r),
                    i = M(t);
                  return (
                    (0, d.useEffect)(() => {
                      o.current !== r && (i(r), (o.current = r));
                    }, [r, o, i]),
                    n
                  );
                })({defaultProp: t, onChange: n}),
                i = void 0 !== e,
                l = M(n),
                a = (0, d.useCallback)(
                  (t) => {
                    if (i) {
                      let n = 'function' == typeof t ? t(e) : t;
                      n !== e && l(n);
                    } else o(t);
                  },
                  [i, e, o, l]
                );
              return [i ? e : r, a];
            })({prop: a, defaultProp: u, onChange: c}),
            [b, E] = (0, d.useState)(!1),
            x = M(s),
            R = tC(n),
            P = (0, d.useRef)(!1),
            [S, _] = (0, d.useState)(0);
          return (
            (0, d.useEffect)(() => {
              let e = p.current;
              if (e)
                return (
                  e.addEventListener(tw, x), () => e.removeEventListener(tw, x)
                );
            }, [x]),
            (0, d.createElement)(
              tO,
              {
                scope: n,
                orientation: r,
                dir: h,
                loop: o,
                currentTabStopId: g,
                onItemFocus: (0, d.useCallback)((e) => w(e), [w]),
                onItemShiftTab: (0, d.useCallback)(() => E(!0), []),
                onFocusableItemAdd: (0, d.useCallback)(
                  () => _((e) => e + 1),
                  []
                ),
                onFocusableItemRemove: (0, d.useCallback)(
                  () => _((e) => e - 1),
                  []
                ),
              },
              (0, d.createElement)(
                C.div,
                i({tabIndex: b || 0 === S ? -1 : 0, 'data-orientation': r}, f, {
                  ref: v,
                  style: {outline: 'none', ...e.style},
                  onMouseDown: m(e.onMouseDown, () => {
                    P.current = !0;
                  }),
                  onFocus: m(e.onFocus, (e) => {
                    let t = !P.current;
                    if (e.target === e.currentTarget && t && !b) {
                      let t = new CustomEvent(tw, tb);
                      if (
                        (e.currentTarget.dispatchEvent(t), !t.defaultPrevented)
                      ) {
                        let e = R().filter((e) => e.focusable),
                          t = e.find((e) => e.active),
                          n = e.find((e) => e.id === g),
                          r = [t, n, ...e].filter(Boolean),
                          o = r.map((e) => e.ref.current);
                        tL(o);
                      }
                    }
                    P.current = !1;
                  }),
                  onBlur: m(e.onBlur, () => E(!1)),
                })
              )
            )
          );
        }),
        tA = (0, d.forwardRef)((e, t) => {
          let {
              __scopeRovingFocusGroup: n,
              focusable: r = !0,
              active: o = !1,
              tabStopId: l,
              ...a
            } = e,
            u = (function (e) {
              let [t, n] = d.useState(V());
              return (
                $(() => {
                  e || n((e) => (null != e ? e : String(G++)));
                }, [e]),
                e || (t ? `radix-${t}` : '')
              );
            })(),
            c = l || u,
            s = tM('RovingFocusGroupItem', n),
            f = s.currentTabStopId === c,
            p = tC(n),
            {onFocusableItemAdd: v, onFocusableItemRemove: h} = s;
          return (
            (0, d.useEffect)(() => {
              if (r) return v(), () => h();
            }, [r, v, h]),
            (0, d.createElement)(
              tx.ItemSlot,
              {scope: n, id: c, focusable: r, active: o},
              (0, d.createElement)(
                C.span,
                i(
                  {tabIndex: f ? 0 : -1, 'data-orientation': s.orientation},
                  a,
                  {
                    ref: t,
                    onMouseDown: m(e.onMouseDown, (e) => {
                      r ? s.onItemFocus(c) : e.preventDefault();
                    }),
                    onFocus: m(e.onFocus, () => s.onItemFocus(c)),
                    onKeyDown: m(e.onKeyDown, (e) => {
                      if ('Tab' === e.key && e.shiftKey) {
                        s.onItemShiftTab();
                        return;
                      }
                      if (e.target !== e.currentTarget) return;
                      let t = (function (e, t, n) {
                        var r;
                        let o =
                          ((r = e.key),
                          'rtl' !== n
                            ? r
                            : 'ArrowLeft' === r
                            ? 'ArrowRight'
                            : 'ArrowRight' === r
                            ? 'ArrowLeft'
                            : r);
                        if (
                          !(
                            'vertical' === t &&
                            ['ArrowLeft', 'ArrowRight'].includes(o)
                          ) &&
                          !(
                            'horizontal' === t &&
                            ['ArrowUp', 'ArrowDown'].includes(o)
                          )
                        )
                          return tk[o];
                      })(e, s.orientation, s.dir);
                      if (void 0 !== t) {
                        e.preventDefault();
                        let o = p().filter((e) => e.focusable),
                          i = o.map((e) => e.ref.current);
                        if ('last' === t) i.reverse();
                        else if ('prev' === t || 'next' === t) {
                          var n, r;
                          'prev' === t && i.reverse();
                          let o = i.indexOf(e.currentTarget);
                          i = s.loop
                            ? ((n = i),
                              (r = o + 1),
                              n.map((e, t) => n[(r + t) % n.length]))
                            : i.slice(o + 1);
                        }
                        setTimeout(() => tL(i));
                      }
                    }),
                  }
                )
              )
            )
          );
        }),
        tk = {
          ArrowLeft: 'prev',
          ArrowUp: 'prev',
          ArrowRight: 'next',
          ArrowDown: 'next',
          PageUp: 'first',
          Home: 'first',
          PageDown: 'last',
          End: 'last',
        };
      function tL(e) {
        let t = document.activeElement;
        for (let n of e)
          if (n === t || (n.focus(), document.activeElement !== t)) return;
      }
      var tD = new WeakMap(),
        tI = new WeakMap(),
        tF = {},
        tN = 0,
        tj = function (e) {
          return e && (e.host || tj(e.parentNode));
        },
        tW = function (e, t, n, r) {
          var o = (Array.isArray(e) ? e : [e])
            .map(function (e) {
              if (t.contains(e)) return e;
              var n = tj(e);
              return n && t.contains(n)
                ? n
                : (console.error(
                    'aria-hidden',
                    e,
                    'in not contained inside',
                    t,
                    '. Doing nothing'
                  ),
                  null);
            })
            .filter(function (e) {
              return !!e;
            });
          tF[n] || (tF[n] = new WeakMap());
          var i = tF[n],
            l = [],
            a = new Set(),
            u = new Set(o),
            c = function (e) {
              !e || a.has(e) || (a.add(e), c(e.parentNode));
            };
          o.forEach(c);
          var s = function (e) {
            !e ||
              u.has(e) ||
              Array.prototype.forEach.call(e.children, function (e) {
                if (a.has(e)) s(e);
                else
                  try {
                    var t = e.getAttribute(r),
                      o = null !== t && 'false' !== t,
                      u = (tD.get(e) || 0) + 1,
                      c = (i.get(e) || 0) + 1;
                    tD.set(e, u),
                      i.set(e, c),
                      l.push(e),
                      1 === u && o && tI.set(e, !0),
                      1 === c && e.setAttribute(n, 'true'),
                      o || e.setAttribute(r, 'true');
                  } catch (t) {
                    console.error('aria-hidden: cannot operate on ', e, t);
                  }
              });
          };
          return (
            s(t),
            a.clear(),
            tN++,
            function () {
              l.forEach(function (e) {
                var t = tD.get(e) - 1,
                  o = i.get(e) - 1;
                tD.set(e, t),
                  i.set(e, o),
                  t || (tI.has(e) || e.removeAttribute(r), tI.delete(e)),
                  o || e.removeAttribute(n);
              }),
                --tN ||
                  ((tD = new WeakMap()),
                  (tD = new WeakMap()),
                  (tI = new WeakMap()),
                  (tF = {}));
            }
          );
        },
        tB = function (e, t, n) {
          void 0 === n && (n = 'data-aria-hidden');
          var r = Array.from(Array.isArray(e) ? e : [e]),
            o =
              t ||
              ('undefined' == typeof document
                ? null
                : (Array.isArray(e) ? e[0] : e).ownerDocument.body);
          return o
            ? (r.push.apply(r, Array.from(o.querySelectorAll('[aria-live]'))),
              tW(r, o, n, 'aria-hidden'))
            : function () {
                return null;
              };
        },
        tz = function () {
          return (tz =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }).apply(this, arguments);
        },
        tH = 'right-scroll-bar-position',
        tK = 'width-before-scroll-bar';
      function tU(e, t) {
        return 'function' == typeof e ? e(t) : e && (e.current = t), e;
      }
      var t$ = 'undefined' != typeof window ? d.useLayoutEffect : d.useEffect,
        tV = new WeakMap(),
        tG = function () {
          return (tG =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }).apply(this, arguments);
        };
      'function' == typeof SuppressedError && SuppressedError;
      var tY =
          (void 0 === l && (l = {}),
          ((void 0 === a &&
            (a = function (e) {
              return e;
            }),
          (u = []),
          (c = !1),
          (s = {
            read: function () {
              if (c)
                throw Error(
                  'Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.'
                );
              return u.length ? u[u.length - 1] : null;
            },
            useMedium: function (e) {
              var t = a(e, c);
              return (
                u.push(t),
                function () {
                  u = u.filter(function (e) {
                    return e !== t;
                  });
                }
              );
            },
            assignSyncMedium: function (e) {
              for (c = !0; u.length; ) {
                var t = u;
                (u = []), t.forEach(e);
              }
              u = {
                push: function (t) {
                  return e(t);
                },
                filter: function () {
                  return u;
                },
              };
            },
            assignMedium: function (e) {
              c = !0;
              var t = [];
              if (u.length) {
                var n = u;
                (u = []), n.forEach(e), (t = u);
              }
              var r = function () {
                  var n = t;
                  (t = []), n.forEach(e);
                },
                o = function () {
                  return Promise.resolve().then(r);
                };
              o(),
                (u = {
                  push: function (e) {
                    t.push(e), o();
                  },
                  filter: function (e) {
                    return (t = t.filter(e)), u;
                  },
                });
            },
          })).options = tG({async: !0, ssr: !1}, l)),
          s),
        tX = function () {},
        tq = d.forwardRef(function (e, t) {
          var n,
            r,
            o,
            i,
            l = d.useRef(null),
            a = d.useState({
              onScrollCapture: tX,
              onWheelCapture: tX,
              onTouchMoveCapture: tX,
            }),
            u = a[0],
            c = a[1],
            s = e.forwardProps,
            f = e.children,
            p = e.className,
            m = e.removeScrollBar,
            v = e.enabled,
            h = e.shards,
            g = e.sideCar,
            y = e.noIsolation,
            w = e.inert,
            b = e.allowPinchZoom,
            E = e.as,
            x = (function (e, t) {
              var n = {};
              for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) &&
                  0 > t.indexOf(r) &&
                  (n[r] = e[r]);
              if (
                null != e &&
                'function' == typeof Object.getOwnPropertySymbols
              )
                for (
                  var o = 0, r = Object.getOwnPropertySymbols(e);
                  o < r.length;
                  o++
                )
                  0 > t.indexOf(r[o]) &&
                    Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                    (n[r[o]] = e[r[o]]);
              return n;
            })(e, [
              'forwardProps',
              'children',
              'className',
              'removeScrollBar',
              'enabled',
              'shards',
              'sideCar',
              'noIsolation',
              'inert',
              'allowPinchZoom',
              'as',
            ]),
            C =
              ((n = [l, t]),
              (r = function (e) {
                return n.forEach(function (t) {
                  return tU(t, e);
                });
              }),
              ((o = (0, d.useState)(function () {
                return {
                  value: null,
                  callback: r,
                  facade: {
                    get current() {
                      return o.value;
                    },
                    set current(value) {
                      var e = o.value;
                      e !== value && ((o.value = value), o.callback(value, e));
                    },
                  },
                };
              })[0]).callback = r),
              (i = o.facade),
              t$(
                function () {
                  var e = tV.get(i);
                  if (e) {
                    var t = new Set(e),
                      r = new Set(n),
                      o = i.current;
                    t.forEach(function (e) {
                      r.has(e) || tU(e, null);
                    }),
                      r.forEach(function (e) {
                        t.has(e) || tU(e, o);
                      });
                  }
                  tV.set(i, n);
                },
                [n]
              ),
              i),
            R = tz(tz({}, x), u);
          return d.createElement(
            d.Fragment,
            null,
            v &&
              d.createElement(g, {
                sideCar: tY,
                removeScrollBar: m,
                shards: h,
                noIsolation: y,
                inert: w,
                setCallbacks: c,
                allowPinchZoom: !!b,
                lockRef: l,
              }),
            s
              ? d.cloneElement(d.Children.only(f), tz(tz({}, R), {ref: C}))
              : d.createElement(
                  void 0 === E ? 'div' : E,
                  tz({}, R, {className: p, ref: C}),
                  f
                )
          );
        });
      (tq.defaultProps = {enabled: !0, removeScrollBar: !0, inert: !1}),
        (tq.classNames = {fullWidth: tK, zeroRight: tH});
      var tZ = function (e) {
        var t = e.sideCar,
          n = (function (e, t) {
            var n = {};
            for (var r in e)
              Object.prototype.hasOwnProperty.call(e, r) &&
                0 > t.indexOf(r) &&
                (n[r] = e[r]);
            if (null != e && 'function' == typeof Object.getOwnPropertySymbols)
              for (
                var o = 0, r = Object.getOwnPropertySymbols(e);
                o < r.length;
                o++
              )
                0 > t.indexOf(r[o]) &&
                  Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
                  (n[r[o]] = e[r[o]]);
            return n;
          })(e, ['sideCar']);
        if (!t)
          throw Error(
            'Sidecar: please provide `sideCar` property to import the right car'
          );
        var r = t.read();
        if (!r) throw Error('Sidecar medium not found');
        return d.createElement(r, tG({}, n));
      };
      tZ.isSideCarExport = !0;
      var tJ = function () {
          var e = 0,
            t = null;
          return {
            add: function (r) {
              if (
                0 == e &&
                (t = (function () {
                  if (!document) return null;
                  var e = document.createElement('style');
                  e.type = 'text/css';
                  var t = f || n.nc;
                  return t && e.setAttribute('nonce', t), e;
                })())
              ) {
                var o, i;
                (o = t).styleSheet
                  ? (o.styleSheet.cssText = r)
                  : o.appendChild(document.createTextNode(r)),
                  (i = t),
                  (
                    document.head || document.getElementsByTagName('head')[0]
                  ).appendChild(i);
              }
              e++;
            },
            remove: function () {
              --e ||
                !t ||
                (t.parentNode && t.parentNode.removeChild(t), (t = null));
            },
          };
        },
        tQ = function () {
          var e = tJ();
          return function (t, n) {
            d.useEffect(
              function () {
                return (
                  e.add(t),
                  function () {
                    e.remove();
                  }
                );
              },
              [t && n]
            );
          };
        },
        t0 = function () {
          var e = tQ();
          return function (t) {
            return e(t.styles, t.dynamic), null;
          };
        },
        t1 = {left: 0, top: 0, right: 0, gap: 0},
        t2 = function (e) {
          return parseInt(e || '', 10) || 0;
        },
        t3 = function (e) {
          var t = window.getComputedStyle(document.body),
            n = t['padding' === e ? 'paddingLeft' : 'marginLeft'],
            r = t['padding' === e ? 'paddingTop' : 'marginTop'],
            o = t['padding' === e ? 'paddingRight' : 'marginRight'];
          return [t2(n), t2(r), t2(o)];
        },
        t5 = function (e) {
          if ((void 0 === e && (e = 'margin'), 'undefined' == typeof window))
            return t1;
          var t = t3(e),
            n = document.documentElement.clientWidth,
            r = window.innerWidth;
          return {
            left: t[0],
            top: t[1],
            right: t[2],
            gap: Math.max(0, r - n + t[2] - t[0]),
          };
        },
        t4 = t0(),
        t6 = 'data-scroll-locked',
        t7 = function (e, t, n, r) {
          var o = e.left,
            i = e.top,
            l = e.right,
            a = e.gap;
          return (
            void 0 === n && (n = 'margin'),
            '\n  .'
              .concat('with-scroll-bars-hidden', ' {\n   overflow: hidden ')
              .concat(r, ';\n   padding-right: ')
              .concat(a, 'px ')
              .concat(r, ';\n  }\n  body[')
              .concat(t6, '] {\n    overflow: hidden ')
              .concat(r, ';\n    overscroll-behavior: contain;\n    ')
              .concat(
                [
                  t && 'position: relative '.concat(r, ';'),
                  'margin' === n &&
                    '\n    padding-left: '
                      .concat(o, 'px;\n    padding-top: ')
                      .concat(i, 'px;\n    padding-right: ')
                      .concat(
                        l,
                        'px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: '
                      )
                      .concat(a, 'px ')
                      .concat(r, ';\n    '),
                  'padding' === n &&
                    'padding-right: '.concat(a, 'px ').concat(r, ';'),
                ]
                  .filter(Boolean)
                  .join(''),
                '\n  }\n  \n  .'
              )
              .concat(tH, ' {\n    right: ')
              .concat(a, 'px ')
              .concat(r, ';\n  }\n  \n  .')
              .concat(tK, ' {\n    margin-right: ')
              .concat(a, 'px ')
              .concat(r, ';\n  }\n  \n  .')
              .concat(tH, ' .')
              .concat(tH, ' {\n    right: 0 ')
              .concat(r, ';\n  }\n  \n  .')
              .concat(tK, ' .')
              .concat(tK, ' {\n    margin-right: 0 ')
              .concat(r, ';\n  }\n  \n  body[')
              .concat(t6, '] {\n    ')
              .concat('--removed-body-scroll-bar-size', ': ')
              .concat(a, 'px;\n  }\n')
          );
        },
        t9 = function () {
          var e = parseInt(document.body.getAttribute(t6) || '0', 10);
          return isFinite(e) ? e : 0;
        },
        t8 = function () {
          d.useEffect(function () {
            return (
              document.body.setAttribute(t6, (t9() + 1).toString()),
              function () {
                var e = t9() - 1;
                e <= 0
                  ? document.body.removeAttribute(t6)
                  : document.body.setAttribute(t6, e.toString());
              }
            );
          }, []);
        },
        ne = function (e) {
          var t = e.noRelative,
            n = e.noImportant,
            r = e.gapMode,
            o = void 0 === r ? 'margin' : r;
          t8();
          var i = d.useMemo(
            function () {
              return t5(o);
            },
            [o]
          );
          return d.createElement(t4, {
            styles: t7(i, !t, o, n ? '' : '!important'),
          });
        },
        nt = !1;
      if ('undefined' != typeof window)
        try {
          var nn = Object.defineProperty({}, 'passive', {
            get: function () {
              return (nt = !0), !0;
            },
          });
          window.addEventListener('test', nn, nn),
            window.removeEventListener('test', nn, nn);
        } catch (e) {
          nt = !1;
        }
      var nr = !!nt && {passive: !1},
        no = function (e, t) {
          var n = window.getComputedStyle(e);
          return (
            'hidden' !== n[t] &&
            !(
              n.overflowY === n.overflowX &&
              'TEXTAREA' !== e.tagName &&
              'visible' === n[t]
            )
          );
        },
        ni = function (e, t) {
          var n = t;
          do {
            if (
              ('undefined' != typeof ShadowRoot &&
                n instanceof ShadowRoot &&
                (n = n.host),
              nl(e, n))
            ) {
              var r = na(e, n);
              if (r[1] > r[2]) return !0;
            }
            n = n.parentNode;
          } while (n && n !== document.body);
          return !1;
        },
        nl = function (e, t) {
          return 'v' === e ? no(t, 'overflowY') : no(t, 'overflowX');
        },
        na = function (e, t) {
          return 'v' === e
            ? [t.scrollTop, t.scrollHeight, t.clientHeight]
            : [t.scrollLeft, t.scrollWidth, t.clientWidth];
        },
        nu = function (e, t, n, r, o) {
          var i,
            l =
              ((i = window.getComputedStyle(t).direction),
              'h' === e && 'rtl' === i ? -1 : 1),
            a = l * r,
            u = n.target,
            c = t.contains(u),
            s = !1,
            f = a > 0,
            d = 0,
            p = 0;
          do {
            var m = na(e, u),
              v = m[0],
              h = m[1] - m[2] - l * v;
            (v || h) && nl(e, u) && ((d += h), (p += v)), (u = u.parentNode);
          } while (
            (!c && u !== document.body) ||
            (c && (t.contains(u) || t === u))
          );
          return (
            f && ((o && 0 === d) || (!o && a > d))
              ? (s = !0)
              : !f && ((o && 0 === p) || (!o && -a > p)) && (s = !0),
            s
          );
        },
        nc = function (e) {
          return 'changedTouches' in e
            ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
            : [0, 0];
        },
        ns = function (e) {
          return [e.deltaX, e.deltaY];
        },
        nf = function (e) {
          return e && 'current' in e ? e.current : e;
        },
        nd = 0,
        np = [],
        nm =
          (tY.useMedium(function (e) {
            var t = d.useRef([]),
              n = d.useRef([0, 0]),
              r = d.useRef(),
              o = d.useState(nd++)[0],
              i = d.useState(function () {
                return t0();
              })[0],
              l = d.useRef(e);
            d.useEffect(
              function () {
                l.current = e;
              },
              [e]
            ),
              d.useEffect(
                function () {
                  if (e.inert) {
                    document.body.classList.add(
                      'block-interactivity-'.concat(o)
                    );
                    var t = (function (e, t, n) {
                      if (n || 2 == arguments.length)
                        for (var r, o = 0, i = t.length; o < i; o++)
                          (!r && o in t) ||
                            (r || (r = Array.prototype.slice.call(t, 0, o)),
                            (r[o] = t[o]));
                      return e.concat(r || Array.prototype.slice.call(t));
                    })(
                      [e.lockRef.current],
                      (e.shards || []).map(nf),
                      !0
                    ).filter(Boolean);
                    return (
                      t.forEach(function (e) {
                        return e.classList.add(
                          'allow-interactivity-'.concat(o)
                        );
                      }),
                      function () {
                        document.body.classList.remove(
                          'block-interactivity-'.concat(o)
                        ),
                          t.forEach(function (e) {
                            return e.classList.remove(
                              'allow-interactivity-'.concat(o)
                            );
                          });
                      }
                    );
                  }
                },
                [e.inert, e.lockRef.current, e.shards]
              );
            var a = d.useCallback(function (e, t) {
                if ('touches' in e && 2 === e.touches.length)
                  return !l.current.allowPinchZoom;
                var o,
                  i = nc(e),
                  a = n.current,
                  u = 'deltaX' in e ? e.deltaX : a[0] - i[0],
                  c = 'deltaY' in e ? e.deltaY : a[1] - i[1],
                  s = e.target,
                  f = Math.abs(u) > Math.abs(c) ? 'h' : 'v';
                if ('touches' in e && 'h' === f && 'range' === s.type)
                  return !1;
                var d = ni(f, s);
                if (!d) return !0;
                if (
                  (d ? (o = f) : ((o = 'v' === f ? 'h' : 'v'), (d = ni(f, s))),
                  !d)
                )
                  return !1;
                if (
                  (!r.current &&
                    'changedTouches' in e &&
                    (u || c) &&
                    (r.current = o),
                  !o)
                )
                  return !0;
                var p = r.current || o;
                return nu(p, t, e, 'h' === p ? u : c, !0);
              }, []),
              u = d.useCallback(function (e) {
                if (np.length && np[np.length - 1] === i) {
                  var n = 'deltaY' in e ? ns(e) : nc(e),
                    r = t.current.filter(function (t) {
                      var r;
                      return (
                        t.name === e.type &&
                        t.target === e.target &&
                        (r = t.delta)[0] === n[0] &&
                        r[1] === n[1]
                      );
                    })[0];
                  if (r && r.should) {
                    e.cancelable && e.preventDefault();
                    return;
                  }
                  if (!r) {
                    var o = (l.current.shards || [])
                      .map(nf)
                      .filter(Boolean)
                      .filter(function (t) {
                        return t.contains(e.target);
                      });
                    (o.length > 0 ? a(e, o[0]) : !l.current.noIsolation) &&
                      e.cancelable &&
                      e.preventDefault();
                  }
                }
              }, []),
              c = d.useCallback(function (e, n, r, o) {
                var i = {name: e, delta: n, target: r, should: o};
                t.current.push(i),
                  setTimeout(function () {
                    t.current = t.current.filter(function (e) {
                      return e !== i;
                    });
                  }, 1);
              }, []),
              s = d.useCallback(function (e) {
                (n.current = nc(e)), (r.current = void 0);
              }, []),
              f = d.useCallback(function (t) {
                c(t.type, ns(t), t.target, a(t, e.lockRef.current));
              }, []),
              p = d.useCallback(function (t) {
                c(t.type, nc(t), t.target, a(t, e.lockRef.current));
              }, []);
            d.useEffect(function () {
              return (
                np.push(i),
                e.setCallbacks({
                  onScrollCapture: f,
                  onWheelCapture: f,
                  onTouchMoveCapture: p,
                }),
                document.addEventListener('wheel', u, nr),
                document.addEventListener('touchmove', u, nr),
                document.addEventListener('touchstart', s, nr),
                function () {
                  (np = np.filter(function (e) {
                    return e !== i;
                  })),
                    document.removeEventListener('wheel', u, nr),
                    document.removeEventListener('touchmove', u, nr),
                    document.removeEventListener('touchstart', s, nr);
                }
              );
            }, []);
            var m = e.removeScrollBar,
              v = e.inert;
            return d.createElement(
              d.Fragment,
              null,
              v
                ? d.createElement(i, {
                    styles: '\n  .block-interactivity-'
                      .concat(
                        o,
                        ' {pointer-events: none;}\n  .allow-interactivity-'
                      )
                      .concat(o, ' {pointer-events: all;}\n'),
                  })
                : null,
              m ? d.createElement(ne, {gapMode: 'margin'}) : null
            );
          }),
          tZ),
        nv = d.forwardRef(function (e, t) {
          return d.createElement(tq, tz({}, e, {ref: t, sideCar: nm}));
        });
      nv.classNames = tq.classNames;
      let nh = ['Enter', ' '],
        ng = ['ArrowUp', 'PageDown', 'End'],
        ny = ['ArrowDown', 'PageUp', 'Home', ...ng],
        nw = {ltr: [...nh, 'ArrowRight'], rtl: [...nh, 'ArrowLeft']},
        nb = {ltr: ['ArrowLeft'], rtl: ['ArrowRight']},
        nE = 'Menu',
        [nx, nC, nR] = P(nE),
        [nP, nS] = v(nE, [nR, tn, tS]),
        nO = tn(),
        nM = tS(),
        [n_, nT] = nP(nE),
        [nA, nk] = nP(nE),
        nL = (e) => {
          let {
              __scopeMenu: t,
              open: n = !1,
              children: r,
              dir: o,
              onOpenChange: i,
              modal: l = !0,
            } = e,
            a = nO(t),
            [u, c] = (0, d.useState)(null),
            s = (0, d.useRef)(!1),
            f = M(i),
            p = O(o);
          return (
            (0, d.useEffect)(() => {
              let e = () => {
                  (s.current = !0),
                    document.addEventListener('pointerdown', t, {
                      capture: !0,
                      once: !0,
                    }),
                    document.addEventListener('pointermove', t, {
                      capture: !0,
                      once: !0,
                    });
                },
                t = () => (s.current = !1);
              return (
                document.addEventListener('keydown', e, {capture: !0}),
                () => {
                  document.removeEventListener('keydown', e, {capture: !0}),
                    document.removeEventListener('pointerdown', t, {
                      capture: !0,
                    }),
                    document.removeEventListener('pointermove', t, {
                      capture: !0,
                    });
                }
              );
            }, []),
            (0, d.createElement)(
              ti,
              a,
              (0, d.createElement)(
                n_,
                {
                  scope: t,
                  open: n,
                  onOpenChange: f,
                  content: u,
                  onContentChange: c,
                },
                (0, d.createElement)(
                  nA,
                  {
                    scope: t,
                    onClose: (0, d.useCallback)(() => f(!1), [f]),
                    isUsingKeyboardRef: s,
                    dir: p,
                    modal: l,
                  },
                  r
                )
              )
            )
          );
        },
        nD = (0, d.forwardRef)((e, t) => {
          let {__scopeMenu: n, ...r} = e,
            o = nO(n);
          return (0, d.createElement)(tl, i({}, o, r, {ref: t}));
        }),
        nI = 'MenuPortal',
        [nF, nN] = nP(nI, {forceMount: void 0}),
        nj = (e) => {
          let {__scopeMenu: t, forceMount: n, children: r, container: o} = e,
            i = nT(nI, t);
          return (0, d.createElement)(
            nF,
            {scope: t, forceMount: n},
            (0, d.createElement)(
              tg,
              {present: n || i.open},
              (0, d.createElement)(th, {asChild: !0, container: o}, r)
            )
          );
        },
        nW = 'MenuContent',
        [nB, nz] = nP(nW),
        nH = (0, d.forwardRef)((e, t) => {
          let n = nN(nW, e.__scopeMenu),
            {forceMount: r = n.forceMount, ...o} = e,
            l = nT(nW, e.__scopeMenu),
            a = nk(nW, e.__scopeMenu);
          return (0, d.createElement)(
            nx.Provider,
            {scope: e.__scopeMenu},
            (0, d.createElement)(
              tg,
              {present: r || l.open},
              (0, d.createElement)(
                nx.Slot,
                {scope: e.__scopeMenu},
                a.modal
                  ? (0, d.createElement)(nK, i({}, o, {ref: t}))
                  : (0, d.createElement)(nU, i({}, o, {ref: t}))
              )
            )
          );
        }),
        nK = (0, d.forwardRef)((e, t) => {
          let n = nT(nW, e.__scopeMenu),
            r = (0, d.useRef)(null),
            o = y(t, r);
          return (
            (0, d.useEffect)(() => {
              let e = r.current;
              if (e) return tB(e);
            }, []),
            (0, d.createElement)(
              n$,
              i({}, e, {
                ref: o,
                trapFocus: n.open,
                disableOutsidePointerEvents: n.open,
                disableOutsideScroll: !0,
                onFocusOutside: m(e.onFocusOutside, (e) => e.preventDefault(), {
                  checkForDefaultPrevented: !1,
                }),
                onDismiss: () => n.onOpenChange(!1),
              })
            )
          );
        }),
        nU = (0, d.forwardRef)((e, t) => {
          let n = nT(nW, e.__scopeMenu);
          return (0, d.createElement)(
            n$,
            i({}, e, {
              ref: t,
              trapFocus: !1,
              disableOutsidePointerEvents: !1,
              disableOutsideScroll: !1,
              onDismiss: () => n.onOpenChange(!1),
            })
          );
        }),
        n$ = (0, d.forwardRef)((e, t) => {
          let {
              __scopeMenu: n,
              loop: r = !1,
              trapFocus: o,
              onOpenAutoFocus: l,
              onCloseAutoFocus: a,
              disableOutsidePointerEvents: u,
              onEntryFocus: c,
              onEscapeKeyDown: s,
              onPointerDownOutside: f,
              onFocusOutside: p,
              onInteractOutside: v,
              onDismiss: h,
              disableOutsideScroll: g,
              ...b
            } = e,
            E = nT(nW, n),
            x = nk(nW, n),
            C = nO(n),
            R = nM(n),
            P = nC(n),
            [S, O] = (0, d.useState)(null),
            M = (0, d.useRef)(null),
            _ = y(t, M, E.onContentChange),
            T = (0, d.useRef)(0),
            k = (0, d.useRef)(''),
            L = (0, d.useRef)(0),
            F = (0, d.useRef)(null),
            N = (0, d.useRef)('right'),
            j = (0, d.useRef)(0),
            B = g ? nv : d.Fragment,
            z = g ? {as: w, allowPinchZoom: !0} : void 0,
            H = (e) => {
              var t, n;
              let r = k.current + e,
                o = P().filter((e) => !e.disabled),
                i = document.activeElement,
                l =
                  null === (t = o.find((e) => e.ref.current === i)) ||
                  void 0 === t
                    ? void 0
                    : t.textValue,
                a = o.map((e) => e.textValue),
                u = (function (e, t, n) {
                  var r;
                  let o =
                      t.length > 1 && Array.from(t).every((e) => e === t[0]),
                    i = o ? t[0] : t,
                    l = n ? e.indexOf(n) : -1,
                    a =
                      ((r = Math.max(l, 0)),
                      e.map((t, n) => e[(r + n) % e.length])),
                    u = 1 === i.length;
                  u && (a = a.filter((e) => e !== n));
                  let c = a.find((e) =>
                    e.toLowerCase().startsWith(i.toLowerCase())
                  );
                  return c !== n ? c : void 0;
                })(a, r, l),
                c =
                  null === (n = o.find((e) => e.textValue === u)) ||
                  void 0 === n
                    ? void 0
                    : n.ref.current;
              !(function e(t) {
                (k.current = t),
                  window.clearTimeout(T.current),
                  '' !== t && (T.current = window.setTimeout(() => e(''), 1e3));
              })(r),
                c && setTimeout(() => c.focus());
            };
          (0, d.useEffect)(() => () => window.clearTimeout(T.current), []),
            (0, d.useEffect)(() => {
              var e, t;
              let n = document.querySelectorAll('[data-radix-focus-guard]');
              return (
                document.body.insertAdjacentElement(
                  'afterbegin',
                  null !== (e = n[0]) && void 0 !== e ? e : I()
                ),
                document.body.insertAdjacentElement(
                  'beforeend',
                  null !== (t = n[1]) && void 0 !== t ? t : I()
                ),
                D++,
                () => {
                  1 === D &&
                    document
                      .querySelectorAll('[data-radix-focus-guard]')
                      .forEach((e) => e.remove()),
                    D--;
                }
              );
            }, []);
          let K = (0, d.useCallback)((e) => {
            var t, n;
            let r =
              N.current ===
              (null === (t = F.current) || void 0 === t ? void 0 : t.side);
            return (
              r &&
              (function (e, t) {
                if (!t) return !1;
                let n = {x: e.clientX, y: e.clientY};
                return (function (e, t) {
                  let {x: n, y: r} = e,
                    o = !1;
                  for (let e = 0, i = t.length - 1; e < t.length; i = e++) {
                    let l = t[e].x,
                      a = t[e].y,
                      u = t[i].x,
                      c = t[i].y,
                      s =
                        a > r != c > r && n < ((u - l) * (r - a)) / (c - a) + l;
                    s && (o = !o);
                  }
                  return o;
                })(n, t);
              })(e, null === (n = F.current) || void 0 === n ? void 0 : n.area)
            );
          }, []);
          return (0, d.createElement)(
            nB,
            {
              scope: n,
              searchRef: k,
              onItemEnter: (0, d.useCallback)(
                (e) => {
                  K(e) && e.preventDefault();
                },
                [K]
              ),
              onItemLeave: (0, d.useCallback)(
                (e) => {
                  var t;
                  K(e) ||
                    (null === (t = M.current) || void 0 === t || t.focus(),
                    O(null));
                },
                [K]
              ),
              onTriggerLeave: (0, d.useCallback)(
                (e) => {
                  K(e) && e.preventDefault();
                },
                [K]
              ),
              pointerGraceTimerRef: L,
              onPointerGraceIntentChange: (0, d.useCallback)((e) => {
                F.current = e;
              }, []),
            },
            (0, d.createElement)(
              B,
              z,
              (0, d.createElement)(
                W,
                {
                  asChild: !0,
                  trapped: o,
                  onMountAutoFocus: m(l, (e) => {
                    var t;
                    e.preventDefault(),
                      null === (t = M.current) || void 0 === t || t.focus();
                  }),
                  onUnmountAutoFocus: a,
                },
                (0, d.createElement)(
                  A,
                  {
                    asChild: !0,
                    disableOutsidePointerEvents: u,
                    onEscapeKeyDown: s,
                    onPointerDownOutside: f,
                    onFocusOutside: p,
                    onInteractOutside: v,
                    onDismiss: h,
                  },
                  (0, d.createElement)(
                    t_,
                    i({asChild: !0}, R, {
                      dir: x.dir,
                      orientation: 'vertical',
                      loop: r,
                      currentTabStopId: S,
                      onCurrentTabStopIdChange: O,
                      onEntryFocus: m(c, (e) => {
                        x.isUsingKeyboardRef.current || e.preventDefault();
                      }),
                    }),
                    (0, d.createElement)(
                      ts,
                      i(
                        {
                          role: 'menu',
                          'aria-orientation': 'vertical',
                          'data-state': n7(E.open),
                          'data-radix-menu-content': '',
                          dir: x.dir,
                        },
                        C,
                        b,
                        {
                          ref: _,
                          style: {outline: 'none', ...b.style},
                          onKeyDown: m(b.onKeyDown, (e) => {
                            let t = e.target,
                              n =
                                t.closest('[data-radix-menu-content]') ===
                                e.currentTarget,
                              r = e.ctrlKey || e.altKey || e.metaKey,
                              o = 1 === e.key.length;
                            n &&
                              ('Tab' === e.key && e.preventDefault(),
                              !r && o && H(e.key));
                            let i = M.current;
                            if (e.target !== i || !ny.includes(e.key)) return;
                            e.preventDefault();
                            let l = P().filter((e) => !e.disabled),
                              a = l.map((e) => e.ref.current);
                            ng.includes(e.key) && a.reverse(),
                              (function (e) {
                                let t = document.activeElement;
                                for (let n of e)
                                  if (
                                    n === t ||
                                    (n.focus(), document.activeElement !== t)
                                  )
                                    return;
                              })(a);
                          }),
                          onBlur: m(e.onBlur, (e) => {
                            e.currentTarget.contains(e.target) ||
                              (window.clearTimeout(T.current),
                              (k.current = ''));
                          }),
                          onPointerMove: m(
                            e.onPointerMove,
                            re((e) => {
                              let t = e.target,
                                n = j.current !== e.clientX;
                              if (e.currentTarget.contains(t) && n) {
                                let t =
                                  e.clientX > j.current ? 'right' : 'left';
                                (N.current = t), (j.current = e.clientX);
                              }
                            })
                          ),
                        }
                      )
                    )
                  )
                )
              )
            )
          );
        }),
        nV = (0, d.forwardRef)((e, t) => {
          let {__scopeMenu: n, ...r} = e;
          return (0, d.createElement)(C.div, i({role: 'group'}, r, {ref: t}));
        }),
        nG = (0, d.forwardRef)((e, t) => {
          let {__scopeMenu: n, ...r} = e;
          return (0, d.createElement)(C.div, i({}, r, {ref: t}));
        }),
        nY = 'MenuItem',
        nX = 'menu.itemSelect',
        nq = (0, d.forwardRef)((e, t) => {
          let {disabled: n = !1, onSelect: r, ...o} = e,
            l = (0, d.useRef)(null),
            a = nk(nY, e.__scopeMenu),
            u = nz(nY, e.__scopeMenu),
            c = y(t, l),
            s = (0, d.useRef)(!1),
            f = () => {
              let e = l.current;
              if (!n && e) {
                let t = new CustomEvent(nX, {bubbles: !0, cancelable: !0});
                e.addEventListener(nX, (e) => (null == r ? void 0 : r(e)), {
                  once: !0,
                }),
                  R(e, t),
                  t.defaultPrevented ? (s.current = !1) : a.onClose();
              }
            };
          return (0, d.createElement)(
            nZ,
            i({}, o, {
              ref: c,
              disabled: n,
              onClick: m(e.onClick, f),
              onPointerDown: (t) => {
                var n;
                null === (n = e.onPointerDown) || void 0 === n || n.call(e, t),
                  (s.current = !0);
              },
              onPointerUp: m(e.onPointerUp, (e) => {
                var t;
                s.current ||
                  null === (t = e.currentTarget) ||
                  void 0 === t ||
                  t.click();
              }),
              onKeyDown: m(e.onKeyDown, (e) => {
                let t = '' !== u.searchRef.current;
                !n &&
                  (!t || ' ' !== e.key) &&
                  nh.includes(e.key) &&
                  (e.currentTarget.click(), e.preventDefault());
              }),
            })
          );
        }),
        nZ = (0, d.forwardRef)((e, t) => {
          let {__scopeMenu: n, disabled: r = !1, textValue: o, ...l} = e,
            a = nz(nY, n),
            u = nM(n),
            c = (0, d.useRef)(null),
            s = y(t, c),
            [f, p] = (0, d.useState)(!1),
            [v, h] = (0, d.useState)('');
          return (
            (0, d.useEffect)(() => {
              let e = c.current;
              if (e) {
                var t;
                h(
                  (null !== (t = e.textContent) && void 0 !== t ? t : '').trim()
                );
              }
            }, [l.children]),
            (0, d.createElement)(
              nx.ItemSlot,
              {scope: n, disabled: r, textValue: null != o ? o : v},
              (0, d.createElement)(
                tA,
                i({asChild: !0}, u, {focusable: !r}),
                (0, d.createElement)(
                  C.div,
                  i(
                    {
                      role: 'menuitem',
                      'data-highlighted': f ? '' : void 0,
                      'aria-disabled': r || void 0,
                      'data-disabled': r ? '' : void 0,
                    },
                    l,
                    {
                      ref: s,
                      onPointerMove: m(
                        e.onPointerMove,
                        re((e) => {
                          if (r) a.onItemLeave(e);
                          else if ((a.onItemEnter(e), !e.defaultPrevented)) {
                            let t = e.currentTarget;
                            t.focus();
                          }
                        })
                      ),
                      onPointerLeave: m(
                        e.onPointerLeave,
                        re((e) => a.onItemLeave(e))
                      ),
                      onFocus: m(e.onFocus, () => p(!0)),
                      onBlur: m(e.onBlur, () => p(!1)),
                    }
                  )
                )
              )
            )
          );
        }),
        [nJ, nQ] =
          ((e, t) => {
            let {checked: n = !1, onCheckedChange: r, ...o} = e;
            return (0, d.createElement)(
              n1,
              {scope: e.__scopeMenu, checked: n},
              (0, d.createElement)(
                nq,
                i(
                  {
                    role: 'menuitemcheckbox',
                    'aria-checked': n9(n) ? 'mixed' : n,
                  },
                  o,
                  {
                    ref: t,
                    'data-state': n8(n),
                    onSelect: m(
                      o.onSelect,
                      () => (null == r ? void 0 : r(!!n9(n) || !n)),
                      {checkForDefaultPrevented: !1}
                    ),
                  }
                )
              )
            );
          },
          nP('MenuRadioGroup', {value: void 0, onValueChange: () => {}})),
        n0 =
          ((e, t) => {
            let {value: n, onValueChange: r, ...o} = e,
              l = M(r);
            return (0, d.createElement)(
              nJ,
              {scope: e.__scopeMenu, value: n, onValueChange: l},
              (0, d.createElement)(nV, i({}, o, {ref: t}))
            );
          },
          'MenuItemIndicator'),
        [n1, n2] = nP(n0, {checked: !1}),
        n3 =
          ((e, t) => {
            let {__scopeMenu: n, forceMount: r, ...o} = e,
              l = n2(n0, n);
            return (0, d.createElement)(
              tg,
              {present: r || n9(l.checked) || !0 === l.checked},
              (0, d.createElement)(
                C.span,
                i({}, o, {ref: t, 'data-state': n8(l.checked)})
              )
            );
          },
          (0, d.forwardRef)((e, t) => {
            let {__scopeMenu: n, ...r} = e;
            return (0, d.createElement)(
              C.div,
              i({role: 'separator', 'aria-orientation': 'horizontal'}, r, {
                ref: t,
              })
            );
          })),
        [n5, n4] =
          ((e, t) => {
            let {__scopeMenu: n, ...r} = e,
              o = nO(n);
            return (0, d.createElement)(td, i({}, o, r, {ref: t}));
          },
          nP('MenuSub')),
        n6 = 'MenuSubTrigger';
      function n7(e) {
        return e ? 'open' : 'closed';
      }
      function n9(e) {
        return 'indeterminate' === e;
      }
      function n8(e) {
        return n9(e) ? 'indeterminate' : e ? 'checked' : 'unchecked';
      }
      function re(e) {
        return (t) => ('mouse' === t.pointerType ? e(t) : void 0);
      }
      (e, t) => {
        let n = nT(n6, e.__scopeMenu),
          r = nk(n6, e.__scopeMenu),
          o = n4(n6, e.__scopeMenu),
          l = nz(n6, e.__scopeMenu),
          a = (0, d.useRef)(null),
          {pointerGraceTimerRef: u, onPointerGraceIntentChange: c} = l,
          s = {__scopeMenu: e.__scopeMenu},
          f = (0, d.useCallback)(() => {
            a.current && window.clearTimeout(a.current), (a.current = null);
          }, []);
        return (
          (0, d.useEffect)(() => f, [f]),
          (0, d.useEffect)(() => {
            let e = u.current;
            return () => {
              window.clearTimeout(e), c(null);
            };
          }, [u, c]),
          (0, d.createElement)(
            nD,
            i({asChild: !0}, s),
            (0, d.createElement)(
              nZ,
              i(
                {
                  id: o.triggerId,
                  'aria-haspopup': 'menu',
                  'aria-expanded': n.open,
                  'aria-controls': o.contentId,
                  'data-state': n7(n.open),
                },
                e,
                {
                  ref: g(t, o.onTriggerChange),
                  onClick: (t) => {
                    var r;
                    null === (r = e.onClick) || void 0 === r || r.call(e, t),
                      e.disabled ||
                        t.defaultPrevented ||
                        (t.currentTarget.focus(), n.open || n.onOpenChange(!0));
                  },
                  onPointerMove: m(
                    e.onPointerMove,
                    re((t) => {
                      l.onItemEnter(t),
                        t.defaultPrevented ||
                          e.disabled ||
                          n.open ||
                          a.current ||
                          (l.onPointerGraceIntentChange(null),
                          (a.current = window.setTimeout(() => {
                            n.onOpenChange(!0), f();
                          }, 100)));
                    })
                  ),
                  onPointerLeave: m(
                    e.onPointerLeave,
                    re((e) => {
                      var t, r;
                      f();
                      let o =
                        null === (t = n.content) || void 0 === t
                          ? void 0
                          : t.getBoundingClientRect();
                      if (o) {
                        let t =
                            null === (r = n.content) || void 0 === r
                              ? void 0
                              : r.dataset.side,
                          i = 'right' === t,
                          a = o[i ? 'left' : 'right'],
                          c = o[i ? 'right' : 'left'];
                        l.onPointerGraceIntentChange({
                          area: [
                            {x: e.clientX + (i ? -5 : 5), y: e.clientY},
                            {x: a, y: o.top},
                            {x: c, y: o.top},
                            {x: c, y: o.bottom},
                            {x: a, y: o.bottom},
                          ],
                          side: t,
                        }),
                          window.clearTimeout(u.current),
                          (u.current = window.setTimeout(
                            () => l.onPointerGraceIntentChange(null),
                            300
                          ));
                      } else {
                        if ((l.onTriggerLeave(e), e.defaultPrevented)) return;
                        l.onPointerGraceIntentChange(null);
                      }
                    })
                  ),
                  onKeyDown: m(e.onKeyDown, (t) => {
                    let o = '' !== l.searchRef.current;
                    if (
                      !e.disabled &&
                      (!o || ' ' !== t.key) &&
                      nw[r.dir].includes(t.key)
                    ) {
                      var i;
                      n.onOpenChange(!0),
                        null === (i = n.content) || void 0 === i || i.focus(),
                        t.preventDefault();
                    }
                  }),
                }
              )
            )
          )
        );
      },
        (e, t) => {
          let n = nN(nW, e.__scopeMenu),
            {forceMount: r = n.forceMount, ...o} = e,
            l = nT(nW, e.__scopeMenu),
            a = nk(nW, e.__scopeMenu),
            u = n4('MenuSubContent', e.__scopeMenu),
            c = (0, d.useRef)(null),
            s = y(t, c);
          return (0, d.createElement)(
            nx.Provider,
            {scope: e.__scopeMenu},
            (0, d.createElement)(
              tg,
              {present: r || l.open},
              (0, d.createElement)(
                nx.Slot,
                {scope: e.__scopeMenu},
                (0, d.createElement)(
                  n$,
                  i({id: u.contentId, 'aria-labelledby': u.triggerId}, o, {
                    ref: s,
                    align: 'start',
                    side: 'rtl' === a.dir ? 'left' : 'right',
                    disableOutsidePointerEvents: !1,
                    disableOutsideScroll: !1,
                    trapFocus: !1,
                    onOpenAutoFocus: (e) => {
                      var t;
                      a.isUsingKeyboardRef.current &&
                        (null === (t = c.current) || void 0 === t || t.focus()),
                        e.preventDefault();
                    },
                    onCloseAutoFocus: (e) => e.preventDefault(),
                    onFocusOutside: m(e.onFocusOutside, (e) => {
                      e.target !== u.trigger && l.onOpenChange(!1);
                    }),
                    onEscapeKeyDown: m(e.onEscapeKeyDown, (e) => {
                      a.onClose(), e.preventDefault();
                    }),
                    onKeyDown: m(e.onKeyDown, (e) => {
                      let t = e.currentTarget.contains(e.target),
                        n = nb[a.dir].includes(e.key);
                      if (t && n) {
                        var r;
                        l.onOpenChange(!1),
                          null === (r = u.trigger) || void 0 === r || r.focus(),
                          e.preventDefault();
                      }
                    }),
                  })
                )
              )
            )
          );
        };
      let rt = 'ContextMenu',
        [rn, rr] = v(rt, [nS]),
        ro = nS(),
        [ri, rl] = rn(rt),
        ra = (e) => {
          let {
              __scopeContextMenu: t,
              children: n,
              onOpenChange: r,
              dir: o,
              modal: l = !0,
            } = e,
            [a, u] = (0, d.useState)(!1),
            c = ro(t),
            s = M(r),
            f = (0, d.useCallback)(
              (e) => {
                u(e), s(e);
              },
              [s]
            );
          return (0, d.createElement)(
            ri,
            {scope: t, open: a, onOpenChange: f, modal: l},
            (0, d.createElement)(
              nL,
              i({}, c, {dir: o, open: a, onOpenChange: f, modal: l}),
              n
            )
          );
        },
        ru = (0, d.forwardRef)((e, t) => {
          let {__scopeContextMenu: n, disabled: r = !1, ...o} = e,
            l = rl('ContextMenuTrigger', n),
            a = ro(n),
            u = (0, d.useRef)({x: 0, y: 0}),
            c = (0, d.useRef)({
              getBoundingClientRect: () =>
                DOMRect.fromRect({width: 0, height: 0, ...u.current}),
            }),
            s = (0, d.useRef)(0),
            f = (0, d.useCallback)(() => window.clearTimeout(s.current), []),
            p = (e) => {
              (u.current = {x: e.clientX, y: e.clientY}), l.onOpenChange(!0);
            };
          return (
            (0, d.useEffect)(() => f, [f]),
            (0, d.useEffect)(() => void (r && f()), [r, f]),
            (0, d.createElement)(
              d.Fragment,
              null,
              (0, d.createElement)(nD, i({}, a, {virtualRef: c})),
              (0, d.createElement)(
                C.span,
                i(
                  {
                    'data-state': l.open ? 'open' : 'closed',
                    'data-disabled': r ? '' : void 0,
                  },
                  o,
                  {
                    ref: t,
                    style: {WebkitTouchCallout: 'none', ...e.style},
                    onContextMenu: r
                      ? e.onContextMenu
                      : m(e.onContextMenu, (e) => {
                          f(), p(e), e.preventDefault();
                        }),
                    onPointerDown: r
                      ? e.onPointerDown
                      : m(
                          e.onPointerDown,
                          rm((e) => {
                            f(),
                              (s.current = window.setTimeout(() => p(e), 700));
                          })
                        ),
                    onPointerMove: r
                      ? e.onPointerMove
                      : m(e.onPointerMove, rm(f)),
                    onPointerCancel: r
                      ? e.onPointerCancel
                      : m(e.onPointerCancel, rm(f)),
                    onPointerUp: r ? e.onPointerUp : m(e.onPointerUp, rm(f)),
                  }
                )
              )
            )
          );
        }),
        rc = (e) => {
          let {__scopeContextMenu: t, ...n} = e,
            r = ro(t);
          return (0, d.createElement)(nj, i({}, r, n));
        },
        rs = (0, d.forwardRef)((e, t) => {
          let {__scopeContextMenu: n, ...r} = e,
            o = rl('ContextMenuContent', n),
            l = ro(n),
            a = (0, d.useRef)(!1);
          return (0, d.createElement)(
            nH,
            i({}, l, r, {
              ref: t,
              side: 'right',
              sideOffset: 2,
              align: 'start',
              onCloseAutoFocus: (t) => {
                var n;
                null === (n = e.onCloseAutoFocus) ||
                  void 0 === n ||
                  n.call(e, t),
                  !t.defaultPrevented && a.current && t.preventDefault(),
                  (a.current = !1);
              },
              onInteractOutside: (t) => {
                var n;
                null === (n = e.onInteractOutside) ||
                  void 0 === n ||
                  n.call(e, t),
                  t.defaultPrevented || o.modal || (a.current = !0);
              },
              style: {
                ...e.style,
                '--radix-context-menu-content-transform-origin':
                  'var(--radix-popper-transform-origin)',
                '--radix-context-menu-content-available-width':
                  'var(--radix-popper-available-width)',
                '--radix-context-menu-content-available-height':
                  'var(--radix-popper-available-height)',
                '--radix-context-menu-trigger-width':
                  'var(--radix-popper-anchor-width)',
                '--radix-context-menu-trigger-height':
                  'var(--radix-popper-anchor-height)',
              },
            })
          );
        }),
        rf = (0, d.forwardRef)((e, t) => {
          let {__scopeContextMenu: n, ...r} = e,
            o = ro(n);
          return (0, d.createElement)(nG, i({}, o, r, {ref: t}));
        }),
        rd = (0, d.forwardRef)((e, t) => {
          let {__scopeContextMenu: n, ...r} = e,
            o = ro(n);
          return (0, d.createElement)(nq, i({}, o, r, {ref: t}));
        }),
        rp = (0, d.forwardRef)((e, t) => {
          let {__scopeContextMenu: n, ...r} = e,
            o = ro(n);
          return (0, d.createElement)(n3, i({}, o, r, {ref: t}));
        });
      function rm(e) {
        return (t) => ('mouse' !== t.pointerType ? e(t) : void 0);
      }
      let rv = ra,
        rh = ru,
        rg = rc,
        ry = rs,
        rw = rf,
        rb = rd,
        rE = rp;
    },
    68003: function (e, t, n) {
      'use strict';
      n.d(t, {
        z: function () {
          return y;
        },
      });
      var r = n(67294),
        o = n.t(r, 2),
        i = function (e, t) {},
        l = class extends Error {
          constructor(e) {
            super(`react-collapsed: ${e}`);
          }
        },
        a = (...e) => i(e[0], `[react-collapsed] -- ${e[1]}`);
      function u(e) {
        let t = (0, r.useRef)(e);
        return (
          (0, r.useEffect)(() => {
            t.current = e;
          }),
          (0, r.useCallback)((...e) => t.current?.(...e), [])
        );
      }
      var c = o['useId'.toString()] || (() => void 0),
        s = 'undefined' != typeof window ? r.useLayoutEffect : r.useEffect,
        f = !1,
        d = 0,
        p = () => ++d;
      function m(e) {
        e.id && cancelAnimationFrame(e.id);
      }
      function v(e) {
        return e?.current
          ? e.current.scrollHeight
          : (a(
              !0,
              `Was not able to find a ref to the collapse element via \`getCollapseProps\`. Ensure that the element exposes its \`ref\` prop. If it exposes the ref prop under a different name (like \`innerRef\`), use the \`refKey\` property to change it. Example:

const collapseProps = getCollapseProps({refKey: 'innerRef'})`
            ),
            0);
      }
      function h(...e) {
        return e.every((e) => null == e)
          ? null
          : (t) => {
              e.forEach((e) => {
                !(function (e, t) {
                  if (null != e) {
                    if ('function' == typeof e) e(t);
                    else
                      try {
                        e.current = t;
                      } catch (n) {
                        throw new l(`Cannot assign value "${t}" to ref "${e}"`);
                      }
                  }
                })(e, t);
              });
            };
      }
      var g = 'undefined' == typeof window ? r.useEffect : r.useLayoutEffect;
      function y({
        duration: e,
        easing: t = 'cubic-bezier(0.4, 0, 0.2, 1)',
        onTransitionStateChange: n = () => {},
        isExpanded: o,
        defaultExpanded: i = !1,
        hasDisabledAnimation: l,
        ...d
      } = {}) {
        let y;
        let w = u(n),
          b = (function (e) {
            let t = (function () {
                let e = c();
                return e ?? '';
              })(),
              n = (function (e) {
                let t = e || (f ? p() : null),
                  [n, o] = r.useState(t);
                return (
                  s(() => {
                    null === n && o(p());
                  }, []),
                  r.useEffect(() => {
                    !1 === f && (f = !0);
                  }, []),
                  null != n ? String(n) : void 0
                );
              })(e);
            return 'string' == typeof e ? e : 'string' == typeof t ? t : n;
          })(),
          [E, x] = (function (e, t, n) {
            let [o, i] = (0, r.useState)(t),
              l = (0, r.useRef)(void 0 !== e),
              c = l.current ? e : o,
              s = u(void 0),
              f = (0, r.useCallback)(
                (e) => {
                  let t = 'function' == typeof e ? e(c) : e;
                  l.current || i(t), s?.(t);
                },
                [s, c]
              );
            return (
              (0, r.useEffect)(() => {
                a(
                  !(l.current && null == e),
                  '`isExpanded` state is changing from controlled to uncontrolled. useCollapse should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled collapse for the lifetime of the component. Check the `isExpanded` prop.'
                ),
                  a(
                    !(!l.current && null != e),
                    '`isExpanded` state is changing from uncontrolled to controlled. useCollapse should not switch from uncontrolled to controlled (or vice versa). Decide between using a controlled or uncontrolled collapse for the lifetime of the component. Check the `isExpanded` prop.'
                  );
              }, [e]),
              [c, f]
            );
          })(o, i),
          C = (0, r.useRef)(E),
          [R, P] = (0, r.useState)(!1),
          S = (function () {
            let [e, t] = (0, r.useState)(!1);
            return (
              (0, r.useEffect)(() => {
                let e = window.matchMedia('(prefers-reduced-motion: reduce)');
                t(e.matches);
                let n = (e) => {
                  t(e.matches);
                };
                return e.addEventListener
                  ? (e.addEventListener('change', n),
                    () => {
                      e.removeEventListener('change', n);
                    })
                  : e.addListener
                  ? (e.addListener(n),
                    () => {
                      e.removeListener(n);
                    })
                  : void 0;
              }, []),
              e
            );
          })(),
          O = l ?? S,
          M = (0, r.useRef)(),
          _ = (0, r.useRef)(),
          T = (0, r.useRef)(null),
          [A, k] = (0, r.useState)(null);
        (y = (e) => {}),
          (y = (e) => {
            if (!e?.current) return;
            let {paddingTop: t, paddingBottom: n} = window.getComputedStyle(
              e.current
            );
            a(
              !((t && '0px' !== t) || (n && '0px' !== n)),
              `Padding applied to the collapse element will cause the animation to break and not perform as expected. To fix, apply equivalent padding to the direct descendent of the collapse element. Example:

Before:   <div {...getCollapseProps({style: {padding: 10}})}>{children}</div>

After:   <div {...getCollapseProps()}>
             <div style={{padding: 10}}>
                 {children}
             </div>
          </div>`
            );
          }),
          (0, r.useEffect)(() => {
            y(T);
          }, [T]);
        let L = `${d.collapsedHeight || 0}px`;
        function D(e) {
          if (!T.current) return;
          let t = T.current;
          for (let n in e) {
            let r = e[n];
            r ? (t.style[n] = r) : t.style.removeProperty(n);
          }
        }
        return (
          g(() => {
            let n = T.current;
            if (!n || E === C.current) return;
            function r(t) {
              return O
                ? 0
                : e ??
                    (function (e) {
                      if (!e || 'string' == typeof e) return 0;
                      let t = e / 36;
                      return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
                    })(t);
            }
            C.current = E;
            let o = (e) => `height ${r(e)}ms ${t}`,
              i = (e) => {
                _.current && m(_.current),
                  (_.current = (function (e, t) {
                    let n = performance.now(),
                      r = {};
                    return (
                      (function o() {
                        r.id = requestAnimationFrame((r) => {
                          r - n > t ? e() : o();
                        });
                      })(),
                      r
                    );
                  })(function () {
                    E
                      ? (D({
                          height: '',
                          overflow: '',
                          transition: '',
                          display: '',
                        }),
                        w('expandEnd'))
                      : (D({transition: ''}), w('collapseEnd')),
                      P(!1);
                  }, e));
              };
            return (
              P(!0),
              E
                ? (M.current = requestAnimationFrame(() => {
                    w('expandStart'),
                      D({display: 'block', overflow: 'hidden', height: L}),
                      (M.current = requestAnimationFrame(() => {
                        w('expanding');
                        let e = v(T);
                        i(r(e)),
                          T.current &&
                            ((T.current.style.transition = o(e)),
                            (T.current.style.height = `${e}px`));
                      }));
                  }))
                : (M.current = requestAnimationFrame(() => {
                    w('collapseStart');
                    let e = v(T);
                    i(r(e)),
                      D({transition: o(e), height: `${e}px`}),
                      (M.current = requestAnimationFrame(() => {
                        w('collapsing'), D({height: L, overflow: 'hidden'});
                      }));
                  })),
              () => {
                M.current && cancelAnimationFrame(M.current),
                  _.current && m(_.current);
              }
            );
          }, [E, L, O, e, t, w]),
          {
            isExpanded: E,
            setExpanded: x,
            getToggleProps(e) {
              let {
                  disabled: t,
                  onClick: n,
                  refKey: r,
                } = {refKey: 'ref', onClick() {}, disabled: !1, ...e},
                o = A ? 'BUTTON' === A.tagName : void 0,
                i = e?.[r || 'ref'],
                l = {
                  id: `react-collapsed-toggle-${b}`,
                  'aria-controls': `react-collapsed-panel-${b}`,
                  'aria-expanded': E,
                  onClick(e) {
                    t || (n?.(e), x((e) => !e));
                  },
                  [r || 'ref']: h(i, k),
                },
                a = {type: 'button', disabled: !!t || void 0},
                u = {
                  'aria-disabled': !!t || void 0,
                  role: 'button',
                  tabIndex: t ? -1 : 0,
                };
              return !1 === o
                ? {...l, ...u}
                : !0 === o
                ? {...l, ...a}
                : {...l, ...a, ...u};
            },
            getCollapseProps(e) {
              let {style: t, refKey: n} = {refKey: 'ref', style: {}, ...e},
                r = e?.[n || 'ref'];
              return {
                id: `react-collapsed-panel-${b}`,
                'aria-hidden': !E,
                role: 'region',
                ...e,
                [n || 'ref']: h(T, r),
                style: {
                  boxSizing: 'border-box',
                  ...(R || E
                    ? {}
                    : {
                        display: '0px' === L ? 'none' : 'block',
                        height: L,
                        overflow: 'hidden',
                      }),
                  ...t,
                },
              };
            },
          }
        );
      }
    },
  },
]);
