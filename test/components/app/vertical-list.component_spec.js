import { VerticalListComponent } from 'components/app/vertical-list'

describe('Vertical List Component', () => {

    beforeAll(() => {
        angular
          .module('Test', [])
          .component('verticalList', VerticalListComponent)
    })

    beforeEach(angular.mock.module('Test'))

    beforeEach(inject(($componentController) => {

    }))

    it('', () => {
        
    })
})
