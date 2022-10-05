import { Component, OnInit , Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-bulk-dialogue-box',
  templateUrl: './bulk-dialogue-box.component.html',
  styleUrls: ['./bulk-dialogue-box.component.scss']
})
export class BulkDialogueBoxComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<BulkDialogueBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
    console.log(this.data)
  }

  ngOnInit(): void {
  }

}
