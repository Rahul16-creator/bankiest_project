const path = require("path");

module.exports = {
  root: path.resolve(__dirname, "../"),
  outputPath: path.resolve(__dirname,"..", "dist"),
  prodOutputPath: path.resolve(__dirname,"..", "build"),
  entryPath: path.resolve(__dirname, "../", "src/index.js"),
  templatePath: path.resolve(__dirname, "../", "src/template/index.html"),
  faviconPath: path.resolve(__dirname, '../', 'src/assets/icon.png'),
  imagesFolder: 'images',
  fontsFolder: 'fonts',
  cssFolder: 'css',
  jsFolder: 'js'
};
