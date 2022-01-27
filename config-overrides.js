const { alias } = require('react-app-rewire-alias')

module.exports = function override(config, env) {
    alias({
        '@containers': 'src/containers',
        '@styles': 'src/styles',
    })(config);
    return config;
}
