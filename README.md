# Nestsj graphQL server and React app

## Introduction 🖖

This repository contains a [Nestjs](https://nestjs.com/) server that exposes a graphQL api built with [apollo server](https://www.apollographql.com/docs/apollo-server/) and a [React](https://react.dev/) app built with Vite that consumes the api using [apollo client](https://www.apollographql.com/docs/react/).

## How to run the project

> [!IMPORTANT]  
> Please make sure you have mysql database running on your device, you can also use a docker container, just be sure to update the database configuration in the server.

- Clone the repository

```
    git clone git@github.com:niemet0502/nodejs-express-server.git
```

- Move inside each project to install dependencies and run project

- Server

```
    cd graphql-server
    npm install
    npm run start:dev
```

From now you will have the server running oh the port **5000**.
Go to [localhost:5000](http://localhost:5000/graphql), you will have the playground below with the schemas and documentation.

![playground](./assets/playground.png)

- Client

```
    cd client
    npm install
    npm run dev
```

Now the client is running on the port **5174** that provides the interface below.

![client interface](./assets/client-interface.png)

Finally you can play with that by adding or deleting users.

## Contribution

If you find an issue with this project or you have any suggestion please help out. I am not perfect.
