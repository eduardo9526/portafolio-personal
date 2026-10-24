module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['vite', 'jasmine'],
    files: [
      { pattern: 'src/**/*.spec.{js,jsx}', type: 'module', watched: false }
    ],
    plugins: [
      require('karma-vite'),
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-coverage')
    ],
    reporters: ['progress', 'coverage'],
    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['ChromeHeadless'],
    singleRun: true,
    restartOnFileChange: false
  });
};