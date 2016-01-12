angular.module('foodDeliveryApp')
  .factory('cartService', function() {

    var factory = {};

    factory.addName = function(name) {
      localStorage.setItem("name", name);
      console.log("last name saved...")
    }

    factory.getName = function() {
      return localStorage.name;

    }

    return factory;
  });
