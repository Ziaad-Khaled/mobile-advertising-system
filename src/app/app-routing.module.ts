import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NewBulkCampaignComponent } from './components/new-bulk-campaign/new-bulk-campaign.component';
import { BulkCampaignSubmissionComponent } from './components/bulk-campaign-submission/bulk-campaign-submission.component';
import { BulkReportComponent } from './components/bulk-report/bulk-report.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { NewRealTimeCampaignComponent } from './components/new-real-time-campaign/new-real-time-campaign.component';


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
    path: 'bulk-report',
    component: BulkReportComponent
  },
  {
    path: 'sidenav',
    component: SidenavComponent
  },
  {
    path: 'new-real-time-campaign',
    component: NewRealTimeCampaignComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
