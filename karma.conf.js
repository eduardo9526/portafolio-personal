module.exports = function (config) {
  config.set({
    frameworks: ['jasmine', 'vite'],
    files: [
      { pattern: 'src/**/*.spec.jsx', type: 'module' },
      { pattern: 'src/**/*.spec.js', type: 'module' }
    ],
    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-coverage',
      'karma-vite'
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
    singleRun: true
  });
};