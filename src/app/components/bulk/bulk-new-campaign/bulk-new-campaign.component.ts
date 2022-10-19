import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';






@Component({
  selector: 'app-new-bulk-campaign',
  templateUrl: './bulk-new-campaign.component.html',
  styleUrls: ['./bulk-new-campaign.component.scss']
})
export class BulkNewCampaignComponent implements OnInit{
  
  bulkForm! : FormGroup;
  
  @ViewChild(MatAccordion) accordion!: MatAccordion;

  minARPU = 0;
  maxARPU = 5000;
  
  constructor(private fb: FormBuilder) { }
  
  

  ngOnInit(): void {
    this.bulkForm = this.fb.group({
      handSet : this.fb.group({
        manufacturer: [''],
        model: [''],
        operatingSystem: [''],
        deviceType: [''],
        networkTechnology: ['']
      }),
      userActivity : this.fb.group({
        userActivity: this.fb.array([])
      }),
      userPlan : this.fb.group({
        subscriberType: this.fb.array([]),
        serviceType: this.fb.array([]),
      })
    });

    this.onChanges();
  }

  onChanges(): void {
    this.bulkForm.valueChanges.subscribe(val => {
      console.log("parent bulk form: ")
      console.log(val);

      //on change go to the backend and retrieve the total number of customers
    });
  }
  


 

}
