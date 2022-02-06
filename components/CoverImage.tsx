import cn from 'classnames';
import Link from 'next/link';
import { FC } from 'react';

type Props = {
  title: string;
  src?: string;
  slug?: string;
};

export const CoverImage: FC<Props> = ({ title, src, slug }) => {
  if (!src) {
    return null;
  }

  const image = (
    <img
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-sm', {
        'hover:shadow-lg transition-shadow duration-200': slug,
      })}
    />
  );
  return (
    <div className="sm:mx-0">
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
