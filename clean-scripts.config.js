const { Service, execAsync } = require('clean-scripts')

const tsFiles = `"src/**/*.ts" "src/**/*.tsx" "spec/**/*.ts" "demo/**/*.ts" "demo/**/*.tsx" "screenshots/**/*.ts"`
const lessFiles = `"src/**/*.less"`
const jsFiles = `"*.config.js" "demo/*.config.js" "spec/**/*.config.js"`

const templateCommand = `file2variable-cli src/vue.template.html -o src/vue-variables.ts --html-minify --base src`
const tscSrcCommand = `tsc -p src`
const tscDemoCommand = `tsc -p demo`
const webpackCommand = `webpack --display-modules --config demo/webpack.config.js`
const revStaticCommand = `rev-static --config demo/rev-static.config.js`

module.exports = {
  build: [
    `rimraf dist`,
    `mkdirp dist`,
    {
      js: [
        templateCommand,
        tscSrcCommand,
        tscDemoCommand,
        webpackCommand
      ],
      css: [
        `lessc src/tab-container.less > src/tab-container.css`,
        `postcss src/tab-container.css -o dist/tab-container.css`,
        `cleancss -o dist/tab-container.min.css dist/tab-container.css`,
        `cleancss -o demo/index.bundle.css dist/tab-container.min.css ./node_modules/github-fork-ribbon-css/gh-fork-ribbon.css`
      ],
      clean: `rimraf demo/**/index.bundle-*.js demo/*.bundle-*.css`
    },
    revStaticCommand
  ],
  lint: {
    ts: `tslint ${tsFiles}`,
    js: `standard ${jsFiles}`,
    less: `stylelint ${lessFiles}`,
    export: `no-unused-export ${tsFiles} ${lessFiles} --exclude "src/compiled/**/*"`
  },
  test: [
    'tsc -p spec',
    'karma start spec/karma.config.js',
    async () => {
      const { stdout } = await execAsync('git status -s')
      if (stdout) {
        console.log(stdout)
        throw new Error(`generated files doesn't match.`)
      }
    }
  ],
  fix: {
    ts: `tslint --fix ${tsFiles}`,
    js: `standard --fix ${jsFiles}`,
    less: `stylelint --fix ${lessFiles}`
  },
  release: `clean-release`,
  watch: {
    vue: `${templateCommand} --watch`,
    src: `${tscSrcCommand} --watch`,
    demo: `${tscDemoCommand} --watch`,
    webpack: `${webpackCommand} --watch`,
    less: `watch-then-execute ${lessFiles} --script "clean-scripts build[2].css"`,
    rev: `${revStaticCommand} --watch`
  },
  screenshot: [
    new Service(`http-server -p 8000`),
    `tsc -p screenshots`,
    `node screenshots/index.js`
  ]
}
