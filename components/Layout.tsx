import { FC } from 'react';
import { Footer } from './Footer';
import { Meta } from './Meta';

export const Layout: FC = ({ children }) => (
  <>
    <Meta />
    <div className="min-h-screen">
      <main>{children}</main>
    </div>
    <Footer />
  </>
);
