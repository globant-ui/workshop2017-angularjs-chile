import { TableListComponent } from 'components/app/table-list'

describe('Table List Controller', () => {

    let controller
    let columns = "name:Name, foundedDate:Founded, endDate:Ended"

    beforeAll(() => {
        angular
          .module('Test', [])
          .component('tableList', TableListComponent)
    })

    beforeEach(angular.mock.module('Test'))

    beforeEach(inject(($componentController) => {
        const $attrs = {
            columns : columns
        }
        const deps = {
            $attrs : $attrs
        }
        controller = $componentController('tableList', deps, {
            data : [],
            paginate: 1,
            type: 'band'
        })
    }))

    it('should create columns array of arrays with the key name of columns and the header name', () => {
        const expectedColumns = [
            [ 'name', 'Name' ],
            [ 'foundedDate', 'Founded' ],
            [ 'endDate', 'Ended' ]
        ]
        expect(controller.columns).toEqual(expectedColumns)
    })
})
