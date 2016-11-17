export class TableListController {
    columns = [];

    constructor ($scope, $element, $attrs) {
        this.columns = $attrs.columns
            .split(/\s*,\s*/).map(item => item.split(/\s*:\s*/));
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
