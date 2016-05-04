
;(function(angular) {
    'use strict';

    angular.module('litewait').config(config);

    config.$inject = ['$stateProvider'];

    function config($stateProvider) {
        $stateProvider
            .state('merchant', {
                url: '/merchant',
                views: {
                    "merchant-landing@merchant": {
                        templateUrl: 'merchant/merchant-order-in-progress.html',
                        controller: 'MerchantOrderCtrl',
                        controllerAs: 'moc'
                    },
                    '@': {
                        templateUrl: 'merchant/merchant-landing.html',
                        controller: 'MerchantLandingCtrl',
                        controllerAs: 'mlc'
                    }
                },
                params: { status: [1,2,3] },
                resolve: {
                    userrestriction: function(User, $state, $timeout) {
                        var handler;
                        if (!User.isLoggedIn) {
                            handler = $timeout(function() {
                                $timeout.cancel(handler);
                                $state.go('home');
                            }, 0);
                        } else if (User.isLoggedIn && User.role !== 'm') {
                            handler = $timeout(function() {
                                $timeout.cancel(handler);
                                $state.go('home');
                            }, 0);
                        } else {
                            return true;
                        }
                    }
                }
            })
            .state('merchant.order', {
                url: '/order',
                views: {
                    'merchant-landing': {
                        templateUrl: 'merchant/merchant-order-in-progress.html',
                        controller: 'MerchantOrderCtrl',
                        controllerAs: 'moc'
                    }
                },
                params: { status: [1,2,3] },
                resolve: {
                    userrestriction: function(User, $state, $timeout) {
                        if (!User.isLoggedIn) {
                            handler = $timeout(function() {
                                $timeout.cancel(handler);
                                $state.go('home');
                            }, 0);
                        } else if (User.isLoggedIn && User.role !== 'm') {
                            handler = $timeout(function() {
                                $timeout.cancel(handler);
                                $state.go('home');
                            }, 0);
                        } else {
                            return true;
                        }
                    }
                }
            })
            .state('merchant.pastorder', {
                url: '/pastorder',
                views: {
                    'merchant-landing': {
                        templateUrl: 'merchant/merchant-past-order.html',
                        controller: 'MerchantOrderCtrl',
                        controllerAs: 'mpoc'
                    }
                },
                params: {status: [4]},
                resolve: {
                    userrestriction: function(User, $state, $timeout) {
                        if (!User.isLoggedIn) {
                            handler = $timeout(function() {
                                $timeout.cancel(handler);
                                $state.go('home');
                            }, 0);
                        } else if (User.isLoggedIn && User.role !== 'm') {
                            handler = $timeout(function() {
                                $timeout.cancel(handler);
                                $state.go('home');
                            }, 0);
                        } else {
                            return true;
                        }
                    }
                }
            })
            .state('merchant.review', {
                url: '/review',
                views: {
                    'merchant-landing': {
                        templateUrl: 'merchant/merchant-review.html',
                        controller: 'MerchantReviewCtrl',
                        controllerAs: 'mrc'
                    }
                },
                resolve: {
                    userrestriction: function(User, $state, $timeout) {
                        if (!User.isLoggedIn) {
                            handler = $timeout(function() {
                                $timeout.cancel(handler);
                                $state.go('home');
                            }, 0);
                        } else if (User.isLoggedIn && User.role !== 'm') {
                            handler = $timeout(function() {
                                $timeout.cancel(handler);
                                $state.go('home');
                            }, 0);
                        } else {
                            return true;
                        }
                    }
                }
            })
            .state('merchant.menu', {
                url: '/menu',
                views: {
                    'merchant-landing': {
                        templateUrl: 'merchant/merchant-menu.html',
                        controller: 'MerchantMenuCtrl',
                        controllerAs: 'mmc'
                    }
                },
                resolve: {
                    userrestriction: function(User, $state, $timeout) {
                        if (!User.isLoggedIn) {
                            handler = $timeout(function() {
                                $timeout.cancel(handler);
                                $state.go('home');
                            }, 0);
                        } else if (User.isLoggedIn && User.role !== 'm') {
                            handler = $timeout(function() {
                                $timeout.cancel(handler);
                                $state.go('home');
                            }, 0);
                        } else {
                            return true;
                        }
                    }
                }
            })
            .state('merchant.menuadd', {
                url: '/menu/add',
                views: {
                    'merchant-landing': {
                        templateUrl: 'merchant/merchant-menu-new.html',
                        controller: 'NewMenuCtrl',
                        controllerAs: 'nmc'
                    }
                },
                resolve: {
                    userrestriction: function(User, $state, $timeout) {
                        if (!User.isLoggedIn) {
                            handler = $timeout(function() {
                                $timeout.cancel(handler);
                                $state.go('home');
                            }, 0);
                        } else if (User.isLoggedIn && User.role !== 'm') {
                            handler = $timeout(function() {
                                $timeout.cancel(handler);
                                $state.go('home');
                            }, 0);
                        } else {
                            return true;
                        }
                    },
                    menu: function() {
                        return false;
                    }
                }
            })
            .state('merchant.menuedit', {
                url: '/menu/edit/:id',
                views: {
                    'merchant-landing': {
                        templateUrl: 'merchant/merchant-menu-new.html',
                        controller: 'NewMenuCtrl',
                        controllerAs: 'nmc'
                    }
                },
                resolve: {
                    userrestriction: function(User, $state, $timeout) {
                        if (!User.isLoggedIn) {
                            handler = $timeout(function() {
                                $timeout.cancel(handler);
                                $state.go('home');
                            }, 0);
                        } else if (User.isLoggedIn && User.role !== 'm') {
                            handler = $timeout(function() {
                                $timeout.cancel(handler);
                                $state.go('home');
                            }, 0);
                        } else {
                            return true;
                        }
                    },
                    menu: function(MenuService, $stateParams, User) {
                        var data = {
                            merchant_id: User.data.id,
                            item_id: $stateParams.id
                        };

                        return MenuService.getCategoryByMandMId(data).then(function(response) {
                            if (!response.error && response.data !== null) {
                                return response.data.data;
                            } else {
                                return false;
                            }
                        });
                    }
                }
            })
            .state('merchant.category', {
                url: '/category',
                views: {
                    'merchant-landing': {
                        templateUrl: 'merchant/merchant-category.html',
                        controller: 'MerchantCategoryCtrl',
                        controllerAs: 'mcc'
                    }
                },
                resolve: {
                    userrestriction: function(User, $state, $timeout) {
                        if (!User.isLoggedIn) {
                            handler = $timeout(function() {
                                $timeout.cancel(handler);
                                $state.go('home');
                            }, 0);
                        } else if (User.isLoggedIn && User.role !== 'm') {
                            handler = $timeout(function() {
                                $timeout.cancel(handler);
                                $state.go('home');
                            }, 0);
                        } else {
                            return true;
                        }
                    }
                }
            })
            .state('merchant.categoryadd', {
                url: '/category/add',
                views: {
                    'merchant-landing': {
                        templateUrl: 'merchant/merchant-category-new.html',
                        controller: 'NewCategoryCtrl',
                        controllerAs: 'ncc'
                    }
                },
                resolve: {
                    userrestriction: function(User, $state, $timeout) {
                        if (!User.isLoggedIn) {
                            handler = $timeout(function() {
                                $timeout.cancel(handler);
                                $state.go('home');
                            }, 0);
                        } else if (User.isLoggedIn && User.role !== 'm') {
                            handler = $timeout(function() {
                                $timeout.cancel(handler);
                                $state.go('home');
                            }, 0);
                        } else {
                            return true;
                        }
                    },
                    category: function() {
                        return false;
                    }
                }
            })
            .state('merchant.categoryedit', {
                url: '/category/edit/:category_id',
                views: {
                    'merchant-landing': {
                        templateUrl: 'merchant/merchant-category-new.html',
                        controller: 'NewCategoryCtrl',
                        controllerAs: 'ncc'
                    }
                },
                resolve: {
                    userrestriction: function(User, $state, $timeout) {
                        if (!User.isLoggedIn) {
                            handler = $timeout(function() {
                                $timeout.cancel(handler);
                                $state.go('home');
                            }, 0);
                        } else if (User.isLoggedIn && User.role !== 'm') {
                            handler = $timeout(function() {
                                $timeout.cancel(handler);
                                $state.go('home');
                            }, 0);
                        } else {
                            return true;
                        }
                    },
                    category: function(MenuService, $stateParams, User, $state) {
                        var data = {
                            merchant_id: User.data.id,
                            category_id: $stateParams.category_id
                        };

                        return MenuService.getCategoryByMandCId(data).then(function(res){
                            if (!res.data.error) {
                                var index = _.findIndex(res.data.data.item_categories, {id: $stateParams.category_id});
                                if (index == -1) {
                                    $state.go('merchant.category');
                                }
                                return res.data.data.item_categories[index];
                            }

                            return false;
                        });
                    }
                }
            });
    }
})(angular);
