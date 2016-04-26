import {Component, Inject} from 'angular2/core'
import {TodoService} from './todoService'

@Component({
	selector: 'todo-list',
	template: 
	`<ul>
		<li *ngFor="#todo of todoService.todos" [hidden]="todo.state!='started'">
			<p>
			<button (click)="todo.toggleState()">Completed</button> 
			{{todo.title}}
			</p>
		</li>
	</ul>`
})

export class TodoList {
	constructor(@Inject(TodoService) public todoService: TodoService) {}
}
