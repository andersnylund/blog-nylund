import Link from 'next/link';
import { FC } from 'react';
import styled from 'styled-components';
import { CoverImage } from './CoverImage';
import { DateFormatter } from './DateFormatter';

interface Props {
  title: string;
  coverImage?: string;
  date: string;
  excerpt: string;
  slug: string;
}

export const HeroPost: FC<Props> = ({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}) => {
  return (
    <section>
      <ImageContainer>
        <CoverImage title={title} src={coverImage} slug={slug} />
      </ImageContainer>
      <HeroPostContainer>
        <div>
          <H2>
            <Link as={`/${slug}`} href="/[slug]">
              <a>{title}</a>
            </Link>
          </H2>
          <DateContainer>
            <DateFormatter dateString={date} />
          </DateContainer>
        </div>
        <div>
          <p>{excerpt}</p>
        </div>
      </HeroPostContainer>
    </section>
  );
};

const ImageContainer = styled.div`
  margin-bottom: 2rem;
  @media (min-width: 48rem) {
    margin-bottom: 4rem;
  }
`;

const HeroPostContainer = styled.div`
  margin-bottom: 5rem;

  a {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const H2 = styled.h2`
  margin-bottom: 1rem;
  font-size: 2.25rem;
  line-height: 2.5rem;
  line-height: 1.25;
`;

const DateContainer = styled.div`
  margin-bottom: 1rem;
  font-size: 1.125rem;
  line-height: 1.75rem;
`;

const P = styled.p`
  font-size: 1.125rem;
  line-height: 1.75rem;
  line-height: 1.625;
  margin-bottom: 1rem;
`;
