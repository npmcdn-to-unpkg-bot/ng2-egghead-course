import {Pipe} from 'angular2/core'

@Pipe({
	name: "search"
})

export class CustomPipe{
	transform(value) {
		return value.filter(function(item){
			let t_r = item.title.split("").reverse();
			item.title = t_r.join("");
			return item;
		});
	}
}