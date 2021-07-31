import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { PageNotFountComponent } from './page-not-fount/page-not-fount.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,    
    children:[
      {
        path: '',
        redirectTo: '/',
        pathMatch:'full'
      },
      {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      }
      ,
      {
        path: 'features',
        loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule)
      }
      ,
      {
        path: 'pricing',
        loadChildren: () => import('./pricing/pricing.module').then(m => m.PricingModule)
      }
      ,
      {
        path: 'resources',
        loadChildren: () => import('./resources/resources.module').then(m => m.ResourcesModule)
      }
    ]
  },   
  {
    path: '**',
    component: PageNotFountComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }