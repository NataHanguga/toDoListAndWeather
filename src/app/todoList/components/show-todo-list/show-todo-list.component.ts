import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../../services/todo-list.service';
import { TodoItem } from '../../models/todoItem';

@Component({
  selector: 'app-show-todo-list',
  templateUrl: './show-todo-list.component.html',
  styleUrls: ['./show-todo-list.component.scss']
})
export class ShowTodoListComponent implements OnInit {

  public todoList: TodoItem[];
  constructor(public todoListService: TodoListService) { }

  ngOnInit() {

  }

  public getTodo(): TodoItem[] {
    return this.todoListService.getTodoList().subscribe(
      
    );
  }

}
