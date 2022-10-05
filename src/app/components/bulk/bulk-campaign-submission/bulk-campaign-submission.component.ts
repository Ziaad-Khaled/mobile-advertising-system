import { Component, OnInit,NgZone, ViewChild } from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogueBoxComponent } from '../../dialogue-box/dialogue-box.component';
@Component({
  selector: 'app-bulk-campaign-submission',
  templateUrl: './bulk-campaign-submission.component.html',
  styleUrls: ['./bulk-campaign-submission.component.scss']
})
export class BulkCampaignSubmissionComponent implements OnInit {

  smsBody!: string;
  
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(): void {
    this.dialog.open(DialogueBoxComponent,{
      width:'350px',
      data:"right click"
    })
    
  }
  
}
