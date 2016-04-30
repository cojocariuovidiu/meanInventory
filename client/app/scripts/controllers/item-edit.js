'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ItemEditCtrl
 * @description
 * # ItemEditCtrl
 * Controller of the clientApp
 */
angular.module ( 'clientApp' )
       .controller ( 'ItemEditCtrl', function( $scope,
                                               $routeParams,
                                               Item,
                                               $location ) {
           $scope.editItem = true;
           $scope.item     = {};
           Item.one ( $routeParams.id ).get ().then ( function( item ) {
               $scope.item     = item;
               $scope.saveItem = function() {
                   $scope.item.save ().then ( function() {
                       $location.path ( '/item/' + $routeParams.id );
                   } );
               };
           } );

       } );