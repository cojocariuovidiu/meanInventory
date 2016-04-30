'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ItemAddCtrl
 * @description
 * # ItemAddCtrl
 * Controller of the clientApp
 */


angular.module ( 'clientApp' )
       .controller ( 'ItemAddCtrl', function( $scope,
                                              Item,
                                              $location ) {

           $scope.item     = {};

           $scope.saveItem = function() {
               Item.post ( $scope.item ).then ( function() {
                   $location.path ( '/items' );
               } );
           };

       } );