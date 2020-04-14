import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    enableTracing: true, // <-- debugging purposes only
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
