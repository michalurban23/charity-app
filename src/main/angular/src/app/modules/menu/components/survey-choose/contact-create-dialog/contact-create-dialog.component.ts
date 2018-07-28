import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-contact-create-dialog',
  templateUrl: './contact-create-dialog.component.html',
  styleUrls: ['./contact-create-dialog.component.css']
})
export class ContactCreateDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ContactCreateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

}
