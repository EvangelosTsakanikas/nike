import { Component, input } from '@angular/core';

@Component({
	selector: 'app-review-card',
	imports: [],
	templateUrl: './review-card.component.html',
	styleUrl: './review-card.component.css',
})
export class ReviewCardComponent {
	imgURL = input<string>();
	customerName = input<string>('');
	rating = input<number>(0);
	feedback = input<string>('');
}
