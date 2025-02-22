import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
	selector: 'app-button',
	imports: [NgClass],
	templateUrl: './button.component.html',
	styleUrl: './button.component.css',
})
export class ButtonComponent {
	label = input<string>('Click Me');
	icon = input<string>();
	backgroundColor = input<string>('bg-red-400');
	textColor = input<string>('text-white');
	borderColor = input<string>('border-red-400');

	currentClasses: string = '';

	ngOnInit() {
		console.log(this.backgroundColor());
		console.log(this.textColor());
		console.log(this.borderColor());
		console.log('current classes')
		this.setCurrentClasses();
		
	}

	setCurrentClasses() {
		this.currentClasses += this.backgroundColor() ? this.backgroundColor() + ' ' : '';
		this.currentClasses += this.textColor() ? this.textColor() + ' ' : '';
		this.currentClasses += this.borderColor() ? this.borderColor() + ' ' : '';
		console.log(this.currentClasses);
	}
}
