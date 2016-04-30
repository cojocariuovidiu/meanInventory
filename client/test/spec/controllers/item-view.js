/**
 * Created by Mazen.
 */


'use strict';

describe ( 'Controller: ItemViewCtrl', function() {

    // load the controller's module
    beforeEach ( module ( 'clientApp' ) );

    var ItemViewCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach ( inject ( function( $controller, $rootScope ) {
        scope        = $rootScope.$new ();
        ItemViewCtrl = $controller ( 'ItemViewCtrl', {
            $scope: scope
        } );
    } ) );

    it ( 'should attach a list of awesomeThings to the scope', function() {
        expect ( scope.awesomeThings.length ).toBe ( 3 );
    } );
} );
