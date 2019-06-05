import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { CreateTodoItemComponent } from './components/create-todo-item/create-todo-item.component';

const routes: Routes = [
    {
        path: 'todo-list', component: TodoListComponent,
        children: [
            {
                path: 'new-todo-item', component: CreateTodoItemComponent
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoListRoutingModule { }
