import { FC } from 'react';
import styled from 'styled-components';

export const PostTitle: FC = ({ children }) => {
  return <H1>{children}</H1>;
};

const H1 = styled.h1`
  font-size: 2rem;
  line-height: 1;
  font-weight: 700;
  letter-spacing: -0.05em;
  line-height: 1.25;
  margin-bottom: 3rem;

  @media (min-width: 48rem) {
    font-size: 3rem;
    line-height: 1;
  }
`;
