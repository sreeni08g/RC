import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { StatuspagepopupComponent } from '../statuspagepopup/statuspagepopup.component';

@Component({
  selector: 'app-statuspage',
  templateUrl: './statuspage.component.html',
  styleUrls: ['./statuspage.component.css']
})
export class StatuspageComponent implements OnInit {
  title = 'Status Page';
  source = 'https://www.theatlantic.com/';
  key = 'Doppler Effect';
  constructor(public dialogRef: MatDialog) { }
  openDialog() {
    this.dialogRef.open(StatuspagepopupComponent, {
      width : '40%',
      height : '70%',
    });
  }
  ngOnInit() {
  }

}
