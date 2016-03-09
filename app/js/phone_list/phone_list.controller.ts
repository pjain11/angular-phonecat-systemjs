//'use strict';
//
//angular.module('phonecat.phoneList').controller('PhoneListCtrl',
//  ['Phone', function (Phone) {
//    this.phones = Phone.query();
//    this.orderProp = 'age';
//  }]);
import './phones.scss!';
PhoneListCtrl.$inject = ['Phone'];

function PhoneListCtrl(Phone) {
  var vm = this;
  vm.phones = Phone.query();
  vm.orderProp = 'age';
}

export default PhoneListCtrl;
