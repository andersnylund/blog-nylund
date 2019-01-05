---
title: The road to GraphQL
date: 2019-01-05
---

I'm continuing my path to becoming a fullstack developer that is not scared of either side of the web development stack. I saw that my next step in getting forward was learning GraphQL as both the backend and the frontend will benefit from it. I found [this book](https://www.robinwieruch.de/the-road-to-graphql-book/) on GraphQL and it seemed interesting. I've also noticed that I learn a lot better from reading than from watching videos or screencasts (will probably write a blog post about this sometime in the future)

Therefore I started to follow the "course". The outcome of the course can be found [here](https://github.com/andersnylund/the-road-to-graphql/)

## GraphQL

GraphQL was released by Facebook in 2015, but it is only the past year that I think it's been gaining some momentum. GraphQL can be seen as a direct competitor to the currently dominating RESTful APIs that are used to interface frontends with backend in applications.

Compared to REST, GraphQL has only one endpoint. To this endpoint a client can make queries and mutations (and also subscriptions). HTTP methods (GET, POST, DELETE) are not used in GraphQL and each request is a POST request where the query or mutation is defined in the body of the POST request.

Maybe the biggest advantage of GraphQL is that you don't need to make multiple request to the API. I REST the client might need to make multiple requests where each request is based on the response of the previous request. In GraphQL the query can be built in a way where only one request to the backend is required to get all the wanted data from there.

Another advantage of GraphQL is that its spec is easier to understand. In my experience creating a pure RESTful API, as Roy Fielding defined it, is really difficult. I often end up creating something that just reminds of REST. In this course creating a GraphQL the correct way was really easy with help of Apollo's products.

## Apollo

GraphQL is just the specification of the technology and lacks the implementation. One popular implementation of GraphQL is [Apollo](https://www.apollographql.com/). Apollo provides a plethora of different tools related to GraphQL including both client and server side implementations.

## GraphQL in the frontend

Using Apollo Client in a React application is quite a paradigm shift from REST. Apollo's GraphQL client implementation takes care of a lot of things as state management, caching, optimistic UI etc.

One thing that I found difficult with Apollo Client was the usage of [render props](https://reactjs.org/docs/render-props.html). Sometimes using [HOC](https://reactjs.org/docs/higher-order-components.html) could be a more clear alternative but I can't yet tell when to use what as my experience with both of them is limited.

## GraphQL in the backend

Apollo Server enables easy setup of a GraphQL API. Apollo Server has an built-in GraphQL client application (GraphQL Playground) where one can play around and verify the API. I found this very helpful and the schema itself works as a documentation of the API. In normal REST there is a need to add some kind of API doc generator e.g. Swagger.

## Takeaways

I notice when writing this that my knowledge of the topic is still at a low level, and that explaining the benefits of GraphQL over REST feels uncomfortable. However, I think that the book gave me a good introduction of what GraphQL is and how it is used.
