var myApp = angular.module('myApp', []);


myApp.controller('MainController', function MainController($scope, $http) {
  var onUserComplete = function(response) {
    $scope.user = response.data;
  };

  var onError = function(reason) {
    $scope.error = "Could not fetch the user";
  };

  $http.get("https://api.github.com/users/Guillermo987")
    .then(onUserComplete);


  $scope.message = "Hello, Angular";

});
