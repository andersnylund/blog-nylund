---
title: Next.js and Prisma integration tests
date: 2021-04-04
---

## TL;DR

I simple example of how to create integration tests with Next.js and Prisma. Example repository found from [GitHub - Next.js and Prisma integration tests example](https://github.com/andersnylund/next-js-prisma-integration-tests)

## The beef

Integration tests are a great way to save you from bugs and regressions. However, setting them up often require some initial effort and can be the reason to completely avoid them. To alleviate this problem I made a simple example repository that demonstrates setting up integration tests with Next.js and Prisma.

Recently I have played around with [Next.js](https://nextjs.org/) and [Prisma](https://www.prisma.io/) on a small side-project. My philosophy is to have a good testing suite that will catch most of the small bugs that pop up while coding and refactoring your code.

I have used a variety of tools to make the project comfortable to me. Some of the libraries and frameworks are interchangable, and the main focus should be on writing end-to-end tests from the API layer down to the database layer.

The example repository can be found from [GitHub - Next.js and Prisma integration tests example](https://github.com/andersnylund/next-js-prisma-integration-tests). I have setup [CI with GitHub](https://github.com/andersnylund/next-js-prisma-integration-tests/actions/workflows/main.yml) actions to demonstrate running of the tests.

[![CI](https://github.com/andersnylund/next-js-prisma-integration-tests/actions/workflows/main.yml/badge.svg)](https://github.com/andersnylund/next-js-prisma-integration-tests/actions/workflows/main.yml)

## Notable things from the code

### `docker-compose.yml` file

The docker-compose file defines two databases. One for running the application in development, and another for running the tests. The test database can then insert and remove data without worrying about the development database. This way the developer can also run the app and tests simultaneously.

### `next-connect` library

[next-connect](https://github.com/hoangvvo/next-connect) is a “TypeScript-ready, minimal router and middleware layer for Next.js …”. I have taken that into use to make the next api-handlers become a bit more similar to what express is.

Advantages of using `next-connect` compared to Next.js’s standard API-routes:

- Improved error handling in the routes
- Improved differentiation of http methods (GET, POST, GET etc.)
- More declarative usage of middleware

### `prisma.ts` file

It could be possible to import the Prisma client directly like

```typescript
import { PrismaClient } from '@prisma/client';
```

However, there is a problem that during development new instances of the prisma client will be created when Next.js will hot-reload and generate new builds of the modified files on the fly. Because of this I differentiate `NODE_ENV`s from each other. `production`, `development` , and `test` are all handled differently. With help of this the `test` environment also gets a different `DATABASE_URL` variable.

### `integration-test-hooks.ts` file

The integration tests use a basic node http-server to serve the app. Before each test suite the `setup` function is called with the Next.js API-handler and the optional query parameters.

#### Setup

Setup starts the the http-server and assigns the resolver to each request that arrives to it.

Setup uses Next.js’s internal `apiResolver`. It is not probably meant to be used like this, so hopefully they won’t change the API of it. The `apiResolver` takes the request, response, query, handler, API preview props, and a flag to propagate errors as parameters.

#### Teardown

`teardown` cleans up the database by removing all entries from it. It also disconnects the prisma instance from the database, and finally closes the https server.

All of the tests are required to be run sequentially, or otherwise the multiple http-servers would interfere with each other. Because of this the jest flag `--runInBand` is used.
