'use strict';

describe ( 'Controller: ItemAddCtrl', function() {

    // load the controller's module
    beforeEach ( module ( 'clientApp' ) );

    var ItemAddCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach ( inject ( function( $controller, $rootScope ) {
        scope       = $rootScope.$new ();
        ItemAddCtrl = $controller ( 'ItemAddCtrl', {
            $scope: scope
        } );
    } ) );

    it ( 'should attach a list of awesomeThings to the scope', function() {
        expect ( scope.awesomeThings.length ).toBe ( 3 );
    } );
} );