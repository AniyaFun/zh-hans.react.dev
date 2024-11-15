'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [762],
  {
    47421: function (t, e, i) {
      let s;
      i.d(e, {
        $f: function () {
          return im;
        },
        AE: function () {
          return iB;
        },
        Eu: function () {
          return sm;
        },
        Nm: function () {
          return tI;
        },
        OO: function () {
          return tD;
        },
        SJ: function () {
          return i6;
        },
        Sd: function () {
          return i8;
        },
        ZO: function () {
          return iN;
        },
        bF: function () {
          return iZ;
        },
        gB: function () {
          return i0;
        },
        hJ: function () {
          return iX;
        },
        l9: function () {
          return ts;
        },
        lg: function () {
          return tR;
        },
        mH: function () {
          return i4;
        },
        p: function () {
          return tn;
        },
        tk: function () {
          return il;
        },
        v5: function () {
          return si;
        },
      });
      var o,
        n,
        r,
        l = i(78120),
        h = i(28699),
        a = i(33952);
      function c(t) {
        return (
          11 == t.nodeType ? (t.getSelection ? t : t.ownerDocument) : t
        ).getSelection();
      }
      function d(t, e) {
        return (
          !!e && (t == e || t.contains(1 != e.nodeType ? e.parentNode : e))
        );
      }
      function u(t, e) {
        if (!e.anchorNode) return !1;
        try {
          return d(t, e.anchorNode);
        } catch (t) {
          return !1;
        }
      }
      function f(t) {
        return 3 == t.nodeType
          ? M(t, 0, t.nodeValue.length).getClientRects()
          : 1 == t.nodeType
          ? t.getClientRects()
          : [];
      }
      function p(t, e, i, s) {
        return !!i && (m(t, e, i, s, -1) || m(t, e, i, s, 1));
      }
      function g(t) {
        for (var e = 0; ; e++) if (!(t = t.previousSibling)) return e;
      }
      function m(t, e, i, s, o) {
        for (;;) {
          if (t == i && e == s) return !0;
          if (e == (o < 0 ? 0 : v(t))) {
            if ('DIV' == t.nodeName) return !1;
            let i = t.parentNode;
            if (!i || 1 != i.nodeType) return !1;
            (e = g(t) + (o < 0 ? 0 : 1)), (t = i);
          } else {
            if (
              1 != t.nodeType ||
              (1 == (t = t.childNodes[e + (o < 0 ? -1 : 0)]).nodeType &&
                'false' == t.contentEditable)
            )
              return !1;
            e = o < 0 ? v(t) : 0;
          }
        }
      }
      function v(t) {
        return 3 == t.nodeType ? t.nodeValue.length : t.childNodes.length;
      }
      let w = {left: 0, right: 0, top: 0, bottom: 0};
      function b(t, e) {
        let i = e ? t.left : t.right;
        return {left: i, right: i, top: t.top, bottom: t.bottom};
      }
      class y {
        constructor() {
          (this.anchorNode = null),
            (this.anchorOffset = 0),
            (this.focusNode = null),
            (this.focusOffset = 0);
        }
        eq(t) {
          return (
            this.anchorNode == t.anchorNode &&
            this.anchorOffset == t.anchorOffset &&
            this.focusNode == t.focusNode &&
            this.focusOffset == t.focusOffset
          );
        }
        setRange(t) {
          this.set(t.anchorNode, t.anchorOffset, t.focusNode, t.focusOffset);
        }
        set(t, e, i, s) {
          (this.anchorNode = t),
            (this.anchorOffset = e),
            (this.focusNode = i),
            (this.focusOffset = s);
        }
      }
      let x = null;
      function S(t) {
        if (t.setActive) return t.setActive();
        if (x) return t.focus(x);
        let e = [];
        for (
          let i = t;
          i && (e.push(i, i.scrollTop, i.scrollLeft), i != i.ownerDocument);
          i = i.parentNode
        );
        if (
          (t.focus(
            null == x
              ? {
                  get preventScroll() {
                    return (x = {preventScroll: !0}), !0;
                  },
                }
              : void 0
          ),
          !x)
        ) {
          x = !1;
          for (let t = 0; t < e.length; ) {
            let i = e[t++],
              s = e[t++],
              o = e[t++];
            i.scrollTop != s && (i.scrollTop = s),
              i.scrollLeft != o && (i.scrollLeft = o);
          }
        }
      }
      function M(t, e, i = e) {
        let o = s || (s = document.createRange());
        return o.setEnd(t, i), o.setStart(t, e), o;
      }
      function k(t, e, i) {
        let s = {key: e, code: e, keyCode: i, which: i, cancelable: !0},
          o = new KeyboardEvent('keydown', s);
        (o.synthetic = !0), t.dispatchEvent(o);
        let n = new KeyboardEvent('keyup', s);
        return (
          (n.synthetic = !0),
          t.dispatchEvent(n),
          o.defaultPrevented || n.defaultPrevented
        );
      }
      function C(t) {
        for (; t.attributes.length; ) t.removeAttributeNode(t.attributes[0]);
      }
      class A {
        constructor(t, e, i = !0) {
          (this.node = t), (this.offset = e), (this.precise = i);
        }
        static before(t, e) {
          return new A(t.parentNode, g(t), e);
        }
        static after(t, e) {
          return new A(t.parentNode, g(t) + 1, e);
        }
      }
      let D = [];
      class T {
        constructor() {
          (this.parent = null), (this.dom = null), (this.dirty = 2);
        }
        get overrideDOMText() {
          return null;
        }
        get posAtStart() {
          return this.parent ? this.parent.posBefore(this) : 0;
        }
        get posAtEnd() {
          return this.posAtStart + this.length;
        }
        posBefore(t) {
          let e = this.posAtStart;
          for (let i of this.children) {
            if (i == t) return e;
            e += i.length + i.breakAfter;
          }
          throw RangeError('Invalid child in posBefore');
        }
        posAfter(t) {
          return this.posBefore(t) + t.length;
        }
        coordsAt(t, e) {
          return null;
        }
        sync(t, e) {
          if (2 & this.dirty) {
            let i = this.dom,
              s = null,
              o;
            for (let n of this.children) {
              if (n.dirty) {
                if (!n.dom && (o = s ? s.nextSibling : i.firstChild)) {
                  let t = T.get(o);
                  (!t || (!t.parent && t.canReuseDOM(n))) && n.reuseDOM(o);
                }
                n.sync(t, e), (n.dirty = 0);
              }
              if (
                ((o = s ? s.nextSibling : i.firstChild),
                e &&
                  !e.written &&
                  e.node == i &&
                  o != n.dom &&
                  (e.written = !0),
                n.dom.parentNode == i)
              )
                for (; o && o != n.dom; ) o = O(o);
              else i.insertBefore(n.dom, o);
              s = n.dom;
            }
            for (
              (o = s ? s.nextSibling : i.firstChild) &&
              e &&
              e.node == i &&
              (e.written = !0);
              o;

            )
              o = O(o);
          } else if (1 & this.dirty)
            for (let i of this.children)
              i.dirty && (i.sync(t, e), (i.dirty = 0));
        }
        reuseDOM(t) {}
        localPosFromDOM(t, e) {
          let i;
          if (t == this.dom) i = this.dom.childNodes[e];
          else {
            let s = 0 == v(t) ? 0 : 0 == e ? -1 : 1;
            for (;;) {
              let e = t.parentNode;
              if (e == this.dom) break;
              0 == s &&
                e.firstChild != e.lastChild &&
                (s = t == e.firstChild ? -1 : 1),
                (t = e);
            }
            i = s < 0 ? t : t.nextSibling;
          }
          if (i == this.dom.firstChild) return 0;
          for (; i && !T.get(i); ) i = i.nextSibling;
          if (!i) return this.length;
          for (let t = 0, e = 0; ; t++) {
            let s = this.children[t];
            if (s.dom == i) return e;
            e += s.length + s.breakAfter;
          }
        }
        domBoundsAround(t, e, i = 0) {
          let s = -1,
            o = -1,
            n = -1,
            r = -1;
          for (let l = 0, h = i, a = i; l < this.children.length; l++) {
            let i = this.children[l],
              c = h + i.length;
            if (h < t && c > e) return i.domBoundsAround(t, e, h);
            if (
              (c >= t && -1 == s && ((s = l), (o = h)),
              h > e && i.dom.parentNode == this.dom)
            ) {
              (n = l), (r = a);
              break;
            }
            (a = c), (h = c + i.breakAfter);
          }
          return {
            from: o,
            to: r < 0 ? i + this.length : r,
            startDOM:
              (s ? this.children[s - 1].dom.nextSibling : null) ||
              this.dom.firstChild,
            endDOM:
              n < this.children.length && n >= 0 ? this.children[n].dom : null,
          };
        }
        markDirty(t = !1) {
          (this.dirty |= 2), this.markParentsDirty(t);
        }
        markParentsDirty(t) {
          for (let e = this.parent; e; e = e.parent) {
            if ((t && (e.dirty |= 2), 1 & e.dirty)) return;
            (e.dirty |= 1), (t = !1);
          }
        }
        setParent(t) {
          this.parent != t &&
            ((this.parent = t), this.dirty && this.markParentsDirty(!0));
        }
        setDOM(t) {
          this.dom && (this.dom.cmView = null),
            (this.dom = t),
            (t.cmView = this);
        }
        get rootView() {
          for (let t = this; ; ) {
            let e = t.parent;
            if (!e) return t;
            t = e;
          }
        }
        replaceChildren(t, e, i = D) {
          this.markDirty();
          for (let i = t; i < e; i++) {
            let t = this.children[i];
            t.parent == this && t.destroy();
          }
          this.children.splice(t, e - t, ...i);
          for (let t = 0; t < i.length; t++) i[t].setParent(this);
        }
        ignoreMutation(t) {
          return !1;
        }
        ignoreEvent(t) {
          return !1;
        }
        childCursor(t = this.length) {
          return new E(this.children, t, this.children.length);
        }
        childPos(t, e = 1) {
          return this.childCursor().findPos(t, e);
        }
        toString() {
          let t = this.constructor.name.replace('View', '');
          return (
            t +
            (this.children.length
              ? '(' + this.children.join() + ')'
              : this.length
              ? '[' + ('Text' == t ? this.text : this.length) + ']'
              : '') +
            (this.breakAfter ? '#' : '')
          );
        }
        static get(t) {
          return t.cmView;
        }
        get isEditable() {
          return !0;
        }
        get isWidget() {
          return !1;
        }
        get isHidden() {
          return !1;
        }
        merge(t, e, i, s, o, n) {
          return !1;
        }
        become(t) {
          return !1;
        }
        canReuseDOM(t) {
          return t.constructor == this.constructor;
        }
        getSide() {
          return 0;
        }
        destroy() {
          this.parent = null;
        }
      }
      function O(t) {
        let e = t.nextSibling;
        return t.parentNode.removeChild(t), e;
      }
      T.prototype.breakAfter = 0;
      class E {
        constructor(t, e, i) {
          (this.children = t), (this.pos = e), (this.i = i), (this.off = 0);
        }
        findPos(t, e = 1) {
          for (;;) {
            if (
              t > this.pos ||
              (t == this.pos &&
                (e > 0 || 0 == this.i || this.children[this.i - 1].breakAfter))
            )
              return (this.off = t - this.pos), this;
            let i = this.children[--this.i];
            this.pos -= i.length + i.breakAfter;
          }
        }
      }
      function R(t, e, i, s, o, n, r, l, h) {
        let {children: a} = t,
          c = a.length ? a[e] : null,
          d = n.length ? n[n.length - 1] : null,
          u = d ? d.breakAfter : r;
        if (
          !(
            e == s &&
            c &&
            !r &&
            !u &&
            n.length < 2 &&
            c.merge(i, o, n.length ? d : null, 0 == i, l, h)
          )
        ) {
          if (s < a.length) {
            let t = a[s];
            t && o < t.length
              ? (e == s && ((t = t.split(o)), (o = 0)),
                !u && d && t.merge(0, o, d, !0, 0, h)
                  ? (n[n.length - 1] = t)
                  : (o && t.merge(0, o, null, !1, 0, h), n.push(t)))
              : (null == t ? void 0 : t.breakAfter) &&
                (d ? (d.breakAfter = 1) : (r = 1)),
              s++;
          }
          for (
            c &&
            ((c.breakAfter = r),
            i > 0 &&
              (!r && n.length && c.merge(i, c.length, n[0], !1, l, 0)
                ? (c.breakAfter = n.shift().breakAfter)
                : (i < c.length ||
                    (c.children.length &&
                      0 == c.children[c.children.length - 1].length)) &&
                  c.merge(i, c.length, null, !1, l, 0),
              e++));
            e < s && n.length;

          )
            if (a[s - 1].become(n[n.length - 1]))
              s--, n.pop(), (h = n.length ? 0 : l);
            else if (a[e].become(n[0])) e++, n.shift(), (l = n.length ? 0 : h);
            else break;
          !n.length &&
            e &&
            s < a.length &&
            !a[e - 1].breakAfter &&
            a[s].merge(0, 0, a[e - 1], !1, l, h) &&
            e--,
            (e < s || n.length) && t.replaceChildren(e, s, n);
        }
      }
      function B(t, e, i, s, o, n) {
        let r = t.childCursor(),
          {i: l, off: h} = r.findPos(i, 1),
          {i: a, off: c} = r.findPos(e, -1),
          d = e - i;
        for (let t of s) d += t.length;
        (t.length += d), R(t, a, c, l, h, s, 0, o, n);
      }
      let L =
          'undefined' != typeof navigator
            ? navigator
            : {userAgent: '', vendor: '', platform: ''},
        H =
          'undefined' != typeof document
            ? document
            : {documentElement: {style: {}}},
        V = /Edge\/(\d+)/.exec(L.userAgent),
        N = /MSIE \d/.test(L.userAgent),
        P = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(L.userAgent),
        W = !!(N || P || V),
        z = !W && /gecko\/(\d+)/i.test(L.userAgent),
        F = !W && /Chrome\/(\d+)/.exec(L.userAgent),
        I = 'webkitFontSmoothing' in H.documentElement.style,
        K = !W && /Apple Computer/.test(L.vendor),
        j = K && (/Mobile\/\w+/.test(L.userAgent) || L.maxTouchPoints > 2);
      var q = {
        mac: j || /Mac/.test(L.platform),
        windows: /Win/.test(L.platform),
        linux: /Linux|X11/.test(L.platform),
        ie: W,
        ie_version: N ? H.documentMode || 6 : P ? +P[1] : V ? +V[1] : 0,
        gecko: z,
        gecko_version: z
          ? +(/Firefox\/(\d+)/.exec(L.userAgent) || [0, 0])[1]
          : 0,
        chrome: !!F,
        chrome_version: F ? +F[1] : 0,
        ios: j,
        android: /Android\b/.test(L.userAgent),
        webkit: I,
        safari: K,
        webkit_version: I
          ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1]
          : 0,
        tabSize:
          null != H.documentElement.style.tabSize
            ? 'tab-size'
            : '-moz-tab-size',
      };
      class $ extends T {
        constructor(t) {
          super(), (this.text = t);
        }
        get length() {
          return this.text.length;
        }
        createDOM(t) {
          this.setDOM(t || document.createTextNode(this.text));
        }
        sync(t, e) {
          this.dom || this.createDOM(),
            this.dom.nodeValue != this.text &&
              (e && e.node == this.dom && (e.written = !0),
              (this.dom.nodeValue = this.text));
        }
        reuseDOM(t) {
          3 == t.nodeType && this.createDOM(t);
        }
        merge(t, e, i) {
          return (
            (!i ||
              (i instanceof $ && !(this.length - (e - t) + i.length > 256))) &&
            ((this.text =
              this.text.slice(0, t) + (i ? i.text : '') + this.text.slice(e)),
            this.markDirty(),
            !0)
          );
        }
        split(t) {
          let e = new $(this.text.slice(t));
          return (this.text = this.text.slice(0, t)), this.markDirty(), e;
        }
        localPosFromDOM(t, e) {
          return t == this.dom ? e : e ? this.text.length : 0;
        }
        domAtPos(t) {
          return new A(this.dom, t);
        }
        domBoundsAround(t, e, i) {
          return {
            from: i,
            to: i + this.length,
            startDOM: this.dom,
            endDOM: this.dom.nextSibling,
          };
        }
        coordsAt(t, e) {
          return X(this.dom, t, e);
        }
      }
      class G extends T {
        constructor(t, e = [], i = 0) {
          for (let s of (super(),
          (this.mark = t),
          (this.children = e),
          (this.length = i),
          e))
            s.setParent(this);
        }
        setAttrs(t) {
          if (
            (C(t),
            this.mark.class && (t.className = this.mark.class),
            this.mark.attrs)
          )
            for (let e in this.mark.attrs)
              t.setAttribute(e, this.mark.attrs[e]);
          return t;
        }
        reuseDOM(t) {
          t.nodeName == this.mark.tagName.toUpperCase() &&
            (this.setDOM(t), (this.dirty |= 6));
        }
        sync(t, e) {
          this.dom
            ? 4 & this.dirty && this.setAttrs(this.dom)
            : this.setDOM(
                this.setAttrs(document.createElement(this.mark.tagName))
              ),
            super.sync(t, e);
        }
        merge(t, e, i, s, o, n) {
          return (
            (!i ||
              (!!(i instanceof G && i.mark.eq(this.mark)) &&
                (!t || !(o <= 0)) &&
                (!(e < this.length) || !(n <= 0)))) &&
            (B(this, t, e, i ? i.children : [], o - 1, n - 1),
            this.markDirty(),
            !0)
          );
        }
        split(t) {
          let e = [],
            i = 0,
            s = -1,
            o = 0;
          for (let n of this.children) {
            let r = i + n.length;
            r > t && e.push(i < t ? n.split(t - i) : n),
              s < 0 && i >= t && (s = o),
              (i = r),
              o++;
          }
          let n = this.length - t;
          return (
            (this.length = t),
            s > -1 && ((this.children.length = s), this.markDirty()),
            new G(this.mark, e, n)
          );
        }
        domAtPos(t) {
          return J(this, t);
        }
        coordsAt(t, e) {
          return Z(this, t, e);
        }
      }
      function X(t, e, i) {
        let s = t.nodeValue.length;
        e > s && (e = s);
        let o = e,
          n = e,
          r = 0;
        (0 == e && i < 0) || (e == s && i >= 0)
          ? !(q.chrome || q.gecko) &&
            (e ? (o--, (r = 1)) : n < s && (n++, (r = -1)))
          : i < 0
          ? o--
          : n < s && n++;
        let l = M(t, o, n).getClientRects();
        if (!l.length) return w;
        let h = l[(r ? r < 0 : i >= 0) ? 0 : l.length - 1];
        return (
          q.safari &&
            !r &&
            0 == h.width &&
            (h = Array.prototype.find.call(l, (t) => t.width) || h),
          r ? b(h, r < 0) : h || null
        );
      }
      class _ extends T {
        constructor(t, e, i) {
          super(),
            (this.widget = t),
            (this.length = e),
            (this.side = i),
            (this.prevWidget = null);
        }
        static create(t, e, i) {
          return new (t.customView || _)(t, e, i);
        }
        split(t) {
          let e = _.create(this.widget, this.length - t, this.side);
          return (this.length -= t), e;
        }
        sync(t) {
          (this.dom && this.widget.updateDOM(this.dom, t)) ||
            (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom),
            (this.prevWidget = null),
            this.setDOM(this.widget.toDOM(t)),
            (this.dom.contentEditable = 'false'));
        }
        getSide() {
          return this.side;
        }
        merge(t, e, i, s, o, n) {
          return (
            (!i ||
              (i instanceof _ &&
                !!this.widget.compare(i.widget) &&
                (!(t > 0) || !(o <= 0)) &&
                (!(e < this.length) || !(n <= 0)))) &&
            ((this.length = t + (i ? i.length : 0) + (this.length - e)), !0)
          );
        }
        become(t) {
          return (
            t.length == this.length &&
            t instanceof _ &&
            t.side == this.side &&
            this.widget.constructor == t.widget.constructor &&
            (this.widget.compare(t.widget) || this.markDirty(!0),
            this.dom && !this.prevWidget && (this.prevWidget = this.widget),
            (this.widget = t.widget),
            !0)
          );
        }
        ignoreMutation() {
          return !0;
        }
        ignoreEvent(t) {
          return this.widget.ignoreEvent(t);
        }
        get overrideDOMText() {
          if (0 == this.length) return l.xv.empty;
          let t = this;
          for (; t.parent; ) t = t.parent;
          let {view: e} = t,
            i = e && e.state.doc,
            s = this.posAtStart;
          return i ? i.slice(s, s + this.length) : l.xv.empty;
        }
        domAtPos(t) {
          return (this.length ? 0 == t : this.side > 0)
            ? A.before(this.dom)
            : A.after(this.dom, t == this.length);
        }
        domBoundsAround() {
          return null;
        }
        coordsAt(t, e) {
          let i = this.dom.getClientRects(),
            s = null;
          if (!i.length) return w;
          for (
            let e = t > 0 ? i.length - 1 : 0;
            (s = i[e]),
              t > 0 ? 0 != e : e != i.length - 1 && !(s.top < s.bottom);
            e += t > 0 ? -1 : 1
          );
          return this.length ? s : b(s, this.side > 0);
        }
        get isEditable() {
          return !1;
        }
        get isWidget() {
          return !0;
        }
        get isHidden() {
          return this.widget.isHidden;
        }
        destroy() {
          super.destroy(), this.dom && this.widget.destroy(this.dom);
        }
      }
      class U extends _ {
        domAtPos(t) {
          let {topView: e, text: i} = this.widget;
          return e
            ? Y(
                t,
                0,
                e,
                i,
                (t, e) => t.domAtPos(e),
                (t) => new A(i, Math.min(t, i.nodeValue.length))
              )
            : new A(i, Math.min(t, i.nodeValue.length));
        }
        sync() {
          this.setDOM(this.widget.toDOM());
        }
        localPosFromDOM(t, e) {
          let {topView: i, text: s} = this.widget;
          return i
            ? (function t(e, i, s, o) {
                if (s instanceof G) {
                  let n = 0;
                  for (let r of s.children) {
                    let s = d(r.dom, o);
                    if (d(r.dom, e))
                      return n + (s ? t(e, i, r, o) : r.localPosFromDOM(e, i));
                    n += s ? o.nodeValue.length : r.length;
                  }
                } else if (s.dom == o) return Math.min(i, o.nodeValue.length);
                return s.localPosFromDOM(e, i);
              })(t, e, i, s)
            : Math.min(e, this.length);
        }
        ignoreMutation() {
          return !1;
        }
        get overrideDOMText() {
          return null;
        }
        coordsAt(t, e) {
          let {topView: i, text: s} = this.widget;
          return i
            ? Y(
                t,
                e,
                i,
                s,
                (t, e, i) => t.coordsAt(e, i),
                (t, e) => X(s, t, e)
              )
            : X(s, t, e);
        }
        destroy() {
          var t;
          super.destroy(),
            null === (t = this.widget.topView) || void 0 === t || t.destroy();
        }
        get isEditable() {
          return !0;
        }
        canReuseDOM() {
          return !0;
        }
      }
      function Y(t, e, i, s, o, n) {
        if (i instanceof G) {
          for (let r = i.dom.firstChild; r; r = r.nextSibling) {
            let i = T.get(r);
            if (!i) return n(t, e);
            let l = d(r, s),
              h = i.length + (l ? s.nodeValue.length : 0);
            if (t < h || (t == h && 0 >= i.getSide()))
              return l ? Y(t, e, i, s, o, n) : o(i, t, e);
            t -= h;
          }
          return o(i, i.length, -1);
        }
        return i.dom == s ? n(t, e) : o(i, t, e);
      }
      class Q extends T {
        constructor(t) {
          super(), (this.side = t);
        }
        get length() {
          return 0;
        }
        merge() {
          return !1;
        }
        become(t) {
          return t instanceof Q && t.side == this.side;
        }
        split() {
          return new Q(this.side);
        }
        sync() {
          if (!this.dom) {
            let t = document.createElement('img');
            (t.className = 'cm-widgetBuffer'),
              t.setAttribute('aria-hidden', 'true'),
              this.setDOM(t);
          }
        }
        getSide() {
          return this.side;
        }
        domAtPos(t) {
          return this.side > 0 ? A.before(this.dom) : A.after(this.dom);
        }
        localPosFromDOM() {
          return 0;
        }
        domBoundsAround() {
          return null;
        }
        coordsAt(t) {
          let e = this.dom.getBoundingClientRect(),
            i = (function (t, e) {
              let i = t.parent,
                s = i ? i.children.indexOf(t) : -1;
              for (; i && s >= 0; )
                if (e < 0 ? s > 0 : s < i.children.length) {
                  let t = i.children[s + e];
                  if (t instanceof $) {
                    let i = t.coordsAt(e < 0 ? t.length : 0, e);
                    if (i) return i;
                  }
                  s += e;
                } else if (i instanceof G && i.parent)
                  (s = i.parent.children.indexOf(i) + (e < 0 ? 0 : 1)),
                    (i = i.parent);
                else {
                  let t = i.dom.lastChild;
                  if (t && 'BR' == t.nodeName) return t.getClientRects()[0];
                  break;
                }
            })(this, this.side > 0 ? -1 : 1);
          return i && i.top < e.bottom && i.bottom > e.top
            ? {left: e.left, right: e.right, top: i.top, bottom: i.bottom}
            : e;
        }
        get overrideDOMText() {
          return l.xv.empty;
        }
        get isHidden() {
          return !0;
        }
      }
      function J(t, e) {
        let i = t.dom,
          {children: s} = t,
          o = 0;
        for (let t = 0; o < s.length; o++) {
          let n = s[o],
            r = t + n.length;
          if (!(r == t && 0 >= n.getSide())) {
            if (e > t && e < r && n.dom.parentNode == i)
              return n.domAtPos(e - t);
            if (e <= t) break;
            t = r;
          }
        }
        for (let t = o; t > 0; t--) {
          let e = s[t - 1];
          if (e.dom.parentNode == i) return e.domAtPos(e.length);
        }
        for (let t = o; t < s.length; t++) {
          let e = s[t];
          if (e.dom.parentNode == i) return e.domAtPos(0);
        }
        return new A(i, 0);
      }
      function Z(t, e, i) {
        let s = null,
          o = -1,
          n = null,
          r = -1;
        !(function t(e, l) {
          for (let h = 0, a = 0; h < e.children.length && a <= l; h++) {
            let c = e.children[h],
              d = a + c.length;
            d >= l &&
              (c.children.length
                ? t(c, l - a)
                : (!n || (n instanceof Q && i > 0)) &&
                  (d > l || (a == d && c.getSide() > 0))
                ? ((n = c), (r = l - a))
                : (a < l || (a == d && 0 > c.getSide())) &&
                  ((s = c), (o = l - a))),
              (a = d);
          }
        })(t, e);
        let l = (i < 0 ? s : n) || s || n;
        return l
          ? l.coordsAt(Math.max(0, l == s ? o : r), i)
          : (function (t) {
              let e = t.dom.lastChild;
              if (!e) return t.dom.getBoundingClientRect();
              let i = f(e);
              return i[i.length - 1] || null;
            })(t);
      }
      function tt(t, e) {
        for (let i in t)
          'class' == i && e.class
            ? (e.class += ' ' + t.class)
            : 'style' == i && e.style
            ? (e.style += ';' + t.style)
            : (e[i] = t[i]);
        return e;
      }
      function te(t, e) {
        if (t == e) return !0;
        if (!t || !e) return !1;
        let i = Object.keys(t),
          s = Object.keys(e);
        if (i.length != s.length) return !1;
        for (let o of i) if (-1 == s.indexOf(o) || t[o] !== e[o]) return !1;
        return !0;
      }
      function ti(t, e, i) {
        let s = null;
        if (e) for (let o in e) (i && o in i) || t.removeAttribute((s = o));
        if (i)
          for (let o in i) (e && e[o] == i[o]) || t.setAttribute((s = o), i[o]);
        return !!s;
      }
      $.prototype.children = _.prototype.children = Q.prototype.children = D;
      class ts {
        eq(t) {
          return !1;
        }
        updateDOM(t, e) {
          return !1;
        }
        compare(t) {
          return this == t || (this.constructor == t.constructor && this.eq(t));
        }
        get estimatedHeight() {
          return -1;
        }
        ignoreEvent(t) {
          return !0;
        }
        get customView() {
          return null;
        }
        get isHidden() {
          return !1;
        }
        destroy(t) {}
      }
      var to =
        (((o = to || (to = {}))[(o.Text = 0)] = 'Text'),
        (o[(o.WidgetBefore = 1)] = 'WidgetBefore'),
        (o[(o.WidgetAfter = 2)] = 'WidgetAfter'),
        (o[(o.WidgetRange = 3)] = 'WidgetRange'),
        o);
      class tn extends l.uU {
        constructor(t, e, i, s) {
          super(),
            (this.startSide = t),
            (this.endSide = e),
            (this.widget = i),
            (this.spec = s);
        }
        get heightRelevant() {
          return !1;
        }
        static mark(t) {
          return new tr(t);
        }
        static widget(t) {
          let e = t.side || 0,
            i = !!t.block;
          return (
            (e += i ? (e > 0 ? 3e8 : -4e8) : e > 0 ? 1e8 : -1e8),
            new th(t, e, e, i, t.widget || null, !1)
          );
        }
        static replace(t) {
          let e = !!t.block,
            i,
            s;
          if (t.isBlockGap) (i = -5e8), (s = 4e8);
          else {
            let {start: o, end: n} = ta(t, e);
            (i = (o ? (e ? -3e8 : -1) : 5e8) - 1),
              (s = (n ? (e ? 2e8 : 1) : -6e8) + 1);
          }
          return new th(t, i, s, e, t.widget || null, !0);
        }
        static line(t) {
          return new tl(t);
        }
        static set(t, e = !1) {
          return l.Xs.of(t, e);
        }
        hasHeight() {
          return !!this.widget && this.widget.estimatedHeight > -1;
        }
      }
      tn.none = l.Xs.empty;
      class tr extends tn {
        constructor(t) {
          let {start: e, end: i} = ta(t);
          super(e ? -1 : 5e8, i ? 1 : -6e8, null, t),
            (this.tagName = t.tagName || 'span'),
            (this.class = t.class || ''),
            (this.attrs = t.attributes || null);
        }
        eq(t) {
          return (
            this == t ||
            (t instanceof tr &&
              this.tagName == t.tagName &&
              this.class == t.class &&
              te(this.attrs, t.attrs))
          );
        }
        range(t, e = t) {
          if (t >= e) throw RangeError('Mark decorations may not be empty');
          return super.range(t, e);
        }
      }
      tr.prototype.point = !1;
      class tl extends tn {
        constructor(t) {
          super(-2e8, -2e8, null, t);
        }
        eq(t) {
          return (
            t instanceof tl &&
            this.spec.class == t.spec.class &&
            te(this.spec.attributes, t.spec.attributes)
          );
        }
        range(t, e = t) {
          if (e != t)
            throw RangeError('Line decoration ranges must be zero-length');
          return super.range(t, e);
        }
      }
      (tl.prototype.mapMode = l.gc.TrackBefore), (tl.prototype.point = !0);
      class th extends tn {
        constructor(t, e, i, s, o, n) {
          super(e, i, o, t),
            (this.block = s),
            (this.isReplace = n),
            (this.mapMode = s
              ? e <= 0
                ? l.gc.TrackBefore
                : l.gc.TrackAfter
              : l.gc.TrackDel);
        }
        get type() {
          return this.startSide < this.endSide
            ? to.WidgetRange
            : this.startSide <= 0
            ? to.WidgetBefore
            : to.WidgetAfter;
        }
        get heightRelevant() {
          return (
            this.block || (!!this.widget && this.widget.estimatedHeight >= 5)
          );
        }
        eq(t) {
          var e, i;
          return (
            t instanceof th &&
            ((e = this.widget) == (i = t.widget) ||
              !!(e && i && e.compare(i))) &&
            this.block == t.block &&
            this.startSide == t.startSide &&
            this.endSide == t.endSide
          );
        }
        range(t, e = t) {
          if (
            this.isReplace &&
            (t > e || (t == e && this.startSide > 0 && this.endSide <= 0))
          )
            throw RangeError('Invalid range for replacement decoration');
          if (!this.isReplace && e != t)
            throw RangeError(
              'Widget decorations can only have zero-length ranges'
            );
          return super.range(t, e);
        }
      }
      function ta(t, e = !1) {
        let {inclusiveStart: i, inclusiveEnd: s} = t;
        return (
          null == i && (i = t.inclusive),
          null == s && (s = t.inclusive),
          {start: null != i ? i : e, end: null != s ? s : e}
        );
      }
      function tc(t, e, i, s = 0) {
        let o = i.length - 1;
        o >= 0 && i[o] + s >= t ? (i[o] = Math.max(i[o], e)) : i.push(t, e);
      }
      th.prototype.point = !0;
      class td extends T {
        constructor() {
          super(...arguments),
            (this.children = []),
            (this.length = 0),
            (this.prevAttrs = void 0),
            (this.attrs = null),
            (this.breakAfter = 0);
        }
        merge(t, e, i, s, o, n) {
          if (i) {
            if (!(i instanceof td)) return !1;
            this.dom || i.transferDOM(this);
          }
          return (
            s && this.setDeco(i ? i.attrs : null),
            B(this, t, e, i ? i.children : [], o, n),
            !0
          );
        }
        split(t) {
          let e = new td();
          if (((e.breakAfter = this.breakAfter), 0 == this.length)) return e;
          let {i, off: s} = this.childPos(t);
          s &&
            (e.append(this.children[i].split(s), 0),
            this.children[i].merge(s, this.children[i].length, null, !1, 0, 0),
            i++);
          for (let t = i; t < this.children.length; t++)
            e.append(this.children[t], 0);
          for (; i > 0 && 0 == this.children[i - 1].length; )
            this.children[--i].destroy();
          return (
            (this.children.length = i), this.markDirty(), (this.length = t), e
          );
        }
        transferDOM(t) {
          this.dom &&
            (this.markDirty(),
            t.setDOM(this.dom),
            (t.prevAttrs =
              void 0 === this.prevAttrs ? this.attrs : this.prevAttrs),
            (this.prevAttrs = void 0),
            (this.dom = null));
        }
        setDeco(t) {
          te(this.attrs, t) ||
            (this.dom && ((this.prevAttrs = this.attrs), this.markDirty()),
            (this.attrs = t));
        }
        append(t, e) {
          !(function t(e, i, s) {
            let o,
              {children: n} = e;
            s > 0 &&
            i instanceof G &&
            n.length &&
            (o = n[n.length - 1]) instanceof G &&
            o.mark.eq(i.mark)
              ? t(o, i.children[0], s - 1)
              : (n.push(i), i.setParent(e)),
              (e.length += i.length);
          })(this, t, e);
        }
        addLineDeco(t) {
          let e = t.spec.attributes,
            i = t.spec.class;
          e && (this.attrs = tt(e, this.attrs || {})),
            i && (this.attrs = tt({class: i}, this.attrs || {}));
        }
        domAtPos(t) {
          return J(this, t);
        }
        reuseDOM(t) {
          'DIV' == t.nodeName && (this.setDOM(t), (this.dirty |= 6));
        }
        sync(t, e) {
          var i;
          this.dom
            ? 4 & this.dirty &&
              (C(this.dom),
              (this.dom.className = 'cm-line'),
              (this.prevAttrs = this.attrs ? null : void 0))
            : (this.setDOM(document.createElement('div')),
              (this.dom.className = 'cm-line'),
              (this.prevAttrs = this.attrs ? null : void 0)),
            void 0 !== this.prevAttrs &&
              (ti(this.dom, this.prevAttrs, this.attrs),
              this.dom.classList.add('cm-line'),
              (this.prevAttrs = void 0)),
            super.sync(t, e);
          let s = this.dom.lastChild;
          for (; s && T.get(s) instanceof G; ) s = s.lastChild;
          if (
            !s ||
            !this.length ||
            ('BR' != s.nodeName &&
              (null === (i = T.get(s)) || void 0 === i
                ? void 0
                : i.isEditable) == !1 &&
              (!q.ios || !this.children.some((t) => t instanceof $)))
          ) {
            let t = document.createElement('BR');
            (t.cmIgnore = !0), this.dom.appendChild(t);
          }
        }
        measureTextSize() {
          if (0 == this.children.length || this.length > 20) return null;
          let t = 0,
            e;
          for (let i of this.children) {
            if (!(i instanceof $) || /[^ -~]/.test(i.text)) return null;
            let s = f(i.dom);
            if (1 != s.length) return null;
            (t += s[0].width), (e = s[0].height);
          }
          return t
            ? {
                lineHeight: this.dom.getBoundingClientRect().height,
                charWidth: t / this.length,
                textHeight: e,
              }
            : null;
        }
        coordsAt(t, e) {
          let i = Z(this, t, e);
          if (!this.children.length && i && this.parent) {
            let {heightOracle: t} = this.parent.view.viewState,
              e = i.bottom - i.top;
            if (2 > Math.abs(e - t.lineHeight) && t.textHeight < e) {
              let s = (e - t.textHeight) / 2;
              return {
                top: i.top + s,
                bottom: i.bottom - s,
                left: i.left,
                right: i.left,
              };
            }
          }
          return i;
        }
        become(t) {
          return !1;
        }
        get type() {
          return to.Text;
        }
        static find(t, e) {
          for (let i = 0, s = 0; i < t.children.length; i++) {
            let o = t.children[i],
              n = s + o.length;
            if (n >= e) {
              if (o instanceof td) return o;
              if (n > e) break;
            }
            s = n + o.breakAfter;
          }
          return null;
        }
      }
      class tu extends T {
        constructor(t, e, i) {
          super(),
            (this.widget = t),
            (this.length = e),
            (this.type = i),
            (this.breakAfter = 0),
            (this.prevWidget = null);
        }
        merge(t, e, i, s, o, n) {
          return (
            (!i ||
              (i instanceof tu &&
                !!this.widget.compare(i.widget) &&
                (!(t > 0) || !(o <= 0)) &&
                (!(e < this.length) || !(n <= 0)))) &&
            ((this.length = t + (i ? i.length : 0) + (this.length - e)), !0)
          );
        }
        domAtPos(t) {
          return 0 == t
            ? A.before(this.dom)
            : A.after(this.dom, t == this.length);
        }
        split(t) {
          let e = this.length - t;
          this.length = t;
          let i = new tu(this.widget, e, this.type);
          return (i.breakAfter = this.breakAfter), i;
        }
        get children() {
          return D;
        }
        sync(t) {
          (this.dom && this.widget.updateDOM(this.dom, t)) ||
            (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom),
            (this.prevWidget = null),
            this.setDOM(this.widget.toDOM(t)),
            (this.dom.contentEditable = 'false'));
        }
        get overrideDOMText() {
          return this.parent
            ? this.parent.view.state.doc.slice(this.posAtStart, this.posAtEnd)
            : l.xv.empty;
        }
        domBoundsAround() {
          return null;
        }
        become(t) {
          return (
            t instanceof tu &&
            t.type == this.type &&
            t.widget.constructor == this.widget.constructor &&
            (t.widget.compare(this.widget) || this.markDirty(!0),
            this.dom && !this.prevWidget && (this.prevWidget = this.widget),
            (this.widget = t.widget),
            (this.length = t.length),
            (this.breakAfter = t.breakAfter),
            !0)
          );
        }
        ignoreMutation() {
          return !0;
        }
        ignoreEvent(t) {
          return this.widget.ignoreEvent(t);
        }
        get isEditable() {
          return !1;
        }
        get isWidget() {
          return !0;
        }
        destroy() {
          super.destroy(), this.dom && this.widget.destroy(this.dom);
        }
      }
      class tf {
        constructor(t, e, i, s) {
          (this.doc = t),
            (this.pos = e),
            (this.end = i),
            (this.disallowBlockEffectsFor = s),
            (this.content = []),
            (this.curLine = null),
            (this.breakAtStart = 0),
            (this.pendingBuffer = 0),
            (this.bufferMarks = []),
            (this.atCursorPos = !0),
            (this.openStart = -1),
            (this.openEnd = -1),
            (this.text = ''),
            (this.textOff = 0),
            (this.cursor = t.iter()),
            (this.skip = e);
        }
        posCovered() {
          if (0 == this.content.length)
            return (
              !this.breakAtStart && this.doc.lineAt(this.pos).from != this.pos
            );
          let t = this.content[this.content.length - 1];
          return (
            !t.breakAfter && !(t instanceof tu && t.type == to.WidgetBefore)
          );
        }
        getLine() {
          return (
            this.curLine ||
              (this.content.push((this.curLine = new td())),
              (this.atCursorPos = !0)),
            this.curLine
          );
        }
        flushBuffer(t = this.bufferMarks) {
          this.pendingBuffer &&
            (this.curLine.append(tp(new Q(-1), t), t.length),
            (this.pendingBuffer = 0));
        }
        addBlockWidget(t) {
          this.flushBuffer(), (this.curLine = null), this.content.push(t);
        }
        finish(t) {
          this.pendingBuffer && t <= this.bufferMarks.length
            ? this.flushBuffer()
            : (this.pendingBuffer = 0),
            this.posCovered() || this.getLine();
        }
        buildText(t, e, i) {
          for (; t > 0; ) {
            if (this.textOff == this.text.length) {
              let {
                value: e,
                lineBreak: i,
                done: s,
              } = this.cursor.next(this.skip);
              if (((this.skip = 0), s))
                throw Error(
                  'Ran out of text content when drawing inline views'
                );
              if (i) {
                this.posCovered() || this.getLine(),
                  this.content.length
                    ? (this.content[this.content.length - 1].breakAfter = 1)
                    : (this.breakAtStart = 1),
                  this.flushBuffer(),
                  (this.curLine = null),
                  (this.atCursorPos = !0),
                  t--;
                continue;
              }
              (this.text = e), (this.textOff = 0);
            }
            let s = Math.min(this.text.length - this.textOff, t, 512);
            this.flushBuffer(e.slice(e.length - i)),
              this.getLine().append(
                tp(new $(this.text.slice(this.textOff, this.textOff + s)), e),
                i
              ),
              (this.atCursorPos = !0),
              (this.textOff += s),
              (t -= s),
              (i = 0);
          }
        }
        span(t, e, i, s) {
          this.buildText(e - t, i, s),
            (this.pos = e),
            this.openStart < 0 && (this.openStart = s);
        }
        point(t, e, i, s, o, n) {
          if (this.disallowBlockEffectsFor[n] && i instanceof th) {
            if (i.block)
              throw RangeError(
                'Block decorations may not be specified via plugins'
              );
            if (e > this.doc.lineAt(this.pos).to)
              throw RangeError(
                'Decorations that replace line breaks may not be specified via plugins'
              );
          }
          let r = e - t;
          if (i instanceof th) {
            if (i.block) {
              let {type: t} = i;
              t != to.WidgetAfter || this.posCovered() || this.getLine(),
                this.addBlockWidget(new tu(i.widget || new tg('div'), r, t));
            } else {
              let n = _.create(
                  i.widget || new tg('span'),
                  r,
                  r ? 0 : i.startSide
                ),
                l =
                  this.atCursorPos &&
                  !n.isEditable &&
                  o <= s.length &&
                  (t < e || i.startSide > 0),
                h =
                  !n.isEditable && (t < e || o > s.length || i.startSide <= 0),
                a = this.getLine();
              2 != this.pendingBuffer ||
                l ||
                n.isEditable ||
                (this.pendingBuffer = 0),
                this.flushBuffer(s),
                l &&
                  (a.append(tp(new Q(1), s), o),
                  (o = s.length + Math.max(0, o - s.length))),
                a.append(tp(n, s), o),
                (this.atCursorPos = h),
                (this.pendingBuffer = h ? (t < e || o > s.length ? 1 : 2) : 0),
                this.pendingBuffer && (this.bufferMarks = s.slice());
            }
          } else
            this.doc.lineAt(this.pos).from == this.pos &&
              this.getLine().addLineDeco(i);
          r &&
            (this.textOff + r <= this.text.length
              ? (this.textOff += r)
              : ((this.skip += r - (this.text.length - this.textOff)),
                (this.text = ''),
                (this.textOff = 0)),
            (this.pos = e)),
            this.openStart < 0 && (this.openStart = o);
        }
        static build(t, e, i, s, o) {
          let n = new tf(t, e, i, o);
          return (
            (n.openEnd = l.Xs.spans(s, e, i, n)),
            n.openStart < 0 && (n.openStart = n.openEnd),
            n.finish(n.openEnd),
            n
          );
        }
      }
      function tp(t, e) {
        for (let i of e) t = new G(i, [t], t.length);
        return t;
      }
      class tg extends ts {
        constructor(t) {
          super(), (this.tag = t);
        }
        eq(t) {
          return t.tag == this.tag;
        }
        toDOM() {
          return document.createElement(this.tag);
        }
        updateDOM(t) {
          return t.nodeName.toLowerCase() == this.tag;
        }
        get isHidden() {
          return !0;
        }
      }
      let tm = l.r$.define(),
        tv = l.r$.define(),
        tw = l.r$.define(),
        tb = l.r$.define(),
        ty = l.r$.define(),
        tx = l.r$.define(),
        tS = l.r$.define(),
        tM = l.r$.define({combine: (t) => t.some((t) => t)}),
        tk = l.r$.define({combine: (t) => t.some((t) => t)});
      class tC {
        constructor(t, e = 'nearest', i = 'nearest', s = 5, o = 5) {
          (this.range = t),
            (this.y = e),
            (this.x = i),
            (this.yMargin = s),
            (this.xMargin = o);
        }
        map(t) {
          return t.empty
            ? this
            : new tC(
                this.range.map(t),
                this.y,
                this.x,
                this.yMargin,
                this.xMargin
              );
        }
      }
      let tA = l.Py.define({map: (t, e) => t.map(e)});
      function tD(t, e, i) {
        let s = t.facet(tb);
        s.length
          ? s[0](e)
          : window.onerror
          ? window.onerror(String(e), i, void 0, void 0, e)
          : i
          ? console.error(i + ':', e)
          : console.error(e);
      }
      let tT = l.r$.define({combine: (t) => !t.length || t[0]}),
        tO = 0,
        tE = l.r$.define();
      class tR {
        constructor(t, e, i, s) {
          (this.id = t),
            (this.create = e),
            (this.domEventHandlers = i),
            (this.extension = s(this));
        }
        static define(t, e) {
          let {eventHandlers: i, provide: s, decorations: o} = e || {};
          return new tR(tO++, t, i, (t) => {
            let e = [tE.of(t)];
            return (
              o &&
                e.push(
                  tV.of((e) => {
                    let i = e.plugin(t);
                    return i ? o(i) : tn.none;
                  })
                ),
              s && e.push(s(t)),
              e
            );
          });
        }
        static fromClass(t, e) {
          return tR.define((e) => new t(e), e);
        }
      }
      class tB {
        constructor(t) {
          (this.spec = t), (this.mustUpdate = null), (this.value = null);
        }
        update(t) {
          if (this.value) {
            if (this.mustUpdate) {
              let t = this.mustUpdate;
              if (((this.mustUpdate = null), this.value.update))
                try {
                  this.value.update(t);
                } catch (e) {
                  if (
                    (tD(t.state, e, 'CodeMirror plugin crashed'),
                    this.value.destroy)
                  )
                    try {
                      this.value.destroy();
                    } catch (t) {}
                  this.deactivate();
                }
            }
          } else if (this.spec)
            try {
              this.value = this.spec.create(t);
            } catch (e) {
              tD(t.state, e, 'CodeMirror plugin crashed'), this.deactivate();
            }
          return this;
        }
        destroy(t) {
          var e;
          if (null === (e = this.value) || void 0 === e ? void 0 : e.destroy)
            try {
              this.value.destroy();
            } catch (e) {
              tD(t.state, e, 'CodeMirror plugin crashed');
            }
        }
        deactivate() {
          this.spec = this.value = null;
        }
      }
      let tL = l.r$.define(),
        tH = l.r$.define(),
        tV = l.r$.define(),
        tN = l.r$.define(),
        tP = l.r$.define(),
        tW = l.r$.define();
      class tz {
        constructor(t, e, i, s) {
          (this.fromA = t), (this.toA = e), (this.fromB = i), (this.toB = s);
        }
        join(t) {
          return new tz(
            Math.min(this.fromA, t.fromA),
            Math.max(this.toA, t.toA),
            Math.min(this.fromB, t.fromB),
            Math.max(this.toB, t.toB)
          );
        }
        addToSet(t) {
          let e = t.length,
            i = this;
          for (; e > 0; e--) {
            let s = t[e - 1];
            if (!(s.fromA > i.toA)) {
              if (s.toA < i.fromA) break;
              (i = i.join(s)), t.splice(e - 1, 1);
            }
          }
          return t.splice(e, 0, i), t;
        }
        static extendWithRanges(t, e) {
          if (0 == e.length) return t;
          let i = [];
          for (let s = 0, o = 0, n = 0, r = 0; ; s++) {
            let l = s == t.length ? null : t[s],
              h = n - r,
              a = l ? l.fromB : 1e9;
            for (; o < e.length && e[o] < a; ) {
              let t = e[o],
                s = e[o + 1],
                n = Math.max(r, t),
                l = Math.min(a, s);
              if ((n <= l && new tz(n + h, l + h, n, l).addToSet(i), s > a))
                break;
              o += 2;
            }
            if (!l) return i;
            new tz(l.fromA, l.toA, l.fromB, l.toB).addToSet(i),
              (n = l.toA),
              (r = l.toB);
          }
        }
      }
      class tF {
        constructor(t, e, i) {
          for (let s of ((this.view = t),
          (this.state = e),
          (this.transactions = i),
          (this.flags = 0),
          (this.startState = t.state),
          (this.changes = l.as.empty(this.startState.doc.length)),
          i))
            this.changes = this.changes.compose(s.changes);
          let s = [];
          this.changes.iterChangedRanges((t, e, i, o) =>
            s.push(new tz(t, e, i, o))
          ),
            (this.changedRanges = s);
        }
        static create(t, e, i) {
          return new tF(t, e, i);
        }
        get viewportChanged() {
          return (4 & this.flags) > 0;
        }
        get heightChanged() {
          return (2 & this.flags) > 0;
        }
        get geometryChanged() {
          return this.docChanged || (10 & this.flags) > 0;
        }
        get focusChanged() {
          return (1 & this.flags) > 0;
        }
        get docChanged() {
          return !this.changes.empty;
        }
        get selectionSet() {
          return this.transactions.some((t) => t.selection);
        }
        get empty() {
          return 0 == this.flags && 0 == this.transactions.length;
        }
      }
      var tI =
        (((n = tI || (tI = {}))[(n.LTR = 0)] = 'LTR'),
        (n[(n.RTL = 1)] = 'RTL'),
        n);
      let tK = tI.LTR,
        tj = tI.RTL;
      function tq(t) {
        let e = [];
        for (let i = 0; i < t.length; i++) e.push(1 << +t[i]);
        return e;
      }
      let t$ = tq(
          '88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008'
        ),
        tG = tq(
          '4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333'
        ),
        tX = Object.create(null),
        t_ = [];
      for (let t of ['()', '[]', '{}']) {
        let e = t.charCodeAt(0),
          i = t.charCodeAt(1);
        (tX[e] = i), (tX[i] = -e);
      }
      let tU = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
      class tY {
        constructor(t, e, i) {
          (this.from = t), (this.to = e), (this.level = i);
        }
        get dir() {
          return this.level % 2 ? tj : tK;
        }
        side(t, e) {
          return (this.dir == e) == t ? this.to : this.from;
        }
        static find(t, e, i, s) {
          let o = -1;
          for (let n = 0; n < t.length; n++) {
            let r = t[n];
            if (r.from <= e && r.to >= e) {
              if (r.level == i) return n;
              (o < 0 ||
                (0 != s
                  ? s < 0
                    ? r.from < e
                    : r.to > e
                  : t[o].level > r.level)) &&
                (o = n);
            }
          }
          if (o < 0) throw RangeError('Index out of range');
          return o;
        }
      }
      let tQ = [];
      function tJ(t) {
        return [new tY(0, t, 0)];
      }
      let tZ = '';
      class t0 {
        constructor(t, e) {
          (this.points = t),
            (this.text = ''),
            (this.lineSeparator = e.facet(l.yy.lineSeparator));
        }
        append(t) {
          this.text += t;
        }
        lineBreak() {
          this.text += '￿';
        }
        readRange(t, e) {
          if (!t) return this;
          let i = t.parentNode;
          for (let s = t; ; ) {
            this.findPointBefore(i, s), this.readNode(s);
            let t = s.nextSibling;
            if (t == e) break;
            let o = T.get(s),
              n = T.get(t);
            (o && n
              ? o.breakAfter
              : (o ? o.breakAfter : t1(s)) ||
                (t1(t) && ('BR' != s.nodeName || s.cmIgnore))) &&
              this.lineBreak(),
              (s = t);
          }
          return this.findPointBefore(i, e), this;
        }
        readTextNode(t) {
          let e = t.nodeValue;
          for (let i of this.points)
            i.node == t &&
              (i.pos = this.text.length + Math.min(i.offset, e.length));
          for (let i = 0, s = this.lineSeparator ? null : /\r\n?|\n/g; ; ) {
            let o = -1,
              n = 1,
              r;
            if (
              (this.lineSeparator
                ? ((o = e.indexOf(this.lineSeparator, i)),
                  (n = this.lineSeparator.length))
                : (r = s.exec(e)) && ((o = r.index), (n = r[0].length)),
              this.append(e.slice(i, o < 0 ? e.length : o)),
              o < 0)
            )
              break;
            if ((this.lineBreak(), n > 1))
              for (let e of this.points)
                e.node == t && e.pos > this.text.length && (e.pos -= n - 1);
            i = o + n;
          }
        }
        readNode(t) {
          if (t.cmIgnore) return;
          let e = T.get(t),
            i = e && e.overrideDOMText;
          if (null != i) {
            this.findPointInside(t, i.length);
            for (let t = i.iter(); !t.next().done; )
              t.lineBreak ? this.lineBreak() : this.append(t.value);
          } else
            3 == t.nodeType
              ? this.readTextNode(t)
              : 'BR' == t.nodeName
              ? t.nextSibling && this.lineBreak()
              : 1 == t.nodeType && this.readRange(t.firstChild, null);
        }
        findPointBefore(t, e) {
          for (let i of this.points)
            i.node == t &&
              t.childNodes[i.offset] == e &&
              (i.pos = this.text.length);
        }
        findPointInside(t, e) {
          for (let i of this.points)
            (3 == t.nodeType ? i.node == t : t.contains(i.node)) &&
              (i.pos = this.text.length + Math.min(e, i.offset));
        }
      }
      function t1(t) {
        return (
          1 == t.nodeType &&
          /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(t.nodeName)
        );
      }
      class t2 {
        constructor(t, e) {
          (this.node = t), (this.offset = e), (this.pos = -1);
        }
      }
      class t8 extends T {
        constructor(t) {
          super(),
            (this.view = t),
            (this.compositionDeco = tn.none),
            (this.decorations = []),
            (this.dynamicDecorationMap = []),
            (this.minWidth = 0),
            (this.minWidthFrom = 0),
            (this.minWidthTo = 0),
            (this.impreciseAnchor = null),
            (this.impreciseHead = null),
            (this.forceSelection = !1),
            (this.lastUpdate = Date.now()),
            this.setDOM(t.contentDOM),
            (this.children = [new td()]),
            this.children[0].setParent(this),
            this.updateDeco(),
            this.updateInner([new tz(0, 0, 0, t.state.doc.length)], 0);
        }
        get length() {
          return this.view.state.doc.length;
        }
        update(t) {
          var e, i, s;
          let o,
            n = t.changedRanges;
          this.minWidth > 0 &&
            n.length &&
            (n.every(
              ({fromA: t, toA: e}) =>
                e < this.minWidthFrom || t > this.minWidthTo
            )
              ? ((this.minWidthFrom = t.changes.mapPos(this.minWidthFrom, 1)),
                (this.minWidthTo = t.changes.mapPos(this.minWidthTo, 1)))
              : (this.minWidth = this.minWidthFrom = this.minWidthTo = 0)),
            this.view.inputState.composing < 0
              ? (this.compositionDeco = tn.none)
              : (t.transactions.length || this.dirty) &&
                (this.compositionDeco = (function (t, e) {
                  let i = t9(t);
                  if (!i) return tn.none;
                  let {from: s, to: o, node: n, text: r} = i,
                    l = e.mapPos(s, 1),
                    h = Math.max(l, e.mapPos(o, -1)),
                    {state: a} = t,
                    c =
                      3 == n.nodeType
                        ? n.nodeValue
                        : new t0([], a).readRange(n.firstChild, null).text;
                  if (h - l < c.length) {
                    if (
                      a.doc.sliceString(
                        l,
                        Math.min(a.doc.length, l + c.length),
                        '￿'
                      ) == c
                    )
                      h = l + c.length;
                    else {
                      if (
                        a.doc.sliceString(Math.max(0, h - c.length), h, '￿') !=
                        c
                      )
                        return tn.none;
                      l = h - c.length;
                    }
                  } else if (a.doc.sliceString(l, h, '￿') != c) return tn.none;
                  let d = T.get(n);
                  return (
                    d instanceof U
                      ? (d = d.widget.topView)
                      : d && (d.parent = null),
                    tn.set(
                      tn
                        .replace({widget: new t5(n, r, d), inclusive: !0})
                        .range(l, h)
                    )
                  );
                })(this.view, t.changes)),
            (q.ie || q.chrome) &&
              !this.compositionDeco.size &&
              t &&
              t.state.doc.lines != t.startState.doc.lines &&
              (this.forceSelection = !0);
          let r =
            ((e = this.decorations),
            (i = this.updateDeco()),
            (s = t.changes),
            (o = new t6()),
            l.Xs.compare(e, i, s, o),
            o.changes);
          return (
            (n = tz.extendWithRanges(n, r)),
            (0 != this.dirty || 0 != n.length) &&
              (this.updateInner(n, t.startState.doc.length),
              t.transactions.length && (this.lastUpdate = Date.now()),
              !0)
          );
        }
        updateInner(t, e) {
          (this.view.viewState.mustMeasureContent = !0),
            this.updateChildren(t, e);
          let {observer: i} = this.view;
          i.ignore(() => {
            (this.dom.style.height = this.view.viewState.contentHeight + 'px'),
              (this.dom.style.flexBasis = this.minWidth
                ? this.minWidth + 'px'
                : '');
            let t =
              q.chrome || q.ios
                ? {node: i.selectionRange.focusNode, written: !1}
                : void 0;
            this.sync(this.view, t),
              (this.dirty = 0),
              t &&
                (t.written || i.selectionRange.focusNode != t.node) &&
                (this.forceSelection = !0),
              (this.dom.style.height = '');
          });
          let s = [];
          if (
            this.view.viewport.from ||
            this.view.viewport.to < this.view.state.doc.length
          )
            for (let t of this.children)
              t instanceof tu && t.widget instanceof t3 && s.push(t.dom);
          i.updateGaps(s);
        }
        updateChildren(t, e) {
          let i = this.childCursor(e);
          for (let e = t.length - 1; ; e--) {
            let s = e >= 0 ? t[e] : null;
            if (!s) break;
            let {fromA: o, toA: n, fromB: r, toB: l} = s,
              {
                content: h,
                breakAtStart: a,
                openStart: c,
                openEnd: d,
              } = tf.build(
                this.view.state.doc,
                r,
                l,
                this.decorations,
                this.dynamicDecorationMap
              ),
              {i: u, off: f} = i.findPos(n, 1),
              {i: p, off: g} = i.findPos(o, -1);
            R(this, p, g, u, f, h, a, c, d);
          }
        }
        updateSelection(t = !1, e = !1) {
          var i;
          if (
            ((t || !this.view.observer.selectionRange.focusNode) &&
              this.view.observer.readSelectionRange(),
            !(e || this.mayControlSelection()))
          )
            return;
          let s = this.forceSelection;
          this.forceSelection = !1;
          let o = this.view.state.selection.main,
            n = this.domAtPos(o.anchor),
            r = o.empty ? n : this.domAtPos(o.head);
          if (
            q.gecko &&
            o.empty &&
            !this.compositionDeco.size &&
            1 == (i = n).node.nodeType &&
            i.node.firstChild &&
            (0 == i.offset ||
              'false' == i.node.childNodes[i.offset - 1].contentEditable) &&
            (i.offset == i.node.childNodes.length ||
              'false' == i.node.childNodes[i.offset].contentEditable)
          ) {
            let t = document.createTextNode('');
            this.view.observer.ignore(() =>
              n.node.insertBefore(t, n.node.childNodes[n.offset] || null)
            ),
              (n = r = new A(t, 0)),
              (s = !0);
          }
          let l = this.view.observer.selectionRange;
          (!s &&
            l.focusNode &&
            p(n.node, n.offset, l.anchorNode, l.anchorOffset) &&
            p(r.node, r.offset, l.focusNode, l.focusOffset)) ||
            (this.view.observer.ignore(() => {
              q.android &&
                q.chrome &&
                this.dom.contains(l.focusNode) &&
                (function (t, e) {
                  for (
                    let i = t;
                    i && i != e;
                    i = i.assignedSlot || i.parentNode
                  )
                    if (1 == i.nodeType && 'false' == i.contentEditable)
                      return !0;
                  return !1;
                })(l.focusNode, this.dom) &&
                (this.dom.blur(), this.dom.focus({preventScroll: !0}));
              let t = c(this.view.root);
              if (t) {
                if (o.empty) {
                  if (q.gecko) {
                    var e, i;
                    let t =
                      ((e = n.node),
                      (i = n.offset),
                      1 != e.nodeType
                        ? 0
                        : (i && 'false' == e.childNodes[i - 1].contentEditable
                            ? 1
                            : 0) |
                          (i < e.childNodes.length &&
                          'false' == e.childNodes[i].contentEditable
                            ? 2
                            : 0));
                    if (t && 3 != t) {
                      let e = t4(n.node, n.offset, 1 == t ? 1 : -1);
                      e && (n = new A(e, 1 == t ? 0 : e.nodeValue.length));
                    }
                  }
                  t.collapse(n.node, n.offset),
                    null != o.bidiLevel &&
                      null != l.cursorBidiLevel &&
                      (l.cursorBidiLevel = o.bidiLevel);
                } else if (t.extend) {
                  t.collapse(n.node, n.offset);
                  try {
                    t.extend(r.node, r.offset);
                  } catch (t) {}
                } else {
                  let e = document.createRange();
                  o.anchor > o.head && ([n, r] = [r, n]),
                    e.setEnd(r.node, r.offset),
                    e.setStart(n.node, n.offset),
                    t.removeAllRanges(),
                    t.addRange(e);
                }
              }
            }),
            this.view.observer.setSelectionRange(n, r)),
            (this.impreciseAnchor = n.precise
              ? null
              : new A(l.anchorNode, l.anchorOffset)),
            (this.impreciseHead = r.precise
              ? null
              : new A(l.focusNode, l.focusOffset));
        }
        enforceCursorAssoc() {
          if (this.compositionDeco.size) return;
          let {view: t} = this,
            e = t.state.selection.main,
            i = c(t.root),
            {anchorNode: s, anchorOffset: o} = t.observer.selectionRange;
          if (!i || !e.empty || !e.assoc || !i.modify) return;
          let n = td.find(this, e.head);
          if (!n) return;
          let r = n.posAtStart;
          if (e.head == r || e.head == r + n.length) return;
          let l = this.coordsAt(e.head, -1),
            h = this.coordsAt(e.head, 1);
          if (!l || !h || l.bottom > h.top) return;
          let a = this.domAtPos(e.head + e.assoc);
          i.collapse(a.node, a.offset),
            i.modify(
              'move',
              e.assoc < 0 ? 'forward' : 'backward',
              'lineboundary'
            ),
            t.observer.readSelectionRange();
          let d = t.observer.selectionRange;
          t.docView.posFromDOM(d.anchorNode, d.anchorOffset) != e.from &&
            i.collapse(s, o);
        }
        mayControlSelection() {
          let t = this.view.root.activeElement;
          return (
            t == this.dom ||
            (u(this.dom, this.view.observer.selectionRange) &&
              !(t && this.dom.contains(t)))
          );
        }
        nearest(t) {
          for (let e = t; e; ) {
            let t = T.get(e);
            if (t && t.rootView == this) return t;
            e = e.parentNode;
          }
          return null;
        }
        posFromDOM(t, e) {
          let i = this.nearest(t);
          if (!i)
            throw RangeError(
              'Trying to find position for a DOM position outside of the document'
            );
          return i.localPosFromDOM(t, e) + i.posAtStart;
        }
        domAtPos(t) {
          let {i: e, off: i} = this.childCursor().findPos(t, -1);
          for (; e < this.children.length - 1; ) {
            let t = this.children[e];
            if (i < t.length || t instanceof td) break;
            e++, (i = 0);
          }
          return this.children[e].domAtPos(i);
        }
        coordsAt(t, e) {
          for (let i = this.length, s = this.children.length - 1; ; s--) {
            let o = this.children[s],
              n = i - o.breakAfter - o.length;
            if (
              t > n ||
              (t == n &&
                o.type != to.WidgetBefore &&
                o.type != to.WidgetAfter &&
                (!s ||
                  2 == e ||
                  this.children[s - 1].breakAfter ||
                  (this.children[s - 1].type == to.WidgetBefore && e > -2)))
            )
              return o.coordsAt(t - n, e);
            i = n;
          }
        }
        measureVisibleLineHeights(t) {
          let e = [],
            {from: i, to: s} = t,
            o = this.view.contentDOM.clientWidth,
            n =
              o > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1,
            r = -1,
            l = this.view.textDirection == tI.LTR;
          for (let t = 0, h = 0; h < this.children.length; h++) {
            let a = this.children[h],
              c = t + a.length;
            if (c > s) break;
            if (t >= i) {
              let i = a.dom.getBoundingClientRect();
              if ((e.push(i.height), n)) {
                let e = a.dom.lastChild,
                  s = e ? f(e) : [];
                if (s.length) {
                  let e = s[s.length - 1],
                    n = l ? e.right - i.left : i.right - e.left;
                  n > r &&
                    ((r = n),
                    (this.minWidth = o),
                    (this.minWidthFrom = t),
                    (this.minWidthTo = c));
                }
              }
            }
            t = c + a.breakAfter;
          }
          return e;
        }
        textDirectionAt(t) {
          let {i: e} = this.childPos(t, 1);
          return 'rtl' == getComputedStyle(this.children[e].dom).direction
            ? tI.RTL
            : tI.LTR;
        }
        measureTextSize() {
          for (let t of this.children)
            if (t instanceof td) {
              let e = t.measureTextSize();
              if (e) return e;
            }
          let t = document.createElement('div'),
            e,
            i,
            s;
          return (
            (t.className = 'cm-line'),
            (t.style.width = '99999px'),
            (t.textContent = 'abc def ghi jkl mno pqr stu'),
            this.view.observer.ignore(() => {
              this.dom.appendChild(t);
              let o = f(t.firstChild)[0];
              (e = t.getBoundingClientRect().height),
                (i = o ? o.width / 27 : 7),
                (s = o ? o.height : e),
                t.remove();
            }),
            {lineHeight: e, charWidth: i, textHeight: s}
          );
        }
        childCursor(t = this.length) {
          let e = this.children.length;
          return (
            e && (t -= this.children[--e].length), new E(this.children, t, e)
          );
        }
        computeBlockGapDeco() {
          let t = [],
            e = this.view.viewState;
          for (let i = 0, s = 0; ; s++) {
            let o = s == e.viewports.length ? null : e.viewports[s],
              n = o ? o.from - 1 : this.length;
            if (n > i) {
              let s = e.lineBlockAt(n).bottom - e.lineBlockAt(i).top;
              t.push(
                tn
                  .replace({
                    widget: new t3(s),
                    block: !0,
                    inclusive: !0,
                    isBlockGap: !0,
                  })
                  .range(i, n)
              );
            }
            if (!o) break;
            i = o.to + 1;
          }
          return tn.set(t);
        }
        updateDeco() {
          let t = this.view.state
            .facet(tV)
            .map((t, e) =>
              (this.dynamicDecorationMap[e] = 'function' == typeof t)
                ? t(this.view)
                : t
            );
          for (let e = t.length; e < t.length + 3; e++)
            this.dynamicDecorationMap[e] = !1;
          return (this.decorations = [
            ...t,
            this.compositionDeco,
            this.computeBlockGapDeco(),
            this.view.viewState.lineGapDeco,
          ]);
        }
        scrollIntoView(t) {
          let {range: e} = t,
            i = this.coordsAt(
              e.head,
              e.empty ? e.assoc : e.head > e.anchor ? -1 : 1
            ),
            s;
          if (!i) return;
          !e.empty &&
            (s = this.coordsAt(e.anchor, e.anchor > e.head ? -1 : 1)) &&
            (i = {
              left: Math.min(i.left, s.left),
              top: Math.min(i.top, s.top),
              right: Math.max(i.right, s.right),
              bottom: Math.max(i.bottom, s.bottom),
            });
          let o = 0,
            n = 0,
            r = 0,
            l = 0;
          for (let t of this.view.state.facet(tP).map((t) => t(this.view)))
            if (t) {
              let {left: e, right: i, top: s, bottom: h} = t;
              null != e && (o = Math.max(o, e)),
                null != i && (n = Math.max(n, i)),
                null != s && (r = Math.max(r, s)),
                null != h && (l = Math.max(l, h));
            }
          let h = {
            left: i.left - o,
            top: i.top - r,
            right: i.right + n,
            bottom: i.bottom + l,
          };
          !(function (t, e, i, s, o, n, r, l) {
            let h = t.ownerDocument,
              a = h.defaultView || window;
            for (let c = t; c; )
              if (1 == c.nodeType) {
                let t,
                  d = c == h.body;
                if (d)
                  t = {
                    left: 0,
                    right: a.innerWidth,
                    top: 0,
                    bottom: a.innerHeight,
                  };
                else {
                  if (
                    c.scrollHeight <= c.clientHeight &&
                    c.scrollWidth <= c.clientWidth
                  ) {
                    c = c.assignedSlot || c.parentNode;
                    continue;
                  }
                  let e = c.getBoundingClientRect();
                  t = {
                    left: e.left,
                    right: e.left + c.clientWidth,
                    top: e.top,
                    bottom: e.top + c.clientHeight,
                  };
                }
                let u = 0,
                  f = 0;
                if ('nearest' == o)
                  e.top < t.top
                    ? ((f = -(t.top - e.top + r)),
                      i > 0 &&
                        e.bottom > t.bottom + f &&
                        (f = e.bottom - t.bottom + f + r))
                    : e.bottom > t.bottom &&
                      ((f = e.bottom - t.bottom + r),
                      i < 0 &&
                        e.top - f < t.top &&
                        (f = -(t.top + f - e.top + r)));
                else {
                  let s = e.bottom - e.top,
                    n = t.bottom - t.top;
                  f =
                    ('center' == o && s <= n
                      ? e.top + s / 2 - n / 2
                      : 'start' == o || ('center' == o && i < 0)
                      ? e.top - r
                      : e.bottom - n + r) - t.top;
                }
                if (
                  ('nearest' == s
                    ? e.left < t.left
                      ? ((u = -(t.left - e.left + n)),
                        i > 0 &&
                          e.right > t.right + u &&
                          (u = e.right - t.right + u + n))
                      : e.right > t.right &&
                        ((u = e.right - t.right + n),
                        i < 0 &&
                          e.left < t.left + u &&
                          (u = -(t.left + u - e.left + n)))
                    : (u =
                        ('center' == s
                          ? e.left +
                            (e.right - e.left) / 2 -
                            (t.right - t.left) / 2
                          : ('start' == s) == l
                          ? e.left - n
                          : e.right - (t.right - t.left) + n) - t.left),
                  u || f)
                ) {
                  if (d) a.scrollBy(u, f);
                  else {
                    let t = 0,
                      i = 0;
                    if (f) {
                      let t = c.scrollTop;
                      (c.scrollTop += f), (i = c.scrollTop - t);
                    }
                    if (u) {
                      let e = c.scrollLeft;
                      (c.scrollLeft += u), (t = c.scrollLeft - e);
                    }
                    (e = {
                      left: e.left - t,
                      top: e.top - i,
                      right: e.right - t,
                      bottom: e.bottom - i,
                    }),
                      t && 1 > Math.abs(t - u) && (s = 'nearest'),
                      i && 1 > Math.abs(i - f) && (o = 'nearest');
                  }
                }
                if (d) break;
                c = c.assignedSlot || c.parentNode;
              } else if (11 == c.nodeType) c = c.host;
              else break;
          })(
            this.view.scrollDOM,
            h,
            e.head < e.anchor ? -1 : 1,
            t.x,
            t.y,
            t.xMargin,
            t.yMargin,
            this.view.textDirection == tI.LTR
          );
        }
      }
      class t3 extends ts {
        constructor(t) {
          super(), (this.height = t);
        }
        toDOM() {
          let t = document.createElement('div');
          return this.updateDOM(t), t;
        }
        eq(t) {
          return t.height == this.height;
        }
        updateDOM(t) {
          return (t.style.height = this.height + 'px'), !0;
        }
        get estimatedHeight() {
          return this.height;
        }
      }
      function t9(t) {
        let e = t.observer.selectionRange,
          i = e.focusNode && t4(e.focusNode, e.focusOffset, 0);
        if (!i) return null;
        let s = t.docView.nearest(i);
        if (!s) return null;
        if (s instanceof td) {
          let t = i;
          for (; t.parentNode != s.dom; ) t = t.parentNode;
          let e = t.previousSibling;
          for (; e && !T.get(e); ) e = e.previousSibling;
          let o = e ? T.get(e).posAtEnd : s.posAtStart;
          return {from: o, to: o, node: t, text: i};
        }
        {
          for (;;) {
            let {parent: t} = s;
            if (!t) return null;
            if (t instanceof td) break;
            s = t;
          }
          let t = s.posAtStart;
          return {from: t, to: t + s.length, node: s.dom, text: i};
        }
      }
      class t5 extends ts {
        constructor(t, e, i) {
          super(), (this.top = t), (this.text = e), (this.topView = i);
        }
        eq(t) {
          return this.top == t.top && this.text == t.text;
        }
        toDOM() {
          return this.top;
        }
        ignoreEvent() {
          return !1;
        }
        get customView() {
          return U;
        }
      }
      function t4(t, e, i) {
        if (i <= 0)
          for (let i = t, s = e; ; ) {
            if (3 == i.nodeType) return i;
            if (1 == i.nodeType && s > 0) s = v((i = i.childNodes[s - 1]));
            else break;
          }
        if (i >= 0)
          for (let s = t, o = e; ; ) {
            if (3 == s.nodeType) return s;
            if (1 == s.nodeType && o < s.childNodes.length && i >= 0)
              (s = s.childNodes[o]), (o = 0);
            else break;
          }
        return null;
      }
      class t6 {
        constructor() {
          this.changes = [];
        }
        compareRange(t, e) {
          tc(t, e, this.changes);
        }
        comparePoint(t, e) {
          tc(t, e, this.changes);
        }
      }
      function t7(t, e) {
        return t.top < e.bottom - 1 && t.bottom > e.top + 1;
      }
      function et(t, e) {
        return e < t.top
          ? {top: e, left: t.left, right: t.right, bottom: t.bottom}
          : t;
      }
      function ee(t, e) {
        return e > t.bottom
          ? {top: t.top, left: t.left, right: t.right, bottom: e}
          : t;
      }
      function ei(t, e, i) {
        let s = t.nodeValue.length,
          o = -1,
          n = 1e9,
          r = 0;
        for (let l = 0; l < s; l++) {
          let s = M(t, l, l + 1).getClientRects();
          for (let h = 0; h < s.length; h++) {
            let a = s[h];
            if (a.top == a.bottom) continue;
            r || (r = e - a.left);
            let c = (a.top > i ? a.top - i : i - a.bottom) - 1;
            if (a.left - 1 <= e && a.right + 1 >= e && c < n) {
              let i = e >= (a.left + a.right) / 2,
                s = i;
              if (
                ((q.chrome || q.gecko) &&
                  M(t, l).getBoundingClientRect().left == a.right &&
                  (s = !i),
                c <= 0)
              )
                return {node: t, offset: l + (s ? 1 : 0)};
              (o = l + (s ? 1 : 0)), (n = c);
            }
          }
        }
        return {node: t, offset: o > -1 ? o : r > 0 ? t.nodeValue.length : 0};
      }
      function es(t, e, i, s = -1) {
        var o, n;
        let r = t.contentDOM.getBoundingClientRect(),
          l = r.top + t.viewState.paddingTop,
          h,
          {docHeight: a} = t.viewState,
          {x: c, y: d} = e,
          u = d - l;
        if (u < 0) return 0;
        if (u > a) return t.state.doc.length;
        for (
          let e = t.defaultLineHeight / 2, o = !1;
          (h = t.elementAtHeight(u)).type != to.Text;

        )
          for (
            ;
            !((u = s > 0 ? h.bottom + e : h.top - e) >= 0) || !(u <= a);

          ) {
            if (o) return i ? null : 0;
            (o = !0), (s = -s);
          }
        d = l + u;
        let p = h.from;
        if (p < t.viewport.from)
          return 0 == t.viewport.from ? 0 : i ? null : eo(t, r, h, c, d);
        if (p > t.viewport.to)
          return t.viewport.to == t.state.doc.length
            ? t.state.doc.length
            : i
            ? null
            : eo(t, r, h, c, d);
        let g = t.dom.ownerDocument,
          m = t.root.elementFromPoint ? t.root : g,
          v = m.elementFromPoint(c, d);
        v && !t.contentDOM.contains(v) && (v = null),
          !v &&
            ((c = Math.max(r.left + 1, Math.min(r.right - 1, c))),
            (v = m.elementFromPoint(c, d)) &&
              !t.contentDOM.contains(v) &&
              (v = null));
        let w,
          b = -1;
        if (
          v &&
          (null === (o = t.docView.nearest(v)) || void 0 === o
            ? void 0
            : o.isEditable) != !1
        ) {
          if (g.caretPositionFromPoint) {
            let t = g.caretPositionFromPoint(c, d);
            t && ({offsetNode: w, offset: b} = t);
          } else if (g.caretRangeFromPoint) {
            let e = g.caretRangeFromPoint(c, d);
            e &&
              (({startContainer: w, startOffset: b} = e),
              (!t.contentDOM.contains(w) ||
                (q.safari &&
                  (function (t, e, i) {
                    let s;
                    if (3 != t.nodeType || e != (s = t.nodeValue.length))
                      return !1;
                    for (let e = t.nextSibling; e; e = e.nextSibling)
                      if (1 != e.nodeType || 'BR' != e.nodeName) return !1;
                    return M(t, s - 1, s).getBoundingClientRect().left > i;
                  })(w, b, c)) ||
                (q.chrome &&
                  (function (t, e, i) {
                    if (0 != e) return !1;
                    for (let e = t; ; ) {
                      let t = e.parentNode;
                      if (!t || 1 != t.nodeType || t.firstChild != e) return !1;
                      if (t.classList.contains('cm-line')) break;
                      e = t;
                    }
                    return (
                      i -
                        (1 == t.nodeType
                          ? t.getBoundingClientRect()
                          : M(
                              t,
                              0,
                              Math.max(t.nodeValue.length, 1)
                            ).getBoundingClientRect()
                        ).left >
                      5
                    );
                  })(w, b, c))) &&
                (w = void 0));
          }
        }
        if (!w || !t.docView.dom.contains(w)) {
          let e = td.find(t.docView, p);
          if (!e) return u > h.top + h.height / 2 ? h.to : h.from;
          ({node: w, offset: b} = (function t(e, i, s) {
            let o,
              n,
              r,
              l,
              h,
              a,
              c,
              d,
              u = !1;
            for (let m = e.firstChild; m; m = m.nextSibling) {
              let e = f(m);
              for (let f = 0; f < e.length; f++) {
                var p, g;
                let v = e[f];
                a && t7(a, v) && (v = et(ee(v, a.bottom), a.top));
                let w =
                    (p = v).left > i ? p.left - i : Math.max(0, i - p.right),
                  b = (g = v).top > s ? g.top - s : Math.max(0, s - g.bottom);
                if (0 == w && 0 == b)
                  return 3 == m.nodeType ? ei(m, i, s) : t(m, i, s);
                if (!h || d > b || (d == b && c > w)) {
                  (h = m), (a = v), (c = w), (d = b);
                  let t = b
                    ? s < v.top
                      ? -1
                      : 1
                    : w
                    ? i < v.left
                      ? -1
                      : 1
                    : 0;
                  u = !t || (t > 0 ? f < e.length - 1 : f > 0);
                }
                0 == w
                  ? s > v.bottom && (!r || r.bottom < v.bottom)
                    ? ((o = m), (r = v))
                    : s < v.top && (!l || l.top > v.top) && ((n = m), (l = v))
                  : r && t7(r, v)
                  ? (r = ee(r, v.bottom))
                  : l && t7(l, v) && (l = et(l, v.top));
              }
            }
            if (
              (r && r.bottom >= s
                ? ((h = o), (a = r))
                : l && l.top <= s && ((h = n), (a = l)),
              !h)
            )
              return {node: e, offset: 0};
            let m = Math.max(a.left, Math.min(a.right, i));
            if (3 == h.nodeType) return ei(h, m, s);
            if (u && 'false' != h.contentEditable) return t(h, m, s);
            let v =
              Array.prototype.indexOf.call(e.childNodes, h) +
              (i >= (a.left + a.right) / 2 ? 1 : 0);
            return {node: e, offset: v};
          })(e.dom, c, d));
        }
        let y = t.docView.nearest(w);
        if (!y) return null;
        if (
          !y.isWidget ||
          (null === (n = y.dom) || void 0 === n ? void 0 : n.nodeType) != 1
        )
          return y.localPosFromDOM(w, b) + y.posAtStart;
        {
          let t = y.dom.getBoundingClientRect();
          return e.y < t.top ||
            (e.y <= t.bottom && e.x <= (t.left + t.right) / 2)
            ? y.posAtStart
            : y.posAtEnd;
        }
      }
      function eo(t, e, i, s, o) {
        let n = Math.round((s - e.left) * t.defaultCharacterWidth);
        t.lineWrapping &&
          i.height > 1.5 * t.defaultLineHeight &&
          (n +=
            Math.floor((o - i.top) / t.defaultLineHeight) *
            t.viewState.heightOracle.lineLength);
        let r = t.state.sliceDoc(i.from, i.to);
        return i.from + (0, l.Gz)(r, n, t.state.tabSize);
      }
      function en(t, e, i, s) {
        let o = t.state.doc.lineAt(e.head),
          n = t.bidiSpans(o),
          r = t.textDirectionAt(o.from);
        for (let h = e, a = null; ; ) {
          let e = (function (t, e, i, s, o) {
              var n;
              let r = s.head - t.from,
                h = -1;
              if (0 == r) {
                if (!o || !t.length) return null;
                e[0].level != i && ((r = e[0].side(!1, i)), (h = 0));
              } else if (r == t.length) {
                if (o) return null;
                let t = e[e.length - 1];
                t.level != i && ((r = t.side(!0, i)), (h = e.length - 1));
              }
              h < 0 &&
                (h = tY.find(
                  e,
                  r,
                  null !== (n = s.bidiLevel) && void 0 !== n ? n : -1,
                  s.assoc
                ));
              let a = e[h];
              r == a.side(o, i) && (r = (a = e[(h += o ? 1 : -1)]).side(!o, i));
              let c = o == (a.dir == i),
                d = (0, l.cp)(t.text, r, c);
              if (
                ((tZ = t.text.slice(Math.min(r, d), Math.max(r, d))),
                d != a.side(o, i))
              )
                return l.jT.cursor(d + t.from, c ? -1 : 1, a.level);
              let u = h == (o ? e.length - 1 : 0) ? null : e[h + (o ? 1 : -1)];
              return u || a.level == i
                ? u && u.level < a.level
                  ? l.jT.cursor(u.side(!o, i) + t.from, o ? 1 : -1, u.level)
                  : l.jT.cursor(d + t.from, o ? -1 : 1, a.level)
                : l.jT.cursor(o ? t.to : t.from, o ? -1 : 1, i);
            })(o, n, r, h, i),
            c = tZ;
          if (!e) {
            if (o.number == (i ? t.state.doc.lines : 1)) return h;
            (c = '\n'),
              (o = t.state.doc.line(o.number + (i ? 1 : -1))),
              (n = t.bidiSpans(o)),
              (e = l.jT.cursor(i ? o.from : o.to));
          }
          if (a) {
            if (!a(c)) return h;
          } else {
            if (!s) return e;
            a = s(c);
          }
          h = e;
        }
      }
      function er(t, e, i) {
        let s = t.state.facet(tN).map((e) => e(t));
        for (;;) {
          let t = !1;
          for (let o of s)
            o.between(i.from - 1, i.from + 1, (s, o, n) => {
              i.from > s &&
                i.from < o &&
                ((i = e.head > i.from ? l.jT.cursor(s, 1) : l.jT.cursor(o, -1)),
                (t = !0));
            });
          if (!t) return i;
        }
      }
      class el {
        constructor(t) {
          (this.lastKeyCode = 0),
            (this.lastKeyTime = 0),
            (this.lastTouchTime = 0),
            (this.lastFocusTime = 0),
            (this.lastScrollTop = 0),
            (this.lastScrollLeft = 0),
            (this.chromeScrollHack = -1),
            (this.pendingIOSKey = void 0),
            (this.lastSelectionOrigin = null),
            (this.lastSelectionTime = 0),
            (this.lastEscPress = 0),
            (this.lastContextMenu = 0),
            (this.scrollHandlers = []),
            (this.registeredEvents = []),
            (this.customHandlers = []),
            (this.composing = -1),
            (this.compositionFirstChange = null),
            (this.compositionEndedAt = 0),
            (this.compositionPendingKey = !1),
            (this.compositionPendingChange = !1),
            (this.mouseSelection = null);
          let e = (e, i) => {
            !this.ignoreDuringComposition(i) &&
              (('keydown' == i.type && this.keydown(t, i)) ||
                (this.mustFlushObserver(i) && t.observer.forceFlush(),
                this.runCustomHandlers(i.type, t, i)
                  ? i.preventDefault()
                  : e(t, i)));
          };
          for (let i in ep) {
            let s = ep[i];
            t.contentDOM.addEventListener(
              i,
              (i) => {
                ef(t, i) && e(s, i);
              },
              eg[i]
            ),
              this.registeredEvents.push(i);
          }
          t.scrollDOM.addEventListener('mousedown', (i) => {
            if (
              i.target == t.scrollDOM &&
              i.clientY > t.contentDOM.getBoundingClientRect().bottom &&
              (e(ep.mousedown, i), !i.defaultPrevented && 2 == i.button)
            ) {
              let e = t.contentDOM.style.minHeight;
              (t.contentDOM.style.minHeight = '100%'),
                setTimeout(() => (t.contentDOM.style.minHeight = e), 200);
            }
          }),
            q.chrome &&
              102 == q.chrome_version &&
              t.scrollDOM.addEventListener(
                'wheel',
                () => {
                  this.chromeScrollHack < 0
                    ? (t.contentDOM.style.pointerEvents = 'none')
                    : window.clearTimeout(this.chromeScrollHack),
                    (this.chromeScrollHack = setTimeout(() => {
                      (this.chromeScrollHack = -1),
                        (t.contentDOM.style.pointerEvents = '');
                    }, 100));
                },
                {passive: !0}
              ),
            (this.notifiedFocused = t.hasFocus),
            q.safari && t.contentDOM.addEventListener('input', () => null);
        }
        setSelectionOrigin(t) {
          (this.lastSelectionOrigin = t), (this.lastSelectionTime = Date.now());
        }
        ensureHandlers(t, e) {
          var i;
          let s;
          for (let o of ((this.customHandlers = []), e))
            if (
              (s =
                null === (i = o.update(t).spec) || void 0 === i
                  ? void 0
                  : i.domEventHandlers)
            )
              for (let e in (this.customHandlers.push({
                plugin: o.value,
                handlers: s,
              }),
              s))
                0 > this.registeredEvents.indexOf(e) &&
                  'scroll' != e &&
                  (this.registeredEvents.push(e),
                  t.contentDOM.addEventListener(e, (i) => {
                    ef(t, i) &&
                      this.runCustomHandlers(e, t, i) &&
                      i.preventDefault();
                  }));
        }
        runCustomHandlers(t, e, i) {
          for (let s of this.customHandlers) {
            let o = s.handlers[t];
            if (o)
              try {
                if (o.call(s.plugin, i, e) || i.defaultPrevented) return !0;
              } catch (t) {
                tD(e.state, t);
              }
          }
          return !1;
        }
        runScrollHandlers(t, e) {
          for (let i of ((this.lastScrollTop = t.scrollDOM.scrollTop),
          (this.lastScrollLeft = t.scrollDOM.scrollLeft),
          this.customHandlers)) {
            let s = i.handlers.scroll;
            if (s)
              try {
                s.call(i.plugin, e, t);
              } catch (e) {
                tD(t.state, e);
              }
          }
        }
        keydown(t, e) {
          let i;
          return (
            (this.lastKeyCode = e.keyCode),
            (this.lastKeyTime = Date.now()),
            !!(9 == e.keyCode && Date.now() < this.lastEscPress + 2e3) ||
              (q.android &&
              q.chrome &&
              !e.synthetic &&
              (13 == e.keyCode || 8 == e.keyCode)
                ? (t.observer.delayAndroidKey(e.key, e.keyCode), !0)
                : !!(
                    q.ios &&
                    !e.synthetic &&
                    !e.altKey &&
                    !e.metaKey &&
                    (((i = eh.find((t) => t.keyCode == e.keyCode)) &&
                      !e.ctrlKey) ||
                      (ea.indexOf(e.key) > -1 && e.ctrlKey && !e.shiftKey))
                  ) &&
                  ((this.pendingIOSKey = i || e),
                  setTimeout(() => this.flushIOSKey(t), 250),
                  !0))
          );
        }
        flushIOSKey(t) {
          let e = this.pendingIOSKey;
          return (
            !!e &&
            ((this.pendingIOSKey = void 0), k(t.contentDOM, e.key, e.keyCode))
          );
        }
        ignoreDuringComposition(t) {
          return (
            !!/^key/.test(t.type) &&
            (this.composing > 0 ||
              (!!(
                q.safari &&
                !q.ios &&
                this.compositionPendingKey &&
                Date.now() - this.compositionEndedAt < 100
              ) &&
                ((this.compositionPendingKey = !1), !0)))
          );
        }
        mustFlushObserver(t) {
          return 'keydown' == t.type && 229 != t.keyCode;
        }
        startMouseSelection(t) {
          this.mouseSelection && this.mouseSelection.destroy(),
            (this.mouseSelection = t);
        }
        update(t) {
          this.mouseSelection && this.mouseSelection.update(t),
            t.transactions.length &&
              (this.lastKeyCode = this.lastSelectionTime = 0);
        }
        destroy() {
          this.mouseSelection && this.mouseSelection.destroy();
        }
      }
      let eh = [
          {key: 'Backspace', keyCode: 8, inputType: 'deleteContentBackward'},
          {key: 'Enter', keyCode: 13, inputType: 'insertParagraph'},
          {key: 'Delete', keyCode: 46, inputType: 'deleteContentForward'},
        ],
        ea = 'dthko',
        ec = [16, 17, 18, 20, 91, 92, 224, 225];
      function ed(t) {
        return 0.7 * Math.max(0, t) + 8;
      }
      class eu {
        constructor(t, e, i, s) {
          let o, n;
          (this.view = t),
            (this.style = i),
            (this.mustSelect = s),
            (this.scrollSpeed = {x: 0, y: 0}),
            (this.scrolling = -1),
            (this.lastEvent = e),
            (this.scrollParent = (function (t) {
              let e = t.ownerDocument;
              for (let i = t.parentNode; i && i != e.body; )
                if (1 == i.nodeType) {
                  if (
                    i.scrollHeight > i.clientHeight ||
                    i.scrollWidth > i.clientWidth
                  )
                    return i;
                  i = i.assignedSlot || i.parentNode;
                } else if (11 == i.nodeType) i = i.host;
                else break;
              return null;
            })(t.contentDOM));
          let r = t.contentDOM.ownerDocument;
          r.addEventListener('mousemove', (this.move = this.move.bind(this))),
            r.addEventListener('mouseup', (this.up = this.up.bind(this))),
            (this.extend = e.shiftKey),
            (this.multiple =
              t.state.facet(l.yy.allowMultipleSelections) &&
              ((o = t.state.facet(tm)).length
                ? o[0](e)
                : q.mac
                ? e.metaKey
                : e.ctrlKey)),
            (this.dragMove = (n = t.state.facet(tv)).length
              ? n[0](e)
              : q.mac
              ? !e.altKey
              : !e.ctrlKey),
            (this.dragging =
              !!(function (t, e) {
                let {main: i} = t.state.selection;
                if (i.empty) return !1;
                let s = c(t.root);
                if (!s || 0 == s.rangeCount) return !0;
                let o = s.getRangeAt(0).getClientRects();
                for (let t = 0; t < o.length; t++) {
                  let i = o[t];
                  if (
                    i.left <= e.clientX &&
                    i.right >= e.clientX &&
                    i.top <= e.clientY &&
                    i.bottom >= e.clientY
                  )
                    return !0;
                }
                return !1;
              })(t, e) &&
              1 == eA(e) &&
              null);
        }
        start(t) {
          !1 === this.dragging && (t.preventDefault(), this.select(t));
        }
        move(t) {
          var e;
          if (0 == t.buttons) return this.destroy();
          if (!1 !== this.dragging) return;
          this.select((this.lastEvent = t));
          let i = 0,
            s = 0,
            o = (null === (e = this.scrollParent) || void 0 === e
              ? void 0
              : e.getBoundingClientRect()) || {
              left: 0,
              top: 0,
              right: this.view.win.innerWidth,
              bottom: this.view.win.innerHeight,
            };
          t.clientX <= o.left + 6
            ? (i = -ed(o.left - t.clientX))
            : t.clientX >= o.right - 6 && (i = ed(t.clientX - o.right)),
            t.clientY <= o.top + 6
              ? (s = -ed(o.top - t.clientY))
              : t.clientY >= o.bottom - 6 && (s = ed(t.clientY - o.bottom)),
            this.setScrollSpeed(i, s);
        }
        up(t) {
          null == this.dragging && this.select(this.lastEvent),
            this.dragging || t.preventDefault(),
            this.destroy();
        }
        destroy() {
          this.setScrollSpeed(0, 0);
          let t = this.view.contentDOM.ownerDocument;
          t.removeEventListener('mousemove', this.move),
            t.removeEventListener('mouseup', this.up),
            (this.view.inputState.mouseSelection = null);
        }
        setScrollSpeed(t, e) {
          (this.scrollSpeed = {x: t, y: e}),
            t || e
              ? this.scrolling < 0 &&
                (this.scrolling = setInterval(() => this.scroll(), 50))
              : this.scrolling > -1 &&
                (clearInterval(this.scrolling), (this.scrolling = -1));
        }
        scroll() {
          this.scrollParent
            ? ((this.scrollParent.scrollLeft += this.scrollSpeed.x),
              (this.scrollParent.scrollTop += this.scrollSpeed.y))
            : this.view.win.scrollBy(this.scrollSpeed.x, this.scrollSpeed.y),
            !1 === this.dragging && this.select(this.lastEvent);
        }
        select(t) {
          let e = this.style.get(t, this.extend, this.multiple);
          (this.mustSelect ||
            !e.eq(this.view.state.selection) ||
            e.main.assoc != this.view.state.selection.main.assoc) &&
            this.view.dispatch({selection: e, userEvent: 'select.pointer'}),
            (this.mustSelect = !1);
        }
        update(t) {
          t.docChanged &&
            this.dragging &&
            (this.dragging = this.dragging.map(t.changes)),
            this.style.update(t) &&
              setTimeout(() => this.select(this.lastEvent), 20);
        }
      }
      function ef(t, e) {
        if (!e.bubbles) return !0;
        if (e.defaultPrevented) return !1;
        for (let i = e.target, s; i != t.contentDOM; i = i.parentNode)
          if (!i || 11 == i.nodeType || ((s = T.get(i)) && s.ignoreEvent(e)))
            return !1;
        return !0;
      }
      let ep = Object.create(null),
        eg = Object.create(null),
        em = (q.ie && q.ie_version < 15) || (q.ios && q.webkit_version < 604);
      function ev(t, e) {
        let {state: i} = t,
          s,
          o = 1,
          n = i.toText(e),
          r = n.lines == i.selection.ranges.length;
        if (
          null != eT &&
          i.selection.ranges.every((t) => t.empty) &&
          eT == n.toString()
        ) {
          let t = -1;
          s = i.changeByRange((s) => {
            let h = i.doc.lineAt(s.from);
            if (h.from == t) return {range: s};
            t = h.from;
            let a = i.toText((r ? n.line(o++).text : e) + i.lineBreak);
            return {
              changes: {from: h.from, insert: a},
              range: l.jT.cursor(s.from + a.length),
            };
          });
        } else
          s = r
            ? i.changeByRange((t) => {
                let e = n.line(o++);
                return {
                  changes: {from: t.from, to: t.to, insert: e.text},
                  range: l.jT.cursor(t.from + e.length),
                };
              })
            : i.replaceSelection(n);
        t.dispatch(s, {userEvent: 'input.paste', scrollIntoView: !0});
      }
      function ew(t, e, i, s) {
        if (1 == s) return l.jT.cursor(e, i);
        if (2 == s)
          return (function (t, e, i = 1) {
            let s = t.charCategorizer(e),
              o = t.doc.lineAt(e),
              n = e - o.from;
            if (0 == o.length) return l.jT.cursor(e);
            0 == n ? (i = 1) : n == o.length && (i = -1);
            let r = n,
              h = n;
            i < 0 ? (r = (0, l.cp)(o.text, n, !1)) : (h = (0, l.cp)(o.text, n));
            let a = s(o.text.slice(r, h));
            for (; r > 0; ) {
              let t = (0, l.cp)(o.text, r, !1);
              if (s(o.text.slice(t, r)) != a) break;
              r = t;
            }
            for (; h < o.length; ) {
              let t = (0, l.cp)(o.text, h);
              if (s(o.text.slice(h, t)) != a) break;
              h = t;
            }
            return l.jT.range(r + o.from, h + o.from);
          })(t.state, e, i);
        {
          let i = td.find(t.docView, e),
            s = t.state.doc.lineAt(i ? i.posAtEnd : e),
            o = i ? i.posAtStart : s.from,
            n = i ? i.posAtEnd : s.to;
          return n < t.state.doc.length && n == s.to && n++, l.jT.range(o, n);
        }
      }
      (ep.keydown = (t, e) => {
        t.inputState.setSelectionOrigin('select'),
          27 == e.keyCode
            ? (t.inputState.lastEscPress = Date.now())
            : 0 > ec.indexOf(e.keyCode) && (t.inputState.lastEscPress = 0);
      }),
        (ep.touchstart = (t, e) => {
          (t.inputState.lastTouchTime = Date.now()),
            t.inputState.setSelectionOrigin('select.pointer');
        }),
        (ep.touchmove = (t) => {
          t.inputState.setSelectionOrigin('select.pointer');
        }),
        (eg.touchstart = eg.touchmove = {passive: !0}),
        (ep.mousedown = (t, e) => {
          let i, s, o;
          if (
            (t.observer.flush(), t.inputState.lastTouchTime > Date.now() - 2e3)
          )
            return;
          let n = null;
          for (let i of t.state.facet(tw)) if ((n = i(t, e))) break;
          if (
            (n ||
              0 != e.button ||
              ((i = ex(t, e)),
              (s = eA(e)),
              (o = t.state.selection),
              (n = {
                update(t) {
                  t.docChanged &&
                    ((i.pos = t.changes.mapPos(i.pos)), (o = o.map(t.changes)));
                },
                get(e, n, r) {
                  let h = ex(t, e),
                    a,
                    c = ew(t, h.pos, h.bias, s);
                  if (i.pos != h.pos && !n) {
                    let e = ew(t, i.pos, i.bias, s),
                      o = Math.min(e.from, c.from),
                      n = Math.max(e.to, c.to);
                    c = o < c.from ? l.jT.range(o, n) : l.jT.range(n, o);
                  }
                  return n
                    ? o.replaceRange(o.main.extend(c.from, c.to))
                    : r &&
                      1 == s &&
                      o.ranges.length > 1 &&
                      (a = (function (t, e) {
                        for (let i = 0; i < t.ranges.length; i++) {
                          let {from: s, to: o} = t.ranges[i];
                          if (s <= e && o >= e)
                            return l.jT.create(
                              t.ranges
                                .slice(0, i)
                                .concat(t.ranges.slice(i + 1)),
                              t.mainIndex == i
                                ? 0
                                : t.mainIndex - (t.mainIndex > i ? 1 : 0)
                            );
                        }
                        return null;
                      })(o, h.pos))
                    ? a
                    : r
                    ? o.addRange(c)
                    : l.jT.create([c]);
                },
              })),
            n)
          ) {
            let i = t.root.activeElement != t.contentDOM;
            t.inputState.startMouseSelection(new eu(t, e, n, i)),
              i && t.observer.ignore(() => S(t.contentDOM)),
              t.inputState.mouseSelection &&
                t.inputState.mouseSelection.start(e);
          }
        });
      let eb = (t, e) => t >= e.top && t <= e.bottom,
        ey = (t, e, i) => eb(e, i) && t >= i.left && t <= i.right;
      function ex(t, e) {
        let i = t.posAtCoords({x: e.clientX, y: e.clientY}, !1);
        return {
          pos: i,
          bias: (function (t, e, i, s) {
            let o = td.find(t.docView, e);
            if (!o) return 1;
            let n = e - o.posAtStart;
            if (0 == n) return 1;
            if (n == o.length) return -1;
            let r = o.coordsAt(n, -1);
            if (r && ey(i, s, r)) return -1;
            let l = o.coordsAt(n, 1);
            return l && ey(i, s, l) ? 1 : r && eb(s, r) ? -1 : 1;
          })(t, i, e.clientX, e.clientY),
        };
      }
      let eS = q.ie && q.ie_version <= 11,
        eM = null,
        ek = 0,
        eC = 0;
      function eA(t) {
        if (!eS) return t.detail;
        let e = eM,
          i = eC;
        return (
          (eM = t),
          (eC = Date.now()),
          (ek =
            !e ||
            (i > Date.now() - 400 &&
              2 > Math.abs(e.clientX - t.clientX) &&
              2 > Math.abs(e.clientY - t.clientY))
              ? (ek + 1) % 3
              : 1)
        );
      }
      function eD(t, e, i, s) {
        if (!i) return;
        let o = t.posAtCoords({x: e.clientX, y: e.clientY}, !1);
        e.preventDefault();
        let {mouseSelection: n} = t.inputState,
          r =
            s && n && n.dragging && n.dragMove
              ? {from: n.dragging.from, to: n.dragging.to}
              : null,
          l = {from: o, insert: i},
          h = t.state.changes(r ? [r, l] : l);
        t.focus(),
          t.dispatch({
            changes: h,
            selection: {anchor: h.mapPos(o, -1), head: h.mapPos(o, 1)},
            userEvent: r ? 'move.drop' : 'input.drop',
          });
      }
      (ep.dragstart = (t, e) => {
        let {
            selection: {main: i},
          } = t.state,
          {mouseSelection: s} = t.inputState;
        s && (s.dragging = i),
          e.dataTransfer &&
            (e.dataTransfer.setData('Text', t.state.sliceDoc(i.from, i.to)),
            (e.dataTransfer.effectAllowed = 'copyMove'));
      }),
        (ep.drop = (t, e) => {
          if (!e.dataTransfer) return;
          if (t.state.readOnly) return e.preventDefault();
          let i = e.dataTransfer.files;
          if (i && i.length) {
            e.preventDefault();
            let s = Array(i.length),
              o = 0,
              n = () => {
                ++o == i.length &&
                  eD(
                    t,
                    e,
                    s.filter((t) => null != t).join(t.state.lineBreak),
                    !1
                  );
              };
            for (let t = 0; t < i.length; t++) {
              let e = new FileReader();
              (e.onerror = n),
                (e.onload = () => {
                  /[\x00-\x08\x0e-\x1f]{2}/.test(e.result) || (s[t] = e.result),
                    n();
                }),
                e.readAsText(i[t]);
            }
          } else eD(t, e, e.dataTransfer.getData('Text'), !0);
        }),
        (ep.paste = (t, e) => {
          if (t.state.readOnly) return e.preventDefault();
          t.observer.flush();
          let i = em ? null : e.clipboardData;
          i
            ? (ev(t, i.getData('text/plain') || i.getData('text/uri-text')),
              e.preventDefault())
            : (function (t) {
                let e = t.dom.parentNode;
                if (!e) return;
                let i = e.appendChild(document.createElement('textarea'));
                (i.style.cssText =
                  'position: fixed; left: -10000px; top: 10px'),
                  i.focus(),
                  setTimeout(() => {
                    t.focus(), i.remove(), ev(t, i.value);
                  }, 50);
              })(t);
        });
      let eT = null;
      ep.copy = ep.cut = (t, e) => {
        let {
          text: i,
          ranges: s,
          linewise: o,
        } = (function (t) {
          let e = [],
            i = [],
            s = !1;
          for (let s of t.selection.ranges)
            s.empty || (e.push(t.sliceDoc(s.from, s.to)), i.push(s));
          if (!e.length) {
            let o = -1;
            for (let {from: s} of t.selection.ranges) {
              let n = t.doc.lineAt(s);
              n.number > o &&
                (e.push(n.text),
                i.push({from: n.from, to: Math.min(t.doc.length, n.to + 1)})),
                (o = n.number);
            }
            s = !0;
          }
          return {text: e.join(t.lineBreak), ranges: i, linewise: s};
        })(t.state);
        if (!i && !o) return;
        eT = o ? i : null;
        let n = em ? null : e.clipboardData;
        n
          ? (e.preventDefault(), n.clearData(), n.setData('text/plain', i))
          : (function (t, e) {
              let i = t.dom.parentNode;
              if (!i) return;
              let s = i.appendChild(document.createElement('textarea'));
              (s.style.cssText = 'position: fixed; left: -10000px; top: 10px'),
                (s.value = e),
                s.focus(),
                (s.selectionEnd = e.length),
                (s.selectionStart = 0),
                setTimeout(() => {
                  s.remove(), t.focus();
                }, 50);
            })(t, i),
          'cut' != e.type ||
            t.state.readOnly ||
            t.dispatch({
              changes: s,
              scrollIntoView: !0,
              userEvent: 'delete.cut',
            });
      };
      let eO = l.q6.define();
      function eE(t, e) {
        let i = [];
        for (let s of t.facet(tS)) {
          let o = s(t, e);
          o && i.push(o);
        }
        return i ? t.update({effects: i, annotations: eO.of(!0)}) : null;
      }
      function eR(t) {
        setTimeout(() => {
          let e = t.hasFocus;
          if (e != t.inputState.notifiedFocused) {
            let i = eE(t.state, e);
            i ? t.dispatch(i) : t.update([]);
          }
        }, 10);
      }
      (ep.focus = (t) => {
        (t.inputState.lastFocusTime = Date.now()),
          !t.scrollDOM.scrollTop &&
            (t.inputState.lastScrollTop || t.inputState.lastScrollLeft) &&
            ((t.scrollDOM.scrollTop = t.inputState.lastScrollTop),
            (t.scrollDOM.scrollLeft = t.inputState.lastScrollLeft)),
          eR(t);
      }),
        (ep.blur = (t) => {
          t.observer.clearSelectionRange(), eR(t);
        }),
        (ep.compositionstart = ep.compositionupdate =
          (t) => {
            null == t.inputState.compositionFirstChange &&
              (t.inputState.compositionFirstChange = !0),
              t.inputState.composing < 0 && (t.inputState.composing = 0);
          }),
        (ep.compositionend = (t) => {
          (t.inputState.composing = -1),
            (t.inputState.compositionEndedAt = Date.now()),
            (t.inputState.compositionPendingKey = !0),
            (t.inputState.compositionPendingChange =
              t.observer.pendingRecords().length > 0),
            (t.inputState.compositionFirstChange = null),
            q.chrome && q.android && t.observer.flushSoon(),
            setTimeout(() => {
              t.inputState.composing < 0 &&
                t.docView.compositionDeco.size &&
                t.update([]);
            }, 50);
        }),
        (ep.contextmenu = (t) => {
          t.inputState.lastContextMenu = Date.now();
        }),
        (ep.beforeinput = (t, e) => {
          var i;
          let s;
          if (
            q.chrome &&
            q.android &&
            (s = eh.find((t) => t.inputType == e.inputType)) &&
            (t.observer.delayAndroidKey(s.key, s.keyCode),
            'Backspace' == s.key || 'Delete' == s.key)
          ) {
            let e =
              (null === (i = window.visualViewport) || void 0 === i
                ? void 0
                : i.height) || 0;
            setTimeout(() => {
              var i;
              ((null === (i = window.visualViewport) || void 0 === i
                ? void 0
                : i.height) || 0) >
                e + 10 &&
                t.hasFocus &&
                (t.contentDOM.blur(), t.focus());
            }, 100);
          }
        });
      let eB = ['pre-wrap', 'normal', 'pre-line', 'break-spaces'];
      class eL {
        constructor(t) {
          (this.lineWrapping = t),
            (this.doc = l.xv.empty),
            (this.heightSamples = {}),
            (this.lineHeight = 14),
            (this.charWidth = 7),
            (this.textHeight = 14),
            (this.lineLength = 30),
            (this.heightChanged = !1);
        }
        heightForGap(t, e) {
          let i = this.doc.lineAt(e).number - this.doc.lineAt(t).number + 1;
          return (
            this.lineWrapping &&
              (i += Math.max(
                0,
                Math.ceil((e - t - i * this.lineLength * 0.5) / this.lineLength)
              )),
            this.lineHeight * i
          );
        }
        heightForLine(t) {
          return this.lineWrapping
            ? (1 +
                Math.max(
                  0,
                  Math.ceil((t - this.lineLength) / (this.lineLength - 5))
                )) *
                this.lineHeight
            : this.lineHeight;
        }
        setDoc(t) {
          return (this.doc = t), this;
        }
        mustRefreshForWrapping(t) {
          return eB.indexOf(t) > -1 != this.lineWrapping;
        }
        mustRefreshForHeights(t) {
          let e = !1;
          for (let i = 0; i < t.length; i++) {
            let s = t[i];
            s < 0
              ? i++
              : this.heightSamples[Math.floor(10 * s)] ||
                ((e = !0), (this.heightSamples[Math.floor(10 * s)] = !0));
          }
          return e;
        }
        refresh(t, e, i, s, o, n) {
          let r = eB.indexOf(t) > -1,
            l =
              Math.round(e) != Math.round(this.lineHeight) ||
              this.lineWrapping != r;
          if (
            ((this.lineWrapping = r),
            (this.lineHeight = e),
            (this.charWidth = i),
            (this.textHeight = s),
            (this.lineLength = o),
            l)
          ) {
            this.heightSamples = {};
            for (let t = 0; t < n.length; t++) {
              let e = n[t];
              e < 0 ? t++ : (this.heightSamples[Math.floor(10 * e)] = !0);
            }
          }
          return l;
        }
      }
      class eH {
        constructor(t, e) {
          (this.from = t), (this.heights = e), (this.index = 0);
        }
        get more() {
          return this.index < this.heights.length;
        }
      }
      class eV {
        constructor(t, e, i, s, o) {
          (this.from = t),
            (this.length = e),
            (this.top = i),
            (this.height = s),
            (this.type = o);
        }
        get to() {
          return this.from + this.length;
        }
        get bottom() {
          return this.top + this.height;
        }
        join(t) {
          let e = (Array.isArray(this.type) ? this.type : [this]).concat(
            Array.isArray(t.type) ? t.type : [t]
          );
          return new eV(
            this.from,
            this.length + t.length,
            this.top,
            this.height + t.height,
            e
          );
        }
      }
      var eN =
        (((r = eN || (eN = {}))[(r.ByPos = 0)] = 'ByPos'),
        (r[(r.ByHeight = 1)] = 'ByHeight'),
        (r[(r.ByPosNoHeight = 2)] = 'ByPosNoHeight'),
        r);
      class eP {
        constructor(t, e, i = 2) {
          (this.length = t), (this.height = e), (this.flags = i);
        }
        get outdated() {
          return (2 & this.flags) > 0;
        }
        set outdated(t) {
          this.flags = (t ? 2 : 0) | (-3 & this.flags);
        }
        setHeight(t, e) {
          this.height != e &&
            (Math.abs(this.height - e) > 0.001 && (t.heightChanged = !0),
            (this.height = e));
        }
        replace(t, e, i) {
          return eP.of(i);
        }
        decomposeLeft(t, e) {
          e.push(this);
        }
        decomposeRight(t, e) {
          e.push(this);
        }
        applyChanges(t, e, i, s) {
          let o = this,
            n = i.doc;
          for (let r = s.length - 1; r >= 0; r--) {
            let {fromA: l, toA: h, fromB: a, toB: c} = s[r],
              d = o.lineAt(l, eN.ByPosNoHeight, i.setDoc(e), 0, 0),
              u = d.to >= h ? d : o.lineAt(h, eN.ByPosNoHeight, i, 0, 0);
            for (c += u.to - h, h = u.to; r > 0 && d.from <= s[r - 1].toA; )
              (l = s[r - 1].fromA),
                (a = s[r - 1].fromB),
                r--,
                l < d.from && (d = o.lineAt(l, eN.ByPosNoHeight, i, 0, 0));
            (a += d.from - l), (l = d.from);
            let f = ej.build(i.setDoc(n), t, a, c);
            o = o.replace(l, h, f);
          }
          return o.updateHeight(i, 0);
        }
        static empty() {
          return new ez(0, 0);
        }
        static of(t) {
          if (1 == t.length) return t[0];
          let e = 0,
            i = t.length,
            s = 0,
            o = 0;
          for (;;)
            if (e == i) {
              if (s > 2 * o) {
                let o = t[e - 1];
                o.break
                  ? t.splice(--e, 1, o.left, null, o.right)
                  : t.splice(--e, 1, o.left, o.right),
                  (i += 1 + o.break),
                  (s -= o.size);
              } else if (o > 2 * s) {
                let e = t[i];
                e.break
                  ? t.splice(i, 1, e.left, null, e.right)
                  : t.splice(i, 1, e.left, e.right),
                  (i += 2 + e.break),
                  (o -= e.size);
              } else break;
            } else if (s < o) {
              let i = t[e++];
              i && (s += i.size);
            } else {
              let e = t[--i];
              e && (o += e.size);
            }
          let n = 0;
          return (
            null == t[e - 1] ? ((n = 1), e--) : null == t[e] && ((n = 1), i++),
            new eI(eP.of(t.slice(0, e)), n, eP.of(t.slice(i)))
          );
        }
      }
      eP.prototype.size = 1;
      class eW extends eP {
        constructor(t, e, i) {
          super(t, e), (this.type = i);
        }
        blockAt(t, e, i, s) {
          return new eV(s, this.length, i, this.height, this.type);
        }
        lineAt(t, e, i, s, o) {
          return this.blockAt(0, i, s, o);
        }
        forEachLine(t, e, i, s, o, n) {
          t <= o + this.length && e >= o && n(this.blockAt(0, i, s, o));
        }
        updateHeight(t, e = 0, i = !1, s) {
          return (
            s &&
              s.from <= e &&
              s.more &&
              this.setHeight(t, s.heights[s.index++]),
            (this.outdated = !1),
            this
          );
        }
        toString() {
          return `block(${this.length})`;
        }
      }
      class ez extends eW {
        constructor(t, e) {
          super(t, e, to.Text), (this.collapsed = 0), (this.widgetHeight = 0);
        }
        replace(t, e, i) {
          let s = i[0];
          return 1 == i.length &&
            (s instanceof ez || (s instanceof eF && 4 & s.flags)) &&
            10 > Math.abs(this.length - s.length)
            ? (s instanceof eF
                ? (s = new ez(s.length, this.height))
                : (s.height = this.height),
              this.outdated || (s.outdated = !1),
              s)
            : eP.of(i);
        }
        updateHeight(t, e = 0, i = !1, s) {
          return (
            s && s.from <= e && s.more
              ? this.setHeight(t, s.heights[s.index++])
              : (i || this.outdated) &&
                this.setHeight(
                  t,
                  Math.max(
                    this.widgetHeight,
                    t.heightForLine(this.length - this.collapsed)
                  )
                ),
            (this.outdated = !1),
            this
          );
        }
        toString() {
          return `line(${this.length}${this.collapsed ? -this.collapsed : ''}${
            this.widgetHeight ? ':' + this.widgetHeight : ''
          })`;
        }
      }
      class eF extends eP {
        constructor(t) {
          super(t, 0);
        }
        heightMetrics(t, e) {
          let i = t.doc.lineAt(e).number,
            s = t.doc.lineAt(e + this.length).number,
            o = s - i + 1,
            n,
            r = 0;
          if (t.lineWrapping) {
            let e = Math.min(this.height, t.lineHeight * o);
            (n = e / o), (r = (this.height - e) / (this.length - o - 1));
          } else n = this.height / o;
          return {firstLine: i, lastLine: s, perLine: n, perChar: r};
        }
        blockAt(t, e, i, s) {
          let {
            firstLine: o,
            lastLine: n,
            perLine: r,
            perChar: l,
          } = this.heightMetrics(e, s);
          if (e.lineWrapping) {
            let o =
                s +
                Math.round(
                  Math.max(0, Math.min(1, (t - i) / this.height)) * this.length
                ),
              n = e.doc.lineAt(o),
              h = r + n.length * l,
              a = Math.max(i, t - h / 2);
            return new eV(n.from, n.length, a, h, to.Text);
          }
          {
            let s = Math.max(0, Math.min(n - o, Math.floor((t - i) / r))),
              {from: l, length: h} = e.doc.line(o + s);
            return new eV(l, h, i + r * s, r, to.Text);
          }
        }
        lineAt(t, e, i, s, o) {
          if (e == eN.ByHeight) return this.blockAt(t, i, s, o);
          if (e == eN.ByPosNoHeight) {
            let {from: e, to: s} = i.doc.lineAt(t);
            return new eV(e, s - e, 0, 0, to.Text);
          }
          let {firstLine: n, perLine: r, perChar: l} = this.heightMetrics(i, o),
            h = i.doc.lineAt(t),
            a = r + h.length * l,
            c = h.number - n,
            d = s + r * c + l * (h.from - o - c);
          return new eV(
            h.from,
            h.length,
            Math.max(s, Math.min(d, s + this.height - a)),
            a,
            to.Text
          );
        }
        forEachLine(t, e, i, s, o, n) {
          (t = Math.max(t, o)), (e = Math.min(e, o + this.length));
          let {firstLine: r, perLine: l, perChar: h} = this.heightMetrics(i, o);
          for (let a = t, c = s; a <= e; ) {
            let e = i.doc.lineAt(a);
            if (a == t) {
              let i = e.number - r;
              c += l * i + h * (t - o - i);
            }
            let s = l + h * e.length;
            n(new eV(e.from, e.length, c, s, to.Text)),
              (c += s),
              (a = e.to + 1);
          }
        }
        replace(t, e, i) {
          let s = this.length - e;
          if (s > 0) {
            let t = i[i.length - 1];
            t instanceof eF
              ? (i[i.length - 1] = new eF(t.length + s))
              : i.push(null, new eF(s - 1));
          }
          if (t > 0) {
            let e = i[0];
            e instanceof eF
              ? (i[0] = new eF(t + e.length))
              : i.unshift(new eF(t - 1), null);
          }
          return eP.of(i);
        }
        decomposeLeft(t, e) {
          e.push(new eF(t - 1), null);
        }
        decomposeRight(t, e) {
          e.push(null, new eF(this.length - t - 1));
        }
        updateHeight(t, e = 0, i = !1, s) {
          let o = e + this.length;
          if (s && s.from <= e + this.length && s.more) {
            let i = [],
              n = Math.max(e, s.from),
              r = -1;
            for (
              s.from > e && i.push(new eF(s.from - e - 1).updateHeight(t, e));
              n <= o && s.more;

            ) {
              let e = t.doc.lineAt(n).length;
              i.length && i.push(null);
              let o = s.heights[s.index++];
              -1 == r ? (r = o) : Math.abs(o - r) >= 0.001 && (r = -2);
              let l = new ez(e, o);
              (l.outdated = !1), i.push(l), (n += e + 1);
            }
            n <= o && i.push(null, new eF(o - n).updateHeight(t, n));
            let l = eP.of(i);
            return (
              (r < 0 ||
                Math.abs(l.height - this.height) >= 0.001 ||
                Math.abs(r - this.heightMetrics(t, e).perLine) >= 0.001) &&
                (t.heightChanged = !0),
              l
            );
          }
          return (
            (i || this.outdated) &&
              (this.setHeight(t, t.heightForGap(e, e + this.length)),
              (this.outdated = !1)),
            this
          );
        }
        toString() {
          return `gap(${this.length})`;
        }
      }
      class eI extends eP {
        constructor(t, e, i) {
          super(
            t.length + e + i.length,
            t.height + i.height,
            e | (t.outdated || i.outdated ? 2 : 0)
          ),
            (this.left = t),
            (this.right = i),
            (this.size = t.size + i.size);
        }
        get break() {
          return 1 & this.flags;
        }
        blockAt(t, e, i, s) {
          let o = i + this.left.height;
          return t < o
            ? this.left.blockAt(t, e, i, s)
            : this.right.blockAt(t, e, o, s + this.left.length + this.break);
        }
        lineAt(t, e, i, s, o) {
          let n = s + this.left.height,
            r = o + this.left.length + this.break,
            l = e == eN.ByHeight ? t < n : t < r,
            h = l
              ? this.left.lineAt(t, e, i, s, o)
              : this.right.lineAt(t, e, i, n, r);
          if (this.break || (l ? h.to < r : h.from > r)) return h;
          let a = e == eN.ByPosNoHeight ? eN.ByPosNoHeight : eN.ByPos;
          return l
            ? h.join(this.right.lineAt(r, a, i, n, r))
            : this.left.lineAt(r, a, i, s, o).join(h);
        }
        forEachLine(t, e, i, s, o, n) {
          let r = s + this.left.height,
            l = o + this.left.length + this.break;
          if (this.break)
            t < l && this.left.forEachLine(t, e, i, s, o, n),
              e >= l && this.right.forEachLine(t, e, i, r, l, n);
          else {
            let h = this.lineAt(l, eN.ByPos, i, s, o);
            t < h.from && this.left.forEachLine(t, h.from - 1, i, s, o, n),
              h.to >= t && h.from <= e && n(h),
              e > h.to && this.right.forEachLine(h.to + 1, e, i, r, l, n);
          }
        }
        replace(t, e, i) {
          let s = this.left.length + this.break;
          if (e < s)
            return this.balanced(this.left.replace(t, e, i), this.right);
          if (t > this.left.length)
            return this.balanced(
              this.left,
              this.right.replace(t - s, e - s, i)
            );
          let o = [];
          t > 0 && this.decomposeLeft(t, o);
          let n = o.length;
          for (let t of i) o.push(t);
          if ((t > 0 && eK(o, n - 1), e < this.length)) {
            let t = o.length;
            this.decomposeRight(e, o), eK(o, t);
          }
          return eP.of(o);
        }
        decomposeLeft(t, e) {
          let i = this.left.length;
          if (t <= i) return this.left.decomposeLeft(t, e);
          e.push(this.left),
            this.break && t >= ++i && e.push(null),
            t > i && this.right.decomposeLeft(t - i, e);
        }
        decomposeRight(t, e) {
          let i = this.left.length,
            s = i + this.break;
          if (t >= s) return this.right.decomposeRight(t - s, e);
          t < i && this.left.decomposeRight(t, e),
            this.break && t < s && e.push(null),
            e.push(this.right);
        }
        balanced(t, e) {
          return t.size > 2 * e.size || e.size > 2 * t.size
            ? eP.of(this.break ? [t, null, e] : [t, e])
            : ((this.left = t),
              (this.right = e),
              (this.height = t.height + e.height),
              (this.outdated = t.outdated || e.outdated),
              (this.size = t.size + e.size),
              (this.length = t.length + this.break + e.length),
              this);
        }
        updateHeight(t, e = 0, i = !1, s) {
          let {left: o, right: n} = this,
            r = e + o.length + this.break,
            l = null;
          return (s && s.from <= e + o.length && s.more
            ? (l = o = o.updateHeight(t, e, i, s))
            : o.updateHeight(t, e, i),
          s && s.from <= r + n.length && s.more
            ? (l = n = n.updateHeight(t, r, i, s))
            : n.updateHeight(t, r, i),
          l)
            ? this.balanced(o, n)
            : ((this.height = this.left.height + this.right.height),
              (this.outdated = !1),
              this);
        }
        toString() {
          return this.left + (this.break ? ' ' : '-') + this.right;
        }
      }
      function eK(t, e) {
        let i, s;
        null == t[e] &&
          (i = t[e - 1]) instanceof eF &&
          (s = t[e + 1]) instanceof eF &&
          t.splice(e - 1, 3, new eF(i.length + 1 + s.length));
      }
      class ej {
        constructor(t, e) {
          (this.pos = t),
            (this.oracle = e),
            (this.nodes = []),
            (this.lineStart = -1),
            (this.lineEnd = -1),
            (this.covering = null),
            (this.writtenTo = t);
        }
        get isCovered() {
          return (
            this.covering && this.nodes[this.nodes.length - 1] == this.covering
          );
        }
        span(t, e) {
          if (this.lineStart > -1) {
            let t = Math.min(e, this.lineEnd),
              i = this.nodes[this.nodes.length - 1];
            i instanceof ez
              ? (i.length += t - this.pos)
              : (t > this.pos || !this.isCovered) &&
                this.nodes.push(new ez(t - this.pos, -1)),
              (this.writtenTo = t),
              e > t &&
                (this.nodes.push(null),
                this.writtenTo++,
                (this.lineStart = -1));
          }
          this.pos = e;
        }
        point(t, e, i) {
          if (t < e || i.heightRelevant) {
            let s = i.widget ? i.widget.estimatedHeight : 0;
            s < 0 && (s = this.oracle.lineHeight);
            let o = e - t;
            i.block
              ? this.addBlock(new eW(o, s, i.type))
              : (o || s >= 5) && this.addLineDeco(s, o);
          } else e > t && this.span(t, e);
          this.lineEnd > -1 &&
            this.lineEnd < this.pos &&
            (this.lineEnd = this.oracle.doc.lineAt(this.pos).to);
        }
        enterLine() {
          if (this.lineStart > -1) return;
          let {from: t, to: e} = this.oracle.doc.lineAt(this.pos);
          (this.lineStart = t),
            (this.lineEnd = e),
            this.writtenTo < t &&
              ((this.writtenTo < t - 1 ||
                null == this.nodes[this.nodes.length - 1]) &&
                this.nodes.push(this.blankContent(this.writtenTo, t - 1)),
              this.nodes.push(null)),
            this.pos > t && this.nodes.push(new ez(this.pos - t, -1)),
            (this.writtenTo = this.pos);
        }
        blankContent(t, e) {
          let i = new eF(e - t);
          return this.oracle.doc.lineAt(t).to == e && (i.flags |= 4), i;
        }
        ensureLine() {
          this.enterLine();
          let t = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
          if (t instanceof ez) return t;
          let e = new ez(0, -1);
          return this.nodes.push(e), e;
        }
        addBlock(t) {
          this.enterLine(),
            t.type != to.WidgetAfter || this.isCovered || this.ensureLine(),
            this.nodes.push(t),
            (this.writtenTo = this.pos = this.pos + t.length),
            t.type != to.WidgetBefore && (this.covering = t);
        }
        addLineDeco(t, e) {
          let i = this.ensureLine();
          (i.length += e),
            (i.collapsed += e),
            (i.widgetHeight = Math.max(i.widgetHeight, t)),
            (this.writtenTo = this.pos = this.pos + e);
        }
        finish(t) {
          let e =
            0 == this.nodes.length ? null : this.nodes[this.nodes.length - 1];
          !(this.lineStart > -1) || e instanceof ez || this.isCovered
            ? (this.writtenTo < this.pos || null == e) &&
              this.nodes.push(this.blankContent(this.writtenTo, this.pos))
            : this.nodes.push(new ez(0, -1));
          let i = t;
          for (let t of this.nodes)
            t instanceof ez && t.updateHeight(this.oracle, i),
              (i += t ? t.length : 1);
          return this.nodes;
        }
        static build(t, e, i, s) {
          let o = new ej(i, t);
          return l.Xs.spans(e, i, s, o, 0), o.finish(i);
        }
      }
      class eq {
        constructor() {
          this.changes = [];
        }
        compareRange() {}
        comparePoint(t, e, i, s) {
          (t < e || (i && i.heightRelevant) || (s && s.heightRelevant)) &&
            tc(t, e, this.changes, 5);
        }
      }
      function e$(t, e) {
        let i = t.getBoundingClientRect(),
          s = t.ownerDocument,
          o = s.defaultView || window,
          n = Math.max(0, i.left),
          r = Math.min(o.innerWidth, i.right),
          l = Math.max(0, i.top),
          h = Math.min(o.innerHeight, i.bottom);
        for (let e = t.parentNode; e && e != s.body; )
          if (1 == e.nodeType) {
            let i = e,
              s = window.getComputedStyle(i);
            if (
              (i.scrollHeight > i.clientHeight ||
                i.scrollWidth > i.clientWidth) &&
              'visible' != s.overflow
            ) {
              let s = i.getBoundingClientRect();
              (n = Math.max(n, s.left)),
                (r = Math.min(r, s.right)),
                (l = Math.max(l, s.top)),
                (h = e == t.parentNode ? s.bottom : Math.min(h, s.bottom));
            }
            e =
              'absolute' == s.position || 'fixed' == s.position
                ? i.offsetParent
                : i.parentNode;
          } else if (11 == e.nodeType) e = e.host;
          else break;
        return {
          left: n - i.left,
          right: Math.max(n, r) - i.left,
          top: l - (i.top + e),
          bottom: Math.max(l, h) - (i.top + e),
        };
      }
      function eG(t, e) {
        let i = t.getBoundingClientRect();
        return {
          left: 0,
          right: i.right - i.left,
          top: e,
          bottom: i.bottom - (i.top + e),
        };
      }
      class eX {
        constructor(t, e, i) {
          (this.from = t), (this.to = e), (this.size = i);
        }
        static same(t, e) {
          if (t.length != e.length) return !1;
          for (let i = 0; i < t.length; i++) {
            let s = t[i],
              o = e[i];
            if (s.from != o.from || s.to != o.to || s.size != o.size) return !1;
          }
          return !0;
        }
        draw(t) {
          return tn
            .replace({widget: new e_(this.size, t)})
            .range(this.from, this.to);
        }
      }
      class e_ extends ts {
        constructor(t, e) {
          super(), (this.size = t), (this.vertical = e);
        }
        eq(t) {
          return t.size == this.size && t.vertical == this.vertical;
        }
        toDOM() {
          let t = document.createElement('div');
          return (
            this.vertical
              ? (t.style.height = this.size + 'px')
              : ((t.style.width = this.size + 'px'),
                (t.style.height = '2px'),
                (t.style.display = 'inline-block')),
            t
          );
        }
        get estimatedHeight() {
          return this.vertical ? this.size : -1;
        }
      }
      class eU {
        constructor(t) {
          (this.state = t),
            (this.pixelViewport = {
              left: 0,
              right: window.innerWidth,
              top: 0,
              bottom: 0,
            }),
            (this.inView = !0),
            (this.paddingTop = 0),
            (this.paddingBottom = 0),
            (this.contentDOMWidth = 0),
            (this.contentDOMHeight = 0),
            (this.editorHeight = 0),
            (this.editorWidth = 0),
            (this.scaler = eZ),
            (this.scrollTarget = null),
            (this.printing = !1),
            (this.mustMeasureContent = !0),
            (this.defaultTextDirection = tI.LTR),
            (this.visibleRanges = []),
            (this.mustEnforceCursorAssoc = !1);
          let e = t
            .facet(tH)
            .some(
              (t) => 'function' != typeof t && 'cm-lineWrapping' == t.class
            );
          (this.heightOracle = new eL(e)),
            (this.stateDeco = t
              .facet(tV)
              .filter((t) => 'function' != typeof t)),
            (this.heightMap = eP
              .empty()
              .applyChanges(
                this.stateDeco,
                l.xv.empty,
                this.heightOracle.setDoc(t.doc),
                [new tz(0, 0, 0, t.doc.length)]
              )),
            (this.viewport = this.getViewport(0, null)),
            this.updateViewportLines(),
            this.updateForViewport(),
            (this.lineGaps = this.ensureLineGaps([])),
            (this.lineGapDeco = tn.set(this.lineGaps.map((t) => t.draw(!1)))),
            this.computeVisibleRanges();
        }
        updateForViewport() {
          let t = [this.viewport],
            {main: e} = this.state.selection;
          for (let i = 0; i <= 1; i++) {
            let s = i ? e.head : e.anchor;
            if (!t.some(({from: t, to: e}) => s >= t && s <= e)) {
              let {from: e, to: i} = this.lineBlockAt(s);
              t.push(new eY(e, i));
            }
          }
          (this.viewports = t.sort((t, e) => t.from - e.from)),
            (this.scaler =
              this.heightMap.height <= 7e6
                ? eZ
                : new e0(this.heightOracle, this.heightMap, this.viewports));
        }
        updateViewportLines() {
          (this.viewportLines = []),
            this.heightMap.forEachLine(
              this.viewport.from,
              this.viewport.to,
              this.heightOracle.setDoc(this.state.doc),
              0,
              0,
              (t) => {
                this.viewportLines.push(
                  1 == this.scaler.scale ? t : e1(t, this.scaler)
                );
              }
            );
        }
        update(t, e = null) {
          var i, s;
          let o;
          this.state = t.state;
          let n = this.stateDeco;
          this.stateDeco = this.state
            .facet(tV)
            .filter((t) => 'function' != typeof t);
          let r = t.changedRanges,
            h = tz.extendWithRanges(
              r,
              ((i = this.stateDeco),
              (s = t ? t.changes : l.as.empty(this.state.doc.length)),
              (o = new eq()),
              l.Xs.compare(n, i, s, o, 0),
              o.changes)
            ),
            a = this.heightMap.height;
          (this.heightMap = this.heightMap.applyChanges(
            this.stateDeco,
            t.startState.doc,
            this.heightOracle.setDoc(this.state.doc),
            h
          )),
            this.heightMap.height != a && (t.flags |= 2);
          let c = h.length
            ? this.mapViewport(this.viewport, t.changes)
            : this.viewport;
          ((e && (e.range.head < c.from || e.range.head > c.to)) ||
            !this.viewportIsAppropriate(c)) &&
            (c = this.getViewport(0, e));
          let d =
            !t.changes.empty ||
            2 & t.flags ||
            c.from != this.viewport.from ||
            c.to != this.viewport.to;
          (this.viewport = c),
            this.updateForViewport(),
            d && this.updateViewportLines(),
            (this.lineGaps.length ||
              this.viewport.to - this.viewport.from > 4e3) &&
              this.updateLineGaps(
                this.ensureLineGaps(this.mapLineGaps(this.lineGaps, t.changes))
              ),
            (t.flags |= this.computeVisibleRanges()),
            e && (this.scrollTarget = e),
            !this.mustEnforceCursorAssoc &&
              t.selectionSet &&
              t.view.lineWrapping &&
              t.state.selection.main.empty &&
              t.state.selection.main.assoc &&
              !t.state.facet(tk) &&
              (this.mustEnforceCursorAssoc = !0);
        }
        measure(t) {
          let e = t.contentDOM,
            i = window.getComputedStyle(e),
            s = this.heightOracle,
            o = i.whiteSpace;
          this.defaultTextDirection = 'rtl' == i.direction ? tI.RTL : tI.LTR;
          let n = this.heightOracle.mustRefreshForWrapping(o),
            r = e.getBoundingClientRect(),
            h =
              n || this.mustMeasureContent || this.contentDOMHeight != r.height;
          (this.contentDOMHeight = r.height), (this.mustMeasureContent = !1);
          let a = 0,
            c = 0,
            d = parseInt(i.paddingTop) || 0,
            u = parseInt(i.paddingBottom) || 0;
          (this.paddingTop != d || this.paddingBottom != u) &&
            ((this.paddingTop = d), (this.paddingBottom = u), (a |= 10)),
            this.editorWidth != t.scrollDOM.clientWidth &&
              (s.lineWrapping && (h = !0),
              (this.editorWidth = t.scrollDOM.clientWidth),
              (a |= 8));
          let f = (this.printing ? eG : e$)(e, this.paddingTop),
            p = f.top - this.pixelViewport.top,
            g = f.bottom - this.pixelViewport.bottom;
          this.pixelViewport = f;
          let m =
            this.pixelViewport.bottom > this.pixelViewport.top &&
            this.pixelViewport.right > this.pixelViewport.left;
          if (
            (m != this.inView && ((this.inView = m), m && (h = !0)),
            !this.inView && !this.scrollTarget)
          )
            return 0;
          let v = r.width;
          if (
            ((this.contentDOMWidth != v ||
              this.editorHeight != t.scrollDOM.clientHeight) &&
              ((this.contentDOMWidth = r.width),
              (this.editorHeight = t.scrollDOM.clientHeight),
              (a |= 8)),
            h)
          ) {
            let e = t.docView.measureVisibleLineHeights(this.viewport);
            if (
              (s.mustRefreshForHeights(e) && (n = !0),
              n ||
                (s.lineWrapping &&
                  Math.abs(v - this.contentDOMWidth) > s.charWidth))
            ) {
              let {
                lineHeight: i,
                charWidth: r,
                textHeight: l,
              } = t.docView.measureTextSize();
              (n = i > 0 && s.refresh(o, i, r, l, v / r, e)) &&
                ((t.docView.minWidth = 0), (a |= 8));
            }
            for (let i of (p > 0 && g > 0
              ? (c = Math.max(p, g))
              : p < 0 && g < 0 && (c = Math.min(p, g)),
            (s.heightChanged = !1),
            this.viewports)) {
              let o =
                i.from == this.viewport.from
                  ? e
                  : t.docView.measureVisibleLineHeights(i);
              this.heightMap = (
                n
                  ? eP
                      .empty()
                      .applyChanges(
                        this.stateDeco,
                        l.xv.empty,
                        this.heightOracle,
                        [new tz(0, 0, 0, t.state.doc.length)]
                      )
                  : this.heightMap
              ).updateHeight(s, 0, n, new eH(i.from, o));
            }
            s.heightChanged && (a |= 2);
          }
          let w =
            !this.viewportIsAppropriate(this.viewport, c) ||
            (this.scrollTarget &&
              (this.scrollTarget.range.head < this.viewport.from ||
                this.scrollTarget.range.head > this.viewport.to));
          return (
            w && (this.viewport = this.getViewport(c, this.scrollTarget)),
            this.updateForViewport(),
            (2 & a || w) && this.updateViewportLines(),
            (this.lineGaps.length ||
              this.viewport.to - this.viewport.from > 4e3) &&
              this.updateLineGaps(
                this.ensureLineGaps(n ? [] : this.lineGaps, t)
              ),
            (a |= this.computeVisibleRanges()),
            this.mustEnforceCursorAssoc &&
              ((this.mustEnforceCursorAssoc = !1),
              t.docView.enforceCursorAssoc()),
            a
          );
        }
        get visibleTop() {
          return this.scaler.fromDOM(this.pixelViewport.top);
        }
        get visibleBottom() {
          return this.scaler.fromDOM(this.pixelViewport.bottom);
        }
        getViewport(t, e) {
          let i = 0.5 - Math.max(-0.5, Math.min(0.5, t / 1e3 / 2)),
            s = this.heightMap,
            o = this.heightOracle,
            {visibleTop: n, visibleBottom: r} = this,
            l = new eY(
              s.lineAt(n - 1e3 * i, eN.ByHeight, o, 0, 0).from,
              s.lineAt(r + (1 - i) * 1e3, eN.ByHeight, o, 0, 0).to
            );
          if (e) {
            let {head: t} = e.range;
            if (t < l.from || t > l.to) {
              let i = Math.min(
                  this.editorHeight,
                  this.pixelViewport.bottom - this.pixelViewport.top
                ),
                n = s.lineAt(t, eN.ByPos, o, 0, 0),
                r;
              (r =
                'center' == e.y
                  ? (n.top + n.bottom) / 2 - i / 2
                  : 'start' == e.y || ('nearest' == e.y && t < l.from)
                  ? n.top
                  : n.bottom - i),
                (l = new eY(
                  s.lineAt(r - 500, eN.ByHeight, o, 0, 0).from,
                  s.lineAt(r + i + 500, eN.ByHeight, o, 0, 0).to
                ));
            }
          }
          return l;
        }
        mapViewport(t, e) {
          let i = e.mapPos(t.from, -1),
            s = e.mapPos(t.to, 1);
          return new eY(
            this.heightMap.lineAt(i, eN.ByPos, this.heightOracle, 0, 0).from,
            this.heightMap.lineAt(s, eN.ByPos, this.heightOracle, 0, 0).to
          );
        }
        viewportIsAppropriate({from: t, to: e}, i = 0) {
          if (!this.inView) return !0;
          let {top: s} = this.heightMap.lineAt(
              t,
              eN.ByPos,
              this.heightOracle,
              0,
              0
            ),
            {bottom: o} = this.heightMap.lineAt(
              e,
              eN.ByPos,
              this.heightOracle,
              0,
              0
            ),
            {visibleTop: n, visibleBottom: r} = this;
          return (
            (0 == t || s <= n - Math.max(10, Math.min(-i, 250))) &&
            (e == this.state.doc.length ||
              o >= r + Math.max(10, Math.min(i, 250))) &&
            s > n - 2e3 &&
            o < r + 2e3
          );
        }
        mapLineGaps(t, e) {
          if (!t.length || e.empty) return t;
          let i = [];
          for (let s of t)
            e.touchesRange(s.from, s.to) ||
              i.push(new eX(e.mapPos(s.from), e.mapPos(s.to), s.size));
          return i;
        }
        ensureLineGaps(t, e) {
          let i = this.heightOracle.lineWrapping,
            s = i ? 1e4 : 2e3,
            o = s >> 1,
            n = s << 1;
          if (this.defaultTextDirection != tI.LTR && !i) return [];
          let r = [],
            h = (s, n, a, c) => {
              if (n - s < o) return;
              let d = this.state.selection.main,
                u = [d.from];
              for (let t of (d.empty || u.push(d.to), u))
                if (t > s && t < n) {
                  h(s, t - 10, a, c), h(t + 10, n, a, c);
                  return;
                }
              let f = (function (t, e) {
                for (let i of t) if (e(i)) return i;
              })(
                t,
                (t) =>
                  t.from >= a.from &&
                  t.to <= a.to &&
                  Math.abs(t.from - s) < o &&
                  Math.abs(t.to - n) < o &&
                  !u.some((e) => t.from < e && t.to > e)
              );
              if (!f) {
                if (
                  n < a.to &&
                  e &&
                  i &&
                  e.visibleRanges.some((t) => t.from <= n && t.to >= n)
                ) {
                  let t = e.moveToLineBoundary(l.jT.cursor(n), !1, !0).head;
                  t > s && (n = t);
                }
                f = new eX(s, n, this.gapSize(a, s, n, c));
              }
              r.push(f);
            };
          for (let t of this.viewportLines) {
            let e, o;
            if (t.length < n) continue;
            let r = (function (t, e, i) {
              let s = [],
                o = t,
                n = 0;
              return (
                l.Xs.spans(
                  i,
                  t,
                  e,
                  {
                    span() {},
                    point(t, e) {
                      t > o && (s.push({from: o, to: t}), (n += t - o)),
                        (o = e);
                    },
                  },
                  20
                ),
                o < e && (s.push({from: o, to: e}), (n += e - o)),
                {total: n, ranges: s}
              );
            })(t.from, t.to, this.stateDeco);
            if (r.total < n) continue;
            let a = this.scrollTarget ? this.scrollTarget.range.head : null;
            if (i) {
              let i,
                n,
                l =
                  (s / this.heightOracle.lineLength) *
                  this.heightOracle.lineHeight;
              if (null != a) {
                let e = eJ(r, a),
                  s =
                    ((this.visibleBottom - this.visibleTop) / 2 + l) / t.height;
                (i = e - s), (n = e + s);
              } else
                (i = (this.visibleTop - t.top - l) / t.height),
                  (n = (this.visibleBottom - t.top + l) / t.height);
              (e = eQ(r, i)), (o = eQ(r, n));
            } else {
              let t,
                i,
                n = r.total * this.heightOracle.charWidth,
                l = s * this.heightOracle.charWidth;
              if (null != a) {
                let e = eJ(r, a),
                  s =
                    ((this.pixelViewport.right - this.pixelViewport.left) / 2 +
                      l) /
                    n;
                (t = e - s), (i = e + s);
              } else
                (t = (this.pixelViewport.left - l) / n),
                  (i = (this.pixelViewport.right + l) / n);
              (e = eQ(r, t)), (o = eQ(r, i));
            }
            e > t.from && h(t.from, e, t, r), o < t.to && h(o, t.to, t, r);
          }
          return r;
        }
        gapSize(t, e, i, s) {
          let o = eJ(s, i) - eJ(s, e);
          return this.heightOracle.lineWrapping
            ? t.height * o
            : s.total * this.heightOracle.charWidth * o;
        }
        updateLineGaps(t) {
          eX.same(t, this.lineGaps) ||
            ((this.lineGaps = t),
            (this.lineGapDeco = tn.set(
              t.map((t) => t.draw(this.heightOracle.lineWrapping))
            )));
        }
        computeVisibleRanges() {
          let t = this.stateDeco;
          this.lineGaps.length && (t = t.concat(this.lineGapDeco));
          let e = [];
          l.Xs.spans(
            t,
            this.viewport.from,
            this.viewport.to,
            {
              span(t, i) {
                e.push({from: t, to: i});
              },
              point() {},
            },
            20
          );
          let i =
            e.length != this.visibleRanges.length ||
            this.visibleRanges.some(
              (t, i) => t.from != e[i].from || t.to != e[i].to
            );
          return (this.visibleRanges = e), i ? 4 : 0;
        }
        lineBlockAt(t) {
          return (
            (t >= this.viewport.from &&
              t <= this.viewport.to &&
              this.viewportLines.find((e) => e.from <= t && e.to >= t)) ||
            e1(
              this.heightMap.lineAt(t, eN.ByPos, this.heightOracle, 0, 0),
              this.scaler
            )
          );
        }
        lineBlockAtHeight(t) {
          return e1(
            this.heightMap.lineAt(
              this.scaler.fromDOM(t),
              eN.ByHeight,
              this.heightOracle,
              0,
              0
            ),
            this.scaler
          );
        }
        elementAtHeight(t) {
          return e1(
            this.heightMap.blockAt(
              this.scaler.fromDOM(t),
              this.heightOracle,
              0,
              0
            ),
            this.scaler
          );
        }
        get docHeight() {
          return this.scaler.toDOM(this.heightMap.height);
        }
        get contentHeight() {
          return this.docHeight + this.paddingTop + this.paddingBottom;
        }
      }
      class eY {
        constructor(t, e) {
          (this.from = t), (this.to = e);
        }
      }
      function eQ({total: t, ranges: e}, i) {
        if (i <= 0) return e[0].from;
        if (i >= 1) return e[e.length - 1].to;
        let s = Math.floor(t * i);
        for (let t = 0; ; t++) {
          let {from: i, to: o} = e[t],
            n = o - i;
          if (s <= n) return i + s;
          s -= n;
        }
      }
      function eJ(t, e) {
        let i = 0;
        for (let {from: s, to: o} of t.ranges) {
          if (e <= o) {
            i += e - s;
            break;
          }
          i += o - s;
        }
        return i / t.total;
      }
      let eZ = {toDOM: (t) => t, fromDOM: (t) => t, scale: 1};
      class e0 {
        constructor(t, e, i) {
          let s = 0,
            o = 0,
            n = 0;
          for (let r of ((this.viewports = i.map(({from: i, to: o}) => {
            let n = e.lineAt(i, eN.ByPos, t, 0, 0).top,
              r = e.lineAt(o, eN.ByPos, t, 0, 0).bottom;
            return (
              (s += r - n),
              {from: i, to: o, top: n, bottom: r, domTop: 0, domBottom: 0}
            );
          })),
          (this.scale = (7e6 - s) / (e.height - s)),
          this.viewports))
            (r.domTop = n + (r.top - o) * this.scale),
              (n = r.domBottom = r.domTop + (r.bottom - r.top)),
              (o = r.bottom);
        }
        toDOM(t) {
          for (let e = 0, i = 0, s = 0; ; e++) {
            let o = e < this.viewports.length ? this.viewports[e] : null;
            if (!o || t < o.top) return s + (t - i) * this.scale;
            if (t <= o.bottom) return o.domTop + (t - o.top);
            (i = o.bottom), (s = o.domBottom);
          }
        }
        fromDOM(t) {
          for (let e = 0, i = 0, s = 0; ; e++) {
            let o = e < this.viewports.length ? this.viewports[e] : null;
            if (!o || t < o.domTop) return i + (t - s) / this.scale;
            if (t <= o.domBottom) return o.top + (t - o.domTop);
            (i = o.bottom), (s = o.domBottom);
          }
        }
      }
      function e1(t, e) {
        if (1 == e.scale) return t;
        let i = e.toDOM(t.top),
          s = e.toDOM(t.bottom);
        return new eV(
          t.from,
          t.length,
          i,
          s - i,
          Array.isArray(t.type) ? t.type.map((t) => e1(t, e)) : t.type
        );
      }
      let e2 = l.r$.define({combine: (t) => t.join(' ')}),
        e8 = l.r$.define({combine: (t) => t.indexOf(!0) > -1}),
        e3 = h.V.newName(),
        e9 = h.V.newName(),
        e5 = h.V.newName(),
        e4 = {'&light': '.' + e9, '&dark': '.' + e5};
      function e6(t, e, i) {
        return new h.V(e, {
          finish: (e) =>
            /&/.test(e)
              ? e.replace(/&\w*/, (e) => {
                  if ('&' == e) return t;
                  if (!i || !i[e])
                    throw RangeError(`Unsupported selector: ${e}`);
                  return i[e];
                })
              : t + ' ' + e,
        });
      }
      let e7 = e6(
        '.' + e3,
        {
          '&': {
            position: 'relative !important',
            boxSizing: 'border-box',
            '&.cm-focused': {outline: '1px dotted #212121'},
            display: 'flex !important',
            flexDirection: 'column',
          },
          '.cm-scroller': {
            display: 'flex !important',
            alignItems: 'flex-start !important',
            fontFamily: 'monospace',
            lineHeight: 1.4,
            height: '100%',
            overflowX: 'auto',
            position: 'relative',
            zIndex: 0,
          },
          '.cm-content': {
            margin: 0,
            flexGrow: 2,
            flexShrink: 0,
            display: 'block',
            whiteSpace: 'pre',
            wordWrap: 'normal',
            boxSizing: 'border-box',
            padding: '4px 0',
            outline: 'none',
            '&[contenteditable=true]': {
              WebkitUserModify: 'read-write-plaintext-only',
            },
          },
          '.cm-lineWrapping': {
            whiteSpace_fallback: 'pre-wrap',
            whiteSpace: 'break-spaces',
            wordBreak: 'break-word',
            overflowWrap: 'anywhere',
            flexShrink: 1,
          },
          '&light .cm-content': {caretColor: 'black'},
          '&dark .cm-content': {caretColor: 'white'},
          '.cm-line': {display: 'block', padding: '0 2px 0 6px'},
          '.cm-layer': {
            position: 'absolute',
            left: 0,
            top: 0,
            contain: 'size style',
            '& > *': {position: 'absolute'},
          },
          '&light .cm-selectionBackground': {background: '#d9d9d9'},
          '&dark .cm-selectionBackground': {background: '#222'},
          '&light.cm-focused .cm-selectionBackground': {background: '#d7d4f0'},
          '&dark.cm-focused .cm-selectionBackground': {background: '#233'},
          '.cm-cursorLayer': {pointerEvents: 'none'},
          '&.cm-focused .cm-cursorLayer': {
            animation: 'steps(1) cm-blink 1.2s infinite',
          },
          '@keyframes cm-blink': {'0%': {}, '50%': {opacity: 0}, '100%': {}},
          '@keyframes cm-blink2': {'0%': {}, '50%': {opacity: 0}, '100%': {}},
          '.cm-cursor, .cm-dropCursor': {
            borderLeft: '1.2px solid black',
            marginLeft: '-0.6px',
            pointerEvents: 'none',
          },
          '.cm-cursor': {display: 'none'},
          '&dark .cm-cursor': {borderLeftColor: '#444'},
          '.cm-dropCursor': {position: 'absolute'},
          '&.cm-focused .cm-cursor': {display: 'block'},
          '&light .cm-activeLine': {backgroundColor: '#cceeff44'},
          '&dark .cm-activeLine': {backgroundColor: '#99eeff33'},
          '&light .cm-specialChar': {color: 'red'},
          '&dark .cm-specialChar': {color: '#f78'},
          '.cm-gutters': {
            flexShrink: 0,
            display: 'flex',
            height: '100%',
            boxSizing: 'border-box',
            left: 0,
            zIndex: 200,
          },
          '&light .cm-gutters': {
            backgroundColor: '#f5f5f5',
            color: '#6c6c6c',
            borderRight: '1px solid #ddd',
          },
          '&dark .cm-gutters': {backgroundColor: '#333338', color: '#ccc'},
          '.cm-gutter': {
            display: 'flex !important',
            flexDirection: 'column',
            flexShrink: 0,
            boxSizing: 'border-box',
            minHeight: '100%',
            overflow: 'hidden',
          },
          '.cm-gutterElement': {boxSizing: 'border-box'},
          '.cm-lineNumbers .cm-gutterElement': {
            padding: '0 3px 0 5px',
            minWidth: '20px',
            textAlign: 'right',
            whiteSpace: 'nowrap',
          },
          '&light .cm-activeLineGutter': {backgroundColor: '#e2f2ff'},
          '&dark .cm-activeLineGutter': {backgroundColor: '#222227'},
          '.cm-panels': {
            boxSizing: 'border-box',
            position: 'sticky',
            left: 0,
            right: 0,
          },
          '&light .cm-panels': {backgroundColor: '#f5f5f5', color: 'black'},
          '&light .cm-panels-top': {borderBottom: '1px solid #ddd'},
          '&light .cm-panels-bottom': {borderTop: '1px solid #ddd'},
          '&dark .cm-panels': {backgroundColor: '#333338', color: 'white'},
          '.cm-tab': {
            display: 'inline-block',
            overflow: 'hidden',
            verticalAlign: 'bottom',
          },
          '.cm-widgetBuffer': {
            verticalAlign: 'text-top',
            height: '1em',
            width: 0,
            display: 'inline',
          },
          '.cm-placeholder': {
            color: '#888',
            display: 'inline-block',
            verticalAlign: 'top',
          },
          '.cm-highlightSpace:before': {
            content: 'attr(data-display)',
            position: 'absolute',
            pointerEvents: 'none',
            color: '#888',
          },
          '.cm-highlightTab': {
            backgroundImage:
              'url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="20"><path stroke="%23888" stroke-width="1" fill="none" d="M1 10H196L190 5M190 15L196 10M197 4L197 16"/></svg>\')',
            backgroundSize: 'auto 100%',
            backgroundPosition: 'right 90%',
            backgroundRepeat: 'no-repeat',
          },
          '.cm-trailingSpace': {backgroundColor: '#ff332255'},
          '.cm-button': {
            verticalAlign: 'middle',
            color: 'inherit',
            fontSize: '70%',
            padding: '.2em 1em',
            borderRadius: '1px',
          },
          '&light .cm-button': {
            backgroundImage: 'linear-gradient(#eff1f5, #d9d9df)',
            border: '1px solid #888',
            '&:active': {backgroundImage: 'linear-gradient(#b4b4b4, #d0d3d6)'},
          },
          '&dark .cm-button': {
            backgroundImage: 'linear-gradient(#393939, #111)',
            border: '1px solid #888',
            '&:active': {backgroundImage: 'linear-gradient(#111, #333)'},
          },
          '.cm-textfield': {
            verticalAlign: 'middle',
            color: 'inherit',
            fontSize: '70%',
            border: '1px solid silver',
            padding: '.2em .5em',
          },
          '&light .cm-textfield': {backgroundColor: 'white'},
          '&dark .cm-textfield': {
            border: '1px solid #555',
            backgroundColor: 'inherit',
          },
        },
        e4
      );
      class it {
        constructor(t, e, i, s) {
          (this.typeOver = s), (this.bounds = null), (this.text = '');
          let {impreciseHead: o, impreciseAnchor: n} = t.docView;
          if (t.state.readOnly && e > -1) this.newSel = null;
          else if (
            e > -1 &&
            (this.bounds = t.docView.domBoundsAround(e, i, 0))
          ) {
            let e =
                o || n
                  ? []
                  : (function (t) {
                      let e = [];
                      if (t.root.activeElement != t.contentDOM) return e;
                      let {
                        anchorNode: i,
                        anchorOffset: s,
                        focusNode: o,
                        focusOffset: n,
                      } = t.observer.selectionRange;
                      return (
                        i &&
                          (e.push(new t2(i, s)),
                          (o != i || n != s) && e.push(new t2(o, n))),
                        e
                      );
                    })(t),
              i = new t0(e, t.state);
            i.readRange(this.bounds.startDOM, this.bounds.endDOM),
              (this.text = i.text),
              (this.newSel = (function (t, e) {
                if (0 == t.length) return null;
                let i = t[0].pos,
                  s = 2 == t.length ? t[1].pos : i;
                return i > -1 && s > -1 ? l.jT.single(i + e, s + e) : null;
              })(e, this.bounds.from));
          } else {
            let e = t.observer.selectionRange,
              i =
                (o && o.node == e.focusNode && o.offset == e.focusOffset) ||
                !d(t.contentDOM, e.focusNode)
                  ? t.state.selection.main.head
                  : t.docView.posFromDOM(e.focusNode, e.focusOffset),
              s =
                (n && n.node == e.anchorNode && n.offset == e.anchorOffset) ||
                !d(t.contentDOM, e.anchorNode)
                  ? t.state.selection.main.anchor
                  : t.docView.posFromDOM(e.anchorNode, e.anchorOffset);
            this.newSel = l.jT.single(s, i);
          }
        }
      }
      function ie(t, e) {
        let i;
        let {newSel: s} = e,
          o = t.state.selection.main;
        if (e.bounds) {
          let {from: s, to: n} = e.bounds,
            r = o.from,
            h = null;
          ((8 === t.inputState.lastKeyCode &&
            t.inputState.lastKeyTime > Date.now() - 100) ||
            (q.android && e.text.length < n - s)) &&
            ((r = o.to), (h = 'end'));
          let a = (function (t, e, i, s) {
            let o = Math.min(t.length, e.length),
              n = 0;
            for (; n < o && t.charCodeAt(n) == e.charCodeAt(n); ) n++;
            if (n == o && t.length == e.length) return null;
            let r = t.length,
              l = e.length;
            for (
              ;
              r > 0 && l > 0 && t.charCodeAt(r - 1) == e.charCodeAt(l - 1);

            )
              r--, l--;
            if ('end' == s) {
              let t = Math.max(0, n - Math.min(r, l));
              i -= r + t - n;
            }
            if (r < n && t.length < e.length) {
              let t = i <= n && i >= r ? n - i : 0;
              (n -= t), (l = n + (l - r)), (r = n);
            } else if (l < n) {
              let t = i <= n && i >= l ? n - i : 0;
              (n -= t), (r = n + (r - l)), (l = n);
            }
            return {from: n, toA: r, toB: l};
          })(t.state.doc.sliceString(s, n, '￿'), e.text, r - s, h);
          a &&
            (q.chrome &&
              13 == t.inputState.lastKeyCode &&
              a.toB == a.from + 2 &&
              '￿￿' == e.text.slice(a.from, a.toB) &&
              a.toB--,
            (i = {
              from: s + a.from,
              to: s + a.toA,
              insert: l.xv.of(e.text.slice(a.from, a.toB).split('￿')),
            }));
        } else
          s &&
            ((!t.hasFocus && t.state.facet(tT)) || s.main.eq(o)) &&
            (s = null);
        if (!i && !s) return !1;
        if (
          (!i && e.typeOver && !o.empty && s && s.main.empty
            ? (i = {
                from: o.from,
                to: o.to,
                insert: t.state.doc.slice(o.from, o.to),
              })
            : i &&
              i.from >= o.from &&
              i.to <= o.to &&
              (i.from != o.from || i.to != o.to) &&
              o.to - o.from - (i.to - i.from) <= 4
            ? (i = {
                from: o.from,
                to: o.to,
                insert: t.state.doc
                  .slice(o.from, i.from)
                  .append(i.insert)
                  .append(t.state.doc.slice(i.to, o.to)),
              })
            : (q.mac || q.android) &&
              i &&
              i.from == i.to &&
              i.from == o.head - 1 &&
              /^\. ?$/.test(i.insert.toString()) &&
              'off' == t.contentDOM.getAttribute('autocorrect')
            ? (s &&
                2 == i.insert.length &&
                (s = l.jT.single(s.main.anchor - 1, s.main.head - 1)),
              (i = {from: o.from, to: o.to, insert: l.xv.of([' '])}))
            : q.chrome &&
              i &&
              i.from == i.to &&
              i.from == o.head &&
              '\n ' == i.insert.toString() &&
              t.lineWrapping &&
              (s && (s = l.jT.single(s.main.anchor - 1, s.main.head - 1)),
              (i = {from: o.from, to: o.to, insert: l.xv.of([' '])})),
          i)
        ) {
          let e,
            n = t.state;
          if (
            (q.ios && t.inputState.flushIOSKey(t)) ||
            (q.android &&
              ((i.from == o.from &&
                i.to == o.to &&
                1 == i.insert.length &&
                2 == i.insert.lines &&
                k(t.contentDOM, 'Enter', 13)) ||
                (i.from == o.from - 1 &&
                  i.to == o.to &&
                  0 == i.insert.length &&
                  k(t.contentDOM, 'Backspace', 8)) ||
                (i.from == o.from &&
                  i.to == o.to + 1 &&
                  0 == i.insert.length &&
                  k(t.contentDOM, 'Delete', 46))))
          )
            return !0;
          let r = i.insert.toString();
          if (t.state.facet(tx).some((e) => e(t, i.from, i.to, r))) return !0;
          if (
            (t.inputState.composing >= 0 && t.inputState.composing++,
            i.from >= o.from &&
              i.to <= o.to &&
              i.to - i.from >= (o.to - o.from) / 3 &&
              (!s ||
                (s.main.empty && s.main.from == i.from + i.insert.length)) &&
              t.inputState.composing < 0)
          ) {
            let s = o.from < i.from ? n.sliceDoc(o.from, i.from) : '',
              r = o.to > i.to ? n.sliceDoc(i.to, o.to) : '';
            e = n.replaceSelection(
              t.state.toText(
                s + i.insert.sliceString(0, void 0, t.state.lineBreak) + r
              )
            );
          } else {
            let r = n.changes(i),
              h = s && s.main.to <= r.newLength ? s.main : void 0;
            if (
              n.selection.ranges.length > 1 &&
              t.inputState.composing >= 0 &&
              i.to <= o.to &&
              i.to >= o.to - 10
            ) {
              let s = t.state.sliceDoc(i.from, i.to),
                a = t9(t) || t.state.doc.lineAt(o.head),
                c = o.to - i.to,
                d = o.to - o.from;
              e = n.changeByRange((e) => {
                if (e.from == o.from && e.to == o.to)
                  return {changes: r, range: h || e.map(r)};
                let u = e.to - c,
                  f = u - s.length;
                if (
                  e.to - e.from != d ||
                  t.state.sliceDoc(f, u) != s ||
                  (a && e.to >= a.from && e.from <= a.to)
                )
                  return {range: e};
                let p = n.changes({from: f, to: u, insert: i.insert}),
                  g = e.to - o.to;
                return {
                  changes: p,
                  range: h
                    ? l.jT.range(
                        Math.max(0, h.anchor + g),
                        Math.max(0, h.head + g)
                      )
                    : e.map(p),
                };
              });
            } else
              e = {changes: r, selection: h && n.selection.replaceRange(h)};
          }
          let h = 'input.type';
          return (
            (t.composing ||
              (t.inputState.compositionPendingChange &&
                t.inputState.compositionEndedAt > Date.now() - 50)) &&
              ((t.inputState.compositionPendingChange = !1),
              (h += '.compose'),
              t.inputState.compositionFirstChange &&
                ((h += '.start'), (t.inputState.compositionFirstChange = !1))),
            t.dispatch(e, {scrollIntoView: !0, userEvent: h}),
            !0
          );
        }
        if (!s || s.main.eq(o)) return !1;
        {
          let e = !1,
            i = 'select';
          return (
            t.inputState.lastSelectionTime > Date.now() - 50 &&
              ('select' == t.inputState.lastSelectionOrigin && (e = !0),
              (i = t.inputState.lastSelectionOrigin)),
            t.dispatch({selection: s, scrollIntoView: e, userEvent: i}),
            !0
          );
        }
      }
      let ii = {
          childList: !0,
          characterData: !0,
          subtree: !0,
          attributes: !0,
          characterDataOldValue: !0,
        },
        is = q.ie && q.ie_version <= 11;
      class io {
        constructor(t) {
          (this.view = t),
            (this.active = !1),
            (this.selectionRange = new y()),
            (this.selectionChanged = !1),
            (this.delayedFlush = -1),
            (this.resizeTimeout = -1),
            (this.queue = []),
            (this.delayedAndroidKey = null),
            (this.flushingAndroidKey = -1),
            (this.lastChange = 0),
            (this.scrollTargets = []),
            (this.intersection = null),
            (this.resizeScroll = null),
            (this.resizeContent = null),
            (this.intersecting = !1),
            (this.gapIntersection = null),
            (this.gaps = []),
            (this.parentCheck = -1),
            (this.dom = t.contentDOM),
            (this.observer = new MutationObserver((e) => {
              for (let t of e) this.queue.push(t);
              ((q.ie && q.ie_version <= 11) || (q.ios && t.composing)) &&
              e.some(
                (t) =>
                  ('childList' == t.type && t.removedNodes.length) ||
                  ('characterData' == t.type &&
                    t.oldValue.length > t.target.nodeValue.length)
              )
                ? this.flushSoon()
                : this.flush();
            })),
            is &&
              (this.onCharData = (t) => {
                this.queue.push({
                  target: t.target,
                  type: 'characterData',
                  oldValue: t.prevValue,
                }),
                  this.flushSoon();
              }),
            (this.onSelectionChange = this.onSelectionChange.bind(this)),
            (this.onResize = this.onResize.bind(this)),
            (this.onPrint = this.onPrint.bind(this)),
            (this.onScroll = this.onScroll.bind(this)),
            'function' == typeof ResizeObserver &&
              ((this.resizeScroll = new ResizeObserver(() => {
                var t;
                (null === (t = this.view.docView) || void 0 === t
                  ? void 0
                  : t.lastUpdate) <
                  Date.now() - 75 && this.onResize();
              })),
              this.resizeScroll.observe(t.scrollDOM),
              (this.resizeContent = new ResizeObserver(() =>
                this.view.requestMeasure()
              )),
              this.resizeContent.observe(t.contentDOM)),
            this.addWindowListeners((this.win = t.win)),
            this.start(),
            'function' == typeof IntersectionObserver &&
              ((this.intersection = new IntersectionObserver((t) => {
                this.parentCheck < 0 &&
                  (this.parentCheck = setTimeout(
                    this.listenForScroll.bind(this),
                    1e3
                  )),
                  t.length > 0 &&
                    t[t.length - 1].intersectionRatio > 0 !=
                      this.intersecting &&
                    ((this.intersecting = !this.intersecting),
                    this.intersecting != this.view.inView &&
                      this.onScrollChanged(document.createEvent('Event')));
              }, {})),
              this.intersection.observe(this.dom),
              (this.gapIntersection = new IntersectionObserver((t) => {
                t.length > 0 &&
                  t[t.length - 1].intersectionRatio > 0 &&
                  this.onScrollChanged(document.createEvent('Event'));
              }, {}))),
            this.listenForScroll(),
            this.readSelectionRange();
        }
        onScrollChanged(t) {
          this.view.inputState.runScrollHandlers(this.view, t),
            this.intersecting && this.view.measure();
        }
        onScroll(t) {
          this.intersecting && this.flush(!1), this.onScrollChanged(t);
        }
        onResize() {
          this.resizeTimeout < 0 &&
            (this.resizeTimeout = setTimeout(() => {
              (this.resizeTimeout = -1), this.view.requestMeasure();
            }, 50));
        }
        onPrint() {
          (this.view.viewState.printing = !0),
            this.view.measure(),
            setTimeout(() => {
              (this.view.viewState.printing = !1), this.view.requestMeasure();
            }, 500);
        }
        updateGaps(t) {
          if (
            this.gapIntersection &&
            (t.length != this.gaps.length ||
              this.gaps.some((e, i) => e != t[i]))
          ) {
            for (let e of (this.gapIntersection.disconnect(), t))
              this.gapIntersection.observe(e);
            this.gaps = t;
          }
        }
        onSelectionChange(t) {
          let e = this.selectionChanged;
          if (!this.readSelectionRange() || this.delayedAndroidKey) return;
          let {view: i} = this,
            s = this.selectionRange;
          if (
            i.state.facet(tT) ? i.root.activeElement != this.dom : !u(i.dom, s)
          )
            return;
          let o = s.anchorNode && i.docView.nearest(s.anchorNode);
          if (o && o.ignoreEvent(t)) {
            e || (this.selectionChanged = !1);
            return;
          }
          ((q.ie && q.ie_version <= 11) || (q.android && q.chrome)) &&
          !i.state.selection.main.empty &&
          s.focusNode &&
          p(s.focusNode, s.focusOffset, s.anchorNode, s.anchorOffset)
            ? this.flushSoon()
            : this.flush(!1);
        }
        readSelectionRange() {
          let {view: t} = this,
            e =
              (q.safari &&
                11 == t.root.nodeType &&
                (function (t) {
                  let e = t.activeElement;
                  for (; e && e.shadowRoot; ) e = e.shadowRoot.activeElement;
                  return e;
                })(this.dom.ownerDocument) == this.dom &&
                (function (t) {
                  let e = null;
                  function i(t) {
                    t.preventDefault(),
                      t.stopImmediatePropagation(),
                      (e = t.getTargetRanges()[0]);
                  }
                  if (
                    (t.contentDOM.addEventListener('beforeinput', i, !0),
                    t.dom.ownerDocument.execCommand('indent'),
                    t.contentDOM.removeEventListener('beforeinput', i, !0),
                    !e)
                  )
                    return null;
                  let s = e.startContainer,
                    o = e.startOffset,
                    n = e.endContainer,
                    r = e.endOffset,
                    l = t.docView.domAtPos(t.state.selection.main.anchor);
                  return (
                    p(l.node, l.offset, n, r) && ([s, o, n, r] = [n, r, s, o]),
                    {
                      anchorNode: s,
                      anchorOffset: o,
                      focusNode: n,
                      focusOffset: r,
                    }
                  );
                })(this.view)) ||
              c(t.root);
          if (!e || this.selectionRange.eq(e)) return !1;
          let i = u(this.dom, e);
          return i &&
            !this.selectionChanged &&
            t.inputState.lastFocusTime > Date.now() - 200 &&
            t.inputState.lastTouchTime < Date.now() - 300 &&
            (function (t, e) {
              let i = e.focusNode,
                s = e.focusOffset;
              if (!i || e.anchorNode != i || e.anchorOffset != s) return !1;
              for (;;)
                if (s) {
                  if (1 != i.nodeType) return !1;
                  let t = i.childNodes[s - 1];
                  'false' == t.contentEditable ? s-- : (s = v((i = t)));
                } else {
                  if (i == t) return !0;
                  (s = g(i)), (i = i.parentNode);
                }
            })(this.dom, e)
            ? ((this.view.inputState.lastFocusTime = 0),
              t.docView.updateSelection(),
              !1)
            : (this.selectionRange.setRange(e),
              i && (this.selectionChanged = !0),
              !0);
        }
        setSelectionRange(t, e) {
          this.selectionRange.set(t.node, t.offset, e.node, e.offset),
            (this.selectionChanged = !1);
        }
        clearSelectionRange() {
          this.selectionRange.set(null, 0, null, 0);
        }
        listenForScroll() {
          this.parentCheck = -1;
          let t = 0,
            e = null;
          for (let i = this.dom; i; )
            if (1 == i.nodeType)
              !e && t < this.scrollTargets.length && this.scrollTargets[t] == i
                ? t++
                : e || (e = this.scrollTargets.slice(0, t)),
                e && e.push(i),
                (i = i.assignedSlot || i.parentNode);
            else if (11 == i.nodeType) i = i.host;
            else break;
          if (
            (t < this.scrollTargets.length &&
              !e &&
              (e = this.scrollTargets.slice(0, t)),
            e)
          ) {
            for (let t of this.scrollTargets)
              t.removeEventListener('scroll', this.onScroll);
            for (let t of (this.scrollTargets = e))
              t.addEventListener('scroll', this.onScroll);
          }
        }
        ignore(t) {
          if (!this.active) return t();
          try {
            return this.stop(), t();
          } finally {
            this.start(), this.clear();
          }
        }
        start() {
          this.active ||
            (this.observer.observe(this.dom, ii),
            is &&
              this.dom.addEventListener(
                'DOMCharacterDataModified',
                this.onCharData
              ),
            (this.active = !0));
        }
        stop() {
          this.active &&
            ((this.active = !1),
            this.observer.disconnect(),
            is &&
              this.dom.removeEventListener(
                'DOMCharacterDataModified',
                this.onCharData
              ));
        }
        clear() {
          this.processRecords(),
            (this.queue.length = 0),
            (this.selectionChanged = !1);
        }
        delayAndroidKey(t, e) {
          var i;
          if (!this.delayedAndroidKey) {
            let t = () => {
              let t = this.delayedAndroidKey;
              t &&
                (this.clearDelayedAndroidKey(),
                !this.flush() && t.force && k(this.dom, t.key, t.keyCode));
            };
            this.flushingAndroidKey = this.view.win.requestAnimationFrame(t);
          }
          (this.delayedAndroidKey && 'Enter' != t) ||
            (this.delayedAndroidKey = {
              key: t,
              keyCode: e,
              force:
                this.lastChange < Date.now() - 50 ||
                !!(null === (i = this.delayedAndroidKey) || void 0 === i
                  ? void 0
                  : i.force),
            });
        }
        clearDelayedAndroidKey() {
          this.win.cancelAnimationFrame(this.flushingAndroidKey),
            (this.delayedAndroidKey = null),
            (this.flushingAndroidKey = -1);
        }
        flushSoon() {
          this.delayedFlush < 0 &&
            (this.delayedFlush = this.view.win.requestAnimationFrame(() => {
              (this.delayedFlush = -1), this.flush();
            }));
        }
        forceFlush() {
          this.delayedFlush >= 0 &&
            (this.view.win.cancelAnimationFrame(this.delayedFlush),
            (this.delayedFlush = -1)),
            this.flush();
        }
        pendingRecords() {
          for (let t of this.observer.takeRecords()) this.queue.push(t);
          return this.queue;
        }
        processRecords() {
          let t = this.pendingRecords();
          t.length && (this.queue = []);
          let e = -1,
            i = -1,
            s = !1;
          for (let o of t) {
            let t = this.readMutation(o);
            t &&
              (t.typeOver && (s = !0),
              -1 == e
                ? ({from: e, to: i} = t)
                : ((e = Math.min(t.from, e)), (i = Math.max(t.to, i))));
          }
          return {from: e, to: i, typeOver: s};
        }
        readChange() {
          let {from: t, to: e, typeOver: i} = this.processRecords(),
            s = this.selectionChanged && u(this.dom, this.selectionRange);
          return t < 0 && !s
            ? null
            : (t > -1 && (this.lastChange = Date.now()),
              (this.view.inputState.lastFocusTime = 0),
              (this.selectionChanged = !1),
              new it(this.view, t, e, i));
        }
        flush(t = !0) {
          if (this.delayedFlush >= 0 || this.delayedAndroidKey) return !1;
          t && this.readSelectionRange();
          let e = this.readChange();
          if (!e) return !1;
          let i = this.view.state,
            s = ie(this.view, e);
          return this.view.state == i && this.view.update([]), s;
        }
        readMutation(t) {
          let e = this.view.docView.nearest(t.target);
          if (!e || e.ignoreMutation(t)) return null;
          if (
            (e.markDirty('attributes' == t.type),
            'attributes' == t.type && (e.dirty |= 4),
            'childList' == t.type)
          ) {
            let i = ir(e, t.previousSibling || t.target.previousSibling, -1),
              s = ir(e, t.nextSibling || t.target.nextSibling, 1);
            return {
              from: i ? e.posAfter(i) : e.posAtStart,
              to: s ? e.posBefore(s) : e.posAtEnd,
              typeOver: !1,
            };
          }
          return 'characterData' == t.type
            ? {
                from: e.posAtStart,
                to: e.posAtEnd,
                typeOver: t.target.nodeValue == t.oldValue,
              }
            : null;
        }
        setWindow(t) {
          t != this.win &&
            (this.removeWindowListeners(this.win),
            (this.win = t),
            this.addWindowListeners(this.win));
        }
        addWindowListeners(t) {
          t.addEventListener('resize', this.onResize),
            t.addEventListener('beforeprint', this.onPrint),
            t.addEventListener('scroll', this.onScroll),
            t.document.addEventListener(
              'selectionchange',
              this.onSelectionChange
            );
        }
        removeWindowListeners(t) {
          t.removeEventListener('scroll', this.onScroll),
            t.removeEventListener('resize', this.onResize),
            t.removeEventListener('beforeprint', this.onPrint),
            t.document.removeEventListener(
              'selectionchange',
              this.onSelectionChange
            );
        }
        destroy() {
          var t, e, i, s;
          for (let o of (this.stop(),
          null === (t = this.intersection) || void 0 === t || t.disconnect(),
          null === (e = this.gapIntersection) || void 0 === e || e.disconnect(),
          null === (i = this.resizeScroll) || void 0 === i || i.disconnect(),
          null === (s = this.resizeContent) || void 0 === s || s.disconnect(),
          this.scrollTargets))
            o.removeEventListener('scroll', this.onScroll);
          this.removeWindowListeners(this.win),
            clearTimeout(this.parentCheck),
            clearTimeout(this.resizeTimeout),
            this.win.cancelAnimationFrame(this.delayedFlush),
            this.win.cancelAnimationFrame(this.flushingAndroidKey);
        }
      }
      function ir(t, e, i) {
        for (; e; ) {
          let s = T.get(e);
          if (s && s.parent == t) return s;
          let o = e.parentNode;
          e = o != t.dom ? o : i > 0 ? e.nextSibling : e.previousSibling;
        }
        return null;
      }
      class il {
        constructor(t = {}) {
          for (let e of ((this.plugins = []),
          (this.pluginMap = new Map()),
          (this.editorAttrs = {}),
          (this.contentAttrs = {}),
          (this.bidiCache = []),
          (this.destroyed = !1),
          (this.updateState = 2),
          (this.measureScheduled = -1),
          (this.measureRequests = []),
          (this.contentDOM = document.createElement('div')),
          (this.scrollDOM = document.createElement('div')),
          (this.scrollDOM.tabIndex = -1),
          (this.scrollDOM.className = 'cm-scroller'),
          this.scrollDOM.appendChild(this.contentDOM),
          (this.announceDOM = document.createElement('div')),
          (this.announceDOM.style.cssText = 'position: fixed; top: -10000px'),
          this.announceDOM.setAttribute('aria-live', 'polite'),
          (this.dom = document.createElement('div')),
          this.dom.appendChild(this.announceDOM),
          this.dom.appendChild(this.scrollDOM),
          (this._dispatch = t.dispatch || ((t) => this.update([t]))),
          (this.dispatch = this.dispatch.bind(this)),
          (this._root =
            t.root ||
            (function (t) {
              for (; t; ) {
                if (t && (9 == t.nodeType || (11 == t.nodeType && t.host)))
                  return t;
                t = t.assignedSlot || t.parentNode;
              }
              return null;
            })(t.parent) ||
            document),
          (this.viewState = new eU(t.state || l.yy.create(t))),
          (this.plugins = this.state.facet(tE).map((t) => new tB(t))),
          this.plugins))
            e.update(this);
          (this.observer = new io(this)),
            (this.inputState = new el(this)),
            this.inputState.ensureHandlers(this, this.plugins),
            (this.docView = new t8(this)),
            this.mountStyles(),
            this.updateAttrs(),
            (this.updateState = 0),
            this.requestMeasure(),
            t.parent && t.parent.appendChild(this.dom);
        }
        get state() {
          return this.viewState.state;
        }
        get viewport() {
          return this.viewState.viewport;
        }
        get visibleRanges() {
          return this.viewState.visibleRanges;
        }
        get inView() {
          return this.viewState.inView;
        }
        get composing() {
          return this.inputState.composing > 0;
        }
        get compositionStarted() {
          return this.inputState.composing >= 0;
        }
        get root() {
          return this._root;
        }
        get win() {
          return this.dom.ownerDocument.defaultView || window;
        }
        dispatch(...t) {
          this._dispatch(
            1 == t.length && t[0] instanceof l.YW
              ? t[0]
              : this.state.update(...t)
          );
        }
        update(t) {
          if (0 != this.updateState)
            throw Error(
              'Calls to EditorView.update are not allowed while an update is in progress'
            );
          let e = !1,
            i = !1,
            s,
            o = this.state;
          for (let e of t) {
            if (e.startState != o)
              throw RangeError(
                "Trying to update state with a transaction that doesn't start from the previous state."
              );
            o = e.state;
          }
          if (this.destroyed) {
            this.viewState.state = o;
            return;
          }
          let n = this.hasFocus,
            r = 0,
            h = null;
          t.some((t) => t.annotation(eO))
            ? ((this.inputState.notifiedFocused = n), (r = 1))
            : n == this.inputState.notifiedFocused ||
              ((this.inputState.notifiedFocused = n),
              (h = eE(o, n)) || (r = 1));
          let a = this.observer.delayedAndroidKey,
            c = null;
          if (
            (a
              ? (this.observer.clearDelayedAndroidKey(),
                (((c = this.observer.readChange()) &&
                  !this.state.doc.eq(o.doc)) ||
                  !this.state.selection.eq(o.selection)) &&
                  (c = null))
              : this.observer.clear(),
            o.facet(l.yy.phrases) != this.state.facet(l.yy.phrases))
          )
            return this.setState(o);
          (s = tF.create(this, o, t)), (s.flags |= r);
          let d = this.viewState.scrollTarget;
          try {
            for (let e of ((this.updateState = 2), t)) {
              if ((d && (d = d.map(e.changes)), e.scrollIntoView)) {
                let {main: t} = e.state.selection;
                d = new tC(
                  t.empty ? t : l.jT.cursor(t.head, t.head > t.anchor ? -1 : 1)
                );
              }
              for (let t of e.effects) t.is(tA) && (d = t.value);
            }
            this.viewState.update(s, d),
              (this.bidiCache = ic.update(this.bidiCache, s.changes)),
              s.empty || (this.updatePlugins(s), this.inputState.update(s)),
              (e = this.docView.update(s)),
              this.state.facet(tW) != this.styleModules && this.mountStyles(),
              (i = this.updateAttrs()),
              this.showAnnouncements(t),
              this.docView.updateSelection(
                e,
                t.some((t) => t.isUserEvent('select.pointer'))
              );
          } finally {
            this.updateState = 0;
          }
          if (
            (s.startState.facet(e2) != s.state.facet(e2) &&
              (this.viewState.mustMeasureContent = !0),
            (e ||
              i ||
              d ||
              this.viewState.mustEnforceCursorAssoc ||
              this.viewState.mustMeasureContent) &&
              this.requestMeasure(),
            !s.empty)
          )
            for (let t of this.state.facet(ty)) t(s);
          (h || c) &&
            Promise.resolve().then(() => {
              h && this.state == h.startState && this.dispatch(h),
                c &&
                  !ie(this, c) &&
                  a.force &&
                  k(this.contentDOM, a.key, a.keyCode);
            });
        }
        setState(t) {
          if (0 != this.updateState)
            throw Error(
              'Calls to EditorView.setState are not allowed while an update is in progress'
            );
          if (this.destroyed) {
            this.viewState.state = t;
            return;
          }
          this.updateState = 2;
          let e = this.hasFocus;
          try {
            for (let t of this.plugins) t.destroy(this);
            for (let e of ((this.viewState = new eU(t)),
            (this.plugins = t.facet(tE).map((t) => new tB(t))),
            this.pluginMap.clear(),
            this.plugins))
              e.update(this);
            (this.docView = new t8(this)),
              this.inputState.ensureHandlers(this, this.plugins),
              this.mountStyles(),
              this.updateAttrs(),
              (this.bidiCache = []);
          } finally {
            this.updateState = 0;
          }
          e && this.focus(), this.requestMeasure();
        }
        updatePlugins(t) {
          let e = t.startState.facet(tE),
            i = t.state.facet(tE);
          if (e != i) {
            let s = [];
            for (let o of i) {
              let i = e.indexOf(o);
              if (i < 0) s.push(new tB(o));
              else {
                let e = this.plugins[i];
                (e.mustUpdate = t), s.push(e);
              }
            }
            for (let e of this.plugins) e.mustUpdate != t && e.destroy(this);
            (this.plugins = s),
              this.pluginMap.clear(),
              this.inputState.ensureHandlers(this, this.plugins);
          } else for (let e of this.plugins) e.mustUpdate = t;
          for (let t = 0; t < this.plugins.length; t++)
            this.plugins[t].update(this);
        }
        measure(t = !0) {
          if (this.destroyed) return;
          this.measureScheduled > -1 &&
            this.win.cancelAnimationFrame(this.measureScheduled),
            (this.measureScheduled = 0),
            t && this.observer.forceFlush();
          let e = null,
            {scrollHeight: i, scrollTop: s, clientHeight: o} = this.scrollDOM,
            n = s > i - o - 4 ? i : s;
          try {
            for (let t = 0; ; t++) {
              this.updateState = 1;
              let i = this.viewport,
                s = this.viewState.lineBlockAtHeight(n),
                o = this.viewState.measure(this);
              if (
                !o &&
                !this.measureRequests.length &&
                null == this.viewState.scrollTarget
              )
                break;
              if (t > 5) {
                console.warn(
                  this.measureRequests.length
                    ? 'Measure loop restarted more than 5 times'
                    : 'Viewport failed to stabilize'
                );
                break;
              }
              let r = [];
              4 & o || ([this.measureRequests, r] = [r, this.measureRequests]);
              let l = r.map((t) => {
                  try {
                    return t.read(this);
                  } catch (t) {
                    return tD(this.state, t), ia;
                  }
                }),
                h = tF.create(this, this.state, []),
                a = !1,
                c = !1;
              (h.flags |= o),
                e ? (e.flags |= o) : (e = h),
                (this.updateState = 2),
                h.empty ||
                  (this.updatePlugins(h),
                  this.inputState.update(h),
                  this.updateAttrs(),
                  (a = this.docView.update(h)));
              for (let t = 0; t < r.length; t++)
                if (l[t] != ia)
                  try {
                    let e = r[t];
                    e.write && e.write(l[t], this);
                  } catch (t) {
                    tD(this.state, t);
                  }
              if (this.viewState.editorHeight) {
                if (this.viewState.scrollTarget)
                  this.docView.scrollIntoView(this.viewState.scrollTarget),
                    (this.viewState.scrollTarget = null),
                    (c = !0);
                else {
                  let t = this.viewState.lineBlockAt(s.from).top - s.top;
                  (t > 1 || t < -1) &&
                    ((this.scrollDOM.scrollTop += t), (c = !0));
                }
              }
              if (
                (a && this.docView.updateSelection(!0),
                this.viewport.from == i.from &&
                  this.viewport.to == i.to &&
                  !c &&
                  0 == this.measureRequests.length)
              )
                break;
            }
          } finally {
            (this.updateState = 0), (this.measureScheduled = -1);
          }
          if (e && !e.empty) for (let t of this.state.facet(ty)) t(e);
        }
        get themeClasses() {
          return (
            e3 +
            ' ' +
            (this.state.facet(e8) ? e5 : e9) +
            ' ' +
            this.state.facet(e2)
          );
        }
        updateAttrs() {
          let t = id(this, tL, {
              class:
                'cm-editor' +
                (this.hasFocus ? ' cm-focused ' : ' ') +
                this.themeClasses,
            }),
            e = {
              spellcheck: 'false',
              autocorrect: 'off',
              autocapitalize: 'off',
              translate: 'no',
              contenteditable: this.state.facet(tT) ? 'true' : 'false',
              class: 'cm-content',
              style: `${q.tabSize}: ${this.state.tabSize}`,
              role: 'textbox',
              'aria-multiline': 'true',
            };
          this.state.readOnly && (e['aria-readonly'] = 'true'), id(this, tH, e);
          let i = this.observer.ignore(() => {
            let i = ti(this.contentDOM, this.contentAttrs, e),
              s = ti(this.dom, this.editorAttrs, t);
            return i || s;
          });
          return (this.editorAttrs = t), (this.contentAttrs = e), i;
        }
        showAnnouncements(t) {
          let e = !0;
          for (let i of t)
            for (let t of i.effects)
              t.is(il.announce) &&
                (e && (this.announceDOM.textContent = ''),
                (e = !1),
                (this.announceDOM.appendChild(
                  document.createElement('div')
                ).textContent = t.value));
        }
        mountStyles() {
          (this.styleModules = this.state.facet(tW)),
            h.V.mount(this.root, this.styleModules.concat(e7).reverse());
        }
        readMeasured() {
          if (2 == this.updateState)
            throw Error(
              "Reading the editor layout isn't allowed during an update"
            );
          0 == this.updateState &&
            this.measureScheduled > -1 &&
            this.measure(!1);
        }
        requestMeasure(t) {
          if (
            (this.measureScheduled < 0 &&
              (this.measureScheduled = this.win.requestAnimationFrame(() =>
                this.measure()
              )),
            t && !(this.measureRequests.indexOf(t) > -1))
          ) {
            if (null != t.key) {
              for (let e = 0; e < this.measureRequests.length; e++)
                if (this.measureRequests[e].key === t.key) {
                  this.measureRequests[e] = t;
                  return;
                }
            }
            this.measureRequests.push(t);
          }
        }
        plugin(t) {
          let e = this.pluginMap.get(t);
          return (
            (void 0 === e || (e && e.spec != t)) &&
              this.pluginMap.set(
                t,
                (e = this.plugins.find((e) => e.spec == t) || null)
              ),
            e && e.update(this).value
          );
        }
        get documentTop() {
          return (
            this.contentDOM.getBoundingClientRect().top +
            this.viewState.paddingTop
          );
        }
        get documentPadding() {
          return {
            top: this.viewState.paddingTop,
            bottom: this.viewState.paddingBottom,
          };
        }
        elementAtHeight(t) {
          return this.readMeasured(), this.viewState.elementAtHeight(t);
        }
        lineBlockAtHeight(t) {
          return this.readMeasured(), this.viewState.lineBlockAtHeight(t);
        }
        get viewportLineBlocks() {
          return this.viewState.viewportLines;
        }
        lineBlockAt(t) {
          return this.viewState.lineBlockAt(t);
        }
        get contentHeight() {
          return this.viewState.contentHeight;
        }
        moveByChar(t, e, i) {
          return er(this, t, en(this, t, e, i));
        }
        moveByGroup(t, e) {
          return er(
            this,
            t,
            en(this, t, e, (e) => {
              var i;
              let s, o;
              return (
                (i = t.head),
                (o = (s = this.state.charCategorizer(i))(e)),
                (t) => {
                  let e = s(t);
                  return o == l.D0.Space && (o = e), o == e;
                }
              );
            })
          );
        }
        moveToLineBoundary(t, e, i = !0) {
          return (function (t, e, i, s) {
            let o = t.state.doc.lineAt(e.head),
              n =
                s && t.lineWrapping
                  ? t.coordsAtPos(
                      e.assoc < 0 && e.head > o.from ? e.head - 1 : e.head
                    )
                  : null;
            if (n) {
              let e = t.dom.getBoundingClientRect(),
                s = t.textDirectionAt(o.from),
                r = t.posAtCoords({
                  x: i == (s == tI.LTR) ? e.right - 1 : e.left + 1,
                  y: (n.top + n.bottom) / 2,
                });
              if (null != r) return l.jT.cursor(r, i ? -1 : 1);
            }
            let r = td.find(t.docView, e.head),
              h = r ? (i ? r.posAtEnd : r.posAtStart) : i ? o.to : o.from;
            return l.jT.cursor(h, i ? -1 : 1);
          })(this, t, e, i);
        }
        moveVertically(t, e, i) {
          return er(
            this,
            t,
            (function (t, e, i, s) {
              let o = e.head,
                n = i ? 1 : -1;
              if (o == (i ? t.state.doc.length : 0))
                return l.jT.cursor(o, e.assoc);
              let r = e.goalColumn,
                h,
                a = t.contentDOM.getBoundingClientRect(),
                c = t.coordsAtPos(o),
                d = t.documentTop;
              if (c)
                null == r && (r = c.left - a.left),
                  (h = n < 0 ? c.top : c.bottom);
              else {
                let e = t.viewState.lineBlockAt(o);
                null == r &&
                  (r = Math.min(
                    a.right - a.left,
                    t.defaultCharacterWidth * (o - e.from)
                  )),
                  (h = (n < 0 ? e.top : e.bottom) + d);
              }
              let u = a.left + r,
                f = null != s ? s : t.defaultLineHeight >> 1;
              for (let i = 0; ; i += 10) {
                let s = h + (f + i) * n,
                  c = es(t, {x: u, y: s}, !1, n);
                if (s < a.top || s > a.bottom || (n < 0 ? c < o : c > o))
                  return l.jT.cursor(c, e.assoc, void 0, r);
              }
            })(this, t, e, i)
          );
        }
        domAtPos(t) {
          return this.docView.domAtPos(t);
        }
        posAtDOM(t, e = 0) {
          return this.docView.posFromDOM(t, e);
        }
        posAtCoords(t, e = !0) {
          return this.readMeasured(), es(this, t, e);
        }
        coordsAtPos(t, e = 1) {
          this.readMeasured();
          let i = this.docView.coordsAt(t, e);
          if (!i || i.left == i.right) return i;
          let s = this.state.doc.lineAt(t),
            o = this.bidiSpans(s);
          return b(
            i,
            (o[tY.find(o, t - s.from, -1, e)].dir == tI.LTR) == e > 0
          );
        }
        get defaultCharacterWidth() {
          return this.viewState.heightOracle.charWidth;
        }
        get defaultLineHeight() {
          return this.viewState.heightOracle.lineHeight;
        }
        get textDirection() {
          return this.viewState.defaultTextDirection;
        }
        textDirectionAt(t) {
          return !this.state.facet(tM) ||
            t < this.viewport.from ||
            t > this.viewport.to
            ? this.textDirection
            : (this.readMeasured(), this.docView.textDirectionAt(t));
        }
        get lineWrapping() {
          return this.viewState.heightOracle.lineWrapping;
        }
        bidiSpans(t) {
          if (t.length > ih) return tJ(t.length);
          let e = this.textDirectionAt(t.from);
          for (let i of this.bidiCache)
            if (i.from == t.from && i.dir == e) return i.order;
          let i = (function (t, e) {
            let i = t.length,
              s = e == tK ? 1 : 2,
              o = e == tK ? 2 : 1;
            if (!t || (1 == s && !tU.test(t))) return tJ(i);
            for (let e = 0, o = s, r = s; e < i; e++) {
              var n;
              let i =
                (n = t.charCodeAt(e)) <= 247
                  ? t$[n]
                  : 1424 <= n && n <= 1524
                  ? 2
                  : 1536 <= n && n <= 1785
                  ? tG[n - 1536]
                  : 1774 <= n && n <= 2220
                  ? 4
                  : 8192 <= n && n <= 8203
                  ? 256
                  : 64336 <= n && n <= 65023
                  ? 4
                  : 8204 == n
                  ? 256
                  : 1;
              512 == i ? (i = o) : 8 == i && 4 == r && (i = 16),
                (tQ[e] = 4 == i ? 2 : i),
                7 & i && (r = i),
                (o = i);
            }
            for (let t = 0, e = s, o = s; t < i; t++) {
              let s = tQ[t];
              if (128 == s)
                t < i - 1 && e == tQ[t + 1] && 24 & e
                  ? (s = tQ[t] = e)
                  : (tQ[t] = 256);
              else if (64 == s) {
                let s = t + 1;
                for (; s < i && 64 == tQ[s]; ) s++;
                let n =
                  (t && 8 == e) || (s < i && 8 == tQ[s])
                    ? 1 == o
                      ? 1
                      : 8
                    : 256;
                for (let e = t; e < s; e++) tQ[e] = n;
                t = s - 1;
              } else 8 == s && 1 == o && (tQ[t] = 1);
              (e = s), 7 & s && (o = s);
            }
            for (let e = 0, n = 0, r = 0, l, h, a; e < i; e++)
              if ((h = tX[(l = t.charCodeAt(e))])) {
                if (h < 0) {
                  for (let t = n - 3; t >= 0; t -= 3)
                    if (t_[t + 1] == -h) {
                      let i = t_[t + 2],
                        r = 2 & i ? s : 4 & i ? (1 & i ? o : s) : 0;
                      r && (tQ[e] = tQ[t_[t]] = r), (n = t);
                      break;
                    }
                } else if (189 == t_.length) break;
                else (t_[n++] = e), (t_[n++] = l), (t_[n++] = r);
              } else if (2 == (a = tQ[e]) || 1 == a) {
                let t = a == s;
                r = t ? 0 : 1;
                for (let e = n - 3; e >= 0; e -= 3) {
                  let i = t_[e + 2];
                  if (2 & i) break;
                  if (t) t_[e + 2] |= 2;
                  else {
                    if (4 & i) break;
                    t_[e + 2] |= 4;
                  }
                }
              }
            for (let t = 0; t < i; t++)
              if (256 == tQ[t]) {
                let e = t + 1;
                for (; e < i && 256 == tQ[e]; ) e++;
                let o = (t ? tQ[t - 1] : s) == 1,
                  n = o == ((e < i ? tQ[e] : s) == 1) ? (o ? 1 : 2) : s;
                for (let i = t; i < e; i++) tQ[i] = n;
                t = e - 1;
              }
            let r = [];
            if (1 == s)
              for (let t = 0; t < i; ) {
                let e = t,
                  s = 1 != tQ[t++];
                for (; t < i && s == (1 != tQ[t]); ) t++;
                if (s)
                  for (let i = t; i > e; ) {
                    let t = i,
                      s = 2 != tQ[--i];
                    for (; i > e && s == (2 != tQ[i - 1]); ) i--;
                    r.push(new tY(i, t, s ? 2 : 1));
                  }
                else r.push(new tY(e, t, 0));
              }
            else
              for (let t = 0; t < i; ) {
                let e = t,
                  s = 2 == tQ[t++];
                for (; t < i && s == (2 == tQ[t]); ) t++;
                r.push(new tY(e, t, s ? 1 : 2));
              }
            return r;
          })(t.text, e);
          return this.bidiCache.push(new ic(t.from, t.to, e, i)), i;
        }
        get hasFocus() {
          var t;
          return (
            (this.dom.ownerDocument.hasFocus() ||
              (q.safari &&
                (null === (t = this.inputState) || void 0 === t
                  ? void 0
                  : t.lastContextMenu) >
                  Date.now() - 3e4)) &&
            this.root.activeElement == this.contentDOM
          );
        }
        focus() {
          this.observer.ignore(() => {
            S(this.contentDOM), this.docView.updateSelection();
          });
        }
        setRoot(t) {
          this._root != t &&
            ((this._root = t),
            this.observer.setWindow(
              (9 == t.nodeType ? t : t.ownerDocument).defaultView || window
            ),
            this.mountStyles());
        }
        destroy() {
          for (let t of this.plugins) t.destroy(this);
          (this.plugins = []),
            this.inputState.destroy(),
            this.dom.remove(),
            this.observer.destroy(),
            this.measureScheduled > -1 &&
              this.win.cancelAnimationFrame(this.measureScheduled),
            (this.destroyed = !0);
        }
        static scrollIntoView(t, e = {}) {
          return tA.of(
            new tC(
              'number' == typeof t ? l.jT.cursor(t) : t,
              e.y,
              e.x,
              e.yMargin,
              e.xMargin
            )
          );
        }
        static domEventHandlers(t) {
          return tR.define(() => ({}), {eventHandlers: t});
        }
        static theme(t, e) {
          let i = h.V.newName(),
            s = [e2.of(i), tW.of(e6(`.${i}`, t))];
          return e && e.dark && s.push(e8.of(!0)), s;
        }
        static baseTheme(t) {
          return l.Wl.lowest(tW.of(e6('.' + e3, t, e4)));
        }
        static findFromDOM(t) {
          var e;
          let i = t.querySelector('.cm-content'),
            s = (i && T.get(i)) || T.get(t);
          return (
            (null === (e = null == s ? void 0 : s.rootView) || void 0 === e
              ? void 0
              : e.view) || null
          );
        }
      }
      (il.styleModule = tW),
        (il.inputHandler = tx),
        (il.focusChangeEffect = tS),
        (il.perLineTextDirection = tM),
        (il.exceptionSink = tb),
        (il.updateListener = ty),
        (il.editable = tT),
        (il.mouseSelectionStyle = tw),
        (il.dragMovesSelection = tv),
        (il.clickAddsSelectionRange = tm),
        (il.decorations = tV),
        (il.atomicRanges = tN),
        (il.scrollMargins = tP),
        (il.darkTheme = e8),
        (il.contentAttributes = tH),
        (il.editorAttributes = tL),
        (il.lineWrapping = il.contentAttributes.of({class: 'cm-lineWrapping'})),
        (il.announce = l.Py.define());
      let ih = 4096,
        ia = {};
      class ic {
        constructor(t, e, i, s) {
          (this.from = t), (this.to = e), (this.dir = i), (this.order = s);
        }
        static update(t, e) {
          if (e.empty) return t;
          let i = [],
            s = t.length ? t[t.length - 1].dir : tI.LTR;
          for (let o = Math.max(0, t.length - 10); o < t.length; o++) {
            let n = t[o];
            n.dir != s ||
              e.touchesRange(n.from, n.to) ||
              i.push(
                new ic(e.mapPos(n.from, 1), e.mapPos(n.to, -1), n.dir, n.order)
              );
          }
          return i;
        }
      }
      function id(t, e, i) {
        for (let s = t.state.facet(e), o = s.length - 1; o >= 0; o--) {
          let e = s[o],
            n = 'function' == typeof e ? e(t) : e;
          n && tt(n, i);
        }
        return i;
      }
      let iu = q.mac ? 'mac' : q.windows ? 'win' : q.linux ? 'linux' : 'key';
      function ip(t, e, i) {
        return (
          e.altKey && (t = 'Alt-' + t),
          e.ctrlKey && (t = 'Ctrl-' + t),
          e.metaKey && (t = 'Meta-' + t),
          !1 !== i && e.shiftKey && (t = 'Shift-' + t),
          t
        );
      }
      let ig = l.Wl.default(
          il.domEventHandlers({
            keydown: (t, e) => {
              let i, s;
              return (function (t, e, i, s) {
                let o = (0, a.YG)(e),
                  n = (0, l.gm)(o, 0),
                  r = (0, l.nZ)(n) == o.length && ' ' != o,
                  h = '',
                  c = !1;
                iw &&
                  iw.view == i &&
                  iw.scope == s &&
                  ((h = iw.prefix + ' '),
                  (c = 0 > ec.indexOf(e.keyCode)) && (iw = null));
                let d = new Set(),
                  u = (t) => {
                    if (t) {
                      for (let s of t.run)
                        if (!d.has(s) && (d.add(s), s(i, e))) return !0;
                      t.preventDefault && (c = !0);
                    }
                    return !1;
                  },
                  f = t[s],
                  p,
                  g;
                if (f) {
                  if (u(f[h + ip(o, e, !r)])) return !0;
                  if (
                    r &&
                    (e.altKey || e.metaKey || e.ctrlKey) &&
                    !(q.windows && e.ctrlKey && e.altKey) &&
                    (p = a.ue[e.keyCode]) &&
                    p != o
                  ) {
                    if (
                      u(f[h + ip(p, e, !0)]) ||
                      (e.shiftKey &&
                        (g = a.uY[e.keyCode]) != o &&
                        g != p &&
                        u(f[h + ip(g, e, !1)]))
                    )
                      return !0;
                  } else if (r && e.shiftKey && u(f[h + ip(o, e, !0)]))
                    return !0;
                  if (u(f._any)) return !0;
                }
                return c;
              })(
                ((i = e.state.facet(im)),
                (s = iv.get(i)) ||
                  iv.set(
                    i,
                    (s = (function (t, e = iu) {
                      let i = Object.create(null),
                        s = Object.create(null),
                        o = (t, e) => {
                          let i = s[t];
                          if (null == i) s[t] = e;
                          else if (i != e)
                            throw Error(
                              'Key binding ' +
                                t +
                                ' is used both as a regular binding and as a multi-stroke prefix'
                            );
                        },
                        n = (t, s, n, r) => {
                          var l, h;
                          let a = i[t] || (i[t] = Object.create(null)),
                            c = s.split(/ (?!$)/).map((t) =>
                              (function (t, e) {
                                let i, s, o, n;
                                let r = t.split(/-(?!$)/),
                                  l = r[r.length - 1];
                                'Space' == l && (l = ' ');
                                for (let t = 0; t < r.length - 1; ++t) {
                                  let l = r[t];
                                  if (/^(cmd|meta|m)$/i.test(l)) n = !0;
                                  else if (/^a(lt)?$/i.test(l)) i = !0;
                                  else if (/^(c|ctrl|control)$/i.test(l))
                                    s = !0;
                                  else if (/^s(hift)?$/i.test(l)) o = !0;
                                  else if (/^mod$/i.test(l))
                                    'mac' == e ? (n = !0) : (s = !0);
                                  else
                                    throw Error(
                                      'Unrecognized modifier name: ' + l
                                    );
                                }
                                return (
                                  i && (l = 'Alt-' + l),
                                  s && (l = 'Ctrl-' + l),
                                  n && (l = 'Meta-' + l),
                                  o && (l = 'Shift-' + l),
                                  l
                                );
                              })(t, e)
                            );
                          for (let e = 1; e < c.length; e++) {
                            let i = c.slice(0, e).join(' ');
                            o(i, !0),
                              a[i] ||
                                (a[i] = {
                                  preventDefault: !0,
                                  run: [
                                    (e) => {
                                      let s = (iw = {
                                        view: e,
                                        prefix: i,
                                        scope: t,
                                      });
                                      return (
                                        setTimeout(() => {
                                          iw == s && (iw = null);
                                        }, 4e3),
                                        !0
                                      );
                                    },
                                  ],
                                });
                          }
                          let d = c.join(' ');
                          o(d, !1);
                          let u =
                            a[d] ||
                            (a[d] = {
                              preventDefault: !1,
                              run:
                                (null ===
                                  (h =
                                    null === (l = a._any) || void 0 === l
                                      ? void 0
                                      : l.run) || void 0 === h
                                  ? void 0
                                  : h.slice()) || [],
                            });
                          n && u.run.push(n), r && (u.preventDefault = !0);
                        };
                      for (let s of t) {
                        let t = s.scope ? s.scope.split(' ') : ['editor'];
                        if (s.any)
                          for (let e of t) {
                            let t = i[e] || (i[e] = Object.create(null));
                            for (let e in (t._any ||
                              (t._any = {preventDefault: !1, run: []}),
                            t))
                              t[e].run.push(s.any);
                          }
                        let o = s[e] || s.key;
                        if (o)
                          for (let e of t)
                            n(e, o, s.run, s.preventDefault),
                              s.shift &&
                                n(e, 'Shift-' + o, s.shift, s.preventDefault);
                      }
                      return i;
                    })(i.reduce((t, e) => t.concat(e), [])))
                  ),
                s),
                t,
                e,
                'editor'
              );
            },
          })
        ),
        im = l.r$.define({enables: ig}),
        iv = new WeakMap(),
        iw = null;
      class ib {
        constructor(t, e, i, s, o) {
          (this.className = t),
            (this.left = e),
            (this.top = i),
            (this.width = s),
            (this.height = o);
        }
        draw() {
          let t = document.createElement('div');
          return (t.className = this.className), this.adjust(t), t;
        }
        update(t, e) {
          return e.className == this.className && (this.adjust(t), !0);
        }
        adjust(t) {
          (t.style.left = this.left + 'px'),
            (t.style.top = this.top + 'px'),
            null != this.width && (t.style.width = this.width + 'px'),
            (t.style.height = this.height + 'px');
        }
        eq(t) {
          return (
            this.left == t.left &&
            this.top == t.top &&
            this.width == t.width &&
            this.height == t.height &&
            this.className == t.className
          );
        }
        static forRange(t, e, i) {
          if (!i.empty)
            return (function (t, e, i) {
              if (i.to <= t.viewport.from || i.from >= t.viewport.to) return [];
              let s = Math.max(i.from, t.viewport.from),
                o = Math.min(i.to, t.viewport.to),
                n = t.textDirection == tI.LTR,
                r = t.contentDOM,
                l = r.getBoundingClientRect(),
                h = iy(t),
                a = r.querySelector('.cm-line'),
                c = a && window.getComputedStyle(a),
                d =
                  l.left +
                  (c
                    ? parseInt(c.paddingLeft) +
                      Math.min(0, parseInt(c.textIndent))
                    : 0),
                u = l.right - (c ? parseInt(c.paddingRight) : 0),
                f = iS(t, s),
                p = iS(t, o),
                g = f.type == to.Text ? f : null,
                m = p.type == to.Text ? p : null;
              if (
                (t.lineWrapping &&
                  (g && (g = ix(t, s, g)), m && (m = ix(t, o, m))),
                g && m && g.from == m.from)
              )
                return w(b(i.from, i.to, g));
              {
                let e = g ? b(i.from, null, g) : y(f, !1),
                  s = m ? b(null, i.to, m) : y(p, !0),
                  o = [];
                return (
                  (g || f).to < (m || p).from - 1
                    ? o.push(v(d, e.bottom, u, s.top))
                    : e.bottom < s.top &&
                      t.elementAtHeight((e.bottom + s.top) / 2).type ==
                        to.Text &&
                      (e.bottom = s.top = (e.bottom + s.top) / 2),
                  w(e).concat(o).concat(w(s))
                );
              }
              function v(t, i, s, o) {
                return new ib(
                  e,
                  t - h.left,
                  i - h.top - 0.01,
                  s - t,
                  o - i + 0.01
                );
              }
              function w({top: t, bottom: e, horizontal: i}) {
                let s = [];
                for (let o = 0; o < i.length; o += 2)
                  s.push(v(i[o], t, i[o + 1], e));
                return s;
              }
              function b(e, i, s) {
                let o = 1e9,
                  r = -1e9,
                  l = [];
                function h(e, i, h, a, c) {
                  let f = t.coordsAtPos(e, e == s.to ? -2 : 2),
                    p = t.coordsAtPos(h, h == s.from ? 2 : -2);
                  (o = Math.min(f.top, p.top, o)),
                    (r = Math.max(f.bottom, p.bottom, r)),
                    c == tI.LTR
                      ? l.push(n && i ? d : f.left, n && a ? u : p.right)
                      : l.push(!n && a ? d : p.left, !n && i ? u : f.right);
                }
                let a = null != e ? e : s.from,
                  c = null != i ? i : s.to;
                for (let s of t.visibleRanges)
                  if (s.to > a && s.from < c)
                    for (
                      let o = Math.max(s.from, a), n = Math.min(s.to, c);
                      ;

                    ) {
                      let s = t.state.doc.lineAt(o);
                      for (let r of t.bidiSpans(s)) {
                        let t = r.from + s.from,
                          l = r.to + s.from;
                        if (t >= n) break;
                        l > o &&
                          h(
                            Math.max(t, o),
                            null == e && t <= a,
                            Math.min(l, n),
                            null == i && l >= c,
                            r.dir
                          );
                      }
                      if ((o = s.to + 1) >= n) break;
                    }
                return (
                  0 == l.length &&
                    h(a, null == e, c, null == i, t.textDirection),
                  {top: o, bottom: r, horizontal: l}
                );
              }
              function y(t, e) {
                let i = l.top + (e ? t.top : t.bottom);
                return {top: i, bottom: i, horizontal: []};
              }
            })(t, e, i);
          {
            let s = t.coordsAtPos(i.head, i.assoc || 1);
            if (!s) return [];
            let o = iy(t);
            return [
              new ib(e, s.left - o.left, s.top - o.top, null, s.bottom - s.top),
            ];
          }
        }
      }
      function iy(t) {
        let e = t.scrollDOM.getBoundingClientRect();
        return {
          left:
            (t.textDirection == tI.LTR
              ? e.left
              : e.right - t.scrollDOM.clientWidth) - t.scrollDOM.scrollLeft,
          top: e.top - t.scrollDOM.scrollTop,
        };
      }
      function ix(t, e, i) {
        let s = l.jT.cursor(e);
        return {
          from: Math.max(i.from, t.moveToLineBoundary(s, !1, !0).from),
          to: Math.min(i.to, t.moveToLineBoundary(s, !0, !0).from),
          type: to.Text,
        };
      }
      function iS(t, e) {
        let i = t.lineBlockAt(e);
        if (Array.isArray(i.type)) {
          for (let t of i.type)
            if (t.to > e || (t.to == e && (t.to == i.to || t.type == to.Text)))
              return t;
        }
        return i;
      }
      let iM = !q.ios,
        ik = {
          '.cm-line': {
            '& ::selection': {backgroundColor: 'transparent !important'},
            '&::selection': {backgroundColor: 'transparent !important'},
          },
        };
      function iC(t, e, i, s, o) {
        e.lastIndex = 0;
        for (
          let n = t.iterRange(i, s), r = i, l;
          !n.next().done;
          r += n.value.length
        )
          if (!n.lineBreak) for (; (l = e.exec(n.value)); ) o(r + l.index, l);
      }
      iM && (ik['.cm-line'].caretColor = 'transparent !important');
      class iA {
        constructor(t) {
          let {
            regexp: e,
            decoration: i,
            decorate: s,
            boundary: o,
            maxLength: n = 1e3,
          } = t;
          if (!e.global)
            throw RangeError(
              "The regular expression given to MatchDecorator should have its 'g' flag set"
            );
          if (((this.regexp = e), s))
            this.addMatch = (t, e, i, o) => s(o, i, i + t[0].length, t, e);
          else if ('function' == typeof i)
            this.addMatch = (t, e, s, o) => {
              let n = i(t, e, s);
              n && o(s, s + t[0].length, n);
            };
          else if (i) this.addMatch = (t, e, s, o) => o(s, s + t[0].length, i);
          else
            throw RangeError(
              "Either 'decorate' or 'decoration' should be provided to MatchDecorator"
            );
          (this.boundary = o), (this.maxLength = n);
        }
        createDeco(t) {
          let e = new l.f_(),
            i = e.add.bind(e);
          for (let {from: e, to: s} of (function (t, e) {
            let i = t.visibleRanges;
            if (
              1 == i.length &&
              i[0].from == t.viewport.from &&
              i[0].to == t.viewport.to
            )
              return i;
            let s = [];
            for (let {from: o, to: n} of i)
              (o = Math.max(t.state.doc.lineAt(o).from, o - e)),
                (n = Math.min(t.state.doc.lineAt(n).to, n + e)),
                s.length && s[s.length - 1].to >= o
                  ? (s[s.length - 1].to = n)
                  : s.push({from: o, to: n});
            return s;
          })(t, this.maxLength))
            iC(t.state.doc, this.regexp, e, s, (e, s) =>
              this.addMatch(s, t, e, i)
            );
          return e.finish();
        }
        updateDeco(t, e) {
          let i = 1e9,
            s = -1;
          return (t.docChanged &&
            t.changes.iterChanges((e, o, n, r) => {
              r > t.view.viewport.from &&
                n < t.view.viewport.to &&
                ((i = Math.min(n, i)), (s = Math.max(r, s)));
            }),
          t.viewportChanged || s - i > 1e3)
            ? this.createDeco(t.view)
            : s > -1
            ? this.updateRange(t.view, e.map(t.changes), i, s)
            : e;
        }
        updateRange(t, e, i, s) {
          for (let o of t.visibleRanges) {
            let n = Math.max(o.from, i),
              r = Math.min(o.to, s);
            if (r > n) {
              let i = t.state.doc.lineAt(n),
                s = i.to < r ? t.state.doc.lineAt(r) : i,
                l = Math.max(o.from, i.from),
                h = Math.min(o.to, s.to);
              if (this.boundary) {
                for (; n > i.from; n--)
                  if (this.boundary.test(i.text[n - 1 - i.from])) {
                    l = n;
                    break;
                  }
                for (; r < s.to; r++)
                  if (this.boundary.test(s.text[r - s.from])) {
                    h = r;
                    break;
                  }
              }
              let a = [],
                c,
                d = (t, e, i) => a.push(i.range(t, e));
              if (i == s)
                for (
                  this.regexp.lastIndex = l - i.from;
                  (c = this.regexp.exec(i.text)) && c.index < h - i.from;

                )
                  this.addMatch(c, t, c.index + i.from, d);
              else
                iC(t.state.doc, this.regexp, l, h, (e, i) =>
                  this.addMatch(i, t, e, d)
                );
              e = e.update({
                filterFrom: l,
                filterTo: h,
                filter: (t, e) => t < l || e > h,
                add: a,
              });
            }
          }
          return e;
        }
      }
      let iD = null != /x/.unicode ? 'gu' : 'g',
        iT = RegExp(
          '[\x00-\b\n-\x1f\x7f-\x9f\xad؜​‎‏\u2028\u2029‭‮⁦⁧⁩\uFEFF￹-￼]',
          iD
        ),
        iO = {
          0: 'null',
          7: 'bell',
          8: 'backspace',
          10: 'newline',
          11: 'vertical tab',
          13: 'carriage return',
          27: 'escape',
          8203: 'zero width space',
          8204: 'zero width non-joiner',
          8205: 'zero width joiner',
          8206: 'left-to-right mark',
          8207: 'right-to-left mark',
          8232: 'line separator',
          8237: 'left-to-right override',
          8238: 'right-to-left override',
          8294: 'left-to-right isolate',
          8295: 'right-to-left isolate',
          8297: 'pop directional isolate',
          8233: 'paragraph separator',
          65279: 'zero width no-break space',
          65532: 'object replacement',
        },
        iE = null,
        iR = l.r$.define({
          combine(t) {
            let e = (0, l.BO)(t, {
              render: null,
              specialChars: iT,
              addSpecialChars: null,
            });
            return (
              (e.replaceTabs = !(function () {
                var t;
                if (
                  null == iE &&
                  'undefined' != typeof document &&
                  document.body
                ) {
                  let e = document.body.style;
                  iE =
                    (null !== (t = e.tabSize) && void 0 !== t
                      ? t
                      : e.MozTabSize) != null;
                }
                return iE || !1;
              })()) &&
                (e.specialChars = RegExp('	|' + e.specialChars.source, iD)),
              e.addSpecialChars &&
                (e.specialChars = RegExp(
                  e.specialChars.source + '|' + e.addSpecialChars.source,
                  iD
                )),
              e
            );
          },
        });
      function iB(t = {}) {
        return [
          iR.of(t),
          iL ||
            (iL = tR.fromClass(
              class {
                constructor(t) {
                  (this.view = t),
                    (this.decorations = tn.none),
                    (this.decorationCache = Object.create(null)),
                    (this.decorator = this.makeDecorator(t.state.facet(iR))),
                    (this.decorations = this.decorator.createDeco(t));
                }
                makeDecorator(t) {
                  return new iA({
                    regexp: t.specialChars,
                    decoration: (e, i, s) => {
                      let {doc: o} = i.state,
                        n = (0, l.gm)(e[0], 0);
                      if (9 == n) {
                        let t = o.lineAt(s),
                          e = i.state.tabSize,
                          n = (0, l.IS)(t.text, e, s - t.from);
                        return tn.replace({
                          widget: new iV(
                            (e - (n % e)) * this.view.defaultCharacterWidth
                          ),
                        });
                      }
                      return (
                        this.decorationCache[n] ||
                        (this.decorationCache[n] = tn.replace({
                          widget: new iH(t, n),
                        }))
                      );
                    },
                    boundary: t.replaceTabs ? void 0 : /[^]/,
                  });
                }
                update(t) {
                  let e = t.state.facet(iR);
                  t.startState.facet(iR) != e
                    ? ((this.decorator = this.makeDecorator(e)),
                      (this.decorations = this.decorator.createDeco(t.view)))
                    : (this.decorations = this.decorator.updateDeco(
                        t,
                        this.decorations
                      ));
                }
              },
              {decorations: (t) => t.decorations}
            )),
        ];
      }
      let iL = null;
      class iH extends ts {
        constructor(t, e) {
          super(), (this.options = t), (this.code = e);
        }
        eq(t) {
          return t.code == this.code;
        }
        toDOM(t) {
          var e;
          let i =
              (e = this.code) >= 32
                ? '•'
                : 10 == e
                ? '␤'
                : String.fromCharCode(9216 + e),
            s =
              t.state.phrase('Control character') +
              ' ' +
              (iO[this.code] || '0x' + this.code.toString(16)),
            o = this.options.render && this.options.render(this.code, s, i);
          if (o) return o;
          let n = document.createElement('span');
          return (
            (n.textContent = i),
            (n.title = s),
            n.setAttribute('aria-label', s),
            (n.className = 'cm-specialChar'),
            n
          );
        }
        ignoreEvent() {
          return !1;
        }
      }
      class iV extends ts {
        constructor(t) {
          super(), (this.width = t);
        }
        eq(t) {
          return t.width == this.width;
        }
        toDOM() {
          let t = document.createElement('span');
          return (
            (t.textContent = '	'),
            (t.className = 'cm-tab'),
            (t.style.width = this.width + 'px'),
            t
          );
        }
        ignoreEvent() {
          return !1;
        }
      }
      function iN() {
        return iW;
      }
      let iP = tn.line({class: 'cm-activeLine'}),
        iW = tR.fromClass(
          class {
            constructor(t) {
              this.decorations = this.getDeco(t);
            }
            update(t) {
              (t.docChanged || t.selectionSet) &&
                (this.decorations = this.getDeco(t.view));
            }
            getDeco(t) {
              let e = -1,
                i = [];
              for (let s of t.state.selection.ranges) {
                let o = t.lineBlockAt(s.head);
                o.from > e && (i.push(iP.range(o.from)), (e = o.from));
              }
              return tn.set(i);
            }
          },
          {decorations: (t) => t.decorations}
        ),
        iz = '-10000px';
      class iF {
        constructor(t, e, i) {
          (this.facet = e),
            (this.createTooltipView = i),
            (this.input = t.state.facet(e)),
            (this.tooltips = this.input.filter((t) => t)),
            (this.tooltipViews = this.tooltips.map(i));
        }
        update(t) {
          var e;
          let i = t.state.facet(this.facet),
            s = i.filter((t) => t);
          if (i === this.input) {
            for (let e of this.tooltipViews) e.update && e.update(t);
            return !1;
          }
          let o = [];
          for (let e = 0; e < s.length; e++) {
            let i = s[e],
              n = -1;
            if (i) {
              for (let t = 0; t < this.tooltips.length; t++) {
                let e = this.tooltips[t];
                e && e.create == i.create && (n = t);
              }
              if (n < 0) o[e] = this.createTooltipView(i);
              else {
                let i = (o[e] = this.tooltipViews[n]);
                i.update && i.update(t);
              }
            }
          }
          for (let t of this.tooltipViews)
            0 > o.indexOf(t) &&
              (t.dom.remove(),
              null === (e = t.destroy) || void 0 === e || e.call(t));
          return (
            (this.input = i), (this.tooltips = s), (this.tooltipViews = o), !0
          );
        }
      }
      function iI(t) {
        let {win: e} = t;
        return {top: 0, left: 0, bottom: e.innerHeight, right: e.innerWidth};
      }
      let iK = l.r$.define({
          combine: (t) => {
            var e, i, s;
            return {
              position: q.ios
                ? 'absolute'
                : (null === (e = t.find((t) => t.position)) || void 0 === e
                    ? void 0
                    : e.position) || 'fixed',
              parent:
                (null === (i = t.find((t) => t.parent)) || void 0 === i
                  ? void 0
                  : i.parent) || null,
              tooltipSpace:
                (null === (s = t.find((t) => t.tooltipSpace)) || void 0 === s
                  ? void 0
                  : s.tooltipSpace) || iI,
            };
          },
        }),
        ij = new WeakMap(),
        iq = tR.fromClass(
          class {
            constructor(t) {
              (this.view = t),
                (this.inView = !0),
                (this.lastTransaction = 0),
                (this.measureTimeout = -1);
              let e = t.state.facet(iK);
              (this.position = e.position),
                (this.parent = e.parent),
                (this.classes = t.themeClasses),
                this.createContainer(),
                (this.measureReq = {
                  read: this.readMeasure.bind(this),
                  write: this.writeMeasure.bind(this),
                  key: this,
                }),
                (this.manager = new iF(t, iX, (t) => this.createTooltip(t))),
                (this.intersectionObserver =
                  'function' == typeof IntersectionObserver
                    ? new IntersectionObserver(
                        (t) => {
                          Date.now() > this.lastTransaction - 50 &&
                            t.length > 0 &&
                            t[t.length - 1].intersectionRatio < 1 &&
                            this.measureSoon();
                        },
                        {threshold: [1]}
                      )
                    : null),
                this.observeIntersection(),
                t.win.addEventListener(
                  'resize',
                  (this.measureSoon = this.measureSoon.bind(this))
                ),
                this.maybeMeasure();
            }
            createContainer() {
              this.parent
                ? ((this.container = document.createElement('div')),
                  (this.container.style.position = 'relative'),
                  (this.container.className = this.view.themeClasses),
                  this.parent.appendChild(this.container))
                : (this.container = this.view.dom);
            }
            observeIntersection() {
              if (this.intersectionObserver)
                for (let t of (this.intersectionObserver.disconnect(),
                this.manager.tooltipViews))
                  this.intersectionObserver.observe(t.dom);
            }
            measureSoon() {
              this.measureTimeout < 0 &&
                (this.measureTimeout = setTimeout(() => {
                  (this.measureTimeout = -1), this.maybeMeasure();
                }, 50));
            }
            update(t) {
              t.transactions.length && (this.lastTransaction = Date.now());
              let e = this.manager.update(t);
              e && this.observeIntersection();
              let i = e || t.geometryChanged,
                s = t.state.facet(iK);
              if (s.position != this.position) {
                for (let t of ((this.position = s.position),
                this.manager.tooltipViews))
                  t.dom.style.position = this.position;
                i = !0;
              }
              if (s.parent != this.parent) {
                for (let t of (this.parent && this.container.remove(),
                (this.parent = s.parent),
                this.createContainer(),
                this.manager.tooltipViews))
                  this.container.appendChild(t.dom);
                i = !0;
              } else
                this.parent &&
                  this.view.themeClasses != this.classes &&
                  (this.classes = this.container.className =
                    this.view.themeClasses);
              i && this.maybeMeasure();
            }
            createTooltip(t) {
              let e = t.create(this.view);
              if (
                (e.dom.classList.add('cm-tooltip'),
                t.arrow &&
                  !e.dom.querySelector('.cm-tooltip > .cm-tooltip-arrow'))
              ) {
                let t = document.createElement('div');
                (t.className = 'cm-tooltip-arrow'), e.dom.appendChild(t);
              }
              return (
                (e.dom.style.position = this.position),
                (e.dom.style.top = iz),
                this.container.appendChild(e.dom),
                e.mount && e.mount(this.view),
                e
              );
            }
            destroy() {
              var t, e;
              for (let e of (this.view.win.removeEventListener(
                'resize',
                this.measureSoon
              ),
              this.manager.tooltipViews))
                e.dom.remove(),
                  null === (t = e.destroy) || void 0 === t || t.call(e);
              null === (e = this.intersectionObserver) ||
                void 0 === e ||
                e.disconnect(),
                clearTimeout(this.measureTimeout);
            }
            readMeasure() {
              let t = this.view.dom.getBoundingClientRect();
              return {
                editor: t,
                parent: this.parent
                  ? this.container.getBoundingClientRect()
                  : t,
                pos: this.manager.tooltips.map((t, e) => {
                  let i = this.manager.tooltipViews[e];
                  return i.getCoords
                    ? i.getCoords(t.pos)
                    : this.view.coordsAtPos(t.pos);
                }),
                size: this.manager.tooltipViews.map(({dom: t}) =>
                  t.getBoundingClientRect()
                ),
                space: this.view.state.facet(iK).tooltipSpace(this.view),
              };
            }
            writeMeasure(t) {
              var e;
              let {editor: i, space: s} = t,
                o = [];
              for (let n = 0; n < this.manager.tooltips.length; n++) {
                let r = this.manager.tooltips[n],
                  l = this.manager.tooltipViews[n],
                  {dom: h} = l,
                  a = t.pos[n],
                  c = t.size[n];
                if (
                  !a ||
                  a.bottom <= Math.max(i.top, s.top) ||
                  a.top >= Math.min(i.bottom, s.bottom) ||
                  a.right < Math.max(i.left, s.left) - 0.1 ||
                  a.left > Math.min(i.right, s.right) + 0.1
                ) {
                  h.style.top = iz;
                  continue;
                }
                let d = r.arrow
                    ? l.dom.querySelector('.cm-tooltip-arrow')
                    : null,
                  u = d ? 7 : 0,
                  f = c.right - c.left,
                  p =
                    null !== (e = ij.get(l)) && void 0 !== e
                      ? e
                      : c.bottom - c.top,
                  g = l.offset || iG,
                  m = this.view.textDirection == tI.LTR,
                  v =
                    c.width > s.right - s.left
                      ? m
                        ? s.left
                        : s.right - c.width
                      : m
                      ? Math.min(a.left - (d ? 14 : 0) + g.x, s.right - f)
                      : Math.max(s.left, a.left - f + (d ? 14 : 0) - g.x),
                  w = !!r.above;
                !r.strictSide &&
                  (w
                    ? a.top - (c.bottom - c.top) - g.y < s.top
                    : a.bottom + (c.bottom - c.top) + g.y > s.bottom) &&
                  w == s.bottom - a.bottom > a.top - s.top &&
                  (w = !w);
                let b = (w ? a.top - s.top : s.bottom - a.bottom) - u;
                if (b < p && !1 !== l.resize) {
                  if (b < this.view.defaultLineHeight) {
                    h.style.top = iz;
                    continue;
                  }
                  ij.set(l, p), (h.style.height = (p = b) + 'px');
                } else h.style.height && (h.style.height = '');
                let y = w ? a.top - p - u - g.y : a.bottom + u + g.y,
                  x = v + f;
                if (!0 !== l.overlap)
                  for (let t of o)
                    t.left < x &&
                      t.right > v &&
                      t.top < y + p &&
                      t.bottom > y &&
                      (y = w ? t.top - p - 2 - u : t.bottom + u + 2);
                'absolute' == this.position
                  ? ((h.style.top = y - t.parent.top + 'px'),
                    (h.style.left = v - t.parent.left + 'px'))
                  : ((h.style.top = y + 'px'), (h.style.left = v + 'px')),
                  d &&
                    (d.style.left = `${
                      a.left + (m ? g.x : -g.x) - (v + 14 - 7)
                    }px`),
                  !0 !== l.overlap &&
                    o.push({left: v, top: y, right: x, bottom: y + p}),
                  h.classList.toggle('cm-tooltip-above', w),
                  h.classList.toggle('cm-tooltip-below', !w),
                  l.positioned && l.positioned(t.space);
              }
            }
            maybeMeasure() {
              if (
                this.manager.tooltips.length &&
                (this.view.inView && this.view.requestMeasure(this.measureReq),
                this.inView != this.view.inView &&
                  ((this.inView = this.view.inView), !this.inView))
              )
                for (let t of this.manager.tooltipViews) t.dom.style.top = iz;
            }
          },
          {
            eventHandlers: {
              scroll() {
                this.maybeMeasure();
              },
            },
          }
        ),
        i$ = il.baseTheme({
          '.cm-tooltip': {zIndex: 100, boxSizing: 'border-box'},
          '&light .cm-tooltip': {
            border: '1px solid #bbb',
            backgroundColor: '#f5f5f5',
          },
          '&light .cm-tooltip-section:not(:first-child)': {
            borderTop: '1px solid #bbb',
          },
          '&dark .cm-tooltip': {backgroundColor: '#333338', color: 'white'},
          '.cm-tooltip-arrow': {
            height: '7px',
            width: '14px',
            position: 'absolute',
            zIndex: -1,
            overflow: 'hidden',
            '&:before, &:after': {
              content: "''",
              position: 'absolute',
              width: 0,
              height: 0,
              borderLeft: '7px solid transparent',
              borderRight: '7px solid transparent',
            },
            '.cm-tooltip-above &': {
              bottom: '-7px',
              '&:before': {borderTop: '7px solid #bbb'},
              '&:after': {borderTop: '7px solid #f5f5f5', bottom: '1px'},
            },
            '.cm-tooltip-below &': {
              top: '-7px',
              '&:before': {borderBottom: '7px solid #bbb'},
              '&:after': {borderBottom: '7px solid #f5f5f5', top: '1px'},
            },
          },
          '&dark .cm-tooltip .cm-tooltip-arrow': {
            '&:before': {
              borderTopColor: '#333338',
              borderBottomColor: '#333338',
            },
            '&:after': {
              borderTopColor: 'transparent',
              borderBottomColor: 'transparent',
            },
          },
        }),
        iG = {x: 0, y: 0},
        iX = l.r$.define({enables: [iq, i$]}),
        i_ = l.r$.define();
      class iU {
        constructor(t) {
          (this.view = t),
            (this.mounted = !1),
            (this.dom = document.createElement('div')),
            this.dom.classList.add('cm-tooltip-hover'),
            (this.manager = new iF(t, i_, (t) => this.createHostedView(t)));
        }
        static create(t) {
          return new iU(t);
        }
        createHostedView(t) {
          let e = t.create(this.view);
          return (
            e.dom.classList.add('cm-tooltip-section'),
            this.dom.appendChild(e.dom),
            this.mounted && e.mount && e.mount(this.view),
            e
          );
        }
        mount(t) {
          for (let e of this.manager.tooltipViews) e.mount && e.mount(t);
          this.mounted = !0;
        }
        positioned(t) {
          for (let e of this.manager.tooltipViews)
            e.positioned && e.positioned(t);
        }
        update(t) {
          this.manager.update(t);
        }
      }
      let iY = iX.compute([i_], (t) => {
        let e = t.facet(i_).filter((t) => t);
        return 0 === e.length
          ? null
          : {
              pos: Math.min(...e.map((t) => t.pos)),
              end: Math.max(
                ...e.filter((t) => null != t.end).map((t) => t.end)
              ),
              create: iU.create,
              above: e[0].above,
              arrow: e.some((t) => t.arrow),
            };
      });
      class iQ {
        constructor(t, e, i, s, o) {
          (this.view = t),
            (this.source = e),
            (this.field = i),
            (this.setHover = s),
            (this.hoverTime = o),
            (this.hoverTimeout = -1),
            (this.restartTimeout = -1),
            (this.pending = null),
            (this.lastMove = {x: 0, y: 0, target: t.dom, time: 0}),
            (this.checkHover = this.checkHover.bind(this)),
            t.dom.addEventListener(
              'mouseleave',
              (this.mouseleave = this.mouseleave.bind(this))
            ),
            t.dom.addEventListener(
              'mousemove',
              (this.mousemove = this.mousemove.bind(this))
            );
        }
        update() {
          this.pending &&
            ((this.pending = null),
            clearTimeout(this.restartTimeout),
            (this.restartTimeout = setTimeout(() => this.startHover(), 20)));
        }
        get active() {
          return this.view.state.field(this.field);
        }
        checkHover() {
          if (((this.hoverTimeout = -1), this.active)) return;
          let t = Date.now() - this.lastMove.time;
          t < this.hoverTime
            ? (this.hoverTimeout = setTimeout(
                this.checkHover,
                this.hoverTime - t
              ))
            : this.startHover();
        }
        startHover() {
          clearTimeout(this.restartTimeout);
          let {lastMove: t} = this,
            e = this.view.contentDOM.contains(t.target)
              ? this.view.posAtCoords(t)
              : null;
          if (null == e) return;
          let i = this.view.coordsAtPos(e);
          if (
            null == i ||
            t.y < i.top ||
            t.y > i.bottom ||
            t.x < i.left - this.view.defaultCharacterWidth ||
            t.x > i.right + this.view.defaultCharacterWidth
          )
            return;
          let s = this.view
              .bidiSpans(this.view.state.doc.lineAt(e))
              .find((t) => t.from <= e && t.to >= e),
            o = s && s.dir == tI.RTL ? -1 : 1,
            n = this.source(this.view, e, t.x < i.left ? -o : o);
          if (null == n ? void 0 : n.then) {
            let t = (this.pending = {pos: e});
            n.then(
              (e) => {
                this.pending == t &&
                  ((this.pending = null),
                  e && this.view.dispatch({effects: this.setHover.of(e)}));
              },
              (t) => tD(this.view.state, t, 'hover tooltip')
            );
          } else n && this.view.dispatch({effects: this.setHover.of(n)});
        }
        mousemove(t) {
          var e;
          (this.lastMove = {
            x: t.clientX,
            y: t.clientY,
            target: t.target,
            time: Date.now(),
          }),
            this.hoverTimeout < 0 &&
              (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
          let i = this.active;
          if ((i && !iJ(this.lastMove.target)) || this.pending) {
            let {pos: s} = i || this.pending,
              o =
                null !== (e = null == i ? void 0 : i.end) && void 0 !== e
                  ? e
                  : s;
            (s == o
              ? this.view.posAtCoords(this.lastMove) != s
              : !(function (t, e, i, s, o, n) {
                  let r = document.createRange(),
                    l = t.domAtPos(e),
                    h = t.domAtPos(i);
                  r.setEnd(h.node, h.offset), r.setStart(l.node, l.offset);
                  let a = r.getClientRects();
                  r.detach();
                  for (let t = 0; t < a.length; t++) {
                    let e = a[t];
                    if (
                      6 >=
                      Math.max(e.top - o, o - e.bottom, e.left - s, s - e.right)
                    )
                      return !0;
                  }
                  return !1;
                })(this.view, s, o, t.clientX, t.clientY, 0)) &&
              (this.view.dispatch({effects: this.setHover.of(null)}),
              (this.pending = null));
          }
        }
        mouseleave(t) {
          clearTimeout(this.hoverTimeout),
            (this.hoverTimeout = -1),
            this.active &&
              !iJ(t.relatedTarget) &&
              this.view.dispatch({effects: this.setHover.of(null)});
        }
        destroy() {
          clearTimeout(this.hoverTimeout),
            this.view.dom.removeEventListener('mouseleave', this.mouseleave),
            this.view.dom.removeEventListener('mousemove', this.mousemove);
        }
      }
      function iJ(t) {
        for (let e = t; e; e = e.parentNode)
          if (1 == e.nodeType && e.classList.contains('cm-tooltip')) return !0;
        return !1;
      }
      function iZ(t, e = {}) {
        let i = l.Py.define(),
          s = l.QQ.define({
            create: () => null,
            update(t, s) {
              if (
                t &&
                ((e.hideOnChange && (s.docChanged || s.selection)) ||
                  (e.hideOn && e.hideOn(s, t)))
              )
                return null;
              if (t && s.docChanged) {
                let e = s.changes.mapPos(t.pos, -1, l.gc.TrackDel);
                if (null == e) return null;
                let i = Object.assign(Object.create(null), t);
                (i.pos = e),
                  null != t.end && (i.end = s.changes.mapPos(t.end)),
                  (t = i);
              }
              for (let e of s.effects)
                e.is(i) && (t = e.value), e.is(i1) && (t = null);
              return t;
            },
            provide: (t) => i_.from(t),
          });
        return [
          s,
          tR.define((o) => new iQ(o, t, s, i, e.hoverTime || 300)),
          iY,
        ];
      }
      function i0(t, e) {
        let i = t.plugin(iq);
        if (!i) return null;
        let s = i.manager.tooltips.indexOf(e);
        return s < 0 ? null : i.manager.tooltipViews[s];
      }
      let i1 = l.Py.define(),
        i2 = l.r$.define({
          combine(t) {
            let e, i;
            for (let s of t)
              (e = e || s.topContainer), (i = i || s.bottomContainer);
            return {topContainer: e, bottomContainer: i};
          },
        });
      function i8(t, e) {
        let i = t.plugin(i3),
          s = i ? i.specs.indexOf(e) : -1;
        return s > -1 ? i.panels[s] : null;
      }
      let i3 = tR.fromClass(
        class {
          constructor(t) {
            (this.input = t.state.facet(i4)),
              (this.specs = this.input.filter((t) => t)),
              (this.panels = this.specs.map((e) => e(t)));
            let e = t.state.facet(i2);
            for (let i of ((this.top = new i9(t, !0, e.topContainer)),
            (this.bottom = new i9(t, !1, e.bottomContainer)),
            this.top.sync(this.panels.filter((t) => t.top)),
            this.bottom.sync(this.panels.filter((t) => !t.top)),
            this.panels))
              i.dom.classList.add('cm-panel'), i.mount && i.mount();
          }
          update(t) {
            let e = t.state.facet(i2);
            this.top.container != e.topContainer &&
              (this.top.sync([]),
              (this.top = new i9(t.view, !0, e.topContainer))),
              this.bottom.container != e.bottomContainer &&
                (this.bottom.sync([]),
                (this.bottom = new i9(t.view, !1, e.bottomContainer))),
              this.top.syncClasses(),
              this.bottom.syncClasses();
            let i = t.state.facet(i4);
            if (i != this.input) {
              let e = i.filter((t) => t),
                s = [],
                o = [],
                n = [],
                r = [];
              for (let i of e) {
                let e = this.specs.indexOf(i),
                  l;
                e < 0
                  ? ((l = i(t.view)), r.push(l))
                  : (l = this.panels[e]).update && l.update(t),
                  s.push(l),
                  (l.top ? o : n).push(l);
              }
              for (let t of ((this.specs = e),
              (this.panels = s),
              this.top.sync(o),
              this.bottom.sync(n),
              r))
                t.dom.classList.add('cm-panel'), t.mount && t.mount();
            } else for (let e of this.panels) e.update && e.update(t);
          }
          destroy() {
            this.top.sync([]), this.bottom.sync([]);
          }
        },
        {
          provide: (t) =>
            il.scrollMargins.of((e) => {
              let i = e.plugin(t);
              return (
                i && {
                  top: i.top.scrollMargin(),
                  bottom: i.bottom.scrollMargin(),
                }
              );
            }),
        }
      );
      class i9 {
        constructor(t, e, i) {
          (this.view = t),
            (this.top = e),
            (this.container = i),
            (this.dom = void 0),
            (this.classes = ''),
            (this.panels = []),
            this.syncClasses();
        }
        sync(t) {
          for (let e of this.panels)
            e.destroy && 0 > t.indexOf(e) && e.destroy();
          (this.panels = t), this.syncDOM();
        }
        syncDOM() {
          if (0 == this.panels.length) {
            this.dom && (this.dom.remove(), (this.dom = void 0));
            return;
          }
          if (!this.dom) {
            (this.dom = document.createElement('div')),
              (this.dom.className = this.top
                ? 'cm-panels cm-panels-top'
                : 'cm-panels cm-panels-bottom'),
              (this.dom.style[this.top ? 'top' : 'bottom'] = '0');
            let t = this.container || this.view.dom;
            t.insertBefore(this.dom, this.top ? t.firstChild : null);
          }
          let t = this.dom.firstChild;
          for (let e of this.panels)
            if (e.dom.parentNode == this.dom) {
              for (; t != e.dom; ) t = i5(t);
              t = t.nextSibling;
            } else this.dom.insertBefore(e.dom, t);
          for (; t; ) t = i5(t);
        }
        scrollMargin() {
          return !this.dom || this.container
            ? 0
            : Math.max(
                0,
                this.top
                  ? this.dom.getBoundingClientRect().bottom -
                      Math.max(
                        0,
                        this.view.scrollDOM.getBoundingClientRect().top
                      )
                  : Math.min(
                      innerHeight,
                      this.view.scrollDOM.getBoundingClientRect().bottom
                    ) - this.dom.getBoundingClientRect().top
              );
        }
        syncClasses() {
          if (this.container && this.classes != this.view.themeClasses) {
            for (let t of this.classes.split(' '))
              t && this.container.classList.remove(t);
            for (let t of (this.classes = this.view.themeClasses).split(' '))
              t && this.container.classList.add(t);
          }
        }
      }
      function i5(t) {
        let e = t.nextSibling;
        return t.remove(), e;
      }
      let i4 = l.r$.define({enables: i3});
      class i6 extends l.uU {
        compare(t) {
          return this == t || (this.constructor == t.constructor && this.eq(t));
        }
        eq(t) {
          return !1;
        }
        destroy(t) {}
      }
      (i6.prototype.elementClass = ''),
        (i6.prototype.toDOM = void 0),
        (i6.prototype.mapMode = l.gc.TrackBefore),
        (i6.prototype.startSide = i6.prototype.endSide = -1),
        (i6.prototype.point = !0);
      let i7 = l.r$.define(),
        st = {
          class: '',
          renderEmptyElements: !1,
          elementStyle: '',
          markers: () => l.Xs.empty,
          lineMarker: () => null,
          lineMarkerChange: null,
          initialSpacer: null,
          updateSpacer: null,
          domEventHandlers: {},
        },
        se = l.r$.define();
      function si(t) {
        return [so(), se.of(Object.assign(Object.assign({}, st), t))];
      }
      let ss = l.r$.define({combine: (t) => t.some((t) => t)});
      function so(t) {
        let e = [sn];
        return t && !1 === t.fixed && e.push(ss.of(!0)), e;
      }
      let sn = tR.fromClass(
        class {
          constructor(t) {
            for (let e of ((this.view = t),
            (this.prevViewport = t.viewport),
            (this.dom = document.createElement('div')),
            (this.dom.className = 'cm-gutters'),
            this.dom.setAttribute('aria-hidden', 'true'),
            (this.dom.style.minHeight = this.view.contentHeight + 'px'),
            (this.gutters = t.state.facet(se).map((e) => new sa(t, e))),
            this.gutters))
              this.dom.appendChild(e.dom);
            (this.fixed = !t.state.facet(ss)),
              this.fixed && (this.dom.style.position = 'sticky'),
              this.syncGutters(!1),
              t.scrollDOM.insertBefore(this.dom, t.contentDOM);
          }
          update(t) {
            if (this.updateGutters(t)) {
              let e = this.prevViewport,
                i = t.view.viewport,
                s = Math.min(e.to, i.to) - Math.max(e.from, i.from);
              this.syncGutters(s < (i.to - i.from) * 0.8);
            }
            t.geometryChanged &&
              (this.dom.style.minHeight = this.view.contentHeight + 'px'),
              this.view.state.facet(ss) != !this.fixed &&
                ((this.fixed = !this.fixed),
                (this.dom.style.position = this.fixed ? 'sticky' : '')),
              (this.prevViewport = t.view.viewport);
          }
          syncGutters(t) {
            let e = this.dom.nextSibling;
            t && this.dom.remove();
            let i = l.Xs.iter(
                this.view.state.facet(i7),
                this.view.viewport.from
              ),
              s = [],
              o = this.gutters.map(
                (t) =>
                  new sh(t, this.view.viewport, -this.view.documentPadding.top)
              );
            for (let t of this.view.viewportLineBlocks) {
              let e;
              if (Array.isArray(t.type)) {
                for (let i of t.type)
                  if (i.type == to.Text) {
                    e = i;
                    break;
                  }
              } else e = t.type == to.Text ? t : void 0;
              if (e)
                for (let n of (s.length && (s = []), sl(i, s, t.from), o))
                  n.line(this.view, e, s);
            }
            for (let t of o) t.finish();
            t && this.view.scrollDOM.insertBefore(this.dom, e);
          }
          updateGutters(t) {
            let e = t.startState.facet(se),
              i = t.state.facet(se),
              s =
                t.docChanged ||
                t.heightChanged ||
                t.viewportChanged ||
                !l.Xs.eq(
                  t.startState.facet(i7),
                  t.state.facet(i7),
                  t.view.viewport.from,
                  t.view.viewport.to
                );
            if (e == i) for (let e of this.gutters) e.update(t) && (s = !0);
            else {
              s = !0;
              let o = [];
              for (let s of i) {
                let i = e.indexOf(s);
                i < 0
                  ? o.push(new sa(this.view, s))
                  : (this.gutters[i].update(t), o.push(this.gutters[i]));
              }
              for (let t of this.gutters)
                t.dom.remove(), 0 > o.indexOf(t) && t.destroy();
              for (let t of o) this.dom.appendChild(t.dom);
              this.gutters = o;
            }
            return s;
          }
          destroy() {
            for (let t of this.gutters) t.destroy();
            this.dom.remove();
          }
        },
        {
          provide: (t) =>
            il.scrollMargins.of((e) => {
              let i = e.plugin(t);
              return i && 0 != i.gutters.length && i.fixed
                ? e.textDirection == tI.LTR
                  ? {left: i.dom.offsetWidth}
                  : {right: i.dom.offsetWidth}
                : null;
            }),
        }
      );
      function sr(t) {
        return Array.isArray(t) ? t : [t];
      }
      function sl(t, e, i) {
        for (; t.value && t.from <= i; )
          t.from == i && e.push(t.value), t.next();
      }
      class sh {
        constructor(t, e, i) {
          (this.gutter = t),
            (this.height = i),
            (this.i = 0),
            (this.cursor = l.Xs.iter(t.markers, e.from));
        }
        line(t, e, i) {
          let s = [];
          sl(this.cursor, s, e.from), i.length && (s = s.concat(i));
          let o = this.gutter.config.lineMarker(t, e, s);
          o && s.unshift(o);
          let n = this.gutter;
          if (0 == s.length && !n.config.renderEmptyElements) return;
          let r = e.top - this.height;
          if (this.i == n.elements.length) {
            let i = new sc(t, e.height, r, s);
            n.elements.push(i), n.dom.appendChild(i.dom);
          } else n.elements[this.i].update(t, e.height, r, s);
          (this.height = e.bottom), this.i++;
        }
        finish() {
          let t = this.gutter;
          for (; t.elements.length > this.i; ) {
            let e = t.elements.pop();
            t.dom.removeChild(e.dom), e.destroy();
          }
        }
      }
      class sa {
        constructor(t, e) {
          for (let i in ((this.view = t),
          (this.config = e),
          (this.elements = []),
          (this.spacer = null),
          (this.dom = document.createElement('div')),
          (this.dom.className =
            'cm-gutter' + (this.config.class ? ' ' + this.config.class : '')),
          e.domEventHandlers))
            this.dom.addEventListener(i, (s) => {
              let o = s.target,
                n;
              if (o != this.dom && this.dom.contains(o)) {
                for (; o.parentNode != this.dom; ) o = o.parentNode;
                let t = o.getBoundingClientRect();
                n = (t.top + t.bottom) / 2;
              } else n = s.clientY;
              let r = t.lineBlockAtHeight(n - t.documentTop);
              e.domEventHandlers[i](t, r, s) && s.preventDefault();
            });
          (this.markers = sr(e.markers(t))),
            e.initialSpacer &&
              ((this.spacer = new sc(t, 0, 0, [e.initialSpacer(t)])),
              this.dom.appendChild(this.spacer.dom),
              (this.spacer.dom.style.cssText +=
                'visibility: hidden; pointer-events: none'));
        }
        update(t) {
          let e = this.markers;
          if (
            ((this.markers = sr(this.config.markers(t.view))),
            this.spacer && this.config.updateSpacer)
          ) {
            let e = this.config.updateSpacer(this.spacer.markers[0], t);
            e != this.spacer.markers[0] &&
              this.spacer.update(t.view, 0, 0, [e]);
          }
          let i = t.view.viewport;
          return (
            !l.Xs.eq(this.markers, e, i.from, i.to) ||
            (!!this.config.lineMarkerChange && this.config.lineMarkerChange(t))
          );
        }
        destroy() {
          for (let t of this.elements) t.destroy();
        }
      }
      class sc {
        constructor(t, e, i, s) {
          (this.height = -1),
            (this.above = 0),
            (this.markers = []),
            (this.dom = document.createElement('div')),
            (this.dom.className = 'cm-gutterElement'),
            this.update(t, e, i, s);
        }
        update(t, e, i, s) {
          this.height != e &&
            (this.dom.style.height = (this.height = e) + 'px'),
            this.above != i &&
              (this.dom.style.marginTop = (this.above = i) ? i + 'px' : ''),
            !(function (t, e) {
              if (t.length != e.length) return !1;
              for (let i = 0; i < t.length; i++)
                if (!t[i].compare(e[i])) return !1;
              return !0;
            })(this.markers, s) && this.setMarkers(t, s);
        }
        setMarkers(t, e) {
          let i = 'cm-gutterElement',
            s = this.dom.firstChild;
          for (let o = 0, n = 0; ; ) {
            let r = n,
              l = o < e.length ? e[o++] : null,
              h = !1;
            if (l) {
              let t = l.elementClass;
              t && (i += ' ' + t);
              for (let t = n; t < this.markers.length; t++)
                if (this.markers[t].compare(l)) {
                  (r = t), (h = !0);
                  break;
                }
            } else r = this.markers.length;
            for (; n < r; ) {
              let t = this.markers[n++];
              if (t.toDOM) {
                t.destroy(s);
                let e = s.nextSibling;
                s.remove(), (s = e);
              }
            }
            if (!l) break;
            l.toDOM &&
              (h ? (s = s.nextSibling) : this.dom.insertBefore(l.toDOM(t), s)),
              h && n++;
          }
          (this.dom.className = i), (this.markers = e);
        }
        destroy() {
          this.setMarkers(null, []);
        }
      }
      let sd = l.r$.define(),
        su = l.r$.define({
          combine: (t) =>
            (0, l.BO)(
              t,
              {formatNumber: String, domEventHandlers: {}},
              {
                domEventHandlers(t, e) {
                  let i = Object.assign({}, t);
                  for (let t in e) {
                    let s = i[t],
                      o = e[t];
                    i[t] = s ? (t, e, i) => s(t, e, i) || o(t, e, i) : o;
                  }
                  return i;
                },
              }
            ),
        });
      class sf extends i6 {
        constructor(t) {
          super(), (this.number = t);
        }
        eq(t) {
          return this.number == t.number;
        }
        toDOM() {
          return document.createTextNode(this.number);
        }
      }
      function sp(t, e) {
        return t.state.facet(su).formatNumber(e, t.state);
      }
      let sg = se.compute([su], (t) => ({
        class: 'cm-lineNumbers',
        renderEmptyElements: !1,
        markers: (t) => t.state.facet(sd),
        lineMarker: (t, e, i) =>
          i.some((t) => t.toDOM)
            ? null
            : new sf(sp(t, t.state.doc.lineAt(e.from).number)),
        lineMarkerChange: (t) => t.startState.facet(su) != t.state.facet(su),
        initialSpacer: (t) => new sf(sp(t, sv(t.state.doc.lines))),
        updateSpacer(t, e) {
          let i = sp(e.view, sv(e.view.state.doc.lines));
          return i == t.number ? t : new sf(i);
        },
        domEventHandlers: t.facet(su).domEventHandlers,
      }));
      function sm(t = {}) {
        return [su.of(t), so(), sg];
      }
      function sv(t) {
        let e = 9;
        for (; e < t; ) e = 10 * e + 9;
        return e;
      }
    },
  },
]);
