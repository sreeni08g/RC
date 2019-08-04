import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HomesearchpopupComponent } from './homesearchpopup/homesearchpopup.component';
import { ProgressComponent } from './progress/progress.component';
import { StatuspageComponent } from './statuspage/statuspage.component';
import { StatuspagepopupComponent } from './statuspagepopup/statuspagepopup.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'progress', component: ProgressComponent},
  {path: 'status', component: StatuspageComponent},
  {path: 'statuspopup', component: StatuspagepopupComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    HomesearchpopupComponent,
    ProgressComponent,
    StatuspageComponent,
    StatuspagepopupComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, 
    RouterModule,
    MatDialogModule,
    RouterModule.forRoot(routes),
    RouterModule.forChild(routes),
  ],
  providers: [ {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  bootstrap: [AppComponent],
  exports: [   MatDialogModule, RouterModule],
  entryComponents: [HomesearchpopupComponent, StatuspagepopupComponent ],
})
export class AppModule { }
