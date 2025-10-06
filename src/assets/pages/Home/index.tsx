import { PlayCircleIcon } from "lucide-react";
import { Form } from "../../../components/Form";
import { Button } from "../../../components/buttonInput";
import { MainTemplate } from "../../../components/Template/MainTemplate";
import { Container } from "../../../components/Container";
import { Timer } from "../../../components/Timer";

export function Home() {
  return (
    <MainTemplate>
      <Container>
        <Timer></Timer>
      </Container>
      <Container>
        <Form></Form>
      </Container>
      <Container>
        <Button icon={<PlayCircleIcon/>}/>
      </Container>
    </MainTemplate>
  );
}
