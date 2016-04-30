'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ItemDeleteCtrl
 * @description
 * # ItemDeleteCtrl
 * Controller of the clientApp
 */
angular.module ( 'clientApp' )
       .controller ( 'ItemDeleteCtrl', function( $scope, $routeParams,
                                                 Item, $location ) {

           $scope.item       = Item.one ( $routeParams.id ).get ().$object;

           $scope.deleteItem = function() {
               $scope.item.remove ().then ( function() {
                   $location.path ( '/items' );
               } );
           };

           $scope.back       = function() {
               $location.path ( '/item/' + $routeParams.id );
           };

       } );