import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishItem';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishFormComponent } from '../app/add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import {EventService} from '../shared/services/EventService'
import { WishService } from './wish.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, WishListComponent, AddWishFormComponent, WishFilterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  
  constructor(events: EventService, private wishService: WishService) {
      events.listen("removeWish", (wish:any) => {
        let index = this.items.indexOf(wish)
        this.items.splice(index, 1)
      })
  }
  
  items!: WishItem[];

  filter: any = () => {}
  
  ngOnInit() {
    this.wishService.getWishes().subscribe((data: any) => {
      this.items = data;
    })
  }
}
