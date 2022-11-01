import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { DialogueBoxComponent } from 'src/app/components/dialogue-box/dialogue-box.component';

export interface smsDetails {
  smsID: number;
  body: string;
  date: Date;
  senderName: string;
}

interface INumber {
  parseInt: Function
}
declare var Number: INumber;

var ELEMENT_DATA!: smsDetails[];
/* = [
  {smsID: 1, senderName: 'Orange', date: new Date(2018, 0O5, 0O5), body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'},
  {smsID: 2, senderName: 'Orange', date: new Date(2018, 0O5, 0O5), body: ''},
  {smsID: 3, senderName: 'Orange', date: new Date(2018, 0O5, 0O5), body: ''}
];
*/
@Component({
  selector: 'app-multi-sms',
  templateUrl: './multi-sms.component.html',
  styleUrls: ['./multi-sms.component.scss']
})
export class MultiSmsComponent implements OnInit {

  multiSMSForm! : FormGroup;
  private subscriptions = new Subscription();

  minDate: Date;
  title = 'test-time';
  currentDate:any = new Date();
  singleSMSBody!: string;
  singleSMSsenderName!:string;

  ////// second card
  smsCard = false;
  displayedColumns: string[] = ['smsID', 'senderName', 'body', 'date'];
  dataSource: smsDetails[] = [];

  constructor(public dialog: MatDialog, private fb: FormBuilder) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 0, 0, 1);
   }
   openDialog(): void {
    this.dialog.open(DialogueBoxComponent,{
      width:'350px',
      data:"right click"
    })
    
  }
  ngOnInit(): void {

    this.multiSMSForm = this.fb.group({
       campaignAccount: new FormControl('', Validators.required),
       numberOfCampaigns: new FormControl('', Validators.required),
       isSingleSMSBody: new FormControl('0'),
       isSingleSMSSenderName: new FormControl('0'),
       date: new FormArray([], Validators.required),
       time: new FormArray([], Validators.required),
       smsBody: new FormArray([], Validators.required),
    });

    this.subscriptions.add(this.multiSMSForm.valueChanges.subscribe(val => {
      console.log("Multi SMS form: ")
      console.log(val);
      
      //on valid send the sms to the dials 
    }));

    console.log(this.multiSMSForm.get('flags')?.get('isSingleSMSBody')?.value);
  }


  onCriteriaSaved(event: Event)
  {
    if(this.smsCard == false)
      this.smsCard = true;

    // in order to clear the array on each button click
    this.dataSource = [];
    console.log(this.singleSMSsenderName);
    /// else it should check which criteria was changed and then change the sms card
    for (let i = 0; i < this.multiSMSForm.get("numberOfCampaigns")?.value; i++) {
      this.dataSource.push({smsID: i+1, senderName: this.singleSMSsenderName, date: new Date(), body: this.singleSMSBody});
    }
  }

 
}
