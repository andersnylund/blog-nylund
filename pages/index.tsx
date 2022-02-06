import { NextPage } from 'next';
import Head from 'next/head';
import { Container } from '../components/Container';
import { HeroPost } from '../components/HeroPost';
import { Intro } from '../components/Intro';
import { Layout } from '../components/Layout';
import { MoreStories } from '../components/MoreStories';
import { getAllPosts } from '../lib/api';
import { PostType } from '../types';

interface Props {
  allPosts: PostType[];
}

const Index: NextPage<Props> = ({ allPosts }) => {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Layout>
        <Head>
          <title>andersnylund</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'coverImage',
    'excerpt',
  ]);

  return {
    props: { allPosts },
  };
};
