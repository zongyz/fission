(function(module) {
try { module = angular.module("demoTemplate"); }
catch(err) { module = angular.module("demoTemplate", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("text.font.html",
    "<div>\n" +
    "  基本字体定义\n" +
    "</div>");
}]);
})();
