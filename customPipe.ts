import {Pipe} from 'angular2/core'

@Pipe({
	name: "search"
})

export class CustomPipe{
	transform(value, [chrz]) {
		return value.filter((item) => item.title.startsWith(chrz));
	}
}
