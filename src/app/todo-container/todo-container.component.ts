import { Component, OnInit } from '@angular/core';
import { TodoListService, TodoListItem } from '../services/todo-list.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.scss']
})
export class TodoContainerComponent implements OnInit {
  public itemList: Array<TodoListItem>;
  public warnMessage = '';

  constructor(private todoListService: TodoListService) {}

  ngOnInit() {
    this.loadList();
  }

  addTask(formData) {
    const record: TodoListItem = {
      id: new Date().getTime(),
      title: formData.name,
      status: formData.important ? 'important' : 'new'
    };

    if (this.todoListService.addListItem(record)) {
      this.loadList();
    } else {
      this.showWarnMessage('Failed to add item. Probably item is on your list');
    }
  }

  deleteTask(task: TodoListItem) {
    this.todoListService.removeListItem(task);
    this.loadList();
  }
  changeStatus(event: { item: TodoListItem; status: TodoListItem['status'] }) {
    this.todoListService.changeItemStatus(event.item, event.status);
  }

  showWarnMessage(msg: string): void {
    const source = timer(2000);

    this.warnMessage = msg;
    source.subscribe(val => (this.warnMessage = ''));
  }

  loadList() {
    this.itemList = this.todoListService.getListItems();
  }
}
