import { PaginationComponent } from '../src/components/app/pagination'

describe("Pagination Controller", () => {

    let controller

    beforeEach(() => {
        angular
            .module("Test", [])
            .component('pagination', PaginationComponent)
    })

    beforeEach(window.module("Test"))

    beforeEach(inject(($componentController) => {
        controller = $componentController('pagination', null, {
            data: [],
            size: 10
        })
    }))

    it("change page", () => {
        console.log(controller)
    })
})
