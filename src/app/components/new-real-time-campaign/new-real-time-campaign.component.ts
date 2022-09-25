import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-real-time-campaign',
  templateUrl: './new-real-time-campaign.component.html',
  styleUrls: ['./new-real-time-campaign.component.scss']
})
export class NewRealTimeCampaignComponent implements OnInit {

  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  constructor() { }
  public selectedMoment = new Date();

  ngOnInit(): void {
  }

}
