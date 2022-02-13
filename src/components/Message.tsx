import React from "react";
import { Button, Text, View } from "react-native";
import { useAppDispatch, useAppSelector } from "../hooks";
import { setMessage } from "../redux/messageSlice";

const Message = () => {
    const dispatch = useAppDispatch();
    const { message } = useAppSelector(state => state.message);

    const handlePress = () => {
        dispatch(setMessage('Message from Component'));
    };

    return (
        <View style={{
            marginTop: 64,
            paddingHorizontal: 24,
        }}>
            <Text>{message}</Text>
            <Button title={'Set Message'} onPress={handlePress} />
        </View>
    );
};

export default Message;