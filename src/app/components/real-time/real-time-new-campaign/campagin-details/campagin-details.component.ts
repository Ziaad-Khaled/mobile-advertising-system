import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { RealTimeDialogueBoxComponent } from '../../real-time-locations/real-time-dialogue-box/real-time-dialogue-box.component';
@Component({
  selector: 'app-campagin-details',
  templateUrl: './campagin-details.component.html',
  styleUrls: ['./campagin-details.component.scss']
})
export class CampaginDetailsComponent implements OnInit {
  minDate: Date;
  title = 'test-time';
  currentDate:any = new Date();
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
  constructor(public dialog:MatDialog) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 0, 0, 1);
    
   }

  ngOnInit(): void {
  }
  openDialog(): void {
    this.dialog.open(RealTimeDialogueBoxComponent,{
      width:'350px',
      data:"right click"
    })
    
  }
}
