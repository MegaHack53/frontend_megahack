import React, { useState } from 'react'
import { View, FlatList, Image, Text, TouchableOpacity, SafeAreaView, Linking  } from 'react-native'

import NavBar from '../../components/navBar'

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
            },
            {
                id: 4,
                author: 'PAULO AMORIM',
                readtime: '7 min',
                title: 'Se você AINDA tem dinheiro na poupança, precisa saber isto',
                description: 'Uma dúvida ainda muito comum entre os brasileiros, principalmente em momentos de crise, é se vale a pena...',
                url: 'https://fdr.com.br/2020/03/29/poupanca-ainda-e-um-bom-investimento-entenda-aqui/'
            },
            {
                id: 5,
                author: 'INFOMONEY',
                readtime: '10 min',
                title: 'O que é CDI e como afeta os investimentos',
                description: 'Entre as inúmeras siglas que rondam o mercado financeiro, o CDI está entre as mais famosas. E como há outras muito parecidas com ela...',
                url: 'https://www.infomoney.com.br/guias/cdi/'
            },
            {
                id: 6,
                author: 'THIAGO NIGRO',
                readtime: '8 min',
                title: 'Como Ganhar Dinheiro Investindo 100 Reais Todo Mês',
                description: 'Você sabia que é possível ganhar dinheiro investindo R$ 100 todos os meses? Ao mesmo tempo, conseguir ganhar dinheiro investindo ...',
                url: 'https://blog.rico.com.vc/ganhar-dinheiro-investindo-100-reais'
            },
            {
                id: 7,
                author: 'PAULO AMORIM',
                readtime: '7 min',
                title: 'Se você AINDA tem dinheiro na poupança, precisa saber isto',
                description: 'Uma dúvida ainda muito comum entre os brasileiros, principalmente em momentos de crise, é se vale a pena...',
                url: 'https://fdr.com.br/2020/03/29/poupanca-ainda-e-um-bom-investimento-entenda-aqui/'
            },
            {
                id: 8,
                author: 'INFOMONEY',
                readtime: '10 min',
                title: 'O que é CDI e como afeta os investimentos',
                description: 'Entre as inúmeras siglas que rondam o mercado financeiro, o CDI está entre as mais famosas. E como há outras muito parecidas com ela...',
                url: 'https://www.infomoney.com.br/guias/cdi/'
            },
            {
                id: 9,
                author: 'THIAGO NIGRO',
                readtime: '8 min',
                title: 'Como Ganhar Dinheiro Investindo 100 Reais Todo Mês',
                description: 'Você sabia que é possível ganhar dinheiro investindo R$ 100 todos os meses? Ao mesmo tempo, conseguir ganhar dinheiro investindo ...',
                url: 'https://blog.rico.com.vc/ganhar-dinheiro-investindo-100-reais'
            },
            {
                id: 10,
                author: 'PAULO AMORIM',
                readtime: '7 min',
                title: 'Se você AINDA tem dinheiro na poupança, precisa saber isto',
                description: 'Uma dúvida ainda muito comum entre os brasileiros, principalmente em momentos de crise, é se vale a pena...',
                url: 'https://fdr.com.br/2020/03/29/poupanca-ainda-e-um-bom-investimento-entenda-aqui/'
            },
            {
                id:11,
                author: 'INFOMONEY',
                readtime: '10 min',
                title: 'O que é CDI e como afeta os investimentos',
                description: 'Entre as inúmeras siglas que rondam o mercado financeiro, o CDI está entre as mais famosas. E como há outras muito parecidas com ela...',
                url: 'https://www.infomoney.com.br/guias/cdi/'
            },
            {
                id: 12,
                author: 'THIAGO NIGRO',
                readtime: '8 min',
                title: 'Como Ganhar Dinheiro Investindo 100 Reais Todo Mês',
                description: 'Você sabia que é possível ganhar dinheiro investindo R$ 100 todos os meses? Ao mesmo tempo, conseguir ganhar dinheiro investindo ...',
                url: 'https://blog.rico.com.vc/ganhar-dinheiro-investindo-100-reais'
            },
            {
                id: 13,
                author: 'PAULO AMORIM',
                readtime: '7 min',
                title: 'Se você AINDA tem dinheiro na poupança, precisa saber isto',
                description: 'Uma dúvida ainda muito comum entre os brasileiros, principalmente em momentos de crise, é se vale a pena...',
                url: 'https://fdr.com.br/2020/03/29/poupanca-ainda-e-um-bom-investimento-entenda-aqui/'
            },
            {
                id: 14,
                author: 'INFOMONEY',
                readtime: '10 min',
                title: 'O que é CDI e como afeta os investimentos',
                description: 'Entre as inúmeras siglas que rondam o mercado financeiro, o CDI está entre as mais famosas. E como há outras muito parecidas com ela...',
                url: 'https://www.infomoney.com.br/guias/cdi/'
            },
            {
                id: 15,
                author: 'THIAGO NIGRO',
                readtime: '8 min',
                title: 'Como Ganhar Dinheiro Investindo 100 Reais Todo Mês',
                description: 'Você sabia que é possível ganhar dinheiro investindo R$ 100 todos os meses? Ao mesmo tempo, conseguir ganhar dinheiro investindo ...',
                url: 'https://blog.rico.com.vc/ganhar-dinheiro-investindo-100-reais'
            },
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
        },
        {
            id: 4,
            author: 'Conrado Navarro',
            readtime: '6 min',
            title: 'Educação financeira: acorde agora e conquiste sua liberdade',
            description: 'Educação financeira é sinônimo de liberdade, realização de sonhos e amor. Planilha e guardar dinheiro...',
            url: 'https://dinheirama.com/educacao-financeira-acorde-conquiste-liberdade/'
        },
        {
            id: 5,
            author: 'CONRADO NAVARRO',
            readtime: '9 min',
            title: '5 Hábitos financeiros para mudar sua vida',
            description: 'Hábitos financeiros são muitas vezes difícies de alcançar. Separamos 5 hábitos práticos e que farão toda a diferença para mudar sua vida...',
            url: 'https://dinheirama.com/5-habitos-financeiros-mudar-vida/'
        },
        {
            id: 6,
            author: 'Cristina Pizarro',
            readtime: '12 min',
            title: 'Pandemia, consumo e trabalho: a realidade já mudou! E você?',
            description: 'A realidade já mudou com a pandemia do coronavírus e todas as transformações que isso causou (e ainda vai causar). E você...',
            url: 'https://dinheirama.com/pandemia-consumo-e-trabalho-a-realidade-ja-mudou-e-voce/'
        }, {
            id: 7,
            author: 'Conrado Navarro',
            readtime: '6 min',
            title: 'Educação financeira: acorde agora e conquiste sua liberdade',
            description: 'Educação financeira é sinônimo de liberdade, realização de sonhos e amor. Planilha e guardar dinheiro...',
            url: 'https://dinheirama.com/educacao-financeira-acorde-conquiste-liberdade/'
        },
        {
            id: 8,
            author: 'CONRADO NAVARRO',
            readtime: '9 min',
            title: '5 Hábitos financeiros para mudar sua vida',
            description: 'Hábitos financeiros são muitas vezes difícies de alcançar. Separamos 5 hábitos práticos e que farão toda a diferença para mudar sua vida...',
            url: 'https://dinheirama.com/5-habitos-financeiros-mudar-vida/'
        },
        {
            id: 9,
            author: 'Cristina Pizarro',
            readtime: '12 min',
            title: 'Pandemia, consumo e trabalho: a realidade já mudou! E você?',
            description: 'A realidade já mudou com a pandemia do coronavírus e todas as transformações que isso causou (e ainda vai causar). E você...',
            url: 'https://dinheirama.com/pandemia-consumo-e-trabalho-a-realidade-ja-mudou-e-voce/'
        }, {
            id: 10,
            author: 'Conrado Navarro',
            readtime: '6 min',
            title: 'Educação financeira: acorde agora e conquiste sua liberdade',
            description: 'Educação financeira é sinônimo de liberdade, realização de sonhos e amor. Planilha e guardar dinheiro...',
            url: 'https://dinheirama.com/educacao-financeira-acorde-conquiste-liberdade/'
        },
        {
            id: 11,
            author: 'CONRADO NAVARRO',
            readtime: '9 min',
            title: '5 Hábitos financeiros para mudar sua vida',
            description: 'Hábitos financeiros são muitas vezes difícies de alcançar. Separamos 5 hábitos práticos e que farão toda a diferença para mudar sua vida...',
            url: 'https://dinheirama.com/5-habitos-financeiros-mudar-vida/'
        },
        {
            id: 12,
            author: 'Cristina Pizarro',
            readtime: '12 min',
            title: 'Pandemia, consumo e trabalho: a realidade já mudou! E você?',
            description: 'A realidade já mudou com a pandemia do coronavírus e todas as transformações que isso causou (e ainda vai causar). E você...',
            url: 'https://dinheirama.com/pandemia-consumo-e-trabalho-a-realidade-ja-mudou-e-voce/'
        }, {
            id: 13,
            author: 'Conrado Navarro',
            readtime: '6 min',
            title: 'Educação financeira: acorde agora e conquiste sua liberdade',
            description: 'Educação financeira é sinônimo de liberdade, realização de sonhos e amor. Planilha e guardar dinheiro...',
            url: 'https://dinheirama.com/educacao-financeira-acorde-conquiste-liberdade/'
        },
        {
            id: 14,
            author: 'CONRADO NAVARRO',
            readtime: '9 min',
            title: '5 Hábitos financeiros para mudar sua vida',
            description: 'Hábitos financeiros são muitas vezes difícies de alcançar. Separamos 5 hábitos práticos e que farão toda a diferença para mudar sua vida...',
            url: 'https://dinheirama.com/5-habitos-financeiros-mudar-vida/'
        },
        {
            id: 15,
            author: 'Cristina Pizarro',
            readtime: '12 min',
            title: 'Pandemia, consumo e trabalho: a realidade já mudou! E você?',
            description: 'A realidade já mudou com a pandemia do coronavírus e todas as transformações que isso causou (e ainda vai causar). E você...',
            url: 'https://dinheirama.com/pandemia-consumo-e-trabalho-a-realidade-ja-mudou-e-voce/'
        },
    ],
    // CardsTools
    [
        {
            id: 1,
            author: 'MEUS DIVIDENDOS',
            title: 'Cálculo de Dividendos',
            icon: 'https://img.icons8.com/carbon-copy/100/000000/economic-improvement.png',
            url: 'http://mepoupenaweb.uol.com.br/simuladores-online-de-investimentos/simulador-de-investimento/Mixed'
        },
        {
            id: 2,
            author: 'MELHOR CÂMBIO',
            title: 'Conversor de Moedas',
            icon: 'https://img.icons8.com/carbon-copy/100/000000/currency-exchange.png',
            url: 'https://www.melhorcambio.com/conversor-de-moeda'
        },
        {
            id: 3,
            author: 'ME POUPE',
            title: 'Simulador de CDB e Letras de Crédito',
            icon: 'https://img.icons8.com/carbon-copy/100/000000/accounting.png',
            url: 'http://mepoupenaweb.uol.com.br/simuladores-online-de-investimentos/simulador-de-investimento/'
        },
        {
            id: 4,
            author: 'MEUS DIVIDENDOS',
            title: 'Cálculo de Dividendos',
            icon: 'https://img.icons8.com/carbon-copy/100/000000/economic-improvement.png',
            url: 'http://mepoupenaweb.uol.com.br/simuladores-online-de-investimentos/simulador-de-investimento/Mixed'
        },
        {
            id: 5,
            author: 'MELHOR CÂMBIO',
            title: 'Conversor de Moedas',
            icon: 'https://img.icons8.com/carbon-copy/100/000000/currency-exchange.png',
            url: 'https://www.melhorcambio.com/conversor-de-moeda'
        },
        {
            id: 6,
            author: 'ME POUPE',
            title: 'Simulador de CDB e Letras de Crédito',
            icon: 'https://img.icons8.com/carbon-copy/100/000000/accounting.png',
            url: 'http://mepoupenaweb.uol.com.br/simuladores-online-de-investimentos/simulador-de-investimento/'
        },
        {
            id: 7,
            author: 'MEUS DIVIDENDOS',
            title: 'Cálculo de Dividendos',
            icon: 'https://img.icons8.com/carbon-copy/100/000000/economic-improvement.png',
            url: 'http://mepoupenaweb.uol.com.br/simuladores-online-de-investimentos/simulador-de-investimento/Mixed'
        },
        {
            id: 8,
            author: 'MELHOR CÂMBIO',
            title: 'Conversor de Moedas',
            icon: 'https://img.icons8.com/carbon-copy/100/000000/currency-exchange.png',
            url: 'https://www.melhorcambio.com/conversor-de-moeda'
        },
        {
            id: 9,
            author: 'ME POUPE',
            title: 'Simulador de CDB e Letras de Crédito',
            icon: 'https://img.icons8.com/carbon-copy/100/000000/accounting.png',
            url: 'http://mepoupenaweb.uol.com.br/simuladores-online-de-investimentos/simulador-de-investimento/'
        },
        {
            id: 10,
            author: 'MEUS DIVIDENDOS',
            title: 'Cálculo de Dividendos',
            icon: 'https://img.icons8.com/carbon-copy/100/000000/economic-improvement.png',
            url: 'http://mepoupenaweb.uol.com.br/simuladores-online-de-investimentos/simulador-de-investimento/Mixed'
        },
        {
            id: 11,
            author: 'MELHOR CÂMBIO',
            title: 'Conversor de Moedas',
            icon: 'https://img.icons8.com/carbon-copy/100/000000/currency-exchange.png',
            url: 'https://www.melhorcambio.com/conversor-de-moeda'
        },
        {
            id: 12,
            author: 'ME POUPE',
            title: 'Simulador de CDB e Letras de Crédito',
            icon: 'https://img.icons8.com/carbon-copy/100/000000/accounting.png',
            url: 'http://mepoupenaweb.uol.com.br/simuladores-online-de-investimentos/simulador-de-investimento/'
        },
        {
            id: 13,
            author: 'MEUS DIVIDENDOS',
            title: 'Cálculo de Dividendos',
            icon: 'https://img.icons8.com/carbon-copy/100/000000/economic-improvement.png',
            url: 'http://mepoupenaweb.uol.com.br/simuladores-online-de-investimentos/simulador-de-investimento/Mixed'
        },
        {
            id: 14,
            author: 'MELHOR CÂMBIO',
            title: 'Conversor de Moedas',
            icon: 'https://img.icons8.com/carbon-copy/100/000000/currency-exchange.png',
            url: 'https://www.melhorcambio.com/conversor-de-moeda'
        },
        {
            id: 15,
            author: 'ME POUPE',
            title: 'Simulador de CDB e Letras de Crédito',
            icon: 'https://img.icons8.com/carbon-copy/100/000000/accounting.png',
            url: 'http://mepoupenaweb.uol.com.br/simuladores-online-de-investimentos/simulador-de-investimento/'
        },
    ],
]


