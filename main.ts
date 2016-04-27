/// <reference path="node_modules/angular2/typings/browser.d.ts" />

import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {TodoInput} from './todoInput';
import {TodoService} from './todoService';
import {TodoList} from './todoList';
import {TodoSelState} from './todoSelState';
import {TodoSearchBox} from './todoSearchBox';

@Component({
  selector: 'app',
  directives: [TodoInput, TodoList, TodoSelState, TodoSearchBox],
  template: `<div>
  	<search-box (term)="chrz = $event"></search-box>
    <todo-input></todo-input><br />
    <state-selector (select)="state = $event"></state-selector>
    <todo-list [state]=state [chrz]=chrz></todo-list>
    </div>`
})
class App{}

bootstrap(App, [TodoService]);
