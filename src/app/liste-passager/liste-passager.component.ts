import { Component, OnInit } from '@angular/core';
import { Passenger } from 'src/model/passenger.model';
import { passengers } from 'src/data/passenger.data';

@Component({
  selector: 'app-liste-passager',
  templateUrl: './liste-passager.component.html',
  styleUrls: ['./liste-passager.component.scss']
})
export class ListePassagerComponent implements OnInit {
  passagers: Passenger[] = passengers;
  allCheckedIn: boolean = false;
  constructor() { 
    this.checkAll();
  }

  ngOnInit() {
  }

  checkAll() {
    this.allCheckedIn = this.passagers.every(p => p.checkedIn);
    console.log("check all", this.allCheckedIn);
  }

}
