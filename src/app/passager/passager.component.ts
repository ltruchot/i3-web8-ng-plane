import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Passenger } from 'src/model/passenger.model';;

@Component({
  selector: 'app-passager',
  templateUrl: './passager.component.html',
  styleUrls: ['./passager.component.scss']
})
export class PassagerComponent {
  @Input() infos: Passenger;
  @Input() id: number;

  @Output() hasChanged = new EventEmitter();

  toggleCheckedIn () {
    this.infos.checkedIn = !this.infos.checkedIn;
    if (this.infos.checkedIn) {
      this.infos.checkedAt = Date.now() - (Math.random() * 1_000_000_000);
    }
    this.hasChanged.emit();
  }
}
