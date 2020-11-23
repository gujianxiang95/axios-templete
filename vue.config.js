
const path = require("path");

module.exports = {
    publicPath: '/jenkinTest/dist',
    outputDir: 'dist',
    assetsDir: 'static',
    productionSourceMap: false,
    lintOnSave: false,
    configureWebpack: {
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "src"),
                // library: path.resolve(__dirname, "common-frontend/src")
            }
        }
    },
    devServer: {
        open: true,
        overlay: {
            warnings: false,
            errors: true
        },
        proxy: {
            '/dev-api': {
              target: `http://106.14.42.109:3000`,
              changeOrigin: true,
              pathRewrite: {
                '^/dev-api': 'http://106.14.42.109:3000'
              }
            }
        }
    }
};
