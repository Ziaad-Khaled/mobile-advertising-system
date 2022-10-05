import { Component, OnInit , Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialogue-box',
  templateUrl: './dialogue-box.component.html',
  styleUrls: ['./dialogue-box.component.scss']
})
export class DialogueBoxComponent implements OnInit {

  
  constructor(
    public dialogRef: MatDialogRef<DialogueBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
    console.log(this.data)
  }

  ngOnInit(): void {
  }

}
