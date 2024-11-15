(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [759],
  {
    9665: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return l;
        },
      }),
        n(66337);
      var r = n(67294);
      let o =
          r[
            'undefined' != typeof document && void 0 !== document.createElement
              ? 'useLayoutEffect'
              : 'useEffect'
          ],
        i = new Map();
      function s(e) {
        let {root: t, ...n} = e,
          r = JSON.stringify(n),
          o = i.get(t);
        return (
          o || ((o = {}), i.set(t, o)),
          o[r]
            ? o[r]
            : (o[r] = (function ({
                root: e = null,
                pollInterval: t = null,
                useMutationObserver: n = !1,
                rootMargin: r = '0px 0px 0px 0px',
                threshold: o = 0,
              }) {
                let i = new Set();
                if ('undefined' == typeof IntersectionObserver) return null;
                let s = new IntersectionObserver(
                  (e) => {
                    for (let t of i) t(e, s);
                  },
                  {root: e, rootMargin: r, threshold: o}
                );
                return (
                  (s.POLL_INTERVAL = t),
                  (s.USE_MUTATION_OBSERVER = n),
                  {
                    observer: s,
                    getListeners: () => i,
                    subscribe: (e) => i.add(e),
                    unsubscribe: (e) => i.delete(e),
                  }
                );
              })(e))
        );
      }
      var l = function (e, t = {}) {
        let {
            root: n = null,
            pollInterval: i = null,
            useMutationObserver: l = !1,
            rootMargin: a = '0px 0px 0px 0px',
            threshold: u = 0,
            initialIsIntersecting: c = !1,
          } = t,
          [f, d] = r.useState(() => ({
            boundingClientRect: null,
            intersectionRatio: 0,
            intersectionRect: null,
            isIntersecting: c,
            rootBounds: null,
            target: null,
            time: 0,
          })),
          [p, h] = r.useState(() =>
            s({
              root: n,
              pollInterval: i,
              useMutationObserver: l,
              rootMargin: a,
              threshold: u,
            })
          );
        return (
          r.useEffect(() => {
            let e = s({
              root: n,
              pollInterval: i,
              useMutationObserver: l,
              rootMargin: a,
              threshold: u,
            });
            h(e);
          }, [n, a, i, l, JSON.stringify(u)]),
          o(() => {
            let t = e && 'current' in e ? e.current : e;
            if (!p || !t) return;
            let n = !1;
            p.observer.observe(t);
            let r = (e) => {
              if (!n)
                for (let n = 0; n < e.length; n++) {
                  let r = e[n];
                  r.target === t && d(r);
                }
            };
            return (
              p.subscribe(r),
              () => {
                (n = !0), p.observer.unobserve(t), p.unsubscribe(r);
              }
            );
          }, [e, p]),
          f
        );
      };
    },
    1458: function (e) {
      'use strict';
      var t = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                'value' in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        n = [
          [
            {color: '0, 0, 0', class: 'ansi-black'},
            {color: '187, 0, 0', class: 'ansi-red'},
            {color: '0, 187, 0', class: 'ansi-green'},
            {color: '187, 187, 0', class: 'ansi-yellow'},
            {color: '0, 0, 187', class: 'ansi-blue'},
            {color: '187, 0, 187', class: 'ansi-magenta'},
            {color: '0, 187, 187', class: 'ansi-cyan'},
            {color: '255,255,255', class: 'ansi-white'},
          ],
          [
            {color: '85, 85, 85', class: 'ansi-bright-black'},
            {color: '255, 85, 85', class: 'ansi-bright-red'},
            {color: '0, 255, 0', class: 'ansi-bright-green'},
            {color: '255, 255, 85', class: 'ansi-bright-yellow'},
            {color: '85, 85, 255', class: 'ansi-bright-blue'},
            {color: '255, 85, 255', class: 'ansi-bright-magenta'},
            {color: '85, 255, 255', class: 'ansi-bright-cyan'},
            {color: '255, 255, 255', class: 'ansi-bright-white'},
          ],
        ],
        r = (function () {
          function e() {
            !(function (e, t) {
              if (!(e instanceof t))
                throw TypeError('Cannot call a class as a function');
            })(this, e),
              (this.fg =
                this.bg =
                this.fg_truecolor =
                this.bg_truecolor =
                  null),
              (this.bright = 0),
              (this.decorations = []);
          }
          return (
            t(e, null, [
              {
                key: 'escapeForHtml',
                value: function (t) {
                  return new e().escapeForHtml(t);
                },
              },
              {
                key: 'linkify',
                value: function (t) {
                  return new e().linkify(t);
                },
              },
              {
                key: 'ansiToHtml',
                value: function (t, n) {
                  return new e().ansiToHtml(t, n);
                },
              },
              {
                key: 'ansiToJson',
                value: function (t, n) {
                  return new e().ansiToJson(t, n);
                },
              },
              {
                key: 'ansiToText',
                value: function (t) {
                  return new e().ansiToText(t);
                },
              },
            ]),
            t(e, [
              {
                key: 'setupPalette',
                value: function () {
                  this.PALETTE_COLORS = [];
                  for (var e = 0; e < 2; ++e)
                    for (var t = 0; t < 8; ++t)
                      this.PALETTE_COLORS.push(n[e][t].color);
                  for (
                    var r = [0, 95, 135, 175, 215, 255],
                      o = function (e, t, n) {
                        return r[e] + ', ' + r[t] + ', ' + r[n];
                      },
                      i = 0;
                    i < 6;
                    ++i
                  )
                    for (var s = 0; s < 6; ++s)
                      for (var l = 0; l < 6; ++l)
                        this.PALETTE_COLORS.push(o(i, s, l));
                  for (var a = 8, u = 0; u < 24; ++u, a += 10)
                    this.PALETTE_COLORS.push(o(a, a, a));
                },
              },
              {
                key: 'escapeForHtml',
                value: function (e) {
                  return e.replace(/[&<>\"]/gm, function (e) {
                    return '&' == e
                      ? '&amp;'
                      : '"' == e
                      ? '&quot;'
                      : '<' == e
                      ? '&lt;'
                      : '>' == e
                      ? '&gt;'
                      : '';
                  });
                },
              },
              {
                key: 'linkify',
                value: function (e) {
                  return e.replace(/(https?:\/\/[^\s]+)/gm, function (e) {
                    return '<a href="' + e + '">' + e + '</a>';
                  });
                },
              },
              {
                key: 'ansiToHtml',
                value: function (e, t) {
                  return this.process(e, t, !0);
                },
              },
              {
                key: 'ansiToJson',
                value: function (e, t) {
                  return (
                    ((t = t || {}).json = !0),
                    (t.clearLine = !1),
                    this.process(e, t, !0)
                  );
                },
              },
              {
                key: 'ansiToText',
                value: function (e) {
                  return this.process(e, {}, !1);
                },
              },
              {
                key: 'process',
                value: function (e, t, n) {
                  var r = this,
                    o = e.split(/\033\[/),
                    i = o.shift();
                  null == t && (t = {}), (t.clearLine = /\r/.test(e));
                  var s = o.map(function (e) {
                    return r.processChunk(e, t, n);
                  });
                  if (t && t.json) {
                    var l = this.processChunkJson('');
                    return (
                      (l.content = i),
                      (l.clearLine = t.clearLine),
                      s.unshift(l),
                      t.remove_empty &&
                        (s = s.filter(function (e) {
                          return !e.isEmpty();
                        })),
                      s
                    );
                  }
                  return s.unshift(i), s.join('');
                },
              },
              {
                key: 'processChunkJson',
                value: function (e, t, r) {
                  var o = ((t = void 0 === t ? {} : t).use_classes =
                      void 0 !== t.use_classes && t.use_classes),
                    i = (t.key = o ? 'class' : 'color'),
                    s = {
                      content: e,
                      fg: null,
                      bg: null,
                      fg_truecolor: null,
                      bg_truecolor: null,
                      isInverted: !1,
                      clearLine: t.clearLine,
                      decoration: null,
                      decorations: [],
                      was_processed: !1,
                      isEmpty: function () {
                        return !s.content;
                      },
                    },
                    l = e.match(
                      /^([!\x3c-\x3f]*)([\d;]*)([\x20-\x2c]*[\x40-\x7e])([\s\S]*)/m
                    );
                  if (!l) return s;
                  s.content = l[4];
                  var a = l[2].split(';');
                  if ('' !== l[1] || 'm' !== l[3] || !r) return s;
                  for (var u = this; a.length > 0; ) {
                    var c = parseInt(a.shift());
                    if (isNaN(c) || 0 === c)
                      (u.fg = u.bg = null), (u.decorations = []);
                    else if (1 === c) u.decorations.push('bold');
                    else if (2 === c) u.decorations.push('dim');
                    else if (3 === c) u.decorations.push('italic');
                    else if (4 === c) u.decorations.push('underline');
                    else if (5 === c) u.decorations.push('blink');
                    else if (7 === c) u.decorations.push('reverse');
                    else if (8 === c) u.decorations.push('hidden');
                    else if (9 === c) u.decorations.push('strikethrough');
                    else if (21 === c) u.removeDecoration('bold');
                    else if (22 === c)
                      u.removeDecoration('bold'), u.removeDecoration('dim');
                    else if (23 === c) u.removeDecoration('italic');
                    else if (24 === c) u.removeDecoration('underline');
                    else if (25 === c) u.removeDecoration('blink');
                    else if (27 === c) u.removeDecoration('reverse');
                    else if (28 === c) u.removeDecoration('hidden');
                    else if (29 === c) u.removeDecoration('strikethrough');
                    else if (39 === c) u.fg = null;
                    else if (49 === c) u.bg = null;
                    else if (c >= 30 && c < 38) u.fg = n[0][c % 10][i];
                    else if (c >= 90 && c < 98) u.fg = n[1][c % 10][i];
                    else if (c >= 40 && c < 48) u.bg = n[0][c % 10][i];
                    else if (c >= 100 && c < 108) u.bg = n[1][c % 10][i];
                    else if (38 === c || 48 === c) {
                      var f = 38 === c;
                      if (a.length >= 1) {
                        var d = a.shift();
                        if ('5' === d && a.length >= 1) {
                          var p = parseInt(a.shift());
                          if (p >= 0 && p <= 255) {
                            if (o) {
                              var h =
                                p >= 16
                                  ? 'ansi-palette-' + p
                                  : n[p > 7 ? 1 : 0][p % 8].class;
                              f ? (u.fg = h) : (u.bg = h);
                            } else
                              this.PALETTE_COLORS || u.setupPalette(),
                                f
                                  ? (u.fg = this.PALETTE_COLORS[p])
                                  : (u.bg = this.PALETTE_COLORS[p]);
                          }
                        } else if ('2' === d && a.length >= 3) {
                          var m = parseInt(a.shift()),
                            g = parseInt(a.shift()),
                            v = parseInt(a.shift());
                          if (
                            m >= 0 &&
                            m <= 255 &&
                            g >= 0 &&
                            g <= 255 &&
                            v >= 0 &&
                            v <= 255
                          ) {
                            var y = m + ', ' + g + ', ' + v;
                            o
                              ? f
                                ? ((u.fg = 'ansi-truecolor'),
                                  (u.fg_truecolor = y))
                                : ((u.bg = 'ansi-truecolor'),
                                  (u.bg_truecolor = y))
                              : f
                              ? (u.fg = y)
                              : (u.bg = y);
                          }
                        }
                      }
                    }
                  }
                  return (
                    (null === u.fg &&
                      null === u.bg &&
                      0 === u.decorations.length) ||
                      ((s.fg = u.fg),
                      (s.bg = u.bg),
                      (s.fg_truecolor = u.fg_truecolor),
                      (s.bg_truecolor = u.bg_truecolor),
                      (s.decorations = u.decorations),
                      (s.decoration = u.decorations.slice(-1).pop() || null),
                      (s.was_processed = !0)),
                    s
                  );
                },
              },
              {
                key: 'processChunk',
                value: function (e, t, r) {
                  var o = this;
                  t = t || {};
                  var i = this.processChunkJson(e, t, r),
                    s = t.use_classes;
                  if (
                    ((i.decorations = i.decorations.filter(function (e) {
                      if ('reverse' === e) {
                        i.fg || (i.fg = n[0][7][s ? 'class' : 'color']),
                          i.bg || (i.bg = n[0][0][s ? 'class' : 'color']);
                        var t = i.fg;
                        (i.fg = i.bg), (i.bg = t);
                        var r = i.fg_truecolor;
                        return (
                          (i.fg_truecolor = i.bg_truecolor),
                          (i.bg_truecolor = r),
                          (i.isInverted = !0),
                          !1
                        );
                      }
                      return !0;
                    })),
                    t.json)
                  )
                    return i;
                  if (i.isEmpty()) return '';
                  if (!i.was_processed) return i.content;
                  var l = [],
                    a = [],
                    u = [],
                    c = {},
                    f = function (e) {
                      var t = [],
                        n = void 0;
                      for (n in e)
                        e.hasOwnProperty(n) &&
                          t.push(
                            'data-' + n + '="' + o.escapeForHtml(e[n]) + '"'
                          );
                      return t.length > 0 ? ' ' + t.join(' ') : '';
                    };
                  return (i.isInverted && (c['ansi-is-inverted'] = 'true'),
                  i.fg &&
                    (s
                      ? (l.push(i.fg + '-fg'),
                        null !== i.fg_truecolor &&
                          ((c['ansi-truecolor-fg'] = i.fg_truecolor),
                          (i.fg_truecolor = null)))
                      : l.push('color:rgb(' + i.fg + ')')),
                  i.bg &&
                    (s
                      ? (l.push(i.bg + '-bg'),
                        null !== i.bg_truecolor &&
                          ((c['ansi-truecolor-bg'] = i.bg_truecolor),
                          (i.bg_truecolor = null)))
                      : l.push('background-color:rgb(' + i.bg + ')')),
                  i.decorations.forEach(function (e) {
                    if (s) {
                      a.push('ansi-' + e);
                      return;
                    }
                    'bold' === e
                      ? a.push('font-weight:bold')
                      : 'dim' === e
                      ? a.push('opacity:0.5')
                      : 'italic' === e
                      ? a.push('font-style:italic')
                      : 'hidden' === e
                      ? a.push('visibility:hidden')
                      : 'strikethrough' === e
                      ? u.push('line-through')
                      : u.push(e);
                  }),
                  u.length && a.push('text-decoration:' + u.join(' ')),
                  s)
                    ? '<span class="' +
                        l.concat(a).join(' ') +
                        '"' +
                        f(c) +
                        '>' +
                        i.content +
                        '</span>'
                    : '<span style="' +
                        l.concat(a).join(';') +
                        '"' +
                        f(c) +
                        '>' +
                        i.content +
                        '</span>';
                },
              },
              {
                key: 'removeDecoration',
                value: function (e) {
                  var t = this.decorations.indexOf(e);
                  t >= 0 && this.decorations.splice(t, 1);
                },
              },
            ]),
            e
          );
        })();
      e.exports = r;
    },
    68699: function (e) {
      function t(e) {
        if (!e) return '';
        if (!/\r/.test(e)) return e;
        for (e = e.replace(/\r+\n/gm, '\n'); /\r./.test(e); )
          e = e.replace(/^([^\r\n]*)\r+([^\r\n]+)/gm, function (e, t, n) {
            return n + t.slice(n.length);
          });
        return e;
      }
      function n(e) {
        if (!/\r/.test(e)) return e;
        for (var t = e.split('\r'), n = []; t.length > 0; ) {
          var r = (function (e) {
            for (var t = 0, n = 0; n < e.length; n++)
              e[t].length <= e[n].length && (t = n);
            return t;
          })(t);
          n.push(t[r]), (t = t.slice(r + 1));
        }
        return n.join('\r');
      }
      (e.exports = t),
        (e.exports.escapeCarriageReturn = t),
        (e.exports.escapeCarriageReturnSafe = function (e) {
          if (!e) return '';
          if (!/\r/.test(e)) return e;
          if (!/\n/.test(e)) return n(e);
          var r = (e = e.replace(/\r+\n/gm, '\n')).lastIndexOf('\n');
          return t(e.slice(0, r)) + '\n' + n(e.slice(r + 1));
        });
    },
    66337: function () {
      !(function () {
        'use strict';
        if ('object' == typeof window) {
          if (
            'IntersectionObserver' in window &&
            'IntersectionObserverEntry' in window &&
            'intersectionRatio' in window.IntersectionObserverEntry.prototype
          ) {
            'isIntersecting' in window.IntersectionObserverEntry.prototype ||
              Object.defineProperty(
                window.IntersectionObserverEntry.prototype,
                'isIntersecting',
                {
                  get: function () {
                    return this.intersectionRatio > 0;
                  },
                }
              );
            return;
          }
          var e = window.document,
            t = [],
            n = null,
            r = null;
          (i.prototype.THROTTLE_TIMEOUT = 100),
            (i.prototype.POLL_INTERVAL = null),
            (i.prototype.USE_MUTATION_OBSERVER = !0),
            (i._setupCrossOriginUpdater = function () {
              return (
                n ||
                  (n = function (e, n) {
                    (r = e && n ? f(e, n) : u()),
                      t.forEach(function (e) {
                        e._checkForIntersections();
                      });
                  }),
                n
              );
            }),
            (i._resetCrossOriginUpdater = function () {
              (n = null), (r = null);
            }),
            (i.prototype.observe = function (e) {
              if (
                !this._observationTargets.some(function (t) {
                  return t.element == e;
                })
              ) {
                if (!(e && 1 == e.nodeType))
                  throw Error('target must be an Element');
                this._registerInstance(),
                  this._observationTargets.push({element: e, entry: null}),
                  this._monitorIntersections(e.ownerDocument),
                  this._checkForIntersections();
              }
            }),
            (i.prototype.unobserve = function (e) {
              (this._observationTargets = this._observationTargets.filter(
                function (t) {
                  return t.element != e;
                }
              )),
                this._unmonitorIntersections(e.ownerDocument),
                0 == this._observationTargets.length &&
                  this._unregisterInstance();
            }),
            (i.prototype.disconnect = function () {
              (this._observationTargets = []),
                this._unmonitorAllIntersections(),
                this._unregisterInstance();
            }),
            (i.prototype.takeRecords = function () {
              var e = this._queuedEntries.slice();
              return (this._queuedEntries = []), e;
            }),
            (i.prototype._initThresholds = function (e) {
              var t = e || [0];
              return (
                Array.isArray(t) || (t = [t]),
                t.sort().filter(function (e, t, n) {
                  if ('number' != typeof e || isNaN(e) || e < 0 || e > 1)
                    throw Error(
                      'threshold must be a number between 0 and 1 inclusively'
                    );
                  return e !== n[t - 1];
                })
              );
            }),
            (i.prototype._parseRootMargin = function (e) {
              var t = (e || '0px').split(/\s+/).map(function (e) {
                var t = /^(-?\d*\.?\d+)(px|%)$/.exec(e);
                if (!t)
                  throw Error(
                    'rootMargin must be specified in pixels or percent'
                  );
                return {value: parseFloat(t[1]), unit: t[2]};
              });
              return (
                (t[1] = t[1] || t[0]),
                (t[2] = t[2] || t[0]),
                (t[3] = t[3] || t[1]),
                t
              );
            }),
            (i.prototype._monitorIntersections = function (t) {
              var n = t.defaultView;
              if (n && -1 == this._monitoringDocuments.indexOf(t)) {
                var r = this._checkForIntersections,
                  o = null,
                  i = null;
                if (
                  (this.POLL_INTERVAL
                    ? (o = n.setInterval(r, this.POLL_INTERVAL))
                    : (s(n, 'resize', r, !0),
                      s(t, 'scroll', r, !0),
                      this.USE_MUTATION_OBSERVER &&
                        'MutationObserver' in n &&
                        (i = new n.MutationObserver(r)).observe(t, {
                          attributes: !0,
                          childList: !0,
                          characterData: !0,
                          subtree: !0,
                        })),
                  this._monitoringDocuments.push(t),
                  this._monitoringUnsubscribes.push(function () {
                    var e = t.defaultView;
                    e && (o && e.clearInterval(o), l(e, 'resize', r, !0)),
                      l(t, 'scroll', r, !0),
                      i && i.disconnect();
                  }),
                  t != ((this.root && this.root.ownerDocument) || e))
                ) {
                  var a = h(t);
                  a && this._monitorIntersections(a.ownerDocument);
                }
              }
            }),
            (i.prototype._unmonitorIntersections = function (t) {
              var n = this._monitoringDocuments.indexOf(t);
              if (-1 != n) {
                var r = (this.root && this.root.ownerDocument) || e;
                if (
                  !this._observationTargets.some(function (e) {
                    var n = e.element.ownerDocument;
                    if (n == t) return !0;
                    for (; n && n != r; ) {
                      var o = h(n);
                      if ((n = o && o.ownerDocument) == t) return !0;
                    }
                    return !1;
                  })
                ) {
                  var o = this._monitoringUnsubscribes[n];
                  if (
                    (this._monitoringDocuments.splice(n, 1),
                    this._monitoringUnsubscribes.splice(n, 1),
                    o(),
                    t != r)
                  ) {
                    var i = h(t);
                    i && this._unmonitorIntersections(i.ownerDocument);
                  }
                }
              }
            }),
            (i.prototype._unmonitorAllIntersections = function () {
              var e = this._monitoringUnsubscribes.slice(0);
              (this._monitoringDocuments.length = 0),
                (this._monitoringUnsubscribes.length = 0);
              for (var t = 0; t < e.length; t++) e[t]();
            }),
            (i.prototype._checkForIntersections = function () {
              if (this.root || !n || r) {
                var e = this._rootIsInDom(),
                  t = e ? this._getRootRect() : u();
                this._observationTargets.forEach(function (r) {
                  var i = r.element,
                    s = a(i),
                    l = this._rootContainsTarget(i),
                    u = r.entry,
                    c =
                      e && l && this._computeTargetAndRootIntersection(i, s, t),
                    f = (r.entry = new o({
                      time:
                        window.performance &&
                        performance.now &&
                        performance.now(),
                      target: i,
                      boundingClientRect: s,
                      rootBounds: n && !this.root ? null : t,
                      intersectionRect: c,
                    }));
                  u
                    ? e && l
                      ? this._hasCrossedThreshold(u, f) &&
                        this._queuedEntries.push(f)
                      : u && u.isIntersecting && this._queuedEntries.push(f)
                    : this._queuedEntries.push(f);
                }, this),
                  this._queuedEntries.length &&
                    this._callback(this.takeRecords(), this);
              }
            }),
            (i.prototype._computeTargetAndRootIntersection = function (
              t,
              o,
              i
            ) {
              if ('none' != window.getComputedStyle(t).display) {
                for (var s = o, l = p(t), u = !1; !u && l; ) {
                  var c = null,
                    d = 1 == l.nodeType ? window.getComputedStyle(l) : {};
                  if ('none' == d.display) return null;
                  if (l == this.root || 9 == l.nodeType) {
                    if (((u = !0), l == this.root || l == e))
                      n && !this.root
                        ? r && (0 != r.width || 0 != r.height)
                          ? (c = r)
                          : ((l = null), (c = null), (s = null))
                        : (c = i);
                    else {
                      var h = p(l),
                        m = h && a(h),
                        g =
                          h && this._computeTargetAndRootIntersection(h, m, i);
                      m && g
                        ? ((l = h), (c = f(m, g)))
                        : ((l = null), (s = null));
                    }
                  } else {
                    var v = l.ownerDocument;
                    l != v.body &&
                      l != v.documentElement &&
                      'visible' != d.overflow &&
                      (c = a(l));
                  }
                  if (
                    (c &&
                      (s = (function (e, t) {
                        var n = Math.max(e.top, t.top),
                          r = Math.min(e.bottom, t.bottom),
                          o = Math.max(e.left, t.left),
                          i = Math.min(e.right, t.right),
                          s = i - o,
                          l = r - n;
                        return (
                          (s >= 0 &&
                            l >= 0 && {
                              top: n,
                              bottom: r,
                              left: o,
                              right: i,
                              width: s,
                              height: l,
                            }) ||
                          null
                        );
                      })(c, s)),
                    !s)
                  )
                    break;
                  l = l && p(l);
                }
                return s;
              }
            }),
            (i.prototype._getRootRect = function () {
              var t;
              if (this.root) t = a(this.root);
              else {
                var n = e.documentElement,
                  r = e.body;
                t = {
                  top: 0,
                  left: 0,
                  right: n.clientWidth || r.clientWidth,
                  width: n.clientWidth || r.clientWidth,
                  bottom: n.clientHeight || r.clientHeight,
                  height: n.clientHeight || r.clientHeight,
                };
              }
              return this._expandRectByRootMargin(t);
            }),
            (i.prototype._expandRectByRootMargin = function (e) {
              var t = this._rootMarginValues.map(function (t, n) {
                  return 'px' == t.unit
                    ? t.value
                    : (t.value * (n % 2 ? e.width : e.height)) / 100;
                }),
                n = {
                  top: e.top - t[0],
                  right: e.right + t[1],
                  bottom: e.bottom + t[2],
                  left: e.left - t[3],
                };
              return (
                (n.width = n.right - n.left), (n.height = n.bottom - n.top), n
              );
            }),
            (i.prototype._hasCrossedThreshold = function (e, t) {
              var n = e && e.isIntersecting ? e.intersectionRatio || 0 : -1,
                r = t.isIntersecting ? t.intersectionRatio || 0 : -1;
              if (n !== r)
                for (var o = 0; o < this.thresholds.length; o++) {
                  var i = this.thresholds[o];
                  if (i == n || i == r || i < n != i < r) return !0;
                }
            }),
            (i.prototype._rootIsInDom = function () {
              return !this.root || d(e, this.root);
            }),
            (i.prototype._rootContainsTarget = function (t) {
              return (
                d(this.root || e, t) &&
                (!this.root || this.root.ownerDocument == t.ownerDocument)
              );
            }),
            (i.prototype._registerInstance = function () {
              0 > t.indexOf(this) && t.push(this);
            }),
            (i.prototype._unregisterInstance = function () {
              var e = t.indexOf(this);
              -1 != e && t.splice(e, 1);
            }),
            (window.IntersectionObserver = i),
            (window.IntersectionObserverEntry = o);
        }
        function o(e) {
          (this.time = e.time),
            (this.target = e.target),
            (this.rootBounds = c(e.rootBounds)),
            (this.boundingClientRect = c(e.boundingClientRect)),
            (this.intersectionRect = c(e.intersectionRect || u())),
            (this.isIntersecting = !!e.intersectionRect);
          var t = this.boundingClientRect,
            n = t.width * t.height,
            r = this.intersectionRect,
            o = r.width * r.height;
          n
            ? (this.intersectionRatio = Number((o / n).toFixed(4)))
            : (this.intersectionRatio = this.isIntersecting ? 1 : 0);
        }
        function i(e, t) {
          var n,
            r,
            o,
            i = t || {};
          if ('function' != typeof e)
            throw Error('callback must be a function');
          if (i.root && 1 != i.root.nodeType)
            throw Error('root must be an Element');
          (this._checkForIntersections =
            ((n = this._checkForIntersections.bind(this)),
            (r = this.THROTTLE_TIMEOUT),
            (o = null),
            function () {
              o ||
                (o = setTimeout(function () {
                  n(), (o = null);
                }, r));
            })),
            (this._callback = e),
            (this._observationTargets = []),
            (this._queuedEntries = []),
            (this._rootMarginValues = this._parseRootMargin(i.rootMargin)),
            (this.thresholds = this._initThresholds(i.threshold)),
            (this.root = i.root || null),
            (this.rootMargin = this._rootMarginValues
              .map(function (e) {
                return e.value + e.unit;
              })
              .join(' ')),
            (this._monitoringDocuments = []),
            (this._monitoringUnsubscribes = []);
        }
        function s(e, t, n, r) {
          'function' == typeof e.addEventListener
            ? e.addEventListener(t, n, r || !1)
            : 'function' == typeof e.attachEvent && e.attachEvent('on' + t, n);
        }
        function l(e, t, n, r) {
          'function' == typeof e.removeEventListener
            ? e.removeEventListener(t, n, r || !1)
            : 'function' == typeof e.detatchEvent &&
              e.detatchEvent('on' + t, n);
        }
        function a(e) {
          var t;
          try {
            t = e.getBoundingClientRect();
          } catch (e) {}
          return t
            ? ((t.width && t.height) ||
                (t = {
                  top: t.top,
                  right: t.right,
                  bottom: t.bottom,
                  left: t.left,
                  width: t.right - t.left,
                  height: t.bottom - t.top,
                }),
              t)
            : u();
        }
        function u() {
          return {top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0};
        }
        function c(e) {
          return !e || 'x' in e
            ? e
            : {
                top: e.top,
                y: e.top,
                bottom: e.bottom,
                left: e.left,
                x: e.left,
                right: e.right,
                width: e.width,
                height: e.height,
              };
        }
        function f(e, t) {
          var n = t.top - e.top,
            r = t.left - e.left;
          return {
            top: n,
            left: r,
            height: t.height,
            width: t.width,
            bottom: n + t.height,
            right: r + t.width,
          };
        }
        function d(e, t) {
          for (var n = t; n; ) {
            if (n == e) return !0;
            n = p(n);
          }
          return !1;
        }
        function p(t) {
          var n = t.parentNode;
          return 9 == t.nodeType && t != e
            ? h(t)
            : n && 11 == n.nodeType && n.host
            ? n.host
            : n && n.assignedSlot
            ? n.assignedSlot.parentNode
            : n;
        }
        function h(e) {
          try {
            return (e.defaultView && e.defaultView.frameElement) || null;
          } catch (e) {
            return null;
          }
        }
      })();
    },
    26961: function (e, t, n) {
      var r,
        o = (function () {
          var e = String.fromCharCode,
            t =
              'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
            n =
              'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$',
            r = {};
          function o(e, t) {
            if (!r[e]) {
              r[e] = {};
              for (var n = 0; n < e.length; n++) r[e][e.charAt(n)] = n;
            }
            return r[e][t];
          }
          var i = {
            compressToBase64: function (e) {
              if (null == e) return '';
              var n = i._compress(e, 6, function (e) {
                return t.charAt(e);
              });
              switch (n.length % 4) {
                default:
                case 0:
                  return n;
                case 1:
                  return n + '===';
                case 2:
                  return n + '==';
                case 3:
                  return n + '=';
              }
            },
            decompressFromBase64: function (e) {
              return null == e
                ? ''
                : '' == e
                ? null
                : i._decompress(e.length, 32, function (n) {
                    return o(t, e.charAt(n));
                  });
            },
            compressToUTF16: function (t) {
              return null == t
                ? ''
                : i._compress(t, 15, function (t) {
                    return e(t + 32);
                  }) + ' ';
            },
            decompressFromUTF16: function (e) {
              return null == e
                ? ''
                : '' == e
                ? null
                : i._decompress(e.length, 16384, function (t) {
                    return e.charCodeAt(t) - 32;
                  });
            },
            compressToUint8Array: function (e) {
              for (
                var t = i.compress(e),
                  n = new Uint8Array(2 * t.length),
                  r = 0,
                  o = t.length;
                r < o;
                r++
              ) {
                var s = t.charCodeAt(r);
                (n[2 * r] = s >>> 8), (n[2 * r + 1] = s % 256);
              }
              return n;
            },
            decompressFromUint8Array: function (t) {
              if (null == t) return i.decompress(t);
              for (var n = Array(t.length / 2), r = 0, o = n.length; r < o; r++)
                n[r] = 256 * t[2 * r] + t[2 * r + 1];
              var s = [];
              return (
                n.forEach(function (t) {
                  s.push(e(t));
                }),
                i.decompress(s.join(''))
              );
            },
            compressToEncodedURIComponent: function (e) {
              return null == e
                ? ''
                : i._compress(e, 6, function (e) {
                    return n.charAt(e);
                  });
            },
            decompressFromEncodedURIComponent: function (e) {
              return null == e
                ? ''
                : '' == e
                ? null
                : ((e = e.replace(/ /g, '+')),
                  i._decompress(e.length, 32, function (t) {
                    return o(n, e.charAt(t));
                  }));
            },
            compress: function (t) {
              return i._compress(t, 16, function (t) {
                return e(t);
              });
            },
            _compress: function (e, t, n) {
              if (null == e) return '';
              var r,
                o,
                i,
                s = {},
                l = {},
                a = '',
                u = '',
                c = '',
                f = 2,
                d = 3,
                p = 2,
                h = [],
                m = 0,
                g = 0;
              for (i = 0; i < e.length; i += 1)
                if (
                  ((a = e.charAt(i)),
                  Object.prototype.hasOwnProperty.call(s, a) ||
                    ((s[a] = d++), (l[a] = !0)),
                  (u = c + a),
                  Object.prototype.hasOwnProperty.call(s, u))
                )
                  c = u;
                else {
                  if (Object.prototype.hasOwnProperty.call(l, c)) {
                    if (256 > c.charCodeAt(0)) {
                      for (r = 0; r < p; r++)
                        (m <<= 1),
                          g == t - 1 ? ((g = 0), h.push(n(m)), (m = 0)) : g++;
                      for (r = 0, o = c.charCodeAt(0); r < 8; r++)
                        (m = (m << 1) | (1 & o)),
                          g == t - 1 ? ((g = 0), h.push(n(m)), (m = 0)) : g++,
                          (o >>= 1);
                    } else {
                      for (r = 0, o = 1; r < p; r++)
                        (m = (m << 1) | o),
                          g == t - 1 ? ((g = 0), h.push(n(m)), (m = 0)) : g++,
                          (o = 0);
                      for (r = 0, o = c.charCodeAt(0); r < 16; r++)
                        (m = (m << 1) | (1 & o)),
                          g == t - 1 ? ((g = 0), h.push(n(m)), (m = 0)) : g++,
                          (o >>= 1);
                    }
                    0 == --f && ((f = Math.pow(2, p)), p++), delete l[c];
                  } else
                    for (r = 0, o = s[c]; r < p; r++)
                      (m = (m << 1) | (1 & o)),
                        g == t - 1 ? ((g = 0), h.push(n(m)), (m = 0)) : g++,
                        (o >>= 1);
                  0 == --f && ((f = Math.pow(2, p)), p++),
                    (s[u] = d++),
                    (c = String(a));
                }
              if ('' !== c) {
                if (Object.prototype.hasOwnProperty.call(l, c)) {
                  if (256 > c.charCodeAt(0)) {
                    for (r = 0; r < p; r++)
                      (m <<= 1),
                        g == t - 1 ? ((g = 0), h.push(n(m)), (m = 0)) : g++;
                    for (r = 0, o = c.charCodeAt(0); r < 8; r++)
                      (m = (m << 1) | (1 & o)),
                        g == t - 1 ? ((g = 0), h.push(n(m)), (m = 0)) : g++,
                        (o >>= 1);
                  } else {
                    for (r = 0, o = 1; r < p; r++)
                      (m = (m << 1) | o),
                        g == t - 1 ? ((g = 0), h.push(n(m)), (m = 0)) : g++,
                        (o = 0);
                    for (r = 0, o = c.charCodeAt(0); r < 16; r++)
                      (m = (m << 1) | (1 & o)),
                        g == t - 1 ? ((g = 0), h.push(n(m)), (m = 0)) : g++,
                        (o >>= 1);
                  }
                  0 == --f && ((f = Math.pow(2, p)), p++), delete l[c];
                } else
                  for (r = 0, o = s[c]; r < p; r++)
                    (m = (m << 1) | (1 & o)),
                      g == t - 1 ? ((g = 0), h.push(n(m)), (m = 0)) : g++,
                      (o >>= 1);
                0 == --f && ((f = Math.pow(2, p)), p++);
              }
              for (r = 0, o = 2; r < p; r++)
                (m = (m << 1) | (1 & o)),
                  g == t - 1 ? ((g = 0), h.push(n(m)), (m = 0)) : g++,
                  (o >>= 1);
              for (;;) {
                if (((m <<= 1), g == t - 1)) {
                  h.push(n(m));
                  break;
                }
                g++;
              }
              return h.join('');
            },
            decompress: function (e) {
              return null == e
                ? ''
                : '' == e
                ? null
                : i._decompress(e.length, 32768, function (t) {
                    return e.charCodeAt(t);
                  });
            },
            _decompress: function (t, n, r) {
              var o,
                i,
                s,
                l,
                a,
                u,
                c,
                f = [],
                d = 4,
                p = 4,
                h = 3,
                m = '',
                g = [],
                v = {val: r(0), position: n, index: 1};
              for (o = 0; o < 3; o += 1) f[o] = o;
              for (s = 0, a = 4, u = 1; u != a; )
                (l = v.val & v.position),
                  (v.position >>= 1),
                  0 == v.position && ((v.position = n), (v.val = r(v.index++))),
                  (s |= (l > 0 ? 1 : 0) * u),
                  (u <<= 1);
              switch (s) {
                case 0:
                  for (s = 0, a = 256, u = 1; u != a; )
                    (l = v.val & v.position),
                      (v.position >>= 1),
                      0 == v.position &&
                        ((v.position = n), (v.val = r(v.index++))),
                      (s |= (l > 0 ? 1 : 0) * u),
                      (u <<= 1);
                  c = e(s);
                  break;
                case 1:
                  for (s = 0, a = 65536, u = 1; u != a; )
                    (l = v.val & v.position),
                      (v.position >>= 1),
                      0 == v.position &&
                        ((v.position = n), (v.val = r(v.index++))),
                      (s |= (l > 0 ? 1 : 0) * u),
                      (u <<= 1);
                  c = e(s);
                  break;
                case 2:
                  return '';
              }
              for (f[3] = c, i = c, g.push(c); ; ) {
                if (v.index > t) return '';
                for (s = 0, a = Math.pow(2, h), u = 1; u != a; )
                  (l = v.val & v.position),
                    (v.position >>= 1),
                    0 == v.position &&
                      ((v.position = n), (v.val = r(v.index++))),
                    (s |= (l > 0 ? 1 : 0) * u),
                    (u <<= 1);
                switch ((c = s)) {
                  case 0:
                    for (s = 0, a = 256, u = 1; u != a; )
                      (l = v.val & v.position),
                        (v.position >>= 1),
                        0 == v.position &&
                          ((v.position = n), (v.val = r(v.index++))),
                        (s |= (l > 0 ? 1 : 0) * u),
                        (u <<= 1);
                    (f[p++] = e(s)), (c = p - 1), d--;
                    break;
                  case 1:
                    for (s = 0, a = 65536, u = 1; u != a; )
                      (l = v.val & v.position),
                        (v.position >>= 1),
                        0 == v.position &&
                          ((v.position = n), (v.val = r(v.index++))),
                        (s |= (l > 0 ? 1 : 0) * u),
                        (u <<= 1);
                    (f[p++] = e(s)), (c = p - 1), d--;
                    break;
                  case 2:
                    return g.join('');
                }
                if ((0 == d && ((d = Math.pow(2, h)), h++), f[c])) m = f[c];
                else {
                  if (c !== p) return null;
                  m = i + i.charAt(0);
                }
                g.push(m),
                  (f[p++] = i + m.charAt(0)),
                  d--,
                  (i = m),
                  0 == d && ((d = Math.pow(2, h)), h++);
              }
            },
          };
          return i;
        })();
      void 0 !==
        (r = function () {
          return o;
        }.call(t, n, t, e)) && (e.exports = r);
    },
    45383: function (e, t, n) {
      'use strict';
      n.d(t, {
        at: function () {
          return e9;
        },
        f$: function () {
          return L;
        },
        fE: function () {
          return eq;
        },
        m8: function () {
          return b;
        },
        wQ: function () {
          return tn;
        },
        xi: function () {
          return te;
        },
      });
      var r = n(78120),
        o = n(47421),
        i = n(59119),
        s = n(41113);
      let l = (e) => {
        let {state: t} = e,
          n = t.doc.lineAt(t.selection.main.from),
          r = d(e.state, n.from);
        return r.line ? u(e) : !!r.block && f(e);
      };
      function a(e, t) {
        return ({state: n, dispatch: r}) => {
          if (n.readOnly) return !1;
          let o = e(t, n);
          return !!o && (r(n.update(o)), !0);
        };
      }
      let u = a(function (e, t, n = t.selection.ranges) {
          let r = [],
            o = -1;
          for (let {from: e, to: i} of n) {
            let n = r.length,
              s = 1e9,
              l = d(t, e).line;
            if (l) {
              for (let n = e; n <= i; ) {
                let a = t.doc.lineAt(n);
                if (a.from > o && (e == i || i > a.from)) {
                  o = a.from;
                  let e = /^\s*/.exec(a.text)[0].length,
                    t = e == a.length,
                    n = a.text.slice(e, e + l.length) == l ? e : -1;
                  e < a.text.length && e < s && (s = e),
                    r.push({
                      line: a,
                      comment: n,
                      token: l,
                      indent: e,
                      empty: t,
                      single: !1,
                    });
                }
                n = a.to + 1;
              }
              if (s < 1e9)
                for (let e = n; e < r.length; e++)
                  r[e].indent < r[e].line.text.length && (r[e].indent = s);
              r.length == n + 1 && (r[n].single = !0);
            }
          }
          if (
            2 != e &&
            r.some((e) => e.comment < 0 && (!e.empty || e.single))
          ) {
            let e = [];
            for (let {line: t, token: n, indent: o, empty: i, single: s} of r)
              (s || !i) && e.push({from: t.from + o, insert: n + ' '});
            let n = t.changes(e);
            return {changes: n, selection: t.selection.map(n, 1)};
          }
          if (1 != e && r.some((e) => e.comment >= 0)) {
            let e = [];
            for (let {line: t, comment: n, token: o} of r)
              if (n >= 0) {
                let r = t.from + n,
                  i = r + o.length;
                ' ' == t.text[i - t.from] && i++, e.push({from: r, to: i});
              }
            return {changes: e};
          }
          return null;
        }, 0),
        c = a(p, 0),
        f = a(
          (e, t) =>
            p(
              e,
              t,
              (function (e) {
                let t = [];
                for (let n of e.selection.ranges) {
                  let r = e.doc.lineAt(n.from),
                    o = n.to <= r.to ? r : e.doc.lineAt(n.to),
                    i = t.length - 1;
                  i >= 0 && t[i].to > r.from
                    ? (t[i].to = o.to)
                    : t.push({from: r.from, to: o.to});
                }
                return t;
              })(t)
            ),
          0
        );
      function d(e, t) {
        let n = e.languageDataAt('commentTokens', t);
        return n.length ? n[0] : {};
      }
      function p(e, t, n = t.selection.ranges) {
        let r = n.map((e) => d(t, e.from).block);
        if (!r.every((e) => e)) return null;
        let o = n.map((e, n) =>
          (function (e, {open: t, close: n}, r, o) {
            let i,
              s,
              l = e.sliceDoc(r - 50, r),
              a = e.sliceDoc(o, o + 50),
              u = /\s*$/.exec(l)[0].length,
              c = /^\s*/.exec(a)[0].length,
              f = l.length - u;
            if (l.slice(f - t.length, f) == t && a.slice(c, c + n.length) == n)
              return {
                open: {pos: r - u, margin: u && 1},
                close: {pos: o + c, margin: c && 1},
              };
            o - r <= 100
              ? (i = s = e.sliceDoc(r, o))
              : ((i = e.sliceDoc(r, r + 50)), (s = e.sliceDoc(o - 50, o)));
            let d = /^\s*/.exec(i)[0].length,
              p = /\s*$/.exec(s)[0].length,
              h = s.length - p - n.length;
            return i.slice(d, d + t.length) == t &&
              s.slice(h, h + n.length) == n
              ? {
                  open: {
                    pos: r + d + t.length,
                    margin: /\s/.test(i.charAt(d + t.length)) ? 1 : 0,
                  },
                  close: {
                    pos: o - p - n.length,
                    margin: /\s/.test(s.charAt(h - 1)) ? 1 : 0,
                  },
                }
              : null;
          })(t, r[n], e.from, e.to)
        );
        if (2 != e && !o.every((e) => e))
          return {
            changes: t.changes(
              n.map((e, t) =>
                o[t]
                  ? []
                  : [
                      {from: e.from, insert: r[t].open + ' '},
                      {from: e.to, insert: ' ' + r[t].close},
                    ]
              )
            ),
          };
        if (1 != e && o.some((e) => e)) {
          let e = [];
          for (let t = 0, n; t < o.length; t++)
            if ((n = o[t])) {
              let o = r[t],
                {open: i, close: s} = n;
              e.push(
                {from: i.pos - o.open.length, to: i.pos + i.margin},
                {from: s.pos - s.margin, to: s.pos + o.close.length}
              );
            }
          return {changes: e};
        }
        return null;
      }
      let h = r.q6.define(),
        m = r.q6.define(),
        g = r.r$.define(),
        v = r.r$.define({
          combine: (e) =>
            (0, r.BO)(
              e,
              {minDepth: 100, newGroupDelay: 500, joinToEvent: (e, t) => t},
              {
                minDepth: Math.max,
                newGroupDelay: Math.min,
                joinToEvent: (e, t) => (n, r) => e(n, r) || t(n, r),
              }
            ),
        }),
        y = r.QQ.define({
          create: () => C.empty,
          update(e, t) {
            let n = t.state.facet(v),
              o = t.annotation(h);
            if (o) {
              var i;
              let s;
              let l = t.docChanged
                  ? r.jT.single(
                      ((i = t.changes),
                      (s = 0),
                      i.iterChangedRanges((e, t) => (s = t)),
                      s)
                    )
                  : void 0,
                a = E.fromTransaction(t, l),
                u = o.side,
                c = 0 == u ? e.undone : e.done;
              return (
                (c = a
                  ? A(c, c.length, n.minDepth, a)
                  : R(c, t.startState.selection)),
                new C(0 == u ? o.rest : c, 0 == u ? c : o.rest)
              );
            }
            let s = t.annotation(m);
            if (
              (('full' == s || 'before' == s) && (e = e.isolate()),
              !1 === t.annotation(r.YW.addToHistory))
            )
              return t.changes.empty ? e : e.addMapping(t.changes.desc);
            let l = E.fromTransaction(t),
              a = t.annotation(r.YW.time),
              u = t.annotation(r.YW.userEvent);
            return (
              l
                ? (e = e.addChanges(l, a, u, n, t))
                : t.selection &&
                  (e = e.addSelection(
                    t.startState.selection,
                    a,
                    u,
                    n.newGroupDelay
                  )),
              ('full' == s || 'after' == s) && (e = e.isolate()),
              e
            );
          },
          toJSON: (e) => ({
            done: e.done.map((e) => e.toJSON()),
            undone: e.undone.map((e) => e.toJSON()),
          }),
          fromJSON: (e) =>
            new C(e.done.map(E.fromJSON), e.undone.map(E.fromJSON)),
        });
      function b(e = {}) {
        return [
          y,
          v.of(e),
          o.tk.domEventHandlers({
            beforeinput(e, t) {
              let n =
                'historyUndo' == e.inputType
                  ? x
                  : 'historyRedo' == e.inputType
                  ? O
                  : null;
              return !!n && (e.preventDefault(), n(t));
            },
          }),
        ];
      }
      function w(e, t) {
        return function ({state: n, dispatch: r}) {
          if (!t && n.readOnly) return !1;
          let o = n.field(y, !1);
          if (!o) return !1;
          let i = o.pop(e, n, t);
          return !!i && (r(i), !0);
        };
      }
      let x = w(0, !1),
        O = w(1, !1),
        k = w(0, !0),
        S = w(1, !0);
      class E {
        constructor(e, t, n, r, o) {
          (this.changes = e),
            (this.effects = t),
            (this.mapped = n),
            (this.startSelection = r),
            (this.selectionsAfter = o);
        }
        setSelAfter(e) {
          return new E(
            this.changes,
            this.effects,
            this.mapped,
            this.startSelection,
            e
          );
        }
        toJSON() {
          var e, t, n;
          return {
            changes:
              null === (e = this.changes) || void 0 === e ? void 0 : e.toJSON(),
            mapped:
              null === (t = this.mapped) || void 0 === t ? void 0 : t.toJSON(),
            startSelection:
              null === (n = this.startSelection) || void 0 === n
                ? void 0
                : n.toJSON(),
            selectionsAfter: this.selectionsAfter.map((e) => e.toJSON()),
          };
        }
        static fromJSON(e) {
          return new E(
            e.changes && r.as.fromJSON(e.changes),
            [],
            e.mapped && r.n0.fromJSON(e.mapped),
            e.startSelection && r.jT.fromJSON(e.startSelection),
            e.selectionsAfter.map(r.jT.fromJSON)
          );
        }
        static fromTransaction(e, t) {
          let n = _;
          for (let t of e.startState.facet(g)) {
            let r = t(e);
            r.length && (n = n.concat(r));
          }
          return !n.length && e.changes.empty
            ? null
            : new E(
                e.changes.invert(e.startState.doc),
                n,
                void 0,
                t || e.startState.selection,
                _
              );
        }
        static selection(e) {
          return new E(void 0, _, void 0, void 0, e);
        }
      }
      function A(e, t, n, r) {
        let o = e.slice(t + 1 > n + 20 ? t - n - 1 : 0, t);
        return o.push(r), o;
      }
      function T(e, t) {
        return e.length ? (t.length ? e.concat(t) : e) : t;
      }
      let _ = [];
      function R(e, t) {
        if (!e.length) return [E.selection([t])];
        {
          let n = e[e.length - 1],
            r = n.selectionsAfter.slice(
              Math.max(0, n.selectionsAfter.length - 200)
            );
          return r.length && r[r.length - 1].eq(t)
            ? e
            : (r.push(t), A(e, e.length - 1, 1e9, n.setSelAfter(r)));
        }
      }
      function I(e, t) {
        if (!e.length) return e;
        let n = e.length,
          o = _;
        for (; n; ) {
          let i = (function (e, t, n) {
            let o = T(
              e.selectionsAfter.length
                ? e.selectionsAfter.map((e) => e.map(t))
                : _,
              n
            );
            if (!e.changes) return E.selection(o);
            let i = e.changes.map(t),
              s = t.mapDesc(e.changes, !0),
              l = e.mapped ? e.mapped.composeDesc(s) : s;
            return new E(
              i,
              r.Py.mapEffects(e.effects, t),
              l,
              e.startSelection.map(s),
              o
            );
          })(e[n - 1], t, o);
          if ((i.changes && !i.changes.empty) || i.effects.length) {
            let t = e.slice(0, n);
            return (t[n - 1] = i), t;
          }
          (t = i.mapped), n--, (o = i.selectionsAfter);
        }
        return o.length ? [E.selection(o)] : _;
      }
      let D = /^(input\.type|delete)($|\.)/;
      class C {
        constructor(e, t, n = 0, r) {
          (this.done = e),
            (this.undone = t),
            (this.prevTime = n),
            (this.prevUserEvent = r);
        }
        isolate() {
          return this.prevTime ? new C(this.done, this.undone) : this;
        }
        addChanges(e, t, n, r, o) {
          var i, s;
          let l,
            a,
            u = this.done,
            c = u[u.length - 1];
          return (
            (u =
              c &&
              c.changes &&
              !c.changes.empty &&
              e.changes &&
              (!n || D.test(n)) &&
              ((!c.selectionsAfter.length &&
                t - this.prevTime < r.newGroupDelay &&
                r.joinToEvent(
                  o,
                  ((i = c.changes),
                  (s = e.changes),
                  (l = []),
                  (a = !1),
                  i.iterChangedRanges((e, t) => l.push(e, t)),
                  s.iterChangedRanges((e, t, n, r) => {
                    for (let e = 0; e < l.length; ) {
                      let t = l[e++],
                        o = l[e++];
                      r >= t && n <= o && (a = !0);
                    }
                  }),
                  a)
                )) ||
                'input.type.compose' == n)
                ? A(
                    u,
                    u.length - 1,
                    r.minDepth,
                    new E(
                      e.changes.compose(c.changes),
                      T(e.effects, c.effects),
                      c.mapped,
                      c.startSelection,
                      _
                    )
                  )
                : A(u, u.length, r.minDepth, e)),
            new C(u, _, t, n)
          );
        }
        addSelection(e, t, n, r) {
          var o;
          let i = this.done.length
            ? this.done[this.done.length - 1].selectionsAfter
            : _;
          return i.length > 0 &&
            t - this.prevTime < r &&
            n == this.prevUserEvent &&
            n &&
            /^select($|\.)/.test(n) &&
            (o = i[i.length - 1]).ranges.length == e.ranges.length &&
            0 === o.ranges.filter((t, n) => t.empty != e.ranges[n].empty).length
            ? this
            : new C(R(this.done, e), this.undone, t, n);
        }
        addMapping(e) {
          return new C(
            I(this.done, e),
            I(this.undone, e),
            this.prevTime,
            this.prevUserEvent
          );
        }
        pop(e, t, n) {
          let r = 0 == e ? this.done : this.undone;
          if (0 == r.length) return null;
          let o = r[r.length - 1];
          if (n && o.selectionsAfter.length) {
            var i;
            let n, s;
            return t.update({
              selection: o.selectionsAfter[o.selectionsAfter.length - 1],
              annotations: h.of({
                side: e,
                rest:
                  ((n = (i = r)[i.length - 1]),
                  ((s = i.slice())[i.length - 1] = n.setSelAfter(
                    n.selectionsAfter.slice(0, n.selectionsAfter.length - 1)
                  )),
                  s),
              }),
              userEvent: 0 == e ? 'select.undo' : 'select.redo',
              scrollIntoView: !0,
            });
          }
          if (!o.changes) return null;
          {
            let n = 1 == r.length ? _ : r.slice(0, r.length - 1);
            return (
              o.mapped && (n = I(n, o.mapped)),
              t.update({
                changes: o.changes,
                selection: o.startSelection,
                effects: o.effects,
                annotations: h.of({side: e, rest: n}),
                filter: !1,
                userEvent: 0 == e ? 'undo' : 'redo',
                scrollIntoView: !0,
              })
            );
          }
        }
      }
      C.empty = new C(_, _);
      let L = [
        {key: 'Mod-z', run: x, preventDefault: !0},
        {key: 'Mod-y', mac: 'Mod-Shift-z', run: O, preventDefault: !0},
        {linux: 'Ctrl-Shift-z', run: O, preventDefault: !0},
        {key: 'Mod-u', run: k, preventDefault: !0},
        {key: 'Alt-u', mac: 'Mod-Shift-u', run: S, preventDefault: !0},
      ];
      function j(e, t) {
        return r.jT.create(e.ranges.map(t), e.mainIndex);
      }
      function M(e, t) {
        return e.update({
          selection: t,
          scrollIntoView: !0,
          userEvent: 'select',
        });
      }
      function N({state: e, dispatch: t}, n) {
        let r = j(e.selection, n);
        return !r.eq(e.selection) && (t(M(e, r)), !0);
      }
      function P(e, t) {
        return r.jT.cursor(t ? e.to : e.from);
      }
      function U(e, t) {
        return N(e, (n) => (n.empty ? e.moveByChar(n, t) : P(n, t)));
      }
      function B(e) {
        return e.textDirectionAt(e.state.selection.main.head) == o.Nm.LTR;
      }
      let F = (e) => U(e, !B(e)),
        H = (e) => U(e, B(e));
      function V(e, t) {
        return N(e, (n) => (n.empty ? e.moveByGroup(n, t) : P(n, t)));
      }
      let J = (e) => V(e, !B(e)),
        q = (e) => V(e, B(e));
      function $(e, t, n) {
        let o,
          l,
          a = (0, i.qz)(e).resolveInner(t.head),
          u = n ? s.md.closedBy : s.md.openedBy;
        for (let r = t.head; ; ) {
          let t = n ? a.childAfter(r) : a.childBefore(r);
          if (!t) break;
          !(function (e, t, n) {
            if (t.type.prop(n)) return !0;
            let r = t.to - t.from;
            return (
              (r && (r > 2 || /[^\s,.;:]/.test(e.sliceDoc(t.from, t.to)))) ||
              t.firstChild
            );
          })(e, t, u)
            ? (r = n ? t.to : t.from)
            : (a = t);
        }
        return (
          (l =
            a.type.prop(u) &&
            (o = n ? (0, i.Um)(e, a.from, 1) : (0, i.Um)(e, a.to, -1)) &&
            o.matched
              ? n
                ? o.end.to
                : o.end.from
              : n
              ? a.to
              : a.from),
          r.jT.cursor(l, n ? -1 : 1)
        );
      }
      let z = (e) => N(e, (t) => $(e.state, t, !B(e))),
        W = (e) => N(e, (t) => $(e.state, t, B(e)));
      function G(e, t) {
        return N(e, (n) => {
          if (!n.empty) return P(n, t);
          let r = e.moveVertically(n, t);
          return r.head != n.head ? r : e.moveToLineBoundary(n, t);
        });
      }
      let Q = (e) => G(e, !1),
        K = (e) => G(e, !0);
      function Y(e) {
        let t = e.scrollDOM.clientHeight < e.scrollDOM.scrollHeight - 2,
          n = 0,
          r = 0,
          i;
        if (t) {
          for (let t of e.state.facet(o.tk.scrollMargins)) {
            let o = t(e);
            (null == o ? void 0 : o.top) &&
              (n = Math.max(null == o ? void 0 : o.top, n)),
              (null == o ? void 0 : o.bottom) &&
                (r = Math.max(null == o ? void 0 : o.bottom, r));
          }
          i = e.scrollDOM.clientHeight - n - r;
        } else i = (e.dom.ownerDocument.defaultView || window).innerHeight;
        return {
          marginTop: n,
          marginBottom: r,
          selfScroll: t,
          height: Math.max(e.defaultLineHeight, i - 5),
        };
      }
      function Z(e, t) {
        let n,
          r = Y(e),
          {state: i} = e,
          s = j(i.selection, (n) =>
            n.empty ? e.moveVertically(n, t, r.height) : P(n, t)
          );
        if (s.eq(i.selection)) return !1;
        if (r.selfScroll) {
          let t = e.coordsAtPos(i.selection.main.head),
            l = e.scrollDOM.getBoundingClientRect(),
            a = l.top + r.marginTop,
            u = l.bottom - r.marginBottom;
          t &&
            t.top > a &&
            t.bottom < u &&
            (n = o.tk.scrollIntoView(s.main.head, {
              y: 'start',
              yMargin: t.top - a,
            }));
        }
        return e.dispatch(M(i, s), {effects: n}), !0;
      }
      let X = (e) => Z(e, !1),
        ee = (e) => Z(e, !0);
      function et(e, t, n) {
        let o = e.lineBlockAt(t.head),
          i = e.moveToLineBoundary(t, n);
        if (
          (i.head == t.head &&
            i.head != (n ? o.to : o.from) &&
            (i = e.moveToLineBoundary(t, n, !1)),
          !n && i.head == o.from && o.length)
        ) {
          let n = /^\s*/.exec(
            e.state.sliceDoc(o.from, Math.min(o.from + 100, o.to))
          )[0].length;
          n && t.head != o.from + n && (i = r.jT.cursor(o.from + n));
        }
        return i;
      }
      let en = (e) => N(e, (t) => et(e, t, !0)),
        er = (e) => N(e, (t) => et(e, t, !1)),
        eo = (e) => N(e, (t) => et(e, t, !B(e))),
        ei = (e) => N(e, (t) => et(e, t, B(e))),
        es = (e) => N(e, (t) => r.jT.cursor(e.lineBlockAt(t.head).from, 1)),
        el = (e) => N(e, (t) => r.jT.cursor(e.lineBlockAt(t.head).to, -1)),
        ea = ({state: e, dispatch: t}) => {
          let n, o;
          return (
            (n = !1),
            (o = j(e.selection, (t) => {
              let o =
                (0, i.Um)(e, t.head, -1) ||
                (0, i.Um)(e, t.head, 1) ||
                (t.head > 0 && (0, i.Um)(e, t.head - 1, 1)) ||
                (t.head < e.doc.length && (0, i.Um)(e, t.head + 1, -1));
              if (!o || !o.end) return t;
              n = !0;
              let s = o.start.from == t.head ? o.end.to : o.end.from;
              return r.jT.cursor(s);
            })),
            !!n && (t(M(e, o)), !0)
          );
        };
      function eu(e, t) {
        let n = j(e.state.selection, (e) => {
          let n = t(e);
          return r.jT.range(
            e.anchor,
            n.head,
            n.goalColumn,
            n.bidiLevel || void 0
          );
        });
        return !n.eq(e.state.selection) && (e.dispatch(M(e.state, n)), !0);
      }
      function ec(e, t) {
        return eu(e, (n) => e.moveByChar(n, t));
      }
      let ef = (e) => ec(e, !B(e)),
        ed = (e) => ec(e, B(e));
      function ep(e, t) {
        return eu(e, (n) => e.moveByGroup(n, t));
      }
      let eh = (e) => ep(e, !B(e)),
        em = (e) => ep(e, B(e)),
        eg = (e) => eu(e, (t) => $(e.state, t, !B(e))),
        ev = (e) => eu(e, (t) => $(e.state, t, B(e)));
      function ey(e, t) {
        return eu(e, (n) => e.moveVertically(n, t));
      }
      let eb = (e) => ey(e, !1),
        ew = (e) => ey(e, !0);
      function ex(e, t) {
        return eu(e, (n) => e.moveVertically(n, t, Y(e).height));
      }
      let eO = (e) => ex(e, !1),
        ek = (e) => ex(e, !0),
        eS = (e) => eu(e, (t) => et(e, t, !0)),
        eE = (e) => eu(e, (t) => et(e, t, !1)),
        eA = (e) => eu(e, (t) => et(e, t, !B(e))),
        eT = (e) => eu(e, (t) => et(e, t, B(e))),
        e_ = (e) => eu(e, (t) => r.jT.cursor(e.lineBlockAt(t.head).from)),
        eR = (e) => eu(e, (t) => r.jT.cursor(e.lineBlockAt(t.head).to)),
        eI = ({state: e, dispatch: t}) => (t(M(e, {anchor: 0})), !0),
        eD = ({state: e, dispatch: t}) => (t(M(e, {anchor: e.doc.length})), !0),
        eC = ({state: e, dispatch: t}) => (
          t(M(e, {anchor: e.selection.main.anchor, head: 0})), !0
        ),
        eL = ({state: e, dispatch: t}) => (
          t(M(e, {anchor: e.selection.main.anchor, head: e.doc.length})), !0
        ),
        ej = ({state: e, dispatch: t}) => (
          t(
            e.update({
              selection: {anchor: 0, head: e.doc.length},
              userEvent: 'select',
            })
          ),
          !0
        ),
        eM = ({state: e, dispatch: t}) => {
          let n = eK(e).map(({from: t, to: n}) =>
            r.jT.range(t, Math.min(n + 1, e.doc.length))
          );
          return (
            t(e.update({selection: r.jT.create(n), userEvent: 'select'})), !0
          );
        },
        eN = ({state: e, dispatch: t}) => {
          let n = j(e.selection, (t) => {
            var n;
            let o = (0, i.qz)(e).resolveInner(t.head, 1);
            for (
              ;
              !(
                (o.from < t.from && o.to >= t.to) ||
                (o.to > t.to && o.from <= t.from) ||
                !(null === (n = o.parent) || void 0 === n ? void 0 : n.parent)
              );

            )
              o = o.parent;
            return r.jT.range(o.to, o.from);
          });
          return t(M(e, n)), !0;
        },
        eP = ({state: e, dispatch: t}) => {
          let n = e.selection,
            o = null;
          return (
            n.ranges.length > 1
              ? (o = r.jT.create([n.main]))
              : n.main.empty || (o = r.jT.create([r.jT.cursor(n.main.head)])),
            !!o && (t(M(e, o)), !0)
          );
        };
      function eU(e, t) {
        if (e.state.readOnly) return !1;
        let n = 'delete.selection',
          {state: i} = e,
          s = i.changeByRange((o) => {
            let {from: i, to: s} = o;
            if (i == s) {
              let r = t(i);
              r < i
                ? ((n = 'delete.backward'), (r = eB(e, r, !1)))
                : r > i && ((n = 'delete.forward'), (r = eB(e, r, !0))),
                (i = Math.min(i, r)),
                (s = Math.max(s, r));
            } else (i = eB(e, i, !1)), (s = eB(e, s, !0));
            return i == s
              ? {range: o}
              : {changes: {from: i, to: s}, range: r.jT.cursor(i)};
          });
        return (
          !s.changes.empty &&
          (e.dispatch(
            i.update(s, {
              scrollIntoView: !0,
              userEvent: n,
              effects:
                'delete.selection' == n
                  ? o.tk.announce.of(i.phrase('Selection deleted'))
                  : void 0,
            })
          ),
          !0)
        );
      }
      function eB(e, t, n) {
        if (e instanceof o.tk)
          for (let r of e.state.facet(o.tk.atomicRanges).map((t) => t(e)))
            r.between(t, t, (e, r) => {
              e < t && r > t && (t = n ? r : e);
            });
        return t;
      }
      let eF = (e, t) =>
          eU(e, (n) => {
            let {state: o} = e,
              s = o.doc.lineAt(n),
              l,
              a;
            if (
              !t &&
              n > s.from &&
              n < s.from + 200 &&
              !/[^ \t]/.test((l = s.text.slice(0, n - s.from)))
            ) {
              if ('	' == l[l.length - 1]) return n - 1;
              let e = (0, r.IS)(l, o.tabSize) % (0, i.y1)(o) || (0, i.y1)(o);
              for (let t = 0; t < e && ' ' == l[l.length - 1 - t]; t++) n--;
              a = n;
            } else
              (a = (0, r.cp)(s.text, n - s.from, t, t) + s.from) == n &&
                s.number != (t ? o.doc.lines : 1) &&
                (a += t ? 1 : -1);
            return a;
          }),
        eH = (e) => eF(e, !1),
        eV = (e) => eF(e, !0),
        eJ = (e, t) =>
          eU(e, (n) => {
            let o = n,
              {state: i} = e,
              s = i.doc.lineAt(o),
              l = i.charCategorizer(o);
            for (let e = null; ; ) {
              if (o == (t ? s.to : s.from)) {
                o == n &&
                  s.number != (t ? i.doc.lines : 1) &&
                  (o += t ? 1 : -1);
                break;
              }
              let a = (0, r.cp)(s.text, o - s.from, t) + s.from,
                u = s.text.slice(
                  Math.min(o, a) - s.from,
                  Math.max(o, a) - s.from
                ),
                c = l(u);
              if (null != e && c != e) break;
              (' ' != u || o != n) && (e = c), (o = a);
            }
            return o;
          }),
        eq = (e) => eJ(e, !1),
        e$ = (e) => eJ(e, !0),
        ez = (e) =>
          eU(e, (t) => {
            let n = e.lineBlockAt(t).to;
            return t < n ? n : Math.min(e.state.doc.length, t + 1);
          }),
        eW = (e) =>
          eU(e, (t) => {
            let n = e.lineBlockAt(t).from;
            return t > n ? n : Math.max(0, t - 1);
          }),
        eG = ({state: e, dispatch: t}) => {
          if (e.readOnly) return !1;
          let n = e.changeByRange((e) => ({
            changes: {from: e.from, to: e.to, insert: r.xv.of(['', ''])},
            range: r.jT.cursor(e.from),
          }));
          return t(e.update(n, {scrollIntoView: !0, userEvent: 'input'})), !0;
        },
        eQ = ({state: e, dispatch: t}) => {
          if (e.readOnly) return !1;
          let n = e.changeByRange((t) => {
            if (!t.empty || 0 == t.from || t.from == e.doc.length)
              return {range: t};
            let n = t.from,
              o = e.doc.lineAt(n),
              i =
                n == o.from
                  ? n - 1
                  : (0, r.cp)(o.text, n - o.from, !1) + o.from,
              s =
                n == o.to ? n + 1 : (0, r.cp)(o.text, n - o.from, !0) + o.from;
            return {
              changes: {
                from: i,
                to: s,
                insert: e.doc.slice(n, s).append(e.doc.slice(i, n)),
              },
              range: r.jT.cursor(s),
            };
          });
          return (
            !n.changes.empty &&
            (t(e.update(n, {scrollIntoView: !0, userEvent: 'move.character'})),
            !0)
          );
        };
      function eK(e) {
        let t = [],
          n = -1;
        for (let r of e.selection.ranges) {
          let o = e.doc.lineAt(r.from),
            i = e.doc.lineAt(r.to);
          if (
            (r.empty || r.to != i.from || (i = e.doc.lineAt(r.to - 1)),
            n >= o.number)
          ) {
            let e = t[t.length - 1];
            (e.to = i.to), e.ranges.push(r);
          } else t.push({from: o.from, to: i.to, ranges: [r]});
          n = i.number + 1;
        }
        return t;
      }
      function eY(e, t, n) {
        if (e.readOnly) return !1;
        let o = [],
          i = [];
        for (let t of eK(e)) {
          if (n ? t.to == e.doc.length : 0 == t.from) continue;
          let s = e.doc.lineAt(n ? t.to + 1 : t.from - 1),
            l = s.length + 1;
          if (n)
            for (let n of (o.push(
              {from: t.to, to: s.to},
              {from: t.from, insert: s.text + e.lineBreak}
            ),
            t.ranges))
              i.push(
                r.jT.range(
                  Math.min(e.doc.length, n.anchor + l),
                  Math.min(e.doc.length, n.head + l)
                )
              );
          else
            for (let n of (o.push(
              {from: s.from, to: t.from},
              {from: t.to, insert: e.lineBreak + s.text}
            ),
            t.ranges))
              i.push(r.jT.range(n.anchor - l, n.head - l));
        }
        return (
          !!o.length &&
          (t(
            e.update({
              changes: o,
              scrollIntoView: !0,
              selection: r.jT.create(i, e.selection.mainIndex),
              userEvent: 'move.line',
            })
          ),
          !0)
        );
      }
      let eZ = ({state: e, dispatch: t}) => eY(e, t, !1),
        eX = ({state: e, dispatch: t}) => eY(e, t, !0);
      function e0(e, t, n) {
        if (e.readOnly) return !1;
        let r = [];
        for (let t of eK(e))
          n
            ? r.push({
                from: t.from,
                insert: e.doc.slice(t.from, t.to) + e.lineBreak,
              })
            : r.push({
                from: t.to,
                insert: e.lineBreak + e.doc.slice(t.from, t.to),
              });
        return (
          t(
            e.update({
              changes: r,
              scrollIntoView: !0,
              userEvent: 'input.copyline',
            })
          ),
          !0
        );
      }
      let e1 = ({state: e, dispatch: t}) => e0(e, t, !1),
        e2 = ({state: e, dispatch: t}) => e0(e, t, !0),
        e5 = (e) => {
          if (e.state.readOnly) return !1;
          let {state: t} = e,
            n = t.changes(
              eK(t).map(
                ({from: e, to: n}) => (
                  e > 0 ? e-- : n < t.doc.length && n++, {from: e, to: n}
                )
              )
            ),
            r = j(t.selection, (t) => e.moveVertically(t, !0)).map(n);
          return (
            e.dispatch({
              changes: n,
              selection: r,
              scrollIntoView: !0,
              userEvent: 'delete.line',
            }),
            !0
          );
        },
        e3 = e6(!1),
        e8 = e6(!0);
      function e6(e) {
        return ({state: t, dispatch: n}) => {
          if (t.readOnly) return !1;
          let o = t.changeByRange((n) => {
            let {from: o, to: l} = n,
              a = t.doc.lineAt(o),
              u =
                !e &&
                o == l &&
                (function (e, t) {
                  if (/\(\)|\[\]|\{\}/.test(e.sliceDoc(t - 1, t + 1)))
                    return {from: t, to: t};
                  let n = (0, i.qz)(e).resolveInner(t),
                    r = n.childBefore(t),
                    o = n.childAfter(t),
                    l;
                  return r &&
                    o &&
                    r.to <= t &&
                    o.from >= t &&
                    (l = r.type.prop(s.md.closedBy)) &&
                    l.indexOf(o.name) > -1 &&
                    e.doc.lineAt(r.to).from == e.doc.lineAt(o.from).from
                    ? {from: r.to, to: o.from}
                    : null;
                })(t, o);
            e && (o = l = (l <= a.to ? a : t.doc.lineAt(l)).to);
            let c = new i.Gn(t, {simulateBreak: o, simulateDoubleBreak: !!u}),
              f = (0, i.K0)(c, o);
            for (
              null == f && (f = /^\s*/.exec(t.doc.lineAt(o).text)[0].length);
              l < a.to && /\s/.test(a.text[l - a.from]);

            )
              l++;
            u
              ? ({from: o, to: l} = u)
              : o > a.from &&
                o < a.from + 100 &&
                !/\S/.test(a.text.slice(0, o)) &&
                (o = a.from);
            let d = ['', (0, i.SS)(t, f)];
            return (
              u && d.push((0, i.SS)(t, c.lineIndent(a.from, -1))),
              {
                changes: {from: o, to: l, insert: r.xv.of(d)},
                range: r.jT.cursor(o + 1 + d[1].length),
              }
            );
          });
          return n(t.update(o, {scrollIntoView: !0, userEvent: 'input'})), !0;
        };
      }
      function e4(e, t) {
        let n = -1;
        return e.changeByRange((o) => {
          let i = [];
          for (let r = o.from; r <= o.to; ) {
            let s = e.doc.lineAt(r);
            s.number > n &&
              (o.empty || o.to > s.from) &&
              (t(s, i, o), (n = s.number)),
              (r = s.to + 1);
          }
          let s = e.changes(i);
          return {
            changes: i,
            range: r.jT.range(s.mapPos(o.anchor, 1), s.mapPos(o.head, 1)),
          };
        });
      }
      let e7 = ({state: e, dispatch: t}) => {
          if (e.readOnly) return !1;
          let n = Object.create(null),
            r = new i.Gn(e, {
              overrideIndentation: (e) => {
                let t = n[e];
                return null == t ? -1 : t;
              },
            }),
            o = e4(e, (t, o, s) => {
              let l = (0, i.K0)(r, t.from);
              if (null == l) return;
              /\S/.test(t.text) || (l = 0);
              let a = /^\s*/.exec(t.text)[0],
                u = (0, i.SS)(e, l);
              (a != u || s.from < t.from + a.length) &&
                ((n[t.from] = l),
                o.push({from: t.from, to: t.from + a.length, insert: u}));
            });
          return o.changes.empty || t(e.update(o, {userEvent: 'indent'})), !0;
        },
        e9 = ({state: e, dispatch: t}) =>
          !e.readOnly &&
          (t(
            e.update(
              e4(e, (t, n) => {
                n.push({from: t.from, insert: e.facet(i.c)});
              }),
              {userEvent: 'input.indent'}
            )
          ),
          !0),
        te = ({state: e, dispatch: t}) =>
          !e.readOnly &&
          (t(
            e.update(
              e4(e, (t, n) => {
                let o = /^\s*/.exec(t.text)[0];
                if (!o) return;
                let s = (0, r.IS)(o, e.tabSize),
                  l = 0,
                  a = (0, i.SS)(e, Math.max(0, s - (0, i.y1)(e)));
                for (
                  ;
                  l < o.length &&
                  l < a.length &&
                  o.charCodeAt(l) == a.charCodeAt(l);

                )
                  l++;
                n.push({
                  from: t.from + l,
                  to: t.from + o.length,
                  insert: a.slice(l),
                });
              }),
              {userEvent: 'delete.dedent'}
            )
          ),
          !0),
        tt = [
          {key: 'ArrowLeft', run: F, shift: ef, preventDefault: !0},
          {
            key: 'Mod-ArrowLeft',
            mac: 'Alt-ArrowLeft',
            run: J,
            shift: eh,
            preventDefault: !0,
          },
          {mac: 'Cmd-ArrowLeft', run: eo, shift: eA, preventDefault: !0},
          {key: 'ArrowRight', run: H, shift: ed, preventDefault: !0},
          {
            key: 'Mod-ArrowRight',
            mac: 'Alt-ArrowRight',
            run: q,
            shift: em,
            preventDefault: !0,
          },
          {mac: 'Cmd-ArrowRight', run: ei, shift: eT, preventDefault: !0},
          {key: 'ArrowUp', run: Q, shift: eb, preventDefault: !0},
          {mac: 'Cmd-ArrowUp', run: eI, shift: eC},
          {mac: 'Ctrl-ArrowUp', run: X, shift: eO},
          {key: 'ArrowDown', run: K, shift: ew, preventDefault: !0},
          {mac: 'Cmd-ArrowDown', run: eD, shift: eL},
          {mac: 'Ctrl-ArrowDown', run: ee, shift: ek},
          {key: 'PageUp', run: X, shift: eO},
          {key: 'PageDown', run: ee, shift: ek},
          {key: 'Home', run: er, shift: eE, preventDefault: !0},
          {key: 'Mod-Home', run: eI, shift: eC},
          {key: 'End', run: en, shift: eS, preventDefault: !0},
          {key: 'Mod-End', run: eD, shift: eL},
          {key: 'Enter', run: e3},
          {key: 'Mod-a', run: ej},
          {key: 'Backspace', run: eH, shift: eH},
          {key: 'Delete', run: eV},
          {key: 'Mod-Backspace', mac: 'Alt-Backspace', run: eq},
          {key: 'Mod-Delete', mac: 'Alt-Delete', run: e$},
          {mac: 'Mod-Backspace', run: eW},
          {mac: 'Mod-Delete', run: ez},
        ].concat(
          [
            {key: 'Ctrl-b', run: F, shift: ef, preventDefault: !0},
            {key: 'Ctrl-f', run: H, shift: ed},
            {key: 'Ctrl-p', run: Q, shift: eb},
            {key: 'Ctrl-n', run: K, shift: ew},
            {key: 'Ctrl-a', run: es, shift: e_},
            {key: 'Ctrl-e', run: el, shift: eR},
            {key: 'Ctrl-d', run: eV},
            {key: 'Ctrl-h', run: eH},
            {key: 'Ctrl-k', run: ez},
            {key: 'Ctrl-Alt-h', run: eq},
            {key: 'Ctrl-o', run: eG},
            {key: 'Ctrl-t', run: eQ},
            {key: 'Ctrl-v', run: ee},
          ].map((e) => ({mac: e.key, run: e.run, shift: e.shift}))
        ),
        tn = [
          {key: 'Alt-ArrowLeft', mac: 'Ctrl-ArrowLeft', run: z, shift: eg},
          {key: 'Alt-ArrowRight', mac: 'Ctrl-ArrowRight', run: W, shift: ev},
          {key: 'Alt-ArrowUp', run: eZ},
          {key: 'Shift-Alt-ArrowUp', run: e1},
          {key: 'Alt-ArrowDown', run: eX},
          {key: 'Shift-Alt-ArrowDown', run: e2},
          {key: 'Escape', run: eP},
          {key: 'Mod-Enter', run: e8},
          {key: 'Alt-l', mac: 'Ctrl-l', run: eM},
          {key: 'Mod-i', run: eN, preventDefault: !0},
          {key: 'Mod-[', run: te},
          {key: 'Mod-]', run: e9},
          {key: 'Mod-Alt-\\', run: e7},
          {key: 'Shift-Mod-k', run: e5},
          {key: 'Shift-Mod-\\', run: ea},
          {key: 'Mod-/', run: l},
          {key: 'Alt-A', run: c},
        ].concat(tt);
    },
    32286: function (e, t, n) {
      'use strict';
      n.d(t, {
        sF: function () {
          return o;
        },
      });
      var r = n(51869);
      function o(e, t, o) {
        var i;
        return (
          void 0 === o && (o = {}),
          (0, r._)(this, void 0, void 0, function () {
            var s;
            return (0, r.a)(this, function (r) {
              switch (r.label) {
                case 0:
                  switch (
                    null !== (i = t.template) && void 0 !== i ? i : 'parcel'
                  ) {
                    case 'node':
                      return [3, 1];
                    case 'static':
                      return [3, 3];
                  }
                  return [3, 5];
                case 1:
                  return [
                    4,
                    Promise.all([n.e(803), n.e(965)])
                      .then(n.bind(n, 94965))
                      .then(function (e) {
                        return e.SandpackNode;
                      }),
                  ];
                case 2:
                case 4:
                  return (s = r.sent()), [3, 7];
                case 3:
                  return [
                    4,
                    Promise.all([n.e(621), n.e(803), n.e(737)])
                      .then(n.bind(n, 20737))
                      .then(function (e) {
                        return e.SandpackStatic;
                      }),
                  ];
                case 5:
                  return [
                    4,
                    n
                      .e(191)
                      .then(n.bind(n, 52191))
                      .then(function (e) {
                        return e.SandpackRuntime;
                      }),
                  ];
                case 6:
                  (s = r.sent()), (r.label = 7);
                case 7:
                  return [2, new s(e, t, o)];
              }
            });
          })
        );
      }
      n(95002);
    },
    51869: function (e, t, n) {
      'use strict';
      n.d(t, {
        S: function () {
          return o;
        },
        _: function () {
          return u;
        },
        a: function () {
          return c;
        },
        b: function () {
          return m;
        },
        c: function () {
          return d;
        },
        d: function () {
          return g;
        },
        e: function () {
          return v;
        },
        f: function () {
          return y;
        },
        g: function () {
          return l;
        },
        h: function () {
          return a;
        },
        i: function () {
          return f;
        },
        n: function () {
          return p;
        },
      });
      var r,
        o,
        i = n(95002),
        s = function (e, t) {
          return (s =
            Object.setPrototypeOf ||
            ({__proto__: []} instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            })(e, t);
        };
      function l(e, t) {
        if ('function' != typeof t && null !== t)
          throw TypeError(
            'Class extends value ' + String(t) + ' is not a constructor or null'
          );
        function n() {
          this.constructor = e;
        }
        s(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n()));
      }
      var a = function () {
        return (a =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var o in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e;
          }).apply(this, arguments);
      };
      function u(e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
          function s(e) {
            try {
              a(r.next(e));
            } catch (e) {
              i(e);
            }
          }
          function l(e) {
            try {
              a(r.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function a(e) {
            var t;
            e.done
              ? o(e.value)
              : ((t = e.value) instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })
                ).then(s, l);
          }
          a((r = r.apply(e, t || [])).next());
        });
      }
      function c(e, t) {
        var n,
          r,
          o,
          i,
          s = {
            label: 0,
            sent: function () {
              if (1 & o[0]) throw o[1];
              return o[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (i = {next: l(0), throw: l(1), return: l(2)}),
          'function' == typeof Symbol &&
            (i[Symbol.iterator] = function () {
              return this;
            }),
          i
        );
        function l(i) {
          return function (l) {
            return (function (i) {
              if (n) throw TypeError('Generator is already executing.');
              for (; s; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (o =
                        2 & i[0]
                          ? r.return
                          : i[0]
                          ? r.throw || ((o = r.return) && o.call(r), 0)
                          : r.next) &&
                      !(o = o.call(r, i[1])).done)
                  )
                    return o;
                  switch (((r = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                    case 0:
                    case 1:
                      o = i;
                      break;
                    case 4:
                      return s.label++, {value: i[1], done: !1};
                    case 5:
                      s.label++, (r = i[1]), (i = [0]);
                      continue;
                    case 7:
                      (i = s.ops.pop()), s.trys.pop();
                      continue;
                    default:
                      if (
                        !(o = (o = s.trys).length > 0 && o[o.length - 1]) &&
                        (6 === i[0] || 2 === i[0])
                      ) {
                        s = 0;
                        continue;
                      }
                      if (3 === i[0] && (!o || (i[1] > o[0] && i[1] < o[3]))) {
                        s.label = i[1];
                        break;
                      }
                      if (6 === i[0] && s.label < o[1]) {
                        (s.label = o[1]), (o = i);
                        break;
                      }
                      if (o && s.label < o[2]) {
                        (s.label = o[2]), s.ops.push(i);
                        break;
                      }
                      o[2] && s.ops.pop(), s.trys.pop();
                      continue;
                  }
                  i = t.call(e, s);
                } catch (e) {
                  (i = [6, e]), (r = 0);
                } finally {
                  n = o = 0;
                }
              if (5 & i[0]) throw i[1];
              return {value: i[0] ? i[1] : void 0, done: !0};
            })([i, l]);
          };
        }
      }
      function f(e, t, n) {
        if (n || 2 == arguments.length)
          for (var r, o = 0, i = t.length; o < i; o++)
            (!r && o in t) ||
              (r || (r = Array.prototype.slice.call(t, 0, o)), (r[o] = t[o]));
        return e.concat(r || Array.prototype.slice.call(t));
      }
      var d = function (e) {
        return '[sandpack-client]: '.concat(e);
      };
      function p(e, t) {
        return (
          void 0 === t && (t = 'Value is nullish'),
          (0, i.kG)(null != e, d(t)),
          e
        );
      }
      var h =
        '"entry" was not specified - provide either a package.json with the "main" field or an "entry" value';
      function m(e, t, n) {
        return (
          void 0 === e && (e = {}),
          void 0 === t && (t = {}),
          void 0 === n && (n = '/index.js'),
          JSON.stringify(
            {
              name: 'sandpack-project',
              main: n,
              dependencies: e,
              devDependencies: t,
            },
            null,
            2
          )
        );
      }
      function g(e, t, n, r) {
        var o,
          i,
          s = y(e),
          l = s['/package.json'];
        if (!l)
          return (
            p(
              t,
              '"dependencies" was not specified - provide either a package.json or a "dependencies" value'
            ),
            p(r, h),
            (s['/package.json'] = {code: m(t, n, r)}),
            s
          );
        if (l) {
          var u = JSON.parse(l.code);
          p(!(!t && !u.dependencies), h),
            t &&
              (u.dependencies = a(
                a({}, null !== (o = u.dependencies) && void 0 !== o ? o : {}),
                null != t ? t : {}
              )),
            n &&
              (u.devDependencies = a(
                a(
                  {},
                  null !== (i = u.devDependencies) && void 0 !== i ? i : {}
                ),
                null != n ? n : {}
              )),
            r && (u.main = r),
            (s['/package.json'] = {code: JSON.stringify(u, null, 2)});
        }
        return s;
      }
      function v(e) {
        if ('SyntaxError' === e.title)
          return {
            title: e.title,
            path: e.path,
            message: e.message,
            line: e.line,
            column: e.column,
          };
        var t,
          n,
          r,
          o,
          i,
          s = (function (e) {
            if (e)
              return e.find(function (e) {
                return !!e._originalFileName;
              });
          })(null === (t = e.payload) || void 0 === t ? void 0 : t.frames);
        if (!s) return {message: e.message};
        var l =
            ((r =
              2 +
              (n =
                s._originalScriptCode[
                  s._originalScriptCode.length - 1
                ].lineNumber.toString().length) +
              3 +
              s._originalColumnNumber),
            s._originalScriptCode.reduce(function (e, t) {
              var o = t.highlight ? '>' : ' ',
                i =
                  t.lineNumber.toString().length === n
                    ? ''.concat(t.lineNumber)
                    : ' '.concat(t.lineNumber),
                s = t.highlight ? '\n' + ' '.repeat(r) + '^' : '';
              return e + '\n' + o + ' ' + i + ' | ' + t.content + s;
            }, '')),
          a = s
            ? ' ('
                .concat(s._originalLineNumber, ':')
                .concat(s._originalColumnNumber, ')')
            : '';
        return {
          message:
            ((o = s._originalFileName),
            (i = e.message),
            ''.concat(o, ': ').concat(i).concat(a, '\n').concat(l)),
          title: e.title,
          path: s._originalFileName,
          line: s._originalLineNumber,
          column: s._originalColumnNumber,
        };
      }
      var y = function (e) {
        return 'string' == typeof e
          ? e.startsWith('/')
            ? e
            : '/'.concat(e)
          : Array.isArray(e)
          ? e.map(function (e) {
              return e.startsWith('/') ? e : '/'.concat(e);
            })
          : 'object' == typeof e && null !== e
          ? Object.entries(e).reduce(function (e, t) {
              var n = t[0],
                r = t[1];
              return (e[n.startsWith('/') ? n : '/'.concat(n)] = r), e;
            }, {})
          : null;
      };
      ((r = o || (o = {}))[(r.None = 0)] = 'None'),
        (r[(r.Error = 10)] = 'Error'),
        (r[(r.Warning = 20)] = 'Warning'),
        (r[(r.Info = 30)] = 'Info'),
        (r[(r.Debug = 40)] = 'Debug');
    },
    76102: function (e, t, n) {
      'use strict';
      n.d(t, {
        R: function () {
          return ey;
        },
      });
      var r,
        o,
        i,
        s,
        l,
        a,
        u,
        c,
        f,
        d,
        p,
        h,
        m,
        g,
        v,
        y = n(67294);
      function b() {
        let e = [],
          t = [],
          n = {
            enqueue(e) {
              t.push(e);
            },
            addEventListener: (e, t, r, o) => (
              e.addEventListener(t, r, o),
              n.add(() => e.removeEventListener(t, r, o))
            ),
            requestAnimationFrame(...e) {
              let t = requestAnimationFrame(...e);
              return n.add(() => cancelAnimationFrame(t));
            },
            nextFrame: (...e) =>
              n.requestAnimationFrame(() => n.requestAnimationFrame(...e)),
            setTimeout(...e) {
              let t = setTimeout(...e);
              return n.add(() => clearTimeout(t));
            },
            microTask(...e) {
              var t;
              let r = {current: !0};
              return (
                (t = () => {
                  r.current && e[0]();
                }),
                'function' == typeof queueMicrotask
                  ? queueMicrotask(t)
                  : Promise.resolve()
                      .then(t)
                      .catch((e) =>
                        setTimeout(() => {
                          throw e;
                        })
                      ),
                n.add(() => {
                  r.current = !1;
                })
              );
            },
            add: (t) => (
              e.push(t),
              () => {
                let n = e.indexOf(t);
                if (n >= 0) {
                  let [t] = e.splice(n, 1);
                  t();
                }
              }
            ),
            dispose() {
              for (let t of e.splice(0)) t();
            },
            async workQueue() {
              for (let e of t.splice(0)) await e();
            },
          };
        return n;
      }
      function w() {
        let [e] = (0, y.useState)(b);
        return (0, y.useEffect)(() => () => e.dispose(), [e]), e;
      }
      let x = 'undefined' == typeof window || 'undefined' == typeof document,
        O = x ? y.useEffect : y.useLayoutEffect,
        k = {serverHandoffComplete: !1},
        S = 0;
      function E() {
        return ++S;
      }
      let A =
        null != (v = y.useId)
          ? v
          : function () {
              let e = (function () {
                  let [e, t] = (0, y.useState)(k.serverHandoffComplete);
                  return (
                    (0, y.useEffect)(() => {
                      !0 !== e && t(!0);
                    }, [e]),
                    (0, y.useEffect)(() => {
                      !1 === k.serverHandoffComplete &&
                        (k.serverHandoffComplete = !0);
                    }, []),
                    e
                  );
                })(),
                [t, n] = y.useState(e ? E : null);
              return (
                O(() => {
                  null === t && n(E());
                }, [t]),
                null != t ? '' + t : void 0
              );
            };
      function T(e) {
        let t = (0, y.useRef)(e);
        return (
          O(() => {
            t.current = e;
          }, [e]),
          t
        );
      }
      function _(e, t) {
        let [n, r] = (0, y.useState)(e),
          o = T(e);
        return O(() => r(o.current), [o, r, ...t]), n;
      }
      let R = function (e) {
          let t = T(e);
          return y.useCallback((...e) => t.current(...e), [t]);
        },
        I = Symbol();
      function D(...e) {
        let t = (0, y.useRef)(e);
        (0, y.useEffect)(() => {
          t.current = e;
        }, [e]);
        let n = R((e) => {
          for (let n of t.current)
            null != n && ('function' == typeof n ? n(e) : (n.current = e));
        });
        return e.every((e) => null == e || (null == e ? void 0 : e[I]))
          ? void 0
          : n;
      }
      function C(e, t, ...n) {
        if (e in t) {
          let r = t[e];
          return 'function' == typeof r ? r(...n) : r;
        }
        let r = Error(
          `Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(
            t
          )
            .map((e) => `"${e}"`)
            .join(', ')}.`
        );
        throw (Error.captureStackTrace && Error.captureStackTrace(r, C), r);
      }
      var L =
          (((r = L || {})[(r.None = 0)] = 'None'),
          (r[(r.RenderStrategy = 1)] = 'RenderStrategy'),
          (r[(r.Static = 2)] = 'Static'),
          r),
        j =
          (((o = j || {})[(o.Unmount = 0)] = 'Unmount'),
          (o[(o.Hidden = 1)] = 'Hidden'),
          o);
      function M({
        ourProps: e,
        theirProps: t,
        slot: n,
        defaultTag: r,
        features: o,
        visible: i = !0,
        name: s,
      }) {
        let l = P(t, e);
        if (i) return N(l, n, r, s);
        let a = null != o ? o : 0;
        if (2 & a) {
          let {static: e = !1, ...t} = l;
          if (e) return N(t, n, r, s);
        }
        if (1 & a) {
          let {unmount: e = !0, ...t} = l;
          return C(e ? 0 : 1, {
            0: () => null,
            1: () => N({...t, hidden: !0, style: {display: 'none'}}, n, r, s),
          });
        }
        return N(l, n, r, s);
      }
      function N(e, t = {}, n, r) {
        let {
            as: o = n,
            children: i,
            refName: s = 'ref',
            ...l
          } = F(e, ['unmount', 'static']),
          a = void 0 !== e.ref ? {[s]: e.ref} : {},
          u = 'function' == typeof i ? i(t) : i;
        l.className &&
          'function' == typeof l.className &&
          (l.className = l.className(t));
        let c = {};
        if (t) {
          let e = !1,
            n = [];
          for (let [r, o] of Object.entries(t))
            'boolean' == typeof o && (e = !0), !0 === o && n.push(r);
          e && (c['data-headlessui-state'] = n.join(' '));
        }
        if (o === y.Fragment && Object.keys(B(l)).length > 0) {
          if (!(0, y.isValidElement)(u) || (Array.isArray(u) && u.length > 1))
            throw Error(
              [
                'Passing props on "Fragment"!',
                '',
                `The current component <${r} /> is rendering a "Fragment".`,
                'However we need to passthrough the following props:',
                Object.keys(l).map((e) => `  - ${e}`).join(`
`),
                '',
                'You can apply a few solutions:',
                [
                  'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
                  'Render a single element as the child so that we can forward the props onto that element.',
                ].map((e) => `  - ${e}`).join(`
`),
              ].join(`
`)
            );
          return (0, y.cloneElement)(
            u,
            Object.assign(
              {},
              P(u.props, B(F(l, ['ref']))),
              c,
              a,
              (function (...e) {
                return {
                  ref: e.every((e) => null == e)
                    ? void 0
                    : (t) => {
                        for (let n of e)
                          null != n &&
                            ('function' == typeof n ? n(t) : (n.current = t));
                      },
                };
              })(u.ref, a.ref)
            )
          );
        }
        return (0, y.createElement)(
          o,
          Object.assign(
            {},
            F(l, ['ref']),
            o !== y.Fragment && a,
            o !== y.Fragment && c
          ),
          u
        );
      }
      function P(...e) {
        if (0 === e.length) return {};
        if (1 === e.length) return e[0];
        let t = {},
          n = {};
        for (let r of e)
          for (let e in r)
            e.startsWith('on') && 'function' == typeof r[e]
              ? (null != n[e] || (n[e] = []), n[e].push(r[e]))
              : (t[e] = r[e]);
        if (t.disabled || t['aria-disabled'])
          return Object.assign(
            t,
            Object.fromEntries(Object.keys(n).map((e) => [e, void 0]))
          );
        for (let e in n)
          Object.assign(t, {
            [e](t, ...r) {
              for (let o of n[e]) {
                if (
                  (t instanceof Event ||
                    (null == t ? void 0 : t.nativeEvent) instanceof Event) &&
                  t.defaultPrevented
                )
                  return;
                o(t, ...r);
              }
            },
          });
        return t;
      }
      function U(e) {
        var t;
        return Object.assign((0, y.forwardRef)(e), {
          displayName: null != (t = e.displayName) ? t : e.name,
        });
      }
      function B(e) {
        let t = Object.assign({}, e);
        for (let e in t) void 0 === t[e] && delete t[e];
        return t;
      }
      function F(e, t = []) {
        let n = Object.assign({}, e);
        for (let e of t) e in n && delete n[e];
        return n;
      }
      var H =
          (((i = H || {}).Space = ' '),
          (i.Enter = 'Enter'),
          (i.Escape = 'Escape'),
          (i.Backspace = 'Backspace'),
          (i.Delete = 'Delete'),
          (i.ArrowLeft = 'ArrowLeft'),
          (i.ArrowUp = 'ArrowUp'),
          (i.ArrowRight = 'ArrowRight'),
          (i.ArrowDown = 'ArrowDown'),
          (i.Home = 'Home'),
          (i.End = 'End'),
          (i.PageUp = 'PageUp'),
          (i.PageDown = 'PageDown'),
          (i.Tab = 'Tab'),
          i),
        V =
          (((s = V || {})[(s.First = 0)] = 'First'),
          (s[(s.Previous = 1)] = 'Previous'),
          (s[(s.Next = 2)] = 'Next'),
          (s[(s.Last = 3)] = 'Last'),
          (s[(s.Specific = 4)] = 'Specific'),
          (s[(s.Nothing = 5)] = 'Nothing'),
          s);
      function J(e) {
        return x
          ? null
          : e instanceof Node
          ? e.ownerDocument
          : null != e &&
            e.hasOwnProperty('current') &&
            e.current instanceof Node
          ? e.current.ownerDocument
          : document;
      }
      let q = [
        '[contentEditable=true]',
        '[tabindex]',
        'a[href]',
        'area[href]',
        'button:not([disabled])',
        'iframe',
        'input:not([disabled])',
        'select:not([disabled])',
        'textarea:not([disabled])',
      ]
        .map((e) => `${e}:not([tabindex='-1'])`)
        .join(',');
      var $ =
          (((l = $ || {})[(l.First = 1)] = 'First'),
          (l[(l.Previous = 2)] = 'Previous'),
          (l[(l.Next = 4)] = 'Next'),
          (l[(l.Last = 8)] = 'Last'),
          (l[(l.WrapAround = 16)] = 'WrapAround'),
          (l[(l.NoScroll = 32)] = 'NoScroll'),
          l),
        z =
          (((a = z || {})[(a.Error = 0)] = 'Error'),
          (a[(a.Overflow = 1)] = 'Overflow'),
          (a[(a.Success = 2)] = 'Success'),
          (a[(a.Underflow = 3)] = 'Underflow'),
          a),
        W =
          (((u = W || {})[(u.Previous = -1)] = 'Previous'),
          (u[(u.Next = 1)] = 'Next'),
          u),
        G =
          (((c = G || {})[(c.Strict = 0)] = 'Strict'),
          (c[(c.Loose = 1)] = 'Loose'),
          c);
      function Q(e, t = 0) {
        var n;
        return (
          e !== (null == (n = J(e)) ? void 0 : n.body) &&
          C(t, {
            0: () => e.matches(q),
            1() {
              let t = e;
              for (; null !== t; ) {
                if (t.matches(q)) return !0;
                t = t.parentElement;
              }
              return !1;
            },
          })
        );
      }
      let K = (0, y.createContext)(null);
      K.displayName = 'OpenClosedContext';
      var Y =
        (((f = Y || {})[(f.Open = 0)] = 'Open'),
        (f[(f.Closed = 1)] = 'Closed'),
        f);
      function Z({value: e, children: t}) {
        return y.createElement(K.Provider, {value: e}, t);
      }
      function X(e) {
        var t;
        if (e.type) return e.type;
        let n = null != (t = e.as) ? t : 'button';
        if ('string' == typeof n && 'button' === n.toLowerCase())
          return 'button';
      }
      function ee(e, t, n) {
        let r = T(t);
        (0, y.useEffect)(() => {
          function t(e) {
            r.current(e);
          }
          return (
            document.addEventListener(e, t, n),
            () => document.removeEventListener(e, t, n)
          );
        }, [e, n]);
      }
      var et =
        (((d = et || {})[(d.None = 1)] = 'None'),
        (d[(d.Focusable = 2)] = 'Focusable'),
        (d[(d.Hidden = 4)] = 'Hidden'),
        d);
      let en = U(function (e, t) {
        let {features: n = 1, ...r} = e;
        return M({
          ourProps: {
            ref: t,
            'aria-hidden': (2 & n) == 2 || void 0,
            style: {
              position: 'fixed',
              top: 1,
              left: 1,
              width: 1,
              height: 0,
              padding: 0,
              margin: -1,
              overflow: 'hidden',
              clip: 'rect(0, 0, 0, 0)',
              whiteSpace: 'nowrap',
              borderWidth: '0',
              ...((4 & n) == 4 && (2 & n) != 2 && {display: 'none'}),
            },
          },
          theirProps: r,
          slot: {},
          defaultTag: 'div',
          name: 'Hidden',
        });
      });
      function er(e, t) {
        return e ? e + '[' + t + ']' : t;
      }
      var eo =
          (((p = eo || {})[(p.Open = 0)] = 'Open'),
          (p[(p.Closed = 1)] = 'Closed'),
          p),
        ei =
          (((h = ei || {})[(h.Single = 0)] = 'Single'),
          (h[(h.Multi = 1)] = 'Multi'),
          h),
        es =
          (((m = es || {})[(m.Pointer = 0)] = 'Pointer'),
          (m[(m.Other = 1)] = 'Other'),
          m),
        el =
          (((g = el || {})[(g.OpenListbox = 0)] = 'OpenListbox'),
          (g[(g.CloseListbox = 1)] = 'CloseListbox'),
          (g[(g.SetDisabled = 2)] = 'SetDisabled'),
          (g[(g.SetOrientation = 3)] = 'SetOrientation'),
          (g[(g.GoToOption = 4)] = 'GoToOption'),
          (g[(g.Search = 5)] = 'Search'),
          (g[(g.ClearSearch = 6)] = 'ClearSearch'),
          (g[(g.RegisterOption = 7)] = 'RegisterOption'),
          (g[(g.UnregisterOption = 8)] = 'UnregisterOption'),
          g);
      function ea(e, t = (e) => e) {
        let n =
            null !== e.activeOptionIndex
              ? e.options[e.activeOptionIndex]
              : null,
          r = (function (e, t = (e) => e) {
            return e.slice().sort((e, n) => {
              let r = t(e),
                o = t(n);
              if (null === r || null === o) return 0;
              let i = r.compareDocumentPosition(o);
              return i & Node.DOCUMENT_POSITION_FOLLOWING
                ? -1
                : i & Node.DOCUMENT_POSITION_PRECEDING
                ? 1
                : 0;
            });
          })(t(e.options.slice()), (e) => e.dataRef.current.domRef.current),
          o = n ? r.indexOf(n) : null;
        return -1 === o && (o = null), {options: r, activeOptionIndex: o};
      }
      let eu = {
          1: (e) =>
            e.disabled || 1 === e.listboxState
              ? e
              : {...e, activeOptionIndex: null, listboxState: 1},
          0(e) {
            if (e.disabled || 0 === e.listboxState) return e;
            let t = e.activeOptionIndex,
              {value: n, mode: r, compare: o} = e.propsRef.current,
              i = e.options.findIndex((e) => {
                let t = e.dataRef.current.value;
                return C(r, {
                  1: () => n.some((e) => o(e, t)),
                  0: () => o(n, t),
                });
              });
            return (
              -1 !== i && (t = i), {...e, listboxState: 0, activeOptionIndex: t}
            );
          },
          2: (e, t) =>
            e.disabled === t.disabled ? e : {...e, disabled: t.disabled},
          3: (e, t) =>
            e.orientation === t.orientation
              ? e
              : {...e, orientation: t.orientation},
          4(e, t) {
            var n;
            if (e.disabled || 1 === e.listboxState) return e;
            let r = ea(e),
              o = (function (e, t) {
                let n = t.resolveItems();
                if (n.length <= 0) return null;
                let r = t.resolveActiveIndex(),
                  o = null != r ? r : -1,
                  i = (() => {
                    switch (e.focus) {
                      case 0:
                        return n.findIndex((e) => !t.resolveDisabled(e));
                      case 1: {
                        let e = n
                          .slice()
                          .reverse()
                          .findIndex(
                            (e, n, r) =>
                              (-1 === o || !(r.length - n - 1 >= o)) &&
                              !t.resolveDisabled(e)
                          );
                        return -1 === e ? e : n.length - 1 - e;
                      }
                      case 2:
                        return n.findIndex(
                          (e, n) => !(n <= o) && !t.resolveDisabled(e)
                        );
                      case 3: {
                        let e = n
                          .slice()
                          .reverse()
                          .findIndex((e) => !t.resolveDisabled(e));
                        return -1 === e ? e : n.length - 1 - e;
                      }
                      case 4:
                        return n.findIndex((n) => t.resolveId(n) === e.id);
                      case 5:
                        return null;
                      default:
                        !(function (e) {
                          throw Error('Unexpected object: ' + e);
                        })(e);
                    }
                  })();
                return -1 === i ? r : i;
              })(t, {
                resolveItems: () => r.options,
                resolveActiveIndex: () => r.activeOptionIndex,
                resolveId: (e) => e.id,
                resolveDisabled: (e) => e.dataRef.current.disabled,
              });
            return {
              ...e,
              ...r,
              searchQuery: '',
              activeOptionIndex: o,
              activationTrigger: null != (n = t.trigger) ? n : 1,
            };
          },
          5: (e, t) => {
            if (e.disabled || 1 === e.listboxState) return e;
            let n = '' !== e.searchQuery ? 0 : 1,
              r = e.searchQuery + t.value.toLowerCase(),
              o = (
                null !== e.activeOptionIndex
                  ? e.options
                      .slice(e.activeOptionIndex + n)
                      .concat(e.options.slice(0, e.activeOptionIndex + n))
                  : e.options
              ).find((e) => {
                var t;
                return (
                  !e.dataRef.current.disabled &&
                  (null == (t = e.dataRef.current.textValue)
                    ? void 0
                    : t.startsWith(r))
                );
              }),
              i = o ? e.options.indexOf(o) : -1;
            return -1 === i || i === e.activeOptionIndex
              ? {...e, searchQuery: r}
              : {
                  ...e,
                  searchQuery: r,
                  activeOptionIndex: i,
                  activationTrigger: 1,
                };
          },
          6: (e) =>
            e.disabled || 1 === e.listboxState || '' === e.searchQuery
              ? e
              : {...e, searchQuery: ''},
          7: (e, t) => {
            let n = {id: t.id, dataRef: t.dataRef},
              r = ea(e, (e) => [...e, n]);
            if (null === e.activeOptionIndex) {
              let {value: o, mode: i, compare: s} = e.propsRef.current,
                l = t.dataRef.current.value;
              C(i, {1: () => o.some((e) => s(e, l)), 0: () => s(o, l)}) &&
                (r.activeOptionIndex = r.options.indexOf(n));
            }
            return {...e, ...r};
          },
          8: (e, t) => {
            let n = ea(e, (e) => {
              let n = e.findIndex((e) => e.id === t.id);
              return -1 !== n && e.splice(n, 1), e;
            });
            return {...e, ...n, activationTrigger: 1};
          },
        },
        ec = (0, y.createContext)(null);
      function ef(e) {
        let t = (0, y.useContext)(ec);
        if (null === t) {
          let t = Error(`<${e} /> is missing a parent <Listbox /> component.`);
          throw (Error.captureStackTrace && Error.captureStackTrace(t, ef), t);
        }
        return t;
      }
      function ed(e, t) {
        return C(t.type, eu, e, t);
      }
      ec.displayName = 'ListboxContext';
      let ep = y.Fragment,
        eh = U(function (e, t) {
          let {
              value: n,
              defaultValue: r,
              name: o,
              onChange: i,
              by: s = (e, t) => e === t,
              disabled: l = !1,
              horizontal: a = !1,
              multiple: u = !1,
              ...c
            } = e,
            f = a ? 'horizontal' : 'vertical',
            d = D(t),
            [p, h] = (function (e, t, n) {
              let [r, o] = (0, y.useState)(n),
                i = void 0 !== e;
              return [
                i ? e : r,
                R((e) => (i || o(e), null == t ? void 0 : t(e))),
              ];
            })(n, i, r),
            m = (0, y.useReducer)(ed, {
              listboxState: 1,
              propsRef: {
                current: {
                  value: p,
                  onChange: h,
                  mode: u ? 1 : 0,
                  compare: R(
                    'string' == typeof s
                      ? (e, t) =>
                          (null == e ? void 0 : e[s]) ===
                          (null == t ? void 0 : t[s])
                      : s
                  ),
                },
              },
              labelRef: (0, y.createRef)(),
              buttonRef: (0, y.createRef)(),
              optionsRef: (0, y.createRef)(),
              disabled: l,
              orientation: f,
              options: [],
              searchQuery: '',
              activeOptionIndex: null,
              activationTrigger: 1,
            }),
            [{listboxState: g, propsRef: v, optionsRef: b, buttonRef: w}, x] =
              m;
          (v.current.value = p),
            (v.current.mode = u ? 1 : 0),
            O(() => {
              v.current.onChange = (e) =>
                C(v.current.mode, {
                  0: () => h(e),
                  1() {
                    let t = v.current.value.slice(),
                      {compare: n} = v.current,
                      r = t.findIndex((t) => n(t, e));
                    return -1 === r ? t.push(e) : t.splice(r, 1), h(t);
                  },
                });
            }, [h, v]),
            O(() => x({type: 2, disabled: l}), [l]),
            O(() => x({type: 3, orientation: f}), [f]),
            (function (e, t, n = !0) {
              let r = (0, y.useRef)(!1);
              function o(n, o) {
                if (!r.current || n.defaultPrevented) return;
                let i = (function e(t) {
                    return 'function' == typeof t
                      ? e(t())
                      : Array.isArray(t) || t instanceof Set
                      ? t
                      : [t];
                  })(e),
                  s = o(n);
                if (null !== s && s.ownerDocument.documentElement.contains(s)) {
                  for (let e of i) {
                    if (null === e) continue;
                    let t = e instanceof HTMLElement ? e : e.current;
                    if (null != t && t.contains(s)) return;
                  }
                  return (
                    Q(s, G.Loose) || -1 === s.tabIndex || n.preventDefault(),
                    t(n, s)
                  );
                }
              }
              (0, y.useEffect)(() => {
                requestAnimationFrame(() => {
                  r.current = n;
                });
              }, [n]);
              let i = (0, y.useRef)(null);
              ee(
                'mousedown',
                (e) => {
                  r.current && (i.current = e.target);
                },
                !0
              ),
                ee(
                  'click',
                  (e) => {
                    i.current && (o(e, () => i.current), (i.current = null));
                  },
                  !0
                ),
                ee(
                  'blur',
                  (e) =>
                    o(e, () =>
                      window.document.activeElement instanceof HTMLIFrameElement
                        ? window.document.activeElement
                        : null
                    ),
                  !0
                );
            })(
              [w, b],
              (e, t) => {
                var n;
                x({type: 1}),
                  Q(t, G.Loose) ||
                    (e.preventDefault(), null == (n = w.current) || n.focus());
              },
              0 === g
            );
          let k = (0, y.useMemo)(
            () => ({open: 0 === g, disabled: l, value: p}),
            [g, l, p]
          );
          return y.createElement(
            ec.Provider,
            {value: m},
            y.createElement(
              Z,
              {value: C(g, {0: Y.Open, 1: Y.Closed})},
              null != o &&
                null != p &&
                (function e(t = {}, n = null, r = []) {
                  for (let [o, i] of Object.entries(t))
                    !(function t(n, r, o) {
                      if (Array.isArray(o))
                        for (let [e, i] of o.entries())
                          t(n, er(r, e.toString()), i);
                      else
                        o instanceof Date
                          ? n.push([r, o.toISOString()])
                          : 'boolean' == typeof o
                          ? n.push([r, o ? '1' : '0'])
                          : 'string' == typeof o
                          ? n.push([r, o])
                          : 'number' == typeof o
                          ? n.push([r, `${o}`])
                          : null == o
                          ? n.push([r, ''])
                          : e(o, r, n);
                    })(r, er(n, o), i);
                  return r;
                })({[o]: p}).map(([e, t]) =>
                  y.createElement(en, {
                    features: et.Hidden,
                    ...B({
                      key: e,
                      as: 'input',
                      type: 'hidden',
                      hidden: !0,
                      readOnly: !0,
                      name: e,
                      value: t,
                    }),
                  })
                ),
              M({
                ourProps: {ref: d},
                theirProps: c,
                slot: k,
                defaultTag: ep,
                name: 'Listbox',
              })
            )
          );
        }),
        em = U(function (e, t) {
          var n;
          let [r, o] = ef('Listbox.Button'),
            i = D(r.buttonRef, t),
            s = `headlessui-listbox-button-${A()}`,
            l = w(),
            a = R((e) => {
              switch (e.key) {
                case H.Space:
                case H.Enter:
                case H.ArrowDown:
                  e.preventDefault(),
                    o({type: 0}),
                    l.nextFrame(() => {
                      r.propsRef.current.value || o({type: 4, focus: V.First});
                    });
                  break;
                case H.ArrowUp:
                  e.preventDefault(),
                    o({type: 0}),
                    l.nextFrame(() => {
                      r.propsRef.current.value || o({type: 4, focus: V.Last});
                    });
              }
            }),
            u = R((e) => {
              e.key === H.Space && e.preventDefault();
            }),
            c = R((e) => {
              if (
                (function (e) {
                  let t = e.parentElement,
                    n = null;
                  for (; t && !(t instanceof HTMLFieldSetElement); )
                    t instanceof HTMLLegendElement && (n = t),
                      (t = t.parentElement);
                  let r =
                    (null == t ? void 0 : t.getAttribute('disabled')) === '';
                  return (
                    !(
                      r &&
                      (function (e) {
                        if (!e) return !1;
                        let t = e.previousElementSibling;
                        for (; null !== t; ) {
                          if (t instanceof HTMLLegendElement) return !1;
                          t = t.previousElementSibling;
                        }
                        return !0;
                      })(n)
                    ) && r
                  );
                })(e.currentTarget)
              )
                return e.preventDefault();
              0 === r.listboxState
                ? (o({type: 1}),
                  l.nextFrame(() => {
                    var e;
                    return null == (e = r.buttonRef.current)
                      ? void 0
                      : e.focus({preventScroll: !0});
                  }))
                : (e.preventDefault(), o({type: 0}));
            }),
            f = _(() => {
              if (r.labelRef.current)
                return [r.labelRef.current.id, s].join(' ');
            }, [r.labelRef.current, s]),
            d = (0, y.useMemo)(
              () => ({
                open: 0 === r.listboxState,
                disabled: r.disabled,
                value: r.propsRef.current.value,
              }),
              [r]
            );
          return M({
            ourProps: {
              ref: i,
              id: s,
              type: (function (e, t) {
                let [n, r] = (0, y.useState)(() => X(e));
                return (
                  O(() => {
                    r(X(e));
                  }, [e.type, e.as]),
                  O(() => {
                    n ||
                      !t.current ||
                      (t.current instanceof HTMLButtonElement &&
                        !t.current.hasAttribute('type') &&
                        r('button'));
                  }, [n, t]),
                  n
                );
              })(e, r.buttonRef),
              'aria-haspopup': !0,
              'aria-controls':
                null == (n = r.optionsRef.current) ? void 0 : n.id,
              'aria-expanded': r.disabled ? void 0 : 0 === r.listboxState,
              'aria-labelledby': f,
              disabled: r.disabled,
              onKeyDown: a,
              onKeyUp: u,
              onClick: c,
            },
            theirProps: e,
            slot: d,
            defaultTag: 'button',
            name: 'Listbox.Button',
          });
        }),
        eg = U(function (e, t) {
          let [n] = ef('Listbox.Label'),
            r = `headlessui-listbox-label-${A()}`;
          return M({
            ourProps: {
              ref: D(n.labelRef, t),
              id: r,
              onClick: R(() => {
                var e;
                return null == (e = n.buttonRef.current)
                  ? void 0
                  : e.focus({preventScroll: !0});
              }),
            },
            theirProps: e,
            slot: (0, y.useMemo)(
              () => ({open: 0 === n.listboxState, disabled: n.disabled}),
              [n]
            ),
            defaultTag: 'label',
            name: 'Listbox.Label',
          });
        }),
        ev = L.RenderStrategy | L.Static,
        ey = Object.assign(eh, {
          Button: em,
          Label: eg,
          Options: U(function (e, t) {
            var n;
            let [r, o] = ef('Listbox.Options'),
              i = D(r.optionsRef, t),
              s = `headlessui-listbox-options-${A()}`,
              l = w(),
              a = w(),
              u = (0, y.useContext)(K),
              c = null !== u ? u === Y.Open : 0 === r.listboxState;
            (0, y.useEffect)(() => {
              var e;
              let t = r.optionsRef.current;
              t &&
                0 === r.listboxState &&
                t !== (null == (e = J(t)) ? void 0 : e.activeElement) &&
                t.focus({preventScroll: !0});
            }, [r.listboxState, r.optionsRef]);
            let f = R((e) => {
                switch ((a.dispose(), e.key)) {
                  case H.Space:
                    if ('' !== r.searchQuery)
                      return (
                        e.preventDefault(),
                        e.stopPropagation(),
                        o({type: 5, value: e.key})
                      );
                  case H.Enter:
                    if (
                      (e.preventDefault(),
                      e.stopPropagation(),
                      null !== r.activeOptionIndex)
                    ) {
                      let {dataRef: e} = r.options[r.activeOptionIndex];
                      r.propsRef.current.onChange(e.current.value);
                    }
                    0 === r.propsRef.current.mode &&
                      (o({type: 1}),
                      b().nextFrame(() => {
                        var e;
                        return null == (e = r.buttonRef.current)
                          ? void 0
                          : e.focus({preventScroll: !0});
                      }));
                    break;
                  case C(r.orientation, {
                    vertical: H.ArrowDown,
                    horizontal: H.ArrowRight,
                  }):
                    return (
                      e.preventDefault(),
                      e.stopPropagation(),
                      o({type: 4, focus: V.Next})
                    );
                  case C(r.orientation, {
                    vertical: H.ArrowUp,
                    horizontal: H.ArrowLeft,
                  }):
                    return (
                      e.preventDefault(),
                      e.stopPropagation(),
                      o({type: 4, focus: V.Previous})
                    );
                  case H.Home:
                  case H.PageUp:
                    return (
                      e.preventDefault(),
                      e.stopPropagation(),
                      o({type: 4, focus: V.First})
                    );
                  case H.End:
                  case H.PageDown:
                    return (
                      e.preventDefault(),
                      e.stopPropagation(),
                      o({type: 4, focus: V.Last})
                    );
                  case H.Escape:
                    return (
                      e.preventDefault(),
                      e.stopPropagation(),
                      o({type: 1}),
                      l.nextFrame(() => {
                        var e;
                        return null == (e = r.buttonRef.current)
                          ? void 0
                          : e.focus({preventScroll: !0});
                      })
                    );
                  case H.Tab:
                    e.preventDefault(), e.stopPropagation();
                    break;
                  default:
                    1 === e.key.length &&
                      (o({type: 5, value: e.key}),
                      a.setTimeout(() => o({type: 6}), 350));
                }
              }),
              d = _(() => {
                var e, t, n;
                return null !=
                  (n = null == (e = r.labelRef.current) ? void 0 : e.id)
                  ? n
                  : null == (t = r.buttonRef.current)
                  ? void 0
                  : t.id;
              }, [r.labelRef.current, r.buttonRef.current]),
              p = (0, y.useMemo)(() => ({open: 0 === r.listboxState}), [r]);
            return M({
              ourProps: {
                'aria-activedescendant':
                  null === r.activeOptionIndex ||
                  null == (n = r.options[r.activeOptionIndex])
                    ? void 0
                    : n.id,
                'aria-multiselectable': 1 === r.propsRef.current.mode || void 0,
                'aria-labelledby': d,
                'aria-orientation': r.orientation,
                id: s,
                onKeyDown: f,
                role: 'listbox',
                tabIndex: 0,
                ref: i,
              },
              theirProps: e,
              slot: p,
              defaultTag: 'ul',
              features: ev,
              visible: c,
              name: 'Listbox.Options',
            });
          }),
          Option: U(function (e, t) {
            let {disabled: n = !1, value: r, ...o} = e,
              [i, s] = ef('Listbox.Option'),
              l = `headlessui-listbox-option-${A()}`,
              a =
                null !== i.activeOptionIndex &&
                i.options[i.activeOptionIndex].id === l,
              {value: u, compare: c} = i.propsRef.current,
              f = C(i.propsRef.current.mode, {
                1: () => u.some((e) => c(e, r)),
                0: () => c(u, r),
              }),
              d = (0, y.useRef)(null),
              p = D(t, d);
            O(() => {
              if (0 !== i.listboxState || !a || 0 === i.activationTrigger)
                return;
              let e = b();
              return (
                e.requestAnimationFrame(() => {
                  var e, t;
                  null ==
                    (t = null == (e = d.current) ? void 0 : e.scrollIntoView) ||
                    t.call(e, {block: 'nearest'});
                }),
                e.dispose
              );
            }, [d, a, i.listboxState, i.activationTrigger, i.activeOptionIndex]);
            let h = (0, y.useRef)({disabled: n, value: r, domRef: d});
            O(() => {
              h.current.disabled = n;
            }, [h, n]),
              O(() => {
                h.current.value = r;
              }, [h, r]),
              O(() => {
                var e, t;
                h.current.textValue =
                  null == (t = null == (e = d.current) ? void 0 : e.textContent)
                    ? void 0
                    : t.toLowerCase();
              }, [h, d]);
            let m = R(() => i.propsRef.current.onChange(r));
            O(
              () => (
                s({type: 7, id: l, dataRef: h}), () => s({type: 8, id: l})
              ),
              [h, l]
            );
            let g = R((e) => {
                if (n) return e.preventDefault();
                m(),
                  0 === i.propsRef.current.mode &&
                    (s({type: 1}),
                    b().nextFrame(() => {
                      var e;
                      return null == (e = i.buttonRef.current)
                        ? void 0
                        : e.focus({preventScroll: !0});
                    }));
              }),
              v = R(() => {
                if (n) return s({type: 4, focus: V.Nothing});
                s({type: 4, focus: V.Specific, id: l});
              }),
              w = R(() => {
                n || a || s({type: 4, focus: V.Specific, id: l, trigger: 0});
              }),
              x = R(() => {
                n || !a || s({type: 4, focus: V.Nothing});
              }),
              k = (0, y.useMemo)(
                () => ({active: a, selected: f, disabled: n}),
                [a, f, n]
              );
            return M({
              ourProps: {
                id: l,
                ref: p,
                role: 'option',
                tabIndex: !0 === n ? void 0 : -1,
                'aria-disabled': !0 === n || void 0,
                'aria-selected': f,
                disabled: void 0,
                onClick: g,
                onFocus: v,
                onPointerMove: w,
                onMouseMove: w,
                onPointerLeave: x,
                onMouseLeave: x,
              },
              theirProps: o,
              slot: k,
              defaultTag: 'li',
              name: 'Listbox.Option',
            });
          }),
        });
    },
    38471: function (e, t, n) {
      'use strict';
      n.d(t, {
        J: function () {
          return i;
        },
      });
      var r = Object.prototype.hasOwnProperty;
      function o(e, t, n) {
        for (n of e.keys()) if (i(n, t)) return n;
      }
      function i(e, t) {
        var n, s, l;
        if (e === t) return !0;
        if (e && t && (n = e.constructor) === t.constructor) {
          if (n === Date) return e.getTime() === t.getTime();
          if (n === RegExp) return e.toString() === t.toString();
          if (n === Array) {
            if ((s = e.length) === t.length) for (; s-- && i(e[s], t[s]); );
            return -1 === s;
          }
          if (n === Set) {
            if (e.size !== t.size) return !1;
            for (s of e)
              if (
                ((l = s) && 'object' == typeof l && !(l = o(t, l))) ||
                !t.has(l)
              )
                return !1;
            return !0;
          }
          if (n === Map) {
            if (e.size !== t.size) return !1;
            for (s of e)
              if (
                ((l = s[0]) && 'object' == typeof l && !(l = o(t, l))) ||
                !i(s[1], t.get(l))
              )
                return !1;
            return !0;
          }
          if (n === ArrayBuffer)
            (e = new Uint8Array(e)), (t = new Uint8Array(t));
          else if (n === DataView) {
            if ((s = e.byteLength) === t.byteLength)
              for (; s-- && e.getInt8(s) === t.getInt8(s); );
            return -1 === s;
          }
          if (ArrayBuffer.isView(e)) {
            if ((s = e.byteLength) === t.byteLength)
              for (; s-- && e[s] === t[s]; );
            return -1 === s;
          }
          if (!n || 'object' == typeof e) {
            for (n in ((s = 0), e))
              if (
                (r.call(e, n) && ++s && !r.call(t, n)) ||
                !(n in t) ||
                !i(e[n], t[n])
              )
                return !1;
            return Object.keys(t).length === s;
          }
        }
        return e != e && t != t;
      }
    },
    95002: function (e, t, n) {
      'use strict';
      n.d(t, {
        kG: function () {
          return s;
        },
      });
      var r = /(%?)(%([sdjo]))/g;
      function o(e, ...t) {
        if (0 === t.length) return e;
        let n = 0,
          i = e.replace(r, (e, r, o, i) => {
            let s = t[n],
              l = (function (e, t) {
                switch (t) {
                  case 's':
                    return e;
                  case 'd':
                  case 'i':
                    return Number(e);
                  case 'j':
                    return JSON.stringify(e);
                  case 'o': {
                    if ('string' == typeof e) return e;
                    let t = JSON.stringify(e);
                    if ('{}' === t || '[]' === t || /^\[object .+?\]$/.test(t))
                      return e;
                    return t;
                  }
                }
              })(s, i);
            return r ? e : (n++, l);
          });
        return (
          n < t.length && (i += ` ${t.slice(n).join(' ')}`),
          (i = i.replace(/%{2,2}/g, '%'))
        );
      }
      var i = class extends Error {
          constructor(e, ...t) {
            super(e),
              (this.message = e),
              (this.name = 'Invariant Violation'),
              (this.message = o(e, ...t)),
              (function (e) {
                if (!e.stack) return;
                let t = e.stack.split('\n');
                t.splice(1, 2), (e.stack = t.join('\n'));
              })(this);
          }
        },
        s = (e, t, ...n) => {
          if (!e) throw new i(t, ...n);
        };
      s.as = (e, t, n, ...r) => {
        if (!t) {
          let t = null != e.prototype.name,
            i = t ? new e(o(n, r)) : e(o(n, r));
          throw i;
        }
      };
    },
  },
]);
