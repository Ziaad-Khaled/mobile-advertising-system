import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { BulkNewCampaignComponent } from './components/bulk-new-campaign/bulk-new-campaign.component';
import { BulkCampaignSubmissionComponent } from './components/bulk-campaign-submission/bulk-campaign-submission.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ReportComponent } from './components/report/report.component';
import { RealTimeNewCampaignComponent } from './components/real-time-new-campaign/real-time-new-campaign.component';
import { CellsTableComponent } from './components/real-time-locations/cells-table/cells-table.component';
import { RealTimeLocationsComponent } from './components/real-time-locations/real-time-locations.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path:'home', component: HomeComponent },
  { path:'new-bulk-campaign', component: BulkNewCampaignComponent },
  { path:'bulk-campaign-submission', component: BulkCampaignSubmissionComponent },
  { path: 'Report', component: ReportComponent },
  { path: 'sidenav', component: SidenavComponent },
  { path: 'real-time-newcampaign',  component: RealTimeNewCampaignComponent },
  { path: 'real-time-locations', component: RealTimeLocationsComponent },
  { path: 'real-time-locations/:id', component: CellsTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
