import React, { useState } from 'react'
import { View, FlatList, Image, Text, TouchableOpacity, SafeAreaView, Linking  } from 'react-native'


import styles from './styles'


export default function NavBar(props) {
  const [actualPage, setActualPage] = useState(props.page)


  function generateButton(iconUrl, name) {
    
    return <View style={styles.navBarBtn}>
        <Image style={[styles.navBarIcons, actualPage == 1 && styles.navBarIconsSelected]} source={{uri: iconUrl }}/>
        <Text style={[styles.navBarLabel, actualPage == 1 && styles.navBarLabelSelected]}>{name}</Text>
    </View>
  }

  return (
    <View style={styles.container}>

      <View style={styles.navBarSeparator} />

      <View style={styles.navBarContent}>

        

          <View style={[styles.navBarItems, actualPage == 1 && styles.navBarSelected]}>
            {generateButton('https://img.icons8.com/carbon-copy/100/000000/economic-improvement.png', 'teste', 1)}
          </View>

          <View style={[styles.navBarItems, actualPage == 2 && styles.navBarSelected]}>
            {generateButton('https://img.icons8.com/carbon-copy/100/000000/classroom.png', 'Aprender', 2)}
          </View>

          <View style={[styles.navBarItems, actualPage == 3 && styles.navBarSelected]}>
            {generateButton('https://img.icons8.com/carbon-copy/100/000000/economic-improvement.png', 'teste', 3)}
          </View>

          <View style={[styles.navBarItems, actualPage == 4 && styles.navBarSelected]}>
            {generateButton('https://img.icons8.com/carbon-copy/100/000000/economic-improvement.png', 'teste', 4)}
          </View>

          <View style={[styles.navBarItems, actualPage == 5 && styles.navBarSelected]}>
            {generateButton('https://img.icons8.com/carbon-copy/100/000000/economic-improvement.png', 'teste')}
          </View>

         
      </View>
         

    </View>

  )
}