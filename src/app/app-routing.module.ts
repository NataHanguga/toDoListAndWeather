import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/todo-list',
    // loadChildren:'./todoList/todo-list.module#TodoListModule',
    pathMatch: 'full'
  },
  {
    path: 'weather-forecast',
    // loadChildren: () => 
    //   import('./weather/weather.module')
    //   .then(
    //     mod => mod.WeatherModule
    //   ),
    redirectTo: 'weather',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
