import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-wish-list-item',
  standalone: true,
  imports: [NgClass],
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css'
})
export class WishListItemComponent {
  @Input() wishText!: string;

  @Input() fullfilled!: boolean;
  @Output() fullfilledChange = new EventEmitter<boolean>();

  get cssClasses() {
      //return this.fullfilled ? 'strikeout text-muted' : '';
      //return this.fullfilled ? ['strikeout', 'text-muted'] : [];
        return {'strikeout text-muted': this.fullfilled}
      // tres maneras de hacer lo mismo
  }
  toogleFullfilled() {
    this.fullfilled = !this.fullfilled;
    this.fullfilledChange.emit(this.fullfilled)
    }
}
