import {Component, Input, Output, EventEmitter, ViewEncapsulation} from 'angular2/core';

@Component({
	encapsulation: ViewEncapsulation.Emulated,
	selector: 'inpt-elem',
	template: `
		<style>
			p.started {background:#dedecc; padding: 4px 8px; font-family: Tahoma; font-size: 6vh;}
		</style>
		<div>
			<p [ngClass]="todo.state">
			<button (click)="toggle.emit(todo)">Completed</button> 
			{{todo.title}}
			</p>
		</div>`
})

export class TodoItemImporter{
	@Input() todo;
	@Output() toggle = new EventEmitter;
}
