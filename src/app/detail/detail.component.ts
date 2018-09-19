import { Component, OnInit, Input } from '@angular/core';
import { Participant } from '../model/participant.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() participant: Participant;

  constructor() { }

  ngOnInit() {
  }

}
