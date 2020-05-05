import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { View, FlatList, ScrollView, Image, Text, TouchableOpacity, SafeAreaView, Linking } from 'react-native';

import NavBar from '../../components/navBar';
import Activity from '../../components/Activity';

import { Container, Header, HeaderText, HeaderTextTotal, Card, CardContainer, CardCategory, CardPercentage, CardValue, RecentActivities, RecentActivitiesTitle, ListActivities } from './styles';

export default function Savings() {
  const [revenue, setRevenue] = useState(true);
  const [spending, setSpending] = useState(true);
  const [savings, setSavings] = useState(true);
  const [invest, setInvest] = useState(true);

  const activitiesData = [
    {
      id: 1,
      title: 'Finanças'
    },
    {
      id: 2,
      title: 'Hábitos'
    },
    {
      id: 3,
      title: 'Ferramentas'
    },
    {
      id: 4,
      title: 'Finanças'
    },
    {
      id: 5,
      title: 'Hábitos'
    },
    {
      id: 6,
      title: 'Ferramentas'
    }, {
      id: 7,
      title: 'Finanças'
    },
    {
      id: 8,
      title: 'Hábitos'
    },
    {
      id: 9,
      title: 'Ferramentas'
    }
  ]

  const [activities, setActivities] = useState(activitiesData);

  return (
    <Container>
      <Header>
        <HeaderText>Total Acumulado</HeaderText>
        <HeaderTextTotal>R$ 2032,00</HeaderTextTotal>
        <Feather name="chevrons-down" size={16} color="#305F72" />
      </Header>

      <CardContainer
        horizontal={true}
      >
        {revenue &&
          <Card background="#95BDCE">
            <CardCategory>
              Receita
              </CardCategory>
            <CardValue>
              R$ 890,00
              </CardValue>
            <CardPercentage>
              20%
              </CardPercentage>
          </Card>
        }
        {spending &&
          <Card background="#00B2FF">
            <CardCategory>
              Gastos
              </CardCategory>
            <CardValue>
              R$ 890,00
              </CardValue>
            <CardPercentage>
              20%
              </CardPercentage>
          </Card>
        }
        {savings &&
          <Card background="#7000FF">
            <CardCategory>
              Poupado
              </CardCategory>
            <CardValue>
              R$ 890,00
              </CardValue>
            <CardPercentage>
              20%
              </CardPercentage>
          </Card>
        }
        {invest &&
          <Card background="#012940">
            <CardCategory>
              Investido
              </CardCategory>
            <CardValue>
              R$ 890,00
              </CardValue>
            <CardPercentage>
              20%
              </CardPercentage>
          </Card>
        }
      </CardContainer>

      <RecentActivities>
        <RecentActivitiesTitle>Atividades Recentes</RecentActivitiesTitle>
        <ListActivities
          data={activities}
          showsVerticalScrollIndicator={false}
          vertical={true}
          keyExtractor={activity => activity.id}
          renderItem={({ item: activity }) => (
            <Activity data={activity} />

          )}

        />
      </RecentActivities>

      <View style={styles.navBar} ><NavBar page={3} /></View>
    </Container>
  );
}