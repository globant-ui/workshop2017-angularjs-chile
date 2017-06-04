import { CommentsComponent } from 'components/app/comments'
import { ApiService } from 'components/app/services'

describe('Comments Controller', () => {

    let rootScopeService
    let controller
    let trackId = '0021456'

    beforeAll(() => {
        angular
          .module('Test', ['ngRoute'])
          .component('comments', CommentsComponent)
          .service('ApiService', ApiService)
    })

    beforeEach(angular.mock.module('Test'))

    beforeEach(inject(($rootScope, $componentController, $routeParams, $route, ApiService) => {
        const deps = {
          $routeParams,
          $route,
          ApiService
        }
        rootScopeService = $rootScope
        $routeParams.trackId = trackId
        controller = $componentController('comments', deps, {
            data: []
        })
    }))

    it('should call Api service and reload route on submit', async () => {
        const expectedComment = {
          message: 'Excelent',
          name: 'placeholder',
          trackId: trackId
        }
        jest.spyOn(controller.ApiService, 'postCommentForTrack').mockReturnValueOnce(Promise.resolve())
        jest.spyOn(controller.route, 'reload')

        controller.commentField = expectedComment.message
        await controller.onSubmit()

        expect(controller.ApiService.postCommentForTrack).toBeCalledWith(expectedComment)
        expect(controller.route.reload).toBeCalled()
    })
})
