import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  TextInput,
  Keyboard,
  
} from "react-native";
import { Dropdown } from "react-native-material-dropdown";
import ProgressCircle from "react-native-progress-circle";

import NavBar from "../../components/navBar";
import styles from "./styles";

import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;


const category = {
  catOne: {
    progress: 40,
    label: "Alimentação",
  },
  catTwo: {
    progress: 30,
    label: "Lazer",
  },
  catThree: {
    progress: 10,
    label: "Transporte",
  },
};

const categories = [
  {
    value: "Banana",
  },
  {
    value: "Mango",
  },
  {
    value: "Pear",
  },
];

function makeChart(data, label, color = "rgb(134, 65, 244)") {
  return (
    <View style={styles.category}>
      <ProgressCircle percent={data} radius={50} borderWidth={8} color={color}>
        <Text style={styles.chartLabel}>{data}%</Text>
      </ProgressCircle>
      <Text style={styles.chartText}>{label}</Text>
    </View>
  );
}


export default function Wallet() {
  const [expanded, setExpanded] = useState(false);
  const [inputCollapse, setInputCollapse] = useState(false);
  const [expensesCollapse, setExpensesCollapse] = useState(false);
  const [keyboard, setKeyboard] = useState(false);
  const [description, setDescription] = useState('');
  const [value, setValue] = useState(0);
  const [collapseHeight, setCollapseHeight] = useState(350)


  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboard(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboard(false);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Carteira</Text>
      </View>

      <View style={[styles.incomeCollapse, !inputCollapse ? { height: 50 } : {height: collapseHeight}]}>
        <View style={styles.incomeContainer}>
          <TouchableOpacity style={styles.walletBtn} onPress={() => {
            setInputCollapse(!inputCollapse); 
            if(expensesCollapse)setExpensesCollapse(!expensesCollapse)}}>
            <Text style={styles.walletText}>Receita</Text>
            <Text style={styles.walletText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.inputs, !inputCollapse ? { display: 'none'}: {}]} >
          <Dropdown label="Categoria" data={categories} />
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => setDescription(text)}
            value={description} placeholder='Descrição' 
            placeholderTextColor='#999'
          />
          <TextInput
            style={styles.textInput}
            onChangeText={(number) => setValue(number)}
            value={value} placeholder='Valor' 
            placeholderTextColor='#999'
            keyboardType={'numeric'}
            
          />
          <View style={styles.inputButtonFrame}>
            <TouchableOpacity style={styles.inputButton} onPress={() => null}>
              <Text style={styles.inputButtonText}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={[styles.expensesCollapse, !expensesCollapse ? { height: 50 } : {height: collapseHeight}]}>
        <View style={styles.expensesContainer}>
          <TouchableOpacity style={styles.walletBtn} onPress={() => {
            if(inputCollapse) setInputCollapse(!inputCollapse); 
            setExpensesCollapse(!expensesCollapse)}}>
            <Text style={styles.walletText}>Receita</Text>
            <Text style={styles.walletText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.inputs, !expensesCollapse ? { display: 'none'}: {}]} >
          <Dropdown label="Categoria" data={categories} />
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => setDescription(text)}
            value={description} placeholder='Descrição' 
            placeholderTextColor='#999'
          />
          <TextInput
            style={styles.textInput}
            onChangeText={(number) => setValue(number)}
            value={value} placeholder='Valor' 
            placeholderTextColor='#999'
            keyboardType={'numeric'}
            
          />
          <View style={styles.inputButtonFrame}>
            <TouchableOpacity style={styles.inputButton} onPress={() => null}>
              <Text style={styles.inputButtonText}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={[styles.categoryCharts, keyboard && { display: "none" }]}>
        <Text style={styles.chartTitle}>Gastos por Categoria</Text>

        <View style={styles.chartsContainer}>
          {makeChart(
            category.catOne.progress,
            category.catOne.label,
            "#6a3093"
          )}

          {makeChart(
            category.catTwo.progress,
            category.catTwo.label,
            "#c02425"
          )}
          {makeChart(
            category.catThree.progress,
            category.catThree.label,
            "#ffb75e"
          )}
        </View>
      </View>

      <View style={[keyboard ?  { display: 'none' } : styles.navBar]}>
        <NavBar page={1} />
      </View>
    </View>
  );
}
