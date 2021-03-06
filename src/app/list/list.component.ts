import { Component, OnInit } from '@angular/core';
import { Participant } from '../model/participant.model';
import { PARTICIPANTS } from '../services/mocks/participants.mock';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list: Participant[] = PARTICIPANTS;
  selected: Participant;

  constructor() { }

  ngOnInit() {
  }

  onSelect(p: Participant): void {
    this.selected = p;
  }

}
