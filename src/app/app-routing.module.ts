import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoContainerComponent } from './todo-container/todo-container.component';

const routes: Routes = [
  {
    path: 'home',
    component: TodoContainerComponent,
    data: { title: 'Home' }
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
