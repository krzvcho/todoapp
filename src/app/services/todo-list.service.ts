import { Injectable } from '@angular/core';

export interface TodoListItem {
  id: number;
  title: string;
  status: 'new' | 'ready' | 'important';
}

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  private todoList: Array<TodoListItem> = [];
  constructor() {}

  addListItem(item: TodoListItem): boolean {
    if (this.todoList.find(i => i.title === item.title)) {
      return false;
    } else {
      this.todoList.push(item);
      return true;
    }
  }

  removeListItem(item: TodoListItem): void {
    this.todoList = this.todoList.filter(i => i.title !== item.title);
  }

  changeItemStatus(item: TodoListItem, status: TodoListItem['status']) {
    const modItem = this.todoList.find(i => i.title === item.title),
      itemIdx = this.todoList.indexOf(modItem);

    modItem.status = status;
    this.todoList[itemIdx] = modItem;
  }

  getListItems(): Array<TodoListItem> {
    return this.todoList;
  }
}
