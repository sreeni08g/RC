import { Component, Inject } from '@angular/core';
import {  MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-homesearchpopup',
  templateUrl: './homesearchpopup.component.html',
  styleUrls: ['./homesearchpopup.component.css']
})
export class HomesearchpopupComponent {

  confirmButtonText = 'Run';
  cancelButtonText = 'Cancel';
  constructor(
  public dialogRef: MatDialogRef<HomesearchpopupComponent>) {}


  onConfirmClick(): void {
    this.dialogRef.close(true);
  }

}
