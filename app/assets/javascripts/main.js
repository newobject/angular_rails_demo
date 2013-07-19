angular.module("angularRailsDemo", ["kendo.directives"])
  .config(["$locationProvider", function($locationProvider){
    $locationProvider.html5Mode(true);
  }])
  .config(["$httpProvider", function($httpProvider){
    var csrfToken = $("meta[name=csfr-token]").attr("content");

    $httpProvider.defaults.headers.common["X-CSRF-Token"] = csrfToken;
  }]);