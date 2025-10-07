import type { TaskStateModel } from "./taskStateModel";

export type TaskModel = {
  id:number;
  name:string;
  duration:number;
  startDate:number;
  completeDate:number |null; //quando o timer chega ao final
  interruptDate:number | null; //quando a task e interrompida
  type: keyof TaskStateModel['config'] //pega as chaves do dict config no modelo taskStateModel
  
};