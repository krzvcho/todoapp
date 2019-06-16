import { Component, OnInit } from "@angular/core";
import { TodoListService, TodoListItem } from "../services/todo-list.service";

@Component({
  selector: "app-todo-container",
  templateUrl: "./todo-container.component.html",
  styleUrls: ["./todo-container.component.scss"]
})
export class TodoContainerComponent implements OnInit {
  public itemList: Array<TodoListItem>;
  public inputVal: string = "";

  constructor(private todoListService: TodoListService) {}

  ngOnInit() {
    this.updateList();
  }

  addTask() {
    let record: TodoListItem = {
      id: new Date().getDate(),
      title: this.inputVal,
      status: "new"
    };

    this.todoListService.addListItem(record);
    this.updateList();
  }

  updateList() {
    this.itemList = this.todoListService.getListItems();
  }
}
