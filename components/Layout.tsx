import { FC } from 'react';
import styled from 'styled-components';
import { Footer } from './Footer';
import { Meta } from './Meta';

export const Layout: FC = ({ children }) => (
  <>
    <Meta />
    <Main>{children}</Main>
    <Footer />
  </>
);

const Main = styled.main`
  min-height: 100vh;
`;
