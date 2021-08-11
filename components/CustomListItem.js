import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';

const customListItem = ({id, chatName, enterChat}) => {
    return (
        <ListItem key={id} bottomDivider >
            <Avatar 
            rounded
            source={{
                uri:
                "http://www.connectingcouples.us/wp-content/uploads/2019/07/avatar-placeholder.png"
            }}
             />
             <ListItem.Content>
                 <ListItem.Title style={{fontWeight:"800"}}>{chatName}</ListItem.Title>
                 <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
                     Hi bro, what's up ! 
                 </ListItem.Subtitle>
             </ListItem.Content>
        </ListItem>
    )
}

export default customListItem;

const styles = StyleSheet.create({})
