import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CheckboxesComponent } from './checkboxes/checkboxes.component';
import { HeaderComponent } from './header/header.component';
import { ServiceFeesComponent } from './servicefees/servicefees.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { LaborComponent } from './labor/labor.component'


@NgModule({
  declarations: [
    AppComponent,
    CheckboxesComponent,
    HeaderComponent,
    ServiceFeesComponent,
    LaborComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    FlexLayoutModule,
    MatIconModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
