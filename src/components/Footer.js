import React from 'react';
import { LinkFooter, Container } from './Styles/FooterStyle';

function Footer() {
  return (
    <Container>
      <h3>
        Created by
        <LinkFooter href="https://github.com/marurevi/React---Metrics-webapp"> Mariana Revilla Lérida</LinkFooter>
      </h3>
    </Container>
  );
}

export default Footer;
