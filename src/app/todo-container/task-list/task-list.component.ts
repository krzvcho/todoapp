import { Component, OnInit, Input } from "@angular/core";
import { TodoListItem } from "src/app/services/todo-list.service";

@Component({
  selector: "app-task-list",
  templateUrl: "./task-list.component.html",
  styleUrls: ["./task-list.component.scss"]
})
export class TaskListComponent implements OnInit {
  @Input() itemList: Array<TodoListItem>;

  constructor() {}

  ngOnInit() {}
}
