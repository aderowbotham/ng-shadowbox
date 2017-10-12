(function(){

  "use strict";

  angular.module("ngShadowbox", []).directive("ngShadowbox", function($window) {

    return {
      restrict: "A",
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

        var playerTitle = attrs.title ? attrs.title : "ng-shadowbox";
        var playerType = attrs.ngShadowboxPlayer ? attrs.ngShadowboxPlayer : "img";
        var gallery = attrs.ngShadowboxGallery ? attrs.ngShadowboxGallery : "ng-shadowbox";
        var width = attrs.ngShadowboxWidth ? attrs.ngShadowboxWidth : null;
        var height = attrs.ngShadowboxHeight ? attrs.ngShadowboxHeight : null;

        element.bind("click", function() {

          var opts = {
            content:    attrs.ngShadowbox,
            title:      playerTitle,
            player:     playerType,
            gallery:    gallery,
            options:  {
              handleOversize: "resize"
            }
          };

          if(width){
            opts.width = width;
          }

          if(height){
            opts.height = height;
          }

          $window.Shadowbox.open(opts);
        });
      }
    };

  });

}());
