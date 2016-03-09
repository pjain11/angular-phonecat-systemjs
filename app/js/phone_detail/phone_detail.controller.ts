//'use strict';
//
//angular.module('phonecat.phoneDetail').controller('PhoneDetailCtrl',
//  ['$routeParams', 'Phone', function($routeParams, Phone) {
//    var ctrl = this;
//    ctrl.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
//      ctrl.mainImageUrl = phone.images[0];
//    });
//
//    ctrl.setImage = function(imageUrl) {
//      ctrl.mainImageUrl = imageUrl;
//    };
//  }]);

import './phones_detail.scss!';

PhoneDetailCtrl.$inject = ['$routeParams', 'Phone']

function PhoneDetailCtrl($routeParams, Phone) {
  var vm = this;
  vm.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
    vm.mainImageUrl = phone.images[0];
  });

  vm.setImage = function(imageUrl) {
    vm.mainImageUrl = imageUrl;
  };
}

export default PhoneDetailCtrl;
