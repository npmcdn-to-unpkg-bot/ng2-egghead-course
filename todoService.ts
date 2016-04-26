import {Injectable} from 'angular2/core'
import {TodoModel} from './todoModel'

@Injectable()
export class TodoService {
  todos = [
    new TodoModel("eat"),
    new TodoModel("sleep"),
    new TodoModel("walk")
  ];
}
