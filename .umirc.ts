export default {
  npmClient: 'pnpm',
  externals: {
    'react': 'var window.React',
    'react-dom': 'var window.ReactDOM',
    'prop-types': 'var window.PropTypes',
    '@alifd/next': 'var window.Next',
    '@alilc/lowcode-engine': 'var window.AliLowCodeEngine',
    '@alilc/lowcode-editor-core': 'var window.AliLowCodeEngine.common.editorCabin',
    '@alilc/lowcode-editor-skeleton': 'var window.AliLowCodeEngine.common.skeletonCabin',
    '@alilc/lowcode-designer': 'var window.AliLowCodeEngine.common.designerCabin',
    '@alilc/lowcode-engine-ext': 'var window.AliLowCodeEngineExt',
    '@ali/lowcode-engine': 'var window.AliLowCodeEngine',
    'moment': 'var window.moment',
    'lodash': 'var window._',
  },
  title: 'CMS lowcode-engine',
  styles: [
    'https://alifd.alicdn.com/npm/@alilc/lowcode-engine@latest/dist/css/engine-core.css',
    'https://g.alicdn.com/code/lib/alifd__next/1.23.24/next.min.css',
    'https://alifd.alicdn.com/npm/@alifd/theme-lowcode-light/0.2.0/next.min.css',
    'https://alifd.alicdn.com/npm/@alilc/lowcode-engine-ext@latest/dist/css/engine-ext.css'
  ],
  scripts: [
    {
      src: 'https://g.alicdn.com/code/lib/react/18.0.0/umd/react.development.js',
      defer: false,
    },
    {
      src: 'https://g.alicdn.com/code/lib/react-dom/18.0.0/umd/react-dom.development.js',
      defer: false,
    },
    {
      src: 'https://g.alicdn.com/code/lib/prop-types/15.7.2/prop-types.js',
      defer: false,
    },
    {
      src: 'https://g.alicdn.com/platform/c/react15-polyfill/0.0.1/dist/index.js',
      defer: false,
    },
    {
      src: 'https://g.alicdn.com/platform/c/lodash/4.6.1/lodash.min.js',
      defer: false,
    },
    {
      src: 'https://g.alicdn.com/code/lib/moment.js/2.29.1/moment-with-locales.min.js',
      defer: false,
    },
    {
      src: 'https://g.alicdn.com/code/lib/alifd__next/1.23.24/next.min.js',
      defer: false,
    },
    {
      src: 'https://alifd.alicdn.com/npm/@alilc/lowcode-engine@latest/dist/js/engine-core.js',
      defer: false,
    },
    {
      src: 'https://alifd.alicdn.com/npm/@alilc/lowcode-engine-ext@latest/dist/js/engine-ext.js',
      defer: false,
    }
  ]
};
