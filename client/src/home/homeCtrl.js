/*
 *
 */
;(function (angular) {
	'use strict';
	angular.module('litewait.ui').controller('homeCtrl', homeCtrl);

	homeCtrl.$inject = ['$scope'];

	function homeCtrl($scope) {
		$scope.myInterval = 1000;
  		$scope.noWrapSlides = false;
		$scope.slides = [{
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