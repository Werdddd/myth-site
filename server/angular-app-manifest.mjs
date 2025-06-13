
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/myth-site/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/myth-site"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5100, hash: '6202ed7f8369cb72967637724c6064b2294c3b18c06b3f6a93bffbdfc9f53cb0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1072, hash: 'b0b4846fd8bd887f036594a8b83e2deadef92edd0ca963f2ea2ab0d522b7d487', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 5274, hash: '107d672f3e8d008065ad54860603b68cde113d7f17ae1876736a7ab12da6e690', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-TOYZCXSI.css': {size: 231022, hash: 'fMqoBOUBlpE', text: () => import('./assets-chunks/styles-TOYZCXSI_css.mjs').then(m => m.default)}
  },
};
