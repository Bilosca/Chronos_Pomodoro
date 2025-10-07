import type { TaskModel } from "./taskModels"

export type TaskStateModel ={
  tasks: TaskModel[]; 
  secondsRemaining : number;
  formattedSecondsRemaining: string; 
  activeTask:TaskModel | null 
  CurrentCycle :number;
  config :{
    workTime : number
    shortRestTime : number
    longRestTime : number
  }
}