// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
module.exports = function override(config) {
    config.resolve = {
        ...config.resolve,
        alias: {
            ...config.alias,
            common: path.resolve(__dirname, 'src/common'),
            assets: path.resolve(__dirname, 'src/assets'),
            store: path.resolve(__dirname, 'src/store'),
            services: path.resolve(__dirname, 'src/services'),
            components: path.resolve(__dirname, 'src/components'),
            containers: path.resolve(__dirname, 'src/containers'),
        },
    };
    return config;
};
