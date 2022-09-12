import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBulkCampaignComponent } from './new-bulk-campaign.component';

describe('NewBulkCampaignComponent', () => {
  let component: NewBulkCampaignComponent;
  let fixture: ComponentFixture<NewBulkCampaignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewBulkCampaignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewBulkCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
