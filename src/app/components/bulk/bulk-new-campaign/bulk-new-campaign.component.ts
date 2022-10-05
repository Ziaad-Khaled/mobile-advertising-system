import { Component, OnInit, ViewChild } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';






@Component({
  selector: 'app-new-bulk-campaign',
  templateUrl: './bulk-new-campaign.component.html',
  styleUrls: ['./bulk-new-campaign.component.scss']
})
export class BulkNewCampaignComponent{
  
  @ViewChild(MatAccordion) accordion!: MatAccordion;
  

 
  /////////////////////////////////////////////////////////

  
  ////////////////////////////////////////////////////////////////////////////////////
  //user plan

  corporate = false;
  personal = false;
  hybrid = false;
  prePaid = false;
  postPaid = false;
  others = false;

  toppings = new FormControl('');
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];


  ////////////////////////////////////////////////////////////////////////////////////
  //ARPU
  minARPU = 0;
  maxARPU = 5000;
  selectedMinARPU = 'Clear me';
  selectedMaxARPU = 'Clear me';
////////////////////////////////////////////////////////////////////////////////////////////

  constructor() { }

  ////////////////////////////////////////////////////////////////////////

 

}
