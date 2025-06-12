
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
    'index.csr.html': {size: 5100, hash: '82281451d2e16649141d8dc6ac7cf04cea52197f06c72fab95d362ae91e2b075', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1072, hash: 'b4981d1f896a169c6a50500a13b15dbec93033bdb96e8efa0c1f03b49125f22d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 5274, hash: '0ae94f946575be76824b116411ab63ee3a5eecb9441fcd217da5e887b4655c21', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-TOYZCXSI.css': {size: 231022, hash: 'fMqoBOUBlpE', text: () => import('./assets-chunks/styles-TOYZCXSI_css.mjs').then(m => m.default)}
  },
};
