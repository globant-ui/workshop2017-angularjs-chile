export class CommentsController {
    commentField = '';

    constructor ($routeParams, $route, ApiService) {
        this.routeParams = $routeParams;
        this.route = $route;
        this.ApiService = ApiService;
    }

    onSubmit () {
      this.ApiService.postCommentForTrack({
          message: this.commentField,
          name: 'placeholder',
          trackId: this.routeParams.trackId,
      })
      .then(response => {
          this.route.reload();
          return response.data;
      });
    }
}

export const CommentsComponent = {
    templateUrl: '/components/app/views/comments.html',
    controller: CommentsController,
    controllerAs: '$ctrl',
    bindings: {
        data: '=',
    }
}
