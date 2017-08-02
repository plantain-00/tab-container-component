module.exports = {
  build: [
    `rimraf demo/**/index.bundle-*.js demo/*.bundle-*.css`,
    `rimraf dist`,
    `file2variable-cli src/vue.template.html -o src/vue-variables.ts --html-minify --base src`,
    `tsc -p src`,
    `tsc -p demo`,
    `lessc src/tab-container.less > dist/tab-container.css`,
    `cleancss -o dist/tab-container.min.css dist/tab-container.css`,
    `cleancss -o demo/index.bundle.css dist/tab-container.min.css ./node_modules/github-fork-ribbon-css/gh-fork-ribbon.css`,
    `webpack --display-modules --config demo/webpack.config.js`,
    `rev-static --config demo/rev-static.config.js`
  ],
  lint: [
    `tslint "src/**/*.ts" "src/**/*.tsx"`,
    `standard "**/*.config.js"`,
    `stylelint "src/**/*.less"`
  ],
  test: [
    'tsc -p spec',
    'karma start spec/karma.config.js'
  ],
  fix: [
    `standard --fix "**/*.config.js"`
  ],
  release: [
    `clean-release`
  ]
}
