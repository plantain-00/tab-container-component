import { ConfigData } from 'rev-static'

const config: ConfigData = {
  inputFiles: [
    'packages/@(vue|react|angular)/demo/**/*.bundle.js',
    'packages/@(vue|react|angular)/demo/**/*.ejs.html',
    'packages/core/demo/*.bundle.css'
  ],
  outputFiles: (file) => file.replace('.ejs', ''),
  ejsOptions: {
    rmWhitespace: true
  },
  sha: 256,
  customNewFileName: (filePath, fileString, md5String, baseName, extensionName) => baseName + '-' + md5String + extensionName,
  base: 'packages',
  fileSize: 'file-size.json'
}

export default config
