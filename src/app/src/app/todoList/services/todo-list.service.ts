import { Injectable } from '@angular/core';
import { TodoItem } from '../models/todoItem';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  private readonly key: string = 'todoList';
  public todoList: TodoItem[];

  constructor(private router: Router) { }

  // return todoList object from localStorage or empty array
  public getTodoList(): TodoItem[] | {} {
    const data  = localStorage.getItem(this.key);
    return (data === null ? [] : JSON.parse(data) as TodoItem[]);
  }

  public setDataToLocalStorage(data: TodoItem[] | []): void {
    localStorage.setItem(this.key, JSON.stringify(data));
  }

  public createItem(data) {
    return new TodoItem(data.value.title, data.value.description);
  }

  public addNewTodoItem(data) { // }: TodoItem[] {
    if (data.value.title) {
      console.log(data.value);
      this.todoList = this.getTodoList() as [];
      this.todoList.push(this.createItem(data));
      this.setDataToLocalStorage(this.todoList);
      this.router.navigateByUrl('/todo-list');
    }
  }


}
