define([ 'angular' ], function (ng) {
    'use strict';

    ng.module('app.admin.escAction', []).directive('escAction', function () {
        return {
            restrict: 'A',

            link: {
                pre: function ($scope, element, $attr) {
                    var escExpr = $attr.escAction;

                    element.bind('keyup', function (event) {
                        // if pressed ESC
                        if (event.which === 27) {
                            $scope.$apply(function () {
                                $scope.$eval(escExpr);
                            });
                            event.preventDefault();
                        }
                    });
                }
            }
        };
    });
});
