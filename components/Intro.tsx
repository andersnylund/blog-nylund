import { FC } from 'react';
import styled from 'styled-components';

export const Intro: FC = () => {
  return (
    <Section>
      <H1>andersnylund.</H1>
      <FloatRight>
        <H4>Stuff about web tech and other interesting things.</H4>
      </FloatRight>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
`;

const H1 = styled.h1`
  font-size: 3rem;

  @media (min-width: 48rem) {
    font-size: 6rem;
    line-height: 1;
    letter-spacing: -0.05em;
  }
`;

const H4 = styled.div`
  font-size: 1.125rem;
  line-height: 1.75rem;
  max-width: 20rem;
`;

const FloatRight = styled.div`
  display: flex;
  justify-content: flex-end;
`;
