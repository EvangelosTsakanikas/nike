import { Component, input } from '@angular/core';

@Component({
  selector: 'app-popular-product-card',
  imports: [],
  templateUrl: './popular-product-card.component.html',
  styleUrl: './popular-product-card.component.css'
})
export class PopularProductCardComponent {
  imgURL = input<string>('');
  name = input<string>('Nike Air Jordan-01');
  price = input<string>('');
}
