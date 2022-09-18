import { Component, OnInit,NgZone, ViewChild } from '@angular/core';

@Component({
  selector: 'app-bulk-campaign-submission',
  templateUrl: './bulk-campaign-submission.component.html',
  styleUrls: ['./bulk-campaign-submission.component.scss']
})
export class BulkCampaignSubmissionComponent implements OnInit {

  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
  
  constructor() { }

  ngOnInit(): void {
  }

}
