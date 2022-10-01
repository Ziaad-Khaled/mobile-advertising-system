import { Component, OnInit } from '@angular/core';
import * as _moment from 'moment';
import { Moment } from 'moment';
@Component({
  selector: 'app-real-time-new-campaign',
  templateUrl: './real-time-new-campaign.component.html',
  styleUrls: ['./real-time-new-campaign.component.scss']
})
export class RealTimeNewCampaignComponent implements OnInit {
  minDate: Date;
  title = 'test-time';
  currentDate:any = new Date();
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  constructor() {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 0, 0, 1);
    
   }
  public selectedMoment = new Date();

  ngOnInit(): void {
  }
  
}
