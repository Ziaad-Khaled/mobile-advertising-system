
import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogueBoxComponent } from 'src/app/components/dialogue-box/dialogue-box.component';
@Component({
  selector: 'app-sender-data',
  templateUrl: './sender-data.component.html',
  styleUrls: ['./sender-data.component.scss']
})
export class SenderDataComponent implements OnInit {

  constructor(public dialog:MatDialog) { }
  openDialog(): void {
    this.dialog.open(DialogueBoxComponent,{
      width:'350px',
      data:"right click"
    })
    
  }
  ngOnInit(): void {
  }

}