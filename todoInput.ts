import {Component, Inject} from 'angular2/core';
import {TodoService} from './todoService';

@Component({
  selector: 'todo-input',
  template: `Button click w/ value passed, w/ $event passed<br />
  Adding injectable TodoService<br />
  <input type=text #txt>
  <button (click)="click_event(txt.value)">Button Click</button>`
})

export class TodoInput{
  constructor(@Inject(TodoService) public todoService:TodoService) {}

  click_event(txt) {
    this.todoService.todos.push(txt);
    console.log(txt+ " hb pushed");
    console.log(this.todoService.todos);
  }
}
