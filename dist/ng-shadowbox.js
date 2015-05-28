'use strict';

angular.module('ngShadowbox', []).directive('ngShadowbox', function($window) {

  return {
    restrict: 'A',
    replace: false,
    link: function(scope, element, attrs){

      if(!$window.Shadowbox){
        throw Error("Shadowbox is not loaded");
      }

      $window.Shadowbox.init({
        skipSetup: true
      });

      if(!attrs.ngShadowbox){
        throw Error("No Shadobox target found"); 
      } 

      var playerTitle = attrs.title ? attrs.title : "Shadowbox";
      var playerType = attrs.ngShadowboxPlayer ? attrs.ngShadowboxPlayer : "img";
      var gallery = attrs.ngShadowboxGallery ? attrs.ngShadowboxGallery : "ng-shadowbox";

      element.bind('click', function() {
        $window.Shadowbox.open({
          content:    attrs.ngShadowbox,
          title:      playerTitle,
          player:     playerType,
          gallery:    gallery,
          options:  {
            handleOversize: "resize"
          }       
        });
      });
    }
  }

});
