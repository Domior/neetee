const { alias } = require('react-app-rewire-alias')

module.exports = function override(config, env) {
    alias({
        '@components': 'src/components',
        '@containers': 'src/containers',
        '@pages': 'src/containers/pages',
        '@static': 'src/static',
        '@styles': 'src/styles',
    })(config);
    return config;
}
