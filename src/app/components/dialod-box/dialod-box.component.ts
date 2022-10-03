import { Component, OnInit , Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-dialod-box',
  templateUrl: './dialod-box.component.html',
  styleUrls: ['./dialod-box.component.scss']
})
export class DialodBoxComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialodBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
    console.log(this.data)
  }

  ngOnInit(): void {
  }
  
}
