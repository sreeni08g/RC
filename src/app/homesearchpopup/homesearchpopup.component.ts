import { Component, Inject } from '@angular/core';
import {  MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {Router} from '@angular/router';


@Component({
  selector: 'app-homesearchpopup',
  templateUrl: './homesearchpopup.component.html',
  styleUrls: ['./homesearchpopup.component.css']
})
export class HomesearchpopupComponent {

  confirmButtonText = 'Run';
  cancelButtonText = 'Cancel';
  constructor(
  public dialogRef: MatDialogRef<HomesearchpopupComponent>, private router: Router) {}

  OnRunClick(): void {
    this.router.navigate(['/progress']);
    this.dialogRef.close(true);
  }

  onConfirmClick(): void {
    this.dialogRef.close(true);
  }

}
