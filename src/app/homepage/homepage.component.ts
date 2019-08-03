import { Component} from '@angular/core';
import { MatDialog ,MatDialogConfig} from '@angular/material';
import { HomesearchpopupComponent } from '../homesearchpopup/homesearchpopup.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent  {

  constructor(private dialog: MatDialog) {
  }
  openDialog( ) {
    this.dialog.open(HomesearchpopupComponent, {
      height: '40%',
      width: '60%',
    });
    /*const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '80%';
    dialogConfig.height = '50%' ;
    this.dialog.open(HomesearchpopupComponent, dialogConfig);*/

  }


}
