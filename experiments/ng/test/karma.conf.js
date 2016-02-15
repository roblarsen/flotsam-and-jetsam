// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html
// Generated on 2016-02-11 using
// generator-karma 1.0.1

module.exports = function(config) {
  'use strict';

  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // base path, that will be used to resolve files and exclude
    basePath: '../',

    // testing framework to use (jasmine/mocha/qunit/...)
    // as well as any additional frameworks (requirejs/chai/sinon/...)
    frameworks: [
      "jasmine"
    ],

    // list of files / patterns to load in the browser
    files: [
      "app/scripts/vendor/jquery/jquery.min.js",
      "app/scripts/vendor/angular/angular.min.js",
      "app/scripts/vendor/angular-mocks/angular-mocks.js",
      "app/scripts/vendor/bootstrap/bootstrap.min.js",
      "app/scripts/vendor/angular-animate/angular-animate.min.js",
      "app/scripts/vendor/angular-cookies/angular-cookies.min.js",
      "app/scripts/vendor/angular-resource/angular-resource.min.js",
      "app/scripts/vendor/angular-route/angular-route.min.js",
      "app/scripts/vendor/angular-sanitize/angular-sanitize.min.js",
      "app/scripts/vendor/angular-touch/angular-touch.min.js",
      "app/scripts/app.js",
      "app/scripts/controllers/**/*.js",
      "test/mock/**/*.js",
      "test/spec/**/*.js"
    ],

    // list of files / patterns to exclude
    exclude: [
    ],

    // web server port
    port: 8080,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
      "PhantomJS"
    ],

    // Which plugins to enable
    plugins: [
      "karma-phantomjs-launcher",
      "karma-jasmine"
    ],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // Uncomment the following lines if you are using grunt's server to run the tests
    // proxies: {
    //   '/': 'http://localhost:9000/'
    // },
    // URL root prevent conflicts with the site root
    // urlRoot: '_karma_'
  });
};
