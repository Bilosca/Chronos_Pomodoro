import "./styles/global.css";
import "./styles/theme.css";
import { Heading } from "./components/Heading";
import { TimerIcon } from "lucide-react";

export function App() {
  return (
    <>
      <Heading>
        <button>
          <TimerIcon />
        </button>
        Chronos
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
        consequuntur sint, alias esse quis, fugiat non culpa debitis ducimus
        voluptatum laudantium ipsam temporibus natus quae iste, aperiam quisquam
        blanditiis ratione.
      </p>
    </>
  );
}
