import React from 'react'
import { View } from 'react-native';

import styles from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem/indes';
import { ScrollView } from 'react-native-gesture-handler';

function TeacherList(){
    return(
        <View style={styles.container}>
            <PageHeader title="Proffys disponíveis"></PageHeader>

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

export default TeacherList;