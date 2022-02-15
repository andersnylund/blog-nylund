---
title: Benefits of Next.js's custom page extensions
date: '2022-02-15'
excerpt: 'Using custom page extensions in Next.js has helped me structure my project better, and meanwhile it has improved the readability of the code and allowed me to have colocated tests.'
---

Using custom page extensions in Next.js has helped me structure my project better. Meanwhile it has also improved the readability of the code and allowed me to have colocated tests.

Next.js introduced a while ago [custom page extensions](https://nextjs.org/docs/api-reference/next.config.js/custom-page-extensions). This allows to set Next to look at specific naming patterns for your pages and routes.

I have set my `next.config.js` to look as follows

```javascript
module.exports = {
  pageExtensions: ['page.tsx', 'api.ts'],
};
```

and renamed all my "page"-files to have the `.page.tsx` extension and "api"-files to have the `.api.ts` extension

This configures next to look only for these file extensions under the `/pages` folder. The folder structure could look something like this.

```files
├── pages
│   ├── index.page.tsx
│   ├── about.page.tsx
│   ├── contact.page.tsx
│   └── api
│       └── hello.api.ts
├── node_modules
├── README.md
├── package.json
├── package-lock.json
└── next.config.js
```

**This has in my opinion a few benefits.**

## 1. It helps in differentaiting files and their types

I am not longer confusing what is a page, an api route, a component, or a normal module of code that I have decided to separate into it's own module. I tend to fly around code and quickly change files back and front when getting to know a new codebase or when I am trying to get the big picture of what I am doing. I've noticed that Next's file-based routing combined with dynamic routes mixed in with React components and other modules makes this a bit more difficult. Sometimes I don't know if the file that I am currently looking at is a page or a component or some module of code. By taking a look at the file name and finding either the `page.tsx` or `api.ts` or nothing for a normal component, I immediately know what kind of file I am looking at. This has helped me a lot in

## 2. Allows colocated tests

I find colocating a good way to keep the overhead of navigating and reading code low. My opinion is that related things should be close together.

For a long time Next.js didn't even mention testing on their docs. Finally there is a [page about it](https://nextjs.org/docs/testing) in the docs. However, they are recommending to put your tests into a `__tests__` folder in the project root. I don't like that. And they haven't provided any simple way to work around this. Because of it I was for a long time struggling when writing code on a Next.js project.

## Thanks

Thanks goes to [this comment on the issues on Next.js's GitHub](https://github.com/vercel/next.js/issues/3728#issuecomment-897009514). Without it I would probably be struggling with it still today.
