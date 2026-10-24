module.exports = function (config) {
  config.set({
    frameworks: ['jasmine'],
    files: ['src/tests/**/*.spec.jsx'],
    preprocessors: {
      'src/tests/**/*.spec.jsx': ['esbuild']
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