# NodeJS GraphQL Project

This is a simple sign-in/sign-up GraphQL API using NodeJS with the following stack: Express, TypeScript, GraphQL, Apollo Server Express, Prisma, and Zod.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following software installed on your machine:

- NodeJS
- NPM (Node Package Manager)

### Installation

1. Clone the repository:

   ```bash
    git clone https://github.com/aribroo/nodejs-graphql.git
   ```

2. Navigate into the project directory:
    ```bash
    cd nodejs-graphql
    ```
3. Install dependencies:
    ```bash
    npm install
    ```

### Configuration

1. Create a .env file in the root directory based on the provided .env.example file.
2. Update the environment variables in the .env file as per your configuration.

### Database Setup

1. Ensure that you have a MySQL database running on your local machine or remote server.

2. Update the database connection URL in the .env file.

3. Run Prisma migrations to create database tables:
    ```bash
    npx prisma migrate dev --name init
    ```
### Running the Server
Start the development server:
  ```bash
  npm run dev
  ```
The GraphQL server will start running on http://localhost:3000/graphql.

### Compile TypeScript to JavaScript

To build the TypeScript code and copy it to the `dist` folder, you can run the following command:

```bash
npm run build
```

Start the server:
  ```bash
  npm run start
  ```

## Built With
- [Express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js.
- [GraphQL](https://graphql.org/) - Query language for APIs.
- [Apollo Server Express](https://www.apollographql.com/docs/apollo-server/) - GraphQL server for Express.js.
- [Prisma](https://www.prisma.io/) - Database toolkit for TypeScript and Node.js.
- [Zod](https://github.com/colinhacks/zod) - TypeScript-first schema declaration and validation library.
