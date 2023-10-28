export class CreateTask {
  taskDesc: String;
  assignTo: String;
  startOn: string;
  endOn: string;
 
  constructor(
    taskDesc?: String,
    assignTo?: String,
    startOn?: string,
    endOn?: string,
  ) {
    this.taskDesc = taskDesc;
    this.assignTo = assignTo;
    this.startOn = startOn;
    this.endOn = endOn;
  }
}
