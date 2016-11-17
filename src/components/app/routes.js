import 'angular-route';



export function routes($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false,
        rewriteLinks: true,
    });

    $routeProvider
        .otherwise('/')
        .when('/', {
            templateUrl: '/components/app/views/index.html',
            resolve: {
                data: ApiService => ApiService.getBands()
            },
        })
        .when('/band/:bandId/', {
            templateUrl: '/components/app/views/band-detail.html',
            resolve: {
              artists: ($route, ApiService) =>
                  ApiService.getArtists($route.current.params.bandId),
              albums: ($route, ApiService) =>
                  ApiService.getAlbums($route.current.params.bandId)
            },
        })
        .when('/band/:bandId/album/:albumId/', {
            templateUrl: '/components/app/views/band-detail.html',
            resolve: {
              artists: ($route, ApiService) =>
                  ApiService.getArtists($route.current.params.bandId),
              albums: ($route, ApiService) =>
                  ApiService.getAlbums($route.current.params.bandId),
              tracks: ($route, ApiService) =>
                  ApiService.getAlbum($route.current.params.albumId),
            },
        })
        .when('/band/:bandId/album/:albumId/track/:trackId/', {
            templateUrl: '/components/app/views/band-detail.html',
            resolve: {
                artists: ($route, ApiService) =>
                    ApiService.getArtists($route.current.params.bandId),
                albums: ($route, ApiService) =>
                    ApiService.getAlbums($route.current.params.bandId),
                tracks: ($route, ApiService) =>
                    ApiService.getAlbum($route.current.params.albumId),
                comments: ($route, ApiService) =>
                    ApiService.getCommentsForTrack($route.current.params.trackId),
            },
        });
}
