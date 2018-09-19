import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Participant } from '../../model/participant.model';
import { Page1WelcomeComponent } from './page1-welcome/page1-welcome.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    Participant,
  ],
  declarations: [Page1WelcomeComponent]
})
export class ParticipantModule { }
