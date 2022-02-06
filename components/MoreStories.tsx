import { FC } from 'react';
import { PostType } from '../types';
import { PostPreview } from './PostPreview';

interface Props {
  posts: PostType[];
}

export const MoreStories: FC<Props> = ({ posts }) => {
  return (
    <section>
      <h2 className="mb-8 text-3xl md:text-3xl font-bold tracking-tighter leading-tight">
        More Posts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
};
