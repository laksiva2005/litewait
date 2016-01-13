/**
 *
 */
;(function (angular) {
    'use strict';
    angular.module('litewait.services').factory('PubSub', PubSub);

    PubSub.$inject = ['$q', '$rootScope'];

    function PubSub($q, $rootScope) {

        return {

            publish: function(name, args) {

                if (!$rootScope.$$listeners[name]) {
                    return $q.when([]);
                }
                
                var deferred = [];
                for (var i = 0; i < $rootScope.$$listeners[name].length; i++) {
                    deferred.push($q.defer());
                }
                
                var eventArgs = {
                    args: args,
                    reject: function(a) {
                        deferred.pop().reject(a);
                    },
                    resolve: function(a) {
                        deferred.pop().resolve(a);
                    }
                };

                $rootScope.$emit(name, eventArgs);

                var promises = _.map(deferred, function(p) {
                    return p.promise;
                });
                return promises;
            },

            subscribe: function(name, callback, context) {
                var unsubscribeFn  =  $rootScope.$on(name, callback),
                    result = unsubscribeFn;

                if (context && angular.isFunction(context.$on)){
                    context.$on('$destroy', function(){
                        unsubscribeFn();
                    });
                    result = function(){};
                }
                return result;
            },

            unsubscribe: function(handle) {
                if (angular.isFunction(handle)) {
                    handle();
                }
            }
        };
    }
})(angular);


