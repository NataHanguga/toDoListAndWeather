import { Component, OnInit, Output } from '@angular/core';
import { TodoListService } from '../../services/todo-list.service';
import { TodoItem } from '../../models/todoItem';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-todo-list',
  templateUrl: './show-todo-list.component.html',
  styleUrls: ['./show-todo-list.component.scss']
})
export class ShowTodoListComponent implements OnInit {

  public todoList: TodoItem[] | any;
  public show: boolean = false;
  public todoItem: any;

  constructor(
    public todoListService: TodoListService,
    public router: Router) { }

  ngOnInit() {
    this.getTodoList();
  }

  public getTodoList(): void {
    let array = this.todoListService.getTodoList();
    array === null ?
      this.todoList = 'Your list is empty. Add something' :
      this.todoList = array;
  }

  public deleteTodoItem(id: string) {
    this.todoListService.deleteTodoItemById(id);
    this.getTodoList();
  }

  public editTodoItem(id, item):void{
    this.todoItem = item;
    console.log(this.show, id);
    this.getTodoList();
  }

  public toggle(data) {
    data.isComplete = !data.isComplete;
    this.todoListService.changeComplete(data);
    this.getTodoList();

  }
}