import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TodoItem } from '../models/todoItem';

@Injectable({
  providedIn: 'root'
})
export class FormsService {
  public todoItem: FormGroup;
  constructor(private fb: FormBuilder) { }

  public addNewTodoItemForm() {
    return this.todoItem = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  

}