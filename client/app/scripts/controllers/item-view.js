'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ItemViewCtrl
 * @description
 * # ItemViewCtrl
 * Controller of the clientApp
 */
angular.module ( 'clientApp' )
       .controller ( 'ItemViewCtrl', function( $scope,
                                               $routeParams,
                                               Item ) {
           $scope.viewItem = true;
           $scope.item     = Item.one ( $routeParams.id ).get ().$object;
       } );