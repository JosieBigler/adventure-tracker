import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent, DialogOverviewExampleDialog } from './home.component';
import { AdventureComponent } from './adventure/adventure.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS, } from '@angular/material/form-field';
import { MatInputModule, } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { AdventureDetailComponent } from './adventure/adventure-detail.component';
import { AppComponent } from './app.component';
import { DataService } from './adventure-service';
import { NpcComponent } from './npc/npc-component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdventureComponent,
    DialogOverviewExampleDialog,
    AdventureDetailComponent,
    NpcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule
  ],
  providers: [{provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}}, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
