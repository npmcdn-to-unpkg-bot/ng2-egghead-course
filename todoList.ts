import {Component, Inject} from 'angular2/core'
import {TodoService} from './todoService'
import {TodoItemImporter} from './todoItemImporter'
import {StatePipe} from './statePipe'

@Component({
	selector: 'todo-list',
	pipes: [StatePipe],
	directives: [TodoItemImporter],
	template: 
	`<ul>
		<li *ngFor="#todo of todoService.todos | state">
			<inpt-elem [todo]=todo (toggle)=todoService.toggleTodo($event)></inpt-elem>
		</li>
	</ul>`
})

export class TodoList {
	constructor(@Inject(TodoService) public todoService: TodoService) {}
}
