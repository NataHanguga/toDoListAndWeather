import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoListService } from './services/todo-list.service';
import { CreateTodoItemComponent } from './components/create-todo-item/create-todo-item.component';
import { TodoListRoutingModule } from './todo-list-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TodoListComponent,
    CreateTodoItemComponent
  ],
  imports: [
    CommonModule,
    TodoListRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    TodoListService
  ],
  exports: [
    TodoListComponent
  ]

})

export class TodoListModule { }
