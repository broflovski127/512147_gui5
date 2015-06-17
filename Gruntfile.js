module.exports = function(grunt) {

    grunt.initConfig({

        openui5_preload: { 

            component: {
                options: {
                    resources: {
                        cwd: 'WebContent',
                        prefix: 'sap/ags/exxon/somit'
                    },
                    dest: 'dist'
                },
                components: true
            }

        }

    });

    grunt.loadNpmTasks('grunt-openui5');

    grunt.registerTask('default', ['openui5_preload']);

};