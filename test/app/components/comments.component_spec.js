import { CommentsComponent } from 'components/app/comments'
import { ApiService } from 'components/app/services'

describe('Comments Controller', () => {

    let controller
    let trackId = '0021456'

    beforeAll(() => {
        angular
          .module('Test', ['ngRoute'])
          .component('comments', CommentsComponent)
          .service('ApiService', ApiService)
    })

    beforeEach(angular.mock.module('Test'))

    beforeEach(inject(($componentController, $routeParams, $route, ApiService) => {
        const deps = {
          $routeParams: $routeParams,
          $route: $route,
          ApiService: ApiService
        }
        $routeParams.trackId = trackId
        controller = $componentController('comments', deps, {
            data: []
        })
    }))

    it('should call Api service and reload route on submit', () => {
        const expectedComment = {
          message: 'Excelent',
          name: 'placeholder',
          trackId: trackId
        }

        //jest.spyOn(controller.route, 'reload')
        jest.spyOn(controller.ApiService, 'postCommentForTrack').mockReturnValueOnce(Promise.resolve())

        controller.commentField = expectedComment.message
        controller.onSubmit()

        //expect(controller.route.reload).toBeCalled()
        expect(controller.ApiService.postCommentForTrack).toBeCalledWith(expectedComment)

    })
})
