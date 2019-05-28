import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {


  public opened = false;
  public todoItem: FormGroup;
  public todo: any;
  public showEditWindow = true;
  public open = '';
  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.todoItem = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      isComplited: [false],
      data: [''],
      _id: ['']
    });

    this.todo = this.getTodoList();
    console.log(this.todo);
  }

  get f() {
    return this.todoItem.controls;
  }

  //save todo data to locaStorage
  public saveData() {
    localStorage.setItem('todoList', JSON.stringify(this.todo));
    this.todo = this.getTodoList();
  }

  //check compiled todo items
  public complitedTodoItem(id) {
    this.todo.forEach(el => {
      if (el._id === id) {
        el.isComplited = !el.isComplited;
      }
    });
    console.log(this.todo);
    this.saveData();
  }

  // add new todo item to localStorage
  public addTodoItem() {
    // check if  todoItem.value is valid
    if (this.todoItem.valid && this.todoItem.value.title.length) {
      this.todoItem.value.data = new Date();
      this.todoItem.value._id = Date.now();

      this.todo.push(this.todoItem.value);
      this.saveData();
      this.opened = false;
    } else {
      console.log(this.todoItem.valid, this.todoItem.value);
      return;
    }
  }

  // get objects array from localstorage or empty array
  public getTodoList() {
    return JSON.parse(localStorage.getItem('todoList')) || [];
  }

  //remove todo item from localStorage
  public deleteTodoItem(id) {
    this.todo = this.todo.filter(el => {
      return el._id !== id;
    })
    this.saveData();
  }

  //edit item todo 
  public editTodoItem(id) {
    if ((document.querySelector('.title-edit') as HTMLInputElement).value) {
      this.todo.forEach(el => {
        if (el._id === id) {
          el.data = new Date();
          el._id = id;
          el.title = (document.querySelector('.title-edit') as HTMLInputElement).value;
          el.description = (document.querySelector('.description-edit') as HTMLInputElement).value;
          console.log(id, el);
        }
      });
    }
    this.saveData();
  }

  //show or hidden add todo item panel
  public showContent(value) {
    if (this.open === value) {
      this.open = '';
      return;
    }
    this.open = value;
  }

}
