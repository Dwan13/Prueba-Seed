import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './components/home/home.component';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { BoostComponent } from './components/boost/boost.component';
import { AdvancedComponent } from './components/advanced/advanced.component';
import { BenefitComponent } from './components/benefit/benefit.component';
import { CartsComponent } from './components/carts/carts.component';
import { ClipboardModule } from '@angular/cdk/clipboard';

@NgModule({
    declarations:[
        BannerComponent,
        HomeComponent,
        BoostComponent,
        AdvancedComponent,
        BenefitComponent,
        CartsComponent,
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        SharedModule,
        MaterialModule,
        ClipboardModule
    ]
})
export class HomeModule{
    
}