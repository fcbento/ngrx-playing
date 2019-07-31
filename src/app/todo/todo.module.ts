import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoComponent } from './todo.component';
import { TodoRoutingModule } from './todo-routing.module';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/reducers/todo.reducer';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TodoComponent,
    TodoListComponent
  ],

  imports: [
    CommonModule,
    TodoRoutingModule,
    FormsModule,
    StoreModule.forRoot({
      todo: reducer
    })
  ]
})
export class TodoModule { }
