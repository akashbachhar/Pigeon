import { StatusBar } from 'expo-status-bar';
import React, { useLayoutEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';
import CustomListItem from '../components/CustomListItem';
import { auth } from '../firebase';
import { AntDesign, SimpleLineIcons} from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {

    const signOutUser = () => {
        auth.signOut().then(() => {
            navigation.replace("Login");
        });
    }


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
                        <SimpleLineIcons name="pencil" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            )

        })
    }, [navigation]);


    return (
        <SafeAreaView>
            <ScrollView>
                <StatusBar style="light" />
                <CustomListItem />
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
