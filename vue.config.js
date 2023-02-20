const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    // name: "Progressive Web Appz",
    // short_name: "PWAz",
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
        swSrc: './src/service-worker-pwa.js',
    }
  }
})
