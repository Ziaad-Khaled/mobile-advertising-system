import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NewBulkCampaignComponent } from './components/new-bulk-campaign/new-bulk-campaign.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
