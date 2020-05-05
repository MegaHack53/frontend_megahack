import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Linking,
} from "react-native";

import NavBar from "../../components/navBar";

import styles from "./styles";

import api from "../../services/api";

const Tabs = [
  {
    id: 1,
    title: "Finanças",
  },
  {
    id: 2,
    title: "Hábitos",
  },
  {
    id: 3,
    title: "Ferramentas",
  },
];

export default function Learning() {
  const [actualTab, setActualTab] = useState("Finanças");
  const [db, setDb] = useState(investDb);
  const [loading, setLoading] = useState(false);
  const [investDb, setInvestDb] = useState([]);
  const [habitsDb, setHabitsDb] = useState([]);
  const [toolsDb, setToolsDb] = useState([]);

  async function loadCards() {
    if (loading) {
      return;
    }

    setLoading(true);

    const responseInvest = await api.get(`/cards/invest`);
    setInvestDb([...responseInvest.data]);
    setDb([...responseInvest.data]);

    const responseHabits = await api.get(`/cards/habits`);
    setHabitsDb([...responseHabits.data]);

    const responseTools = await api.get(`/cards/tools`);
    setToolsDb([...responseTools.data]);

    setLoading(false);
  }

  useEffect(() => {
    loadCards();
  }, []);

  function changeTab(tab) {
    switch (tab) {
      case Tabs[1].title:
        setActualTab(Tabs[1].title);
        setDb(habitsDb);
        break;
      case Tabs[2].title:
        setActualTab(Tabs[2].title);
        setDb(toolsDb);
        break;
      default:
        setActualTab(Tabs[0].title);
        setDb(investDb);
    }
  }

  function showIcon(card) {
    if (card.icon) {
      return <Image style={styles.carIcon} source={{ uri: card.icon }} />;
    } else {
      return <Text style={styles.cardDescription}>{card.description}</Text>;
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Pílulas de Conhecimento</Text>
      </View>

      <SafeAreaView style={styles.tabsContainer}>
        <FlatList
          style={styles.tabsContent}
          horizontal={true}
          data={Tabs}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "space-between",
          }}
          renderItem={({ item: tabs }) => (
            <TouchableOpacity
              style={styles.tabsBtn}
              onPress={() => {
                changeTab(tabs.title);
              }}
            >
              <Text
                style={[
                  styles.tabsBtnText,
                  actualTab == tabs.title && styles.tabsBtnTextSelected,
                ]}
              >
                {tabs.title}
              </Text>
            </TouchableOpacity>
          )}
        />
      </SafeAreaView>

      <SafeAreaView style={styles.cardsContainer}>
        <FlatList
          style={styles.cardsList}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToAlignment={"center"}
          snapToInterval={405}
          decelerationRate={"normal"}
          pagingEnabled
          keyExtractor={(item) => item.id.toString()}
          data={db}
          extraData={actualTab}
          renderItem={({ item: card }) => (
            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Text style={styles.cardAuthor}>{card.author}</Text>
                <Text style={styles.cardReadTime}>{card.readtime}</Text>
              </View>

              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>{card.title}</Text>
                {showIcon(card)}
              </View>

              <TouchableOpacity
                style={styles.accessCard}
                onPress={() => Linking.openURL(card.url)}
              >
                <Text style={styles.accessCardText}>Acessar</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </SafeAreaView>

      <View style={styles.navBar}>
        <NavBar page={2} />
      </View>
    </View>
  );
}
