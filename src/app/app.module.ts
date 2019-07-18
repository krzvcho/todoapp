import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TodoContainerComponent } from "./todo-container/todo-container.component";
import { TaskFormComponent } from './todo-container/task-form/task-form.component';
import { TaskListComponent } from './todo-container/task-list/task-list.component';

@NgModule({
  declarations: [AppComponent, TodoContainerComponent, TaskFormComponent, TaskListComponent],
  imports: [FormsModule, BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
