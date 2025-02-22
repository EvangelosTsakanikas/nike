import { Component, input, model } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
	selector: 'app-shoe-card',
	imports: [NgClass],
	templateUrl: './shoe-card.component.html',
	styleUrl: './shoe-card.component.css',
})
export class ShoeCardComponent {
	thumbnail = input<string>('');
	bigShoe = input<string>('');
	currentBigShoeImage = model<string>('');

	changeBigShoeImage() {
		this.currentBigShoeImage.set(this.thumbnail());
	}
}
