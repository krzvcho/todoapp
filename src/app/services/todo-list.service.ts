import { Injectable } from "@angular/core";

export interface TodoListItem {
  id: number;
  title: string;
  status: "new" | "ready" | "important";
}

@Injectable({
  providedIn: "root"
})
export class TodoListService {
  private todoList: Array<TodoListItem> = [];
  constructor() {}

  addListItem(item) {
    this.todoList.push(item);
  }

  getListItems(): Array<TodoListItem> {
    return this.todoList;
  }
}
