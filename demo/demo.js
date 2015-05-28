'use strict';


angular.module('app', ['ngShadowbox']).
controller("demoCtrl", ['$scope', function($scope){

  $scope.links = [
     {
       href: "image1.png",
       title: "Image 1"
     },
     {
       href: "image2.png",
       title: "Image 2"
     },
     {
       href: "image3.png",
       title: "Image 3"
     }
  ];
}]);
