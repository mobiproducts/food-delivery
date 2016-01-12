'use strict';

describe('Controller: DishCtrl', function () {

  // load the controller's module
  beforeEach(module('foodDeliveryApp'));

  var DishCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DishCtrl = $controller('DishCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DishCtrl.awesomeThings.length).toBe(3);
  });
});
