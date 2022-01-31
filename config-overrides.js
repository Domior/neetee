const { alias } = require('react-app-rewire-alias');

module.exports = function override(config, env) {
  alias({
    '@components': 'src/components',
    '@containers': 'src/containers',
    '@pages': 'src/containers/pages',
    '@routes': 'src/routes',
    '@static': 'src/static',
    '@icons': 'src/static/icons',
    '@styles': 'src/styles',
  })(config);
  return config;
};
