// Make sure to include the `ui.router` module as a dependency.

// Update here, to make sure, it will avoid pages to be cached.
var version = "1.0.2";


angular.module('uiRouterSample')
  .config(
    ['$stateProvider', '$urlRouterProvider',
      function ($stateProvider, $urlRouterProvider) {

        /////////////////////////////
        // Redirects and Otherwise //
        /////////////////////////////

        // Use $urlRouterProvider to configure any redirects (when) and invalid urls (otherwise).
        $urlRouterProvider

          .when('/c?id', '/contacts/:id')
          .when('/user/:id', '/contacts/:id')

          .otherwise('/');


        //////////////////////////
        // State Configurations //
        //////////////////////////

        // Use $stateProvider to configure your states.
        $stateProvider

          //////////////
          // Home //
          //////////////

          .state('home', {

            url: '/',
            templateUrl: 'templates/home.html?v=' + version,

          })



          //////////////
          // Blog //
          //////////////

          .state('blog', {

            url: '/blog',
            templateUrl: 'templates/blog.html?v=' + version,
          })



          //////////////
          // Contact //
          //////////////

          .state('contact', {

            url: '/contact',
            templateUrl: 'templates/contact.html?v=' + version,

          })




          //////////////
          // Publications //
          //////////////

          .state('projects', {
            url: '/projects',
            templateUrl: 'templates/projects.html?v=' + version,

          })




          //////////////
          // Publications //
          //////////////

          .state('publications', {

            url: '/publications',
            templateUrl: 'templates/publications.html?v=' + version,

          })

          //////////////
          // About //
          //////////////

          .state('about', {
            url: '/about',
            templateUrl: 'templates/about.html?v=' + version,
          })
      }]);