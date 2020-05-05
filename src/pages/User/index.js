import React, { useState } from "react";
import {
  View,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Linking,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

import NavBar from "../../components/navBar";

import styles from "./styles";

const db = {
  name: "Renato Xavier Tavares",
  email: "renatoxaviertavares1999@gmail.com",
  img:
    "https://media-exp1.licdn.com/dms/image/C4E03AQENJFIcjXhZUw/profile-displayphoto-shrink_200_200/0?e=1593648000&v=beta&t=JzNgO6_cQ6aw_L8GjvhmpWUtJ6P3CteaAnDALHNKTwA",
};

export default function Learning() {
  const navigation = useNavigation();

  function navigateTo(screenName) {
    navigation.navigate(screenName);
  }

  function optionMaker(icon, name, navigate) {
    return (
      <View style={styles.optionsItem}>
        <TouchableOpacity
          style={styles.optionsContainer}
          onPress={() => navigateTo(navigate)}
        >
          <View style={styles.optionsIconFrame}>
            <Image style={styles.optionsIcon} source={{ uri: icon }} />
          </View>
          <Text style={styles.optionsText}>{name}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerBackground}></View>

      <View style={styles.headerContent}>
        <View style={styles.headerIcons}>
        <TouchableOpacity
          style={styles.optionsContainer}
          onPress={() => null}>
            <Feather name="log-out" size={30} color="#012940" />
          </TouchableOpacity>
          <TouchableOpacity
          style={styles.optionsContainer}
          onPress={() => navigateTo('Savings')}>
            <Feather name="x-circle" size={30} color="#012940" />
          </TouchableOpacity>
        </View>

        <View style={styles.header}>
          <Text style={styles.headerNameText}> {db.name} </Text>
          <Text style={styles.headerEmailText}> {db.email} </Text>
        </View>

        <View style={styles.headerPicture}>
          <Image style={styles.headerUserImg} source={{ uri: db.img }} />
        </View>
      </View>

      <View style={styles.userOptions}>
        {optionMaker(
          "https://img.icons8.com/ios/50/000000/prize.png",
          "Ranking",
          "Ranking"
        )}
        {optionMaker(
          "https://img.icons8.com/ios/50/000000/ask-question.png",
          "Quiz",
          "Quiz"
        )}
        {optionMaker(
          "https://img.icons8.com/small/50/000000/conflict.png",
          "Desafios",
          "Challenges"
        )}
        {optionMaker(
          "https://img.icons8.com/ios/50/000000/contacts.png",
          "Dados do Usuário",
          "UserData"
        )}
        {optionMaker(
          "https://img.icons8.com/ios/100/000000/settings.png",
          "Preferências",
          "Preferences"
        )}
      </View>

      <View style={styles.navBar}>
        <NavBar page={5} />
      </View>
    </View>
  );
}
