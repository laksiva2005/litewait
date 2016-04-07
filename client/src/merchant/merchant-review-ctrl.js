/*
*
*/
;(function(angular) {
   'use strict';
   angular.module('litewait.ui').controller('MerchantReviewCtrl', MerchantReviewCtrl);

   MerchantReviewCtrl.$inject = ['$scope', 'User', 'ReviewService'];

   function MerchantReviewCtrl($scope, User, ReviewService) {
      var vm = this;
      vm.data = {};
      vm.data.merchant = User.data || {};

      vm.data.reviewParams = {
			busy: false,
			offset: 0,
			limit: 10,
			merchant: vm.data.merchant.username
		};
		vm.data.review = [];
		vm.nextPage = nextPage;

		function searchReview() {
			var param = getReviewParams();
			ReviewService.getMerchantReviews(param).then(function(res) {
				if (!res.data.error) {
					assignReviews(res.data.data);
				}
			});
		}

		function assignReviews(items) {
			for (var i = 0; i < items.length; i++) {
	            var index = _.findIndex(vm.data.review, {date: items[i].date});
	            if (-1 === index) {
	              vm.data.review.push(items[i]);
	            }
	        }
	        vm.data.reviewParams.offset = vm.data.review.length;
		}

		function getReviewParams() {
			return {
				offset: vm.data.reviewParams.offset,
				limit: vm.data.reviewParams.limit,
				merchant: vm.data.merchant.username
			};
		}

		function initializeReviewList() {
			vm.data.reviewParams.offset = 0;
			vm.data.reviewParams.busy = false;
			vm.data.review.length = 0;
			seachReview();
		}

		function nextPage() {
			if (!vm.data.reviewParams.busy) {
				vm.data.reviewParams.busy = true;
				searchReview();
			}
		}

		searchReview();
   }
})(angular);