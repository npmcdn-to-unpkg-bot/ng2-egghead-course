import {Component, Input, Inject} from 'angular2/core'
import {TodoService} from './todoService'
import {TodoItemImporter} from './todoItemImporter'
import {StatePipe} from './statePipe'
import {CustomPipe} from './customPipe'

@Component({
	selector: 'todo-list',
	pipes: [StatePipe, CustomPipe],
	directives: [TodoItemImporter],
	template: 
	`<ul>
		<li *ngFor="#todo of todoService.todos | state : state | search : chrz">
			<inpt-elem [todo]=todo (toggle)=todoService.toggleTodo($event)></inpt-elem>
		</li>
	</ul>`
})

export class TodoList {
	@Input() state;
	@Input() chrz;

	constructor(@Inject(TodoService) public todoService: TodoService) {}
}
