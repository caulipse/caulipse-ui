const CracoAlias = require('craco-alias');

module.exports = {
	babel: {
		plugins: process.env.NODE_ENV === 'production' && ['transform-remove-console'],
	},
	plugins: [
		{
			plugin: CracoAlias,
			options: {
				source: 'tsconfig',
				tsConfigPath: 'tsconfig.paths.json',
			},
		},
	],
};
