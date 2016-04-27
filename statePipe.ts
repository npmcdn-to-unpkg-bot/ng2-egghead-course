import {Pipe} from 'angular2/core'

@Pipe({
	name: "state"
})

export class StatePipe{
	transform(value, [state]) {
		return value.filter((item) => item.state === state);
	}
}