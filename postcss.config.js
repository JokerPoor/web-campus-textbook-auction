module.exports = {
	plugins: {
		autoprefixer: {},
		tailwindcss: {},
		'postcss-px-to-viewport': {
			rootValue({ file }) {
				return file.indexOf('vant') !== -1 ? 37.5 : 75;
			},
			propList: ['*'],
		},
	},
};
