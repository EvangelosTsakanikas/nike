import { Component } from '@angular/core';
import { reviews } from '../../constants/constants';
import { ReviewCardComponent } from "../../components/review-card/review-card.component";

@Component({
  selector: 'app-customer-reviews',
  imports: [ReviewCardComponent],
  templateUrl: './customer-reviews.component.html',
  styleUrl: './customer-reviews.component.css'
})
export class CustomerReviewsComponent {
  reviews = reviews;
}
