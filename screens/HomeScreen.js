import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { StyleSheet, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';
import CustomListItem from '../components/CustomListItem';
import { auth, db } from '../firebase';
import { SimpleLineIcons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {

    const [chats, setChats] = useState([]);

    const signOutUser = () => {
        auth.signOut().then(() => {
            navigation.replace("Login");
        });
    };

    useEffect(() => {
        const unsubscribe = db.collection('chats').onSnapshot(snapshot => (
            setChats(snapshot.docs.map(doc => ({
                id : doc.id,
                data : doc.data()
            })))
        ))
        return unsubscribe;
    },[])


    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Pigeon",
            headerLeft: () => (
                <View style={{marginRight:10}}>
                    <TouchableOpacity onPress={signOutUser} activeOpacity={0.5}>
                        <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }} />
                    </TouchableOpacity>
                    
                </View>
            ),
            headerRight:() => (
                <View style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    width: 80,
                }}>
                    <TouchableOpacity activeOpacity={0.5}>
                        <SimpleLineIcons onPress={() => navigation.navigate("AddChat")} name="pencil" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            )

        })
    }, [navigation]);


    return (
        <SafeAreaView>
            <ScrollView>
                <StatusBar style="light" />
                {chats.map(({id, data:{chatName} }) => (
                    <CustomListItem key={id} id={id} chatName={chatName} />
                ))} 
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen

const styles = StyleSheet.create({})
