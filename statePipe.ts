import {Pipe} from 'angular2/core'

@Pipe({
	name: "state"
})

export class StatePipe{
	transform(value) {
		return value.filter((item) => item.state === 'started');
	}
}