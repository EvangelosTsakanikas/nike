import { Component, model, signal } from '@angular/core';
import { ButtonComponent } from "../../components/button/button.component";
import { ShoeCardComponent } from '../../components/shoe-card/shoe-card.component';
import { statistics } from '../../constants/constants';
import { shoes } from '../../constants/constants';

@Component({
  selector: 'app-hero',
  imports: [ButtonComponent, ShoeCardComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  statistics = statistics;
  shoes = shoes
  currentBigShoeImage = signal<string>(shoes[0].bigShoe)
}