export default function Learning() {
    const [actualTab, setActualTab] = useState('Finanças')
    const [db, setDb] = useState(DataBase[0])

    function changeTab(tab) {
        switch (tab) {
            case Tabs[1].title :
                setActualTab(Tabs[1].title)
                setDb(DataBase[1])
                // this.flatListRef.scrollToIndex({animated: true, index: 1});
                break;
            case Tabs[2].title :
                setActualTab(Tabs[2].title)
                setDb(DataBase[2])
                // this.flatListRef.scrollToIndex({animated: true, index: 1});
                break;  
            default:
                setActualTab(Tabs[0].title)
                setDb(DataBase[0])
                // this.flatListRef.scrollToIndex({animated: true, index: 1});
        }            
    }


    function showIcon(card) {
        if (card.icon) {
            return <Image style={styles.carIcon} source={{uri: card.icon }}/>
        } else {
            return <Text style={styles.cardDescription}>{card.description}</Text>  
            
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
                    horizontal= {true}
                    data={Tabs}
                    keyExtractor={item => item.id.toString()}
                    contentContainerStyle={{flexGrow: 1, justifyContent: 'space-between'}}                    
                    renderItem={({ item:tabs }) => (
                        <TouchableOpacity 
                        style={styles.tabsBtn} 
                        onPress={() => {changeTab(tabs.title)} } 
                        >
                            <Text style={[styles.tabsBtnText, actualTab == tabs.title && styles.tabsBtnTextSelected]}>
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
                    showsHorizontalScrollIndicator={false}
                    snapToAlignment={"center"} 
                    snapToInterval={405}
                    decelerationRate={"normal"}
                    pagingEnabled
                    keyExtractor={item => item.id.toString()}   
                    data={db}
                    extraData={actualTab}
                    renderItem={({ item:card }) => (
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
                                    onPress={() => Linking.openURL(card.url)}>
                                    <Text style={styles.accessCardText}>Acessar</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                />
            </SafeAreaView>
            
            <View style={styles.navBar} ><NavBar page={2}/></View>
        </View>
    )
}

