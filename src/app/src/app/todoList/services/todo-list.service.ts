import { Injectable } from '@angular/core';
import { TodoItem } from '../models/todoItem';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  private readonly key: string = 'todoList';
  public todoList: TodoItem[];

  constructor(private router: Router) { }

  // return todoList object from localStorage or empty array
  public getTodoList(): {} | [] {
    const data  = localStorage.getItem(this.key);
    // console.log(data);
    return (data === null ? JSON.parse(data) : []);
  }

  public goTo(link: string): void {
    this.router.navigate(['/' + link + '']);
  }

  public addNewTodoItem(data: TodoItem): {} {
    if (data) {
      this.todoList = this.getTodoList() as TodoItem[] || [];
      this.todoList.push(data);
      console.log(this.todoList, data);
      localStorage.setItem(this.key, JSON.stringify(this.todoList));
      return this.getTodoList();
    }
  }
}
