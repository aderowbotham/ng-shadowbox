(function(){

  "use strict";


  angular.module("app", ["ngShadowbox"]).
  controller("demoCtrl", ["$scope", function($scope){

    $scope.links = [
       {
         href: "images/image1.png",
         title: "Image 1"
       },
       {
         href: "images/image2.png",
         title: "Image 2"
       },
       {
         href: "images/image3.png",
         title: "Image 3"
       }
    ];
  }]);

}());
