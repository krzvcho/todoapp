import { Component, OnInit } from "@angular/core";
import { TodoListService, TodoListItem } from "../services/todo-list.service";

@Component({
  selector: "app-todo-container",
  templateUrl: "./todo-container.component.html",
  styleUrls: ["./todo-container.component.scss"]
})
export class TodoContainerComponent implements OnInit {
  public itemList: Array<TodoListItem>;

  constructor(private todoListService: TodoListService) {}

  ngOnInit() {
    this.updateList();
  }

  addTask(event) {
    let record: TodoListItem = {
      id: new Date().getDate(),
      title: event.form.value.taskName,
      status: "new"
    };

    this.todoListService.addListItem(record);
    this.updateList();
  }

  updateList() {
    this.itemList = this.todoListService.getListItems();
  }
}
