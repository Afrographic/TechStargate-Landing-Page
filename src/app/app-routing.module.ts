import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './views/home/home.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { ExpertiseComponent } from './views/expertise/expertise.component';
import { ServicesComponent } from './views/services/services.component';
import { ContactUsComponent } from './views/contact-us/contact-us.component';
import { CarreerComponent } from './views/carreer/carreer.component';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'our-expertise',
    component: ExpertiseComponent
  },
  {
    path: 'our-services',
    component: ServicesComponent
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {
    path: 'carreer',
    component: CarreerComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  },
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
