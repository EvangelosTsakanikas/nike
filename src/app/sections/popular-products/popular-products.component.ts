import { Component } from '@angular/core';
import { products } from '../../constants/constants';
import { PopularProductCardComponent } from "../../components/popular-product-card/popular-product-card.component";

@Component({
	selector: 'app-popular-products',
	imports: [PopularProductCardComponent],
	templateUrl: './popular-products.component.html',
	styleUrl: './popular-products.component.css',
})
export class PopularProductsComponent {
	products = products;
}
