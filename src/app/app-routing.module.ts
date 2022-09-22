import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NewBulkCampaignComponent } from './components/bulk-new-campaign/bulk-new-campaign.component';
import { BulkCampaignSubmissionComponent } from './components/bulk-campaign-submission/bulk-campaign-submission.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { BulkReportComponent } from './components/report/report.component';
import { RealTimeNewCampaignComponent } from './components/real-time-new-campaign/real-time-new-campaign.component';
const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path:'home',
    component: HomeComponent,
  },
  {
    path:'new-bulk-campaign',
    component: NewBulkCampaignComponent
  },
  {
    path:'bulk-campaign-submission',
    component: BulkCampaignSubmissionComponent
  },
  {
    path: 'Report',
    component: BulkReportComponent
  },
  {
    path: 'sidenav',
    component: SidenavComponent
  },
 
  {
    path: 'real-time-newcampaign',
    component: RealTimeNewCampaignComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
