import { FC } from 'react';
import styled from 'styled-components';
import { PostType } from '../types';
import { PostPreview } from './PostPreview';

interface Props {
  posts: PostType[];
}

export const MoreStories: FC<Props> = ({ posts }) => {
  return (
    <section>
      <H2>More Posts</H2>
      <Posts>
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
      </Posts>
    </section>
  );
};

const H2 = styled.h2`
  margin-bottom: 2rem;
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 700;
  letter-spacing: -0.05em;
  line-height: 1.25;
`;

const Posts = styled.div`
  margin-bottom: 8rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;
