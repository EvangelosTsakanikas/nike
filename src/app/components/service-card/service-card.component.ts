import { Component, input } from '@angular/core';

@Component({
	selector: 'app-service-card',
	imports: [],
	templateUrl: './service-card.component.html',
	styleUrl: './service-card.component.css',
})
export class ServiceCardComponent {
	imgURL = input<string>('');
	label = input<string>('service icon');
	subtext = input<string>('');
}
