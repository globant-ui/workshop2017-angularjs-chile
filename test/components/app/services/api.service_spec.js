import { ApiService } from 'components/app/services'

describe('Api Service', () => {

    let ApiServiceInstance
    let httpService
    let rootScopeService

    beforeAll(() => {
        angular
          .module('Test', [])
          .service('ApiService', ApiService)
    })

    beforeEach(angular.mock.module('Test'))

    beforeEach(inject(($rootScope, $http, ApiService) => {
        rootScopeService = $rootScope
        httpService = $http
        ApiServiceInstance = ApiService
    }))

    it('should response data on getBands calling "url/bands" endpoint', async () => {
        const expectedUrl = `${ApiServiceInstance.url}/bands`
        const response = {
          data: [
            { id: 1, name: 'Pescado Rabioso'},
            { id: 2, name: 'Spinetta jade'}
          ]
        }
        jest.spyOn(ApiServiceInstance.http, 'get').mockReturnValueOnce(Promise.resolve(response))

        const apiResponse = await ApiServiceInstance.getBands()

        expect(ApiServiceInstance.http.get).toBeCalledWith(expectedUrl)
        expect(apiResponse).toEqual(response.data)
    })

    it('should response data on getBand calling "url/bands/:bandId" endpoint', async () => {
        const bandId = "1"
        const expectedUrl = `${ApiServiceInstance.url}/bands/${bandId}`
        const response = {
          data: {
            name: "Pescado Rabioso"
          }
        }
        jest.spyOn(ApiServiceInstance.http, 'get').mockReturnValueOnce(Promise.resolve(response))

        const apiResponse = await ApiServiceInstance.getBand(bandId)

        expect(ApiServiceInstance.http.get).toBeCalledWith(expectedUrl)
        expect(apiResponse).toEqual(response.data)
    })

    it('should response data on getArtists calling "url/bands/:bandId/artist" endpoint', async () => {
        const bandId = "1"
        const expectedUrl = `${ApiServiceInstance.url}/bands/${bandId}/artists`
        const response = {
          data: [
            { name: 'Luis Alberto Spinetta' }
          ]
        }
        jest.spyOn(ApiServiceInstance.http, 'get').mockReturnValueOnce(Promise.resolve(response))

        const apiResponse = await ApiServiceInstance.getArtists(bandId)

        expect(ApiServiceInstance.http.get).toBeCalledWith(expectedUrl)
        expect(apiResponse).toEqual(response.data)
    })

    it('should response data on getAlbums calling "url/bands/:bandId/albums" endpoint', async () => {
        const bandId = "1"
        const expectedUrl = `${ApiServiceInstance.url}/bands/${bandId}/albums`
        const response = {
          data: [
            { name: 'Desatormentándonos' },
            { name: 'Pescado 2' }
          ]
        }
        jest.spyOn(ApiServiceInstance.http, 'get').mockReturnValueOnce(Promise.resolve(response))

        const apiResponse = await ApiServiceInstance.getAlbums(bandId)

        expect(ApiServiceInstance.http.get).toBeCalledWith(expectedUrl)
        expect(apiResponse).toEqual(response.data)
    })

    it('should response data on getAlbum calling "url/albums/:albumId/tracks" endpoint', async () => {
        const albumId = "9876"
        const expectedUrl = `${ApiServiceInstance.url}/albums/${albumId}/tracks`
        const response = {
          data: [
            { name: 'Blues de Cris' },
            { name: 'El Jardinero' },
            { name: 'Dulce 3 nocturno' }
          ]
        }
        jest.spyOn(ApiServiceInstance.http, 'get').mockReturnValueOnce(Promise.resolve(response))

        const apiResponse = await ApiServiceInstance.getAlbum(albumId)

        expect(ApiServiceInstance.http.get).toBeCalledWith(expectedUrl)
        expect(apiResponse).toEqual(response.data)
    })

    it('should response data on getTrack calling "url/tracks/:trackId" endpoint', async () => {
        const trackId = "6745"
        const expectedUrl = `${ApiServiceInstance.url}/tracks/${trackId}`
        const response = {
          data: [
            { name: 'Blues de Cris' },
          ]
        }
        jest.spyOn(ApiServiceInstance.http, 'get').mockReturnValueOnce(Promise.resolve(response))

        const apiResponse = await ApiServiceInstance.getTrack(trackId)

        expect(ApiServiceInstance.http.get).toBeCalledWith(expectedUrl)
        expect(apiResponse).toEqual(response.data)
    })

    it('should response data on getCommentsForTrack calling "url/tracks/:trackId/comments" endpoint', async () => {
        const trackId = "6745"
        const expectedUrl = `${ApiServiceInstance.url}/tracks/${trackId}/comments`
        const response = {
          data: [
            { text: 'Temazo!' },
          ]
        }
        jest.spyOn(ApiServiceInstance.http, 'get').mockReturnValueOnce(Promise.resolve(response))

        const apiResponse = await ApiServiceInstance.getCommentsForTrack(trackId)

        expect(ApiServiceInstance.http.get).toBeCalledWith(expectedUrl)
        expect(apiResponse).toEqual(response.data)
    })

    it('should post data on postCommentForTrack calling "url/comments" endpoint', async () => {
        const trackId = "6745"
        const expectedUrl = `${ApiServiceInstance.url}/comments`
        const postData = {
          trackId: "6745",
          text: "Tremendo Blues"
        }
        const response = {
          data: {
            status: 'Message Sended Successfully'
          }
        }
        jest.spyOn(ApiServiceInstance.http, 'post').mockReturnValueOnce(Promise.resolve(response))

        const apiResponse = await ApiServiceInstance.postCommentForTrack(postData)

        expect(ApiServiceInstance.http.post).toBeCalledWith(expectedUrl, postData)
        expect(apiResponse).toEqual(response.data)
    })
})
