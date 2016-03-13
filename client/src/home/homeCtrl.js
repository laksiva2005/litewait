/*
 *
 */
;(function (angular) {
	'use strict';
	angular.module('litewait.ui').controller('HomeCtrl', HomeCtrl);

	HomeCtrl.$inject = ['$scope'];

	function HomeCtrl($scope) {
		var vm = this;	
		vm.myInterval = 3000;
  		vm.noWrap = false;
  		vm.active = 0;
  		vm.noPause = false;
  		vm.noTransition = false;
		vm.slides = [{
			active: true,
			id: 0,
			data:[
			{
				image: 'img/feature-location-1.jpg',
				text: 'Los Angeles; California Dummy text for testing',
				offerText: '25% Off'
			},
			{
				image: 'img/feature-location-2.jpg',
				text: 'Los Angeles; California Dummy text for testing',
				offerText: '25% Off'
			},
			{
				image: 'img/feature-location-1.jpg',
				text: 'Los Angeles; California Dummy text for testing',
				offerText: '25% Off'
			},
			{
				image: 'img/feature-location-2.jpg',
				text: 'Los Angeles; California Dummy text for testing',
				offerText: '25% Off'
			}]
			
		},
		{
			active: false,
			id: 2,
			data:[
			{
				image: 'img/feature-location-2.jpg',
				text: 'Los Angeles; California Dummy text for testing',
				offerText: '25% Off'
			},
			{
				image: 'img/feature-location-1.jpg',
				text: 'Los Angeles; California Dummy text for testing',
				offerText: '25% Off'
			},
			{
				image: 'img/feature-location-2.jpg',
				text: 'Los Angeles; California Dummy text for testing',
				offerText: '25% Off'
			},
			{
				image: 'img/feature-location-1.jpg',
				text: 'Los Angeles; California Dummy text for testing',
				offerText: '25% Off'
			}]
			
		},
		{
			active: false,
			id: 1,
			data:[
			{
				image: 'img/feature-location-1.jpg',
				text: 'Los Angeles; California Dummy text for testing',
				offerText: '25% Off'
			},
			{
				image: 'img/feature-location-2.jpg',
				text: 'Los Angeles; California Dummy text for testing',
				offerText: '25% Off'
			},
			{
				image: 'img/feature-location-1.jpg',
				text: 'Los Angeles; California Dummy text for testing',
				offerText: '25% Off'
			},
			{
				image: 'img/feature-location-2.jpg',
				text: 'Los Angeles; California Dummy text for testing',
				offerText: '25% Off'
			}]
			
		}];
	}
})(angular);