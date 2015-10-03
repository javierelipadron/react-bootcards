var gulp = require('gulp');
var initGulpTasks = require('react-component-gulp-tasks');

/**
 * Tasks are added by the react-component-gulp-tasks package
 *
 * See https://github.com/JedWatson/react-component-gulp-tasks
 * for documentation.
 *
 * You can also add your own additional gulp tasks if you like.
 */

var taskConfig = {

  component: {
    file: 'index.js',
    name: 'ReactBootcards',
    dependencies: [
      'classnames',
      'history',
      'react',
      'react/addons',
      'react-bootstrap',
      'react-highlight',
      'react-router',
      'react-router-bootstrap',
    ],
    lib: 'lib'
  },

  example: {
    src: 'example/src',
    dist: 'example/dist',
    files: [
      'index.html',
      '.gitignore',
      './images/**',
    ],
    scripts: [
      'example.js'
    ],
    less: [
      'example.less'
    ]
  }

};

initGulpTasks(gulp, taskConfig);
