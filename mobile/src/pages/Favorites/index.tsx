import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-community/async-storage";

import styles from "./styles";

import TeacherItem, { Teacher } from "../../components/TeacherItem/indes";
import PageHeader from "../../components/PageHeader";
import { useFocusEffect } from "@react-navigation/native";

function Favorites() {
    const [favoritedTeachers, setFavoritedTeachers] = useState([]);

    function loadFavorites() {
        AsyncStorage.getItem("favorites").then((response) => {
            if (response) {
                const teachers = JSON.parse(response);
                setFavoritedTeachers(teachers);
            }
        });
    }

    useFocusEffect(() => {
        loadFavorites();
    });

    return (
        <View style={styles.container}>
            <PageHeader title="Meus proffys favoritos"></PageHeader>

            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            >

                {
                    favoritedTeachers.map((teacher: Teacher) => 
                        <TeacherItem key={teacher.id} teacher={teacher} favorited />)
                }
            </ScrollView>
        </View>
    );
}

export default Favorites;
