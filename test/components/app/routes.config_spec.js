import { routes} from 'components/app/routes'
import { ApiService } from 'components/app/services'

describe('Routes Config', () => {
    let rootScopeService
    let locationService
    let ApiServiceMock

    beforeAll(() => {
        angular
          .module('Test', ['ngRoute'])
          .config(routes)
          .service('ApiService', ApiService)
    })

    beforeEach(angular.mock.module('Test'))

    beforeEach(inject(($rootScope, $location, ApiService) => {
        rootScopeService = $rootScope
        locationService = $location
        ApiServiceMock = ApiService
    }))

    it('should call Api service on "/" path', () => {

        jest.spyOn(ApiServiceMock, 'getBands')

        locationService.path('/')
        rootScopeService.$digest()

        expect(ApiServiceMock.getBands).toBeCalled()
    })

    it('should call Api service using the given band id on band path', () => {
        const bandId = "1234"

        jest.spyOn(ApiServiceMock, 'getArtists')
        jest.spyOn(ApiServiceMock, 'getAlbums')

        locationService.path(`/band/${bandId}`)
        rootScopeService.$digest()

        expect(ApiServiceMock.getArtists).toBeCalledWith(bandId)
        expect(ApiServiceMock.getAlbums).toBeCalledWith(bandId)
    })

    it('should call Api service using the given band id and album id on album path', () => {
        const bandId = "1234"
        const albumId = "1"

        jest.spyOn(ApiServiceMock, 'getArtists')
        jest.spyOn(ApiServiceMock, 'getAlbums')
        jest.spyOn(ApiServiceMock, 'getAlbum')

        locationService.path(`/band/${bandId}/album/${albumId}`)
        rootScopeService.$digest()

        expect(ApiServiceMock.getArtists).toBeCalledWith(bandId)
        expect(ApiServiceMock.getAlbums).toBeCalledWith(bandId)
        expect(ApiServiceMock.getAlbum).toBeCalledWith(albumId)
    })

    it('should call Api service using the given band id, album id and track id on track path', () => {
        const bandId = "1234"
        const albumId = "1"
        const trackId = "9876"

        jest.spyOn(ApiServiceMock, 'getArtists')
        jest.spyOn(ApiServiceMock, 'getAlbums')
        jest.spyOn(ApiServiceMock, 'getAlbum')
        jest.spyOn(ApiServiceMock, 'getCommentsForTrack')

        locationService.path(`/band/${bandId}/album/${albumId}/track/${trackId}`)
        rootScopeService.$digest()

        expect(ApiServiceMock.getArtists).toBeCalledWith(bandId)
        expect(ApiServiceMock.getAlbums).toBeCalledWith(bandId)
        expect(ApiServiceMock.getAlbum).toBeCalledWith(albumId)
        expect(ApiServiceMock.getCommentsForTrack).toBeCalledWith(trackId)
    })

})
