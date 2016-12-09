/*var myapp = angular.module('mainApp', []);
myapp.controller('mainController',function($scope,$http){

    $scope.contents = null;
    $http.get('mainContent.json')
        
        .success(function(data) {
            $scope.contents = parseJSON(data[0]);
        })

        .error(function(data,status,error,config){
            $scope.contents = [{heading:"Error",description:"Could not load json   data"}];
        });

    //$scope.contents = [{heading:"Content heading", description:"The actual content"}];
    //Just a placeholder. All web content will be in this format
});
*/


var myapp = angular.module('education',[]);

myapp.controller('educationCtrl',function($scope,$http){
    $scope.result = null;
    
    $http({method: 'GET', url: 'Results.json'})
    .success(function(data, status, headers, config) {
        $scope.results=data;
    })
    .error(function(data, status, headers, config) {          
        $scope.results = [{subject:"Error",grade:"Could not load json data"}];
    });
});
