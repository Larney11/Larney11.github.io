var myapp = angular.module('education',[]);

myapp.controller('educationCtrl',function($scope,$http){
    $scope.result = null;
    
    $http({method: 'GET', url: './Results.json'})
    .success(function(data, status, headers, config) {
        $scope.results=data;
    })
    .error(function(data, status, headers, config) {          
        $scope.results = [{subject:"Error",grade:"Could not load json data"}];
    });
});

