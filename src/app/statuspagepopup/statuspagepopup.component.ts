import { Component, OnInit } from '@angular/core';
import {  MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-statuspagepopup',
  templateUrl: './statuspagepopup.component.html',
  styleUrls: ['./statuspagepopup.component.css']
})
export class StatuspagepopupComponent  {

  constructor(public DialogRef: MatDialogRef<StatuspagepopupComponent>) { }
  SaveButtonText = 'Save';
  CancelButtonText = 'Cancel';
  RejectButtonText= 'Reject';
  onConfirmClick(): void {
    this.DialogRef.close(true);
  }

}
