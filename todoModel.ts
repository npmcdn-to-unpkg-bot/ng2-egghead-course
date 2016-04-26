export class TodoModel{
	state:string = 'started';

	constructor(public title:string = '') {}

	toggleState() {
		this.state = 
			(this.state === 'started' ) 
			? 'completed'
			: this.state;
	}
}
