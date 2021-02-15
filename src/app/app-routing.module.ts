import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WelcomePageComponent} from './welcome-page/welcome-page.component';

const routes: Routes = [
  { path: 'forms', loadChildren: () => import('./form-demo/form-demo.module').then(m => m.FormDemoModule) },
  { path: 'welcome', component: WelcomePageComponent },
  { path: '', pathMatch: 'full', redirectTo: 'welcome'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
