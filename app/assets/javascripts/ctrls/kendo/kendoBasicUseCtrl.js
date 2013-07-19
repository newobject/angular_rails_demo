angular.module("angularRailsDemo").controller("KendoBasicUseCtrl", ["$scope", function($scope){
  $scope.things = new kendo.data.DataSource({
    data: [{
      name: "Things 1", id: 1
    }, {
      name: "Things 2", id: 2
    }, {
      name: "Things 3", id: 3
    }]
  });

  $scope.thingsOptions = {
    dataSource: $scope.things,
    dataTextField: "name",
    dataValueField: "id",
    optionLabel: "Select A Thing"
  };

  $scope.thingsChange = function(e){
    console.log(e);
  };

  $scope.openModal = function(){
    $scope.modal.center().open();
  };
}]);