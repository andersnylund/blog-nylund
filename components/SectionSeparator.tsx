import { FC } from 'react';
import styled from 'styled-components';

export const SectionSeparator: FC = () => {
  return <Hr />;
};

const Hr = styled.hr`
  border-color: rgb(229 229 229);
  margin-top: 7rem;
  margin-bottom: 6rem;
`;
