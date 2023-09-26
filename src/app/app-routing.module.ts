import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/right-bar/home/home.component';
import { AboutComponent } from './components/right-bar/about/about.component';
import { ServiceComponent } from './components/right-bar/projects/service.component';
import { ResumeComponent } from './components/right-bar/resume/resume.component';
import { ContactComponent } from './components/right-bar/contact/contact.component';

const routes: Routes = [
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'about',
    component: AboutComponent
  },
  {
    path:'projects',
    component: ServiceComponent
  },
  {
    path:'resume',
    component: ResumeComponent
  },
  {
    path:'contact',
    component: ContactComponent
  },
  {
    path:'**',
    component:HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
