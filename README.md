# movie-db-search
A React UI to search The Movie DB.
Built using Parcel, React and Typescript.

## Prerequisites to run the code
```
node
yarn
```

## Generate an API_KEY
This code base makes use of a .env file - this file contains the API_KEY required to make API requests.
In order to run the app and successfully make API requests to The Movie DB, you will need to generate an API_KEY by following the steps outlined [here](https://developers.themoviedb.org/3/getting-started/introduction) and place the following into a `.env` file at the root directory.

```
API_KEY=00000000000000000000000000000000
```

## Installation
Install dependencies
```
yarn
```

## Running the app locally
```
yarn start
```

The application will be served on localhost:1234

## Running tests and linting
```
yarn test
yarn lint
```

## Building the application
```
yarn build
```

Creates a minified and uglified production ready bundle, located in the dist directory.

