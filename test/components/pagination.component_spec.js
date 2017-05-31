import { PaginationComponent } from '../../src/components/app/pagination'

describe('Pagination Controller', () => {

    let controller
    let dataSample = [
      {name: 'Miles'},
      {name: 'Charly'},
      {name: 'John'},
      {name: 'Kurt'},
      {name: 'Kenny'},
      {name: 'Bob'}
    ]

    beforeAll(() => {
        angular.module('Test', []).component('pagination', PaginationComponent)
    })

    beforeEach(angular.mock.module('Test'))

    beforeEach(inject(($componentController, ) => {
        controller = $componentController('pagination', null, {
            data: dataSample,
            size: 5
        })
        controller.constructor() //should be automatic with $componentController
    }))

    it('should call paginate method on $onInit', () => {
        controller.paginate = jest.fn()
        controller.$onInit()
        expect(controller.paginate).toBeCalled()
    })

    it('should change to the next page until the lastPage and call paginate', () => {
        controller.paginate = jest.fn()
        controller.currentPage = 1

        controller.nextPage()

        expect(controller.currentPage).toEqual(2)
        expect(controller.paginate).toBeCalled()

        controller.paginate.mockClear()
        controller.nextPage()

        expect(controller.currentPage).toEqual(2)
        expect(controller.paginate).not.toBeCalled()
    })
})
