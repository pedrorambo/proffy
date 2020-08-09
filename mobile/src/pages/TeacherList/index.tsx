import React from 'react'
import { View, Text } from 'react-native';

import styles from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem/indes';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

function TeacherList(){
    return(
        <View style={styles.container}>
            <PageHeader title="Proffys disponíveis">
                <View style={styles.searchForm}>
                    <Text style={styles.label}>Matéira</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder="Qual a matéria?"
                        placeholderTextColor="#C1BCCC"
                    ></TextInput> 
                    
                    <View style={styles.inputGroup}>
                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>Dia da semana</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Qual o dia?"
                                placeholderTextColor="#C1BCCC"
                            ></TextInput>
                        </View>
                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>Horário</Text>
                            <TextInput 
                                style={styles.input}
                                placeholder="Qual o horário?"
                                placeholderTextColor="#C1BCCC"
                            ></TextInput>
                        </View>
                    </View>
                </View>
            </PageHeader>

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