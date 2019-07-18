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

  addListItem(item): boolean {
    if (this.todoList.find(i => i.title === item.title)) {
      return false;
    } else {
      this.todoList.push(item);
      return true;
    }
  }

  removeListItem(item): void {
    this.todoList = this.todoList.filter(i => i.title !== item.title);
  }

  changeItemStatus(item, status) {
    // /this.todoList =
  }

  getListItems(): Array<TodoListItem> {
    return this.todoList;
  }
}
