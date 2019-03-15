# React Apollo Cypress playground

Just a create-react-app boilerplate with Apollo Server, Apollo Client, Storybooks and Cypress based on the [https://petstore.swagger.io](petstore REST api) wrapped with .


## Configuring the dev environment

Make sure you have the latest Stable or LTS version of Node.js installed.

1. `git clone` this repo and navigate into it
2. Run `npm install` or `yarn install` the client
3. Run `cd server` and again run `npm install` or `yarn install`

3. Open [http://localhost:8080](http://localhost:8080)


## Available Commands

- `npm server-start` - starts the GraphQLs' Apollo Server on [http://localhost:4000](http://localhost:4000)
- `npm start` - starts the client app on [http://localhost:3000](http://localhost:3000)
- `npm storybook` - starts the storybook workbench on [http://localhost:9009](http://localhost:9009)

- `npm test` - runs all tests 
- `npm run test:watch` - runs all tests in jest's watch mode
- `npm run test:coverage` - generate code coverage report in the `coverage` folder, wich is also used in storybooks

- `npm run cpyress:open` - does open the cypres environment for e2e testing
- `npm run cpyress:run` - juest runs the cypres for e2e tests

- `npm build` - creates a production ready build 


Happy coding!