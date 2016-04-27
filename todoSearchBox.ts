import {Component, Output, EventEmitter} from 'angular2/core'

@Component({
	selector: 'search-box',
	template: `Search box added
		<div>
			<input #q type="text" (keyup)="term.emit(q.value)" />
		</div>
	`
})

export class TodoSearchBox{
	@Output() term = new EventEmitter();

	ngOnInit(){
		this.term.emit('');
	}
}