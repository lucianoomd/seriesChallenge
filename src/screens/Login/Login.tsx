import { Container, ContainerView, Title } from './styles';
import React, { useState } from 'react';

import { Alert } from 'react-native';
import Button from '../../components/Button/Button';
import { CommonActions } from '@react-navigation/native';
import Input from '../../components/Input/Input';
import Loader from '../../components/Loader/Loader';
import LoginService from '../../services/LoginService';

const Login = ({ navigation }) => {
  const [pin, setPin] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  const changePin = (value) => setPin(value)

  const loginService = new LoginService()

  const validatePin = async () => {
    setIsLoading(true)
    const response = await loginService.validatePin(pin) // I was going to implement a feature to save pin locally, recover and change PIN
    setIsLoading(false)
    if(response.error) {
      Alert.alert('Error', response.error)
    } else if (response.data) {
      navigateToHome()
    } else {
      Alert.alert('Invalid PIN', 'Insert the correct PIN')
    }
  }

  const navigateToHome = () => (
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{ name: 'Home' }]
      })
    )
  )

  return (
    <ContainerView>
      {isLoading ? <Loader /> : null}
      <Container>
        <Title>Insert your PIN</Title>
        <Input
          text={pin}
          isPassword={true}
          changeText={changePin}
          placeholder="PIN"
          maxLength={6}
          keyboardType="numeric"
        />

        <Button onPress={validatePin} title="Login" />
      </Container>
    </ContainerView>
  )
}

export default Login;
