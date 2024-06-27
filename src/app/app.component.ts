import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishItem';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  wish: WishItem[] = [
    new WishItem('Learn Angular'),
    new WishItem('Build something awesome', true),
    new WishItem('Go to Mars'),
  ];

  newWishText = '';
  wishFilter: string = '0';
  get items(): WishItem[] {
    let value = this.wishFilter;
    if(value === "0") {
      return this.wish;
    } else if (value === "1") {
      return this.wish.filter(item => item.isComplete);
    } else {
      return this.wish.filter(item => !item.isComplete);
    }
  }

  addWish() {
    this.wish.push(new WishItem(this.newWishText));
    this.newWishText = '';
  }
  toogleWish(item: WishItem) {
  item.isComplete = !item.isComplete;
  console.log(item);
  }

  title = 'my-angular-project';
}
