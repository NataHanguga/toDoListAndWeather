import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeathrComponent } from './components/weathr/weathr.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { ForecastComponent } from './components/weathr/forecast/forecast.component';

const routes: Routes = [
  {path: 'todoList', component: TodoListComponent},
  {path: 'weather', component: WeathrComponent},
  {path: 'fullWeather', component: ForecastComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
