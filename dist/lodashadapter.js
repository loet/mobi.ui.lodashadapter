angular.module('mobi.ui.lodashadapter', [
    'mobi.ui.lodashadapter.services'
]);

angular.module('mobi.ui.lodashadapter.services', [])
    .factory('_', function ($window) {
        return $window._;
    });