// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");
module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      common: path.resolve(__dirname, "src/common"),
      assets: path.resolve(__dirname, "src/assets"),
    },
  };
  return config;
};
