import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";

import NavBar from "../../components/navBar";

import styles from "./styles";

export default function Learning() {
  
  return (
    <View style={styles.container}>
      <View style={styles.navBar}><NavBar page={4} /></View>
    </View>
  );
}
