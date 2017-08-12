module.exports = function(grunt) {
    
     // Project configuration.
     grunt.initConfig({
       pkg: grunt.file.readJSON('package.json'),
    
       compass: {      
       dist: {        
         options: {      
           sassDir: 'sass',
           cssDir: 'css',
           environment: 'production'
         }
       },
       dev: {              
         options: {
           sassDir: 'sass',
           cssDir: 'css'
         }
       }
     },
    
       watch: {
           sass:{
               files: ['src/sass/*.scss'],
               tasks: ['sass', 'cssmin']
           },
           js:{
                files: ['src/js/index.js'],
                tasks: ['jshint','browserify','uglify']
           }
       },
    
       sass: {
           dist: {
               options: {                 
                   compass: true,
               },
               files: {
                   'src/css/style.css' : 'src/sass/style.scss'
               }
           }
       },
    
       concat: {
           options: {
               separator: ';',
               stripBanners: true,
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
           },
    
           dist: {
               src: ['dist/js/index.min.js'],
               dest: 'dist/js/index.min.js'
           }
       },
    
    
       uglify:{
           options: {
               manage: false,
               preserveComments: 'all' //preserve all comments on JS files
           },
           my_target:{
               files: {
                   'dist/js/index.min.js' : ['dist/js/index.min.js']
               }
           }
       },
      
    
       cssmin:{
           my_target:{
               files: [{
                   expand: true,
                   cwd: 'src/css/',
                   src: ['*.css', '!*.min.css'],
                   dest: 'dist/css/',
                   ext: '.min.css'
    
               }]
           }
       },

       browserify: {
        dist: {
          files: {
            'dist/js/index.min.js' : ['src/js/index.js']
          }
        }
      },

      imagemin: {
        dynamic: {
            options: {
                optimizationLevel: 7
            },
            files: [{
                expand: true,
                cwd: 'src/img',
                src: ['**/*.{png,jpg,gif}'],
                dest: 'dist/img'
            }]
        }
    },
    jshint: {
        options: {
            reporterOutput: ""
          },
        all: ['src/js/*.js']
    }
    
     });
    
     grunt.loadNpmTasks('grunt-contrib-compass');
    
     grunt.loadNpmTasks('grunt-contrib-watch');
    
     grunt.loadNpmTasks('grunt-contrib-sass');
    
     grunt.loadNpmTasks('grunt-contrib-uglify');
    
     grunt.loadNpmTasks('grunt-contrib-concat');
    
     grunt.loadNpmTasks('grunt-contrib-cssmin');

     grunt.loadNpmTasks('grunt-browserify');

     grunt.loadNpmTasks('grunt-contrib-imagemin');

     grunt.loadNpmTasks('grunt-contrib-jshint');
    
      // Default task(s).
     grunt.registerTask('default', ['browserify','uglify','sass','cssmin','imagemin']);
   };