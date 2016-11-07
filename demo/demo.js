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
        template : '<div class="demo-chapter clearfix"><h2 class="demo-title">{{title}}</h2><div ng-transclude></div></div>',
        link : function($scope, $el, $attr){
          $scope.title = $attr.chapter;
        }
      }
    });

    //title
    app.directive('subChapter', function(){
      return {
        restrict : 'AE',
        transclude : true,
        scope : true,
        template : '<div class="demo-sub-chapter clearfix"><h4 class="demo-title text-thin text-showy">{{title}}</h4><div class="demo-content"><div ng-include="page"></div></div></div>',
        link : function($scope, $el, $attr){
            $scope.title = $attr.subChapter;
            $scope.page = $attr.page + '.html';
        }
      }
    });

    //passage
    app.directive('passage', function(){
      return {
        restrict : 'AE',
        transclude : true,
        scope : true,
        template : '<div class="demo-passage clearfix"><h6 class="demo-title">{{title}}</h6><div ng-transclude></div></div>',
        link : function($scope, $el, $attr){
            $scope.title = $attr.passage;
        }
      }
    });

    //demo
    app.directive('selector', function(){
      return {
          restrict : 'AE',
          transclude : true,
          scope : true,
          template : '<div class="demo-selector clearfix"><div ng-transclude></div></div>',
          link : function($scope, $el, $attr){

          }
      }
    });
    app.directive('preview', function(){
        return {
            restrict : 'AE',
            transclude : true,
            scope : true,
            template : '<div class="demo-preview clearfix"><div ng-transclude></div></div>',
            link : function($scope, $el, $attr){

            }
        }
    });


    angular.element(document).ready(function(){
      angular.bootstrap(document,['demo']);
    });

})();