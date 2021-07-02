import { Component, Inject } from '@angular/core';
import { Adventure } from './model/adventure';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'adventure-tracker';

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  adventures : Adventure[] = [
    {
      title: "Testing my first Adventure that's really fricking long",
      date: new Date().toLocaleString()
    },
    {
      title: "Two objects",
      date: "6/30/2021"
    },
    {
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
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}

