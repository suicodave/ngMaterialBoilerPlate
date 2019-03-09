import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppShellComponent } from './shells/app-shell/app-shell.component';
import { PageErrorShellComponent } from './shells/page-error-shell/page-error-shell.component';

const routes: Routes = [
  {
    path: '', component: AppShellComponent, children: [
      // default route { path: '', redirectTo: ''}
    ],

  },
  {
    path: 'error', component: PageErrorShellComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
