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
    this.hasChanged.emit();
  }
}
