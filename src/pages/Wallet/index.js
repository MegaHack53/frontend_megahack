import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Keyboard,
} from "react-native";
import { Dropdown } from "react-native-material-dropdown";
import ProgressCircle from "react-native-progress-circle";

import NavBar from "../../components/navBar";
import styles from "./styles";

import api from "../../services/api";

// import { Dimensions } from "react-native";
// const screenWidth = Dimensions.get("window").width;

const transacoes = {
  transactions: [
    {
      id: "5eb0406184365d002198305f",
      category: "mall",
      description: "Clothes",
      value: 230,
      type: "outcome",
      createdAt: "2020-05-04T16:18:41.889Z",
    },
    {
      id: "5eb0406d84365d0021983060",
      category: "job",
      description: "Bonus",
      value: 450,
      type: "income",
      createdAt: "2020-05-04T16:18:53.927Z",
    },
    {
      id: "5eb0407c84365d0021983061",
      category: "food",
      description: "using delivery service",
      value: 500,
      type: "outcome",
      createdAt: "2020-05-04T16:19:08.090Z",
    },
    {
      id: "5eb0408684365d0021983062",
      category: "transport",
      description: "Bus",
      value: 50,
      type: "outcome",
      createdAt: "2020-05-04T16:19:18.084Z",
    },
    {
      id: "5eb0409484365d0021983063",
      category: "food",
      description: "using delivery service",
      value: 500,
      type: "outcome",
      createdAt: "2020-05-04T16:19:32.600Z",
    },
  ],
  balance: {
    income: 450,
    outcome: 1280,
    total: -830,
  },
};

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
  const [keyboard, setKeyboard] = useState(false);

  const [collapseHeight] = useState(350);
  const [inputCollapse, setInputCollapse] = useState(false);
  const [expensesCollapse, setExpensesCollapse] = useState(false);
  const [dropdown, setDropDown] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");

  const [loading, setLoading] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoriesValues, setCategoriesValues] = useState([]);
  const [outcomeTotal, setOutcomeTotal] = useState(0);

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

  async function loadData() {
    if (loading) {
      return;
    }

    setLoading(true);

    const response = await api.get(`/transactions`).catch(function (error) {
      console.log(
        "There has been a problem with your get operation: " + error.message
      );
      // throw error;
    });
    setTransactions([...response.data]);
    setOutcomeTotal([...response.data.balance.income]);

    const responseCat = await api
      .get(`/transactions/categories`)
      .catch(function (error) {
        console.log(
          "There has been a problem with your get operation: " + error.message
        );
        // throw error;
      });
    setCategories([...responseCat.data]);

    const responseCatOne = await api
      .get(`/transactions/mall`)
      .catch(function (error) {
        console.log(
          "There has been a problem with your get operation: " + error.message
        );
        // throw error;
      });
    const responseCatTwo = await api
      .get(`/transactions/food`)
      .catch(function (error) {
        console.log(
          "There has been a problem with your get operation: " + error.message
        );
        // throw error;
      });
    const responseCatThree = await api
      .get(`/transactions/transport`)
      .catch(function (error) {
        console.log(
          "There has been a problem with your get operation: " + error.message
        );
        // throw error;
      });

    setCategoriesValues([
      [...responseCatOne.data.balance.income],
      [...responseCatTwo.data.balance.income],
      [...responseCatThree.data.balance.income],
    ]);
    setLoading(false);
  }

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboard(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboard(false);
      }
    );

    loadData();

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

      <View
        style={[
          styles.incomeCollapse,
          !inputCollapse ? { height: 80 } : { height: collapseHeight },
        ]}
      >
        <View style={styles.incomeContainer}>
          <TouchableOpacity
            style={styles.walletBtn}
            onPress={() => {
              setInputCollapse(!inputCollapse);
              if (expensesCollapse) setExpensesCollapse(!expensesCollapse);
              setDescription("");
              setValue("");
            }}
          >
            <Text style={styles.walletText}>Receita</Text>
            <Text style={styles.walletText}>+</Text>
          </TouchableOpacity>
        </View>
        <View
          style={[styles.inputs, !inputCollapse ? { display: "none" } : {}]}
        >
          <Dropdown
            label="Categoria"
            data={categories}
            onChangeText={(value) => setDropDown(value)}
          />
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => setDescription(text.toString())}
            value={description}
            placeholder="Descrição"
            placeholderTextColor="#999"
          />
          <TextInput
            style={styles.textInput}
            onChangeText={(number) => setValue(number.toString())}
            value={value.toString()}
            placeholder="Valor"
            placeholderTextColor="#999"
            keyboardType={"numeric"}
          />
          <View style={styles.inputButtonFrame}>
            <TouchableOpacity
              style={styles.inputButton}
              onPress={() => {
                api.post("/transactions", {
                  category: dropdown,
                  description: description,
                  value: value,
                  type: "income",
                });
                setInputCollapse(false);
                setExpensesCollapse(false);
                setDescription("");
                setValue("");
              }}
            >
              <Text style={styles.inputButtonText}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View
        style={[
          styles.expensesCollapse,
          !expensesCollapse ? { height: 80 } : { height: collapseHeight },
        ]}
      >
        <View style={styles.expensesContainer}>
          <TouchableOpacity
            style={styles.walletBtn}
            onPress={() => {
              if (inputCollapse) setInputCollapse(!inputCollapse);
              setExpensesCollapse(!expensesCollapse);
              setDescription("");
              setValue("");
            }}
          >
            <Text style={styles.walletText}>Despesa</Text>
            <Text style={styles.walletText}>+</Text>
          </TouchableOpacity>
        </View>
        <View
          style={[styles.inputs, !expensesCollapse ? { display: "none" } : {}]}
        >
          <Dropdown
            label="Categoria"
            data={categories}
            onChangeText={(value) => setDropDown(value)}
          />
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => setDescription(text.toString())}
            value={description}
            placeholder="Descrição"
            placeholderTextColor="#999"
          />
          <TextInput
            style={styles.textInput}
            onChangeText={(number) => setValue(number.toString())}
            value={value.toString()}
            placeholder="Valor"
            placeholderTextColor="#999"
            keyboardType={"numeric"}
          />
          <View style={styles.inputButtonFrame}>
            <TouchableOpacity
              style={styles.inputButton}
              onPress={() => {
                api.post("/transactions", {
                  category: dropdown,
                  description: description,
                  value: value,
                  type: "outcome",
                });
                setInputCollapse(false);
                setExpensesCollapse(false);
                setDescription("");
                setValue("");
              }}
            >
              <Text style={styles.inputButtonText}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={[styles.categoryCharts, keyboard && { display: "none" }]}>
        <Text style={styles.chartTitle}>Gastos por Categoria</Text>

        <View style={styles.chartsContainer}>
          {makeChart(Math.round((1807.4 / 3500) * 100), "Shopping", "#6a3093")}

          {makeChart(
            Math.round((1000.1 / 3500) * 100),
            "Alimentação",
            "#c02425"
          )}
          {makeChart(Math.round((200.1 / 3500) * 100), "Transporte", "#ffb75e")}
        </View>
      </View>

      <View style={[keyboard ? { display: "none" } : styles.navBar]}>
        <NavBar page={1} />
      </View>
    </View>
  );
}
