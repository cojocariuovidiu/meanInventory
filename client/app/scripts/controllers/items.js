'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ItemsCtrl
 * @description
 * # ItemsCtrl
 * Controller of the clientApp
 */
angular.module ( 'clientApp' )
       .controller ( 'ItemsCtrl', function( $scope, Item ) {
           $scope.items = Item.getList ().$object;

       } );