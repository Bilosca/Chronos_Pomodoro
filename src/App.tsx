import "./styles/global.css";
import "./styles/theme.css";

import { Logo } from "./components/Logo";
import { Container } from "./components/Container";
import { Menu } from "./components/Menu";
import { Timer } from "./components/Timer";
import { Form } from "./components/Form";

export function App() {
  return (
    <>
      <Container>
        <Logo></Logo>
      </Container>
      <Container>
        <Menu></Menu>
      </Container>
      <Container>
        <Timer></Timer>
      </Container>
      <Container>
        <Form></Form>
      </Container>
    </>
  );
}
