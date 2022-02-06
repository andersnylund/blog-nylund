---
title: 'TypeScript – filtering arrays with type guards'
excerpt: 'Filtering arrays and infering the type is possible in TypeScript with help of type guards.'
date: '2021-03-06'
---

Filtering arrays and infering the type is possible in TypeScript with help of type guards.

```typescript
.filter((item): item is ItemWithTitle => item.title !== undefined)
```

will result in an object that has a title, and where the type is automatically also casted to `ItemWithTitle`.

Filtering an array in TypeScript is a good way to ensure that you are only dealing with particular type of data. However, I stumbled upon a problem where even if I filtered out unwanted items from an array, their type would still be the same as when initializing an array.

I tried to search for an easy solution but couldn't easily find any updated tutorials on this, and I was for a long time unsure if it even is possible.

After some searching, I found out that this is [currently supported in TypeScript](https://github.com/microsoft/TypeScript/issues/16069). However there is also a lot of open GitHub issues talking about automatic infering of the types, what really confused me.

All in all, heres the code that TypeScript has problems infering the types in.

```typescript
interface Item {
  id: number;
  title?: string;
}

const items: Item[] = [{ id: 0, title: 'First' }, { id: 1 }];

items
  .filter((item) => item.title !== undefined)
  .map((item) => {
    // even if there are not items without titles in the array, the item.title is of type `string | undefined`
    item.title;
  });
```

The solution is to use type guards in the filter functions return type i.e. `item is YourType`:

```typescript
interface Item {
  id: number;
  title?: string;
}

type ItemWithTitle = Item & {
  title: string;
};

const items: Item[] = [{ id: 0, title: 'First' }, { id: 1 }];

items
  .filter((item): item is ItemWithTitle => item.title !== undefined)
  .map((item) => {
    // now every item has the "title" property and TypeScript is able to infer the type
    item.title;
  });
```
