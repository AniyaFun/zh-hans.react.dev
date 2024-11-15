'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [757],
  {
    29757: function (e, t, i) {
      i.r(t),
        i.d(t, {
          closeLintPanel: function () {
            return y;
          },
          diagnosticCount: function () {
            return p;
          },
          forEachDiagnostic: function () {
            return z;
          },
          forceLinting: function () {
            return L;
          },
          lintGutter: function () {
            return X;
          },
          lintKeymap: function () {
            return C;
          },
          linter: function () {
            return A;
          },
          nextDiagnostic: function () {
            return x;
          },
          openLintPanel: function () {
            return k;
          },
          setDiagnostics: function () {
            return u;
          },
          setDiagnosticsEffect: function () {
            return f;
          },
        });
      var n = i(47421),
        o = i(78120);
      function s() {
        var e = arguments[0];
        'string' == typeof e && (e = document.createElement(e));
        var t = 1,
          i = arguments[1];
        if (
          i &&
          'object' == typeof i &&
          null == i.nodeType &&
          !Array.isArray(i)
        ) {
          for (var n in i)
            if (Object.prototype.hasOwnProperty.call(i, n)) {
              var o = i[n];
              'string' == typeof o
                ? e.setAttribute(n, o)
                : null != o && (e[n] = o);
            }
          t++;
        }
        for (; t < arguments.length; t++)
          !(function e(t, i) {
            if ('string' == typeof i) t.appendChild(document.createTextNode(i));
            else if (null == i);
            else if (null != i.nodeType) t.appendChild(i);
            else if (Array.isArray(i))
              for (var n = 0; n < i.length; n++) e(t, i[n]);
            else throw RangeError('Unsupported child node: ' + i);
          })(e, arguments[t]);
        return e;
      }
      class r {
        constructor(e, t, i) {
          (this.from = e), (this.to = t), (this.diagnostic = i);
        }
      }
      class l {
        constructor(e, t, i) {
          (this.diagnostics = e), (this.panel = t), (this.selected = i);
        }
        static init(e, t, i) {
          let o = e,
            s = i.facet(R).markerFilter;
          s && (o = s(o));
          let r = n.p.set(
            o.map((e) =>
              e.from == e.to ||
              (e.from == e.to - 1 && i.doc.lineAt(e.from).to == e.from)
                ? n.p.widget({widget: new D(e), diagnostic: e}).range(e.from)
                : n.p
                    .mark({
                      attributes: {
                        class: 'cm-lintRange cm-lintRange-' + e.severity,
                      },
                      diagnostic: e,
                    })
                    .range(e.from, e.to)
            ),
            !0
          );
          return new l(r, t, a(r));
        }
      }
      function a(e, t = null, i = 0) {
        let n = null;
        return (
          e.between(i, 1e9, (e, i, {spec: o}) => {
            if (!t || o.diagnostic == t)
              return (n = new r(e, i, o.diagnostic)), !1;
          }),
          n
        );
      }
      function c(e, t) {
        return !!(
          e.effects.some((e) => e.is(f)) || e.changes.touchesRange(t.pos)
        );
      }
      function d(e, t) {
        return e.field(g, !1)
          ? t
          : t.concat(
              o.Py.appendConfig.of([
                g,
                n.tk.decorations.compute([g], (e) => {
                  let {selected: t, panel: i} = e.field(g);
                  return t && i && t.from != t.to
                    ? n.p.set([v.range(t.from, t.to)])
                    : n.p.none;
                }),
                (0, n.bF)(w, {hideOn: c}),
                E,
              ])
            );
      }
      function u(e, t) {
        return {effects: d(e, [f.of(t)])};
      }
      let f = o.Py.define(),
        m = o.Py.define(),
        h = o.Py.define(),
        g = o.QQ.define({
          create: () => new l(n.p.none, null, null),
          update(e, t) {
            if (t.docChanged) {
              let i = e.diagnostics.map(t.changes),
                n = null;
              if (e.selected) {
                let o = t.changes.mapPos(e.selected.from, 1);
                n = a(i, e.selected.diagnostic, o) || a(i, null, o);
              }
              e = new l(i, e.panel, n);
            }
            for (let i of t.effects)
              i.is(f)
                ? (e = l.init(i.value, e.panel, t.state))
                : i.is(m)
                ? (e = new l(
                    e.diagnostics,
                    i.value ? O.open : null,
                    e.selected
                  ))
                : i.is(h) && (e = new l(e.diagnostics, e.panel, i.value));
            return e;
          },
          provide: (e) => [
            n.mH.from(e, (e) => e.panel),
            n.tk.decorations.from(e, (e) => e.diagnostics),
          ],
        });
      function p(e) {
        let t = e.field(g, !1);
        return t ? t.diagnostics.size : 0;
      }
      let v = n.p.mark({class: 'cm-lintRange cm-lintRange-active'});
      function w(e, t, i) {
        let {diagnostics: n} = e.state.field(g),
          o = [],
          s = 2e8,
          r = 0;
        n.between(
          t - (i < 0 ? 1 : 0),
          t + (i > 0 ? 1 : 0),
          (e, n, {spec: l}) => {
            t >= e &&
              t <= n &&
              (e == n || ((t > e || i > 0) && (t < n || i < 0))) &&
              (o.push(l.diagnostic),
              (s = Math.min(e, s)),
              (r = Math.max(n, r)));
          }
        );
        let l = e.state.facet(R).tooltipFilter;
        return (l && (o = l(o)), o.length)
          ? {
              pos: s,
              end: r,
              above: e.state.doc.lineAt(s).to < r,
              create: () => ({dom: b(e, o)}),
            }
          : null;
      }
      function b(e, t) {
        return s(
          'ul',
          {class: 'cm-tooltip-lint'},
          t.map((t) => S(e, t, !1))
        );
      }
      let k = (e) => {
          let t = e.state.field(g, !1);
          (t && t.panel) || e.dispatch({effects: d(e.state, [m.of(!0)])});
          let i = (0, n.Sd)(e, O.open);
          return i && i.dom.querySelector('.cm-panel-lint ul').focus(), !0;
        },
        y = (e) => {
          let t = e.state.field(g, !1);
          return !!t && !!t.panel && (e.dispatch({effects: m.of(!1)}), !0);
        },
        x = (e) => {
          let t = e.state.field(g, !1);
          if (!t) return !1;
          let i = e.state.selection.main,
            n = t.diagnostics.iter(i.to + 1);
          return (
            (!!n.value ||
              (!!(n = t.diagnostics.iter(0)).value &&
                (n.from != i.from || n.to != i.to))) &&
            (e.dispatch({
              selection: {anchor: n.from, head: n.to},
              scrollIntoView: !0,
            }),
            !0)
          );
        },
        C = [
          {key: 'Mod-Shift-m', run: k, preventDefault: !0},
          {key: 'F8', run: x},
        ],
        T = n.lg.fromClass(
          class {
            constructor(e) {
              (this.view = e), (this.timeout = -1), (this.set = !0);
              let {delay: t} = e.state.facet(R);
              (this.lintTime = Date.now() + t),
                (this.run = this.run.bind(this)),
                (this.timeout = setTimeout(this.run, t));
            }
            run() {
              let e = Date.now();
              if (e < this.lintTime - 10)
                setTimeout(this.run, this.lintTime - e);
              else {
                this.set = !1;
                let {state: e} = this.view,
                  {sources: t} = e.facet(R);
                Promise.all(t.map((e) => Promise.resolve(e(this.view)))).then(
                  (t) => {
                    let i = t.reduce((e, t) => e.concat(t));
                    this.view.state.doc == e.doc &&
                      this.view.dispatch(u(this.view.state, i));
                  },
                  (e) => {
                    (0, n.OO)(this.view.state, e);
                  }
                );
              }
            }
            update(e) {
              let t = e.state.facet(R);
              (e.docChanged ||
                t != e.startState.facet(R) ||
                (t.needsRefresh && t.needsRefresh(e))) &&
                ((this.lintTime = Date.now() + t.delay),
                this.set ||
                  ((this.set = !0),
                  (this.timeout = setTimeout(this.run, t.delay))));
            }
            force() {
              this.set && ((this.lintTime = Date.now()), this.run());
            }
            destroy() {
              clearTimeout(this.timeout);
            }
          }
        ),
        R = o.r$.define({
          combine: (e) =>
            Object.assign(
              {sources: e.map((e) => e.source)},
              (0, o.BO)(
                e.map((e) => e.config),
                {
                  delay: 750,
                  markerFilter: null,
                  tooltipFilter: null,
                  needsRefresh: null,
                },
                {
                  needsRefresh: (e, t) =>
                    e ? (t ? (i) => e(i) || t(i) : e) : t,
                }
              )
            ),
          enables: T,
        });
      function A(e, t = {}) {
        return R.of({source: e, config: t});
      }
      function L(e) {
        let t = e.plugin(T);
        t && t.force();
      }
      function P(e) {
        let t = [];
        if (e)
          e: for (let {name: i} of e) {
            for (let e = 0; e < i.length; e++) {
              let n = i[e];
              if (
                /[a-zA-Z]/.test(n) &&
                !t.some((e) => e.toLowerCase() == n.toLowerCase())
              ) {
                t.push(n);
                continue e;
              }
            }
            t.push('');
          }
        return t;
      }
      function S(e, t, i) {
        var n;
        let o = i ? P(t.actions) : [];
        return s(
          'li',
          {class: 'cm-diagnostic cm-diagnostic-' + t.severity},
          s(
            'span',
            {class: 'cm-diagnosticText'},
            t.renderMessage ? t.renderMessage() : t.message
          ),
          null === (n = t.actions) || void 0 === n
            ? void 0
            : n.map((i, n) => {
                let r = !1,
                  l = (n) => {
                    if ((n.preventDefault(), r)) return;
                    r = !0;
                    let o = a(e.state.field(g).diagnostics, t);
                    o && i.apply(e, o.from, o.to);
                  },
                  {name: c} = i,
                  d = o[n] ? c.indexOf(o[n]) : -1,
                  u =
                    d < 0
                      ? c
                      : [
                          c.slice(0, d),
                          s('u', c.slice(d, d + 1)),
                          c.slice(d + 1),
                        ];
                return s(
                  'button',
                  {
                    type: 'button',
                    class: 'cm-diagnosticAction',
                    onclick: l,
                    onmousedown: l,
                    'aria-label': ` Action: ${c}${
                      d < 0 ? '' : ` (access key "${o[n]})"`
                    }.`,
                  },
                  u
                );
              }),
          t.source && s('div', {class: 'cm-diagnosticSource'}, t.source)
        );
      }
      class D extends n.l9 {
        constructor(e) {
          super(), (this.diagnostic = e);
        }
        eq(e) {
          return e.diagnostic == this.diagnostic;
        }
        toDOM() {
          return s('span', {
            class: 'cm-lintPoint cm-lintPoint-' + this.diagnostic.severity,
          });
        }
      }
      class I {
        constructor(e, t) {
          (this.diagnostic = t),
            (this.id =
              'item_' + Math.floor(4294967295 * Math.random()).toString(16)),
            (this.dom = S(e, t, !0)),
            (this.dom.id = this.id),
            this.dom.setAttribute('role', 'option');
        }
      }
      class O {
        constructor(e) {
          (this.view = e), (this.items = []);
          let t = (t) => {
              if (27 == t.keyCode) y(this.view), this.view.focus();
              else if (38 == t.keyCode || 33 == t.keyCode)
                this.moveSelection(
                  (this.selectedIndex - 1 + this.items.length) %
                    this.items.length
                );
              else if (40 == t.keyCode || 34 == t.keyCode)
                this.moveSelection(
                  (this.selectedIndex + 1) % this.items.length
                );
              else if (36 == t.keyCode) this.moveSelection(0);
              else if (35 == t.keyCode)
                this.moveSelection(this.items.length - 1);
              else if (13 == t.keyCode) this.view.focus();
              else {
                if (
                  !(t.keyCode >= 65) ||
                  !(t.keyCode <= 90) ||
                  !(this.selectedIndex >= 0)
                )
                  return;
                let {diagnostic: i} = this.items[this.selectedIndex],
                  n = P(i.actions);
                for (let o = 0; o < n.length; o++)
                  if (n[o].toUpperCase().charCodeAt(0) == t.keyCode) {
                    let t = a(this.view.state.field(g).diagnostics, i);
                    t && i.actions[o].apply(e, t.from, t.to);
                  }
              }
              t.preventDefault();
            },
            i = (e) => {
              for (let t = 0; t < this.items.length; t++)
                this.items[t].dom.contains(e.target) && this.moveSelection(t);
            };
          (this.list = s('ul', {
            tabIndex: 0,
            role: 'listbox',
            'aria-label': this.view.state.phrase('Diagnostics'),
            onkeydown: t,
            onclick: i,
          })),
            (this.dom = s(
              'div',
              {class: 'cm-panel-lint'},
              this.list,
              s(
                'button',
                {
                  type: 'button',
                  name: 'close',
                  'aria-label': this.view.state.phrase('close'),
                  onclick: () => y(this.view),
                },
                '\xd7'
              )
            )),
            this.update();
        }
        get selectedIndex() {
          let e = this.view.state.field(g).selected;
          if (!e) return -1;
          for (let t = 0; t < this.items.length; t++)
            if (this.items[t].diagnostic == e.diagnostic) return t;
          return -1;
        }
        update() {
          let {diagnostics: e, selected: t} = this.view.state.field(g),
            i = 0,
            n = !1,
            o = null;
          for (
            e.between(0, this.view.state.doc.length, (e, s, {spec: r}) => {
              let l = -1,
                a;
              for (let e = i; e < this.items.length; e++)
                if (this.items[e].diagnostic == r.diagnostic) {
                  l = e;
                  break;
                }
              l < 0
                ? ((a = new I(this.view, r.diagnostic)),
                  this.items.splice(i, 0, a),
                  (n = !0))
                : ((a = this.items[l]),
                  l > i && (this.items.splice(i, l - i), (n = !0))),
                t && a.diagnostic == t.diagnostic
                  ? a.dom.hasAttribute('aria-selected') ||
                    (a.dom.setAttribute('aria-selected', 'true'), (o = a))
                  : a.dom.hasAttribute('aria-selected') &&
                    a.dom.removeAttribute('aria-selected'),
                i++;
            });
            i < this.items.length &&
            !(1 == this.items.length && this.items[0].diagnostic.from < 0);

          )
            (n = !0), this.items.pop();
          0 == this.items.length &&
            (this.items.push(
              new I(this.view, {
                from: -1,
                to: -1,
                severity: 'info',
                message: this.view.state.phrase('No diagnostics'),
              })
            ),
            (n = !0)),
            o
              ? (this.list.setAttribute('aria-activedescendant', o.id),
                this.view.requestMeasure({
                  key: this,
                  read: () => ({
                    sel: o.dom.getBoundingClientRect(),
                    panel: this.list.getBoundingClientRect(),
                  }),
                  write: ({sel: e, panel: t}) => {
                    e.top < t.top
                      ? (this.list.scrollTop -= t.top - e.top)
                      : e.bottom > t.bottom &&
                        (this.list.scrollTop += e.bottom - t.bottom);
                  },
                }))
              : this.selectedIndex < 0 &&
                this.list.removeAttribute('aria-activedescendant'),
            n && this.sync();
        }
        sync() {
          let e = this.list.firstChild;
          function t() {
            let t = e;
            (e = t.nextSibling), t.remove();
          }
          for (let i of this.items)
            if (i.dom.parentNode == this.list) {
              for (; e != i.dom; ) t();
              e = i.dom.nextSibling;
            } else this.list.insertBefore(i.dom, e);
          for (; e; ) t();
        }
        moveSelection(e) {
          if (this.selectedIndex < 0) return;
          let t = a(
            this.view.state.field(g).diagnostics,
            this.items[e].diagnostic
          );
          t &&
            this.view.dispatch({
              selection: {anchor: t.from, head: t.to},
              scrollIntoView: !0,
              effects: h.of(t),
            });
        }
        static open(e) {
          return new O(e);
        }
      }
      function B(e, t = 'viewBox="0 0 40 40"') {
        return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${t}>${encodeURIComponent(
          e
        )}</svg>')`;
      }
      function M(e) {
        return B(
          `<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${e}" fill="none" stroke-width=".7"/>`,
          'width="6" height="3"'
        );
      }
      let E = n.tk.baseTheme({
        '.cm-diagnostic': {
          padding: '3px 6px 3px 8px',
          marginLeft: '-1px',
          display: 'block',
          whiteSpace: 'pre-wrap',
        },
        '.cm-diagnostic-error': {borderLeft: '5px solid #d11'},
        '.cm-diagnostic-warning': {borderLeft: '5px solid orange'},
        '.cm-diagnostic-info': {borderLeft: '5px solid #999'},
        '.cm-diagnosticAction': {
          font: 'inherit',
          border: 'none',
          padding: '2px 4px',
          backgroundColor: '#444',
          color: 'white',
          borderRadius: '3px',
          marginLeft: '8px',
          cursor: 'pointer',
        },
        '.cm-diagnosticSource': {fontSize: '70%', opacity: 0.7},
        '.cm-lintRange': {
          backgroundPosition: 'left bottom',
          backgroundRepeat: 'repeat-x',
          paddingBottom: '0.7px',
        },
        '.cm-lintRange-error': {backgroundImage: M('#d11')},
        '.cm-lintRange-warning': {backgroundImage: M('orange')},
        '.cm-lintRange-info': {backgroundImage: M('#999')},
        '.cm-lintRange-active': {backgroundColor: '#ffdd9980'},
        '.cm-tooltip-lint': {padding: 0, margin: 0},
        '.cm-lintPoint': {
          position: 'relative',
          '&:after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: '-2px',
            borderLeft: '3px solid transparent',
            borderRight: '3px solid transparent',
            borderBottom: '4px solid #d11',
          },
        },
        '.cm-lintPoint-warning': {'&:after': {borderBottomColor: 'orange'}},
        '.cm-lintPoint-info': {'&:after': {borderBottomColor: '#999'}},
        '.cm-panel.cm-panel-lint': {
          position: 'relative',
          '& ul': {
            maxHeight: '100px',
            overflowY: 'auto',
            '& [aria-selected]': {
              backgroundColor: '#ddd',
              '& u': {textDecoration: 'underline'},
            },
            '&:focus [aria-selected]': {
              background_fallback: '#bdf',
              backgroundColor: 'Highlight',
              color_fallback: 'white',
              color: 'HighlightText',
            },
            '& u': {textDecoration: 'none'},
            padding: 0,
            margin: 0,
          },
          '& [name=close]': {
            position: 'absolute',
            top: '0',
            right: '2px',
            background: 'inherit',
            border: 'none',
            font: 'inherit',
            padding: 0,
            margin: 0,
          },
        },
      });
      class F extends n.SJ {
        constructor(e) {
          super(),
            (this.diagnostics = e),
            (this.severity = e.reduce((e, t) => {
              let i = t.severity;
              return 'error' == i || ('warning' == i && 'info' == e) ? i : e;
            }, 'info'));
        }
        toDOM(e) {
          let t = document.createElement('div');
          t.className = 'cm-lint-marker cm-lint-marker-' + this.severity;
          let i = this.diagnostics,
            n = e.state.facet(H).tooltipFilter;
          return (
            n && (i = n(i)),
            i.length &&
              (t.onmouseover = () =>
                (function (e, t, i) {
                  function n() {
                    let n,
                      o = e.elementAtHeight(
                        t.getBoundingClientRect().top + 5 - e.documentTop
                      ),
                      s = e.coordsAtPos(o.from);
                    s &&
                      e.dispatch({
                        effects: N.of({
                          pos: o.from,
                          above: !1,
                          create: () => ({
                            dom: b(e, i),
                            getCoords: () => t.getBoundingClientRect(),
                          }),
                        }),
                      }),
                      (t.onmouseout = t.onmousemove = null),
                      (n = (i) => {
                        let o = t.getBoundingClientRect();
                        if (
                          !(i.clientX > o.left - 10) ||
                          !(i.clientX < o.right + 10) ||
                          !(i.clientY > o.top - 10) ||
                          !(i.clientY < o.bottom + 10)
                        ) {
                          for (let e = i.target; e; e = e.parentNode)
                            if (
                              1 == e.nodeType &&
                              e.classList.contains('cm-tooltip-lint')
                            )
                              return;
                          window.removeEventListener('mousemove', n),
                            e.state.field(_) &&
                              e.dispatch({effects: N.of(null)});
                        }
                      }),
                      window.addEventListener('mousemove', n);
                  }
                  let {hoverTime: o} = e.state.facet(H),
                    s = setTimeout(n, o);
                  (t.onmouseout = () => {
                    clearTimeout(s), (t.onmouseout = t.onmousemove = null);
                  }),
                    (t.onmousemove = () => {
                      clearTimeout(s), (s = setTimeout(n, o));
                    });
                })(e, t, i)),
            t
          );
        }
      }
      let j = (0, n.v5)({
          class: 'cm-gutter-lint',
          markers: (e) => e.state.field($),
        }),
        $ = o.QQ.define({
          create: () => o.Xs.empty,
          update(e, t) {
            e = e.map(t.changes);
            let i = t.state.facet(H).markerFilter;
            for (let n of t.effects)
              if (n.is(f)) {
                let s = n.value;
                i && (s = i(s || [])),
                  (e = (function (e, t) {
                    let i = Object.create(null);
                    for (let n of t) {
                      let t = e.lineAt(n.from);
                      (i[t.from] || (i[t.from] = [])).push(n);
                    }
                    let n = [];
                    for (let e in i) n.push(new F(i[e]).range(+e));
                    return o.Xs.of(n, !0);
                  })(t.state.doc, s.slice(0)));
              }
            return e;
          },
        }),
        N = o.Py.define(),
        _ = o.QQ.define({
          create: () => null,
          update: (e, t) => (
            e &&
              t.docChanged &&
              (e = c(t, e)
                ? null
                : Object.assign(Object.assign({}, e), {
                    pos: t.changes.mapPos(e.pos),
                  })),
            t.effects.reduce((e, t) => (t.is(N) ? t.value : e), e)
          ),
          provide: (e) => n.hJ.from(e),
        }),
        Q = n.tk.baseTheme({
          '.cm-gutter-lint': {
            width: '1.4em',
            '& .cm-gutterElement': {padding: '.2em'},
          },
          '.cm-lint-marker': {width: '1em', height: '1em'},
          '.cm-lint-marker-info': {
            content: B(
              '<path fill="#aaf" stroke="#77e" stroke-width="6" stroke-linejoin="round" d="M5 5L35 5L35 35L5 35Z"/>'
            ),
          },
          '.cm-lint-marker-warning': {
            content: B(
              '<path fill="#fe8" stroke="#fd7" stroke-width="6" stroke-linejoin="round" d="M20 6L37 35L3 35Z"/>'
            ),
          },
          '.cm-lint-marker-error': {
            content: B(
              '<circle cx="20" cy="20" r="15" fill="#f87" stroke="#f43" stroke-width="6"/>'
            ),
          },
        }),
        H = o.r$.define({
          combine: (e) =>
            (0, o.BO)(e, {
              hoverTime: 300,
              markerFilter: null,
              tooltipFilter: null,
            }),
        });
      function X(e = {}) {
        return [H.of(e), $, j, Q, _];
      }
      function z(e, t) {
        let i = e.field(g, !1);
        if (i && i.diagnostics.size)
          for (let e = o.Xs.iter([i.diagnostics]); e.value; e.next())
            t(e.value.spec.diagnostic, e.from, e.to);
      }
    },
  },
]);
