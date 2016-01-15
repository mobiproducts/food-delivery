'use strict';

/**
 * @ngdoc function
 * @name foodDeliveryApp.controller:DishCtrl
 * @description
 * # DishCtrl
 * Controller of the foodDeliveryApp
 */

angular.module('foodDeliveryApp')
  .controller('DishCtrl', function ($scope, $routeParams, menuFactory) {

     //menuFactory.getDishById($routeParams.id, function(){
     //$scope.dishName = $routeParams.id;

      //console.log("from dish controller: "  + dishName);


    console.log($routeParams.id);

    $scope.dishName =
      {
        id: 1,
        name: "Squid Delicacy",
        description: "Delicious Squid Delicacy Description",
        detail: "This is a delicious and simple recipe for squid. Lightly coated in sea salt and pepper seasoned flour and then fried to perfection. Perfect for a hot summer's meal served with a fresh garden salad.",
        image: "./images/md_food1.jpg",
        thumbnail: "./images/food1_thumb.png",
        price: 12.99
      }

    //$scope.dishName =[
    //  {
    //    id: 1,
    //    name: "Squid Delicacy",
    //    description: "Delicious Squid Delicacy Description",
    //    detail: "This is a delicious and simple recipe for squid. Lightly coated in sea salt and pepper seasoned flour and then fried to perfection. Perfect for a hot summer's meal served with a fresh garden salad.",
    //    image: "./images/food_Bg1.jpg",
    //    thumbnail: "./images/food1_thumb.png",
    //    price: 12.99
    //  },
    //{
    //  id: 2,
    //  name: "Chicken Gourmet",
    //  description: "Delicious Seafood Pasta Description",
    //  detail: "This is a delicious and simple recipe for Chicken. Lightly coated in sea salt and pepper seasoned flour and then fried to perfection. Perfect for a hot summer's meal served with a fresh garden salad.",
    //  image: "./images/food_Bg2.jpg",
    //  thumbnail: "./images/food2_thumb.png",
    //  price: 10.99
    //}
    //
    //]

  });




//foodDeliveryApp.controller('MenuCtrl', function ($scope, menuFactory){
//  menuFactory.list(function(dishes) {
//    $scope.dishes = dishes;
//  });
//});

//foodDeliveryApp.controller('dishCtrl', function ($scope, $routeParams, menuFactory){
//  menuFactory.find($routeParams.id, function(dish) {
//    $scope.dish = dish;
//  });
//});

//countryApp.controller('CountryDetailCtrl', function ($scope, $routeParams, countries){
//  countries.find($routeParams.countryName, function(country) {
//    $scope.country = country;
//  });
