import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://tatarikan.stepzen.net/api/cold-gecko/__graphql',
    cache: new InMemoryCache(),
    headers:{
        Authorization:
        'apikey tatarikan::stepzen.net+1000::14f34f9ad009ada30a202396566158c1c9f5b6d50f6df047ed01df31b982b14b'
    }
  });

const RootLayout = () => {
  return (
    <ApolloProvider client={client}>
    <Stack/>
    </ApolloProvider>
  )
}

export default RootLayout

const styles = StyleSheet.create({})