import { Component, OnInit,NgZone, ViewChild } from '@angular/core';
import { BulkDialogueBoxComponent } from './bulk-dialogue-box/bulk-dialogue-box.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-bulk-campaign-submission',
  templateUrl: './bulk-campaign-submission.component.html',
  styleUrls: ['./bulk-campaign-submission.component.scss']
})
export class BulkCampaignSubmissionComponent implements OnInit {

  smsBody!: string;

  minDate: Date;
  currentDate:any = new Date();
  
  constructor(public dialog: MatDialog) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 0, 0, 1);
   }

  ngOnInit(): void {
  }
  openDialog(): void {
    this.dialog.open(BulkDialogueBoxComponent,{
      width:'350px',
      data:"right click"
    })
    
  }
  
}
