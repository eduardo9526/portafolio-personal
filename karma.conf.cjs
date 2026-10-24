module.exports = function (config) {
  config.set({
    frameworks: ['jasmine'],
    files: ['src/tests/index.spec.js'],
    preprocessors: {
      'src/tests/index.spec.js': ['esbuild']
    },
    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-esbuild'
    ],
    esbuild: {
      jsx: 'automatic',
      define: { 'process.env.NODE_ENV': '"test"' }
    },
    reporters: ['progress'],
    browsers: ['ChromeHeadless'],
    singleRun: true,
    autoWatch: false
  });
};