/**
 * Created by Mazen
 */


'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
.module ( 'clientApp', [
    'ngRoute',
    'restangular'
] )
.config ( function( $routeProvider, RestangularProvider ) {

    // Set the base URL for Restangular.
    RestangularProvider.setBaseUrl ( 'http://localhost:3000' );

    $routeProvider
    .when ( '/', {
        templateUrl: 'views/main.html',
        controller:  'MainCtrl'
    } )
    .when ( '/about', {
        templateUrl: 'views/about.html',
        controller:  'AboutCtrl'
    } )
    .when ( '/items', {
        templateUrl: 'views/items.html',
        controller:  'ItemsCtrl'
    } )
    .when ( '/create/item', {
        templateUrl: 'views/item-add.html',
        controller:  'ItemAddCtrl'
    } )
    .when ( '/item/:id', {
        templateUrl: 'views/item-view.html',
        controller:  'ItemViewCtrl'
    } )
    .when ( '/item/:id/edit', {
        templateUrl: 'views/item-edit.html',
        controller:  'ItemEditCtrl'
    } )
    .when ( '/item/:id/delete', {
        templateUrl: 'views/item-delete.html',
        controller:  'ItemDeleteCtrl'
    } )
    .otherwise ( {
        redirectTo: '/'
    } );
} )
.factory ( 'ItemRestangular', function( Restangular ) {
    return Restangular.withConfig ( function( RestangularConfigurer ) {
        RestangularConfigurer.setRestangularFields ( {
            id: '_id'
        } );
    } );
} )
.factory ( 'Item', function( ItemRestangular ) {
    return ItemRestangular.service ( 'item' );
} )
.directive ( 'youtube', function() {
    return {
        restrict:    'E',
        scope:       {
            src: '='
        },
        templateUrl: 'views/youtube.html'
    };
} )
.filter ( 'trusted', function( $sce ) {
    return function( url ) {
        return $sce.trustAsResourceUrl ( url );
    };
} );