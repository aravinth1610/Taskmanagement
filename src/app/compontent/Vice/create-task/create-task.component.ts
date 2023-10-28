import { DatePipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route } from '@angular/router';
import { AsyncViceService } from 'src/app/Services/async-vice.service';
import { CreateTask } from 'src/app/model/create-task';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css'],
})
export class CreateTaskComponent {
  constructor(private fbuilder: FormBuilder) {}
  createTasks: CreateTask[];
  tasks: FormGroup;

  private createTaskService: AsyncViceService = inject(AsyncViceService);

  taskForm = this.fbuilder.group({
    addtask: this.fbuilder.array([]),
  });

  get addtaskGet() {
    return this.taskForm.controls['addtask'] as FormArray;
  }

  addTasks() {
    this.addtaskGet.push(
      (this.tasks = this.fbuilder.group({
        taskDesc: [
          '',
          {
            validators: [Validators.required],
         //   asyncValidators: [this.createTaskService.createTaskTomanager.bind(this.createTaskService)],
            updateOn: 'blur',
          },
        ],
        assignTo: this.fbuilder.control('', {
          validators: [Validators.required],
    //      asyncValidators: [this.createTaskService.createTaskTomanager.bind(this.createTaskService)],
           updateOn: 'blur',
        }),
        startOn: this.fbuilder.control('', {
          validators: [Validators.required],
          updateOn: 'blur',
        }),
        endOn: this.fbuilder.control('', {
          validators: [Validators.required],
          updateOn: 'blur',
        })

      }))
    );
  }

  fun() {
 
    this.createTasks = this.addtaskGet.value;
     // console.log(this.addtaskGet.value);
    console.log(this.createTasks);
      this.createTaskService.createTaskTomanager(this.createTasks).subscribe({
        next(createTaskRes) {
          console.log(createTaskRes);
        },
        error(err) {
          console.log(err);
        }
      });
  }


 getManagerDetails() {

  this.createTaskService.getManager().subscribe({
    next(res) {console.log(res);
    }
  });
 }




}
