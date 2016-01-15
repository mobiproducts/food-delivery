'use strict';

/**
 * @ngdoc function
 * @name foodDeliveryApp.controller:CartCtrl
 * @description
 * # CartCtrl
 * Controller of the foodDeliveryApp
 */
//angular.module('foodDeliveryApp')
//  .controller('CartCtrl', function ($scope) {
//    $scope.dishName =
//    {
//      id: 1,
//      name: "Squid Delicacy",
//      description: "Delicious Squid Delicacy Description",
//      detail: "This is a delicious and simple recipe for squid. Lightly coated in sea salt and pepper seasoned flour and then fried to perfection. Perfect for a hot summer's meal served with a fresh garden salad.",
//      image: "./images/food_Bg1.jpg",
//      thumbnail: "./images/food1_thumb.png",
//      price: 12.99
//    }
//  });

//var foodDeliveryApp = angular.module('foodDeliveryApp',['ngCart']);
//
//foodDeliveryApp.controller ('myCtrl', ['$scope', '$http', 'ngCart', function($scope, $http, ngCart) {
//  ngCart.setTaxRate(7.5);
//  ngCart.setShipping(2.99);
//}]);

angular.module('foodDeliveryApp')
  .controller('cartCtrl' , function ($scope, cartService, ngCart, menuFactory) {
    console.log(ngCart);
    ngCart.setTaxRate(7.5);
    ngCart.setShipping(2.99);
  });
