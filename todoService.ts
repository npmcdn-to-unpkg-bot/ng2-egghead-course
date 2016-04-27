import {Injectable} from 'angular2/core'
import {TodoModel} from './todoModel'

@Injectable()
export class TodoService {
  todos = [
    new TodoModel("eat"),
    new TodoModel("sleep"),
    new TodoModel("walk"),
    new TodoModel("ride"),
    new TodoModel("talk"),
    new TodoModel("move")
  ];

  addTodo(todo:TodoModel){
    this.todos = [...this.todos, todo];
  }

  toggleTodo(todo:TodoModel){
    //todo.toggleState();
    const i = this.todos.indexOf(todo);
    const toggled = Object.assign({}, todo, {state: todo.state === 'started' ? 'completed' : todo.state})
    this.todos = [
      ...this.todos.slice(0, i),
      toggled,
      ...this.todos.slice(i + 1)
    ]
  }
}
