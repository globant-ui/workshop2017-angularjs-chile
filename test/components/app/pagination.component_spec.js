import { PaginationComponent } from 'components/app/pagination'

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

    it('should change to the prev page until the firstPage and call paginate', () => {
        controller.paginate = jest.fn()
        controller.currentPage = 2

        controller.prevPage()

        expect(controller.currentPage).toEqual(1)
        expect(controller.paginate).toBeCalled()

        controller.paginate.mockClear()
        controller.prevPage()

        expect(controller.currentPage).toEqual(1)
        expect(controller.paginate).not.toBeCalled()
    })

    it('should modify the data array based on the current page when paginate it is called', () => {
        const page1Array = dataSample.slice(0,5)
        const page2Array = dataSample.slice(5,6)

        controller.currentPage = 1
        controller.paginate()

        expect(controller.data).toEqual(page1Array)

        controller.currentPage = 2
        controller.paginate()

        expect(controller.data).toEqual(page2Array)
    })
})
