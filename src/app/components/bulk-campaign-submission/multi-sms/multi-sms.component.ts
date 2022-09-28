import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-multi-sms',
  templateUrl: './multi-sms.component.html',
  styleUrls: ['./multi-sms.component.scss']
})
export class MultiSmsComponent implements OnInit {
  campaignAccountFormControl = new FormControl('', [Validators.required]);
  numberOfSMSCampaigns = 'Clear me';
  singleSMSBody!: string;
  singleSMSSenderName!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
