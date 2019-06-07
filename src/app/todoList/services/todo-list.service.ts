import { Injectable } from '@angular/core';
import { TodoItem } from '../models/todoItem';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { isBoolean } from 'util';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  private readonly key: string = 'todoList';
  public todoList: TodoItem[];

  constructor(private router: Router) { }

  // return todoList object from localStorage or empty array
  public getTodoList(): {} | [] {
    const data = localStorage.getItem(this.key);
    return (data === null ? [] : JSON.parse(data) as TodoItem[]);
  }

  // set data to local storage
  public setDataToLocalStorage(data: TodoItem[] | []): void {
    localStorage.setItem(this.key, JSON.stringify(data));
  }

  // create TodoItem subject from data
  public createItem(data) {
    return new TodoItem(data.title, data.description);
  }

  // create new item
  public addNewTodoItem(data: TodoItem): {} {
    if (data.title) {
      console.log(data);
      this.todoList = this.getTodoList() as [];
      this.todoList.push(this.createItem(data));
      this.setDataToLocalStorage(this.todoList);
      this.router.navigateByUrl('/todo-list');
      return this.getTodoList();
    }
  }

  //get item index by id
  public getIndexById(data: TodoItem[], atribute: string | number): any {
    return data.findIndex(el => el.id === +atribute)
  }

  // remove todo item by id
  public deleteTodoItemById(id: string): void {
    this.todoList = this.getTodoList() as [];
    const index = this.getIndexById(this.todoList, id);
    this.todoList.splice(index, 1);
    this.setDataToLocalStorage(this.todoList);
  }

  // get item by id
  public getTodoItemById(_id: string): TodoItem {
    let item;
    this.todoList = this.getTodoList() as TodoItem[];
    this.todoList.forEach(el => {
      if (el.id === +_id) {
        item = el;
      }
    });
    return item;
  }

  // edit todo item 
  public editTodoItem(title: string, description: string, item: TodoItem): any {
    let data = {
      'title': title,
      'description': description,
      'id': item.id,
      'date': item.date,
      'isComplete': item.isComplete
    };

    try {
      if (data !== item) {
        this.saveItem(item, data);
        this.router.navigate(['/']);

      }
    } catch (error) {
      new Error('Change something or exit');
    }
  }

  public saveItem(item, data) {
    this.todoList = this.getTodoList() as TodoItem[];
    let index = this.getIndexById(this.todoList, item.id)
    console.log(this.todoList[index]);
    this.todoList[index] = data as TodoItem;
    this.setDataToLocalStorage(this.todoList);
  }
  public changeComplete(item: TodoItem) {
    this.saveItem(item, item);

  }
}
