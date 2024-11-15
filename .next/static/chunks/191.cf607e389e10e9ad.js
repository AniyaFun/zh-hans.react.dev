'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [191],
  {
    32308: function (e, t, n) {
      n.d(t, {
        S: function () {
          return o;
        },
      });
      var i = n(38471),
        o = (function () {
          function e(e, t, n) {
            void 0 === n && (n = {}),
              (this.status = 'idle'),
              (this.options = n),
              (this.sandboxSetup = t),
              (this.iframeSelector = e);
          }
          return (
            (e.prototype.updateOptions = function (e) {
              (0, i.J)(this.options, e) ||
                ((this.options = e), this.updateSandbox());
            }),
            (e.prototype.updateSandbox = function (e, t) {
              throw (
                (void 0 === e && (e = this.sandboxSetup),
                Error('Method not implemented'))
              );
            }),
            (e.prototype.destroy = function () {
              throw Error('Method not implemented');
            }),
            (e.prototype.dispatch = function (e) {
              throw Error('Method not implemented');
            }),
            (e.prototype.listen = function (e) {
              throw Error('Method not implemented');
            }),
            e
          );
        })();
    },
    52191: function (e, t, n) {
      n.r(t),
        n.d(t, {
          SandpackRuntime: function () {
            return d;
          },
        });
      var i = n(51869),
        o = n(38471),
        s = n(32308);
      n(95002);
      var r = (function () {
          function e(e, t, n) {
            var o = this;
            (this.type = e),
              (this.handleMessage = t),
              (this.protocol = n),
              (this._disposeMessageListener = this.protocol.channelListen(
                function (e) {
                  return (0, i._)(o, void 0, void 0, function () {
                    var t, n, o, s;
                    return (0, i.a)(this, function (i) {
                      switch (i.label) {
                        case 0:
                          if (!(e.type === this.getTypeId() && e.method))
                            return [3, 4];
                          (t = e), (i.label = 1);
                        case 1:
                          return (
                            i.trys.push([1, 3, , 4]), [4, this.handleMessage(t)]
                          );
                        case 2:
                          return (
                            (n = i.sent()),
                            (o = {
                              type: this.getTypeId(),
                              msgId: t.msgId,
                              result: n,
                            }),
                            this.protocol.dispatch(o),
                            [3, 4]
                          );
                        case 3:
                          return (
                            (s = i.sent()),
                            (o = {
                              type: this.getTypeId(),
                              msgId: t.msgId,
                              error: {message: s.message},
                            }),
                            this.protocol.dispatch(o),
                            [3, 4]
                          );
                        case 4:
                          return [2];
                      }
                    });
                  });
                }
              ));
          }
          return (
            (e.prototype.getTypeId = function () {
              return 'protocol-'.concat(this.type);
            }),
            (e.prototype.dispose = function () {
              this._disposeMessageListener();
            }),
            e
          );
        })(),
        a = (function () {
          function e(e, t) {
            (this.globalListeners = {}),
              (this.globalListenersCount = 0),
              (this.channelListeners = {}),
              (this.channelListenersCount = 0),
              (this.channelId = Math.floor(1e6 * Math.random())),
              (this.frameWindow = e.contentWindow),
              (this.origin = t),
              (this.globalListeners = []),
              (this.channelListeners = []),
              (this.eventListener = this.eventListener.bind(this)),
              'undefined' != typeof window &&
                window.addEventListener('message', this.eventListener);
          }
          return (
            (e.prototype.cleanup = function () {
              window.removeEventListener('message', this.eventListener),
                (this.globalListeners = {}),
                (this.channelListeners = {}),
                (this.globalListenersCount = 0),
                (this.channelListenersCount = 0);
            }),
            (e.prototype.register = function () {
              this.frameWindow &&
                this.frameWindow.postMessage(
                  {
                    type: 'register-frame',
                    origin: document.location.origin,
                    id: this.channelId,
                  },
                  this.origin
                );
            }),
            (e.prototype.dispatch = function (e) {
              this.frameWindow &&
                this.frameWindow.postMessage(
                  (0, i.h)({$id: this.channelId, codesandbox: !0}, e),
                  this.origin
                );
            }),
            (e.prototype.globalListen = function (e) {
              var t = this;
              if ('function' != typeof e) return function () {};
              var n = this.globalListenersCount;
              return (
                (this.globalListeners[n] = e),
                this.globalListenersCount++,
                function () {
                  delete t.globalListeners[n];
                }
              );
            }),
            (e.prototype.channelListen = function (e) {
              var t = this;
              if ('function' != typeof e) return function () {};
              var n = this.channelListenersCount;
              return (
                (this.channelListeners[n] = e),
                this.channelListenersCount++,
                function () {
                  delete t.channelListeners[n];
                }
              );
            }),
            (e.prototype.eventListener = function (e) {
              if (e.source === this.frameWindow) {
                var t = e.data;
                t.codesandbox &&
                  (Object.values(this.globalListeners).forEach(function (e) {
                    return e(t);
                  }),
                  t.$id === this.channelId &&
                    Object.values(this.channelListeners).forEach(function (e) {
                      return e(t);
                    }));
              }
            }),
            e
          );
        })(),
        c = 'https://'.concat(
          '2.13.2'.replace(/\./g, '-'),
          '-sandpack.codesandbox.io/'
        ),
        d = (function (e) {
          function t(t, n, o) {
            void 0 === o && (o = {});
            var s = e.call(this, t, n, o) || this;
            if (
              ((s.getTranspilerContext = function () {
                return new Promise(function (e) {
                  var t = s.listen(function (n) {
                    'transpiler-context' === n.type && (e(n.data), t());
                  });
                  s.dispatch({type: 'get-transpiler-context'});
                });
              }),
              (s.bundlerURL = o.bundlerURL || c),
              o.teamId &&
                (s.bundlerURL =
                  s.bundlerURL.replace(
                    'https://',
                    'https://' + o.teamId + '-'
                  ) + '?cache='.concat(Date.now())),
              (s.bundlerState = void 0),
              (s.errors = []),
              (s.status = 'initializing'),
              'string' == typeof t)
            ) {
              s.selector = t;
              var d = document.querySelector(t);
              (0, i.n)(d, "The element '".concat(t, "' was not found")),
                (s.element = d),
                (s.iframe = document.createElement('iframe')),
                s.initializeElement();
            } else (s.element = t), (s.iframe = t);
            return (
              s.iframe.getAttribute('sandbox') ||
                (s.iframe.setAttribute(
                  'sandbox',
                  'allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts allow-downloads allow-pointer-lock'
                ),
                s.iframe.setAttribute(
                  'allow',
                  'accelerometer; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; clipboard-write;'
                )),
              s.setLocationURLIntoIFrame(),
              (s.iframeProtocol = new a(s.iframe, s.bundlerURL)),
              (s.unsubscribeGlobalListener = s.iframeProtocol.globalListen(
                function (e) {
                  'initialized' === e.type &&
                    s.iframe.contentWindow &&
                    (s.iframeProtocol.register(),
                    s.options.fileResolver &&
                      (s.fileResolverProtocol = new r(
                        'fs',
                        function (e) {
                          return (0, i._)(s, void 0, void 0, function () {
                            return (0, i.a)(this, function (t) {
                              if ('isFile' === e.method)
                                return [
                                  2,
                                  this.options.fileResolver.isFile(e.params[0]),
                                ];
                              if ('readFile' === e.method)
                                return [
                                  2,
                                  this.options.fileResolver.readFile(
                                    e.params[0]
                                  ),
                                ];
                              throw Error('Method not supported');
                            });
                          });
                        },
                        s.iframeProtocol
                      )),
                    s.updateSandbox(s.sandboxSetup, !0));
                }
              )),
              (s.unsubscribeChannelListener = s.iframeProtocol.channelListen(
                function (e) {
                  switch (e.type) {
                    case 'start':
                      s.errors = [];
                      break;
                    case 'status':
                      s.status = e.status;
                      break;
                    case 'action':
                      'show-error' === e.action &&
                        (s.errors = (0, i.i)(
                          (0, i.i)([], s.errors, !0),
                          [(0, i.e)(e)],
                          !1
                        ));
                      break;
                    case 'done':
                      s.status = 'done';
                      break;
                    case 'state':
                      s.bundlerState = e.state;
                  }
                }
              )),
              s
            );
          }
          return (
            (0, i.g)(t, e),
            (t.prototype.setLocationURLIntoIFrame = function () {
              var e,
                t = this.options.startRoute
                  ? new URL(this.options.startRoute, this.bundlerURL).toString()
                  : this.bundlerURL;
              null === (e = this.iframe.contentWindow) ||
                void 0 === e ||
                e.location.replace(t),
                (this.iframe.src = t);
            }),
            (t.prototype.destroy = function () {
              this.unsubscribeChannelListener(),
                this.unsubscribeGlobalListener(),
                this.iframeProtocol.cleanup();
            }),
            (t.prototype.updateOptions = function (e) {
              (0, o.J)(this.options, e) ||
                ((this.options = e), this.updateSandbox());
            }),
            (t.prototype.updateSandbox = function (e, t) {
              void 0 === e && (e = this.sandboxSetup),
                (this.sandboxSetup = (0, i.h)(
                  (0, i.h)({}, this.sandboxSetup),
                  e
                ));
              var n,
                o,
                s,
                r,
                a = this.getFiles(),
                c = Object.keys(a).reduce(function (e, t) {
                  var n;
                  return (0,
                  i.h)((0, i.h)({}, e), (((n = {})[t] = {code: a[t].code, path: t}), n));
                }, {}),
                d = JSON.parse(
                  (0, i.b)(
                    this.sandboxSetup.dependencies,
                    this.sandboxSetup.devDependencies,
                    this.sandboxSetup.entry
                  )
                );
              try {
                d = JSON.parse(a['/package.json'].code);
              } catch (e) {
                console.error(
                  (0, i.c)('could not parse package.json file: ' + e.message)
                );
              }
              var l = Object.keys(a).reduce(function (e, t) {
                var n;
                return (0,
                i.h)((0, i.h)({}, e), (((n = {})[t] = {content: a[t].code, path: t}), n));
              }, {});
              this.dispatch(
                (0, i.h)((0, i.h)({}, this.options), {
                  type: 'compile',
                  codesandbox: !0,
                  version: 3,
                  isInitializationCompile: t,
                  modules: c,
                  reactDevTools: this.options.reactDevTools,
                  externalResources: this.options.externalResources || [],
                  hasFileResolver: !!this.options.fileResolver,
                  disableDependencyPreprocessing:
                    this.sandboxSetup.disableDependencyPreprocessing,
                  template:
                    this.sandboxSetup.template ||
                    (function (e, t) {
                      if (!e) return 'static';
                      var n = e.dependencies,
                        o = void 0 === n ? {} : n,
                        s = e.devDependencies,
                        r = (0, i.i)(
                          (0, i.i)([], Object.keys(o), !0),
                          Object.keys(void 0 === s ? {} : s),
                          !0
                        ),
                        a = Object.keys(t),
                        c = ['@adonisjs/framework', '@adonisjs/core'];
                      if (
                        r.some(function (e) {
                          return c.indexOf(e) > -1;
                        })
                      )
                        return 'adonis';
                      var d = [
                        'nuxt',
                        'nuxt-edge',
                        'nuxt-ts',
                        'nuxt-ts-edge',
                        'nuxt3',
                      ];
                      if (
                        r.some(function (e) {
                          return d.indexOf(e) > -1;
                        })
                      )
                        return 'nuxt';
                      if (r.indexOf('next') > -1) return 'next';
                      var l = [
                        'apollo-server',
                        'apollo-server-express',
                        'apollo-server-hapi',
                        'apollo-server-koa',
                        'apollo-server-lambda',
                        'apollo-server-micro',
                      ];
                      if (
                        r.some(function (e) {
                          return l.indexOf(e) > -1;
                        })
                      )
                        return 'apollo';
                      if (r.indexOf('mdx-deck') > -1) return 'mdx-deck';
                      if (r.indexOf('gridsome') > -1) return 'gridsome';
                      if (r.indexOf('vuepress') > -1) return 'vuepress';
                      if (r.indexOf('ember-cli') > -1) return 'ember';
                      if (r.indexOf('sapper') > -1) return 'sapper';
                      if (r.indexOf('gatsby') > -1) return 'gatsby';
                      if (r.indexOf('quasar') > -1) return 'quasar';
                      if (r.indexOf('@docusaurus/core') > -1)
                        return 'docusaurus';
                      if (r.indexOf('remix') > -1) return 'remix';
                      if (r.indexOf('astro') > -1) return 'node';
                      if (
                        a.some(function (e) {
                          return e.endsWith('.re');
                        })
                      )
                        return 'reason';
                      var u = ['parcel-bundler', 'parcel'];
                      if (
                        r.some(function (e) {
                          return u.indexOf(e) > -1;
                        })
                      )
                        return 'parcel';
                      var p = ['@dojo/core', '@dojo/framework'];
                      if (
                        r.some(function (e) {
                          return p.indexOf(e) > -1;
                        })
                      )
                        return '@dojo/cli-create-app';
                      if (
                        r.indexOf('@nestjs/core') > -1 ||
                        r.indexOf('@nestjs/common') > -1
                      )
                        return 'nest';
                      if (r.indexOf('react-styleguidist') > -1)
                        return 'styleguidist';
                      if (r.indexOf('react-scripts') > -1)
                        return 'create-react-app';
                      if (r.indexOf('react-scripts-ts') > -1)
                        return 'create-react-app-typescript';
                      if (r.indexOf('@angular/core') > -1) return 'angular-cli';
                      if (r.indexOf('preact-cli') > -1) return 'preact-cli';
                      if (
                        r.indexOf('@sveltech/routify') > -1 ||
                        r.indexOf('@roxi/routify') > -1 ||
                        r.indexOf('vite') > -1 ||
                        r.indexOf('@frontity/core') > -1
                      )
                        return 'node';
                      if (r.indexOf('svelte') > -1) return 'svelte';
                      if (r.indexOf('vue') > -1) return 'vue-cli';
                      if (r.indexOf('cx') > -1) return 'cxjs';
                      var h = [
                        'express',
                        'koa',
                        'nodemon',
                        'ts-node',
                        '@tensorflow/tfjs-node',
                        'webpack-dev-server',
                        'snowpack',
                      ];
                      if (
                        r.some(function (e) {
                          return h.indexOf(e) > -1;
                        }) ||
                        Object.keys(o).length >= 50
                      )
                        return 'node';
                    })(d, l),
                  showOpenInCodeSandbox:
                    null === (n = this.options.showOpenInCodeSandbox) ||
                    void 0 === n ||
                    n,
                  showErrorScreen:
                    null === (o = this.options.showErrorScreen) ||
                    void 0 === o ||
                    o,
                  showLoadingScreen:
                    null !== (s = this.options.showLoadingScreen) &&
                    void 0 !== s &&
                    s,
                  skipEval: this.options.skipEval || !1,
                  clearConsoleDisabled:
                    !this.options.clearConsoleOnFirstCompile,
                  logLevel:
                    null !== (r = this.options.logLevel) && void 0 !== r
                      ? r
                      : i.S.Info,
                  customNpmRegistries: this.options.customNpmRegistries,
                  teamId: this.options.teamId,
                  sandboxId: this.options.sandboxId,
                })
              );
            }),
            (t.prototype.dispatch = function (e) {
              'refresh' === e.type && this.setLocationURLIntoIFrame(),
                this.iframeProtocol.dispatch(e);
            }),
            (t.prototype.listen = function (e) {
              return this.iframeProtocol.channelListen(e);
            }),
            (t.prototype.getCodeSandboxURL = function () {
              var e = this.getFiles(),
                t = Object.keys(e).reduce(function (t, n) {
                  var o;
                  return (0,
                  i.h)((0, i.h)({}, t), (((o = {})[n.replace('/', '')] = {content: e[n].code, isBinary: !1}), o));
                }, {});
              return fetch(
                'https://codesandbox.io/api/v1/sandboxes/define?json=1',
                {
                  method: 'POST',
                  body: JSON.stringify({files: t}),
                  headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                  },
                }
              )
                .then(function (e) {
                  return e.json();
                })
                .then(function (e) {
                  return {
                    sandboxId: e.sandbox_id,
                    editorUrl: 'https://codesandbox.io/s/'.concat(e.sandbox_id),
                    embedUrl: 'https://codesandbox.io/embed/'.concat(
                      e.sandbox_id
                    ),
                  };
                });
            }),
            (t.prototype.getFiles = function () {
              var e = this.sandboxSetup;
              return void 0 === e.files['/package.json']
                ? (0, i.d)(e.files, e.dependencies, e.devDependencies, e.entry)
                : this.sandboxSetup.files;
            }),
            (t.prototype.initializeElement = function () {
              (this.iframe.style.border = '0'),
                (this.iframe.style.width = this.options.width || '100%'),
                (this.iframe.style.height = this.options.height || '100%'),
                (this.iframe.style.overflow = 'hidden'),
                (0, i.n)(
                  this.element.parentNode,
                  'The given iframe does not have a parent.'
                ),
                this.element.parentNode.replaceChild(this.iframe, this.element);
            }),
            t
          );
        })(s.S);
    },
  },
]);
