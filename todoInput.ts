import {Component, Inject} from 'angular2/core';
import {TodoService} from './todoService';

@Component({
  selector: 'todo-input',
  template: `changed to form, ngModel added
  <form (submit)="getFormData()">
  <input type=text [(ngModel)]=todoModel>
  <button>Button</button>
  </form>`
})

export class TodoInput{
  todoModel;
  constructor(@Inject(TodoService) public todoService:TodoService) {}

  getFormData() {
    this.todoService.todos.push(this.todoModel);
    console.log(this.todoService.todos);
  }
}
