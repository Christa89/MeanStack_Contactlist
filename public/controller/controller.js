//<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.6/angular.min.js"></script>

var app  = angular.module('app',[])

app.controller('AppCtrl', ['$scope', '$http', function($scope,$http) {
    console.log('controller is working');


   
    var referseh = function(){
        $http.get('/contactlist').then(function(res){
            
                  $scope.contactlist = res.data;
                   console.log(res.data);
            
               },function(err){
            
                   console.log('error occur');
               })
    }

    referseh();

 

    $scope.AddContactlist = function(data) {

      //  console.log(data);

      $http.post('/contactlist',{data}).then(function(res){

        referseh();
        console.log('Success');
     
      },function(err){
        console.log("client"+err.nessage);
      })
    }

  }]);


//  function appCtrl()
//  {
//     console.log('controller is working')
//  }