import EpisodeDetails from '../screens/EpisodeDetails/EpisodeDetails';
import { FavoriteContainer } from './styles';
import Home from '../screens/Home/Home';
import Icon from '../components/Icon/Icon';
import Login from '../screens/Login/Login';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import SerieDetails from '../screens/SerieDetails/SerieDetails';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Rotas = (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTintColor: '#FFF',
        headerStyle: {
          backgroundColor: '#444',
          borderBottomWidth: 1,
          borderBottomColor: '#FFF'
        },
        headerTitleStyle: {
          color: '#fff',
        },
        
      }}
    >
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Serie Details" component={SerieDetails} options={({ route }) => ({
          title: route.params.title,
          headerRight: () => (
            <FavoriteContainer onPress={route.params.handleFavorite}>
              <Icon name="star-outline" color="#FFF" />
            </FavoriteContainer>
          )
        })}
      />
      <Stack.Screen name="Episode Details" component={EpisodeDetails} options={({ route }) => ({
          title: route.params.title
        })}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Rotas;