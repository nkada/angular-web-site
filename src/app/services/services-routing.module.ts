import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicesComponent } from './services.component';
import { ServiceOneComponent } from './service-one/service-one.component';
import { ServiceTwoComponent } from './service-two/service-two.component';


const routes: Routes = [
  {
    path: 'services', component: ServicesComponent,
    children: [{
      path: '1',
      component: ServiceOneComponent
    }, {
      path: '2',
      component: ServiceTwoComponent
    }]
  },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ServicesRoutingModule { }
