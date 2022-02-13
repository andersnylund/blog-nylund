import { FC } from 'react';
import styled from 'styled-components';

export const Footer: FC = () => (
  <FooterContainer>
    <div>
      <a href="https://github.com/andersnylund">My other stuff on GitHub</a>
    </div>
  </FooterContainer>
);

const FooterContainer = styled.footer`
  a {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  align-items: center;
  background-color: hsl(0, 0%, 97%);
  border-top: 0.0625rem hsl(0, 0%, 90%) solid;
  display: flex;
  font-weight: bold;
  justify-content: center;
  padding: 4rem 0;
`;
