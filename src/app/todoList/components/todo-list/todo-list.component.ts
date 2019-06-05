import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public todoItem: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {

    this.todoItem = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      isComplited: [false],
      data: [''],
      _id: ['']
    });

  }

  public goTo(link): void {
    console.log(link);

  }


}
