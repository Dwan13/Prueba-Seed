import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BenefitsService } from './services/benefits/benefits.service';
import { CartsService } from './services/cart/carts.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    BenefitsService,
    CartsService
  ]
})
export class CoreModule { }
