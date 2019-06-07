import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TodoListService } from '../../services/todo-list.service';
import { TodoItem } from '../../models/todoItem';

@Component({
  selector: 'app-edit-todo-item',
  templateUrl: './edit-todo-item.component.html',
  styleUrls: ['./edit-todo-item.component.scss']
})
export class EditTodoItemComponent implements OnInit {

  public item: any;
  public title: string;
  constructor(private route: ActivatedRoute, 
    private todoListService: TodoListService) { }

  ngOnInit() {
    let id = '';
    this.route.paramMap.subscribe(params => {
      id = params.get("id"); 
    });
    this.item = this.todoListService.getTodoItemById(id);
    console.log(id, this.item);
  }
  public saveEditTodoItem() {
    const description = (document.getElementById('editDescription') as HTMLTextAreaElement).value;
    const title = (document.getElementById('editTitle') as HTMLInputElement).value;
    this.todoListService.editTodoItem(title, description, this.item);
  }

  public toggle() {
    this.item.isComplete = !this.item.isComplete;
    this.todoListService.changeComplete(this.item);
  }
}
