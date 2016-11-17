export class TableListController {
    columns = [];

    filter = false;
    filterModel = '';


    constructor ($scope, $element, $attrs) {
        this.columns = $attrs.columns
            .split(/\s*,\s*/).map(item => item.split(/\s*:\s*/));
        // REMOVE: out of the final version exercise
        this.filter = ('filter' in $attrs) ? true : false;
        // REMOVE: out of the final version exercise
    }
}


export const TableListComponent = {
    templateUrl: '/components/app/views/table-list.html',
    controller: TableListController,
    controllerAs: '$ctrl',
    bindings: {
        data: '=',
        paginate: '@?',
        type: '@',
    }
}
