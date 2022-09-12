import { Component, OnInit, ViewChild } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';

@Component({
  selector: 'app-new-bulk-campaign',
  templateUrl: './new-bulk-campaign.component.html',
  styleUrls: ['./new-bulk-campaign.component.scss']
})
export class NewBulkCampaignComponent implements OnInit {
  
  @ViewChild(MatAccordion) accordion!: MatAccordion;

  constructor() { }

  ngOnInit(): void {
  }

}
