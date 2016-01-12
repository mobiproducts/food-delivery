'use strict';

/**
 * @ngdoc function
 * @name foodDeliveryApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the foodDeliveryApp
 */
angular.module('foodDeliveryApp')
  .controller('MainCtrl', function (cartService) {
    var name = cartService.getName();
    console.log(name);
  });
