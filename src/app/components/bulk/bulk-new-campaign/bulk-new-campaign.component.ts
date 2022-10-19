import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Observable, Subscription} from 'rxjs';
import {map, startWith} from 'rxjs/operators';






@Component({
  selector: 'app-new-bulk-campaign',
  templateUrl: './bulk-new-campaign.component.html',
  styleUrls: ['./bulk-new-campaign.component.scss']
})
export class BulkNewCampaignComponent implements OnInit, OnDestroy{
  
  bulkForm! : FormGroup;
  
  @ViewChild(MatAccordion) accordion!: MatAccordion;

  minARPU = 0;
  maxARPU = 5000;
  private subscriptions = new Subscription();
  
  constructor(private fb: FormBuilder) { }
  
  
  

  ngOnInit(): void {
    this.bulkForm = this.fb.group({
      
      location: this.fb.group({
        selectedGovernorates: new FormControl(''),
        selectedAdminSections: new FormControl(''),
        selectedSheiakhas: new FormControl('')
      }),

      handSet : this.fb.group({
        manufacturer: [],
        model: [],
        operatingSystem: [],
        deviceType: [],
        networkTechnology: []
      }),

      userActivity : this.fb.group({
        userActivity: this.fb.array([])
      }),

      userPlan : this.fb.group({
        subscriberType: this.fb.array([]),
        serviceType: this.fb.array([]),
      }),

      arpu : this.fb.group({
        selectedMinARPU : [],
        selectedMaxARPU : []
      })
    });

    this.onChanges();
  }

  onChanges(): void {
    this.subscriptions.add(this.bulkForm.valueChanges.subscribe(val => {
      console.log("parent bulk form: ")
      console.log(val);

      //on change go to the backend and retrieve the total number of customers
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
  

}
