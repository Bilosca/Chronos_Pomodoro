import "./styles/global.css";
import "./styles/theme.css";

import { Home } from "./assets/pages/Home";
import { useContext, useState } from "react";
import type { TaskStateModel } from "./models/taskStateModel";
import { TaskContext } from "./contexts/taskContext";

const initialState:TaskStateModel = {
  tasks:[],
  secondsRemaining : 0,
  formattedSecondsRemaining : '00:00',
  activeTask: null,
  CurrentCycle: 0,
  config:{
    workTime : 25,
    shortRestTime:5,
    longRestTime:15,
  }
}

export function App() {
  const [state,setState] = useState(initialState)

  return(  
  <div>
    <TaskContext.Provider value={{usuario : "Gabriel"}}>
      <Home />
    </TaskContext.Provider>
  </div>

  )
 
}
