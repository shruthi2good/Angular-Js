(function (){
  'use strict'

  angular.module('MenuApp',[])
    .controller('MenuController',MenuController);


    MenuController.$inject=['$scope'];
    function MenuController($scope){


       $scope.MenuCount=function () {
            $scope.name = $scope.name.split(',');
            if ($scope.name.length > 3 ) {
                var mesg1="Too much!";
                return $scope.messager=mesg1;
            } else {
                var mesg2="Enjoy!";
                return $scope.messager=mesg2;
            }
      }
  };



})();
