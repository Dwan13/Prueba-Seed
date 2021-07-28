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
        redirectTo: '/home',
        pathMatch:'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
        //component:HomeComponent
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