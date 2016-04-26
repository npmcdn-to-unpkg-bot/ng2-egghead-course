import {Component, Input} from 'angular2/core';

@Component({
	
	selector: 'inpt-elem',
	template: `
		<div>
			<p>
			<button (click)="todo.toggleState()">Completed</button> 
			{{todo.title}}
			</p>
		</div>`
})

export class TodoItemImporter{
	@Input() todo;
}
