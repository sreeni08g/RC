import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent  {
  title = 'Progress Page';
  
  constructor(private router: Router) { }
  aboutPageLoad(): void {
    this.router.navigate(['/status']);
  }

}
