describe('escAction', function () {
    var actionStub,
        dom;

    beforeEach(module('mp.escAction'));

    beforeEach(inject(function ($rootScope, $compile) {

        actionStub = $rootScope.actionStub = jasmine.createSpy('actionStub');

        dom = angular.element(
            '<div esc-action="actionStub()">' +
            '</div>'
        );

        $compile(dom)($rootScope);
        $rootScope.$digest();
    }));

    it('evaluates the action expression when the ESC key is pressed', function () {
        dom.triggerHandler({ type: 'keyup', which: 27 });

        expect(actionStub).toHaveBeenCalled();
    });
});