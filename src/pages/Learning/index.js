import React, { useState, useEffect } from 'react'
import { View, FlatList, Image, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import Constants from 'expo-constants';


import styles from './styles'

const Tabs = [
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
    }
]

const DataBase = [
    // CardsInvest
    [
            {
                id: 1,
                author: 'PAULO AMORIM',
                readtime: '7 min',
                title: 'Se você AINDA tem dinheiro na poupança, precisa saber isto',
                description: 'Uma dúvida ainda muito comum entre os brasileiros, principalmente em momentos de crise, é se vale a pena...',
                url: 'https://fdr.com.br/2020/03/29/poupanca-ainda-e-um-bom-investimento-entenda-aqui/'
            },
            {
                id: 2,
                author: 'INFOMONEY',
                readtime: '10 min',
                title: 'O que é CDI e como afeta os investimentos',
                description: 'Entre as inúmeras siglas que rondam o mercado financeiro, o CDI está entre as mais famosas. E como há outras muito parecidas com ela...',
                url: 'https://www.infomoney.com.br/guias/cdi/'
            },
            {
                id: 3,
                author: 'THIAGO NIGRO',
                readtime: '8 min',
                title: 'Como Ganhar Dinheiro Investindo 100 Reais Todo Mês',
                description: 'Você sabia que é possível ganhar dinheiro investindo R$ 100 todos os meses? Ao mesmo tempo, conseguir ganhar dinheiro investindo ...',
                url: 'https://blog.rico.com.vc/ganhar-dinheiro-investindo-100-reais'
            }
    ]
    ,
    // CardsHabits
    [
        {
            id: 1,
            author: 'Conrado Navarro',
            readtime: '6 min',
            title: 'Educação financeira: acorde agora e conquiste sua liberdade',
            description: 'Educação financeira é sinônimo de liberdade, realização de sonhos e amor. Planilha e guardar dinheiro...',
            url: 'https://dinheirama.com/educacao-financeira-acorde-conquiste-liberdade/'
        },
        {
            id: 2,
            author: 'CONRADO NAVARRO',
            readtime: '9 min',
            title: '5 Hábitos financeiros para mudar sua vida',
            description: 'Hábitos financeiros são muitas vezes difícies de alcançar. Separamos 5 hábitos práticos e que farão toda a diferença para mudar sua vida...',
            url: 'https://dinheirama.com/5-habitos-financeiros-mudar-vida/'
        },
        {
            id: 3,
            author: 'Cristina Pizarro',
            readtime: '12 min',
            title: 'Pandemia, consumo e trabalho: a realidade já mudou! E você?',
            description: 'A realidade já mudou com a pandemia do coronavírus e todas as transformações que isso causou (e ainda vai causar). E você...',
            url: 'https://dinheirama.com/pandemia-consumo-e-trabalho-a-realidade-ja-mudou-e-voce/'
        }],
    // CardsTools
    [
        {
            id: 1,
            author: 'MEUS DIVIDENDOS',
            title: 'Cálculo de Dividendos',
            icon: 'https://image.flaticon.com/icons/svg/584/584093.svg',
            url: 'http://mepoupenaweb.uol.com.br/simuladores-online-de-investimentos/simulador-de-investimento/Mixed'
        },
        {
            id: 2,
            author: 'MELHOR CÂMBIO',
            title: 'Conversor de Moedas',
            icon: 'https://image.flaticon.com/icons/svg/631/631180.svg',
            url: 'https://www.melhorcambio.com/conversor-de-moeda'
        },
        {
            id: 3,
            author: 'ME POUPE',
            title: 'Simulador de CDB e Letras de Crédito',
            icon: 'https://image.flaticon.com/icons/svg/584/584074.svg',
            url: 'http://mepoupenaweb.uol.com.br/simuladores-online-de-investimentos/simulador-de-investimento/'
        }],
]


export default function Incidents() {

    let actualTab = 'Finanças'
    let db = DataBase[0]

    function changeTab(tab) {
        switch (tab) {
            case Tabs[1].title :
                actualTab = Tabs[1].title 
                db = DataBase[1]
                break;
            case Tabs[2].title :
                actualTab = Tabs[2].title 
                db = DataBase[2]
                break;  
            default:
                actualTab = Tabs[0].title 
                db = DataBase[0]
        }            
    }

    return (
        <View style={styles.container}>
             <View style={styles.header}>
                <Text style={styles.headerText}>
                    Pílulas de Conhecimento
                </Text>
            </View>

            <SafeAreaView style= {styles.tabsContainer}>                
                <FlatList
                    style = {styles.tabsContent}
                    horizontal
                    data={Tabs}
                    keyExtractor={item => item.id.toString()}
                    contentContainerStyle={
                        {flexGrow: 1, justifyContent: 'space-between'}}
                    renderItem={({ item:tabs }) => (
                            <TouchableOpacity 
                                style={styles.tabsBtn} 
                                onPress={() => changeTab(tabs.title) } 
                            >
                                <Text style={styles.tabsBtnText}>
                                    { tabs.title }
                                </Text>
                            </TouchableOpacity>
                        )}
                />
            </SafeAreaView>

            <SafeAreaView style={styles.cardsContainer}>
            <FlatList
                    style = {styles.cardsList}
                    horizontal
                    data={db}
                    keyExtractor={item => item.id.toString()}
                    // contentContainerStyle={{flexGrow: 0, justifyContent: 'space-between'}}
                    renderItem={({ item:card }) => (
                            <View style={styles.card}>

                                <View style={styles.cardHeader}>
                                    <Text style={styles.cardAuthor}>{card.author}</Text>
                                    <Text style={styles.cardReadTime}>{card.readtime}</Text>
                                </View>                               

                                <View style={styles.cardContent}>
                                    <Text style={styles.cardTitle}>{card.title}</Text>
                                    <Text style={styles.cardDescription}>{card.description}</Text>
                                </View>
                                

                                <TouchableOpacity style={styles.accessCard}>
                                    <Text style={styles.accessCardText}>Acessar</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                />
            </SafeAreaView>

        </View>
    )
}

