import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {TodoInput} from './todoInput';
import {TodoService} from './todoService';

@Component({
  selector: 'app',
  directives: [TodoInput],
  template: `<div>
  	<p>Here goes input component</p>
    <todo-input></todo-input>
    </div>`
})
class App{}

bootstrap(App, [TodoService]);
