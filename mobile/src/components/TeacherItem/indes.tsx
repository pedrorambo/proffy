import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsAppIcon from "../../assets/images/icons/whatsapp.png";

function TeacherItem(){
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image 
                    style={styles.avatar}
                    source={{uri: "https://avatars3.githubusercontent.com/u/32118136?v=4"}}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Pedro Rambo</Text>
                    <Text style={styles.subject}>Física</Text>
                </View>

            </View>

            <Text style={styles.bio}>
                Biografia de testes testes teste
                {"\n"}
                Teste teste teste steawud ahdwui
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora {"   "}
                    <Text style={styles.priceValue}>
                        R$ 120,00
                    </Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton style={[styles.favoriteButton, styles.favorited]}>
                        {/* <Image source={heartOutlineIcon}/> */}
                        <Image source={unfavoriteIcon}/>
                    </RectButton>
                    <RectButton style={styles.contactButton}>
                        <Image source={whatsAppIcon}/>
                        <Text style={styles.contactButtonText}>
                            Entrar em contato
                        </Text>
                    </RectButton>
                </View>
            </View>

        </View>
    )
}

export default TeacherItem;