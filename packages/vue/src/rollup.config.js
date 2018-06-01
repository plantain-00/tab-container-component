import { uglify } from 'rollup-plugin-uglify'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export default {
  input: 'packages/vue/dist/index.js',
  name: 'TabContainer',
  plugins: [
    resolve(),
    uglify(),
    commonjs()
  ],
  output: {
    file: 'packages/vue/dist/tab-container-vue-component.min.js',
    format: 'umd'
  },
  external: [
    'vue',
    'vue-class-component'
  ],
  globals: {
    'vue-class-component': 'VueClassComponent'
  }
}
