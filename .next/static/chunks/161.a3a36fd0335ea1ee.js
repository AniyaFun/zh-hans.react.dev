'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [161],
  {
    37300: function (e, t, r) {
      r.r(t),
        r.d(t, {
          DocSearchModal: function () {
            return tQ;
          },
        });
      var n = r(67294);
      function o(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o(Object(r), !0).forEach(function (t) {
                var n, o;
                (n = e),
                  (o = r[t]),
                  t in n
                    ? Object.defineProperty(n, t, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[t] = o);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : o(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function a() {
        return (a =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function c(e, t) {
        if (null == e) return {};
        var r,
          n,
          o = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              o = {},
              i = Object.keys(e);
            for (n = 0; n < i.length; n++)
              (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (n = 0; n < i.length; n++)
            (r = i[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (o[r] = e[r]));
        }
        return o;
      }
      function l(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
                  e['@@iterator'];
            if (null != r) {
              var n,
                o,
                i = [],
                a = !0,
                c = !1;
              try {
                for (
                  r = r.call(e);
                  !(a = (n = r.next()).done) &&
                  (i.push(n.value), !t || i.length !== t);
                  a = !0
                );
              } catch (e) {
                (c = !0), (o = e);
              } finally {
                try {
                  a || null == r.return || r.return();
                } finally {
                  if (c) throw o;
                }
              }
              return i;
            }
          })(e, t) ||
          u(e, t) ||
          (function () {
            throw TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function u(e, t) {
        if (e) {
          if ('string' == typeof e) return s(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === r && e.constructor && (r = e.constructor.name),
            'Map' === r || 'Set' === r
              ? Array.from(e)
              : 'Arguments' === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? s(e, t)
              : void 0
          );
        }
      }
      function s(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function f() {
        return n.createElement(
          'svg',
          {width: '15', height: '15', className: 'DocSearch-Control-Key-Icon'},
          n.createElement('path', {
            d: 'M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953',
            strokeWidth: '1.2',
            stroke: 'currentColor',
            fill: 'none',
            strokeLinecap: 'square',
          })
        );
      }
      function m() {
        return n.createElement(
          'svg',
          {
            width: '20',
            height: '20',
            className: 'DocSearch-Search-Icon',
            viewBox: '0 0 20 20',
            'aria-hidden': 'true',
          },
          n.createElement('path', {
            d: 'M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z',
            stroke: 'currentColor',
            fill: 'none',
            fillRule: 'evenodd',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          })
        );
      }
      r(73935);
      var p = ['translations'];
      function d(e) {
        var t = e.reactsToKey,
          r = e.children,
          o = l((0, n.useState)(!1), 2),
          i = o[0],
          a = o[1];
        return (
          (0, n.useEffect)(
            function () {
              if (t)
                return (
                  window.addEventListener('keydown', e),
                  window.addEventListener('keyup', r),
                  function () {
                    window.removeEventListener('keydown', e),
                      window.removeEventListener('keyup', r);
                  }
                );
              function e(e) {
                e.key === t && a(!0);
              }
              function r(e) {
                (e.key !== t && 'Meta' !== e.key) || a(!1);
              }
            },
            [t]
          ),
          n.createElement(
            'kbd',
            {
              className: i
                ? 'DocSearch-Button-Key DocSearch-Button-Key--pressed'
                : 'DocSearch-Button-Key',
            },
            r
          )
        );
      }
      function v(e, t) {
        var r = void 0;
        return function () {
          for (var n = arguments.length, o = Array(n), i = 0; i < n; i++)
            o[i] = arguments[i];
          r && clearTimeout(r),
            (r = setTimeout(function () {
              return e.apply(void 0, o);
            }, t));
        };
      }
      function h(e) {
        return e.reduce(function (e, t) {
          return e.concat(t);
        }, []);
      }
      n.forwardRef(function (e, t) {
        var r = e.translations,
          o = void 0 === r ? {} : r,
          i = c(e, p),
          u = o.buttonText,
          s = o.buttonAriaLabel,
          v = l((0, n.useState)(null), 2),
          h = v[0],
          y = v[1];
        return (
          (0, n.useEffect)(function () {
            'undefined' != typeof navigator &&
              (/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)
                ? y('⌘')
                : y('Ctrl'));
          }, []),
          n.createElement(
            'button',
            a(
              {
                type: 'button',
                className: 'DocSearch DocSearch-Button',
                'aria-label': void 0 === s ? 'Search' : s,
              },
              i,
              {ref: t}
            ),
            n.createElement(
              'span',
              {className: 'DocSearch-Button-Container'},
              n.createElement(m, null),
              n.createElement(
                'span',
                {className: 'DocSearch-Button-Placeholder'},
                void 0 === u ? 'Search' : u
              )
            ),
            n.createElement(
              'span',
              {className: 'DocSearch-Button-Keys'},
              null !== h &&
                n.createElement(
                  n.Fragment,
                  null,
                  n.createElement(
                    d,
                    {reactsToKey: 'Ctrl' === h ? 'Ctrl' : 'Meta'},
                    'Ctrl' === h ? n.createElement(f, null) : h
                  ),
                  n.createElement(d, {reactsToKey: 'k'}, 'K')
                )
            )
          )
        );
      });
      var y = 0;
      function b(e) {
        return 0 === e.collections.length
          ? 0
          : e.collections.reduce(function (e, t) {
              return e + t.items.length;
            }, 0);
      }
      function g(e) {
        return e !== Object(e);
      }
      var S = function () {},
        O = [{segment: 'autocomplete-core', version: '1.9.3'}];
      function E(e) {
        var t = e.item,
          r = e.items;
        return {
          index: t.__autocomplete_indexName,
          items: [t],
          positions: [
            1 +
              r.findIndex(function (e) {
                return e.objectID === t.objectID;
              }),
          ],
          queryID: t.__autocomplete_queryID,
          algoliaSource: ['autocomplete'],
        };
      }
      function j(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      var w = ['items'],
        I = ['items'];
      function P(e) {
        return (P =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function D(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return A(e);
          })(e) ||
          (function (e) {
            if (
              ('undefined' != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e['@@iterator']
            )
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (e) {
              if ('string' == typeof e) return A(e, t);
              var r = Object.prototype.toString.call(e).slice(8, -1);
              if (
                ('Object' === r && e.constructor && (r = e.constructor.name),
                'Map' === r || 'Set' === r)
              )
                return Array.from(e);
              if (
                'Arguments' === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              )
                return A(e, t);
            }
          })(e) ||
          (function () {
            throw TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function A(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function k(e, t) {
        if (null == e) return {};
        var r,
          n,
          o = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              o = {},
              i = Object.keys(e);
            for (n = 0; n < i.length; n++)
              (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (n = 0; n < i.length; n++)
            (r = i[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (o[r] = e[r]));
        }
        return o;
      }
      function C(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function N(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? C(Object(r), !0).forEach(function (t) {
                !(function (e, t, r) {
                  var n;
                  ((n = (function (e, t) {
                    if ('object' !== P(e) || null === e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || 'default');
                      if ('object' !== P(n)) return n;
                      throw TypeError(
                        '@@toPrimitive must return a primitive value.'
                      );
                    }
                    return ('string' === t ? String : Number)(e);
                  })(t, 'string')),
                  (t = 'symbol' === P(n) ? n : String(n)) in e)
                    ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (e[t] = r);
                })(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : C(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function _(e) {
        return e.map(function (e) {
          var t = e.items,
            r = k(e, w);
          return N(
            N({}, r),
            {},
            {
              objectIDs:
                (null == t
                  ? void 0
                  : t.map(function (e) {
                      return e.objectID;
                    })) || r.objectIDs,
            }
          );
        });
      }
      function x(e) {
        return (
          e.objectID && e.__autocomplete_indexName && e.__autocomplete_queryID
        );
      }
      function T(e) {
        return (T =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function R(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return q(e);
          })(e) ||
          (function (e) {
            if (
              ('undefined' != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e['@@iterator']
            )
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (e) {
              if ('string' == typeof e) return q(e, t);
              var r = Object.prototype.toString.call(e).slice(8, -1);
              if (
                ('Object' === r && e.constructor && (r = e.constructor.name),
                'Map' === r || 'Set' === r)
              )
                return Array.from(e);
              if (
                'Arguments' === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              )
                return q(e, t);
            }
          })(e) ||
          (function () {
            throw TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function q(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function L(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function M(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? L(Object(r), !0).forEach(function (t) {
                !(function (e, t, r) {
                  var n;
                  ((n = (function (e, t) {
                    if ('object' !== T(e) || null === e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || 'default');
                      if ('object' !== T(n)) return n;
                      throw TypeError(
                        '@@toPrimitive must return a primitive value.'
                      );
                    }
                    return ('string' === t ? String : Number)(e);
                  })(t, 'string')),
                  (t = 'symbol' === T(n) ? n : String(n)) in e)
                    ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (e[t] = r);
                })(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : L(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var H = 'https://cdn.jsdelivr.net/npm/search-insights@'.concat(
          '2.6.0',
          '/dist/search-insights.min.js'
        ),
        F = v(function (e) {
          var t,
            r = e.onItemsChange,
            n = e.items,
            o = e.insights,
            i = e.state;
          r({
            insights: o,
            insightsEvents: Object.keys(
              (t = n.reduce(function (e, t) {
                var r;
                return (
                  (e[t.__autocomplete_indexName] = (
                    null !== (r = e[t.__autocomplete_indexName]) && void 0 !== r
                      ? r
                      : []
                  ).concat(t)),
                  e
                );
              }, {}))
            )
              .map(function (e) {
                return {index: e, items: t[e], algoliaSource: ['autocomplete']};
              })
              .map(function (e) {
                return M({eventName: 'Items Viewed'}, e);
              }),
            state: i,
          });
        }, 400);
      function U(e) {
        return (function e(t, r) {
          var n = r;
          return {
            then: function (r, o) {
              return e(t.then(B(r, n, t), B(o, n, t)), n);
            },
            catch: function (r) {
              return e(t.catch(B(r, n, t)), n);
            },
            finally: function (r) {
              return (
                r && n.onCancelList.push(r),
                e(
                  t.finally(
                    B(
                      r &&
                        function () {
                          return (n.onCancelList = []), r();
                        },
                      n,
                      t
                    )
                  ),
                  n
                )
              );
            },
            cancel: function () {
              n.isCanceled = !0;
              var e = n.onCancelList;
              (n.onCancelList = []),
                e.forEach(function (e) {
                  e();
                });
            },
            isCanceled: function () {
              return !0 === n.isCanceled;
            },
          };
        })(e, {isCanceled: !1, onCancelList: []});
      }
      function B(e, t, r) {
        return e
          ? function (r) {
              return t.isCanceled ? r : e(r);
            }
          : r;
      }
      function V(e, t, r, n) {
        if (!r) return null;
        if (e < 0 && (null === t || (null !== n && 0 === t))) return r + e;
        var o = (null === t ? -1 : t) + e;
        return o <= -1 || o >= r ? (null === n ? null : 0) : o;
      }
      function K(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function J(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? K(Object(r), !0).forEach(function (t) {
                !(function (e, t, r) {
                  var n;
                  ((n = (function (e, t) {
                    if ('object' !== $(e) || null === e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || 'default');
                      if ('object' !== $(n)) return n;
                      throw TypeError(
                        '@@toPrimitive must return a primitive value.'
                      );
                    }
                    return ('string' === t ? String : Number)(e);
                  })(t, 'string')),
                  (t = 'symbol' === $(n) ? n : String(n)) in e)
                    ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (e[t] = r);
                })(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : K(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function $(e) {
        return ($ =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function z(e) {
        var t,
          r =
            ((t = e.collections
              .map(function (e) {
                return e.items.length;
              })
              .reduce(function (e, t, r) {
                var n = (e[r - 1] || 0) + t;
                return e.push(n), e;
              }, [])
              .reduce(function (t, r) {
                return r <= e.activeItemId ? t + 1 : t;
              }, 0)),
            e.collections[t]);
        if (!r) return null;
        var n =
            r.items[
              (function (e) {
                for (
                  var t = e.state, r = e.collection, n = !1, o = 0, i = 0;
                  !1 === n;

                ) {
                  var a = t.collections[o];
                  if (a === r) {
                    n = !0;
                    break;
                  }
                  (i += a.items.length), o++;
                }
                return t.activeItemId - i;
              })({state: e, collection: r})
            ],
          o = r.source;
        return {
          item: n,
          itemInputValue: o.getItemInputValue({item: n, state: e}),
          itemUrl: o.getItemUrl({item: n, state: e}),
          source: o,
        };
      }
      var W = /((gt|sm)-|galaxy nexus)|samsung[- ]|samsungbrowser/i;
      function Q(e) {
        return (Q =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function Z(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function G(e) {
        return (G =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function X(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function Y(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? X(Object(r), !0).forEach(function (t) {
                !(function (e, t, r) {
                  var n;
                  ((n = (function (e, t) {
                    if ('object' !== G(e) || null === e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || 'default');
                      if ('object' !== G(n)) return n;
                      throw TypeError(
                        '@@toPrimitive must return a primitive value.'
                      );
                    }
                    return ('string' === t ? String : Number)(e);
                  })(t, 'string')),
                  (t = 'symbol' === G(n) ? n : String(n)) in e)
                    ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (e[t] = r);
                })(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : X(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function ee(e) {
        return (ee =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function et(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function er(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function en(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? er(Object(r), !0).forEach(function (t) {
                !(function (e, t, r) {
                  var n;
                  ((n = (function (e, t) {
                    if ('object' !== ee(e) || null === e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || 'default');
                      if ('object' !== ee(n)) return n;
                      throw TypeError(
                        '@@toPrimitive must return a primitive value.'
                      );
                    }
                    return ('string' === t ? String : Number)(e);
                  })(t, 'string')),
                  (t = 'symbol' === ee(n) ? n : String(n)) in e)
                    ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (e[t] = r);
                })(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : er(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function eo(e) {
        return (eo =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function ei(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function ea(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ei(Object(r), !0).forEach(function (t) {
                ec(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ei(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function ec(e, t, r) {
        var n;
        return (
          ((n = (function (e, t) {
            if ('object' !== eo(e) || null === e) return e;
            var r = e[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(e, t || 'default');
              if ('object' !== eo(n)) return n;
              throw TypeError('@@toPrimitive must return a primitive value.');
            }
            return ('string' === t ? String : Number)(e);
          })(t, 'string')),
          (t = 'symbol' === eo(n) ? n : String(n)) in e)
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function el(e) {
        return (el =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function eu(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function es(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? eu(Object(r), !0).forEach(function (t) {
                !(function (e, t, r) {
                  var n;
                  ((n = (function (e, t) {
                    if ('object' !== el(e) || null === e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || 'default');
                      if ('object' !== el(n)) return n;
                      throw TypeError(
                        '@@toPrimitive must return a primitive value.'
                      );
                    }
                    return ('string' === t ? String : Number)(e);
                  })(t, 'string')),
                  (t = 'symbol' === el(n) ? n : String(n)) in e)
                    ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (e[t] = r);
                })(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : eu(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function ef(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return em(e);
          })(e) ||
          (function (e) {
            if (
              ('undefined' != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e['@@iterator']
            )
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (e) {
              if ('string' == typeof e) return em(e, t);
              var r = Object.prototype.toString.call(e).slice(8, -1);
              if (
                ('Object' === r && e.constructor && (r = e.constructor.name),
                'Map' === r || 'Set' === r)
              )
                return Array.from(e);
              if (
                'Arguments' === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              )
                return em(e, t);
            }
          })(e) ||
          (function () {
            throw TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function em(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function ep(e) {
        return !!e.execute;
      }
      function ed(e) {
        return Promise.all(
          e
            .reduce(function (e, t) {
              if (!ep(t)) return e.push(t), e;
              var r,
                n = t.searchClient,
                o = t.execute,
                i = t.requesterId,
                a = t.requests,
                c = e.find(function (e) {
                  return (
                    ep(t) &&
                    ep(e) &&
                    e.searchClient === n &&
                    !!i &&
                    e.requesterId === i
                  );
                });
              return (
                c
                  ? (r = c.items).push.apply(r, ef(a))
                  : e.push({
                      execute: o,
                      requesterId: i,
                      items: a,
                      searchClient: n,
                    }),
                e
              );
            }, [])
            .map(function (e) {
              if (!ep(e)) return Promise.resolve(e);
              var t = e.execute,
                r = e.items;
              return t({searchClient: e.searchClient, requests: r});
            })
        ).then(function (e) {
          return h(e);
        });
      }
      function ev(e) {
        return (ev =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      var eh = ['event', 'nextState', 'props', 'query', 'refresh', 'store'];
      function ey(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function eb(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ey(Object(r), !0).forEach(function (t) {
                !(function (e, t, r) {
                  var n;
                  ((n = (function (e, t) {
                    if ('object' !== ev(e) || null === e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || 'default');
                      if ('object' !== ev(n)) return n;
                      throw TypeError(
                        '@@toPrimitive must return a primitive value.'
                      );
                    }
                    return ('string' === t ? String : Number)(e);
                  })(t, 'string')),
                  (t = 'symbol' === ev(n) ? n : String(n)) in e)
                    ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (e[t] = r);
                })(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ey(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var eg,
        eS,
        eO,
        eE = null,
        ej =
          ((eg = -1),
          (eS = -1),
          (eO = void 0),
          function (e) {
            var t = ++eg;
            return Promise.resolve(e).then(function (e) {
              return eO && t < eS ? eO : ((eS = t), (eO = e), e);
            });
          });
      function ew(e) {
        var t = e.event,
          r = e.nextState,
          n = void 0 === r ? {} : r,
          o = e.props,
          i = e.query,
          a = e.refresh,
          c = e.store,
          l = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              o = (function (e, t) {
                if (null == e) return {};
                var r,
                  n,
                  o = {},
                  i = Object.keys(e);
                for (n = 0; n < i.length; n++)
                  (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                return o;
              })(e, t);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(e);
              for (n = 0; n < i.length; n++)
                (r = i[n]),
                  t.indexOf(r) >= 0 ||
                    (Object.prototype.propertyIsEnumerable.call(e, r) &&
                      (o[r] = e[r]));
            }
            return o;
          })(e, eh);
        eE && o.environment.clearTimeout(eE);
        var u = l.setCollections,
          s = l.setIsOpen,
          f = l.setQuery,
          m = l.setActiveItemId,
          p = l.setStatus;
        if ((f(i), m(o.defaultActiveItemId), !i && !1 === o.openOnFocus)) {
          var d,
            v = c.getState().collections.map(function (e) {
              return eb(eb({}, e), {}, {items: []});
            });
          p('idle'),
            u(v),
            s(
              null !== (d = n.isOpen) && void 0 !== d
                ? d
                : o.shouldPanelOpen({state: c.getState()})
            );
          var y = U(
            ej(v).then(function () {
              return Promise.resolve();
            })
          );
          return c.pendingRequests.add(y);
        }
        p('loading'),
          (eE = o.environment.setTimeout(function () {
            p('stalled');
          }, o.stallThreshold));
        var b = U(
          ej(
            o
              .getSources(eb({query: i, refresh: a, state: c.getState()}, l))
              .then(function (e) {
                return Promise.all(
                  e.map(function (e) {
                    return Promise.resolve(
                      e.getItems(
                        eb({query: i, refresh: a, state: c.getState()}, l)
                      )
                    ).then(function (t) {
                      return (function (e, t, r) {
                        if (null == e ? void 0 : e.execute) {
                          var n =
                            'algolia' === e.requesterId
                              ? Object.assign.apply(
                                  Object,
                                  [{}].concat(
                                    ef(
                                      Object.keys(r.context).map(function (e) {
                                        var t;
                                        return null === (t = r.context[e]) ||
                                          void 0 === t
                                          ? void 0
                                          : t.__algoliaSearchParameters;
                                      })
                                    )
                                  )
                                )
                              : {};
                          return es(
                            es({}, e),
                            {},
                            {
                              requests: e.queries.map(function (r) {
                                return {
                                  query:
                                    'algolia' === e.requesterId
                                      ? es(
                                          es({}, r),
                                          {},
                                          {params: es(es({}, n), r.params)}
                                        )
                                      : r,
                                  sourceId: t,
                                  transformResponse: e.transformResponse,
                                };
                              }),
                            }
                          );
                        }
                        return {items: e, sourceId: t};
                      })(t, e.sourceId, c.getState());
                    });
                  })
                )
                  .then(ed)
                  .then(function (t) {
                    return e.map(function (e) {
                      var r = t.filter(function (t) {
                          return t.sourceId === e.sourceId;
                        }),
                        n = r.map(function (e) {
                          return e.items;
                        }),
                        o = r[0].transformResponse,
                        i = o
                          ? o({
                              results: n,
                              hits: n
                                .map(function (e) {
                                  return e.hits;
                                })
                                .filter(Boolean),
                              facetHits: n
                                .map(function (e) {
                                  var t;
                                  return null === (t = e.facetHits) ||
                                    void 0 === t
                                    ? void 0
                                    : t.map(function (e) {
                                        return {
                                          label: e.value,
                                          count: e.count,
                                          _highlightResult: {
                                            label: {value: e.highlighted},
                                          },
                                        };
                                      });
                                })
                                .filter(Boolean),
                            })
                          : n;
                      return (
                        e.onResolve({
                          source: e,
                          results: n,
                          items: i,
                          state: c.getState(),
                        }),
                        i.every(Boolean),
                        'The `getItems` function from source "'
                          .concat(
                            e.sourceId,
                            '" must return an array of items but returned '
                          )
                          .concat(
                            JSON.stringify(void 0),
                            '.\n\nDid you forget to return items?\n\nSee: https://www.algolia.com/doc/ui-libraries/autocomplete/core-concepts/sources/#param-getitems'
                          ),
                        {source: e, items: i}
                      );
                    });
                  })
                  .then(function (e) {
                    var t, r, n, i, a, l;
                    return (
                      (r = (t = {collections: e, props: o, state: c.getState()})
                        .collections),
                      (n = t.props),
                      (i = t.state),
                      (a = r.reduce(function (e, t) {
                        return ea(
                          ea({}, e),
                          {},
                          ec(
                            {},
                            t.source.sourceId,
                            ea(
                              ea({}, t.source),
                              {},
                              {
                                getItems: function () {
                                  return h(t.items);
                                },
                              }
                            )
                          )
                        );
                      }, {})),
                      (l = n.plugins.reduce(
                        function (e, t) {
                          return t.reshape ? t.reshape(e) : e;
                        },
                        {sourcesBySourceId: a, state: i}
                      ).sourcesBySourceId),
                      h(
                        n.reshape({
                          sourcesBySourceId: l,
                          sources: Object.values(l),
                          state: i,
                        })
                      )
                        .filter(Boolean)
                        .map(function (e) {
                          return {source: e, items: e.getItems()};
                        })
                    );
                  });
              })
          )
        )
          .then(function (e) {
            p('idle'), u(e);
            var r,
              f = o.shouldPanelOpen({state: c.getState()});
            s(
              null !== (r = n.isOpen) && void 0 !== r
                ? r
                : (o.openOnFocus && !i && f) || f
            );
            var m = z(c.getState());
            if (null !== c.getState().activeItemId && m) {
              var d = m.item,
                v = m.itemInputValue,
                h = m.itemUrl,
                y = m.source;
              y.onActive(
                eb(
                  {
                    event: t,
                    item: d,
                    itemInputValue: v,
                    itemUrl: h,
                    refresh: a,
                    source: y,
                    state: c.getState(),
                  },
                  l
                )
              );
            }
          })
          .finally(function () {
            p('idle'), eE && o.environment.clearTimeout(eE);
          });
        return c.pendingRequests.add(b);
      }
      function eI(e) {
        return (eI =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      var eP = ['event', 'props', 'refresh', 'store'];
      function eD(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function eA(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? eD(Object(r), !0).forEach(function (t) {
                !(function (e, t, r) {
                  var n;
                  ((n = (function (e, t) {
                    if ('object' !== eI(e) || null === e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || 'default');
                      if ('object' !== eI(n)) return n;
                      throw TypeError(
                        '@@toPrimitive must return a primitive value.'
                      );
                    }
                    return ('string' === t ? String : Number)(e);
                  })(t, 'string')),
                  (t = 'symbol' === eI(n) ? n : String(n)) in e)
                    ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (e[t] = r);
                })(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : eD(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function ek(e) {
        return (ek =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      var eC = ['props', 'refresh', 'store'],
        eN = ['inputElement', 'formElement', 'panelElement'],
        e_ = ['inputElement'],
        ex = ['inputElement', 'maxLength'],
        eT = ['sourceIndex'],
        eR = ['sourceIndex'],
        eq = ['item', 'source', 'sourceIndex'];
      function eL(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function eM(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? eL(Object(r), !0).forEach(function (t) {
                !(function (e, t, r) {
                  var n;
                  ((n = (function (e, t) {
                    if ('object' !== ek(e) || null === e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || 'default');
                      if ('object' !== ek(n)) return n;
                      throw TypeError(
                        '@@toPrimitive must return a primitive value.'
                      );
                    }
                    return ('string' === t ? String : Number)(e);
                  })(t, 'string')),
                  (t = 'symbol' === ek(n) ? n : String(n)) in e)
                    ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (e[t] = r);
                })(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : eL(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function eH(e, t) {
        if (null == e) return {};
        var r,
          n,
          o = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              o = {},
              i = Object.keys(e);
            for (n = 0; n < i.length; n++)
              (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (n = 0; n < i.length; n++)
            (r = i[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (o[r] = e[r]));
        }
        return o;
      }
      function eF(e) {
        return (eF =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function eU(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function eB(e, t, r) {
        var n;
        return (
          ((n = (function (e, t) {
            if ('object' !== eF(e) || null === e) return e;
            var r = e[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(e, t || 'default');
              if ('object' !== eF(n)) return n;
              throw TypeError('@@toPrimitive must return a primitive value.');
            }
            return ('string' === t ? String : Number)(e);
          })(t, 'string')),
          (t = 'symbol' === eF(n) ? n : String(n)) in e)
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function eV(e) {
        var t,
          r = e.state;
        return !1 === r.isOpen || null === r.activeItemId
          ? null
          : (null === (t = z(r)) || void 0 === t ? void 0 : t.itemInputValue) ||
              null;
      }
      function eK(e) {
        return (eK =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function eJ(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function e$(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? eJ(Object(r), !0).forEach(function (t) {
                !(function (e, t, r) {
                  var n;
                  ((n = (function (e, t) {
                    if ('object' !== eK(e) || null === e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || 'default');
                      if ('object' !== eK(n)) return n;
                      throw TypeError(
                        '@@toPrimitive must return a primitive value.'
                      );
                    }
                    return ('string' === t ? String : Number)(e);
                  })(t, 'string')),
                  (t = 'symbol' === eK(n) ? n : String(n)) in e)
                    ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (e[t] = r);
                })(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : eJ(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var ez = function (e, t) {
        switch (t.type) {
          case 'setActiveItemId':
          case 'mousemove':
            return e$(e$({}, e), {}, {activeItemId: t.payload});
          case 'setQuery':
            return e$(e$({}, e), {}, {query: t.payload, completion: null});
          case 'setCollections':
            return e$(e$({}, e), {}, {collections: t.payload});
          case 'setIsOpen':
            return e$(e$({}, e), {}, {isOpen: t.payload});
          case 'setStatus':
            return e$(e$({}, e), {}, {status: t.payload});
          case 'setContext':
            return e$(
              e$({}, e),
              {},
              {context: e$(e$({}, e.context), t.payload)}
            );
          case 'ArrowDown':
            var r = e$(
              e$({}, e),
              {},
              {
                activeItemId: t.payload.hasOwnProperty('nextActiveItemId')
                  ? t.payload.nextActiveItemId
                  : V(1, e.activeItemId, b(e), t.props.defaultActiveItemId),
              }
            );
            return e$(e$({}, r), {}, {completion: eV({state: r})});
          case 'ArrowUp':
            var n = e$(
              e$({}, e),
              {},
              {
                activeItemId: V(
                  -1,
                  e.activeItemId,
                  b(e),
                  t.props.defaultActiveItemId
                ),
              }
            );
            return e$(e$({}, n), {}, {completion: eV({state: n})});
          case 'Escape':
            return e.isOpen
              ? e$(
                  e$({}, e),
                  {},
                  {activeItemId: null, isOpen: !1, completion: null}
                )
              : e$(
                  e$({}, e),
                  {},
                  {
                    activeItemId: null,
                    query: '',
                    status: 'idle',
                    collections: [],
                  }
                );
          case 'submit':
            return e$(
              e$({}, e),
              {},
              {activeItemId: null, isOpen: !1, status: 'idle'}
            );
          case 'reset':
            return e$(
              e$({}, e),
              {},
              {
                activeItemId:
                  !0 === t.props.openOnFocus
                    ? t.props.defaultActiveItemId
                    : null,
                status: 'idle',
                query: '',
              }
            );
          case 'focus':
            return e$(
              e$({}, e),
              {},
              {
                activeItemId: t.props.defaultActiveItemId,
                isOpen:
                  (t.props.openOnFocus || !!e.query) &&
                  t.props.shouldPanelOpen({state: e}),
              }
            );
          case 'blur':
            return t.props.debug
              ? e
              : e$(e$({}, e), {}, {isOpen: !1, activeItemId: null});
          case 'mouseleave':
            return e$(
              e$({}, e),
              {},
              {activeItemId: t.props.defaultActiveItemId}
            );
          default:
            return JSON.stringify(t.type), e;
        }
      };
      function eW(e) {
        return (eW =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function eQ(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function eZ(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? eQ(Object(r), !0).forEach(function (t) {
                !(function (e, t, r) {
                  var n;
                  ((n = (function (e, t) {
                    if ('object' !== eW(e) || null === e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || 'default');
                      if ('object' !== eW(n)) return n;
                      throw TypeError(
                        '@@toPrimitive must return a primitive value.'
                      );
                    }
                    return ('string' === t ? String : Number)(e);
                  })(t, 'string')),
                  (t = 'symbol' === eW(n) ? n : String(n)) in e)
                    ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (e[t] = r);
                })(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : eQ(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function eG(e) {
        var t = e.translations,
          r = (void 0 === t ? {} : t).searchByText;
        return n.createElement(
          'a',
          {
            href: 'https://www.algolia.com/ref/docsearch/?utm_source='.concat(
              window.location.hostname,
              '&utm_medium=referral&utm_content=powered_by&utm_campaign=docsearch'
            ),
            target: '_blank',
            rel: 'noopener noreferrer',
          },
          n.createElement(
            'span',
            {className: 'DocSearch-Label'},
            void 0 === r ? 'Search by' : r
          ),
          n.createElement(
            'svg',
            {
              width: '77',
              height: '19',
              'aria-label': 'Algolia',
              role: 'img',
              id: 'Layer_1',
              xmlns: 'http://www.w3.org/2000/svg',
              viewBox: '0 0 2196.2 500',
            },
            n.createElement(
              'defs',
              null,
              n.createElement(
                'style',
                null,
                '.cls-1,.cls-2{fill:#003dff;}.cls-2{fill-rule:evenodd;}'
              )
            ),
            n.createElement('path', {
              className: 'cls-2',
              d: 'M1070.38,275.3V5.91c0-3.63-3.24-6.39-6.82-5.83l-50.46,7.94c-2.87,.45-4.99,2.93-4.99,5.84l.17,273.22c0,12.92,0,92.7,95.97,95.49,3.33,.1,6.09-2.58,6.09-5.91v-40.78c0-2.96-2.19-5.51-5.12-5.84-34.85-4.01-34.85-47.57-34.85-54.72Z',
            }),
            n.createElement('rect', {
              className: 'cls-1',
              x: '1845.88',
              y: '104.73',
              width: '62.58',
              height: '277.9',
              rx: '5.9',
              ry: '5.9',
            }),
            n.createElement('path', {
              className: 'cls-2',
              d: 'M1851.78,71.38h50.77c3.26,0,5.9-2.64,5.9-5.9V5.9c0-3.62-3.24-6.39-6.82-5.83l-50.77,7.95c-2.87,.45-4.99,2.92-4.99,5.83v51.62c0,3.26,2.64,5.9,5.9,5.9Z',
            }),
            n.createElement('path', {
              className: 'cls-2',
              d: 'M1764.03,275.3V5.91c0-3.63-3.24-6.39-6.82-5.83l-50.46,7.94c-2.87,.45-4.99,2.93-4.99,5.84l.17,273.22c0,12.92,0,92.7,95.97,95.49,3.33,.1,6.09-2.58,6.09-5.91v-40.78c0-2.96-2.19-5.51-5.12-5.84-34.85-4.01-34.85-47.57-34.85-54.72Z',
            }),
            n.createElement('path', {
              className: 'cls-2',
              d: 'M1631.95,142.72c-11.14-12.25-24.83-21.65-40.78-28.31-15.92-6.53-33.26-9.85-52.07-9.85-18.78,0-36.15,3.17-51.92,9.85-15.59,6.66-29.29,16.05-40.76,28.31-11.47,12.23-20.38,26.87-26.76,44.03-6.38,17.17-9.24,37.37-9.24,58.36,0,20.99,3.19,36.87,9.55,54.21,6.38,17.32,15.14,32.11,26.45,44.36,11.29,12.23,24.83,21.62,40.6,28.46,15.77,6.83,40.12,10.33,52.4,10.48,12.25,0,36.78-3.82,52.7-10.48,15.92-6.68,29.46-16.23,40.78-28.46,11.29-12.25,20.05-27.04,26.25-44.36,6.22-17.34,9.24-33.22,9.24-54.21,0-20.99-3.34-41.19-10.03-58.36-6.38-17.17-15.14-31.8-26.43-44.03Zm-44.43,163.75c-11.47,15.75-27.56,23.7-48.09,23.7-20.55,0-36.63-7.8-48.1-23.7-11.47-15.75-17.21-34.01-17.21-61.2,0-26.89,5.59-49.14,17.06-64.87,11.45-15.75,27.54-23.52,48.07-23.52,20.55,0,36.63,7.78,48.09,23.52,11.47,15.57,17.36,37.98,17.36,64.87,0,27.19-5.72,45.3-17.19,61.2Z',
            }),
            n.createElement('path', {
              className: 'cls-2',
              d: 'M894.42,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-14.52,22.58-22.99,49.63-22.99,78.73,0,44.89,20.13,84.92,51.59,111.1,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47,1.23,0,2.46-.03,3.68-.09,.36-.02,.71-.05,1.07-.07,.87-.05,1.75-.11,2.62-.2,.34-.03,.68-.08,1.02-.12,.91-.1,1.82-.21,2.73-.34,.21-.03,.42-.07,.63-.1,32.89-5.07,61.56-30.82,70.9-62.81v57.83c0,3.26,2.64,5.9,5.9,5.9h50.42c3.26,0,5.9-2.64,5.9-5.9V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,206.92c-12.2,10.16-27.97,13.98-44.84,15.12-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-42.24,0-77.12-35.89-77.12-79.37,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33v142.83Z',
            }),
            n.createElement('path', {
              className: 'cls-2',
              d: 'M2133.97,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-14.52,22.58-22.99,49.63-22.99,78.73,0,44.89,20.13,84.92,51.59,111.1,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47,1.23,0,2.46-.03,3.68-.09,.36-.02,.71-.05,1.07-.07,.87-.05,1.75-.11,2.62-.2,.34-.03,.68-.08,1.02-.12,.91-.1,1.82-.21,2.73-.34,.21-.03,.42-.07,.63-.1,32.89-5.07,61.56-30.82,70.9-62.81v57.83c0,3.26,2.64,5.9,5.9,5.9h50.42c3.26,0,5.9-2.64,5.9-5.9V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,206.92c-12.2,10.16-27.97,13.98-44.84,15.12-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-42.24,0-77.12-35.89-77.12-79.37,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33v142.83Z',
            }),
            n.createElement('path', {
              className: 'cls-2',
              d: 'M1314.05,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-11.79,18.34-19.6,39.64-22.11,62.59-.58,5.3-.88,10.68-.88,16.14s.31,11.15,.93,16.59c4.28,38.09,23.14,71.61,50.66,94.52,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47h0c17.99,0,34.61-5.93,48.16-15.97,16.29-11.58,28.88-28.54,34.48-47.75v50.26h-.11v11.08c0,21.84-5.71,38.27-17.34,49.36-11.61,11.08-31.04,16.63-58.25,16.63-11.12,0-28.79-.59-46.6-2.41-2.83-.29-5.46,1.5-6.27,4.22l-12.78,43.11c-1.02,3.46,1.27,7.02,4.83,7.53,21.52,3.08,42.52,4.68,54.65,4.68,48.91,0,85.16-10.75,108.89-32.21,21.48-19.41,33.15-48.89,35.2-88.52V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,64.1s.65,139.13,0,143.36c-12.08,9.77-27.11,13.59-43.49,14.7-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-1.32,0-2.63-.03-3.94-.1-40.41-2.11-74.52-37.26-74.52-79.38,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33Z',
            }),
            n.createElement('path', {
              className: 'cls-1',
              d: 'M249.83,0C113.3,0,2,110.09,.03,246.16c-2,138.19,110.12,252.7,248.33,253.5,42.68,.25,83.79-10.19,120.3-30.03,3.56-1.93,4.11-6.83,1.08-9.51l-23.38-20.72c-4.75-4.21-11.51-5.4-17.36-2.92-25.48,10.84-53.17,16.38-81.71,16.03-111.68-1.37-201.91-94.29-200.13-205.96,1.76-110.26,92-199.41,202.67-199.41h202.69V407.41l-115-102.18c-3.72-3.31-9.42-2.66-12.42,1.31-18.46,24.44-48.53,39.64-81.93,37.34-46.33-3.2-83.87-40.5-87.34-86.81-4.15-55.24,39.63-101.52,94-101.52,49.18,0,89.68,37.85,93.91,85.95,.38,4.28,2.31,8.27,5.52,11.12l29.95,26.55c3.4,3.01,8.79,1.17,9.63-3.3,2.16-11.55,2.92-23.58,2.07-35.92-4.82-70.34-61.8-126.93-132.17-131.26-80.68-4.97-148.13,58.14-150.27,137.25-2.09,77.1,61.08,143.56,138.19,145.26,32.19,.71,62.03-9.41,86.14-26.95l150.26,133.2c6.44,5.71,16.61,1.14,16.61-7.47V9.48C499.66,4.25,495.42,0,490.18,0H249.83Z',
            })
          )
        );
      }
      function eX(e) {
        return n.createElement(
          'svg',
          {width: '15', height: '15', 'aria-label': e.ariaLabel, role: 'img'},
          n.createElement(
            'g',
            {
              fill: 'none',
              stroke: 'currentColor',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              strokeWidth: '1.2',
            },
            e.children
          )
        );
      }
      function eY(e) {
        var t = e.translations,
          r = void 0 === t ? {} : t,
          o = r.selectText,
          i = r.selectKeyAriaLabel,
          a = r.navigateText,
          c = r.navigateUpKeyAriaLabel,
          l = r.navigateDownKeyAriaLabel,
          u = r.closeText,
          s = r.closeKeyAriaLabel,
          f = r.searchByText;
        return n.createElement(
          n.Fragment,
          null,
          n.createElement(
            'div',
            {className: 'DocSearch-Logo'},
            n.createElement(eG, {
              translations: {searchByText: void 0 === f ? 'Search by' : f},
            })
          ),
          n.createElement(
            'ul',
            {className: 'DocSearch-Commands'},
            n.createElement(
              'li',
              null,
              n.createElement(
                'kbd',
                {className: 'DocSearch-Commands-Key'},
                n.createElement(
                  eX,
                  {ariaLabel: void 0 === i ? 'Enter key' : i},
                  n.createElement('path', {
                    d: 'M12 3.53088v3c0 1-1 2-2 2H4M7 11.53088l-3-3 3-3',
                  })
                )
              ),
              n.createElement(
                'span',
                {className: 'DocSearch-Label'},
                void 0 === o ? 'to select' : o
              )
            ),
            n.createElement(
              'li',
              null,
              n.createElement(
                'kbd',
                {className: 'DocSearch-Commands-Key'},
                n.createElement(
                  eX,
                  {ariaLabel: void 0 === l ? 'Arrow down' : l},
                  n.createElement('path', {d: 'M7.5 3.5v8M10.5 8.5l-3 3-3-3'})
                )
              ),
              n.createElement(
                'kbd',
                {className: 'DocSearch-Commands-Key'},
                n.createElement(
                  eX,
                  {ariaLabel: void 0 === c ? 'Arrow up' : c},
                  n.createElement('path', {d: 'M7.5 11.5v-8M10.5 6.5l-3-3-3 3'})
                )
              ),
              n.createElement(
                'span',
                {className: 'DocSearch-Label'},
                void 0 === a ? 'to navigate' : a
              )
            ),
            n.createElement(
              'li',
              null,
              n.createElement(
                'kbd',
                {className: 'DocSearch-Commands-Key'},
                n.createElement(
                  eX,
                  {ariaLabel: void 0 === s ? 'Escape key' : s},
                  n.createElement('path', {
                    d: 'M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956',
                  })
                )
              ),
              n.createElement(
                'span',
                {className: 'DocSearch-Label'},
                void 0 === u ? 'to close' : u
              )
            )
          )
        );
      }
      function e0(e) {
        var t = e.hit,
          r = e.children;
        return n.createElement('a', {href: t.url}, r);
      }
      function e1() {
        return n.createElement(
          'svg',
          {viewBox: '0 0 38 38', stroke: 'currentColor', strokeOpacity: '.5'},
          n.createElement(
            'g',
            {fill: 'none', fillRule: 'evenodd'},
            n.createElement(
              'g',
              {transform: 'translate(1 1)', strokeWidth: '2'},
              n.createElement('circle', {
                strokeOpacity: '.3',
                cx: '18',
                cy: '18',
                r: '18',
              }),
              n.createElement(
                'path',
                {d: 'M36 18c0-9.94-8.06-18-18-18'},
                n.createElement('animateTransform', {
                  attributeName: 'transform',
                  type: 'rotate',
                  from: '0 18 18',
                  to: '360 18 18',
                  dur: '1s',
                  repeatCount: 'indefinite',
                })
              )
            )
          )
        );
      }
      function e2() {
        return n.createElement(
          'svg',
          {width: '20', height: '20', viewBox: '0 0 20 20'},
          n.createElement(
            'g',
            {
              stroke: 'currentColor',
              fill: 'none',
              fillRule: 'evenodd',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
            },
            n.createElement('path', {
              d: 'M3.18 6.6a8.23 8.23 0 1112.93 9.94h0a8.23 8.23 0 01-11.63 0',
            }),
            n.createElement('path', {
              d: 'M6.44 7.25H2.55V3.36M10.45 6v5.6M10.45 11.6L13 13',
            })
          )
        );
      }
      function e3() {
        return n.createElement(
          'svg',
          {width: '20', height: '20', viewBox: '0 0 20 20'},
          n.createElement('path', {
            d: 'M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z',
            stroke: 'currentColor',
            fill: 'none',
            fillRule: 'evenodd',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          })
        );
      }
      function e4() {
        return n.createElement(
          'svg',
          {
            className: 'DocSearch-Hit-Select-Icon',
            width: '20',
            height: '20',
            viewBox: '0 0 20 20',
          },
          n.createElement(
            'g',
            {
              stroke: 'currentColor',
              fill: 'none',
              fillRule: 'evenodd',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
            },
            n.createElement('path', {d: 'M18 3v4c0 2-2 4-4 4H2'}),
            n.createElement('path', {d: 'M8 17l-6-6 6-6'})
          )
        );
      }
      var e5 = function () {
        return n.createElement(
          'svg',
          {width: '20', height: '20', viewBox: '0 0 20 20'},
          n.createElement('path', {
            d: 'M17 6v12c0 .52-.2 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4',
            stroke: 'currentColor',
            fill: 'none',
            fillRule: 'evenodd',
            strokeLinejoin: 'round',
          })
        );
      };
      function e9(e) {
        switch (e.type) {
          case 'lvl1':
            return n.createElement(e5, null);
          case 'content':
            return n.createElement(e8, null);
          default:
            return n.createElement(e6, null);
        }
      }
      function e6() {
        return n.createElement(
          'svg',
          {width: '20', height: '20', viewBox: '0 0 20 20'},
          n.createElement('path', {
            d: 'M13 13h4-4V8H7v5h6v4-4H7V8H3h4V3v5h6V3v5h4-4v5zm-6 0v4-4H3h4z',
            stroke: 'currentColor',
            fill: 'none',
            fillRule: 'evenodd',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          })
        );
      }
      function e8() {
        return n.createElement(
          'svg',
          {width: '20', height: '20', viewBox: '0 0 20 20'},
          n.createElement('path', {
            d: 'M17 5H3h14zm0 5H3h14zm0 5H3h14z',
            stroke: 'currentColor',
            fill: 'none',
            fillRule: 'evenodd',
            strokeLinejoin: 'round',
          })
        );
      }
      function e7() {
        return n.createElement(
          'svg',
          {width: '20', height: '20', viewBox: '0 0 20 20'},
          n.createElement('path', {
            d: 'M10 14.2L5 17l1-5.6-4-4 5.5-.7 2.5-5 2.5 5 5.6.8-4 4 .9 5.5z',
            stroke: 'currentColor',
            fill: 'none',
            fillRule: 'evenodd',
            strokeLinejoin: 'round',
          })
        );
      }
      function te() {
        return n.createElement(
          'svg',
          {
            width: '40',
            height: '40',
            viewBox: '0 0 20 20',
            fill: 'none',
            fillRule: 'evenodd',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          },
          n.createElement('path', {
            d: 'M19 4.8a16 16 0 00-2-1.2m-3.3-1.2A16 16 0 001.1 4.7M16.7 8a12 12 0 00-2.8-1.4M10 6a12 12 0 00-6.7 2M12.3 14.7a4 4 0 00-4.5 0M14.5 11.4A8 8 0 0010 10M3 16L18 2M10 18h0',
          })
        );
      }
      function tt() {
        return n.createElement(
          'svg',
          {
            width: '40',
            height: '40',
            viewBox: '0 0 20 20',
            fill: 'none',
            fillRule: 'evenodd',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
          },
          n.createElement('path', {
            d: 'M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2',
          })
        );
      }
      function tr(e) {
        var t = e.translations,
          r = void 0 === t ? {} : t,
          o = r.titleText,
          i = r.helpText;
        return n.createElement(
          'div',
          {className: 'DocSearch-ErrorScreen'},
          n.createElement(
            'div',
            {className: 'DocSearch-Screen-Icon'},
            n.createElement(te, null)
          ),
          n.createElement(
            'p',
            {className: 'DocSearch-Title'},
            void 0 === o ? 'Unable to fetch results' : o
          ),
          n.createElement(
            'p',
            {className: 'DocSearch-Help'},
            void 0 === i
              ? 'You might want to check your network connection.'
              : i
          )
        );
      }
      var tn = ['translations'];
      function to(e) {
        var t = e.translations,
          r = void 0 === t ? {} : t,
          o = c(e, tn),
          i = r.noResultsText,
          a = r.suggestedQueryText,
          l = r.reportMissingResultsText,
          f = r.reportMissingResultsLinkText,
          m = o.state.context.searchSuggestions;
        return n.createElement(
          'div',
          {className: 'DocSearch-NoResults'},
          n.createElement(
            'div',
            {className: 'DocSearch-Screen-Icon'},
            n.createElement(tt, null)
          ),
          n.createElement(
            'p',
            {className: 'DocSearch-Title'},
            void 0 === i ? 'No results for' : i,
            ' "',
            n.createElement('strong', null, o.state.query),
            '"'
          ),
          m &&
            m.length > 0 &&
            n.createElement(
              'div',
              {className: 'DocSearch-NoResults-Prefill-List'},
              n.createElement(
                'p',
                {className: 'DocSearch-Help'},
                void 0 === a ? 'Try searching for' : a,
                ':'
              ),
              n.createElement(
                'ul',
                null,
                m.slice(0, 3).reduce(function (e, t) {
                  return [].concat(
                    (function (e) {
                      if (Array.isArray(e)) return s(e);
                    })(e) ||
                      (function (e) {
                        if (
                          ('undefined' != typeof Symbol &&
                            null != e[Symbol.iterator]) ||
                          null != e['@@iterator']
                        )
                          return Array.from(e);
                      })(e) ||
                      u(e) ||
                      (function () {
                        throw TypeError(
                          'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                        );
                      })(),
                    [
                      n.createElement(
                        'li',
                        {key: t},
                        n.createElement(
                          'button',
                          {
                            className: 'DocSearch-Prefill',
                            key: t,
                            type: 'button',
                            onClick: function () {
                              o.setQuery(t.toLowerCase() + ' '),
                                o.refresh(),
                                o.inputRef.current.focus();
                            },
                          },
                          t
                        )
                      ),
                    ]
                  );
                }, [])
              )
            ),
          o.getMissingResultsUrl &&
            n.createElement(
              'p',
              {className: 'DocSearch-Help'},
              ''.concat(
                void 0 === l ? 'Believe this query should return results?' : l,
                ' '
              ),
              n.createElement(
                'a',
                {
                  href: o.getMissingResultsUrl({query: o.state.query}),
                  target: '_blank',
                  rel: 'noopener noreferrer',
                },
                void 0 === f ? 'Let us know.' : f
              )
            )
        );
      }
      var ti = ['hit', 'attribute', 'tagName'];
      function ta(e, t) {
        return t.split('.').reduce(function (e, t) {
          return null != e && e[t] ? e[t] : null;
        }, e);
      }
      function tc(e) {
        var t = e.hit,
          r = e.attribute,
          o = e.tagName,
          a = c(e, ti);
        return (0, n.createElement)(
          void 0 === o ? 'span' : o,
          i(
            i({}, a),
            {},
            {
              dangerouslySetInnerHTML: {
                __html:
                  ta(t, '_snippetResult.'.concat(r, '.value')) || ta(t, r),
              },
            }
          )
        );
      }
      function tl(e) {
        return e.collection && 0 !== e.collection.items.length
          ? n.createElement(
              'section',
              {className: 'DocSearch-Hits'},
              n.createElement(
                'div',
                {className: 'DocSearch-Hit-source'},
                e.title
              ),
              n.createElement(
                'ul',
                e.getListProps(),
                e.collection.items.map(function (t, r) {
                  return n.createElement(
                    tu,
                    a(
                      {key: [e.title, t.objectID].join(':'), item: t, index: r},
                      e
                    )
                  );
                })
              )
            )
          : null;
      }
      function tu(e) {
        var t = e.item,
          r = e.index,
          o = e.renderIcon,
          i = e.renderAction,
          c = e.getItemProps,
          u = e.onItemClick,
          s = e.collection,
          f = e.hitComponent,
          m = l(n.useState(!1), 2),
          p = m[0],
          d = m[1],
          v = l(n.useState(!1), 2),
          h = v[0],
          y = v[1],
          b = n.useRef(null);
        return n.createElement(
          'li',
          a(
            {
              className: [
                'DocSearch-Hit',
                t.__docsearch_parent && 'DocSearch-Hit--Child',
                p && 'DocSearch-Hit--deleting',
                h && 'DocSearch-Hit--favoriting',
              ]
                .filter(Boolean)
                .join(' '),
              onTransitionEnd: function () {
                b.current && b.current();
              },
            },
            c({
              item: t,
              source: s.source,
              onClick: function (e) {
                u(t, e);
              },
            })
          ),
          n.createElement(
            f,
            {hit: t},
            n.createElement(
              'div',
              {className: 'DocSearch-Hit-Container'},
              o({item: t, index: r}),
              t.hierarchy[t.type] &&
                'lvl1' === t.type &&
                n.createElement(
                  'div',
                  {className: 'DocSearch-Hit-content-wrapper'},
                  n.createElement(tc, {
                    className: 'DocSearch-Hit-title',
                    hit: t,
                    attribute: 'hierarchy.lvl1',
                  }),
                  t.content &&
                    n.createElement(tc, {
                      className: 'DocSearch-Hit-path',
                      hit: t,
                      attribute: 'content',
                    })
                ),
              t.hierarchy[t.type] &&
                ('lvl2' === t.type ||
                  'lvl3' === t.type ||
                  'lvl4' === t.type ||
                  'lvl5' === t.type ||
                  'lvl6' === t.type) &&
                n.createElement(
                  'div',
                  {className: 'DocSearch-Hit-content-wrapper'},
                  n.createElement(tc, {
                    className: 'DocSearch-Hit-title',
                    hit: t,
                    attribute: 'hierarchy.'.concat(t.type),
                  }),
                  n.createElement(tc, {
                    className: 'DocSearch-Hit-path',
                    hit: t,
                    attribute: 'hierarchy.lvl1',
                  })
                ),
              'content' === t.type &&
                n.createElement(
                  'div',
                  {className: 'DocSearch-Hit-content-wrapper'},
                  n.createElement(tc, {
                    className: 'DocSearch-Hit-title',
                    hit: t,
                    attribute: 'content',
                  }),
                  n.createElement(tc, {
                    className: 'DocSearch-Hit-path',
                    hit: t,
                    attribute: 'hierarchy.lvl1',
                  })
                ),
              i({
                item: t,
                runDeleteTransition: function (e) {
                  d(!0), (b.current = e);
                },
                runFavoriteTransition: function (e) {
                  y(!0), (b.current = e);
                },
              })
            )
          )
        );
      }
      function ts(e, t, r) {
        return e.reduce(function (e, n) {
          var o = t(n);
          return (
            e.hasOwnProperty(o) || (e[o] = []),
            e[o].length < (r || 5) && e[o].push(n),
            e
          );
        }, {});
      }
      function tf(e) {
        return e;
      }
      function tm(e) {
        return (
          1 === e.button || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey
        );
      }
      function tp() {}
      var td = /(<mark>|<\/mark>)/g,
        tv = RegExp(td.source);
      function th(e) {
        if (!e.__docsearch_parent && !e._highlightResult)
          return e.hierarchy.lvl0;
        var t,
          r,
          n = (
            (e.__docsearch_parent
              ? null === (t = e.__docsearch_parent) ||
                void 0 === t ||
                null === (t = t._highlightResult) ||
                void 0 === t ||
                null === (t = t.hierarchy) ||
                void 0 === t
                ? void 0
                : t.lvl0
              : null === (r = e._highlightResult) ||
                void 0 === r ||
                null === (r = r.hierarchy) ||
                void 0 === r
              ? void 0
              : r.lvl0) || {}
          ).value;
        return n && tv.test(n) ? n.replace(td, '') : n;
      }
      function ty(e) {
        return n.createElement(
          'div',
          {className: 'DocSearch-Dropdown-Container'},
          e.state.collections.map(function (t) {
            if (0 === t.items.length) return null;
            var r = th(t.items[0]);
            return n.createElement(
              tl,
              a({}, e, {
                key: t.source.sourceId,
                title: r,
                collection: t,
                renderIcon: function (e) {
                  var r,
                    o = e.item,
                    i = e.index;
                  return n.createElement(
                    n.Fragment,
                    null,
                    o.__docsearch_parent &&
                      n.createElement(
                        'svg',
                        {className: 'DocSearch-Hit-Tree', viewBox: '0 0 24 54'},
                        n.createElement(
                          'g',
                          {
                            stroke: 'currentColor',
                            fill: 'none',
                            fillRule: 'evenodd',
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                          },
                          o.__docsearch_parent !==
                            (null === (r = t.items[i + 1]) || void 0 === r
                              ? void 0
                              : r.__docsearch_parent)
                            ? n.createElement('path', {d: 'M8 6v21M20 27H8.3'})
                            : n.createElement('path', {d: 'M8 6v42M20 27H8.3'})
                        )
                      ),
                    n.createElement(
                      'div',
                      {className: 'DocSearch-Hit-icon'},
                      n.createElement(e9, {type: o.type})
                    )
                  );
                },
                renderAction: function () {
                  return n.createElement(
                    'div',
                    {className: 'DocSearch-Hit-action'},
                    n.createElement(e4, null)
                  );
                },
              })
            );
          }),
          e.resultsFooterComponent &&
            n.createElement(
              'section',
              {className: 'DocSearch-HitsFooter'},
              n.createElement(e.resultsFooterComponent, {state: e.state})
            )
        );
      }
      var tb = ['translations'];
      function tg(e) {
        var t = e.translations,
          r = void 0 === t ? {} : t,
          o = c(e, tb),
          i = r.recentSearchesTitle,
          l = r.noRecentSearchesText,
          u = r.saveRecentSearchButtonTitle,
          s = void 0 === u ? 'Save this search' : u,
          f = r.removeRecentSearchButtonTitle,
          m = void 0 === f ? 'Remove this search from history' : f,
          p = r.favoriteSearchesTitle,
          d = r.removeFavoriteSearchButtonTitle,
          v = void 0 === d ? 'Remove this search from favorites' : d;
        return 'idle' === o.state.status && !1 === o.hasCollections
          ? o.disableUserPersonalization
            ? null
            : n.createElement(
                'div',
                {className: 'DocSearch-StartScreen'},
                n.createElement(
                  'p',
                  {className: 'DocSearch-Help'},
                  void 0 === l ? 'No recent searches' : l
                )
              )
          : !1 === o.hasCollections
          ? null
          : n.createElement(
              'div',
              {className: 'DocSearch-Dropdown-Container'},
              n.createElement(
                tl,
                a({}, o, {
                  title: void 0 === i ? 'Recent' : i,
                  collection: o.state.collections[0],
                  renderIcon: function () {
                    return n.createElement(
                      'div',
                      {className: 'DocSearch-Hit-icon'},
                      n.createElement(e2, null)
                    );
                  },
                  renderAction: function (e) {
                    var t = e.item,
                      r = e.runFavoriteTransition,
                      i = e.runDeleteTransition;
                    return n.createElement(
                      n.Fragment,
                      null,
                      n.createElement(
                        'div',
                        {className: 'DocSearch-Hit-action'},
                        n.createElement(
                          'button',
                          {
                            className: 'DocSearch-Hit-action-button',
                            title: s,
                            type: 'submit',
                            onClick: function (e) {
                              e.preventDefault(),
                                e.stopPropagation(),
                                r(function () {
                                  o.favoriteSearches.add(t),
                                    o.recentSearches.remove(t),
                                    o.refresh();
                                });
                            },
                          },
                          n.createElement(e7, null)
                        )
                      ),
                      n.createElement(
                        'div',
                        {className: 'DocSearch-Hit-action'},
                        n.createElement(
                          'button',
                          {
                            className: 'DocSearch-Hit-action-button',
                            title: m,
                            type: 'submit',
                            onClick: function (e) {
                              e.preventDefault(),
                                e.stopPropagation(),
                                i(function () {
                                  o.recentSearches.remove(t), o.refresh();
                                });
                            },
                          },
                          n.createElement(e3, null)
                        )
                      )
                    );
                  },
                })
              ),
              n.createElement(
                tl,
                a({}, o, {
                  title: void 0 === p ? 'Favorite' : p,
                  collection: o.state.collections[1],
                  renderIcon: function () {
                    return n.createElement(
                      'div',
                      {className: 'DocSearch-Hit-icon'},
                      n.createElement(e7, null)
                    );
                  },
                  renderAction: function (e) {
                    var t = e.item,
                      r = e.runDeleteTransition;
                    return n.createElement(
                      'div',
                      {className: 'DocSearch-Hit-action'},
                      n.createElement(
                        'button',
                        {
                          className: 'DocSearch-Hit-action-button',
                          title: v,
                          type: 'submit',
                          onClick: function (e) {
                            e.preventDefault(),
                              e.stopPropagation(),
                              r(function () {
                                o.favoriteSearches.remove(t), o.refresh();
                              });
                          },
                        },
                        n.createElement(e3, null)
                      )
                    );
                  },
                })
              )
            );
      }
      var tS = ['translations'],
        tO = n.memo(
          function (e) {
            var t = e.translations,
              r = void 0 === t ? {} : t,
              o = c(e, tS);
            if ('error' === o.state.status)
              return n.createElement(tr, {
                translations: null == r ? void 0 : r.errorScreen,
              });
            var i = o.state.collections.some(function (e) {
              return e.items.length > 0;
            });
            return o.state.query
              ? !1 === i
                ? n.createElement(
                    to,
                    a({}, o, {
                      translations: null == r ? void 0 : r.noResultsScreen,
                    })
                  )
                : n.createElement(ty, o)
              : n.createElement(
                  tg,
                  a({}, o, {
                    hasCollections: i,
                    translations: null == r ? void 0 : r.startScreen,
                  })
                );
          },
          function (e, t) {
            return 'loading' === t.state.status || 'stalled' === t.state.status;
          }
        ),
        tE = ['translations'];
      function tj(e) {
        var t = e.translations,
          r = void 0 === t ? {} : t,
          o = c(e, tE),
          i = r.resetButtonTitle,
          l = r.resetButtonAriaLabel,
          u = r.cancelButtonText,
          s = r.cancelButtonAriaLabel,
          f = r.searchInputLabel,
          p = o.getFormProps({inputElement: o.inputRef.current}).onReset;
        return (
          n.useEffect(
            function () {
              o.autoFocus && o.inputRef.current && o.inputRef.current.focus();
            },
            [o.autoFocus, o.inputRef]
          ),
          n.useEffect(
            function () {
              o.isFromSelection &&
                o.inputRef.current &&
                o.inputRef.current.select();
            },
            [o.isFromSelection, o.inputRef]
          ),
          n.createElement(
            n.Fragment,
            null,
            n.createElement(
              'form',
              {
                className: 'DocSearch-Form',
                onSubmit: function (e) {
                  e.preventDefault();
                },
                onReset: p,
              },
              n.createElement(
                'label',
                a({className: 'DocSearch-MagnifierLabel'}, o.getLabelProps()),
                n.createElement(m, null),
                n.createElement(
                  'span',
                  {className: 'DocSearch-VisuallyHiddenForAccessibility'},
                  void 0 === f ? 'Search' : f
                )
              ),
              n.createElement(
                'div',
                {className: 'DocSearch-LoadingIndicator'},
                n.createElement(e1, null)
              ),
              n.createElement(
                'input',
                a(
                  {className: 'DocSearch-Input', ref: o.inputRef},
                  o.getInputProps({
                    inputElement: o.inputRef.current,
                    autoFocus: o.autoFocus,
                    maxLength: 64,
                  })
                )
              ),
              n.createElement(
                'button',
                {
                  type: 'reset',
                  title: void 0 === i ? 'Clear the query' : i,
                  className: 'DocSearch-Reset',
                  'aria-label': void 0 === l ? 'Clear the query' : l,
                  hidden: !o.state.query,
                },
                n.createElement(e3, null)
              )
            ),
            n.createElement(
              'button',
              {
                className: 'DocSearch-Cancel',
                type: 'reset',
                'aria-label': void 0 === s ? 'Cancel' : s,
                onClick: o.onClose,
              },
              void 0 === u ? 'Cancel' : u
            )
          )
        );
      }
      var tw = ['_highlightResult', '_snippetResult'];
      function tI(e) {
        var t = e.key,
          r = e.limit,
          n = void 0 === r ? 5 : r,
          o =
            !1 ===
            (function () {
              var e = '__TEST_KEY__';
              try {
                return (
                  localStorage.setItem(e, ''), localStorage.removeItem(e), !0
                );
              } catch (e) {
                return !1;
              }
            })()
              ? {
                  setItem: function () {},
                  getItem: function () {
                    return [];
                  },
                }
              : {
                  setItem: function (e) {
                    return window.localStorage.setItem(t, JSON.stringify(e));
                  },
                  getItem: function () {
                    var e = window.localStorage.getItem(t);
                    return e ? JSON.parse(e) : [];
                  },
                },
          i = o.getItem().slice(0, n);
        return {
          add: function (e) {
            var t = (e._highlightResult, e._snippetResult, c(e, tw)),
              r = i.findIndex(function (e) {
                return e.objectID === t.objectID;
              });
            r > -1 && i.splice(r, 1),
              i.unshift(t),
              (i = i.slice(0, n)),
              o.setItem(i);
          },
          remove: function (e) {
            (i = i.filter(function (t) {
              return t.objectID !== e.objectID;
            })),
              o.setItem(i);
          },
          getAll: function () {
            return i;
          },
        };
      }
      function tP(e = {serializable: !0}) {
        let t = {};
        return {
          get(r, n, o = {miss: () => Promise.resolve()}) {
            let i = JSON.stringify(r);
            if (i in t)
              return Promise.resolve(e.serializable ? JSON.parse(t[i]) : t[i]);
            let a = n(),
              c = (o && o.miss) || (() => Promise.resolve());
            return a.then((e) => c(e)).then(() => a);
          },
          set: (r, n) => (
            (t[JSON.stringify(r)] = e.serializable ? JSON.stringify(n) : n),
            Promise.resolve(n)
          ),
          delete: (e) => (delete t[JSON.stringify(e)], Promise.resolve()),
          clear: () => ((t = {}), Promise.resolve()),
        };
      }
      function tD(e, t) {
        return (
          t &&
            Object.keys(t).forEach((r) => {
              e[r] = t[r](e);
            }),
          e
        );
      }
      function tA(e, ...t) {
        let r = 0;
        return e.replace(/%s/g, () => encodeURIComponent(t[r++]));
      }
      let tk = {WithinQueryParameters: 0, WithinHeaders: 1};
      function tC(e, t) {
        let r = e || {},
          n = r.data || {};
        return (
          Object.keys(r).forEach((e) => {
            -1 ===
              [
                'timeout',
                'headers',
                'queryParameters',
                'data',
                'cacheable',
              ].indexOf(e) && (n[e] = r[e]);
          }),
          {
            data: Object.entries(n).length > 0 ? n : void 0,
            timeout: r.timeout || t,
            headers: r.headers || {},
            queryParameters: r.queryParameters || {},
            cacheable: r.cacheable,
          }
        );
      }
      let tN = {Read: 1, Write: 2, Any: 3};
      function t_(e, t = 1) {
        return {...e, status: t, lastUpdate: Date.now()};
      }
      function tx(e) {
        return 'string' == typeof e
          ? {protocol: 'https', url: e, accept: tN.Any}
          : {
              protocol: e.protocol || 'https',
              url: e.url,
              accept: e.accept || tN.Any,
            };
      }
      let tT = 'POST';
      function tR(e, t, r, n) {
        var o;
        let i = [],
          a = (function (e, t) {
            if ('GET' === e.method || (void 0 === e.data && void 0 === t.data))
              return;
            let r = Array.isArray(e.data) ? e.data : {...e.data, ...t.data};
            return JSON.stringify(r);
          })(r, n),
          c = (function (e, t) {
            let r = {...e.headers, ...t.headers},
              n = {};
            return (
              Object.keys(r).forEach((e) => {
                let t = r[e];
                n[e.toLowerCase()] = t;
              }),
              n
            );
          })(e, n),
          l = r.method,
          u = 'GET' !== r.method ? {} : {...r.data, ...n.data},
          s = {
            'x-algolia-agent': e.userAgent.value,
            ...e.queryParameters,
            ...u,
            ...n.queryParameters,
          },
          f = 0,
          m = (t, o) => {
            let u = t.pop();
            if (void 0 === u)
              throw {
                name: 'RetryError',
                message:
                  'Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.',
                transporterStackTrace: tL(i),
              };
            let p = {
                data: a,
                headers: c,
                method: l,
                url: (function (e, t, r) {
                  let n = tq(r),
                    o = `${e.protocol}://${e.url}/${
                      '/' === t.charAt(0) ? t.substr(1) : t
                    }`;
                  return n.length && (o += `?${n}`), o;
                })(u, r.path, s),
                connectTimeout: o(f, e.timeouts.connect),
                responseTimeout: o(f, n.timeout),
              },
              d = (e) => {
                let r = {request: p, response: e, host: u, triesLeft: t.length};
                return i.push(r), r;
              },
              v = {
                onSuccess: (e) =>
                  (function (e) {
                    try {
                      return JSON.parse(e.content);
                    } catch (t) {
                      throw {
                        name: 'DeserializationError',
                        message: t.message,
                        response: e,
                      };
                    }
                  })(e),
                onRetry(r) {
                  let n = d(r);
                  return (
                    r.isTimedOut && f++,
                    Promise.all([
                      e.logger.info('Retryable failure', tM(n)),
                      e.hostsCache.set(u, t_(u, r.isTimedOut ? 3 : 2)),
                    ]).then(() => m(t, o))
                  );
                },
                onFail(e) {
                  throw (
                    (d(e),
                    (function ({content: e, status: t}, r) {
                      let n = e;
                      try {
                        n = JSON.parse(e).message;
                      } catch (e) {}
                      return {
                        name: 'ApiError',
                        message: n,
                        status: t,
                        transporterStackTrace: r,
                      };
                    })(e, tL(i)))
                  );
                },
              };
            return e.requester.send(p).then((e) =>
              ((e) => {
                let t = e.status;
                return (
                  e.isTimedOut ||
                  (({isTimedOut: e, status: t}) => !e && 0 == ~~t)(e) ||
                  (2 != ~~(t / 100) && 4 != ~~(t / 100))
                );
              })(e)
                ? v.onRetry(e)
                : (({status: e}) => 2 == ~~(e / 100))(e)
                ? v.onSuccess(e)
                : v.onFail(e)
            );
          };
        return ((o = e.hostsCache),
        Promise.all(t.map((e) => o.get(e, () => Promise.resolve(t_(e))))).then(
          (e) => {
            let r = e.filter(
                (e) => 1 === e.status || Date.now() - e.lastUpdate > 12e4
              ),
              n = e.filter(
                (e) => 3 === e.status && Date.now() - e.lastUpdate <= 12e4
              ),
              o = [...r, ...n];
            return {
              getTimeout: (e, t) =>
                (0 === n.length && 0 === e ? 1 : n.length + 3 + e) * t,
              statelessHosts: o.length > 0 ? o.map((e) => tx(e)) : t,
            };
          }
        )).then((e) => m([...e.statelessHosts].reverse(), e.getTimeout));
      }
      function tq(e) {
        return Object.keys(e)
          .map((t) => {
            var r;
            return tA(
              '%s=%s',
              t,
              ((r = e[t]),
              '[object Object]' === Object.prototype.toString.call(r) ||
              '[object Array]' === Object.prototype.toString.call(r)
                ? JSON.stringify(e[t])
                : e[t])
            );
          })
          .join('&');
      }
      function tL(e) {
        return e.map((e) => tM(e));
      }
      function tM(e) {
        let t = e.request.headers['x-algolia-api-key']
          ? {'x-algolia-api-key': '*****'}
          : {};
        return {
          ...e,
          request: {...e.request, headers: {...e.request.headers, ...t}},
        };
      }
      let tH = (e) => {
          let t = e.appId,
            r = (function (e, t, r) {
              let n = {'x-algolia-api-key': r, 'x-algolia-application-id': t};
              return {
                headers: () => (e === tk.WithinHeaders ? n : {}),
                queryParameters: () =>
                  e === tk.WithinQueryParameters ? n : {},
              };
            })(
              void 0 !== e.authMode ? e.authMode : tk.WithinHeaders,
              t,
              e.apiKey
            ),
            n = (function (e) {
              let {
                  hostsCache: t,
                  logger: r,
                  requester: n,
                  requestsCache: o,
                  responsesCache: i,
                  timeouts: a,
                  userAgent: c,
                  hosts: l,
                  queryParameters: u,
                  headers: s,
                } = e,
                f = {
                  hostsCache: t,
                  logger: r,
                  requester: n,
                  requestsCache: o,
                  responsesCache: i,
                  timeouts: a,
                  userAgent: c,
                  headers: s,
                  queryParameters: u,
                  hosts: l.map((e) => tx(e)),
                  read(e, t) {
                    let r = tC(t, f.timeouts.read),
                      n = () =>
                        tR(
                          f,
                          f.hosts.filter((e) => 0 != (e.accept & tN.Read)),
                          e,
                          r
                        );
                    if (
                      !0 !==
                      (void 0 !== r.cacheable ? r.cacheable : e.cacheable)
                    )
                      return n();
                    let o = {
                      request: e,
                      mappedRequestOptions: r,
                      transporter: {
                        queryParameters: f.queryParameters,
                        headers: f.headers,
                      },
                    };
                    return f.responsesCache.get(
                      o,
                      () =>
                        f.requestsCache.get(o, () =>
                          f.requestsCache
                            .set(o, n())
                            .then(
                              (e) =>
                                Promise.all([f.requestsCache.delete(o), e]),
                              (e) =>
                                Promise.all([
                                  f.requestsCache.delete(o),
                                  Promise.reject(e),
                                ])
                            )
                            .then(([e, t]) => t)
                        ),
                      {miss: (e) => f.responsesCache.set(o, e)}
                    );
                  },
                  write: (e, t) =>
                    tR(
                      f,
                      f.hosts.filter((e) => 0 != (e.accept & tN.Write)),
                      e,
                      tC(t, f.timeouts.write)
                    ),
                };
              return f;
            })({
              hosts: [
                {url: `${t}-dsn.algolia.net`, accept: tN.Read},
                {url: `${t}.algolia.net`, accept: tN.Write},
              ].concat(
                (function (e) {
                  let t = e.length - 1;
                  for (; t > 0; t--) {
                    let r = Math.floor(Math.random() * (t + 1)),
                      n = e[t];
                    (e[t] = e[r]), (e[r] = n);
                  }
                  return e;
                })([
                  {url: `${t}-1.algolianet.com`},
                  {url: `${t}-2.algolianet.com`},
                  {url: `${t}-3.algolianet.com`},
                ])
              ),
              ...e,
              headers: {
                ...r.headers(),
                'content-type': 'application/x-www-form-urlencoded',
                ...e.headers,
              },
              queryParameters: {...r.queryParameters(), ...e.queryParameters},
            });
          return tD(
            {
              transporter: n,
              appId: t,
              addAlgoliaAgent(e, t) {
                n.userAgent.add({segment: e, version: t});
              },
              clearCache: () =>
                Promise.all([
                  n.requestsCache.clear(),
                  n.responsesCache.clear(),
                ]).then(() => {}),
            },
            e.methods
          );
        },
        tF = (e) => (t, r) =>
          'GET' === t.method
            ? e.transporter.read(t, r)
            : e.transporter.write(t, r),
        tU =
          (e) =>
          (t, r = {}) =>
            tD(
              {transporter: e.transporter, appId: e.appId, indexName: t},
              r.methods
            ),
        tB = (e) => (t, r) => {
          let n = t.map((e) => ({...e, params: tq(e.params || {})}));
          return e.transporter.read(
            {
              method: tT,
              path: '1/indexes/*/queries',
              data: {requests: n},
              cacheable: !0,
            },
            r
          );
        },
        tV = (e) => (t, r) =>
          Promise.all(
            t.map((t) => {
              let {facetName: n, facetQuery: o, ...i} = t.params;
              return tU(e)(t.indexName, {
                methods: {searchForFacetValues: t$},
              }).searchForFacetValues(n, o, {...r, ...i});
            })
          ),
        tK = (e) => (t, r, n) =>
          e.transporter.read(
            {
              method: tT,
              path: tA('1/answers/%s/prediction', e.indexName),
              data: {query: t, queryLanguages: r},
              cacheable: !0,
            },
            n
          ),
        tJ = (e) => (t, r) =>
          e.transporter.read(
            {
              method: tT,
              path: tA('1/indexes/%s/query', e.indexName),
              data: {query: t},
              cacheable: !0,
            },
            r
          ),
        t$ = (e) => (t, r, n) =>
          e.transporter.read(
            {
              method: tT,
              path: tA('1/indexes/%s/facets/%s/query', e.indexName, t),
              data: {facetQuery: r},
              cacheable: !0,
            },
            n
          );
      function tz(e, t, r) {
        let n = {
          appId: e,
          apiKey: t,
          timeouts: {connect: 1, read: 2, write: 30},
          requester: {
            send: (e) =>
              new Promise((t) => {
                let r;
                let n = new XMLHttpRequest();
                n.open(e.method, e.url, !0),
                  Object.keys(e.headers).forEach((t) =>
                    n.setRequestHeader(t, e.headers[t])
                  );
                let o = (e, r) =>
                    setTimeout(() => {
                      n.abort(), t({status: 0, content: r, isTimedOut: !0});
                    }, 1e3 * e),
                  i = o(e.connectTimeout, 'Connection timeout');
                (n.onreadystatechange = () => {
                  n.readyState > n.OPENED &&
                    void 0 === r &&
                    (clearTimeout(i),
                    (r = o(e.responseTimeout, 'Socket timeout')));
                }),
                  (n.onerror = () => {
                    0 === n.status &&
                      (clearTimeout(i),
                      clearTimeout(r),
                      t({
                        content: n.responseText || 'Network request failed',
                        status: n.status,
                        isTimedOut: !1,
                      }));
                  }),
                  (n.onload = () => {
                    clearTimeout(i),
                      clearTimeout(r),
                      t({
                        content: n.responseText,
                        status: n.status,
                        isTimedOut: !1,
                      });
                  }),
                  n.send(e.data);
              }),
          },
          logger: {
            debug: (e, t) => Promise.resolve(),
            info: (e, t) => Promise.resolve(),
            error: (e, t) => (console.error(e, t), Promise.resolve()),
          },
          responsesCache: tP(),
          requestsCache: tP({serializable: !1}),
          hostsCache: (function e(t) {
            let r = [...t.caches],
              n = r.shift();
            return void 0 === n
              ? {
                  get: (e, t, r = {miss: () => Promise.resolve()}) =>
                    t()
                      .then((e) => Promise.all([e, r.miss(e)]))
                      .then(([e]) => e),
                  set: (e, t) => Promise.resolve(t),
                  delete: (e) => Promise.resolve(),
                  clear: () => Promise.resolve(),
                }
              : {
                  get: (t, o, i = {miss: () => Promise.resolve()}) =>
                    n.get(t, o, i).catch(() => e({caches: r}).get(t, o, i)),
                  set: (t, o) =>
                    n.set(t, o).catch(() => e({caches: r}).set(t, o)),
                  delete: (t) =>
                    n.delete(t).catch(() => e({caches: r}).delete(t)),
                  clear: () => n.clear().catch(() => e({caches: r}).clear()),
                };
          })({
            caches: [
              (function (e) {
                let t;
                let r = `algoliasearch-client-js-${e.key}`,
                  n = () => (
                    void 0 === t && (t = e.localStorage || window.localStorage),
                    t
                  ),
                  o = () => JSON.parse(n().getItem(r) || '{}'),
                  i = (e) => {
                    n().setItem(r, JSON.stringify(e));
                  };
                return {
                  get: (t, r, n = {miss: () => Promise.resolve()}) =>
                    Promise.resolve()
                      .then(() => {
                        (() => {
                          let t = e.timeToLive ? 1e3 * e.timeToLive : null,
                            r = o(),
                            n = Object.fromEntries(
                              Object.entries(r).filter(
                                ([, e]) => void 0 !== e.timestamp
                              )
                            );
                          if ((i(n), !t)) return;
                          let a = Object.fromEntries(
                            Object.entries(n).filter(([, e]) => {
                              let r = new Date().getTime();
                              return !(e.timestamp + t < r);
                            })
                          );
                          i(a);
                        })();
                        let r = JSON.stringify(t);
                        return o()[r];
                      })
                      .then((e) =>
                        Promise.all([e ? e.value : r(), void 0 !== e])
                      )
                      .then(([e, t]) => Promise.all([e, t || n.miss(e)]))
                      .then(([e]) => e),
                  set: (e, t) =>
                    Promise.resolve().then(() => {
                      let i = o();
                      return (
                        (i[JSON.stringify(e)] = {
                          timestamp: new Date().getTime(),
                          value: t,
                        }),
                        n().setItem(r, JSON.stringify(i)),
                        t
                      );
                    }),
                  delete: (e) =>
                    Promise.resolve().then(() => {
                      let t = o();
                      delete t[JSON.stringify(e)],
                        n().setItem(r, JSON.stringify(t));
                    }),
                  clear: () =>
                    Promise.resolve().then(() => {
                      n().removeItem(r);
                    }),
                };
              })({key: `4.19.1-${e}`}),
              tP(),
            ],
          }),
          userAgent: (function (e) {
            let t = {
              value: `Algolia for JavaScript (${e})`,
              add(e) {
                let r = `; ${e.segment}${
                  void 0 !== e.version ? ` (${e.version})` : ''
                }`;
                return (
                  -1 === t.value.indexOf(r) && (t.value = `${t.value}${r}`), t
                );
              },
            };
            return t;
          })('4.19.1').add({segment: 'Browser', version: 'lite'}),
          authMode: tk.WithinQueryParameters,
        };
        return tH({
          ...n,
          ...r,
          methods: {
            search: tB,
            searchForFacetValues: tV,
            multipleQueries: tB,
            multipleSearchForFacetValues: tV,
            customRequest: tF,
            initIndex: (e) => (t) =>
              tU(e)(t, {
                methods: {
                  search: tJ,
                  searchForFacetValues: t$,
                  findAnswers: tK,
                },
              }),
          },
        });
      }
      tz.version = '4.19.1';
      var tW = ['footer', 'searchBox'];
      function tQ(e) {
        var t,
          r,
          o,
          u,
          s,
          f,
          m,
          p = e.appId,
          d = e.apiKey,
          w = e.indexName,
          P = e.placeholder,
          A = void 0 === P ? 'Search docs' : P,
          C = e.searchParameters,
          T = e.maxResultsPerGroup,
          q = e.onClose,
          L = void 0 === q ? tp : q,
          U = e.transformItems,
          B = void 0 === U ? tf : U,
          V = e.hitComponent,
          K = e.resultsFooterComponent,
          $ = e.navigator,
          G = e.initialScrollY,
          X = void 0 === G ? 0 : G,
          ee = e.transformSearchClient,
          er = e.disableUserPersonalization,
          eo = void 0 !== er && er,
          ei = e.initialQuery,
          ea = e.translations,
          ec = void 0 === ea ? {} : ea,
          el = e.getMissingResultsUrl,
          eu = e.insights,
          es = void 0 !== eu && eu,
          ef = ec.footer,
          em = ec.searchBox,
          ep = c(ec, tW),
          ed = l(
            n.useState({
              query: '',
              collections: [],
              completion: null,
              context: {},
              isOpen: !1,
              activeItemId: null,
              status: 'idle',
            }),
            2
          ),
          ev = ed[0],
          eh = ed[1],
          ey = n.useRef(null),
          eb = n.useRef(null),
          eg = n.useRef(null),
          eS = n.useRef(null),
          eO = n.useRef(null),
          eE = n.useRef(10),
          ej = n.useRef(
            'undefined' != typeof window
              ? window.getSelection().toString().slice(0, 64)
              : ''
          ).current,
          eI = n.useRef((void 0 === ei ? '' : ei) || ej).current,
          eD =
            ((t = void 0 === ee ? tf : ee),
            n.useMemo(
              function () {
                var e = tz(p, d);
                return (
                  e.addAlgoliaAgent('docsearch', '3.6.1'),
                  !1 ===
                    /docsearch.js \(.*\)/.test(e.transporter.userAgent.value) &&
                    e.addAlgoliaAgent('docsearch-react', '3.6.1'),
                  t(e)
                );
              },
              [p, d, t]
            )),
          ek = n.useRef(
            tI({key: '__DOCSEARCH_FAVORITE_SEARCHES__'.concat(w), limit: 10})
          ).current,
          eL = n.useRef(
            tI({
              key: '__DOCSEARCH_RECENT_SEARCHES__'.concat(w),
              limit: 0 === ek.getAll().length ? 7 : 4,
            })
          ).current,
          eF = n.useCallback(
            function (e) {
              if (!eo) {
                var t = 'content' === e.type ? e.__docsearch_parent : e;
                t &&
                  -1 ===
                    ek.getAll().findIndex(function (e) {
                      return e.objectID === t.objectID;
                    }) &&
                  eL.add(t);
              }
            },
            [ek, eL, eo]
          ),
          eV = n.useCallback(
            function (e) {
              if (ev.context.algoliaInsightsPlugin && e.__autocomplete_id) {
                var t = {
                  eventName: 'Item Selected',
                  index: e.__autocomplete_indexName,
                  items: [e],
                  positions: [e.__autocomplete_id],
                  queryID: e.__autocomplete_queryID,
                };
                ev.context.algoliaInsightsPlugin.insights.clickedObjectIDsAfterSearch(
                  t
                );
              }
            },
            [ev.context.algoliaInsightsPlugin]
          ),
          eK = n.useMemo(
            function () {
              return (function (e) {
                var t,
                  r,
                  n,
                  o,
                  i,
                  a,
                  c,
                  l,
                  u,
                  s,
                  f,
                  m,
                  p,
                  d,
                  w,
                  P,
                  A,
                  C,
                  T,
                  q,
                  L,
                  U = [],
                  B =
                    ((r = 'undefined' != typeof window ? window : {}),
                    (n = e.plugins || []),
                    en(
                      en(
                        {
                          debug: !1,
                          openOnFocus: !1,
                          placeholder: '',
                          autoFocus: !1,
                          defaultActiveItemId: null,
                          stallThreshold: 300,
                          insights: !1,
                          environment: r,
                          shouldPanelOpen: function (e) {
                            return b(e.state) > 0;
                          },
                          reshape: function (e) {
                            return e.sources;
                          },
                        },
                        e
                      ),
                      {},
                      {
                        id:
                          null !== (t = e.id) && void 0 !== t
                            ? t
                            : 'autocomplete-'.concat(y++),
                        plugins: n,
                        initialState: en(
                          {
                            activeItemId: null,
                            query: '',
                            completion: null,
                            collections: [],
                            isOpen: !1,
                            status: 'idle',
                            context: {},
                          },
                          e.initialState
                        ),
                        onStateChange: function (t) {
                          var r;
                          null === (r = e.onStateChange) ||
                            void 0 === r ||
                            r.call(e, t),
                            n.forEach(function (e) {
                              var r;
                              return null === (r = e.onStateChange) ||
                                void 0 === r
                                ? void 0
                                : r.call(e, t);
                            });
                        },
                        onSubmit: function (t) {
                          var r;
                          null === (r = e.onSubmit) ||
                            void 0 === r ||
                            r.call(e, t),
                            n.forEach(function (e) {
                              var r;
                              return null === (r = e.onSubmit) || void 0 === r
                                ? void 0
                                : r.call(e, t);
                            });
                        },
                        onReset: function (t) {
                          var r;
                          null === (r = e.onReset) ||
                            void 0 === r ||
                            r.call(e, t),
                            n.forEach(function (e) {
                              var r;
                              return null === (r = e.onReset) || void 0 === r
                                ? void 0
                                : r.call(e, t);
                            });
                        },
                        getSources: function (t) {
                          var r;
                          return Promise.all(
                            []
                              .concat(
                                (function (e) {
                                  if (Array.isArray(e)) return et(e);
                                })(
                                  (r = n.map(function (e) {
                                    return e.getSources;
                                  }))
                                ) ||
                                  (function (e) {
                                    if (
                                      ('undefined' != typeof Symbol &&
                                        null != e[Symbol.iterator]) ||
                                      null != e['@@iterator']
                                    )
                                      return Array.from(e);
                                  })(r) ||
                                  (function (e, t) {
                                    if (e) {
                                      if ('string' == typeof e) return et(e, t);
                                      var r = Object.prototype.toString
                                        .call(e)
                                        .slice(8, -1);
                                      if (
                                        ('Object' === r &&
                                          e.constructor &&
                                          (r = e.constructor.name),
                                        'Map' === r || 'Set' === r)
                                      )
                                        return Array.from(e);
                                      if (
                                        'Arguments' === r ||
                                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                          r
                                        )
                                      )
                                        return et(e, t);
                                    }
                                  })(r) ||
                                  (function () {
                                    throw TypeError(
                                      'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                                    );
                                  })(),
                                [e.getSources]
                              )
                              .filter(Boolean)
                              .map(function (e) {
                                var r;
                                return (
                                  (r = []),
                                  Promise.resolve(e(t)).then(function (e) {
                                    return Promise.all(
                                      e
                                        .filter(function (e) {
                                          return !!e;
                                        })
                                        .map(function (e) {
                                          if (
                                            (e.sourceId, r.includes(e.sourceId))
                                          )
                                            throw Error(
                                              '[Autocomplete] The `sourceId` '.concat(
                                                JSON.stringify(e.sourceId),
                                                ' is not unique.'
                                              )
                                            );
                                          r.push(e.sourceId);
                                          var t = {
                                            getItemInputValue: function (e) {
                                              return e.state.query;
                                            },
                                            getItemUrl: function () {},
                                            onSelect: function (e) {
                                              (0, e.setIsOpen)(!1);
                                            },
                                            onActive: S,
                                            onResolve: S,
                                          };
                                          return (
                                            Object.keys(t).forEach(function (
                                              e
                                            ) {
                                              t[e].__default = !0;
                                            }),
                                            Promise.resolve(J(J({}, t), e))
                                          );
                                        })
                                    );
                                  })
                                );
                              })
                          )
                            .then(function (e) {
                              return h(e);
                            })
                            .then(function (e) {
                              return e.map(function (e) {
                                return en(
                                  en({}, e),
                                  {},
                                  {
                                    onSelect: function (t) {
                                      e.onSelect(t),
                                        U.forEach(function (e) {
                                          var r;
                                          return null === (r = e.onSelect) ||
                                            void 0 === r
                                            ? void 0
                                            : r.call(e, t);
                                        });
                                    },
                                    onActive: function (t) {
                                      e.onActive(t),
                                        U.forEach(function (e) {
                                          var r;
                                          return null === (r = e.onActive) ||
                                            void 0 === r
                                            ? void 0
                                            : r.call(e, t);
                                        });
                                    },
                                    onResolve: function (t) {
                                      e.onResolve(t),
                                        U.forEach(function (e) {
                                          var r;
                                          return null === (r = e.onResolve) ||
                                            void 0 === r
                                            ? void 0
                                            : r.call(e, t);
                                        });
                                    },
                                  }
                                );
                              });
                            });
                        },
                        navigator: en(
                          {
                            navigate: function (e) {
                              var t = e.itemUrl;
                              r.location.assign(t);
                            },
                            navigateNewTab: function (e) {
                              var t = e.itemUrl,
                                n = r.open(t, '_blank', 'noopener');
                              null == n || n.focus();
                            },
                            navigateNewWindow: function (e) {
                              var t = e.itemUrl;
                              r.open(t, '_blank', 'noopener');
                            },
                          },
                          e.navigator
                        ),
                      }
                    )),
                  V =
                    ((o = function (e) {
                      var t = e.prevState,
                        r = e.state;
                      B.onStateChange(
                        eZ(
                          {
                            prevState: t,
                            state: r,
                            refresh: G,
                            navigator: B.navigator,
                          },
                          K
                        )
                      );
                    }),
                    (a = B.initialState),
                    {
                      getState: function () {
                        return a;
                      },
                      dispatch: function (e, t) {
                        var r = (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {};
                            t % 2
                              ? Z(Object(r), !0).forEach(function (t) {
                                  !(function (e, t, r) {
                                    var n;
                                    ((n = (function (e, t) {
                                      if ('object' !== Q(e) || null === e)
                                        return e;
                                      var r = e[Symbol.toPrimitive];
                                      if (void 0 !== r) {
                                        var n = r.call(e, t || 'default');
                                        if ('object' !== Q(n)) return n;
                                        throw TypeError(
                                          '@@toPrimitive must return a primitive value.'
                                        );
                                      }
                                      return ('string' === t ? String : Number)(
                                        e
                                      );
                                    })(t, 'string')),
                                    (t = 'symbol' === Q(n) ? n : String(n)) in
                                      e)
                                      ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                        })
                                      : (e[t] = r);
                                  })(e, t, r[t]);
                                })
                              : Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(
                                  e,
                                  Object.getOwnPropertyDescriptors(r)
                                )
                              : Z(Object(r)).forEach(function (t) {
                                  Object.defineProperty(
                                    e,
                                    t,
                                    Object.getOwnPropertyDescriptor(r, t)
                                  );
                                });
                          }
                          return e;
                        })({}, a);
                        o({
                          state: (a = ez(a, {type: e, props: B, payload: t})),
                          prevState: r,
                        });
                      },
                      pendingRequests:
                        ((i = []),
                        {
                          add: function (e) {
                            return (
                              i.push(e),
                              e.finally(function () {
                                i = i.filter(function (t) {
                                  return t !== e;
                                });
                              })
                            );
                          },
                          cancelAll: function () {
                            i.forEach(function (e) {
                              return e.cancel();
                            });
                          },
                          isEmpty: function () {
                            return 0 === i.length;
                          },
                        }),
                    }),
                  K = {
                    setActiveItemId: function (e) {
                      V.dispatch('setActiveItemId', e);
                    },
                    setQuery: function (e) {
                      V.dispatch('setQuery', e);
                    },
                    setCollections: function (e) {
                      var t = 0,
                        r = e.map(function (e) {
                          return Y(
                            Y({}, e),
                            {},
                            {
                              items: h(e.items).map(function (e) {
                                return Y(
                                  Y({}, e),
                                  {},
                                  {__autocomplete_id: t++}
                                );
                              }),
                            }
                          );
                        });
                      V.dispatch('setCollections', r);
                    },
                    setIsOpen: function (e) {
                      V.dispatch('setIsOpen', e);
                    },
                    setStatus: function (e) {
                      V.dispatch('setStatus', e);
                    },
                    setContext: function (e) {
                      V.dispatch('setContext', e);
                    },
                  },
                  $ =
                    ((l = (c = eZ(
                      {props: B, refresh: G, store: V, navigator: B.navigator},
                      K
                    )).props),
                    (u = c.refresh),
                    (s = c.store),
                    (f = eH(c, eC)),
                    (m = function (e, t) {
                      return void 0 !== t ? ''.concat(e, '-').concat(t) : e;
                    }),
                    {
                      getEnvironmentProps: function (e) {
                        var t = e.inputElement,
                          r = e.formElement,
                          n = e.panelElement;
                        function o(e) {
                          (!s.getState().isOpen &&
                            s.pendingRequests.isEmpty()) ||
                            e.target === t ||
                            (!1 ===
                              [r, n].some(function (t) {
                                var r;
                                return t === (r = e.target) || t.contains(r);
                              }) &&
                              (s.dispatch('blur', null),
                              l.debug || s.pendingRequests.cancelAll()));
                        }
                        return eM(
                          {
                            onTouchStart: o,
                            onMouseDown: o,
                            onTouchMove: function (e) {
                              !1 !== s.getState().isOpen &&
                                t === l.environment.document.activeElement &&
                                e.target !== t &&
                                t.blur();
                            },
                          },
                          eH(e, eN)
                        );
                      },
                      getRootProps: function (e) {
                        return eM(
                          {
                            role: 'combobox',
                            'aria-expanded': s.getState().isOpen,
                            'aria-haspopup': 'listbox',
                            'aria-owns': s.getState().isOpen
                              ? ''.concat(l.id, '-list')
                              : void 0,
                            'aria-labelledby': ''.concat(l.id, '-label'),
                          },
                          e
                        );
                      },
                      getFormProps: function (e) {
                        return (
                          e.inputElement,
                          eM(
                            {
                              action: '',
                              noValidate: !0,
                              role: 'search',
                              onSubmit: function (t) {
                                var r;
                                t.preventDefault(),
                                  l.onSubmit(
                                    eM(
                                      {
                                        event: t,
                                        refresh: u,
                                        state: s.getState(),
                                      },
                                      f
                                    )
                                  ),
                                  s.dispatch('submit', null),
                                  null === (r = e.inputElement) ||
                                    void 0 === r ||
                                    r.blur();
                              },
                              onReset: function (t) {
                                var r;
                                t.preventDefault(),
                                  l.onReset(
                                    eM(
                                      {
                                        event: t,
                                        refresh: u,
                                        state: s.getState(),
                                      },
                                      f
                                    )
                                  ),
                                  s.dispatch('reset', null),
                                  null === (r = e.inputElement) ||
                                    void 0 === r ||
                                    r.focus();
                              },
                            },
                            eH(e, e_)
                          )
                        );
                      },
                      getLabelProps: function (e) {
                        var t = e || {},
                          r = t.sourceIndex,
                          n = eH(t, eT);
                        return eM(
                          {
                            htmlFor: ''.concat(m(l.id, r), '-input'),
                            id: ''.concat(m(l.id, r), '-label'),
                          },
                          n
                        );
                      },
                      getInputProps: function (e) {
                        function t(e) {
                          (l.openOnFocus || s.getState().query) &&
                            ew(
                              eM(
                                {
                                  event: e,
                                  props: l,
                                  query:
                                    s.getState().completion ||
                                    s.getState().query,
                                  refresh: u,
                                  store: s,
                                },
                                f
                              )
                            ),
                            s.dispatch('focus', null);
                        }
                        var r,
                          n,
                          o = e || {},
                          i = (o.inputElement, o.maxLength),
                          a = void 0 === i ? 512 : i,
                          c = eH(o, ex),
                          m = z(s.getState()),
                          p = !!(
                            (r =
                              (null === (n = l.environment.navigator) ||
                              void 0 === n
                                ? void 0
                                : n.userAgent) || '') && r.match(W)
                          ),
                          d = null != m && m.itemUrl && !p ? 'go' : 'search';
                        return eM(
                          {
                            'aria-autocomplete': 'both',
                            'aria-activedescendant':
                              s.getState().isOpen &&
                              null !== s.getState().activeItemId
                                ? ''
                                    .concat(l.id, '-item-')
                                    .concat(s.getState().activeItemId)
                                : void 0,
                            'aria-controls': s.getState().isOpen
                              ? ''.concat(l.id, '-list')
                              : void 0,
                            'aria-labelledby': ''.concat(l.id, '-label'),
                            value:
                              s.getState().completion || s.getState().query,
                            id: ''.concat(l.id, '-input'),
                            autoComplete: 'off',
                            autoCorrect: 'off',
                            autoCapitalize: 'off',
                            enterKeyHint: d,
                            spellCheck: 'false',
                            autoFocus: l.autoFocus,
                            placeholder: l.placeholder,
                            maxLength: a,
                            type: 'search',
                            onChange: function (e) {
                              ew(
                                eM(
                                  {
                                    event: e,
                                    props: l,
                                    query: e.currentTarget.value.slice(0, a),
                                    refresh: u,
                                    store: s,
                                  },
                                  f
                                )
                              );
                            },
                            onKeyDown: function (e) {
                              !(function (e) {
                                var t = e.event,
                                  r = e.props,
                                  n = e.refresh,
                                  o = e.store,
                                  i = (function (e, t) {
                                    if (null == e) return {};
                                    var r,
                                      n,
                                      o = (function (e, t) {
                                        if (null == e) return {};
                                        var r,
                                          n,
                                          o = {},
                                          i = Object.keys(e);
                                        for (n = 0; n < i.length; n++)
                                          (r = i[n]),
                                            t.indexOf(r) >= 0 || (o[r] = e[r]);
                                        return o;
                                      })(e, t);
                                    if (Object.getOwnPropertySymbols) {
                                      var i = Object.getOwnPropertySymbols(e);
                                      for (n = 0; n < i.length; n++)
                                        (r = i[n]),
                                          t.indexOf(r) >= 0 ||
                                            (Object.prototype.propertyIsEnumerable.call(
                                              e,
                                              r
                                            ) &&
                                              (o[r] = e[r]));
                                    }
                                    return o;
                                  })(e, eP);
                                if (
                                  'ArrowUp' === t.key ||
                                  'ArrowDown' === t.key
                                ) {
                                  var a = function () {
                                      var e =
                                        r.environment.document.getElementById(
                                          ''
                                            .concat(r.id, '-item-')
                                            .concat(o.getState().activeItemId)
                                        );
                                      e &&
                                        (e.scrollIntoViewIfNeeded
                                          ? e.scrollIntoViewIfNeeded(!1)
                                          : e.scrollIntoView(!1));
                                    },
                                    c = function () {
                                      var e = z(o.getState());
                                      if (
                                        null !== o.getState().activeItemId &&
                                        e
                                      ) {
                                        var r = e.item,
                                          a = e.itemInputValue,
                                          c = e.itemUrl,
                                          l = e.source;
                                        l.onActive(
                                          eA(
                                            {
                                              event: t,
                                              item: r,
                                              itemInputValue: a,
                                              itemUrl: c,
                                              refresh: n,
                                              source: l,
                                              state: o.getState(),
                                            },
                                            i
                                          )
                                        );
                                      }
                                    };
                                  t.preventDefault(),
                                    !1 === o.getState().isOpen &&
                                    (r.openOnFocus || o.getState().query)
                                      ? ew(
                                          eA(
                                            {
                                              event: t,
                                              props: r,
                                              query: o.getState().query,
                                              refresh: n,
                                              store: o,
                                            },
                                            i
                                          )
                                        ).then(function () {
                                          o.dispatch(t.key, {
                                            nextActiveItemId:
                                              r.defaultActiveItemId,
                                          }),
                                            c(),
                                            setTimeout(a, 0);
                                        })
                                      : (o.dispatch(t.key, {}), c(), a());
                                } else if ('Escape' === t.key)
                                  t.preventDefault(),
                                    o.dispatch(t.key, null),
                                    o.pendingRequests.cancelAll();
                                else if ('Tab' === t.key)
                                  o.dispatch('blur', null),
                                    o.pendingRequests.cancelAll();
                                else if ('Enter' === t.key) {
                                  if (
                                    null === o.getState().activeItemId ||
                                    o
                                      .getState()
                                      .collections.every(function (e) {
                                        return 0 === e.items.length;
                                      })
                                  )
                                    return void (
                                      r.debug || o.pendingRequests.cancelAll()
                                    );
                                  t.preventDefault();
                                  var l = z(o.getState()),
                                    u = l.item,
                                    s = l.itemInputValue,
                                    f = l.itemUrl,
                                    m = l.source;
                                  if (t.metaKey || t.ctrlKey)
                                    void 0 !== f &&
                                      (m.onSelect(
                                        eA(
                                          {
                                            event: t,
                                            item: u,
                                            itemInputValue: s,
                                            itemUrl: f,
                                            refresh: n,
                                            source: m,
                                            state: o.getState(),
                                          },
                                          i
                                        )
                                      ),
                                      r.navigator.navigateNewTab({
                                        itemUrl: f,
                                        item: u,
                                        state: o.getState(),
                                      }));
                                  else if (t.shiftKey)
                                    void 0 !== f &&
                                      (m.onSelect(
                                        eA(
                                          {
                                            event: t,
                                            item: u,
                                            itemInputValue: s,
                                            itemUrl: f,
                                            refresh: n,
                                            source: m,
                                            state: o.getState(),
                                          },
                                          i
                                        )
                                      ),
                                      r.navigator.navigateNewWindow({
                                        itemUrl: f,
                                        item: u,
                                        state: o.getState(),
                                      }));
                                  else if (t.altKey);
                                  else {
                                    if (void 0 !== f)
                                      return (
                                        m.onSelect(
                                          eA(
                                            {
                                              event: t,
                                              item: u,
                                              itemInputValue: s,
                                              itemUrl: f,
                                              refresh: n,
                                              source: m,
                                              state: o.getState(),
                                            },
                                            i
                                          )
                                        ),
                                        void r.navigator.navigate({
                                          itemUrl: f,
                                          item: u,
                                          state: o.getState(),
                                        })
                                      );
                                    ew(
                                      eA(
                                        {
                                          event: t,
                                          nextState: {isOpen: !1},
                                          props: r,
                                          query: s,
                                          refresh: n,
                                          store: o,
                                        },
                                        i
                                      )
                                    ).then(function () {
                                      m.onSelect(
                                        eA(
                                          {
                                            event: t,
                                            item: u,
                                            itemInputValue: s,
                                            itemUrl: f,
                                            refresh: n,
                                            source: m,
                                            state: o.getState(),
                                          },
                                          i
                                        )
                                      );
                                    });
                                  }
                                }
                              })(
                                eM(
                                  {event: e, props: l, refresh: u, store: s},
                                  f
                                )
                              );
                            },
                            onFocus: t,
                            onBlur: S,
                            onClick: function (r) {
                              e.inputElement !==
                                l.environment.document.activeElement ||
                                s.getState().isOpen ||
                                t(r);
                            },
                          },
                          c
                        );
                      },
                      getPanelProps: function (e) {
                        return eM(
                          {
                            onMouseDown: function (e) {
                              e.preventDefault();
                            },
                            onMouseLeave: function () {
                              s.dispatch('mouseleave', null);
                            },
                          },
                          e
                        );
                      },
                      getListProps: function (e) {
                        var t = e || {},
                          r = t.sourceIndex,
                          n = eH(t, eR);
                        return eM(
                          {
                            role: 'listbox',
                            'aria-labelledby': ''.concat(m(l.id, r), '-label'),
                            id: ''.concat(m(l.id, r), '-list'),
                          },
                          n
                        );
                      },
                      getItemProps: function (e) {
                        var t = e.item,
                          r = e.source,
                          n = e.sourceIndex,
                          o = eH(e, eq);
                        return eM(
                          {
                            id: ''
                              .concat(m(l.id, n), '-item-')
                              .concat(t.__autocomplete_id),
                            role: 'option',
                            'aria-selected':
                              s.getState().activeItemId === t.__autocomplete_id,
                            onMouseMove: function (e) {
                              if (
                                t.__autocomplete_id !==
                                s.getState().activeItemId
                              ) {
                                s.dispatch('mousemove', t.__autocomplete_id);
                                var r = z(s.getState());
                                if (null !== s.getState().activeItemId && r) {
                                  var n = r.item,
                                    o = r.itemInputValue,
                                    i = r.itemUrl,
                                    a = r.source;
                                  a.onActive(
                                    eM(
                                      {
                                        event: e,
                                        item: n,
                                        itemInputValue: o,
                                        itemUrl: i,
                                        refresh: u,
                                        source: a,
                                        state: s.getState(),
                                      },
                                      f
                                    )
                                  );
                                }
                              }
                            },
                            onMouseDown: function (e) {
                              e.preventDefault();
                            },
                            onClick: function (e) {
                              var n = r.getItemInputValue({
                                  item: t,
                                  state: s.getState(),
                                }),
                                o = r.getItemUrl({
                                  item: t,
                                  state: s.getState(),
                                });
                              (o
                                ? Promise.resolve()
                                : ew(
                                    eM(
                                      {
                                        event: e,
                                        nextState: {isOpen: !1},
                                        props: l,
                                        query: n,
                                        refresh: u,
                                        store: s,
                                      },
                                      f
                                    )
                                  )
                              ).then(function () {
                                r.onSelect(
                                  eM(
                                    {
                                      event: e,
                                      item: t,
                                      itemInputValue: n,
                                      itemUrl: o,
                                      refresh: u,
                                      source: r,
                                      state: s.getState(),
                                    },
                                    f
                                  )
                                );
                              });
                            },
                          },
                          o
                        );
                      },
                    });
                function G() {
                  return ew(
                    eZ(
                      {
                        event: new Event('input'),
                        nextState: {isOpen: V.getState().isOpen},
                        props: B,
                        navigator: B.navigator,
                        query: V.getState().query,
                        refresh: G,
                        store: V,
                      },
                      K
                    )
                  );
                }
                if (
                  e.insights &&
                  !B.plugins.some(function (e) {
                    return 'aa.algoliaInsightsPlugin' === e.name;
                  })
                ) {
                  var X,
                    ee,
                    er,
                    eo,
                    ei,
                    ea,
                    ec,
                    el,
                    eu,
                    es,
                    ef,
                    em = 'boolean' == typeof e.insights ? {} : e.insights;
                  B.plugins.push(
                    ((ee = (X = M(
                      {
                        onItemsChange: function (e) {
                          var t = e.insights,
                            r = e.insightsEvents;
                          t.viewedObjectIDs.apply(
                            t,
                            R(
                              r.map(function (e) {
                                return M(
                                  M({}, e),
                                  {},
                                  {
                                    algoliaSource: [].concat(
                                      R(e.algoliaSource || []),
                                      ['autocomplete-internal']
                                    ),
                                  }
                                );
                              })
                            )
                          );
                        },
                        onSelect: function (e) {
                          var t = e.insights,
                            r = e.insightsEvents;
                          t.clickedObjectIDsAfterSearch.apply(
                            t,
                            R(
                              r.map(function (e) {
                                return M(
                                  M({}, e),
                                  {},
                                  {
                                    algoliaSource: [].concat(
                                      R(e.algoliaSource || []),
                                      ['autocomplete-internal']
                                    ),
                                  }
                                );
                              })
                            )
                          );
                        },
                        onActive: S,
                      },
                      em
                    )).insightsClient),
                    (er = X.onItemsChange),
                    (eo = X.onSelect),
                    (ei = X.onActive),
                    (ea = ee),
                    ee ||
                      ('undefined' != typeof window &&
                        ('string' ==
                          typeof (el =
                            (ec = {window: window}.window)
                              .AlgoliaAnalyticsObject || 'aa') && (ea = ec[el]),
                        ea ||
                          ((ec.AlgoliaAnalyticsObject = el),
                          ec[el] ||
                            (ec[el] = function () {
                              ec[el].queue || (ec[el].queue = []);
                              for (
                                var e = arguments.length, t = Array(e), r = 0;
                                r < e;
                                r++
                              )
                                t[r] = arguments[r];
                              ec[el].queue.push(t);
                            }),
                          (ec[el].version = '2.6.0'),
                          (ea = ec[el]),
                          (function (e) {
                            var t =
                              '[Autocomplete]: Could not load search-insights.js. Please load it manually following https://alg.li/insights-autocomplete';
                            try {
                              var r = e.document.createElement('script');
                              (r.async = !0),
                                (r.src = H),
                                (r.onerror = function () {
                                  console.error(t);
                                }),
                                document.body.appendChild(r);
                            } catch (e) {
                              console.error(t);
                            }
                          })(ec)))),
                    (eu = (function (e) {
                      var t,
                        r,
                        n,
                        o,
                        i =
                          ((n = (r =
                            (function (e) {
                              if (Array.isArray(e)) return e;
                            })(
                              (t = (e.version || '').split('.').map(Number))
                            ) ||
                            (function (e, t) {
                              var r =
                                null == e
                                  ? null
                                  : ('undefined' != typeof Symbol &&
                                      e[Symbol.iterator]) ||
                                    e['@@iterator'];
                              if (null != r) {
                                var n,
                                  o,
                                  i,
                                  a,
                                  c = [],
                                  l = !0,
                                  u = !1;
                                try {
                                  if (((i = (r = r.call(e)).next), 0 === t)) {
                                    if (Object(r) !== r) return;
                                    l = !1;
                                  } else
                                    for (
                                      ;
                                      !(l = (n = i.call(r)).done) &&
                                      (c.push(n.value), c.length !== t);
                                      l = !0
                                    );
                                } catch (e) {
                                  (u = !0), (o = e);
                                } finally {
                                  try {
                                    if (
                                      !l &&
                                      null != r.return &&
                                      ((a = r.return()), Object(a) !== a)
                                    )
                                      return;
                                  } finally {
                                    if (u) throw o;
                                  }
                                }
                                return c;
                              }
                            })(t, 2) ||
                            (function (e, t) {
                              if (e) {
                                if ('string' == typeof e) return j(e, t);
                                var r = Object.prototype.toString
                                  .call(e)
                                  .slice(8, -1);
                                if (
                                  ('Object' === r &&
                                    e.constructor &&
                                    (r = e.constructor.name),
                                  'Map' === r || 'Set' === r)
                                )
                                  return Array.from(e);
                                if (
                                  'Arguments' === r ||
                                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                    r
                                  )
                                )
                                  return j(e, t);
                              }
                            })(t, 2) ||
                            (function () {
                              throw TypeError(
                                'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                              );
                            })())[0]),
                          (o = r[1]),
                          n >= 3 ||
                            (2 === n && o >= 4) ||
                            (1 === n && o >= 10));
                      function a(t, r, n) {
                        if (i && void 0 !== n) {
                          var o = n[0].__autocomplete_algoliaCredentials,
                            a = {
                              'X-Algolia-Application-Id': o.appId,
                              'X-Algolia-API-Key': o.apiKey,
                            };
                          e.apply(void 0, [t].concat(D(r), [{headers: a}]));
                        } else e.apply(void 0, [t].concat(D(r)));
                      }
                      return {
                        init: function (t, r) {
                          e('init', {appId: t, apiKey: r});
                        },
                        setUserToken: function (t) {
                          e('setUserToken', t);
                        },
                        clickedObjectIDsAfterSearch: function () {
                          for (
                            var e = arguments.length, t = Array(e), r = 0;
                            r < e;
                            r++
                          )
                            t[r] = arguments[r];
                          t.length > 0 &&
                            a('clickedObjectIDsAfterSearch', _(t), t[0].items);
                        },
                        clickedObjectIDs: function () {
                          for (
                            var e = arguments.length, t = Array(e), r = 0;
                            r < e;
                            r++
                          )
                            t[r] = arguments[r];
                          t.length > 0 &&
                            a('clickedObjectIDs', _(t), t[0].items);
                        },
                        clickedFilters: function () {
                          for (
                            var t = arguments.length, r = Array(t), n = 0;
                            n < t;
                            n++
                          )
                            r[n] = arguments[n];
                          r.length > 0 &&
                            e.apply(void 0, ['clickedFilters'].concat(r));
                        },
                        convertedObjectIDsAfterSearch: function () {
                          for (
                            var e = arguments.length, t = Array(e), r = 0;
                            r < e;
                            r++
                          )
                            t[r] = arguments[r];
                          t.length > 0 &&
                            a(
                              'convertedObjectIDsAfterSearch',
                              _(t),
                              t[0].items
                            );
                        },
                        convertedObjectIDs: function () {
                          for (
                            var e = arguments.length, t = Array(e), r = 0;
                            r < e;
                            r++
                          )
                            t[r] = arguments[r];
                          t.length > 0 &&
                            a('convertedObjectIDs', _(t), t[0].items);
                        },
                        convertedFilters: function () {
                          for (
                            var t = arguments.length, r = Array(t), n = 0;
                            n < t;
                            n++
                          )
                            r[n] = arguments[n];
                          r.length > 0 &&
                            e.apply(void 0, ['convertedFilters'].concat(r));
                        },
                        viewedObjectIDs: function () {
                          for (
                            var e = arguments.length, t = Array(e), r = 0;
                            r < e;
                            r++
                          )
                            t[r] = arguments[r];
                          t.length > 0 &&
                            t
                              .reduce(function (e, t) {
                                var r = t.items,
                                  n = k(t, I);
                                return [].concat(
                                  D(e),
                                  D(
                                    (function (e) {
                                      for (
                                        var t =
                                            arguments.length > 1 &&
                                            void 0 !== arguments[1]
                                              ? arguments[1]
                                              : 20,
                                          r = [],
                                          n = 0;
                                        n < e.objectIDs.length;
                                        n += t
                                      )
                                        r.push(
                                          N(
                                            N({}, e),
                                            {},
                                            {
                                              objectIDs: e.objectIDs.slice(
                                                n,
                                                n + t
                                              ),
                                            }
                                          )
                                        );
                                      return r;
                                    })(
                                      N(
                                        N({}, n),
                                        {},
                                        {
                                          objectIDs:
                                            (null == r
                                              ? void 0
                                              : r.map(function (e) {
                                                  return e.objectID;
                                                })) || n.objectIDs,
                                        }
                                      )
                                    ).map(function (e) {
                                      return {items: r, payload: e};
                                    })
                                  )
                                );
                              }, [])
                              .forEach(function (e) {
                                var t = e.items;
                                return a('viewedObjectIDs', [e.payload], t);
                              });
                        },
                        viewedFilters: function () {
                          for (
                            var t = arguments.length, r = Array(t), n = 0;
                            n < t;
                            n++
                          )
                            r[n] = arguments[n];
                          r.length > 0 &&
                            e.apply(void 0, ['viewedFilters'].concat(r));
                        },
                      };
                    })(ea)),
                    (es = {current: []}),
                    (ef = v(function (e) {
                      var t = e.state;
                      if (t.isOpen) {
                        var r = t.collections
                          .reduce(function (e, t) {
                            return [].concat(R(e), R(t.items));
                          }, [])
                          .filter(x);
                        (function e(t, r) {
                          if (t === r) return !0;
                          if (
                            g(t) ||
                            g(r) ||
                            'function' == typeof t ||
                            'function' == typeof r
                          )
                            return t === r;
                          if (Object.keys(t).length !== Object.keys(r).length)
                            return !1;
                          for (
                            var n = 0, o = Object.keys(t);
                            n < o.length;
                            n++
                          ) {
                            var i = o[n];
                            if (!(i in r) || !e(t[i], r[i])) return !1;
                          }
                          return !0;
                        })(
                          es.current.map(function (e) {
                            return e.objectID;
                          }),
                          r.map(function (e) {
                            return e.objectID;
                          })
                        ) ||
                          ((es.current = r),
                          r.length > 0 &&
                            F({
                              onItemsChange: er,
                              items: r,
                              insights: eu,
                              state: t,
                            }));
                      }
                    }, 0)),
                    {
                      name: 'aa.algoliaInsightsPlugin',
                      subscribe: function (e) {
                        var t = e.setContext,
                          r = e.onSelect,
                          n = e.onActive;
                        ea('addAlgoliaAgent', 'insights-plugin'),
                          t({
                            algoliaInsightsPlugin: {
                              __algoliaSearchParameters: {clickAnalytics: !0},
                              insights: eu,
                            },
                          }),
                          r(function (e) {
                            var t = e.item,
                              r = e.state,
                              n = e.event;
                            x(t) &&
                              eo({
                                state: r,
                                event: n,
                                insights: eu,
                                item: t,
                                insightsEvents: [
                                  M(
                                    {eventName: 'Item Selected'},
                                    E({item: t, items: es.current})
                                  ),
                                ],
                              });
                          }),
                          n(function (e) {
                            var t = e.item,
                              r = e.state,
                              n = e.event;
                            x(t) &&
                              ei({
                                state: r,
                                event: n,
                                insights: eu,
                                item: t,
                                insightsEvents: [
                                  M(
                                    {eventName: 'Item Active'},
                                    E({item: t, items: es.current})
                                  ),
                                ],
                              });
                          });
                      },
                      onStateChange: function (e) {
                        ef({state: e.state});
                      },
                      __autocomplete_pluginOptions: em,
                    })
                  );
                }
                return (
                  B.plugins.forEach(function (e) {
                    var t;
                    return null === (t = e.subscribe) || void 0 === t
                      ? void 0
                      : t.call(
                          e,
                          eZ(
                            eZ({}, K),
                            {},
                            {
                              navigator: B.navigator,
                              refresh: G,
                              onSelect: function (e) {
                                U.push({onSelect: e});
                              },
                              onActive: function (e) {
                                U.push({onActive: e});
                              },
                              onResolve: function (e) {
                                U.push({onResolve: e});
                              },
                            }
                          )
                        );
                  }),
                  (function (e) {
                    var t,
                      r,
                      n = e.metadata,
                      o = e.environment;
                    if (
                      null === (t = o.navigator) ||
                      void 0 === t ||
                      null === (r = t.userAgent) ||
                      void 0 === r
                        ? void 0
                        : r.includes('Algolia Crawler')
                    ) {
                      var i = o.document.createElement('meta'),
                        a = o.document.querySelector('head');
                      (i.name = 'algolia:metadata'),
                        setTimeout(function () {
                          (i.content = JSON.stringify(n)), a.appendChild(i);
                        }, 0);
                    }
                  })({
                    metadata:
                      ((C = (p = {plugins: B.plugins, options: e}).plugins),
                      (L = (q =
                        null ===
                          (d = ((null ===
                            (w = (T = p.options).__autocomplete_metadata) ||
                          void 0 === w
                            ? void 0
                            : w.userAgents) || [])[0]) || void 0 === d
                          ? void 0
                          : d.segment)
                        ? eB(
                            {},
                            q,
                            Object.keys(
                              (null === (P = T.__autocomplete_metadata) ||
                              void 0 === P
                                ? void 0
                                : P.options) || {}
                            )
                          )
                        : {}),
                      {
                        plugins: C.map(function (e) {
                          return {
                            name: e.name,
                            options: Object.keys(
                              e.__autocomplete_pluginOptions || []
                            ),
                          };
                        }),
                        options: (function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {};
                            t % 2
                              ? eU(Object(r), !0).forEach(function (t) {
                                  eB(e, t, r[t]);
                                })
                              : Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(
                                  e,
                                  Object.getOwnPropertyDescriptors(r)
                                )
                              : eU(Object(r)).forEach(function (t) {
                                  Object.defineProperty(
                                    e,
                                    t,
                                    Object.getOwnPropertyDescriptor(r, t)
                                  );
                                });
                          }
                          return e;
                        })({'autocomplete-core': Object.keys(T)}, L),
                        ua: O.concat(
                          (null === (A = T.__autocomplete_metadata) ||
                          void 0 === A
                            ? void 0
                            : A.userAgents) || []
                        ),
                      }),
                    environment: B.environment,
                  }),
                  eZ(eZ({refresh: G, navigator: B.navigator}, $), K)
                );
              })({
                id: 'docsearch',
                defaultActiveItemId: 0,
                placeholder: A,
                openOnFocus: !0,
                initialState: {query: eI, context: {searchSuggestions: []}},
                insights: es,
                navigator: $,
                onStateChange: function (e) {
                  eh(e.state);
                },
                getSources: function (e) {
                  var t = e.query,
                    r = e.state,
                    n = e.setContext,
                    o = e.setStatus;
                  if (!t)
                    return eo
                      ? []
                      : [
                          {
                            sourceId: 'recentSearches',
                            onSelect: function (e) {
                              var t = e.item,
                                r = e.event;
                              eF(t), tm(r) || L();
                            },
                            getItemUrl: function (e) {
                              return e.item.url;
                            },
                            getItems: function () {
                              return eL.getAll();
                            },
                          },
                          {
                            sourceId: 'favoriteSearches',
                            onSelect: function (e) {
                              var t = e.item,
                                r = e.event;
                              eF(t), tm(r) || L();
                            },
                            getItemUrl: function (e) {
                              return e.item.url;
                            },
                            getItems: function () {
                              return ek.getAll();
                            },
                          },
                        ];
                  var a = !!es;
                  return eD
                    .search([
                      {
                        query: t,
                        indexName: w,
                        params: i(
                          {
                            attributesToRetrieve: [
                              'hierarchy.lvl0',
                              'hierarchy.lvl1',
                              'hierarchy.lvl2',
                              'hierarchy.lvl3',
                              'hierarchy.lvl4',
                              'hierarchy.lvl5',
                              'hierarchy.lvl6',
                              'content',
                              'type',
                              'url',
                            ],
                            attributesToSnippet: [
                              'hierarchy.lvl1:'.concat(eE.current),
                              'hierarchy.lvl2:'.concat(eE.current),
                              'hierarchy.lvl3:'.concat(eE.current),
                              'hierarchy.lvl4:'.concat(eE.current),
                              'hierarchy.lvl5:'.concat(eE.current),
                              'hierarchy.lvl6:'.concat(eE.current),
                              'content:'.concat(eE.current),
                            ],
                            snippetEllipsisText: '…',
                            highlightPreTag: '<mark>',
                            highlightPostTag: '</mark>',
                            hitsPerPage: 20,
                            clickAnalytics: a,
                          },
                          C
                        ),
                      },
                    ])
                    .catch(function (e) {
                      throw ('RetryError' === e.name && o('error'), e);
                    })
                    .then(function (e) {
                      var t = e.results[0],
                        o = t.hits,
                        c = t.nbHits,
                        l = ts(
                          o,
                          function (e) {
                            return th(e);
                          },
                          T
                        );
                      r.context.searchSuggestions.length <
                        Object.keys(l).length &&
                        n({searchSuggestions: Object.keys(l)}),
                        n({nbHits: c});
                      var u = {};
                      return (
                        a &&
                          (u = {
                            __autocomplete_indexName: w,
                            __autocomplete_queryID: t.queryID,
                            __autocomplete_algoliaCredentials: {
                              appId: p,
                              apiKey: d,
                            },
                          }),
                        Object.values(l).map(function (e, t) {
                          return {
                            sourceId: 'hits'.concat(t),
                            onSelect: function (e) {
                              var t = e.item,
                                r = e.event;
                              eF(t), tm(r) || L();
                            },
                            getItemUrl: function (e) {
                              return e.item.url;
                            },
                            getItems: function () {
                              return Object.values(
                                ts(
                                  e,
                                  function (e) {
                                    return e.hierarchy.lvl1;
                                  },
                                  T
                                )
                              )
                                .map(B)
                                .map(function (e) {
                                  return e.map(function (t) {
                                    var r = null,
                                      n = e.find(function (e) {
                                        return (
                                          'lvl1' === e.type &&
                                          e.hierarchy.lvl1 === t.hierarchy.lvl1
                                        );
                                      });
                                    return (
                                      'lvl1' !== t.type && n && (r = n),
                                      i(
                                        i({}, t),
                                        {},
                                        {__docsearch_parent: r},
                                        u
                                      )
                                    );
                                  });
                                })
                                .flat();
                            },
                          };
                        })
                      );
                    });
                },
              });
            },
            [w, C, T, eD, L, eL, ek, eF, eI, A, $, B, eo, es, p, d]
          ),
          eJ = eK.getEnvironmentProps,
          e$ = eK.getRootProps,
          eW = eK.refresh;
        return (
          (o = (r = {
            getEnvironmentProps: eJ,
            panelElement: eS.current,
            formElement: eg.current,
            inputElement: eO.current,
          }).getEnvironmentProps),
          (u = r.panelElement),
          (s = r.formElement),
          (f = r.inputElement),
          n.useEffect(
            function () {
              if (u && s && f) {
                var e = o({panelElement: u, formElement: s, inputElement: f}),
                  t = e.onTouchStart,
                  r = e.onTouchMove;
                return (
                  window.addEventListener('touchstart', t),
                  window.addEventListener('touchmove', r),
                  function () {
                    window.removeEventListener('touchstart', t),
                      window.removeEventListener('touchmove', r);
                  }
                );
              }
            },
            [o, u, s, f]
          ),
          (m = {container: ey.current}.container),
          n.useEffect(
            function () {
              if (m) {
                var e = m.querySelectorAll(
                    'a[href]:not([disabled]), button:not([disabled]), input:not([disabled])'
                  ),
                  t = e[0],
                  r = e[e.length - 1];
                return (
                  m.addEventListener('keydown', n),
                  function () {
                    m.removeEventListener('keydown', n);
                  }
                );
              }
              function n(e) {
                'Tab' === e.key &&
                  (e.shiftKey
                    ? document.activeElement === t &&
                      (e.preventDefault(), r.focus())
                    : document.activeElement === r &&
                      (e.preventDefault(), t.focus()));
              }
            },
            [m]
          ),
          n.useEffect(function () {
            return (
              document.body.classList.add('DocSearch--active'),
              function () {
                var e, t;
                document.body.classList.remove('DocSearch--active'),
                  null === (e = (t = window).scrollTo) ||
                    void 0 === e ||
                    e.call(t, 0, X);
              }
            );
          }, []),
          n.useEffect(function () {
            window.matchMedia('(max-width: 768px)').matches && (eE.current = 5);
          }, []),
          n.useEffect(
            function () {
              eS.current && (eS.current.scrollTop = 0);
            },
            [ev.query]
          ),
          n.useEffect(
            function () {
              eI.length > 0 && (eW(), eO.current && eO.current.focus());
            },
            [eI, eW]
          ),
          n.useEffect(function () {
            function e() {
              if (eb.current) {
                var e = 0.01 * window.innerHeight;
                eb.current.style.setProperty(
                  '--docsearch-vh',
                  ''.concat(e, 'px')
                );
              }
            }
            return (
              e(),
              window.addEventListener('resize', e),
              function () {
                window.removeEventListener('resize', e);
              }
            );
          }, []),
          n.createElement(
            'div',
            a({ref: ey}, e$({'aria-expanded': !0}), {
              className: [
                'DocSearch',
                'DocSearch-Container',
                'stalled' === ev.status && 'DocSearch-Container--Stalled',
                'error' === ev.status && 'DocSearch-Container--Errored',
              ]
                .filter(Boolean)
                .join(' '),
              role: 'button',
              tabIndex: 0,
              onMouseDown: function (e) {
                e.target === e.currentTarget && L();
              },
            }),
            n.createElement(
              'div',
              {className: 'DocSearch-Modal', ref: eb},
              n.createElement(
                'header',
                {className: 'DocSearch-SearchBar', ref: eg},
                n.createElement(
                  tj,
                  a({}, eK, {
                    state: ev,
                    autoFocus: 0 === eI.length,
                    inputRef: eO,
                    isFromSelection: !!eI && eI === ej,
                    translations: em,
                    onClose: L,
                  })
                )
              ),
              n.createElement(
                'div',
                {className: 'DocSearch-Dropdown', ref: eS},
                n.createElement(
                  tO,
                  a({}, eK, {
                    indexName: w,
                    state: ev,
                    hitComponent: void 0 === V ? e0 : V,
                    resultsFooterComponent:
                      void 0 === K
                        ? function () {
                            return null;
                          }
                        : K,
                    disableUserPersonalization: eo,
                    recentSearches: eL,
                    favoriteSearches: ek,
                    inputRef: eO,
                    translations: ep,
                    getMissingResultsUrl: el,
                    onItemClick: function (e, t) {
                      eV(e), eF(e), tm(t) || L();
                    },
                  })
                )
              ),
              n.createElement(
                'footer',
                {className: 'DocSearch-Footer'},
                n.createElement(eY, {translations: ef})
              )
            )
          )
        );
      }
    },
  },
]);
