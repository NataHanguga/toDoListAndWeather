import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoListService } from './services/todo-list.service';
import { CreateTodoItemComponent } from './components/create-todo-item/create-todo-item.component';
import { TodoListRoutingModule } from './todo-list-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ShowTodoListComponent } from './components/show-todo-list/show-todo-list.component';
import { EditTodoItemComponent } from './components/edit-todo-item/edit-todo-item.component';
import { SortPipe } from './pipes/sort.pipe';
import { FormsService } from './services/forms.service';

@NgModule({
  declarations: [
    TodoListComponent,
    CreateTodoItemComponent,
    ShowTodoListComponent,
    EditTodoItemComponent,
    SortPipe,

  ],
  imports: [
    CommonModule,
    TodoListRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    TodoListService,
    FormsService
  ],
  exports: [
    TodoListComponent
  ]

})

export class TodoListModule { }
