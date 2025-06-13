
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
    'index.csr.html': {size: 5100, hash: '229f89a81f210db0a2551cbbb4d63553de021ec8254aa7ef8d61cfb87bb1f933', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1072, hash: '8f2ba5e8c1960f10f04eeda6ec765f6bbc6532b4e2d0132ed72616ea97d6ca89', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 5274, hash: '107d672f3e8d008065ad54860603b68cde113d7f17ae1876736a7ab12da6e690', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-TOYZCXSI.css': {size: 231022, hash: 'fMqoBOUBlpE', text: () => import('./assets-chunks/styles-TOYZCXSI_css.mjs').then(m => m.default)}
  },
};
