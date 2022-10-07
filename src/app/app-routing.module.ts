import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
  {path: 'users', loadChildren:() => import('./users/users.module').then(m => m.UsersModule)},
  {path: 'detail-user/:id', loadChildren:() => import('./detail-user/detail-user.module').then(m => m.DetailUserModule)},
  {path: '**', component: NotFoundComponent},
  {path: '', pathMatch: 'full', redirectTo: 'users'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
