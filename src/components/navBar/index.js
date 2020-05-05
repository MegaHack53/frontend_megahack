import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

export default function NavBar(props) {
  const [actualPage, setActualPage] = useState(props.page);
  const navigation = useNavigation();

  function generateButton(iconUrl, name, page) {
    if (actualPage == page) {
      return (
        <View style={styles.navBarBtn}>
          <Image style={styles.navBarIcons} source={{ uri: iconUrl }} />
          <Text style={styles.navBarLabelSelected}>{name}</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.navBarBtn}>
          <Image style={styles.navBarIcons} source={{ uri: iconUrl }} />
          <Text style={styles.navBarLabel}>{name}</Text>
        </View>
      );
    }
  }

  function navigateTo(screenName) {
    navigation.navigate(screenName);
  }

  return (
    <View style={styles.container}>
      <View style={styles.navBarSeparator} />

      <View style={styles.navBarContent}>
        <TouchableOpacity
          style={[styles.navBarItems, actualPage == 1 && styles.navBarSelected]}
          onPress={() => navigateTo("Wallet")}
        >
          {generateButton(
            "https://img.icons8.com/carbon-copy/100/000000/initiate-money-transfer.png",
            "Carteira",
            1
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.navBarItems, actualPage == 2 && styles.navBarSelected]}
          onPress={() => navigateTo("Learning")}
        >
          {generateButton(
            "https://img.icons8.com/carbon-copy/100/000000/classroom.png",
            "Aprender",
            2
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.navBarItems, actualPage == 3 && styles.navBarSelected]}
          onPress={() => navigateTo("Savings")}
        >
          {generateButton(
            "https://img.icons8.com/wired/64/000000/love-for-money.png",
            "Resumo",
            3
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.navBarItems, actualPage == 4 && styles.navBarSelected]}
          onPress={() => navigateTo("Community")}
        >
          {generateButton(
            "https://img.icons8.com/pastel-glyph/64/000000/groups.png",
            "Comunidade",
            4
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.navBarItems, actualPage == 5 && styles.navBarSelected]}
          onPress={() => navigateTo("User")}
        >
          {generateButton(
            "https://image.flaticon.com/icons/png/512/2521/2521932.png",
            "Usuário",
            5
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}
