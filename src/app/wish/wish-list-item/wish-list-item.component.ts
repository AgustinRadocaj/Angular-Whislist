import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EventService } from '../../../shared/services/EventService';
import { WishItem } from '../../../shared/models/wishItem';

@Component({
  selector: 'app-wish-list-item',
  standalone: true,
  imports: [NgClass],
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css'
})
export class WishListItemComponent {

  constructor(private events: EventService) {

  }
  @Input() wish!: WishItem;

  //@Input() fullfilled!: boolean;
  //@Output() fullfilledChange = new EventEmitter<boolean>();

  get cssClasses() {
      //return this.fullfilled ? 'strikeout text-muted' : '';
      //return this.fullfilled ? ['strikeout', 'text-muted'] : [];
        return {'strikeout text-muted': this.wish.isComplete}
      // tres maneras de hacer lo mismo
  }
  toogleFullfilled() {
    this.wish.isComplete = !this.wish.isComplete;
    //this.fullfilledChange.emit(this.fullfilled)
    }

    removeWish() {
      this.events.emit("removeWish", this.wish)
    }
}
