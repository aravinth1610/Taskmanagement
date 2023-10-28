import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateTask } from '../model/create-task';
import { environment } from 'src/environments/environment';
import { Appconstant } from '../constant/appconstant';
import { map, retry } from 'rxjs';
import { AbstractControl } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class AsyncViceService {
  constructor(private http: HttpClient,private datePipe: DatePipe) {}

  // createTaskTomanager(control: AbstractControl) {
  createTaskTomanager(task: CreateTask[]) {

  task.forEach(x => {x.startOn = this.datePipe.transform(x.startOn, 'dd-MMM-yyyy HH:mm:ss');
  x.endOn=this.datePipe.transform(x.endOn, 'dd-MMM-yyyy HH:mm:ss')})

console.log(task);
   
    return this.http
      .post(environment.apiUrl + Appconstant.CREATETASK_API_URL, task, {
        headers: { 'Content-Type': 'application/json' },
        observe: 'response',
        withCredentials: true
      })
      .pipe(
        map((createTaskResponse) => {
          if (createTaskResponse.status === 200) {
            return createTaskResponse.body;
          } else {
            return 101;
          }
        }),
      );
  }

getManager()
{
  return this.http.get(environment.apiUrl + Appconstant.LISTOMANAGERS_API_URL, {
    headers: { 'Content-Type': 'application/json'  },
    observe:'response',
    withCredentials: true
  });
}


  // createTaskTomanager(task: CreateTask) {
  //   return this.http
  //     .post(environment.apiUrl + Appconstant.CREATETASK_API_URL, task, {
  //       observe: 'response',
  //     })
  //     .pipe(
  //       map((createTaskResponse) => {
  //         if(createTaskResponse.status === 200){
  //         return createTaskResponse.body;
  //         }
  //         else{
  //           return 101;
  //         }
  //       }),
  //       retry(3)
  //     );
  // }
}
