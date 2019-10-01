import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {
  @Output() formSubmit = new EventEmitter();
  public taskName = '';
  public taskImportant = false;

  constructor() {}

  ngOnInit() {}

  submitTask() {
    this.formSubmit.emit({
      name: this.taskName,
      important: this.taskImportant
    });
    this.taskName = '';
  }
}
