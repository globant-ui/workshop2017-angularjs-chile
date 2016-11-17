import {VerticalListComponent} from './vertical-list';
import {CommentsComponent} from './comments';
import {PaginationComponent} from './pagination';
import {TableListComponent} from './table-list';

import {routes} from './routes';
import {ApiService} from './services';

import 'bootstrap/dist/css/bootstrap.css';

angular.module('App', ['ngRoute'])
    .config(routes)
    .service('ApiService', ApiService)
    .component('tableList', TableListComponent)
    .component('verticalList', VerticalListComponent)
    .component('comments', CommentsComponent)
    .component('pagination', PaginationComponent);
