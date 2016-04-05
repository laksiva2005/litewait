/*
*
*/
;(function(angular) {
   'use strict';
   angular.module('litewait.ui').controller('MerchantReviewCtrl', MerchantReviewCtrl);

   MerchantReviewCtrl.$inject = ['$scope', 'User'];

   function MerchantReviewCtrl($scope, User) {
      var vm = this;
      vm.data = {};
      vm.data['merchant'] = User.data || {};

      // TODO: have to get review list
   }
})(angular);