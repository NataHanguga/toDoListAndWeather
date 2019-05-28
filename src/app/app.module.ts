import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeathrComponent } from './components/weathr/weathr.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { ForecastComponent } from './components/weathr/forecast/forecast.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SortPipe } from './pipes/sort.pipe';
import { CustomDatePipe } from './pipes/date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WeathrComponent,
    FilterPipe,
    TodoListComponent,
    ForecastComponent,
    SortPipe,
    CustomDatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
