import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PopularProductsComponent } from "./sections/popular-products/popular-products.component";
import { SuperQualityComponent } from "./sections/super-quality/super-quality.component";
import { ServicesComponent } from "./sections/services/services.component";
import { SpecialOfferComponent } from "./sections/special-offer/special-offer.component";
import { CustomerReviewsComponent } from "./sections/customer-reviews/customer-reviews.component";
import { SubscribeComponent } from "./sections/subscribe/subscribe.component";
import { FooterComponent } from "./sections/footer/footer.component";
import { HeroComponent } from "./sections/hero/hero.component";
import { NavComponent } from "./components/nav/nav.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PopularProductsComponent, SuperQualityComponent, ServicesComponent, SpecialOfferComponent, CustomerReviewsComponent, SubscribeComponent, FooterComponent, HeroComponent, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'nike';
}
