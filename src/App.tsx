import "./styles/global.css";
import "./styles/theme.css";

import { Home } from "./assets/pages/Home";
import { TaskContextProvider } from "./contexts/taskContext/TaskContextProvider";


export function App() {

  return(  
  <div>
    <TaskContextProvider>
      <Home />
    </TaskContextProvider>
  </div>

  )
 
}
