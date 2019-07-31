import { Component, OnInit } from '@angular/core';
import { Todo } from '../store/models/todo.model';
import { Observable } from 'rxjs';
import { AppState } from '../store/todo.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos: Observable<Todo[]>;
  
  constructor(private store: Store<AppState>) {
    this.todos = store.select('todo');
   }

  ngOnInit() {
  }

}
