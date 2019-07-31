import { Action } from '@ngrx/store'
import { Todo } from './../models/todo.model'
import * as TodoActions from './../actions/todo.actions'

// Section 1
const initialState: Todo = {
    task: 'First task to display',
    date: '16/04/1991'
}

// Section 2
export function reducer(state: Todo[] = [initialState], action: TodoActions.Actions) {

    // Section 3
    switch(action.type) {

        case TodoActions.ADD_TODO:
            return [...state, action.payload];

        case TodoActions.REMOVE_TODO:
            state.splice(action.payload, 1)
            return state;

        default:
            return state;
    }
}