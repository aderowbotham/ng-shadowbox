# ng-shadowbox

Lightweight Angular directive to trigger Shadowbox from AngularJS

Requires [Shadowbox.js](https://github.com/mjackson/shadowbox)


## Usage

HTML:

    <div ng-app="app" ng-controller="demoCtrl">

      <h1>ng-shadowbox demo</h1>

      <h2>Images</h2>
      <a ng-repeat="link in links" ng-shadowbox="images/{{ link.href }}" title="{{ link.title }}">{{ link.title }}</a>

      <h2>Document</h2>
      <a ng-shadowbox="https://aderowbotham.com" ng-shadowbox-player="iframe" title="iFrame link">iFrame link</a>

    </div>


JavaScript

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

