import { Component, Inject, OnInit } from '@angular/core';
import { Adventure } from './model/adventure';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {  AdventureService } from './adventure-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'adventure-tracker';
  adventures : Adventure[] = []

  constructor(@Inject(AdventureService) private adventureService : AdventureService, public dialog: MatDialog ) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '350px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.adventureService.addAdventure(result);
    });
  }

  ngOnInit() {
    this.adventures = this.adventureService.getAdventures();
    };

}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: './adventure/adventure-dialog.component.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Adventure) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}

