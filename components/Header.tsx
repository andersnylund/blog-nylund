import Link from 'next/link';
import { FC } from 'react';
import styled from 'styled-components';

export const Header: FC = () => (
  <H2>
    <Link href="/">
      <a>andersnylund</a>
    </Link>
    .
  </H2>
);

const H2 = styled.div`
  a {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  font-size: 3rem;
  font-weight: bold;
  letter-spacing: -0.025em;
  line-height: 3.5rem;
  margin-bottom: 5rem;
  margin-top: 2rem;

  @media (min-width: 48rem) {
    font-size: 5rem;
  }
`;
