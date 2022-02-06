import { FC } from 'react';
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
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  );
};
