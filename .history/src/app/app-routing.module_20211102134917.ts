import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  { path: '', component: HeaderComponent },
  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) }
  { path: 'messages', loadChildren: () => import('./messages/messages.module').then(m => m.MessagesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
