module.exports = function(grunt) {
    var phantomjs = require('phantomjs');
    var phantombin = phantomjs.path;

    grunt.initConfig({
        exec: {
            codecept: {
                stdout: true,
                command: [
                    'php bin/codecept clean',
                    'php bin/codecept run acceptance --steps'
                ].join('&&')
            }
        },
        run: {
            phantomjs: {
                options: {
                    wait: false,
                    quiet: true,
                    ready: /running on port/
                },
                cmd: phantombin,
                args: [
                    '--webdriver=4444'
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-run');

    grunt.registerTask('default', []);

    grunt.registerTask('test', ['run:phantomjs', 'exec:codecept', 'stop:phantomjs']);
};
