const path = require("path");

module.exports = {
  reactStrictMode: false,
  webpack: (config, options) => {
    config.resolve = {
      alias: {
        "@/components": path.join(__dirname, "components"),
        "@/utils": path.join(__dirname, "utils"),
        "@/public": path.join(__dirname, "public"),
        "@/constants": path.join(__dirname, "constants"),
      },
      ...config.resolve,
    };

    return config;
  },
};
