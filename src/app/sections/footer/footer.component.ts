import { Component } from '@angular/core';
import { socialMedia } from '../../constants/constants';
import { footerLinks } from '../../constants/constants';

@Component({
	selector: 'app-footer',
	imports: [],
	templateUrl: './footer.component.html',
	styleUrl: './footer.component.css',
})
export class FooterComponent {
	socialMedia = socialMedia;
	footerLinks = footerLinks;
}
