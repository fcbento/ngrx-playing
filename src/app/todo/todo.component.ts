import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { AppState } from './store/todo.state';
import { Store } from '@ngrx/store';
import * as TodoActions from './store/actions/todo.actions';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  addTodo(form: NgForm){
    this.store.dispatch(new TodoActions.AddTodo({task: form.value.task, date: form.value.date}))
  }

}
