import Link from 'next/link';
import { FC } from 'react';
import styled from 'styled-components';

type Props = {
  title: string;
  src?: string;
  slug?: string;
};

export const CoverImage: FC<Props> = ({ title, src, slug }) => {
  if (!src) {
    return null;
  }

  const image = <Image src={src} alt={`Cover Image for ${title}`} />;

  return (
    <div>
      {slug ? (
        <Link as={`/${slug}`} href="/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

const Image = styled.img`
  max-width: 100%;
`;
