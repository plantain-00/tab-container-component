module.exports = {
  build: [
    `rimraf dist`,
    `mkdirp dist`,
    {
      js: [
        `file2variable-cli src/vue.template.html -o src/vue-variables.ts --html-minify --base src`,
        `tsc -p src`,
        `tsc -p demo`
      ],
      css: [
        `lessc src/tab-container.less > dist/tab-container.css`,
        `cleancss -o dist/tab-container.min.css dist/tab-container.css`,
        `cleancss -o demo/index.bundle.css dist/tab-container.min.css ./node_modules/github-fork-ribbon-css/gh-fork-ribbon.css`
      ],
      clean: `rimraf demo/**/index.bundle-*.js demo/*.bundle-*.css`
    },
    `webpack --display-modules --config demo/webpack.config.js`,
    `rev-static --config demo/rev-static.config.js`
  ],
  lint: {
    ts: `tslint "src/**/*.ts" "src/**/*.tsx"`,
    js: `standard "**/*.config.js"`,
    less: `stylelint "src/**/*.less"`
  },
  test: [
    'tsc -p spec',
    'karma start spec/karma.config.js'
  ],
  fix: {
    ts: `tslint --fix "src/**/*.ts" "src/**/*.tsx"`,
    js: `standard --fix "**/*.config.js"`,
    less: `stylelint --fix "src/**/*.less"`
  },
  release: `clean-release`
}
