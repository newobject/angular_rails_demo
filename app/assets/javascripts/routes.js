angular.module("angularRailsDemo").config(["$routeProvider", function($routeProvider){
  $routeProvider.
    when("/", { controller: "HomeCtrl", templateUrl: "/assets/home.html" }).
    when("/kendo/basic_use", { controller: "KendoBasicUseCtrl", templateUrl: "/assets/kendo/basicUse.html"}).
    otherwise({ redirectTo: "/" });
}]);