"use strict";

module.exports = function(grunt) {
	grunt.initConfig({
		responsive_images: {
			dev: {
				options: {
					sizes: [{
					  name: "small",
					  width: 480
					},{
					  name: "medium",
					  width: 960
					},{
					  name: "large",
					  width: 1440,
					}, {
					  name: "x-large",
					  upscale: true,
					  width: 1800,
					}]
				},
				files: [{
			        expand: true,
			        src: ['img/**.{jpg,gif,png}'],
			        cwd: 'assets/',
			        dest: 'assets/responsive'
			      }]

			}

		}

	});

	grunt.loadNpmTasks("grunt-responsive-images");
	grunt.registerTask('default', ['responsive_images']);
};