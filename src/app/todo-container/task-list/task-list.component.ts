import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { TodoListItem } from "src/app/services/todo-list.service";

@Component({
  selector: "app-task-list",
  templateUrl: "./task-list.component.html",
  styleUrls: ["./task-list.component.scss"]
})
export class TaskListComponent implements OnInit {
  @Input() itemList: Array<TodoListItem>;
  @Output() buttonDeleteClicked = new EventEmitter();
  @Output() buttonDoneClicked = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
