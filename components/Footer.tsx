import { Container } from './Container';
import { FC } from 'react';

export const Footer: FC = () => (
  <footer className="bg-neutral-50 border-t border-neutral-200">
    <Container>
      <div className="py-28 flex flex-col lg:flex-row items-center">
        <a
          href="https://github.com/andersnylund"
          className="font-bold hover:underline"
        >
          My other stuff on GitHub
        </a>
      </div>
    </Container>
  </footer>
);
