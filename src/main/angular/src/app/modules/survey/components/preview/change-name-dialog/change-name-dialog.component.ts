import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Component, Inject} from '@angular/core';

@Component({
  selector: 'app-change-name-dialog',
  templateUrl: './change-name-dialog.component.html',
})
export class ChangeNameDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ChangeNameDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

}
