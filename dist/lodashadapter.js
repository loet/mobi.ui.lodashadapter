/* mobi.ui.lodashadapter - v0.0.1 - 2014-12-15 */

angular.module('mobi.ui.lodashadapter', [
    'mobi.ui.lodashadapter.services'
]);

angular.module('mobi.ui.lodashadapter.services', [])
    .factory('_', function ($window) {
        return $window._;
    });