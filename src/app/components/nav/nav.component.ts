import { Component } from '@angular/core';
import { navLinks } from '../../constants/constants';

@Component({
	selector: 'app-nav',
	imports: [],
	templateUrl: './nav.component.html',
	styleUrl: './nav.component.css',
})
export class NavComponent {
  navLinks = navLinks;
}
