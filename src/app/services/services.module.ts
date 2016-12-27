import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services.component';
import { ServiceOneComponent } from './service-one/service-one.component';
import { ServiceTwoComponent } from './service-two/service-two.component';

@NgModule({
  imports: [
    CommonModule,
    ServicesRoutingModule
  ],
  declarations: [ServicesComponent, ServiceOneComponent, ServiceTwoComponent]
})
export class ServicesModule { }
