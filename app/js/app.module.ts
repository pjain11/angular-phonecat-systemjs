import 'jquery';
import angular from 'angular';
import 'angular-animate';
import 'angular-resource';
import 'angular-route';


import core from './core/core.module';
import phoneList from './phone_list/phone_list.module';
import phoneDetail from './phone_detail/phone_detail.module';

import phoneListTemplate from './phone_list/phone_list.html!text';

angular.module('phonecatApp', [
  'ngRoute',
  core.name,
  phoneList.name,
  phoneDetail.name
]).config(configure);

configure.$inject = ['$routeProvider'];

function configure($routeProvider) {
  $routeProvider.
      when('/phones', {
        //templateUrl: 'js/phone_list/phone_list.html',
        template: phoneListTemplate,
        controller: 'PhoneListCtrl',
        controllerAs: 'vm'
      }).
      when('/phones/:phoneId', {
          templateUrl: 'js/phone_detail/phone_detail.html',
        controller: 'PhoneDetailCtrl',
        controllerAs: 'vm'
      }).
      otherwise({
        redirectTo: '/phones'
      });
}
angular.element(document).ready(function() {
   angular.bootstrap(document, ['phonecatApp'], {
       strictDi: true
   })
});
//angular.bootstrap(document.documentElement, ['phonecatApp']);
