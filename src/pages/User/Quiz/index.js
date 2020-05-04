import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  Button,
} from "react-native";

import NavBar from "../../../components/navBar";

import styles from "./styles";

export default function Learning() {
  
  return (
    <View style={styles.container}>
      <View style={styles.presentationCard}>
        {/* <Image style={styles.presentationImg} source={require('../../../assets/images/Groupquiz.png')} />
        <Text style={styles.presentationText} >Teste seus conhecimentos com perguntas relacionadas à finanças</Text>
        <TouchableOpacity style={styles.presentationBtn} onPress={() => null}>
          <Text style={styles.presentationBtnText} > Iniciar </Text>
        </TouchableOpacity> */}
      </View>

      <View style={styles.navBar}><NavBar page={5} /></View>
    </View>
  );
}
