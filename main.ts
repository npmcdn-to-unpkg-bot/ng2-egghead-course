/// <reference path="node_modules/angular2/typings/browser.d.ts" />

import {bootstrap} from 'angular2/platform/browser';
import {Component, Input} from 'angular2/core';
import {TodoInput} from './todoInput';
import {TodoService} from './todoService';
import {TodoList} from './todoList';
import {TodoSelState} from './todoSelState'

@Component({
  selector: 'app',
  directives: [TodoInput, TodoList, TodoSelState],
  template: `<div>
  	<p>Immediate rendering. TodoService+TodoList</p>
    <todo-input></todo-input><br />
    <state-selector (select)="state = $event"></state-selector>
    <todo-list [state]=state></todo-list>
    </div>`
})
class App{}

bootstrap(App, [TodoService]);
