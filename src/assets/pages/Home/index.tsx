import { Form } from "../../../components/Form";
import { MainTemplate } from "../../../components/Template/MainTemplate";
import { Container } from "../../../components/Container";
import { Timer } from "../../../components/Timer";

export function Home() {

  return (
    <MainTemplate>
      <Container>
        <Timer ></Timer>
      </Container>
      <Container>
        <Form ></Form>
      </Container>
    </MainTemplate>
  );
}
