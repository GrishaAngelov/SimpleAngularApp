module.exports = function(karma){
	karma.set({
        basePath: '',

        frameworks: ['jasmine'],

// list of files / patterns to load in the browser
// NOTE: angular.js should be first element, followed by angular-mocks.js
        files: [
           'angular.js',
           'angular-mocks.js',
           "*.spec.js",
           "controllers.js"
        ],


// list of files to exclude
        exclude: [],

        preprocessors: {
            '**/*.html': 'html2js'
        },

// test results reporter to use
// possible values: 'dots', 'progress', 'junit'
        reporters: ['progress'],

// web server port
        port: 8080,

// cli runner port
        runnerPort: 9100,

// enable / disable colors in the output (reporters and logs)
        colors: true,

// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        logLevel: karma.LOG_INFO,

// enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari (only Mac)
// - PhantomJS
// - IE (only Windows)
        browsers: ['Chrome'],

// If browser does not capture in given timeout [ms], kill it
        captureTimeout: 10000,

// Continuous Integration mode
// if true, it capture browsers, run tests and exit
        singleRun: false
	});
};