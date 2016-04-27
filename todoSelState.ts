import {Component, Output, EventEmitter} from 'angular2/core'

@Component({
	selector: 'state-selector',
	template: `
	<div>
		<select (change)="select.emit($event.target.value)">
			<option *ngFor="#state of states">{{state}}</option>
		</select>
	</div>`
})

export class TodoSelState{
	states = ['started', 'completed']
	@Output() select = new EventEmitter();

	ngOnInit(){
		this.select.emit(this.states[0])
	}
}
