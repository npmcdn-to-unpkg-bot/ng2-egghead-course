import {Component, Inject} from 'angular2/core';
import {TodoService} from './todoService';
import {TodoModel} from './todoModel';

@Component({
  selector: 'todo-input',
  template: `todoModel added
  <form (submit)="getFormData()">
  <input type=text [(ngModel)]=todoModel.title>
  <button>Button</button>
  </form>`
})

export class TodoInput{
  todoModel:TodoModel = new TodoModel();
  constructor(@Inject(TodoService) public todoService:TodoService) {}

  getFormData() {
    this.todoService.addTodo(this.todoModel);
    console.log(this.todoService.todos);
    this.todoModel = new TodoModel();
  }
}
