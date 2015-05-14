module.exports = function(grunt) {

	// Modules
	grunt.loadNpmTasks('grunt-init');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('bootcamp');

	// Grunt Tasks
	grunt.initConfig({
		meta: {
			version: '0.0.3'
		},

		// Sass
		sass: {
			test: {
				options: {
					style: 'expanded',
					sourcemap: 'none',
					loadPath: './node_modules/bootcamp/dist' // or './bower_components/bootcamp/dist'
				},
				files: [{
					expand: true,
					cwd: 'tests',
					src: ['*.scss'],
					dest: './results',
					ext: '.css'
				}]
			}
		},

		// Bootcamp
		bootcamp: {
			test: {
				files: {
					src: ['./results/*.css']
				}
			}
		},

		// Watch
		watch: {
			dist: {
				files: ['./**/*.scss'],
				tasks: ['sass', 'bootcamp']
			}
		}
	});

	// Tasks
	grunt.registerTask('default', ['sass', 'bootcamp', 'watch']);
	grunt.registerTask('test',    ['sass', 'bootcamp']);
};