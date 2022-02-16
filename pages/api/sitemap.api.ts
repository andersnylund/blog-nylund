import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import { SitemapStream, streamToPromise } from 'sitemap';
import { getAllPosts } from '../../lib/api';

export default nc<NextApiRequest, NextApiResponse>().get(async (req, res) => {
  try {
    const smStream = new SitemapStream({
      hostname: `https://${req.headers.host}`,
    });

    const posts = getAllPosts(['slug']);

    posts.forEach((post) => {
      smStream.write({
        url: `/${post.slug}`,
        changefreq: 'monthly',
        priority: 0.9,
      });
    });

    smStream.end();

    const sitemapOutput = (await streamToPromise(smStream)).toString();

    res.writeHead(200, {
      'Content-Type': 'application/xml',
    });

    res.end(sitemapOutput);
  } catch (e) {
    res.status(500).end();
  }
});
