# ng-shadowbox

Lightweight Angular directive to trigger Shadowbox from AngularJS

Requires [Shadowbox.js](https://github.com/mjackson/shadowbox)

## Overview

Allows you to hook up Shadowbox when your HTML is rendered by Angular, for example with `ng-repeat`.

Here is a [Demo page](https://cdn.rawgit.com/aderowbotham/ng-shadowbox/master/demo/index.html)


## Attributes

* ngShadowbox - Required. Defines the url of the resource to be loaded into Shadowbox.
* ngShadowboxPlayer - Optional. Sets the player type. Defaults to "img"
* ngShadowboxGallery - Optional. Sets the gallery name passed to Shadowbox.
* ngShadowboxWidth - Optional. Sets the width passed to Shadowbox. Use this with the iFrame player type to override the automatic width.
* title - Optional. Standard title attribute. Passed as the title of the Shadowbox instance if set.




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

