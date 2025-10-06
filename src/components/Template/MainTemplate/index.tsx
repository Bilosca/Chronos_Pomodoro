import { Logo } from "../../Logo";

import { Footer } from "../../Footer";
import { Container } from "../../Container";
import { Menu } from "../../Menu";

type MainTemplateProps={
  children:React.ReactNode
}

export function MainTemplate({children}:MainTemplateProps) {
  return (
    <>
      <Container>
        <Logo></Logo>
      </Container>
      <Container>
        <Menu></Menu>
      </Container>
      {children}
      <Container>
        <Footer/>
      </Container>
    </>
  );
}
