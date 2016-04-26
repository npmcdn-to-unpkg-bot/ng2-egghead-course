import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {TodoInput} from './todoInput';
import {TodoService} from './todoService';
import {TodoList} from './todoList';

@Component({
  selector: 'app',
  directives: [TodoInput, TodoList],
  template: `<div>
  	<p>Immediate rendering. TodoService+TodoList</p>
    <todo-input></todo-input><br />
    <todo-list></todo-list>
    </div>`
})
class App{}

bootstrap(App, [TodoService]);
