import React from 'react'
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import styles from './styles';

import TeacherItem from '../../components/TeacherItem/indes';
import PageHeader from '../../components/PageHeader';

function Favorites(){
    return(
        <View style={styles.container}>
            <PageHeader title="Meus proffys favoritos"></PageHeader>

            <ScrollView 
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16, 
                }}
            >
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </ScrollView>
        </View>
    );
}

export default Favorites;