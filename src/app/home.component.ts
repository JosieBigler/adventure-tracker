import { Component, Inject, OnInit } from '@angular/core';
import { Adventure } from './model/adventure';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {  DataService } from './adventure-service';
import { Npc } from './model/npc';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'adventure-tracker';
  adventures : Adventure[] = [];
  npcs: Npc[] = [];

  constructor(@Inject(DataService) private dataService : DataService, public dialog: MatDialog ) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '350px',
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.dataService.addAdventure(result);
    });
  }

  ngOnInit() {
    this.adventures = this.dataService.getAdventures();
    this.npcs = this.dataService.getNpcs();
    };

}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: './adventure/adventure-dialog.component.html'
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Adventure) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}

