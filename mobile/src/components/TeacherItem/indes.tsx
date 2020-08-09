import React, { useState } from 'react';
import { View, Image, Text, Linking } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsAppIcon from "../../assets/images/icons/whatsapp.png";

export interface Teacher{
    id: number;
    avatar: string;
    bio: string;
    cost: number
    name: string
    subject: string
    whatsapp: string
};

interface TeacherItemProps{
    teacher: Teacher;
    favorited: boolean;
}

const TeacherItem: React.FC<TeacherItemProps> = ({teacher, favorited}) => {

    const {id, avatar, name, bio, cost, subject, whatsapp} = teacher;

    function handleLinkToWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=${whatsapp}`);
    }

    const [isFavorited, setIsFavorited] = useState(favorited);

    async function handleToggleFavorite(){
        let favoritesArray = [];

        if(isFavorited){
            const favorites = await AsyncStorage.getItem("favorites");
            if(favorites){
                favoritesArray = JSON.parse(favorites);
            }

            const favoriteIndex = favoritesArray.findIndex((teacherItem: Teacher) => {
                return teacherItem.id === id;
            });

            favoritesArray.splice(favoriteIndex, 1);

            setIsFavorited(false);
        }else{
            const favorites = await AsyncStorage.getItem("favorites");
            if(favorites){
                favoritesArray = JSON.parse(favorites);
            }
            favoritesArray.push(teacher);

            setIsFavorited(true);
        }

        await AsyncStorage.setItem("favorites", JSON.stringify(favoritesArray));
    }

    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image 
                    style={styles.avatar}
                    source={{uri: avatar}}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.subject}>{subject}</Text>
                </View>

            </View>

            <Text style={styles.bio}>{bio}</Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora {"   "}
                    <Text style={styles.priceValue}>
                        R$ {cost}
                    </Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton 
                        style={[
                            styles.favoriteButton, 
                            isFavorited ? styles.favorited : {} 
                        ]}
                        onPress={handleToggleFavorite}
                    >
                        {isFavorited ? <Image source={unfavoriteIcon}/> : <Image source={heartOutlineIcon}/> }
                    </RectButton>
                    <RectButton onPress={handleLinkToWhatsapp} style={styles.contactButton}>
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