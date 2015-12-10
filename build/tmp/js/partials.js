(function(module) {
try { module = angular.module("litewait"); }
catch(err) { module = angular.module("litewait", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("client/src/home/home.html",
    "Home page entry");
}]);
})();

(function(module) {
try { module = angular.module("litewait"); }
catch(err) { module = angular.module("litewait", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("client/src/navigation/navbar.html",
    "");
}]);
})();
