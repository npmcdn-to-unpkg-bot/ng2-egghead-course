import {Component, Inject} from 'angular2/core'
import {TodoService} from './todoService'

@Component({
	selector: 'todo-list',
	template: 
	`<ul>
		<li *ngFor="#todo of todoService.todos">
			{{todo}}
		</li>
	</ul>`
})

export class TodoList {
	constructor(@Inject(TodoService) public todoService: TodoService) {}
}
