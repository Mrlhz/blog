// 主流浏览器最近2个版本用“last 2 versions”；
// 全球统计有超过1%的使用率使用“>1%”;
// 仅新版本用“ff>20”或”ff>=20″.

// const autoprefixer = require('autoprefixer');
// const postcssImport = require('postcss-import');
// module.exports = {
//     plugins: [postcssImport(), autoprefixer(['last 10 version'])]
// };

// const autoprefixer = require('autoprefixer');
// const postcssImport = require('postcss-import');
// module.exports = {
//     plugins: [postcssImport(), autoprefixer(['last 10 version'])]
// };

module.exports = {
	plugins: [
		require('autoprefixer')
	]
}