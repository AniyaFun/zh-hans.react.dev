(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    6840: function (e, n, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/_app',
        function () {
          return t(9212);
        },
      ]);
    },
    9212: function (e, n, t) {
      'use strict';
      t.r(n),
        t.d(n, {
          default: function () {
            return r;
          },
        });
      var o = t(85893),
        u = t(67294),
        i = t(11163);
      t(33616), t(49976), t(83077), t(44566);
      {
        let e = 'onpagehide' in window ? 'pagehide' : 'unload';
        window.addEventListener(e, function () {
          gtag('event', 'timing', {
            event_label: 'JS Dependencies',
            event: 'unload',
          });
        });
      }
      function r(e) {
        let {Component: n, pageProps: t} = e,
          r = (0, i.useRouter)();
        return (
          (0, u.useEffect)(() => {
            let e = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
            e && (history.scrollRestoration = 'auto');
          }, []),
          (0, u.useEffect)(() => {
            let e = (e) => {
              let n = e.split(/[\?\#]/)[0];
              gtag('event', 'pageview', {event_label: n});
            };
            return (
              r.events.on('routeChangeComplete', e),
              () => {
                r.events.off('routeChangeComplete', e);
              }
            );
          }, [r.events]),
          (0, o.jsx)(n, {...t})
        );
      }
      i.Router.events.on('routeChangeComplete', (e) => {
        try {
          window._hmt.push(['_trackPageview', e]);
        } catch (e) {}
      });
    },
    33616: function () {},
    49976: function () {},
    83077: function () {},
    44566: function () {},
    11163: function (e, n, t) {
      e.exports = t(96885);
    },
  },
  function (e) {
    var n = function (n) {
      return e((e.s = n));
    };
    e.O(0, [774, 179], function () {
      return n(6840), n(96885);
    }),
      (_N_E = e.O());
  },
]);
