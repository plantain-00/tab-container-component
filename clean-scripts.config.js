const childProcess = require('child_process')
const util = require('util')
const { Service } = require('clean-scripts')

const execAsync = util.promisify(childProcess.exec)

module.exports = {
  build: [
    `rimraf dist`,
    `mkdirp dist`,
    {
      js: [
        `file2variable-cli src/vue.template.html -o src/vue-variables.ts --html-minify --base src`,
        `tsc -p src`,
        `tsc -p demo`,
        `webpack --display-modules --config demo/webpack.config.js`
      ],
      css: [
        `lessc src/tab-container.less > src/tab-container.css`,
        `postcss src/tab-container.css -o dist/tab-container.css`,
        `cleancss -o dist/tab-container.min.css dist/tab-container.css`,
        `cleancss -o demo/index.bundle.css dist/tab-container.min.css ./node_modules/github-fork-ribbon-css/gh-fork-ribbon.css`
      ],
      clean: `rimraf demo/**/index.bundle-*.js demo/*.bundle-*.css`
    },
    `rev-static --config demo/rev-static.config.js`
  ],
  lint: {
    ts: `tslint "src/**/*.ts" "src/**/*.tsx" "spec/**/*.ts" "demo/**/*.ts" "demo/**/*.tsx"`,
    js: `standard "**/*.config.js"`,
    less: `stylelint "src/**/*.less"`,
    export: `no-unused-export "src/**/*.ts" "src/**/*.tsx" "spec/**/*.ts" "demo/**/*.ts" "demo/**/*.tsx" --exclude "src/compiled/**/*"`
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
    ts: `tslint --fix "src/**/*.ts" "src/**/*.tsx"`,
    js: `standard --fix "**/*.config.js"`,
    less: `stylelint --fix "src/**/*.less"`
  },
  release: `clean-release`,
  watch: {
    vue: `file2variable-cli src/vue.template.html -o src/vue-variables.ts --html-minify --base src --watch`,
    src: `tsc -p src --watch`,
    demo: `tsc -p demo --watch`,
    webpack: `webpack --config demo/webpack.config.js --watch`,
    less: `watch-then-execute "src/tab-container.less" --script "clean-scripts build[2].css"`,
    rev: `rev-static --config demo/rev-static.config.js --watch`
  },
  screenshot: [
    new Service(`http-server -p 8000`),
    `tsc -p screenshots`,
    `node screenshots/index.js`
  ]
}
