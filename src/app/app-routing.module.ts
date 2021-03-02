import { FAQComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'support',
    component: FAQComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking',
    relativeLinkResolution: 'corrected',
    // enableTracing: true, // <-- debugging purposes only
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
