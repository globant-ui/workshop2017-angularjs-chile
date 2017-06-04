class PaginationController {
    originalData = []
    currentPage = 1
    lastPage = null
    pageSize = 10

    constructor () {
        this.originalData = this.data || this.originalData;
        this.pageSize = this.size || this.pageSize;
        this.lastPage = Math.ceil(this.originalData.length / this.pageSize);
    }

    $onInit() {
        this.paginate();
    }

    nextPage() {
        let nextPage = this.currentPage + 1;

        if (nextPage <= this.lastPage) {
            this.currentPage = nextPage;
            this.paginate();
        }
    }

    prevPage() {
        let prevPage = this.currentPage - 1;

        if (prevPage > 0) {
            this.currentPage = prevPage;
            this.paginate();
        }
    }

    paginate() {
        let start = (this.currentPage - 1) * this.pageSize;
        let end = this.currentPage * this.pageSize;

        this.data = this.originalData.slice(start, end);
    }
}

export const PaginationComponent = {
  templateUrl: '/components/app/views/pagination.html',
  controller: PaginationController,
  controllerAs: '$ctrl',
  bindings: {
      data: '=',
      size: '<'
  }
}
