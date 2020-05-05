import React from 'react';
import { View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { Container, Title, TitleContent, TitleText, TitleTimeStamp, Value, ValueText } from './styles';

export default function Activity({ data }) {
  return (
    <Container>
      <Title>
        <Feather name="arrow-up-right" size={16} />
        <TitleContent>
          <TitleText>Clothes</TitleText>
          <TitleTimeStamp>Hoje às 13h55</TitleTimeStamp>
        </TitleContent>
      </Title>
      <Value>
        <Feather name="plus" size={16} />
        <ValueText>R$ 183,90</ValueText>
      </Value>
    </Container>
  );
}