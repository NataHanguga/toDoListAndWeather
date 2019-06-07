import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { CreateTodoItemComponent } from './components/create-todo-item/create-todo-item.component';
import { ShowTodoListComponent } from './components/show-todo-list/show-todo-list.component';
import { EditTodoItemComponent } from './components/edit-todo-item/edit-todo-item.component';

const routes: Routes = [
    {
        path: 'todo-list', component: TodoListComponent,
        children: [
            {
                path: 'todo-item', 
                component: CreateTodoItemComponent
            },
            {
                path: 'todo-item/:id', 
                component: EditTodoItemComponent
            },
            {
                path: '', 
                component: ShowTodoListComponent, 
                pathMatch: 'full'
            },
            {
                path: '**',
                redirectTo: ''
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoListRoutingModule { }
