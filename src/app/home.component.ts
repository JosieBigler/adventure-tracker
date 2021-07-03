import { Component, Inject } from '@angular/core';
import { Adventure } from './model/adventure';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'adventure-tracker';

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.adventures.push(result);
    });
  }

  adventures : Adventure[] = [
    {
      id: 1,
      title: "Testing my first Adventure that's really fricking long",
      date: new Date().toLocaleString()
    },
    {
      id: 2,
      title: "Two objects",
      date: "6/30/2021"
    },
    {
      id: 3,
      title: "third adventure",
      date: "6/22/2021"
    }
  ]
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

