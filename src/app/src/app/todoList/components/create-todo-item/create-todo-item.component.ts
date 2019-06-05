import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormsService } from '../../services/forms.service';
import { TodoListService } from '../../services/todo-list.service';
import { TodoItem } from '../../models/todoItem';

@Component({
  selector: 'app-create-todo-item',
  templateUrl: './create-todo-item.component.html',
  styleUrls: ['./create-todo-item.component.scss']
})
export class CreateTodoItemComponent implements OnInit {

  public todoItem: FormGroup; // = this.formService.addNewTodoItemForm();


  constructor(
    private formService: FormsService,
    private todoListService: TodoListService
  ) { }

  ngOnInit() {
    this.todoItem = this.formService.addNewTodoItemForm();

  }

  public addNewData(): any {
    console.log(this.todoItem);
    console.log(this.todoListService
      .addNewTodoItem(this.todoItem));
  }

}
