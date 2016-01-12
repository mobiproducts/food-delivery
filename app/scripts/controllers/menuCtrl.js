'use strict';

/**
 * @ngdoc function
 * @name foodDeliveryApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the foodDeliveryApp
 */
//foodDeliveryApp.controller('MenuCtrl', function ($scope, menuFactory){
//  menuFactory.list(function(dishes) {
//    $scope.dishes = dishes;
//  });
//});


angular.module('foodDeliveryApp')
  .controller('MenuCtrl' , function ($scope, cartService, menuFactory) {

    cartService.addName("Jon");

    $scope.dishes = menuFactory.listDishes();




    //$scope.dishes = [
    //  {
    //    id: 1,
    //    name: "Squid Delicacy",
    //    description: "Delicious Squid Delicacy Description",
    //    detail: "This is a delicious and simple recipe for squid. Lightly coated in sea salt and pepper seasoned flour and then fried to perfection. Perfect for a hot summer's meal served with a fresh garden salad.",
    //    image: "./images/food_Bg1.jpg",
    //    thumbnail: "./images/food1_thumb.png",
    //    price: 12.99
    //  },
    //  {
    //    id: 2,
    //    name: "Chicken Gourmet",
    //    description: "Delicious Seafood Pasta Description",
    //    detail: "This is a delicious and simple recipe for Chicken. Lightly coated in sea salt and pepper seasoned flour and then fried to perfection. Perfect for a hot summer's meal served with a fresh garden salad.",
    //    image: "./images/food_Bg2.jpg",
    //    price: 10.99
    //  },
    //  {
    //    id: 3,
    //    name: "Steak Mignon",
    //    description: "Delicious Tender Mignon Description",
    //    details: "This is a delicious and simple recipe for Steak Mignon. Lightly coated in sea salt and pepper seasoned flour and then fried to perfection. Perfect for a hot summer's meal served with a fresh garden salad.",
    //    image: "./images/food_Bg3.jpg",
    //    price: 15.99
    //  },
    //  {
    //    id: 4,
    //    name: "Chicken Curry",
    //    description: "Delicious Chicken Curry Description",
    //    details: "This is a delicious and simple recipe for chicken Curry. Lightly coated in sea salt and pepper seasoned flour and then fried to perfection. Perfect for a hot summer's meal served with a fresh garden salad.",
    //    image: "./images/food_Bg4.jpg",
    //    price: 8.99
    //  },
    //  {
    //    id: 5,
    //    name: "Steak & Mushroom",
    //    description: "Delicious Steak Mushroom Description",
    //    details: "This is a delicious and simple recipe for steak mushroom. Lightly coated in sea salt and pepper seasoned flour and then fried to perfection. Perfect for a hot summer's meal served with a fresh garden salad.",
    //    image: "./images/food_Bg5.jpg",
    //    price: 10.99
    //  },
    //  {
    //    id: 6,
    //    name: "Garlic Steak",
    //    description: "Delicious Garlic Steak Description",
    //    details: "This is a delicious and simple recipe for garlic Steak. Lightly coated in sea salt and pepper seasoned flour and then fried to perfection. Perfect for a hot summer's meal served with a fresh garden salad.",
    //    image: "./images/food_Bg6.jpg",
    //    price: 12.99
    //  },
    //  {
    //    id: 7,
    //    name: "Seafood Salad",
    //    description: "Delicious Seafood Salad Description",
    //    details: "This is a delicious and simple recipe for seafood salad. Lightly coated in sea salt and pepper seasoned flour and then fried to perfection. Perfect for a hot summer's meal served with a fresh garden salad.",
    //    image: "./images/food_Bg7.jpg",
    //    price: 11.99
    //  },
    //  {
    //    id: 8,
    //    name: "Shrimp Tempura",
    //    description: "Delicious Shrimp Tempura Description",
    //    details: "This is a delicious and simple recipe for shrimp tempura. Lightly coated in sea salt and pepper seasoned flour and then fried to perfection. Perfect for a hot summer's meal served with a fresh garden salad.",
    //    image: "./images/food_Bg8.jpg",
    //    price: 8.99
    //  },
    //  {
    //    id: 9,
    //    name: "Seafood Pasta",
    //    description: "Delicious Seafood Pasta Description",
    //    details: "This is a delicious and simple recipe for seafood pasta. Lightly coated in sea salt and pepper seasoned flour and then fried to perfection. Perfect for a hot summer's meal served with a fresh garden salad.",
    //    image: "./images/food_Bg9.jpg",
    //    price: 10.99
    //  }
    //]

  });

//.filter('encodeURIComponent', function() {
//  return window.encodeURIComponent;
//});
