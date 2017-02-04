'use strict';

angular.module('itcFrontendApp')

// Routing for the site. Each view is defined in each 'when' object
// templateUrl = the HTML file
// controller = the JS file
.config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'HomeCtrl'
    })
    .when('/news', {
      templateUrl: 'views/news.html',
      controller: 'NewsCtrl'
    })
    .when('/races', {
      templateUrl: 'views/races.html',
      controller: 'RacesCtrl'
    })
    .when('/clubrelays', {
      templateUrl: 'views/clubrelays.html',
      controller: 'ClubRelaysCtrl'
    })
    .when('/results', {
      templateUrl: 'views/results.html',
      controller: 'ResultsCtrl'
    })
    .when('/prospective_members', {
      templateUrl: 'views/prospective_members.html',
      controller: 'ProspectiveMembersCtrl'
    })
    .when('/current_members/board_minutes', {
      templateUrl: 'views/current_members/board_minutes.html',
      controller: 'BoardMinutesCtrl'
    })
    .when('/current_members/training_resources', {
      templateUrl: 'views/current_members/training_resources.html',
      controller: 'TrainingResourcesCtrl'
    })
    .when('/contact', {
      templateUrl: 'views/contact.html',
      controller: 'ContactCtrl'
    })
    .when('/404', {
      templateUrl: 'views/404.html'
    })
    .otherwise({
      redirectTo: '/404'
    });

  $locationProvider.hashPrefix('');
});
