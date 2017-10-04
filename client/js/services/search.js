angular.module('spotify', [])
    .factory('spotifyservice', function($resource) {
        return {
            search: $resource('/api/search'),
            detai: $resource('/api/detai'),
             det: $resource('/api/det')


           
        }
    })