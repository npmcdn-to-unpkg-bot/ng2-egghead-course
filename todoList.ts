import {Component, Inject} from 'angular2/core'
import {TodoService} from './todoService'
import {TodoItemImporter} from './todoItemImporter'
import {CustomPipe} from './customPipe'

@Component({
	selector: 'todo-list',
	pipes: [CustomPipe],
	directives: [TodoItemImporter],
	template: 
	`<ul>
		<li *ngFor="#todo of todoService.todos | search" [hidden]="todo.state!='started'">
			<inpt-elem [todo]=todo></inpt-elem>
		</li>
	</ul>`
})

export class TodoList {
	constructor(@Inject(TodoService) public todoService: TodoService) {}
}
