import ErrorPage from 'next/error';
import Head from 'next/head';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { Container } from '../components/Container';
import { Header } from '../components/Header';
import { Layout } from '../components/Layout';
import { PostBody } from '../components/PostBody';
import { PostHeader } from '../components/PostHeader';
import { PostTitle } from '../components/PostTitle';
import { getAllPosts, getPostBySlug } from '../lib/api';
import { PostType } from '../types';

interface Props {
  post: PostType;
  morePosts: PostType[];
}

const Post = ({ post, morePosts }: Props) => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <Article>
              <Head>
                <title>{post.title} | andersnylund</title>
                {post.ogImageUrl && (
                  <meta property="og:image" content={post.ogImageUrl} />
                )}
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
              />
              <PostBody content={post.content} />
            </Article>
          </>
        )}
      </Container>
    </Layout>
  );
};

export default Post;

const Article = styled.article`
  margin-bottom: 8rem;
`;

interface Params {
  params: {
    slug: string;
  };
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImageUrl',
    'coverImage',
  ]);

  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
