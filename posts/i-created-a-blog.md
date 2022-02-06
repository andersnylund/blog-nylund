---
title: I created a blog
date: '2019-02-23'
excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus.'
---

![Sanity, Gatsby, and Netlify logo](/assets/logos.png)

JAMStack (JavaScript, APIs, and Markup) is a new buzzword in the web-world, and I am trying to de-mystify it. So, I created [a blog](https://www.alicevidjeskog.com) that utilizes this stack! 🔥 The end result is a [Gatsby](https://www.gatsbyjs.org/) site hosted on [Netlify](https://www.netlify.com), that is connected to [Sanity](https://www.sanity.io). Sanity hosts the CMS and a studio to edit the content.

Sanity is a headless CMS service. They have a free developer tier that has more than enough capabilities for playing around and testing out the service. Sanity also allows hosting of the backend and a content studio for editing the content. Sanity features management of multiple databases so you could have 2 different environments for a blog e.g. one for local development and testing and another one for production. Because the studio has a WYSIWYG (What You See Is What You Get) editor, there is not need to write markup. Therefore this stack is not quite JAMStack 😏

I have to say that setting everything up and running was very easy. I followed [this](https://www.sanity.io/blog/how-to-quickly-set-up-a-gatsby-js-jamstack-website-with-a-headless-cms) tutorial from Sanity. The tutorial explains each step in detail and I had no problems in getting everything up and running. The result of the tutorial is a basic template with minimal styling. However, I thought that it was good enough for now, and I've only added some minor animations and a big hero picture on the landing page.

The styling of the blogsite is still in the early stages, and I do not like the starter's way of styling. I will probably at some point rewrite the styling with CSS-in-JS utilizing styled-components.

When first played around with the setup, I sometimes wondered why the content wasn't updated on the deployed version on Netlify, but then I remembered that Gatsby is a static site generator, and not a dynamic React application. The gatsby site requires a re-build so that the content is updated. Sanity's tutorial instructs on setting up a hook from Netlify to Sanity. After doing that, each update in the sanity studio (be it on your own computer via the development studio, or via the sanitys-deployed studio), Netlify will trigger a new build that finishes in under a minute. AWESOME! 💪🏻

![Screenshot of Sanity studio](/assets/sanity-studio.png)
_Above is a screenshot of the content management studio. The default studio setup I've only added the Main Image part_
