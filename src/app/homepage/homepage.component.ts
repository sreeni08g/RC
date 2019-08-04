import { Component} from '@angular/core';
import { MatDialog ,MatDialogConfig} from '@angular/material';
import { HomesearchpopupComponent } from '../homesearchpopup/homesearchpopup.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent  {

  constructor(public dialog: MatDialog) {
  }
  openDialog( ) {
    this.dialog.open(HomesearchpopupComponent, {
      height: '70%',
      width: '60%',
    });
  }


}
