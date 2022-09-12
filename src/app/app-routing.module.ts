import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NewCampaignComponent } from './components/bulk-campaign/new-campaign/new-campaign.component';

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
    path:'bulk/new-campaign',
    component: NewCampaignComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
