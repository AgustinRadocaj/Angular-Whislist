import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishItem';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishFormComponent } from '../app/add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import events from '../shared/services/EventService'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, WishListComponent, AddWishFormComponent, WishFilterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  constructor() {
      events.listen("removeWish", (wish:any) => {
        console.log(wish)
      })
  }
  
  
  wish: WishItem[] = [
    new WishItem('Learn Angular'),
    new WishItem('Build something awesome', true),
    new WishItem('Go to Mars'),
  ];

  filter: any = () => {}
  
}
