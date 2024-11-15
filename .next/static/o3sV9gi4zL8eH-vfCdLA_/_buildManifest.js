(self.__BUILD_MANIFEST = (function (r, s) {
  return {
    __rewrites: {beforeFiles: [], afterFiles: [], fallback: []},
    '/404': [r, s, 'static/chunks/pages/404-893f506ad2c32d1f.js'],
    '/500': [r, s, 'static/chunks/pages/500-199663de87d9ce6a.js'],
    '/_error': ['static/chunks/pages/_error-3f6d1c55bb8051ab.js'],
    '/errors': [r, s, 'static/chunks/pages/errors-9711d6056dd2e14a.js'],
    '/errors/[errorCode]': [
      r,
      s,
      'static/chunks/pages/errors/[errorCode]-f6887867f864650b.js',
    ],
    '/[[...markdownPath]]': [
      r,
      s,
      'static/chunks/pages/[[...markdownPath]]-3fa615249ba59b83.js',
    ],
    sortedPages: [
      '/404',
      '/500',
      '/_app',
      '/_error',
      '/errors',
      '/errors/[errorCode]',
      '/[[...markdownPath]]',
    ],
  };
})(
  'static/chunks/181-0c884f228c508338.js',
  'static/chunks/962-d27b3139d5233d22.js'
)),
  self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();
