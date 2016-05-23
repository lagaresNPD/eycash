import { Component } from '@angular/core';

export class View {
	id: number;
	name: string;
}

@Component({
	selector: 'my-app',
	template: `
		<h1>{{title}} App</h1>
		<h2>{{view.name}}</h2>
		`
})

export class AppComponent {
	title = 'EY CASH';
	view: View = {
		id: 1,
		name: 'Commercial Snapshot'
	};
}
