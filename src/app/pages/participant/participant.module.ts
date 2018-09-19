import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Participant } from '../../model/participant.model';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    Participant,
  ],
  declarations: []
})
export class ParticipantModule { }
