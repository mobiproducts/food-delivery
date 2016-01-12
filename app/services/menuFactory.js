//foodDeliveryApp.factory('menuFactory', function($http){
//  return {
//    list: function(callback){
//      $http.get('menu.json').success(callback);
//    },
//    find: function(name, callback){
//      $http.get('menu.json').success(function(data) {
//        var dish = data.filter(function(entry){
//          return entry.name === name;
//        })[0];
//        callback(dish);
//      });
//    }
//  };
//});





angular.module('foodDeliveryApp')
  .factory('menuFactory', function($http) {

    var factory = {};
    var dishes = [
      {
        id: 1,
        name: "Squid Delicacy",
        description: "Delicious Squid Delicacy Description",
        detail: "This is a delicious and simple recipe for squid. Lightly coated in sea salt and pepper seasoned flour and then fried to perfection. Perfect for a hot summer's meal served with a fresh garden salad.",
        image: "./images/food_Bg1.jpg",
        thumbnail: "./images/food1_thumb.png",
        price: 12.99
      },
      {
        id: 2,
        name: "Chicken Gourmet",
        description: "Delicious Seafood Pasta Description",
        detail: "This is a delicious and simple recipe for Chicken. Lightly coated in sea salt and pepper seasoned flour and then fried to perfection. Perfect for a hot summer's meal served with a fresh garden salad.",
        image: "./images/food_Bg2.jpg",
        thumbnail: "./images/food2_thumb.png",
        price: 10.99
      },
      {
        id: 3,
        name: "Steak Mignon",
        description: "Delicious Tender Mignon Description",
        details: "This is a delicious and simple recipe for Steak Mignon. Lightly coated in sea salt and pepper seasoned flour and then fried to perfection. Perfect for a hot summer's meal served with a fresh garden salad.",
        image: "./images/food_Bg3.jpg",
        thumbnail: "./images/food3_thumb.png",
        price: 15.99
      },
      {
        id: 4,
        name: "Chicken Curry",
        description: "Delicious Chicken Curry Description",
        details: "This is a delicious and simple recipe for chicken Curry. Lightly coated in sea salt and pepper seasoned flour and then fried to perfection. Perfect for a hot summer's meal served with a fresh garden salad.",
        image: "./images/food_Bg4.jpg",
        thumbnail: "./images/food1_thumb.png",
        price: 8.99
      },
      {
        id: 5,
        name: "Steak & Mushroom",
        description: "Delicious Steak Mushroom Description",
        details: "This is a delicious and simple recipe for steak mushroom. Lightly coated in sea salt and pepper seasoned flour and then fried to perfection. Perfect for a hot summer's meal served with a fresh garden salad.",
        image: "./images/food_Bg5.jpg",
        thumbnail: "./images/food5_thumb.png",
        price: 10.99
      },
      {
        id: 6,
        name: "Garlic Steak",
        description: "Delicious Garlic Steak Description",
        details: "This is a delicious and simple recipe for garlic Steak. Lightly coated in sea salt and pepper seasoned flour and then fried to perfection. Perfect for a hot summer's meal served with a fresh garden salad.",
        image: "./images/food_Bg6.jpg",
        thumbnail: "./images/food6_thumb.png",
        price: 12.99
      },
      {
        id: 7,
        name: "Seafood Salad",
        description: "Delicious Seafood Salad Description",
        details: "This is a delicious and simple recipe for seafood salad. Lightly coated in sea salt and pepper seasoned flour and then fried to perfection. Perfect for a hot summer's meal served with a fresh garden salad.",
        image: "./images/food_Bg7.jpg",
        thumbnail: "./images/food7_thumb.png",
        price: 11.99
      },
      {
        id: 8,
        name: "Shrimp Tempura",
        description: "Delicious Shrimp Tempura Description",
        details: "This is a delicious and simple recipe for shrimp tempura. Lightly coated in sea salt and pepper seasoned flour and then fried to perfection. Perfect for a hot summer's meal served with a fresh garden salad.",
        image: "./images/food_Bg8.jpg",
        thumbnail: "./images/food1_thumb.png",
        price: 8.99
      },
      {
        id: 9,
        name: "Seafood Pasta",
        description: "Delicious Seafood Pasta Description",
        details: "This is a delicious and simple recipe for seafood pasta. Lightly coated in sea salt and pepper seasoned flour and then fried to perfection. Perfect for a hot summer's meal served with a fresh garden salad.",
        image: "./images/food_Bg9.jpg",
        thumbnail: "./images/food9_thumb.png",
        price: 10.99
      }
    ];

    factory.listDishes = function (){
      return dishes;
    },

    //factory.listDishes = function (){
    //  return $http.get('view/menu');
    //},
    //
    factory.getDishById = function(id){
      return dishes.id;
    };

    //find: function(name, callback){
    //  $http.get('countries.json').success(function(data) {
    //    var country = data.filter(function(entry){
    //      return entry.name === name;
    //    })[0];
    //    callback(country);
    //  });
    //}

    return factory;
  });
