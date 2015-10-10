(function(){

    var app = angular.module('demo',['demoTemplate']);
    app.run(function($rootScope, $templateCache){
    });

    //chapter
    app.directive('chapter', function(){
      return {
        restrict : 'AE',
        transclude : true,
        scope : true,
        template : '<div class="demo-chapter"><h2 class="demo-title">{{chapter}}</h2><div ng-transclude></div></div>',
        link : function($scope, $el, $attr){
          $scope.chapter = $attr.chapter;
        }
      }
    });

    //title
    app.directive('subChapter', function(){
      return {
        restrict : 'AE',
        transclude : true,
        scope : true,
        template : '<div><h4 class="demo-title">{{title}}</h4><div class="demo-content"><div ng-include="page"></div></div></div>',
        link : function($scope, $el, $attr){
            $scope.title = $attr.subChapter;
            $scope.page = $attr.page + '.html';
        }
      }
    });

    angular.element(document).ready(function(){
      angular.bootstrap(document,['demo']);
    });

})();