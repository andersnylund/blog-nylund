import { FC } from 'react';
import styled from 'styled-components';
import { CoverImage } from './CoverImage';
import { DateFormatter } from './DateFormatter';
import { PostTitle } from './PostTitle';

type Props = {
  title: string;
  coverImage?: string;
  date: string;
};

export const PostHeader: FC<Props> = ({ title, coverImage, date }) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <ImageContainer>
        <CoverImage title={title} src={coverImage} />
      </ImageContainer>
      <Date>
        <DateFormatter dateString={date} />
      </Date>
    </>
  );
};

const ImageContainer = styled.div`
  margin-bottom: 2rem;
`;

const Date = styled.div`
  font-size: 1.125rem;
  line-height: 1.75rem;
  margin-bottom: 1.5rem;
`;
