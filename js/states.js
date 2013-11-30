// Make sure to include the `ui.router` module as a dependency.
angular.module('uiRouterSample')
  .config(
    [          '$stateProvider', '$urlRouterProvider',
      function ($stateProvider,   $urlRouterProvider) {

        /////////////////////////////
        // Redirects and Otherwise //
        /////////////////////////////

        // Use $urlRouterProvider to configure any redirects (when) and invalid urls (otherwise).
        $urlRouterProvider

          // The `when` method says if the url is ever the 1st param, then redirect to the 2nd param
          // Here we are just setting up some convenience urls.
          .when('/c?id', '/contacts/:id')
          .when('/user/:id', '/contacts/:id')

          // If the url is ever invalid, e.g. '/asdf', then redirect to '/' aka the home state
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

            // This abstract state will prepend '/contacts' onto the urls of all its children.
            url: '/home',

            // Example of loading a template from a file. This is also a top level state,
            // so this template file will be loaded and then inserted into the ui-view
            // within index.html.
            templateUrl: 'templates/home.html',

          })



          //////////////
          // Blog //
          //////////////

          .state('blog', {

            // This abstract state will prepend '/contacts' onto the urls of all its children.
            url: '/blog',

            // Example of loading a template from a file. This is also a top level state,
            // so this template file will be loaded and then inserted into the ui-view
            // within index.html.
            templateUrl: 'templates/blog.html',

          })



          //////////////
          // Contact //
          //////////////

          .state('contact', {

            // This abstract state will prepend '/contacts' onto the urls of all its children.
            url: '/contact',

            // Example of loading a template from a file. This is also a top level state,
            // so this template file will be loaded and then inserted into the ui-view
            // within index.html.
            templateUrl: 'templates/contact.html',

          })




          //////////////
          // Publications //
          //////////////

          .state('projects', {

            // This abstract state will prepend '/contacts' onto the urls of all its children.
            url: '/projects',

            // Example of loading a template from a file. This is also a top level state,
            // so this template file will be loaded and then inserted into the ui-view
            // within index.html.
            templateUrl: 'templates/projects.html',

          })




          //////////////
          // Publications //
          //////////////

          .state('publications', {

            // This abstract state will prepend '/contacts' onto the urls of all its children.
            url: '/publications',

            // Example of loading a template from a file. This is also a top level state,
            // so this template file will be loaded and then inserted into the ui-view
            // within index.html.
            templateUrl: 'templates/publications.html',

          })





          //////////////
          // About //
          //////////////

          .state('about', {

            // This abstract state will prepend '/contacts' onto the urls of all its children.
            url: '/about',

            // Example of loading a template from a file. This is also a top level state,
            // so this template file will be loaded and then inserted into the ui-view
            // within index.html.
            templateUrl: 'templates/about.html',

          })




      }]);
