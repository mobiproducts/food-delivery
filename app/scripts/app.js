'use strict';

/**
 * @ngdoc overview
 * @name foodDeliveryApp
 * @description
 * # foodDeliveryApp
 *
 * Main module of the application.
 */
angular
  .module('foodDeliveryApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngCart',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/menu', {
        templateUrl: 'views/menu.html',
        controller: 'MenuCtrl',
        controllerAs: 'menu'
      })
      .when('/menu/:name/:id', {
        templateUrl: 'views/dish.html',
        //templateUrl: 'template/ngCart/cart.html',
        controller: 'DishCtrl',
        controllerAs: 'dish'
      })
      .when('/cart', {
        templateUrl: 'views/cart.html',
        controller: 'CartCtrl',
        controllerAs: 'cart'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
