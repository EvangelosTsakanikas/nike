import { Component } from '@angular/core';
import { services } from '../../constants/constants';
import { ServiceCardComponent } from "../../components/service-card/service-card.component";

@Component({
	selector: 'app-services',
	imports: [ServiceCardComponent],
	templateUrl: './services.component.html',
	styleUrl: './services.component.css',
})
export class ServicesComponent {
	services = services;
}
