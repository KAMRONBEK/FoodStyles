import React from 'react';
import AppRouter from '@technicalchallenge/navigation/app-router';
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
const cache = new InMemoryCache();

const token =
  'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjI1LCJ0eXBlIjoiQUNDRVNTIiwiaWF0IjoxNjU0MzUyNjA5LCJleHAiOjE2NTQ5NTc0MDl9.p0eYsBxf_yO5c0KyFKywrrchS9YT2jhmEPv0L6-ouEIX1EJQElIhh4JhVSa1AcwLPPaFv4jR-dwbqIlZO_7HFkRq1UepNYj2msIwCmHJo4WU2m-EBHUuqgrytzOgLxOahKRi6amqY3GpFcK2gjQHTzwRVqLYEXs55yuQb6Hj95TjwirFDQjA87TNMx2QC0wuRFRtI3ME24HPa58cl27rx-YPfT0xAb3KhFnd8Eqg1QELOEirJpPFtTPjdp7ITB6lV9PgrzXyh8nbze-tmpXbQnK5OnEpcEV8qrOWONxfhS5G1_w7zz3GsC3R6Y7huOqKdKnqg36LlbJxIgNfH4YH7g';

const authLink = setContext((_, {headers}) => {
  // get the authentication token from local storage if it exists
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token,
    },
  };
});
const httpLink = createHttpLink({
  uri: 'https://api-dev.foodstyles.com/graphql',
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
});

const App = () => {
  return (
    <>
      <ApolloProvider client={client}>
        <AppRouter />
      </ApolloProvider>
    </>
  );
};

export default App;
