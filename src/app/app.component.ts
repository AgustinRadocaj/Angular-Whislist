import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishItem';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  wish: WishItem[] = [
    new WishItem('Learn Angular'),
    new WishItem('Build something awesome', true),
    new WishItem('Go to Mars'),
  ];

  toogleWish(item: WishItem) {
  item.isComplete = !item.isComplete;
  console.log(item);
  }

  title = 'my-angular-project';
}
