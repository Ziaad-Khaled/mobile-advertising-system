import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NewBulkCampaignComponent } from './components/new-bulk-campaign/new-bulk-campaign.component';
import { BulkCampaignSubmissionComponent } from './components/bulk-campaign-submission/bulk-campaign-submission.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
