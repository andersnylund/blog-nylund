---
title: An use case for JavaScript template tags
date: '2020-05-10'
excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus.'
coverImage: ''
ogImage:
  url: ''
---

JavaScript template strings is an easy way to concatenate strings or using templates to create strings where some parts are populated from previously defined variables.

For me one of the most apparent examples of them are creating URL paths that include an ID of some sort. For example if a want to assign the string of `/users/3873245/books` to a constant in JavaScript or TypeScript, I would write the following code:

```typescript
const id = 3873245;
const path = `/users/${id}/books`;
```

I found myself in a situation where I wanted to perform logging of each URL in a fetch request. However, I didn't want to include the ID. After some tinkering I found out that I could utilize the JavaScript template tags to mask this value. So I came up with this solution in TypeScript:

```typescript
interface Paths {
  path: string;
  logPath: string;
}

export const paths = (
  strings: TemplateStringsArray,
  ...variables: string[]
): Paths => {
  let path = '';
  strings.forEach((string, i) => {
    path += string + (variables[i] || '');
  });
  return {
    path,
    logPath: strings.join('<masked_value>'),
  };
};
```

With help of this I could then for each path that I built, do the following

```typescript
const id = 3873245;
const { path, logPath } = paths`/users/${id}/books`;
```

and the result would be that variables `path` and `logPath` would have the following values

```typescript
console.log(path); // /users/3873245/books
console.log(logPath); // /users/<masked_value/books
```

I found the solution quite convenient and for me it was the first time I used JavaScript template tags in my own code.
