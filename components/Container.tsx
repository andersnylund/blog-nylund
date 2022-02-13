import { FC } from 'react';
import styled from 'styled-components';

export const Container: FC = ({ children }) => {
  return <Div>{children}</Div>;
};

const Div = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 50rem;
  padding: 2rem;
`;
