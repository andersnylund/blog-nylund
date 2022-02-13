import Link from 'next/link';
import styled from 'styled-components';
import { CoverImage } from './CoverImage';
import { DateFormatter } from './DateFormatter';

type Props = {
  title: string;
  coverImage?: string;
  date: string;
  excerpt: string;
  slug: string;
};

export const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}: Props) => {
  return (
    <div>
      <ImageContainer>
        <CoverImage slug={slug} title={title} src={coverImage} />
      </ImageContainer>
      <H3>
        <Link as={`/${slug}`} href="/[slug]">
          <a>{title}</a>
        </Link>
      </H3>
      <DateContainer>
        <DateFormatter dateString={date} />
      </DateContainer>
      <P>{excerpt}</P>
    </div>
  );
};

const ImageContainer = styled.div`
  margin-bottom: 1.25rem;
`;

const H3 = styled.h3`
  font-size: 1.875rem;
  line-height: 2.25rem;
  margin-bottom: 0.75rem;
  line-height: 1.375;

  a {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const DateContainer = styled.div`
  font-size: 1.125rem;
  line-height: 1.75rem;
  margin-bottom: 1rem;
`;

const P = styled.p`
  font-size: 1.125rem;
  line-height: 1.75rem;
  line-height: 1.625;
  margin-bottom: 1rem;
`;
