import { Component } from '@angular/core';
import { EventService } from '../../shared/services/EventService';
import { WishService } from './wish.service';
import { WishItem } from '../../shared/models/wishItem';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import { WishListComponent } from './wish-list/wish-list.component';

@Component({
  selector: 'app-wish',
  standalone: true,
  imports: [AddWishFormComponent, WishFilterComponent, WishListComponent],
  templateUrl: './wish.component.html',
  styleUrl: './wish.component.css'
})
export class WishComponent {

  constructor(events: EventService, private wishService: WishService) {
    events.listen("removeWish", (wish:any) => {
      let index = this.items.indexOf(wish)
      this.items.splice(index, 1)
    })
}

items: WishItem[] = []; 

filter: any = () => {}

ngOnInit() {
  this.wishService.getWishes().subscribe((data: any) => {
    this.items = data;
  })
}

}
