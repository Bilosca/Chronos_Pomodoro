import styles from "./style.module.css";
import { DefaultInput } from "../DefaultInput";
import { Cycles } from "../Cycles";
import { Button } from "../buttonInput";
import { PlayCircleIcon } from "lucide-react";
import { useRef } from "react";
import type { TaskModel } from "../../models/taskModels";
import { useTaskContext } from "../../contexts/taskContext/useTaskContext";
import { getNextCycle } from "../../utility/getNextCycle";
import { getNextCycleType } from "../../utility/getNextType";
import { SecondsToMinutes } from "../../utility/secondsToMinutes";
// import { useState } from "react";

export function Form() {
  // const [task, setTask] = useState('')
  const { state, setState } = useTaskContext();
  const taskInputRef = useRef<HTMLInputElement>(null);

  //ciclos
  const nextCycle = getNextCycle(state.currentCycle);
  const nextType = getNextCycleType(nextCycle);
  console.log(state);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const taskInputValue = taskInputRef.current.value.trim();
    if (taskInputValue === null) return;

    console.log(taskInputValue);
    // setTask('')

    if (taskInputValue === "") {
      alert("Digite uma Tarefa: ");
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskInputValue,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[nextType],
      type: nextType,
    };
    const secondsRemaining = newTask.duration * 60;

    setState((prevState) => {
      return {
        ...prevState,
        config: { ...prevState.config },
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining, //
        formattedSecondsRemaining: SecondsToMinutes(secondsRemaining),
        tasks: [...prevState.tasks, newTask],
      };
    });
  }
  return (
    <form onSubmit={handleCreateNewTask} className={styles.form}>
      <div className={styles.formRow}>
        <DefaultInput
          id="Input"
          type="text"
          labelText="task"
          placeholder="Digite aqui"
          // value={task}
          // onChange={e => setTask(e.target.value)}
          ref={taskInputRef}
        ></DefaultInput>
      </div>
      <div className="texto">
        <p></p>
      </div>

      <div className={styles.ciclos}>
        <Cycles />
      </div>
      <Button icon={<PlayCircleIcon />} />
    </form>
  );
}
